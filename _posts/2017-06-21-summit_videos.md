---
layout: post
title: "Videos: Intel® Builders Developer Summit on April 19-20, 2017"
author: John Kariuki
categories: news
---

Videos from the Intel Builders Developers Summit featuring SPDK and ISA-L held in Santa Clara on April 19th and 20th are posted [here](https://www.youtube.com/playlist?list=PLj-81kG3zG5ZIE-4CvqsvlFEHoOoWRIHZ).

## Videos
__Video 1:__ [SPDK: The Future is Now](https://www.youtube.com/watch?v=IDv9uohHV5U&index=1&list=PLj-81kG3zG5ZIE-4CvqsvlFEHoOoWRIHZ) by Jim Harris

__Abstract:__ SPDK is enabling best-of-class performance via a growing list of libraries and applications covering storage networking, virtualization and lightweight filesystems.  There is also an increasing number of companies and projects contributing to and adopting SPDK to take advantage of the advancements in solid state media in hyper converged and disaggregated storage usage models.  In this video, Jim will share his thoughts on the future of SPDK against the backdrop of these trends, including where SPDK is going from both a technical and community perspective.

__Video 2:__ [SPDK Blobstore: A Look Inside the NVM-Optimized Allocator](https://www.youtube.com/watch?v=UK2fgePP804&list=PLj-81kG3zG5ZIE-4CvqsvlFEHoOoWRIHZ&index=2) by Ben Walker

__Abstract:__ The Blobstore is a local, persistent, power-fail safe block allocator designed to replace filesystem usage in many popular databases. The design is fully asynchronous, polled-mode, and lockless in the I/O path. Most importantly, the Blobstore has been designed for the properties of flash and next-generation media from the start and directly leverages NVMe features. The team has already ported a popular embedded key/value database, RocksDB, to use the Blobstore which demonstrated an improvement in 99th percentile latency for database queries under common workloads of over 350%.

__Video 3:__ [Vhost-scsi: SPDK VM I/O Efficiency](https://www.youtube.com/watch?v=2XUpjPVxOA4&index=3&list=PLj-81kG3zG5ZIE-4CvqsvlFEHoOoWRIHZ) by Piotr Pelplinski and Changpeng Liu

__Abstract:__ SPDK vhost is a userspace target designed to extend the performance efficiencies of SPDK into QEMU/KVM virtualization environments.  SPDK vhost enables presenting a broad range of SPDK-managed block storage into virtual machines, including local NVMe storage, remote NVMe-oF storage and Ceph RBD.  Compared with existing kernel based vhost solutions, SPDK vhost target provides up to 10x better performance and/or efficiency while enabling significantly lower latency when used with Intel® Optane™ media.   This video covers the performance of SPDK vhost target, design principles for CPU efficiency, usage models and future plans.

__Video 4:__ [Driving to Highest IOPS/$ Using SPDK](https://www.youtube.com/watch?v=-4hUBE0BrnM&index=4&list=PLj-81kG3zG5ZIE-4CvqsvlFEHoOoWRIHZ) by Paul Von Stamwitz from Fujitsu

__Abstract:__ The Enterprise Storage market is rapidly migrating to NVMe-based all-flash configurations. However, CPU processing power is falling behind the performance gains in storage, creating inefficiencies in both performance and cost. To address this, Fujitsu is using SPDK toward the goal of achieving both higher performance and an overall lower cost per IOP for mission-critical workloads.

__Video 5:__ [SPDK: Under the Hood](https://www.youtube.com/watch?v=5rfw2n_G92Y&index=5&list=PLj-81kG3zG5ZIE-4CvqsvlFEHoOoWRIHZ&t=1s) by Daniel Verkamp

__Abstract:__ This video discusses the technical underpinnings of SPDK and explores the design choices made by the engineering team to enable high-performance storage applications. Topics include the reactor, event, poller, and I/O channel concepts which form the core of the SPDK libraries and example applications.

__Video 6:__ [SPDK NVMe over Fabrics](https://www.youtube.com/watch?v=bddSIUps0Hc&index=7&list=PLj-81kG3zG5ZIE-4CvqsvlFEHoOoWRIHZ) by John Meneghini and Madhu Pai from NetApp

__Abstract:__ SPDK provides libraries and example applications to present block storage over an RDMA fabrics using the NVMe over Fabrics (NVMe-oF) protocol.  This session will focus on NVMe-oF use cases and the current status of the SPDK NVMe-oF target.  Feature gaps and possible improvements will also be presented based on NetApp’s work with SPDK and their experience with building robust storage target software.

__Video 7:__ [Best Practices: Performance Testing & Tuning](https://www.youtube.com/watch?v=tkGE3pq5eIU&index=8&list=PLj-81kG3zG5ZIE-4CvqsvlFEHoOoWRIHZ) by John Kariuki, Vishal Verma and Roman Sudarikov

__Abstract:__ Solid state media in the datacenter is on the rise. However, integration of new media faces one major challenge: because the throughput and latency performance are so much better than spinning disk, storage software now consumes an increasing share of the total transaction time. SPDK provides tools and libraries for writing high performance, scalable, user-mode storage applications, but tuning and testing is not easy. This video will showcase performance testing of using SPDK in various environments like local NVMe, NVMe-oF and iSCSI with significant focus on methods and best practices

__Video 8:__ [Cloud: Intel Hardware Root Of Trust Attestation Solution with One Touch Activation](https://www.youtube.com/watch?v=blppWiwnisg&index=9&list=PLj-81kG3zG5ZIE-4CvqsvlFEHoOoWRIHZ) by Timothy Knoll and Kamal Natesan

__Abstract:__ Intel® Cloud Integrity Technology (Intel® CIT) extends a hardware-based Root of Trust with Intel Trusted Execution Technology (Intel® TXT) up through the cloud solution stack to ensure the privacy and integrity of cloud platforms and workloads. One Touch Activation is a feature that will be available on an upcoming platform which allows the owner to enable Intel TXT remotely in OOB fashion. Learn how to implement Intel and CIT to help customers meet their security and compliance goals for VMs, containers, High Performance Computing, software-defined storage and networks, and more.

__Video 9:__ [Transport Layer Development Kit: TCP and UDP at the Speed of DPDK](https://www.youtube.com/watch?v=2lJX430k4bc&index=10&list=PLj-81kG3zG5ZIE-4CvqsvlFEHoOoWRIHZ) by Keith Wiles

__Abstract:__ TCP and UDP socket based applications are core technologies in the modern data-center. The introduction of Orchestration, SDN controllers, vSwitches and Virtual Dataplane have seen a huge change in how network packets are delivered to data-centre nodes. While the stacks that consume these packets, the socket based applications have evolved much more slowly. Virtual switches like VPP and OVS-DPDK, have benefited from the vector packet processing technology in DPDK to scale process millions of packets per second. TLDK has been developed from the ground up to be a very fast and scalable UDP and TCP implementation at socket layer. This video will provide an overview of TLDK design and implementation, including an overview of the TLDK UDP and TCP API, and how it differs from the BSD Sockets API.

__Video 10:__ [ISA-L: Performance for Software-Defined Storage](https://www.youtube.com/watch?v=XwojKKdiIxM&index=11&list=PLj-81kG3zG5ZIE-4CvqsvlFEHoOoWRIHZ) by Jonathan Stern

__Abstract:__ The open-source Intel® Intelligent Storage Acceleration Library (ISA-L) provides highly optimized implementations of the key algorithms for storage applications: CRC, RAID/Erasure Code, Encryption, Hashing and Compression. Using ISA-L can eliminate compute bottlenecks, reduce latency, enable new features, and improve software efficiency.

__Video 11:__ [Intel Cache Acceleration Software (CAS)](https://www.youtube.com/watch?v=pTon-zu1gCs&index=12&list=PLj-81kG3zG5ZIE-4CvqsvlFEHoOoWRIHZ&t=3s) by Andrzej Jakowski and Armoun Forghan

__Abstract:__ This video will focus on Intel Cache Acceleration Software, its features, modes of operations and the latest performance data. Andrzej will also cover current plans related to open sourcing the software.

__Video 12:__ [SPDK Community Process Roundtable](https://www.youtube.com/watch?v=4uqCCqGgk9I&index=6&list=PLj-81kG3zG5ZIE-4CvqsvlFEHoOoWRIHZ) led by Jonathan Stern and Ben Walker

__Abstract:__ This video will give a brief overview of Intel’s current development process and how we are moving towards a more transparent and accessible process.  We would like to get feedback from the community on our Release process.
