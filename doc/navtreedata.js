var NAVTREE =
[
  [ "SPDK", "index.html", [
    [ "Storage Performance Development Kit", "index.html", [
      [ "Introduction", "index.html#intro", null ],
      [ "User Guides", "index.html#user_guides", null ],
      [ "General Information", "index.html#general", null ],
      [ "Modules", "index.html#modules", null ],
      [ "Tools", "index.html#tools", null ],
      [ "Performance Reports", "index.html#performancereports", null ]
    ] ],
    [ "Changelog", "changelog.html", [
      [ "v18.01: (Upcoming Release)", "changelog.html#changelog-v18-01", null ],
      [ "v17.10: Logical Volumes", "changelog.html#changelog-v17-10", null ],
      [ "v17.07: Build system improvements, userspace vhost-blk target, and GPT bdev", "changelog.html#changelog-v17-07", null ],
      [ "v17.03: Blobstore and userspace vhost-scsi target", "changelog.html#changelog-v17-03", null ],
      [ "v16.12: NVMe over Fabrics host, hotplug, and multi-process", "changelog.html#changelog-v16-12", null ],
      [ "v16.08: iSCSI target, NVMe over Fabrics maturity", "changelog.html#changelog-v16-08", null ],
      [ "v16.06: NVMf userspace target", "changelog.html#changelog-v16-06", null ]
    ] ],
    [ "SPDK Directory Structure", "directory_structure.html", [
      [ "Overview", "directory_structure.html#dir_overview", [
        [ "Applications", "directory_structure.html#dir_app", null ],
        [ "Build Collateral", "directory_structure.html#dir_build", null ],
        [ "Documentation", "directory_structure.html#dir_doc", null ],
        [ "Examples", "directory_structure.html#dir_examples", null ],
        [ "Include", "directory_structure.html#dir_include", null ],
        [ "Libraries", "directory_structure.html#dir_lib", [
          [ "Block Device Abstraction Layer", "directory_structure.html#dir_bdev", null ],
          [ "Configuration File Parser", "directory_structure.html#dir_conf", null ]
        ] ],
        [ "Makefile Fragments", "directory_structure.html#dir_mk", null ],
        [ "Scripts", "directory_structure.html#dir_scripts", null ],
        [ "Tests", "directory_structure.html#dir_tests", null ]
      ] ]
    ] ],
    [ "Getting Started", "getting_started.html", [
      [ "Getting the Source Code", "getting_started.html#getting_started_source", null ],
      [ "Installing Prerequisites", "getting_started.html#getting_started_prerequisites", null ],
      [ "Building", "getting_started.html#getting_started_building", null ],
      [ "Running the Unit Tests", "getting_started.html#getting_started_unittests", null ],
      [ "Running the Example Applications", "getting_started.html#getting_started_examples", null ]
    ] ],
    [ "Memory Management for User Space Drivers", "memory.html", null ],
    [ "SPDK Porting Guide", "porting.html", null ],
    [ "Blobstore", "blob.html", null ],
    [ "BlobFS (Blobstore Filesystem)", "blobfs.html", [
      [ "BlobFS Getting Started Guide", "blobfs.html#blobfs_getting_started", null ],
      [ "RocksDB Integration", "blobfs.html#blobfs_rocksdb", null ]
    ] ],
    [ "Block Device Abstraction Layer", "bdev.html", [
      [ "SPDK bdev Getting Started Guide", "bdev.html#bdev_getting_started", null ],
      [ "Configuring block devices", "bdev.html#bdev_config", [
        [ "NVMe", "bdev.html#bdev_config_nvme", null ],
        [ "Malloc", "bdev.html#bdev_config_malloc", null ],
        [ "Pmem", "bdev.html#bdev_config_pmem", null ],
        [ "Null", "bdev.html#bdev_config_null", null ],
        [ "Linux AIO", "bdev.html#bdev_config_aio", null ],
        [ "Ceph RBD", "bdev.html#bdev_config_rbd", null ],
        [ "Virtio SCSI", "bdev.html#bdev_config_virtio_scsi", null ],
        [ "GPT (GUID Partition Table)", "bdev.html#bdev_config_gpt", null ]
      ] ]
    ] ],
    [ "Event framework", "event.html", [
      [ "Event Framework Design Considerations", "event.html#event_design", null ],
      [ "SPDK Event Framework Components", "event.html#event_components", [
        [ "Events", "event.html#event_component_events", null ],
        [ "Reactors", "event.html#event_component_reactors", null ],
        [ "Pollers", "event.html#event_component_pollers", null ],
        [ "Application Framework", "event.html#event_component_app", null ]
      ] ]
    ] ],
    [ "I/OAT Driver", "ioat.html", [
      [ "Public Interface", "ioat.html#ioat_interface", null ],
      [ "Key Functions", "ioat.html#ioat_key_functions", null ]
    ] ],
    [ "iSCSI Target", "iscsi.html", [
      [ "iSCSI Target Getting Started Guide", "iscsi.html#iscsi_getting_started", [
        [ "Prerequisites", "iscsi.html#iscsi_prereqs", null ],
        [ "Configuring iSCSI Target", "iscsi.html#iscsi_config", null ],
        [ "Configuring iSCSI Initiator", "iscsi.html#iscsi_initiator", null ]
      ] ],
      [ "iSCSI Hotplug", "iscsi.html#iscsi_hotplug", [
        [ "Known bugs and limitations", "iscsi.html#iscsi_hotplug_bugs", null ]
      ] ]
    ] ],
    [ "JSON-RPC Methods", "jsonrpc.html", [
      [ "Overview", "jsonrpc.html#jsonrpc_overview", null ],
      [ "App Framework", "jsonrpc.html#jsonrpc_components_app", [
        [ "kill_instance", "jsonrpc.html#rpc_kill_instance", null ],
        [ "context_switch_monitor", "jsonrpc.html#rpc_context_switch_monitor", null ]
      ] ],
      [ "NVMe-oF Target", "jsonrpc.html#jsonrpc_components_nvmf_tgt", [
        [ "get_nvmf_subsystems method", "jsonrpc.html#rpc_get_nvmf_subsystems", null ],
        [ "construct_nvmf_subsystem method", "jsonrpc.html#rpc_construct_nvmf_subsystem", [
          [ "listen_address", "jsonrpc.html#rpc_construct_nvmf_subsystem_listen_address", null ],
          [ "namespace", "jsonrpc.html#rpc_construct_nvmf_subsystem_namespace", null ]
        ] ],
        [ "delete_nvmf_subsystem method", "jsonrpc.html#rpc_delete_nvmf_subsystem", null ]
      ] ]
    ] ],
    [ "Logical Volumes Introduction", "logical_volumes.html", [
      [ "Terminology", "logical_volumes.html#lvol_terminology", [
        [ "Logical volume store", "logical_volumes.html#lvs", null ],
        [ "Logical volume", "logical_volumes.html#lvol", null ],
        [ "Logical volume block device", "logical_volumes.html#lvol_bdev", null ]
      ] ],
      [ "RPC overview", "logical_volumes.html#lvol_rpc", null ]
    ] ],
    [ "NVMe Driver", "nvme.html", [
      [ "Introduction", "nvme.html#nvme_intro", null ],
      [ "Examples", "nvme.html#nvme_examples", null ],
      [ "Running Benchmarks", "nvme.html#nvme_benchmarks", null ],
      [ "Public Interface", "nvme.html#nvme_interface", null ],
      [ "NVMe I/O Submission", "nvme.html#nvme_io_submission", [
        [ "Scaling Performance", "nvme.html#nvme_scaling", null ]
      ] ],
      [ "NVMe over Fabrics Host Support", "nvme.html#nvme_fabrics_host", [
        [ "Specifying Remote NVMe over Fabrics Targets", "nvme.html#nvme_fabrics_trid", null ]
      ] ],
      [ "NVMe Multi Process", "nvme.html#nvme_multi_process", [
        [ "Configuration", "nvme.html#nvme_multi_process_configuration", null ],
        [ "Limitations", "nvme.html#nvme_multi_process_limitations", null ]
      ] ],
      [ "NVMe Hotplug", "nvme.html#nvme_hotplug", null ]
    ] ],
    [ "nvme-cli", "nvme-cli.html", null ],
    [ "NVMe over Fabrics Target", "nvmf.html", [
      [ "NVMe-oF Target Getting Started Guide", "nvmf.html#nvmf_getting_started", [
        [ "Prerequisites", "nvmf.html#nvmf_prereqs", null ],
        [ "Prerequisites for InfiniBand/RDMA Verbs", "nvmf.html#nvmf_prereqs_verbs", null ],
        [ "Prerequisites for RDMA NICs", "nvmf.html#nvmf_prereqs_rdma_nics", null ],
        [ "Configuring NVMe over Fabrics Target", "nvmf.html#nvmf_config", null ],
        [ "Configuring NVMe over Fabrics Host", "nvmf.html#nvmf_host", null ],
        [ "Assigning CPU Cores to the NVMe over Fabrics Target", "nvmf.html#nvmf_config_lcore", null ],
        [ "Emulating an NVMe controller", "nvmf.html#nvmf_config_virtual_controller", null ]
      ] ]
    ] ],
    [ "Vagrant Development Environment", "vagrant.html", [
      [ "Introduction", "vagrant.html#vagrant_intro", null ],
      [ "VM Configuration", "vagrant.html#vagrant_config", null ],
      [ "Providers", "vagrant.html#vagrant_providers", null ],
      [ "Running An Example", "vagrant.html#vagrant_example", null ]
    ] ],
    [ "vhost", "vhost.html", [
      [ "vhost Users Guide", "vhost.html#vhost_users_guide", null ],
      [ "Prerequisites", "vhost.html#vhost_prereqs", null ],
      [ "Configuration", "vhost.html#vhost_config", null ],
      [ "Example", "vhost.html#vhost_example", null ],
      [ "Known bugs and limitations", "vhost.html#vhost_bugs", null ]
    ] ],
    [ "Virtio SCSI driver", "virtio.html", [
      [ "Introduction", "virtio.html#virtio_intro", null ],
      [ "Multiqueue", "virtio.html#virtio_multiqueue", null ],
      [ "Limitations", "virtio.html#virtio_limitations", null ]
    ] ],
    [ "Data Structures", "annotated.html", [
      [ "Data Structures", "annotated.html", "annotated_dup" ],
      [ "Data Structure Index", "classes.html", null ],
      [ "Data Fields", "functions.html", [
        [ "All", "functions.html", "functions_dup" ],
        [ "Variables", "functions_vars.html", "functions_vars" ]
      ] ]
    ] ],
    [ "Files", null, [
      [ "File List", "files.html", "files" ],
      [ "Globals", "globals.html", [
        [ "All", "globals.html", "globals_dup" ],
        [ "Functions", "globals_func.html", "globals_func" ],
        [ "Typedefs", "globals_type.html", null ],
        [ "Enumerations", "globals_enum.html", null ],
        [ "Enumerator", "globals_eval.html", null ],
        [ "Macros", "globals_defs.html", null ]
      ] ]
    ] ]
  ] ]
];

