---
layout: post
title: "Not Your Mother's Storage"
date: 2016-04-13 13:00:00 -0700
category: update
author: Jonathan Stern
img: SPDK_text_2.png
---

Why SPDK? Why now?
------------

Solid-state storage media is in the process of taking over the data center. Current-generation flash storage enjoys significant advantages in performance, power consumption, and rack density over rotational media. These advantages will continue to grow as next-generation media enter the marketplace.

Customers integrating solid-state media, such as the [Intel® Data Center SSDs](http://www.intel.com/content/www/us/en/solid-state-drives/data-center-family.html) like the P3700 Series, may also face a major challenge: because both the throughput and latency performance are so much better than that of a spinning disk, their storage software now consumes a larger percentage of the total transaction time. In other words, the performance and efficiency of the storage software stack is increasingly critical to the overall storage system. With upcoming [Intel® Optane® SSDs](http://www.intel.com/content/www/us/en/architecture-and-technology/non-volatile-memory.html), an order of magnitude reduction in hardware latency may strain even existing flash-optimized architectures. The hardware latency performance may simply outpace the software architecture that uses it. Even more daunting, the advent of 3D Xpoint® DIMMS will further exacerbate the challenge as media latencies drop yet another order of magnitude. 

To help storage OEMs and ISVs address this challenge, Intel has created a growing set of drivers and components, calling the effort the Storage Performance Development Kit (SPDK). The goal of SPDK is to work in an open-source, community-oriented framework to create software components that maximize the efficiency and performance of Intel’s processor and storage technologies. SPDK has demonstrated that millions of I/Os per second are easily attainable using a few processor cores and a few NVMe drives -- no additional offload hardware needed. The SPDK team has open sourced the user mode NVMe driver and Intel® I/O Acceleration Technology (I/OAT) DMA engine (codenamed Crystal Beach DMA) to the community under permissive BSD license. The code is available directly through [the SPDK github page](http://github.com/spdk/spdk), with other elements of the development kit slated to be open sourced throughout 2016. A few additional components used to initially develop and validate SPDK will remain under Intel license. 

What is SPDK? 
-------------------------------

The extremely high performance is achieved using two key techniques: SPDK runs everything in user space and in polled-mode. Let’s take a closer look at these two software engineering terms.

First, let's quickly recap the difference between user space and kernel space in a general purpose computer. User space is where  applications exist, running in their own protected memory and execution space without direct access to hardware. When an application needs to interact with the hardware, say to write a file to disk, it makes a kernel system call, which drives a context switch to kernel space. The kernel then copies the data from the user space process and executes trusted code(like a device driver) to write it out to disk.

By running our device driver code in user space, the software avoids the substantial overhead of system calls and data copies,  which produce substantial processing overhead as workloads increase. This allows more cycles to be spent doing the _actual storing of the data._ Regardless of the complexity of the other storage feature set (deduplication, encryption, compression, or plain block storage), fewer wasted cycles means better performance.

Second, we need to understand how Polled Mode Drivers (PMDs) differ from regular device drivers. Fundamentally, PMDs are continually awaiting work instead of being dispatched to work. To illustrate this, think of the challenge of hailing a cab downtown on a busy Saturday night: the unpredictability of the wait, spending at least a minute (and sometimes much more) waiting on the curb for a ride. This is what it can be like to get a “ride” for an application doing I/O using a traditional interrupt-dispatched storage I/O driver. On the other hand, imagine the process of getting a cab at the airport. There are a line of cabs, the next one pulling up reliably in just a few seconds to transport passengers to their intended destinations. This is how PMDs work and how all the components of SPDK are designed. Packets and blocks are dispatched immediately and time spent waiting is minimized, resulting in lower latency, more consistent latency (less jitter), and improved throughput.

More technically, PMDs save the expense of invoking the kernel interrupt handler by constantly polling for I/O queue completions. This saves a context switch (swapping out the application stack, swapping in the interrupt handler, then swapping back), which has the side effect of preventing displacement of application data from the limited CPU cache space by kernel interrupt handler data (aka cache pollution). It also allows users to determine how much CPU time to allocate to each task in a pipeline instead of allowing the kernel scheduler to decide, giving maximum control to the user instead of the OS. 

The drawback of PMDs is that polling prevents the CPU from going idle during periods of low I/O. In practice, there is very little penalty for using PMDs in dedicated storage systems, as the efficiency gains make the "break-even" point very low for all but the most intermittent workloads.

SPDK Component Overview
-----------------------

SPDK is composed of numerous subcomponents, interlinked and sharing the common elements of user level and polled-mode operation. Each of these components was created to overcome a specific performance bottleneck encountered while creating the end-to-end SPDK architecture. However, each of these components can also be integrated into non-SPDK architectures, allowing customers to leverage the experience and techniques used within SPDK to accelerate their own software stacks. 

There are three basic categories of subcomponents: the network front end, the processing framework, and the back end.

The front end is composed of the Data Plane Development Kit (DPDK) NIC driver. DPDK provides a framework for high-performance packet processing at the NIC, providing a fast path for the data to arrive from the NIC to user space. Customers who already utilize DPDK will find that SPDK uses an analogous execution and threading model, which extends the high-performance data processing framework beyond the network packet layer to actual storage media. 

The processing framework is composed of some kind of block storage protocol implementation (iSCSI, iSER, NVMe over Fabrics, etc) and the Block Device Abstraction Layer (BDAL). By providing a single abstraction layer between the block protocol layer and the backend, we decouple the back end driver layer from the block protocol layer. The BDAL layer allows use of a variety of back ends (say, NVMe and RAM disk devices) or multiple block storage protocols (say iSCSI and NVMe over Fabrics).

Finally the data reaches the back-end drivers, where the interactions with the physical block devices take place; that is, the reads and writes to media. SPDK includes user-space PMDs for several storage media: NVMe devices; Linux AIO devices such as traditional spinning disks; memory drivers for block-addressed memory applications (for example, RAM disks or NVDIMMs); and devices that can use the Intel® I/O Acceleration Technology (I/OAT code-named Crystal Beach DMA). This suite of back-end drivers spans the spectrum of storage device performance tiers, ensuring relevance for nearly every storage application.

Conclusion
----------
Intel recognizes that next generation media shifts the storage bottleneck from media to software. To help customers capitalize on this historic moment, the SPDK team has created a set of highly scalable, efficient, and extensible drivers and libraries to aid in the adoption of current and forthcoming storage media. SPDK was created as collaborative, open-source project to draw support from storage experts across the industry, both in the commercial and open source domains, to create relevant and useful components for all.

To contact our team for specific questions about SPDK, please fill out a [contact request form.](https://software.intel.com/en-us/form/596441)

`*Other names and brands may be claimed as the property of others.`

© 2015 Intel Corporation.
