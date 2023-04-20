---
layout: post
title: "SPDK As IPU Firmware - Part 1"
author: Ben Walker
categories: dev
---

Welcome to the first post in a new series on SPDK as IPU firmware. For those not
familiar with the term Infrastructure Processing Unit (IPU), these are PCIe
cards attached to a host system that offload "infrastructure" work, usually for
a cloud or hyper-converged service provider. In terms familiar to SPDK
developers, these cards typically have some hardware that's capable of
presenting what appear to be physical NVMe or virtio-blk/scsi devices to the
host system, but then may forward any I/O sent to that device over the network.

These IPUs are usually implemented as some hardware or FPGA-based PCI endpoint
that either has multiple physical functions or supports SR-IOV, combined with an
SoC. That SoC typically runs Linux or at least some mostly POSIX-like OS. To
keep these cards very flexible, most of the decision making logic *usually* is
done in software ("firmware") running on that SoC, and only the data movement is
handled by hardware.

That means that there must be some code running on the SoC that implements the
"back-end" of these hardware endpoints. That code needs to be able to handle
register reads and writes to or from the device's BAR and make the device appear
as a spec-compliant physical device. For example, if the PCI endpoint claims to
be an NVMe device, then the host driver is going to set up an admin queue, write
the EN bit, and wait for the RDY bit to flip to 1. The software running on the
SoC has to perform all of that emulation - the hardware typically just funnels
the register accesses between the host and the SoC but has little or no logic of
its own.

After the NVMe device comes online, the host driver is going to submit admin
commands which then will create I/O queues. The I/O queues live in host memory
and the doorbells are registers in the BAR. Some implementations may
automatically handle doorbell writes in hardware and deliver the incoming
commands to the SoC via some queue mechanism, but some may simply notify the SoC
that the doorbell was written to and software kicks off a DMA to tranfser the
latest entries. But one way or another, the command arrives in the SoC memory
and software has to parse it and decide what action to take.

## Ok, but where does SPDK come in?

Some IPU vendors decided to write their own firmware from scratch.
But others made an important observation - NVMe-oF targets already emulate most
of the register reads and writes, and essentially all of the admin and I/O
commands. With a few simple tweaks, couldn't an NVMe-oF target be
adapted to have a "PCIe" transport in front rather than one of the fabrics?

With the introduction of the NVMe 2.0 specification, the terminology around this
has all become much clearer so allow me to deviate for just a moment. When NVMe
was first created, there was only PCIe. Then NVMe-oF was added which brought in
the concept of "transports" - alternatives to PCIe like TCP or RDMA - that could
move NVMe commands between two systems. But these fabrics transports do behave
differently than the PCIe transport. To address this, NVMe 2.0 formalized two
categories of transports - "Memory-based" and "Message-based". For a clear
description, see the "Theory of Operation" chapter in the NVMe 2.0
specification. The two categories have different semantics in a few cases, in
particular around establishing the admin queue and in register reads and writes,
but at least it is all formalized and written down.

So back to the question - couldn't an existing NVMe-oF target designed for
"message-based" transports be adapted to support a "memory-based" transport? And
it turns out, this question had already been answered. SPDK added a
"memory-based" transport that emulates a PCIe device to a virtual machine called
`vfio-user`, and had already done all of the work to generalize the existing
NVMe-oF target code to handle both categories of transports. And this is exactly
what several IPU vendors are now leveraging - they simply write a memory-based
transport that talks to their hardware device from within the IPU, but then use
the SPDK NVMe-oF target to handle all of the register emulation and command
processing.

## Sounds great! Are we done?

