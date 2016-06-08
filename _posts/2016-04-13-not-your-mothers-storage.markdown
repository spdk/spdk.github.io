---
layout: post
title: "Why SPDK?"
date: 2016-04-13 13:00:00 -0700
category: update
author: Jonathan Stern
img: SPDK_text_2.png
---

Solid-state storage media is in the process of taking over the data center. Current-generation flash storage enjoys significant advantages in performance, power consumption, and rack density over rotational media. These advantages will continue to grow as next-generation media enter the marketplace.

Customers integrating solid-state media, such as [Intel® Data Center SSDs](http://www.intel.com/content/www/us/en/solid-state-drives/data-center-family.html) like the P3700 Series, also face a major challenge: because both the throughput and latency are so much better than that of a spinning disk, storage software now consumes a larger percentage of the total transaction time. In other words, the performance and efficiency of the storage software stack is increasingly critical to the overall storage system. With upcoming [Intel® Optane® SSDs](http://www.intel.com/content/www/us/en/architecture-and-technology/non-volatile-memory.html), an order of magnitude reduction in hardware latency may strain even flash-optimized architectures. The hardware latency improvements may simply be lower than the software architectures were designed to handle.

To help storage OEMs and ISVs address this challenge, Intel has created a growing set of drivers and components called the Storage Performance Development Kit (SPDK). The goal of SPDK is to work in an open-source, community-oriented manner to create software components that maximize the efficiency and performance of Intel’s processor and storage technologies. SPDK has demonstrated that millions of I/Os per second are easily attainable using a few processor cores and a few NVMe drives -- no additional offload hardware needed. The SPDK team has open sourced the user mode NVMe driver and Intel® I/O Acceleration Technology (I/OAT) DMA engine (codenamed Crystal Beach DMA) to the community under a permissive BSD license. The code is available directly through [the SPDK GitHub page](http://github.com/spdk/spdk), with other elements of the development kit slated to be open sourced throughout 2016. A few additional components used to initially develop and validate SPDK will remain under Intel license.

What is SPDK?
--------------

SPDK is a collection of libraries to be used in customer storage applications. Currently, it consists of an NVMe driver and an I/OAT driver with significantly better performance than anything else available. The extremely high performance is achieved using two key techniques: SPDK runs everything in user space and in polled-mode. Let’s take a closer look at these two software engineering terms.

First, let's quickly recap the difference between user space and kernel space in a general purpose computer. User space is where applications exist, running in their own protected memory and execution space without direct access to hardware. When an application needs to interact with the hardware, say to write a file to disk, it makes a kernel system call, which drives a context switch to kernel space. The kernel then copies the data from the user space process and executes trusted code (like a device driver) to write it out to disk.

By running our device driver code in user space, the SPDK avoids the substantial overhead of system calls and data copies. This allows more cycles to be spent doing the _actual storing of the data._ Regardless of the complexity of the other storage feature set (deduplication, encryption, compression, or plain block storage), fewer wasted cycles means better performance.

Second, SPDK uses polling instead of interrupts. By continually polling for both incoming and completed work at the hardware, SPDK can dramatically reduce the latency of a single I/O and essentially eliminate software jitter. More technically, polling allows the software to save the expense of invoking the kernel interrupt handler. This saves a context switch (swapping out the application stack, swapping in the interrupt handler, then swapping back), which has the side effect of preventing displacement of application data from the limited CPU cache space by kernel interrupt handler data (aka cache pollution). It also allows users to determine how much CPU time to allocate to each task in a pipeline instead of allowing the kernel scheduler to decide, giving maximum control to the user instead of the OS. It also means that the software threads never get preempted and are always available when a new I/O arrives.

The drawback is that polling prevents the CPU from going idle during periods of low I/O. In practice, there is very little penalty for using polling in dedicated storage systems, as the efficiency gains make the "break-even" point very low for all but the most intermittent workloads.

Conclusion
----------
Intel recognizes that next generation media shifts the storage bottleneck from media to software. To help customers capitalize on this historic moment, the SPDK team has created a set of highly scalable, efficient, and extensible drivers and libraries to aid in the adoption of current and forthcoming storage media. SPDK was created as a collaborative, open-source project to draw support from storage experts across the industry, both in the commercial and open source domains, to create relevant and useful components for all.

To contact our team for specific questions about SPDK, please fill out a [contact request form.](https://software.intel.com/en-us/form/596441)

`*Other names and brands may be claimed as the property of others.`

© 2016 Intel Corporation.
