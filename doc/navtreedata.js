var NAVTREE =
[
  [ "SPDK", "index.html", [
    [ "Storage Performance Development Kit", "index.html", [
      [ "Introduction", "index.html#intro", null ],
      [ "Concepts", "index.html#concepts", null ],
      [ "User Guides", "index.html#user_guides", null ],
      [ "Programmer Guides", "index.html#general", null ],
      [ "Modules", "index.html#modules", null ],
      [ "Tools", "index.html#tools", null ],
      [ "Performance Reports", "index.html#performancereports", null ]
    ] ],
    [ "What is SPDK?", "about.html", null ],
    [ "Changelog", "changelog.html", [
      [ "v18.01: Blobstore Thin Provisioning", "changelog.html#changelog-v18-01", null ],
      [ "v17.10: Logical Volumes", "changelog.html#changelog-v17-10", null ],
      [ "v17.07: Build system improvements, userspace vhost-blk target, and GPT bdev", "changelog.html#changelog-v17-07", null ],
      [ "v17.03: Blobstore and userspace vhost-scsi target", "changelog.html#changelog-v17-03", null ],
      [ "v16.12: NVMe over Fabrics host, hotplug, and multi-process", "changelog.html#changelog-v16-12", null ],
      [ "v16.08: iSCSI target, NVMe over Fabrics maturity", "changelog.html#changelog-v16-08", null ],
      [ "v16.06: NVMf userspace target", "changelog.html#changelog-v16-06", null ]
    ] ],
    [ "Message Passing and Concurrency", "concurrency.html", null ],
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
    [ "Block Device Layer", "bdev.html", [
      [ "Introduction", "bdev.html#bdev_getting_started", null ],
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
        [ "Assigning CPU Cores to the iSCSI Target", "iscsi.html#iscsi_config_lcore", null ],
        [ "Configuring a LUN in the iSCSI Target", "iscsi.html#iscsi_lun", null ],
        [ "Configuring iSCSI Target via RPC method", "iscsi.html#iscsi_rpc", null ],
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
      [ "Block Device Abstraction Layer", "jsonrpc.html#jsonrpc_components_bdev", [
        [ "get_bdevs", "jsonrpc.html#rpc_get_bdevs", null ],
        [ "delete_bdev", "jsonrpc.html#rpc_delete_bdev", null ]
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
      [ "In this document", "nvme.html#nvme_toc", null ],
      [ "Introduction", "nvme.html#nvme_intro", null ],
      [ "Examples", "nvme.html#nvme_examples", [
        [ "Getting Start with Hello World", "nvme.html#nvme_helloworld", null ],
        [ "Running Benchmarks with Fio Plugin", "nvme.html#nvme_fioplugin", null ],
        [ "Running Benchmarks with Perf Tool", "nvme.html#nvme_perf", null ]
      ] ],
      [ "Public Interface", "nvme.html#nvme_interface", null ],
      [ "NVMe Driver Design", "nvme.html#nvme_design", [
        [ "NVMe I/O Submission", "nvme.html#nvme_io_submission", [
          [ "Scaling Performance", "nvme.html#nvme_scaling", null ]
        ] ],
        [ "NVMe Driver Internal Memory Usage", "nvme.html#nvme_memory_usage", null ]
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
        [ "Configuring the SPDK NVMe over Fabrics Target", "nvmf.html#nvmf_config", [
          [ "Subsystem Configuration", "nvmf.html#nvmf_config_subsystem", null ],
          [ "Assigning CPU Cores to the NVMe over Fabrics Target", "nvmf.html#nvmf_config_lcore", null ]
        ] ],
        [ "Configuring the Linux NVMe over Fabrics Host", "nvmf.html#nvmf_host", null ]
      ] ]
    ] ],
    [ "User Space Drivers", "userspace.html", [
      [ "Controlling Hardware From User Space", "userspace.html#userspace_control", null ],
      [ "Interrupts", "userspace.html#userspace_interrupts", null ],
      [ "Threading", "userspace.html#userspace_threading", null ]
    ] ],
    [ "Vagrant Development Environment", "vagrant.html", [
      [ "Introduction", "vagrant.html#vagrant_intro", null ],
      [ "VM Configuration", "vagrant.html#vagrant_config", null ],
      [ "Providers", "vagrant.html#vagrant_providers", null ],
      [ "Running An Example", "vagrant.html#vagrant_example", null ]
    ] ],
    [ "vhost", "vhost.html", [
      [ "Table of Contents", "vhost.html#vhost_toc", null ],
      [ "Introduction", "vhost.html#vhost_intro", null ],
      [ "Prerequisites", "vhost.html#vhost_prereqs", null ],
      [ "Starting SPDK vhost target", "vhost.html#vhost_start", null ],
      [ "SPDK Configuration", "vhost.html#vhost_config", [
        [ "Create bdev (block device)", "vhost.html#vhost_bdev_create", null ],
        [ "Create a virtio device", "vhost.html#vhost_vdev_create", null ],
        [ "QEMU", "vhost.html#vhost_qemu_config", null ],
        [ "Example output", "vhost.html#vhost_example", null ]
      ] ],
      [ "Advanced Topics", "vhost.html#vhost_advanced_topics", [
        [ "Multi-Queue Block Layer (blk-mq)", "vhost.html#vhost_multiqueue", null ],
        [ "Hot-attach/hot-detach", "vhost.html#vhost_hotattach", null ]
      ] ],
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
"about.html",
"crc32_8h.html#a51fc46bdf29f35610a0c99ae6ad0e009",
"histogram__data_8h.html#a873e5e5fe2c61b1724fa588df020d66a",
"json_8h.html#a5ba97519fb4d8431f8b5241379a06b2e",
"nvme_8h.html#af02e8c701c5496f163a69917ad5397dd",
"nvme__spec_8h.html#aa7e108757c0eebbac7e13b598a378210a8e0e2c7b955909ddf6aafad3e149dce9",
"nvmf__spec_8h.html#a87bd863f9d02822c078fb4446141ce25",
"scsi__spec_8h.html#a5b1c00e75e7ab3fffcca57bde36d43faa687f53602c78f7246e96ff77df374b36",
"structiscsi__bhs.html#ac71a83e89467d22b6b78c9937964e3dc",
"structiscsi__bhs__task__req.html#ae8414df0226ca4602d2464dfff1d9f53",
"structspdk__ioat__pq__hw__desc.html#a60c94d03450403ec46b2318088971f73",
"structspdk__nvme__ctrlr__data.html#ab2ab97678318cd3a557650b17a0c133e",
"structspdk__nvme__power__state.html#a590a64286a4f7bbc67dbdca13a59cde0",
"structspdk__nvmf__rdma__accept__private__data.html#a04fc397faefc26fa6b0db3527416d7a1",
"unionspdk__nvme__cc__register.html#a6be5f13e66cd6fd34c1463147cdfb106"
];

var SYNCONMSG = 'click to disable panel synchronisation';
var SYNCOFFMSG = 'click to enable panel synchronisation';