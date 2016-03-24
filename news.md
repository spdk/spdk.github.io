---
layout: news
title:  "SPDK In The News"
---

# News items

## ASPLOS’20, March 16–20, 2020, Lausanne, Switzerland

### [AliCloud: High-density Multi-tenant Bare-metal Cloud](https://dl.acm.org/doi/pdf/10.1145/3373376.3378507)
> In this paper, AliCloud proposes the design of a new high-density, multi-tenant, bare-metal Cloud called BM-Hive. BM-Hive features a hardware-software hybrid virtio I/O system that enables the guest to directly access the cloud network and storage services. In BM-Hive, all the I/O requests are handled in the user space with vhost-user protocol interfacing to Cloud infrastructure: the customized DPDK vSwitch and the SPDK Cloud storage.

## Circuit Blvd - Kubernetes and Docker setup for SPDK

### [Using Docker and Kubernetes to containerize and orchestrate SPDK applications](https://www.circuitblvd.com/post/kubernetes-and-docker-setup-for-spdk)
> In this technote, Circuit Blvd presents an example of how to use Docker and Kubernetes to containerize and orchestrate an SPDK Vhost application that serves virtio block devices to application containers.

## UCloud - End to End IO Path Optimization with SPDK

### [Practice sharing of SPDK integration to achieve 1.2M IOPS from cloud disk](https://mp.weixin.qq.com/s?__biz=MzUwOTA1NDg4NQ==&mid=2247485707&idx=1&sn=c6f8e7ebe48a13e7783abc187c588002&chksm=f91953c1ce6edad7c61b267acb0abc1292486ae70cf4883e9f811320f08a596874e12e0f7d72&mpshare=1&scene=1&srcid=0523NZ3tMRR6jvAOYngdBkXB&pass_ticket=wtEIGZYEis9CDCq2bHqr9cZpaldcKOrajkGA0dojARAuGlY%2FloOQcZQ%2FsK0w0KRa#rd)
> Cloud service provider UCloud described the good practice of integrating SPDK vhost and other modules in their end to end solution from VM to the cloud disk. UCloud used SPDK to optimize the virtualized IO path, proposed the features like hot upgrade and online migration solution based on SPDK vhost, and successfully coupled with the high-performance cloud disk (UCloud RSSD) to achieve good results which reach up to 1.2 million IOPS. UCloud also actively joins the SPDK community and summarizes that each version of SPDK brings many interesting features and they would like to explore and further apply to the performance improvement of cloud disk and other products.

## May 6 2019 Intel® Chip Chat Episode 654

### [Redesigning Storage in the Data Center with SPDK](https://soundcloud.com/intelchipchat/redesigning-storage-in-the-data-center-spdk)
> Dr. Felipe Franciosi from Nutanix, and Nate Marushak from Intel, describe how SPDK brings higher performance to today's hyperconverged data center and holds promise for the future.

## February 2019 17th USENIX Conference on File and Storage Technologies (FAST '19)

### [Reaping the performance of fast NVM storage with uDepot](https://www.usenix.org/system/files/fast19-kourtis.pdf)
> This page describes how uDepot, a key-value store, utilizes SPDK and Intel Optane SSD to achieve equivalent performance to its DRAM-based counterparts at a much lower cost.

## November 2 2018 Linux Piter #4

### [SPDK and Nutanix AHV: minimising the virtualization overhead](https://linuxpiter.com/en/materials/2422)
> At Linux Piter, Dr. Felipe Franciosi discussed the performance challenges of storage virtualization. He talked about how SPDK is being leveraged to minimize the software overhead to record lows and shared performance data that show that it is possible for virtual machines to access Intel® Optane™ SSDs in under 10 microseconds for 4K I/O requests through virtio-scsi.

## The Nutanix Bible

### [User vs. Kernel Space](http://nutanixbible.com/#anchor-user-vs.-kernel-space-15)
> Explains the pros/cons of User vs. Kernel Space.

### [The Move to User Space / Polling](http://nutanixbible.com/#anchor-the-move-to-user-space-/-polling-17)
> As devices have become faster (e.g. NVMe, Intel® Optane™, pMEM), the kernel and device interaction has become a bottleneck. To eliminate these bottlenecks, a lot of vendors are moving things out of the kernel to user space with polling and seeing much better results. Great examples of this are the Storage Performance Development Kit (SPDK) and Data Plane Development Kit (DPDK). These projects are geared at maximizing the performance and reducing latency as much as possible, and have shown great success.

## AliCloud - High Performance Local SSD

