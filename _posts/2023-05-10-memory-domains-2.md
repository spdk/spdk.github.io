---
layout: post
title: "SPDK As IPU Firmware - Part 2"
author: Ben Walker
categories: dev
---

Welcome to the second post in our series on SPDK as IPU firmware. The
[previous post](https://spdk.io/dev/2023/04/20/memory-domains-1/) laid the
groundwork for using SPDK on an IPU. Now we're going to focus on enabling
inline, block-level encryption in a more efficient way. If it isn't fresh in
your mind, take a moment to review our example scenario from the last post.
We'll start from there.

## Eliminating Data Copies

Now that we have the basic flow working, we make a simple observation. The DMA
engine does both encryption and copy operations and it's aware of the two memory
domains. So, couldn't we ask the DMA engine to do the encryption as part of the
copy from the host? Absolutely! But to do so requires a layering violation. The
custom NVMe-oF transport is responsible for triggering the copy from the host,
and the encryption bdev module decides that the data needs to be encrypted.
These are two different layers in SPDK's architecture, so how can we combine
them without crossing the boundary?

To tackle this issue, we allowed requests to the bdev layer to be associated
with memory in a memory domain. The NVMe-oF custom transport simply constructs a
description of memory in the host memory domain and then forwards the request to
the bdev layer without triggering a copy. The bdev crypto module gets the
request and it uses the current memory location (in the host domain) as the
source of the encryption operation and IPU-local memory as the destination. And
just like that, we're good to go!

Except, what would happen if our example flow didn't have the data at rest
encryption bdev? The memory would be up on the host and the request would
traverse the bdev layer, eventually landing in the nvme bdev module where it is going to be
sent as an NVMe-oF/TCP request. But we're just using standard Linux sockets for
networking, so there's no opportunity to do a special TCP send operation from
the host memory directly. Barring creative ways to solve that, we need a generic
way for components in SPDK to trigger a copy between
two domains. And that's exactly what we've done - every memory domain has `push`
and `pull` function pointers that are filled in when the memory domain is
created at start up. Any software can request memory in a remote domain to be
pulled to a local buffer, or to push a local buffer to the remote memory domain,
which triggers these callbacks. For our example, these callbacks would be
wrapped around calls to our DMA engine hardware.

So our DMA framework lets us do the following things:

1. Describe memory in a remote memory domain, using the appropriate addresses in
   that domain.
2. Initiate data transfers between the system memory domain (i.e. regular memory
   for our SoC) and the remote memory domain without knowledge of the hardware
   mechanism that does the transfer.
3. Enumerate the registered memory domains in the system.

This is all upstream and supported in the current SPDK release. The API is defined
in `include/spdk/dma.h`.

# Address Translation

For our particular example, the "host" memory domain would have `push` and
`pull` function pointers that issue requests to our hardware DMA engine. The API
supports other simple operations, such as zeroing, which are also obvious enough.
However, each memory domain supports an additional, somewhat tricky operation -
`translate`.

An IPU may present more than one PCI "function" to the host. In fact, they
almost all do - network function(s) and NVMe function(s). When the host operating
system initializes these devices, it very likely configures them to run behind
the IOMMU. That means that the addresses used by these devices for DMA are I/O
virtual addresses, not physical addresses. And most importantly, *there's no
guarantee that two functions are using the same I/O virtual address table*. For
instance, the host could configure the NVMe function such that address 16 maps to physical
address 64, but configure the NIC function such that address 16 maps to physical address
1024.

But why does that matter? Well, what if we wanted to avoid copying data to the
SoC memory at all, and send directly on the network? This is unlikely for TCP,
but it seems very likely for RDMA fabric backends. Except, in some designs, it's
the NIC doing the DMA at that point rather than the NVMe device. So we need to
translate the addresses from the NVMe function view of host memory, which is
what we got when the NVMe command arrived, to the NIC view of host memory! The
`translate` function does just that - it translates addresses from one memory
domain to another, if possible. This is all implemented as callbacks assigned to
the memory domain, because all of this translation is necessarily platform
specific.

## What's Next?

That's all we'll cover in this post. The next post in the series will handle
performing "chained" operations - crypto + DIF insert specifically - without
extra data copies and describe the final form the framework has taken.

Check back in a few days for the next post in the series!
