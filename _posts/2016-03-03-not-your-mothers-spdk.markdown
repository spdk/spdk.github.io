---
layout: post
title: "Not Your Mother's SPDK"
date: 2016-03-03 13:00:00 -0700
category: update
---

Introduction
------------

Solid-state storage media is in the process of taking over the data center. Current- generation flash storage enjoys significant advantages in performance, power consumption, and rack density over rotational media. These advantages will continue to grow as next-generation media enter the marketplace.

Introduction to the Storage Performance Development Kit (SPDK)Customers integrating current solid-state media, such as the Intel® P3700 Non-Volatile Memory Express* (NVMe*) drive, face a major challenge: because the throughput and latency performance are so much better than that of a spinning disk, the storage software now consumes a larger percentage of the total transaction time. In other words, the performance and efficiency of the storage software stack is increasingly critical to the overall storage system. As storage media continues to evolve, it risks outstripping the software architectures that use it, and in coming years the storage media landscape will continue evolving at an incredible pace.

To help storage OEMs and ISVs integrate this hardware, Intel has created a set of drivers and a complete, end-to-end reference storage architecture, calling the effort the Storage Performance Development Kit (SPDK). The goal of SPDK is to highlight the outstanding efficiency and performance enabled by using Intel’s networking, processing, and storage technologies together. By running software designed from the silicon up, SPDK has demonstrated that millions of I/Os per second are easily attainable by using a few processor cores and a few NVMe drives for storage with no additional offload hardware. Intel provides the entire Linux* reference architecture source code free of charge under an Intel license, and has open sourced the user mode NVMe driver to the community through 01.org, with other elements of the development kit slated to be open sourced throughout 2016.

Software Architectural Overview
-------------------------------

How does SPDK work? The extremely high performance is achieved using two key techniques: running at user level and in polled-mode. Let’s take a closer look at these two software engineering terms.

First, running our device driver code at user level means that, by definition, driver code does not run in the kernel. Avoiding the kernel context switches and interrupts saves a significant amount of processing overhead, allowing more cycles to be spent doing the actual storing of the data. Regardless of the complexity of the storage algorithms (deduplication, encryption, compression, or plain block storage), fewer wasted cycles means better performance.

Second, Polled Mode Drivers (PMDs) are continually awaiting work instead of being dispatched to work. Think of the challenge of hailing a cab downtown on a busy Saturday night, hands waving as cab after cab passes with someone already in the back seat. Think of the unpredictability of the wait, the impossibility of saying how many minutes might be spent waiting on the curb for a ride. This is what it can be like to get a “ride” for a packet or block of data in a traditional interrupt-dispatched storage I/O driver. On the other hand, imagine the process of getting a cab at the airport. There is a cab driver watching, sitting at the front of the line, pulling up reliably in a few seconds to transport passengers and cargo to their intended destinations. This is how PMDs work and how all the components of SPDK are designed. Packets and blocks are dispatched immediately and time spent waiting is minimized, resulting in lower latency, more consistent latency (less jitter), and improved throughput.

SPDK is composed of numerous subcomponents, interlinked and sharing the common elements of user level and polled-mode operation. Each of these components was created to overcome a specific performance bottleneck encountered while creating the end-to-end SPDK architecture. However, each of these components can also be integrated into non-SPDK architectures, allowing customers to leverage the experience and techniques used within SPDK to accelerate their own software. For example, the Userspace Network Services (UNS) library was created to overcome the performance limits of the Linux kernel TCP/IP stack. By creating a user-mode, polled implementation of the TCP/IP stack, SPDK was able to realize substantially higher IOPS performance by spending fewer processor cycles handling TCP/IP packet sorting and processing.

