var NAVTREE =
[
  [ "SPDK", "index.html", [
    [ "Storage Performance Development Kit", "index.html", [
      [ "Introduction", "index.html#intro", null ],
      [ "Concepts", "index.html#concepts", null ],
      [ "User Guides", "index.html#user_guides", null ],
      [ "Programmer Guides", "index.html#general", null ],
      [ "Miscellaneous", "index.html#misc", null ],
      [ "Modules", "index.html#modules", null ],
      [ "Tools", "index.html#tools", null ],
      [ "Performance Reports", "index.html#performancereports", null ]
    ] ],
    [ "What is SPDK?", "about.html", null ],
    [ "Changelog", "changelog.html", [
      [ "v18.04: (Upcoming Release)", "changelog.html#changelog-v18-04", null ],
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
    [ "Writing a Custom Block Device Module", "bdev_module.html", null ],
    [ "Block Device Layer Programming Guide", "bdev_pg.html", null ],
    [ "Blobstore", "blob.html", null ],
    [ "BlobFS (Blobstore Filesystem)", "blobfs.html", [
      [ "BlobFS Getting Started Guide", "blobfs.html#blobfs_getting_started", null ],
      [ "RocksDB Integration", "blobfs.html#blobfs_rocksdb", null ]
    ] ],
    [ "Event Framework", "event.html", [
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
        [ "delete_nvmf_subsystem method", "jsonrpc.html#rpc_delete_nvmf_subsystem", null ],
        [ "nvmf_subsystem_add_listener  method", "jsonrpc.html#rpc_nvmf_subsystem_add_listener", null ],
        [ "nvmf_subsystem_add_ns method", "jsonrpc.html#rpc_nvmf_subsystem_add_ns", null ],
        [ "nvmf_subsystem_remove_ns method", "jsonrpc.html#rpc_nvmf_subsystem_remove_ns", null ]
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
    [ "NVMe over Fabrics Target Programming Guide", "nvmf_tgt_pg.html", null ],
    [ "Peer-2-Peer DMAs", "peer_2_peer.html", [
      [ "In this document", "peer_2_peer.html#p2p_toc", null ],
      [ "Overview", "peer_2_peer.html#p2p_overview", null ],
      [ "The P2P API for NVMe", "peer_2_peer.html#p2p_nvme_api", null ],
      [ "cmb_copy: An example P2P Application", "peer_2_peer.html#p2p_cmb_copy", null ],
      [ "Issues with P2P", "peer_2_peer.html#p2p_issues", null ]
    ] ],
    [ "SSD Internals", "ssd_internals.html", null ],
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
    [ "vhost Target", "vhost.html", [
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
"cpuset_8h.html#ab837bbccdfec21ca5c96c31735e44cb1",
"histogram__data_8h.html#a1cf0bd341c3d0b5fdbb3b9208cf9f91d",
"json_8h.html#a282fefd919b6a7df96d06d182621b7ae",
"nvme_8h.html#ace23485fea91d126a13fe706ce6d8843",
"nvme__spec_8h.html#aa70e5bbfae3ba9ec66a65c78e1966a1da193392369d152316a433ad87c5b5d5dd",
"nvmf__spec_8h.html#a0578627f30113b62cb183438a4437b3f",
"scsi__spec_8h.html#a35efeaeb4d8fb7a9b406846a2138b389a7c13b3996658e5a2cecfe85eeed8dabb",
"scsi__spec_8h.html#aca4b95e35566a60195e59be74e5a1218a366610ad4bf242d49884e7fdd38f48b3",
"structiscsi__bhs__reject.html#a2743eb6e31db7c79d0f33063486f8ce5",
"structspdk__ioat__dma__hw__desc.html#a549865702262d3c133d23a55ac5da07c",
"structspdk__nvme__ctrlr__data.html#a0c739ec5b01b092f9ef152ea594c4fda",
"structspdk__nvme__intel__temperature__page.html#ab64ba504715b6e017466e98e113d2ddb",
"structspdk__nvmf__fabric__auth__recv__cmd.html#aada34625f8015ab1c39a485505217fce",
"structspdk__trace__history.html#afc00e204c28b550c0dd2f8140a08e566",
"vhost_8h.html#a8b8c054fdc8ed4ad573b2d0bcf2d4797"
];

var SYNCONMSG = 'click to disable panel synchronisation';
var SYNCOFFMSG = 'click to enable panel synchronisation';