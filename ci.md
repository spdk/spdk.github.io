---
layout: default
title: Continuous Integration

toc:
  - title: SPDK Jenkins Test Pool Status
    url: "https://ci.spdk.io/"
  - title: SPDK Trello Board
    url: "https://trello.com/b/P5xBO7UR/things-to-do"
---

The SPDK continuous integration (CI) test pool is an ever expanding group of machines dedicated to verifying the functionality of each patch submitted to the SPDK code base. The test pool currently consists of over 30 machines running Fedora Server. All of the systems have hardware NVMe controllers (Intel P4510, P4600 or P4610) installed, and most of them have additional hardware installed, like:

* Mellanox RDMA NICs (Mellanox ConnectX-4 & ConnectX-5) used for NVMe-oF RDMA tests
* Intel E810 NICs (CQDA2 and XXVDA2) used for NVMe-oF TCP & RDMA tests
* Quick Assist (QAT) Cards used for crypto and compression tests

On top of that SPDK test pool has a number of servers used as "VM Hosts" which are used for spinning up virtual machines using Qemu, Libvirt and Vagrant tools. These virtual machines, utilizing emulated NVMe drives and veth interfaces allow testing SPDK in virtualized environment using various Linux distributions (Fedora, Ubuntu, CentOS, Rocky Linux and FreeBSD).

In addition to usual tests run for each submitted patch, the SPDK CI also involves performance regression tests. These are run regularly every few hours and test SPDK Vhost, SPDK NVMe-oF TCP and SPDK NVMe-oF RDMA following scenarios described in [per-release performance report documents](https://spdk.io/doc/performance_reports.html) and using current SPDK master branch for the build process. Performance regression test results are uploaded to dashboards at [performance.spdk.io](https://performance.spdk.io/), which also contain hardware specification of systems used in testing.

In case you would like to suggest a change in SPDK's continuous integration environment please use [SPDK's Github issue section](https://github.com/spdk/spdk/issues) and create a new issue with `Infrastructure` and `Enhancement` labels selected. When creating the issue please provide us with as many details possible:

* name of the task
* detailed description of the task
  * what is the reason for change?
  * what needs to be done?
  * what is the expected outcome?
  * what are the completion criteria?

Anyone is allowed to contribute patches to the SPDK code base. All patches, after review, will be tested against the SPDK CI test pool. For more information on this process, please see the [development](http://www.spdk.io/development/) page. If you are interested in contributing to the SPDK code base, but do not know where to begin, feel free to check out the [Trello "Things to do" board](https://trello.com/b/P5xBO7UR/things-to-do).

The SPDK [homepage](http://www.spdk.io/) is also version controlled and has an associated continuous integration test pool. Links to both the SPDK test pool and webpage test pool are included at right.