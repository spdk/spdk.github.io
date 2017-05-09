---
layout: index
title: Storage Performance Development Kit
---

The Storage Performance Development Kit (SPDK) provides a set of tools and libraries for writing high performance, scalable, user-mode storage applications. It achieves high performance by moving all of the necessary drivers into userspace and operating in a polled mode instead of relying on interrupts, which avoids kernel context switches and eliminates interrupt handling overhead.

The bedrock of SPDK is a user space, polled-mode, asynchronous, lockless [NVMe](http://www.nvmexpress.org) driver. This provides zero-copy, highly parallel access directly to an SSD from a user space application. The driver is written as a C library with a single public header. Similarly, SPDK provides a user space driver for the I/OAT [DMA](https://en.wikipedia.org/wiki/Direct_memory_access) engine present on many Intel Xeon-based platforms with all of the same properties as the NVMe driver.

SPDK also provides [NVMe-oF](http://www.nvmexpress.org/nvm-express-over-fabrics-specification-released) and [iSCSI](https://en.wikipedia.org/wiki/ISCSI) servers built on top of these user space drivers that are capable of serving disks over the network. The standard Linux kernel iSCSI and NVMe-oF initiator can be used (or the Windows iSCSI initiator even) to connect clients to the servers. These servers can be up to an order of magnitude more CPU efficient than other implementations.

SPDK is an [open source, BSD licensed](https://opensource.org/licenses/BSD-3-Clause) set of C libraries and executables hosted on [GitHub](https://github.com/spdk/spdk). All new development is done on the [master branch](https://github.com/spdk/spdk/tree/master) and [stable releases](https://github.com/spdk/spdk/releases) are created quarterly. Contributors and users are welcome to [submit patches](https://github.com/spdk/spdk/pulls), [file issues](https://github.com/spdk/spdk/issues), and ask questions on our [mailing list](https://lists.01.org/mailman/listinfo/spdk).
