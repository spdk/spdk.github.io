---
layout: post
title: "SPDK As IPU Firmware - Part 3"
author: Ben Walker
categories: dev
---

Welcome to the third and final post in our series on SPDK as IPU firmware! In
[part 1](https://spdk.io/dev/2023/04/20/memory-domains-1/) we discussed the
addition of memory domains and in
[part 2](https://spdk.io/dev/2023/05/10/memory-domains-2/) we focused on
avoiding data copies for crypto and on address translation. So let's pick up
from there.

## Chaining

Allow me to throw another wrinkle into the example we've been using. Let's say
that we want the IPU to perform both data at rest encryption AND calculate T10
DIF checksums on every block. Additionally, let's suppose that our IPU has a DMA
engine that's capable of performing both these tasks as a single operation. How
can we make this work?

In the SPDK model we layer bdevs to build our data processing pipeline, and we
already have a crypto bdev on top of an nvme bdev. Ideally, we'd insert a DIF
bdev (which does not currently exist, but let's imagine one) between the crypto
and the nvme bdevs to add this capability. Let's write out the steps and see
where we end up.

* The NVM write command arrives in the custom NVMe-oF transport. This is
  packaged up into a memory descriptor that indicates the data is in a remote
  memory domain and sent to the bdev layer.
* The crypto bdev receives the request and sets up an encryption operation from
  the source (host memory) to a local buffer. Once complete, it forwards the
  request to the next bdev
* The dif bdev receives the encrypted data and sets up DIF INSERT operation from
  the local IPU memory to another local buffer. Once complete, it forwards the
  request to the next bdev
* The nvme bdev gets the data buffer and sends it using NVMe-oF/TCP.

But we weren't able to leverage our combined crypto+dif hardware offload. That's
not what we wanted at all. What can we do?

To solve this, the `accel` framework gains a new primitive called an
`spdk_accel_sequence`. Each bdev request can now be associated with a sequence
object and the sequence can be asked where the data would be if the sequence
were to execute. Let's write out the same set of steps but using a sequence
primitive:

* The NVM write command arrives in the custom NVMe-oF transport. This is
  packaged up into a memory descriptor that indicates the data is in a remote
  memory domain. A sequence object is created that does a data copy from the
  host memory to a local buffer in system memory.
* The crypto bdev receives the request and appends an encryption operation to
  the sequence from the source (the local buffer at the end of the sequence) to
  a newly allocated local buffer. It then forwards the request to the next bdev.
  Note that the encryption operation has not executed yet.
* The dif bdev receives the request and appends a DIF INSERT operation to the
  sequence from the source (the local encrypted buffer) to a newly allocated
  local buffer. It then forwards the request to the next bdev. Note that the DIF
  INSERT operation has not executed yet.
* The nvme bdev receives the request and wants to send it over a TCP socket. To
  do this, the data must be in local memory, so it requests that the sequence
  executes. This triggers the whole chain of 3 steps - copy, encrypt, DIF
  insert. When the sequence completes, the data is in the last buffer in the
  sequence and the nvme bdev sends it.

But that's actually worse than before - we've added an extra data copy and
allocated more temporary buffers. There's still two fundamental problems to be
solved:

* We need some way to look holistically at a sequence and optimize it into
  combined operations.
* We need to avoid allocating so many temporary buffers, especially if the
  optimizer later removes their use.

## Adding An Optimization Pass

Before a sequence is executed, two optimization passes run. First, a generic
pass to eliminate unnecessary data copies executes. By modifying source and
destination addresses, most regular data copy operations can be removed. The
remaining optimizations often require knowledge of the hardware that we can't
bake into a generic framework like SPDK. To deal with this, the `accel`
framework now has the concept of a platform driver that can be registered which
is responsible for performing the second optimization pass. If no platform
driver exists, the second pass is simply skipped. In our example, the first pass
is sufficient to remove the first data copy, resulting in a sequence that does
an encrypt from the host to a temporary buffer, then does the DIF generation to
the final memory location.

However, let's imagine we write a platform driver for our SoC product that
understands that our DMA engine can do the encryption and DIF INSERT in a single
operation. This platform driver inspects the sequence, sees that it contains two
operations that can be combined, and ships it down to the hardware as a single
operation. Now we've really gotten somewhere - this is much more efficient than
before.

## Avoiding Unnecessary Scratch Buffers

There were three buffers allocated in local IPU memory for the above scenario -
one to be the target of the copy from the host and the source of the encryption,
one for the destination of the encryption and the source of the DIF INSERT, and
one for the destination of the DIF INSERT. But after the platform driver ran, we
only needed that final destination buffer. The other two never needed to exist.
While they're unused and don't impact the performance of the software, they do
require having additional memory allocated and that's a waste. We should get rid
of them.

Except, in order to append an operation to a sequence an output location must be
provided. It could, after all, end up being the last step of the sequence, or
there may be no chaining available during the optimization pass. To solve this,
the `accel` framework creates a... memory domain! This memory domain is not
backed by any real memory - it's just an address space - and users of the
`accel` framework can "allocate" memory from it to be used as the destination of
operations added to a sequence. So let's rewrite the sequence of steps above
using this scratch space:

* The NVM write command arrives in the custom NVMe-oF transport. This is
  packaged up into a memory descriptor that indicates the data is in a remote
  memory domain. A sequence object is created that does a data copy from the
  host memory to a region in this new accel memory domain.
* The crypto bdev receives the request and appends an encryption operation to
  the sequence from the source (the region in the accel memory domain) to
  another region in the accel memory domain. It then forwards the request to the
  next bdev.
* The dif bdev receives the request and appends a DIF INSERT operation to the
  sequence from the source (a region in the accel memory domain) to another
  region in the accel memory domain. It then forwards the request to the next
  bdev.
* The nvme bdev receives the request and wants to send it over a TCP socket. To
  do this, the data must be in local memory, so it appends a copy from the
  region in the accel memory domain to a local buffer and requests that the
  sequence executes. This triggers the whole chain of steps - copy, encrypt, DIF
  insert, copy. When the sequence completes, the data is in the last buffer in
  the sequence and the nvme bdev sends it.

When the sequence executes, the generic copy elision optimization first runs.
It eliminates the first data copy from the host to the accel region and makes
the encryption step use the host memory as the source. It also eliminates the
final data copy by setting the destination of the DIF INSERT to the location
that copy was targeting. Then the platform driver runs and recognizes that it's
two operations - encrypt then dif - and that can be done as a single operation,
so it does so.

The result of all of this is that there was a single data buffer allocated in
IPU memory and a single hardware operation to perform the data movement and
transformation from the host to the IPU memory, but we've kept all of SPDK's
layering and composability.

To close this out, let's imagine one more scenario where we don't have hardware
that can do this combined encrypt plus DIF INSERT. In that case, we really do
need a temporary buffer on the IPU between the two steps, but all we have is
this fake region of memory in the accel memory domain. To deal with this, the
`accel` framework has access to the global SPDK memory pool infrastructure and
it simply allocates a temporary buffer and frees it on your behalf. That's
simple enough, and it promotes good reuse of these temporary buffers to keep
them in cache. Problem solved.

## Wrapping Up

We feel this framework is an incredibly expressive, powerful, and clear
mechanism for writing software on IPUs and we hope to see it put to good use. We
also acknowledge that for the majority of software developers who are using SPDK
on a regular server, it'd be great not to deal with this at all. So we've taken
care to make all of this optional and when it's not used everything nicely falls
back to assuming data is in local system memory. As always, we'd love to hear
feedback on how this works on the various platforms and IPU products coming to
market, so please find us in our Slack channel or on the mailing list!