var NAVTREEINDEX =
[
"annotated.html",
"endian_8h.html#a265f8e947e2070d1a0520a357f5251f5",
"io__channel_8h.html#a75aa6a61877f23f79bb75c8fc5e68202",
"jsonrpc.html",
"nvme__intel_8h.html#aa3dfd12361a175359f7ae4ad323735d8",
"nvme__spec_8h.html#acb8784fad6a53be95d4c718ad3cf852ea922011123d3f2aa2adf3ef4c02eaaba5",
"pci__ids_8h.html#a53070d685a30ad4d9cf5af78bc9d2afd",
"scsi__spec_8h.html#a9e2b2add18fac5a9110df411076170dca0f77b17d9c13d6dbebfbd1ba44e51153",
"structiscsi__bhs__data__out.html#aefc1390855e60cb4c92dc7ff6b16eefe",
"structspdk__app__opts.html#a6d8fad90703f6eb20d0bd2ecb5747f74",
"structspdk__ioat__xor__hw__desc.html#a298bc3a2702c2a8766f6c33e0d419da1",
"structspdk__nvme__dsm__range.html#af15a5e24c688c5d15575d98d064b65bd",
"structspdk__nvme__reservation__status__data.html#a4b2514f1bb0b9464372a884156bde65b",
"structspdk__scsi__port__desc.html#a1122aceae5f88a71a7dc11ace3c17c7f",
"unionspdk__nvme__vs__register.html#a1347c00a7face3efd2abe8be9b08628d"
];

var SYNCONMSG = 'click to disable panel synchronisation';
var SYNCOFFMSG = 'click to enable panel synchronisation';