### [SPDK accelerates AliCloud Local SSD model](https://promotion.aliyun.com/ntms/act/ecshighperformance.html?open_id=1d8213d3-b437-4596-a88a-d27798942d3a-&open_cid=4703)
> Through close collaborations between AliCloud and SPDK, AliCloud offers one model (local SSD) among different kinds of cloud services. The AliCloud local SSD model is for critical applications like OLTP and NoSQL databases and designed with NVMe SSD and advanced SPDK storage techniques to achieve the extra high performance on single node like 480K max random read/write IOPS, 200us lower latency, 4GB/s max sequential read bandwidth, 2.4GB/s max sequential write bandwidth...

## September 18 2018 CloudTech

### [OpenStack and NVMe-over-Fabrics: Getting higher performance for network-connected SSDs](https://www.cloudcomputing-news.net/news/2018/sep/18/openstack-and-nvme-over-fabrics-getting-high-performance-for-network-connected-ssds/)
> Intel, Mirantis and Mellanox are working together to enable NVMe-oF in Openstack. There 2 solutions to implement NVMe-oF with OpenStack: Kernel NVMe-oF target and SPDK NVMe-oF target. If compared with Kernel-based implementations, SPDK reduces NVMe-oF software overheads and yields high throughput and performance ...

## August 20 2018 Forbes

### [More Flash Memory News](https://www.forbes.com/sites/tomcoughlin/2018/08/20/more-flash-memory-news/#4fd9f6825830)
> At FMS, SolarFlare showcased Intel® Optane™ SSDs with Solarflare XTremeScale™ 100GBE Ethernet adapters implementing the upcoming NVMe-oF TCP spec using SPDK. The NVMe-based Optane storage over TCP provides a low-cost high performance solid-state network that has latency as low as 15 microseconds.

## August 2018 44th International Conference on Very Large Data Bases

### [PolarFS: An Ultra-low Latency and Failure Resilient Distributed File System for Shared Storage Cloud Database](http://www.vldb.org/pvldb/vol11/p1849-cao.pdf)
> This paper describes how PolarFS uses emerging techniques like RDMA, NVMe SSDs and SPDK to reduce the end-to-end latency. The write latency of PolarFS is close to a local file system on SSD.

## June 11 2018 14th International Workshop on Data Management

### [Cost/Performance in Modern Data Stores](https://dl.acm.org/citation.cfm?doid=3211922.3211927)
> In this paper, SPDK was used to optimize the I/O path in Deuterony (a Log-Structured data caching DB) and reduce the cost of I/O operations by a third.

## May 15 2018 SPDK Summit

### [SPDK US Summit](http://spdk.io/news/2018/06/13/summit-recap/)
> Over 170 attendees from 51 different companies attended the 2018 SPDK US Summit at Dolce Hayes Mansion, San Jose on May 15th and 16th.

## March 20 2018 OCP Summit 2018

### [Cavium Technologies Power End-to-End NVMe Over Fabrics Solutions](https://www.hpcwire.com/off-the-wire/cavium-technologies-power-end-to-end-nvme-over-fabrics-solutions/)
> At the OCP Summit 2018, Cavium, Microsemi and Marvell demonstrated concurrent 100Gbps NVMe-oF RoCE and iWARP connectivity ... showcases how storage IHVs can leverage PCIe P2P and SPDK technology ...

## February 6 2018 IBM Research Report

### [Unveiling the performance of fast NVM storage with the uDepot KV-store](http://domino.research.ibm.com/library/cyberdig.nsf/papers/924CAFEAE5A8483585258279002F8E26/$File/RZ3923.pdf)
> A research team at IBM used SPDK to optimize the performance of gets and puts operations in the uDepot KV-store. They showcased latency of 7.2 usecs and throughput of 6.17 million get operations/sec with Intel Optane SSDs and SPDK.

## July 12 2017 DigiTimes

### [Intel unveils new Intel Xeon scalable processors](http://www.digitimes.com/newregister/join.asp?view=Article&DATEPUBLISH=2017/07/12&PAGES=PR&SEQ=200)
> Intel has launched its new Intel Xeon scalable processors, providing ... with Intel Optane SSDs and Storage Performance Development Kit (SPDK), ...

## July 12 2017 ETCIO.com

### [With new Xeon scalable processors, Intel eyes data center market in India](http://cio.economictimes.indiatimes.com/news/data-center/with-new-xeon-scalable-processors-intel-eyes-data-center-market-in-india/59561320)
> Bangalore: Intel India today launched its new Intel Xeon Scalable ... with Intel Optane SSDs and Storage Performance Development Kit (SPDK), ...

##  July 11 2017 Forbes

### [Intel's New Xeon Scalable Processors Are Its Broadest Datacenter And Carrier Play Yet](https://www.forbes.com/sites/patrickmoorhead/2017/07/11/intels-new-xeon-scalable-processors-are-its-broadest-datacenter-and-carrier-play-yet/#6fb1006728d1)
