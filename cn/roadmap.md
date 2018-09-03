---
layout: default
title:  "SPDK路线图"
lang: cn
---

# 18.07版本 (计划于2018年7月发布)

计划的新功能：
* 改进SPDK内存管理
* [完整的基于JSON的配置](https://trello.com/c/U97MLUCJ)
* 加密bdev
* NVMe-oF target改进
  - Spec compliance work
  - 多路径支持
  - 命名空间更改通知
* QoS: 读取、写入和带宽限制。
* NVMe
  - 试验性质的Open Channel SSD支持
  - Error injection
  - 多进程超时处理
* iSCSI Initiator优化
* SPDKCLI

# 18.04版本 (2018年4月)

[v18.04版本](https://github.com/spdk/spdk/releases/tag/v18.04)

功能:
* iSCSI target与VPP用户态TCP/IP的集成
* 逻辑卷快照与克隆
* [Bdev QoS](https://trello.com/b/domGQvZc/qos-in-bdev)
* Virtio-blk bdev支持
* 支持2MB大页的Virtio

试验性质的功能:
* iSCSI Initiator bdev
* Vhost-NVMe
* SPDKCLI
* NVMe CMB
* [基于JSON的配置](https://trello.com/c/U97MLUCJ)

# 18.01版本 (2018年1月)

[v18.01版本](https://github.com/spdk/spdk/releases/tag/v18.01)

* Blobstore和逻辑卷精简配置
* Vhost动态迁移

# 17.10版本 (2017年10月)

[v17.10版本](https://github.com/spdk/spdk/releases/tag/v17.10)

* [逻辑卷](https://trello.com/b/oTWZdkL8/logical-volumes)
* [Virtio scsi initatior](https://trello.com/b/Ym1jCdrR/vhost-initiator)
* [NVML bdev for libpmemblk](https://trello.com/c/HGr8UEtA)
* [Blobstore Cli](https://trello.com/c/0E3ADk7R)

# 17.07版本 (2017年7月)

[v17.07版本](https://github.com/spdk/spdk/releases/tag/v17.07)

* nvme-cli支持
* Vhost blk target
* 全栈热插拔： 删除支持(iSCSI, NVMe-oF以及vhost)
* VTune 集成
* Blobstore和vhost-scsi bug修复

# 17.03版本 (2017年3月)

[v17.03版本](https://github.com/spdk/spdk/releases/tag/v17.03)

* Vhost-scsi target
* BlobStore
* BlobFS
* RocksDB集成

# 16.12版本 (2016年12月)

[v16.12版本](https://github.com/spdk/spdk/releases/tag/v16.12)

* PCIe和NVMe热插拔支持
* NVMe-oF initator
* NVMe-oF target 虚拟模式
* NVMe驱动中的多进程支持
* Ceph RBD bdev模块
