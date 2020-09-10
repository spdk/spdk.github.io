---
layout: default
title: Continuous Integration

toc:
  - title: SPDK Jenkins Test Pool Status
    url: "https://ci.spdk.io/"
  - title: SPDK Trello Board
    url: "https://trello.com/b/P5xBO7UR/things-to-do"
  - title: CI Trello Board
    url: "https://trello.com/b/3DvD85zi/continuous-integration"
---

The SPDK continuous integration (CI) test pool is an ever expanding group of machines, both virtual and physical, dedicated to verifying the functionality of each patch submitted to the SPDK code base. The test pool currently consists of 12 machines running multiple flavors of Linux (CentOS, Ubuntu,Fedora) and FreeBSD. Some of the machines have hardware NVMe controllers (Intel P3700) and RDMA NICs (Mellanox ConnectX-4) while others use emulated NVMe drives and Soft-RoCE NICs.

Anyone is allowed to contribute patches to the SPDK code base. All patches, after review, will be tested against the SPDK CI test pool. For more information on this process, please see the [development](http://www.spdk.io/development/) page. If you are interested in contributing to the spdk code base, but do not know where to begin, feel free to check out the [Trello board](http://www.spdk.io/development/).

If you encounter any issues with the SPDK CI test pool or have comments or suggestions. Please contribute to the continuous integration [Trello board](https://trello.com/b/3DvD85zi/continuous-integration).

The SPDK [homepage](http://www.spdk.io/) is also version controlled and has an associated continuous integration test pool. Links to both the spdk test pool and webpage test pool are included at right.