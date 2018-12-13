---
layout: news
title:  "SPDK In The News"
---

# News items

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
