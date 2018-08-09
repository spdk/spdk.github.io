---
layout: default-cn
title:  "SPDK路线图"
---

# Version 18.07 (planned for July 2018)

Planned Features:
* Improved SPDK memory management
* [Full JSON-based Configuration](https://trello.com/c/U97MLUCJ)
* Encryption bdev
* NVMe-oF target improvements
  - Spec compliance work
  - Multi-path support
  - Namespace change notification
* QoS: Read, Write, and Bandwidth Rate Limiting
* NVMe
  - Experimental Open Channel SSD support
  - Error injection
  - Multi-process timeout handling
* iSCSI initiator optimizations
* SPDKCLI

# Version 18.04 (April 2018)

[v18.04 release](https://github.com/spdk/spdk/releases/tag/v18.04)

Features:
* iSCSI target integration with VPP Userspace TCP/IP
* Logical Volume Snapshot/Clone
* [QoS in Bdev](https://trello.com/b/domGQvZc/qos-in-bdev)
* Virtio-blk bdev support
* Virtio with 2MB hugepages

Experimental Features:
* iSCSI Initiator bdev
* Vhost-NVMe
* SPDKCLI
* NVMe CMB
* [JSON-based Configuration](https://trello.com/c/U97MLUCJ)

# Version 18.01 (January 2018)

[v18.01 release](https://github.com/spdk/spdk/releases/tag/v18.01)

* Blobstore and logical volume thin provisoning
* Vhost live migration

# Version 17.10 (October 2017)

[v17.10 release](https://github.com/spdk/spdk/releases/tag/v17.10)

* [Logical Volumes](https://trello.com/b/oTWZdkL8/logical-volumes)
* [Virtio scsi initatior](https://trello.com/b/Ym1jCdrR/vhost-initiator)
* [NVML bdev for libpmemblk](https://trello.com/c/HGr8UEtA)
* [Blobstore Cli](https://trello.com/c/0E3ADk7R)

# Version 17.07 (July 2017)

[v17.07 release](https://github.com/spdk/spdk/releases/tag/v17.07)

* nvme-cli support
* Vhost blk target
* Full stack hotplug: Removal support (iSCSI, NVMe-oF and vhost)
* VTune Integration
* Blobstore and vhost-scsi bug fixes

# Version 17.03 (March 2017)

[v17.03 release](https://github.com/spdk/spdk/releases/tag/v17.03)

* Vhost-scsi target
* BlobStore
* BlobFS
* RocksDB integration

# Version 16.12 (December 2016)

[v16.12 release](https://github.com/spdk/spdk/releases/tag/v16.12)

* PCIe and NVMe Hotplug Support
* NVMe-oF initator
* NVMe-oF target virtual mode
* Multi process support in NVMe driver
* Ceph RBD bdev module