SPDK Component Overview
-----------------------
![Block Diagram of SPDK Components](https://software.intel.com/sites/default/files/managed/a8/ff/introduction-to-the-storage-performance-development-kit-spdk-fig2.png)

There are three basic categories of subcomponents: the network front end, the processing framework, and the back end.

The front end is composed of the Data Plane Development Kit (DPDK) NIC driver and the Userspace Networking Services (UNS) components. DPDK provides a framework for high-performance packet processing at the NIC, providing a fast path for the data to arrive from the NIC to user space. The UNS code then takes over, cracking the TCP/IP packets and forming the iSCSI commands.

At this point the processing framework takes the packet contents and translates the iSCSI commands into SCSI block-level commands. However, before it sends these commands to the back-end drivers, SPDK presents an API framework to add customer-specific features—“special sauce”—within the SPDK framework (see the green box in the figure above). Examples might include caching, deduplication and compression of data, encryption, or RAID or Erasure Coding calculations. Examples of these kinds of features are included with SPDK, though these are solely intended to help us model real-world use cases and should not be confused with production-ready implementations.

Finally the data reaches the back-end drivers, where the interactions with the physical block devices take place; that is, the reads and writes. SPDK includes user-level PMDs for several storage media: NVMe devices; Linux AIO devices such as traditional spinning disks; and memory drivers for block-addressed memory applications (for example, RAMDISKS) and devices that can use the Intel® I/O Acceleration Technology (code-named Crystal Beach DMA). This suite of back-end drivers spans the spectrum of storage device performance tiers, ensuring relevance for nearly every storage application.

Q&A
---

SPDK does not fit every storage architecture. Here are a few questions that might help users determine if SPDK components are a good fit for their architecture:

Is the storage system based on Linux?
        SPDK is currently tested and supported only on Linux.

Does the performance path of the storage system currently run in user mode?
        SPDK is able to improve performance and efficiency by running the performance path from NIC to disk exclusively in user mode.

Can the system architecture incorporate lockless PMDs into its threading model?
        Since PMD continually run on their threads (instead of sleeping or ceding the processor when unused), they have specific thread model requirements.

Does the system currently use the Data Plane Development Kit (DPDK) to handle network packet workloads?
        DPDK contains the framework for SPDK, so customers currently using DPDK will likely find the close integration with SPDK very useful.

Can your license model use a non-redistributable source?
        Some portions of SPDK are available as open source, BSD-licensed components (such as the NVMe and CBDMA userspace drivers). Other portions are licensed under an Intel license (UNS and the Userspace iSCSI Target) for the time being, though this is certainly subject to change. All source code for SPDK is provided free of charge.

Does the development team have the expertise to understand and troubleshoot problems themselves?
        Intel shall have no support obligations for this reference software. While Intel and the open source community around SPDK will use commercially reasonable efforts to investigate potential errata of unmodified released software, under no circumstances will Intel have any obligation to customers with respect to providing any maintenance or support of the software.

Intel technologies’ features and benefits depend on system configuration and may require enabled hardware, software or service activation. Performance varies depending on system configuration. Check with your system manufacturer or retailer or learn more at intel.com.

Performance testing configuration:
----------------------------------
Software and workloads used in performance tests may have been optimized for performance only on Intel microprocessors. Performance tests, such as SYSmark* and MobileMark*, are measured using specific computer systems, components, software, operations and functions. Any change to any of those factors may cause the results to vary. You should consult other information and performance tests to assist you in fully evaluating your contemplated purchases, including the performance of that product when combined with other products.

* 2S Xeon® E5-2699v3: 18C, 2.3GHz (HyperThreading off) Note: Single socket was used while performance testing
* 32 GB DDR4 2133 MT/s, 4 Memory Channel per CPU, 1x 4GB 2R DIMM per channel
* Ubuntu (Linux) Server 14.10, 3.16.0-30-generic kernel
* Ethernet Controller XL710 for 40GbE
* 8x P3700 NVMe devices for storage

No license (express or implied, by estoppel or otherwise) to any intellectual property rights is granted by this document.

Intel disclaims all express and implied warranties, including without limitation, the implied warranties of merchantability, fitness for a particular purpose, and non-infringement, as well as any warranty arising from course of performance, course of dealing, or usage in trade.

This document contains information on products, services and/or processes in development. All information provided here is subject to change without notice. Contact your Intel representative to obtain the latest forecast, schedule, specifications and roadmaps.

The products and services described may contain defects or errors known as errata which may cause deviations from published specifications. Current characterized errata are available on request.

Copies of documents which have an order number and are referenced in this document may be obtained by calling 1-800-548-4725 or by visiting www.intel.com/design/literature.htm.

Intel, the Intel logo, and Xeon are trademarks of Intel Corporation in the U.S. and/or other countries.

*Other names and brands may be claimed as the property of others.

© 2015 Intel Corporation.
