---
layout: index
title: SPDK中文网站
lang: cn
---
<style>p{ text-indent: 2em; }</style>
Storage Performance Development Kit (SPDK)提供了一组用于编写高性能、可伸缩、用户态存储应用程序的工具和库。它通过使用一些关键技术来实现高性能:

* 将所有必需的驱动程序移至用户空间，这样就避免了系统调用，并允许从应用程序中进行零拷贝访问；
* 轮询硬件任务的完成而不是依靠中断，这会降低总延迟和延迟抖动；
* 避免在I/O路径中出现锁, 而是依赖消息传递。

SPDK的基础是用户态、轮询、异步、无锁
[NVMe](http://www.nvmexpress.org) 驱动。这提供了从用户空间应用程序直接访问SSD的零拷贝、高度并行的访问。驱动程序被编写为带有一个公共头文件的C语言库。

SPDK进一步提供了一个完整的块堆栈，作为一个用户空间库，它执行许多与操作系统中的块堆栈相同的操作。这包括统一不同存储设备之间的接口、通过队列来处理内存不足或I/O挂起等情况以及逻辑卷管理。

最后，SPDK提供
[NVMe-oF](http://www.nvmexpress.org/nvm-express-over-fabrics-specification-released),
[iSCSI](https://en.wikipedia.org/wiki/ISCSI), 和
[vhost](http://blog.vmsplice.net/2011/09/qemu-internals-vhost-architecture.html)。
在这些组件之上构建的服务器,能够通过网络或其他进程为磁盘提供服务。NVMe和iSCSI的标准Linux内核启动器与这些target交互, 以及与QEMU和虚拟主机进行交互。与其他实现相比，这些服务器的CPU效率可以提高一个数量级。这些target可以用作实现高性能存储目标的范例，也可以用作生产部署的基础。
