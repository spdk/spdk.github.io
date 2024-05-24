---
layout: default
title: 持续集成
lang: cn

toc:
  - title: SPDK Jenkins集成测试状态
    url: "https://ci.spdk.io/"

---

SPDK持续集成(CI)测试池是一个不断扩展的机器组，包括虚拟和物理机器，用于验证提交给SPDK代码库中每个补丁的功能。这个测试池目前由12台运行多种Linux (CentOS, Ubuntu,Fedora)操作系统和FreeBSD的机器组成。其中一些机器有硬件NVMe控制器(Intel P3700)和RDMA NICs (Mellanox ConnectX-4)，而其他机器使用模拟的NVMe驱动器和Soft-RoCE NICs。

任何人都可以为SPDK代码库提交补丁。所有的补丁，在审查后，将在SPDK CI测试池进行测试。有关此过程的更多信息，请参见[开发页面](http://www.spdk.io/development/)。

SPDK[网站](http://www.spdk.io/)也是实施版本控制的，并具有相关的持续集成测试池。右边栏里有SPDK测试池和网页测试池的链接。
