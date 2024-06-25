---
layout: post
title:  "Announcing the SPDK NVMf Target"
img: SPDK_text_2.png
author: Jonathan Stern
categories: feature
---

[Much](http://www.nvmexpress.org/wp-content/uploads/NVM_Express_oF-1_2_Press_Release.pdf) [has](http://www.nvmexpress.org/about/nvm-express-overview/) [already](https://www.openfabrics.org/images/eventpresos/workshops2015/DevWorkshop/Monday/monday_10.pdf) [been](http://www.flashmemorysummit.com/English/Collaterals/Proceedings/2015/20150811_FA12_Overview.pdf) [said](http://www.chelsio.com/wp-content/uploads/resources/NVM_Express_Over_Fabrics.pdf) [about](http://www.roceinitiative.org/uncategorized/rdma-interconnects-paving-the-way-for-nvme-over-fabrics-technology) [NVMe](http://nvmexpress.org/wp-content/uploads/2013/04/NVM_whitepaper.pdf) [over](http://www.snia.org/sites/default/files/SDC15_presentations/networking/WaelNoureddine_Implementing_%20NVMe_revision.pdf) [Fabrics](http://www.flashmemorysummit.com/English/Collaterals/Proceedings/2015/20150813_S303A_Davis.pdf). It was first publicly demonstrated in 2014 and the 1.0 specification is finally complete. In essence, NVMe over Fabrics (NVMf) is the NVM Express* (NVMe) block protocol tunneled through an RDMA fabric, and it has _enormous_ potential to enable the next generation of datacenter storage development.
To support broad adoption of NVMf, the [Storage Performance Development Kit](http://spdk.io) (SPDK) has created a reference user-space NVMf target implementation for Linux, released for community involvement via GitHub under BSD license. In parallel, community-based Linux* kernel efforts have created [both a host and a target](http://git.infradead.org/nvme-fabrics.git) under GPL license. All three of these implementations are now released with the [final 1.0 specification](http://www.nvmexpress.org/wp-content/uploads/NVMe_over_Fabrics_1_0_Gold_20160605.pdf) as of June 8, 2016.

SPDK NVMe over Fabrics Details
-------------------------------

The SPDK NVMf target is a __reference__ NVMf target implementation designed for maximum efficiency in dedicated storage contexts. We call it a "target" in the iSCSI sense; the code is running next to the physical storage devices and handling I/O requests. Like all other SPDK components, the NVMf target is designed to run the whole data path, from network to storage media, in user space, completely bypassing the kernel. And like all other SPDK components, the NVMf target is designed to use a polling-based, asynchronous I/O model instead of dealing with interrupts. These techniques substantially reduce the software latency incurred in the traditional I/O path, maximizing the benefit of new, low-latency storage media like 3D XPoint®. However these techniques may also make the SPDK implementation unsuitable for general computing use cases, since bypassing the kernel carries certain risks and implications for security and data integrity. Again, the SPDK components are primarily designed for dedicated storage use cases.
The SPDK NVMf target was designed from the outset to support multiple RDMA protocols. This was achieved by building on top of the OpenFabrics Enterprise Distribution (OFED) layer, ensuring interoperability with any RDMA NIC (provided the RDMA NIC vendor supplies drivers compatible with the libibverbs layer). This means InfiniBand, iWARP, and RoCE should all be supported by the SPDK NVMf target, and it means that any RDMA transport can be used interchangeably with the same code base. To date, the SPDK team's testing has focused exclusively on RoCEv2 as an RDMA fabric.

![Block diagram at release](/img/blog/SPDK_NVMf_Initial.png)

Next Steps
-----------

To follow up with this announcement, the SPDK team has two additional blog posts planned: one post to discuss our performance measurements and characterization of the SPDK NVMf target and one post to discuss our future plans and roadmap. Expect those within the next few weeks!

The SPDK community is growing and we are excited to release the NVMf controller code today. Of course, community pull requests are welcome and we would love to hear from users. Please contact us via [http://spdk.io](http://spdk.io) and get the code on [GitHub](https://github.com/spdk/spdk).

\*  Other names and brands may be claimed as the property of others.