A device vendor can write a transport plugin to SPDK and have full NVMe device
emulation working very quickly. But the reality is that we're far from done. It
turns out there's a whole host of cool offloads that SPDK needs to enable to
move data around efficiently. If we imagine doing a WRITE operation from the
host system's NVMe driver, the data starts out in host system memory, and then
may get transformed in a number of ways before being sent out on the wire to
whatever backend remote server will really handle it. These transformations
include things like crypto and compression, but also DIF/DIX, checksumming, and
more. And often the hardware is capable of doing those transformations inline,
as the data is being either moved from host to SoC memory, or even as the data
is being sent directly from the host on the wire. But, how does SPDK even describe and
operate on memory that's up on the host? And now we're getting to what this
series of posts is really going to deal with.

## An example

Let's dive into an example of a device that presents an NVMe device to a host
server, does data at rest encryption, and forwards to a remote target using
NVMe-oF/TCP. Imagine the IPU itself is running Linux and contains three separate
PCI devices - one that presents NVMe devices to the host system (let's call it
the NVMe endpoint), one device that can perform both copy and encrypt operations
on memory in both the host and on the IPU (let's call it the DMA engine), and a
NIC.

![IPU Diagram](../../../../../img/blog/ipu_diagram.png "Model IPU Diagram"){: .text-center }

Here's the basic data flow:
* The host NVMe driver issues an NVM write command on an NVMe queue pair by
  writing it into the submission queue and ringing the doorbell.
* The NVMe endpoint hardware notifies the IPU software that a command has
  arrived. The command is an NVM write and it describes memory located on the
  host system.
* The IPU software programs the DMA engine to transfer the data from the host to
  IPU-local memory.
* The IPU software then does an encryption operation on that data in IPU-local
  memory using the DMA engine.
* Finally, the IPU software sends the encrypted data to the remote target using
  NVMe-oF/TCP.

Let's imagine we implement this data path within the existing SPDK framework.
Assume the NVMe endpoint hardware is fairly "dumb" and just shuttles commands
between the host and the IPU. So as discussed above, we add a custom transport
to send and receive the commands using our NVMe hardware endpoint into the SPDK
NVMe-oF target to get our register and command handling set up.

We can write an accel module for our DMA engine hardware to fit into SPDK's
`accel` framework for encryption and copy operations. SPDK layers bdevs to build
its data processing pipeline, and there is already a crypto bdev we'll leverage
to route the requests to the accel framework.

To talk to our NIC, we'll use the Linux kernel networking stack, assuming the
NIC has a Linux driver. We've then built a pipeline of the NVMe-oF target with a
custom transport in the front, forwarding to a crypto bdev on top of an nvme
bdev to do NVMe-oF/TCP. We've plugged in drivers for our IPU hardware, and we're
otherwise using vanilla SPDK as our full data path. We'll keep this example in
mind for the rest of the discussion.

## Transferring Data From The Host

While it was straightforward to plug in drivers to the existing SPDK extension
points, it's not clear how we should instruct the DMA engine to copy data from
the host to our system memory (the third step in the example above). The
existing `accel` framework APIs only take source and destination addresses, but
in this case, the source address isn't local. We refer to this as memory
residing in a different memory domain than the local one - in this case the
"host" domain. Passing this information through the `accel` framework is
necessary to program the DMA engine to transfer from the correct source
location.

SPDK now has a framework for declaring and enumerating memory domains and
defining memory descriptors that reference memory in those domains. The
interface can be found in `include/spdk/dma.h`. I'd like to thank both Alexey
Marchuk and Konrad Sztyber for all of their work to make this a reality.

In our example, there would be a host memory domain and the local system memory
domain (which always exists). To make the whole example flow work, our custom
NVMe-oF transport would parse the incoming NVM write command to extract the host
addresses, create a memory descriptor indicating it's in a separate memory
domain, and pass it down to the accel framework for the data copy operation.
With that, we can get our whole example flow working.

# Next Steps

That gets our basic data flow working and we can handle reads and writes. In the
next post, we'll discuss some efficiency improvements around enabling crypto. Then
we'll discuss more advanced offloads including multiple chained offloads and the
final design of the framework in the third post in this series.

Check back in a few days for the next post!
