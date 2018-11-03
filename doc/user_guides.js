var user_guides =
[
    [ "An Overview of SPDK Applications", "app_overview.html", [
      [ "Configuring SPDK Applications", "app_overview.html#app_config", [
        [ "Command Line Parameters", "app_overview.html#app_cmd_line_args", [
          [ "Configuration file", "app_overview.html#cmd_arg_config_file", null ],
          [ "Limit coredump", "app_overview.html#cmd_arg_limit_coredump", null ],
          [ "Tracepoint group mask", "app_overview.html#cmd_arg_limit_tpoint_group_mask", null ],
          [ "Deferred initialization", "app_overview.html#cmd_arg_deferred_initialization", null ],
          [ "Create just one hugetlbfs file", "app_overview.html#cmd_arg_single_file_segments", null ],
          [ "Multi process mode", "app_overview.html#cmd_arg_multi_process", null ],
          [ "Memory size", "app_overview.html#cmd_arg_memory_size", null ],
          [ "Disable PCI access", "app_overview.html#cmd_arg_disable_pci_access", null ],
          [ "PCI address blacklist and whitelist", "app_overview.html#cmd_arg_pci_blacklist_whitelist", null ],
          [ "Unlink hugepage files after initialization", "app_overview.html#cmd_arg_huge_unlink", null ],
          [ "Debug log", "app_overview.html#cmd_arg_debug_log_flags", null ]
        ] ],
        [ "CPU mask", "app_overview.html#cpu_mask", null ]
      ] ]
    ] ],
    [ "iSCSI Target", "iscsi.html", [
      [ "iSCSI Target Getting Started Guide", "iscsi.html#iscsi_getting_started", [
        [ "Prerequisites", "iscsi.html#iscsi_prereqs", null ],
        [ "Configuring iSCSI Target via config file", "iscsi.html#iscsi_config", [
          [ "Assigning CPU Cores to the iSCSI Target", "iscsi.html#iscsi_config_lcore", null ],
          [ "Configuring a LUN in the iSCSI Target", "iscsi.html#iscsi_lun", null ]
        ] ],
        [ "Configuring iSCSI Target via RPC method", "iscsi.html#iscsi_rpc", null ],
        [ "Configuring iSCSI Initiator", "iscsi.html#iscsi_initiator", null ]
      ] ],
      [ "Vector Packet Processing", "iscsi.html#vpp", [
        [ "1. Building VPP (optional)", "iscsi.html#vpp_build", null ],
        [ "2. Installing VPP", "iscsi.html#vpp_install", null ],
        [ "3. Running VPP", "iscsi.html#vpp_run", null ],
        [ "4. Building SPDK with VPP", "iscsi.html#vpp_built_into_spdk", null ],
        [ "5. Running SPDK with VPP", "iscsi.html#vpp_running_with_spdk", null ]
      ] ],
      [ "iSCSI Hotplug", "iscsi.html#iscsi_hotplug", [
        [ "Known bugs and limitations", "iscsi.html#iscsi_hotplug_bugs", null ]
      ] ]
    ] ],
    [ "NVMe over Fabrics Target", "nvmf.html", [
      [ "NVMe-oF Target Getting Started Guide", "nvmf.html#nvmf_getting_started", [
        [ "Prerequisites", "nvmf.html#nvmf_prereqs", null ],
        [ "Prerequisites for InfiniBand/RDMA Verbs", "nvmf.html#nvmf_prereqs_verbs", null ],
        [ "Prerequisites for RDMA NICs", "nvmf.html#nvmf_prereqs_rdma_nics", null ],
        [ "Configuring the SPDK NVMe over Fabrics Target", "nvmf.html#nvmf_config", [
          [ "Using RPCs", "nvmf.html#nvmf_config_rpc", null ],
          [ "Assigning CPU Cores to the NVMe over Fabrics Target", "nvmf.html#nvmf_config_lcore", null ]
        ] ],
        [ "Configuring the Linux NVMe over Fabrics Host", "nvmf.html#nvmf_host", null ],
        [ "Enabling NVMe-oF target tracepoints for offline analysis and debug", "nvmf.html#nvmf_trace", null ],
        [ "RDMA Limitations", "nvmf.html#nvmf_rdma_limitations", null ]
      ] ]
    ] ],
    [ "vhost Target", "vhost.html", [
      [ "Table of Contents", "vhost.html#vhost_toc", null ],
      [ "Introduction", "vhost.html#vhost_intro", null ],
      [ "Prerequisites", "vhost.html#vhost_prereqs", [
        [ "Vhost Command Line Parameters", "vhost.html#vhost_cmd_line_args", null ]
      ] ],
      [ "Starting SPDK vhost target", "vhost.html#vhost_start", null ],
      [ "SPDK Configuration", "vhost.html#vhost_config", [
        [ "Create bdev (block device)", "vhost.html#vhost_bdev_create", null ],
        [ "Create a vhost device", "vhost.html#vhost_vdev_create", null ],
        [ "QEMU", "vhost.html#vhost_qemu_config", null ],
        [ "Example output", "vhost.html#vhost_example", null ]
      ] ],
      [ "Advanced Topics", "vhost.html#vhost_advanced_topics", [
        [ "Multi-Queue Block Layer (blk-mq)", "vhost.html#vhost_multiqueue", null ],
        [ "Hot-attach/hot-detach", "vhost.html#vhost_hotattach", null ]
      ] ],
      [ "Known bugs and limitations", "vhost.html#vhost_bugs", null ]
    ] ],
    [ "Block Device User Guide", "bdev.html", [
      [ "Introduction", "bdev.html#bdev_ug_introduction", null ],
      [ "Prerequisites", "bdev.html#bdev_ug_prerequisites", null ],
      [ "General Purpose RPCs", "bdev.html#bdev_ug_general_rpcs", [
        [ "get_bdevs", "bdev.html#bdev_ug_get_bdevs", null ],
        [ "set_bdev_qos_limit", "bdev.html#set_bdev_qos_limit", null ],
        [ "delete_bdev", "bdev.html#bdev_ug_delete_bdev", null ]
      ] ],
      [ "Ceph RBD", "bdev.html#bdev_config_rbd", null ],
      [ "Crypto Virtual Bdev Module", "bdev.html#bdev_config_crypto", null ],
      [ "GPT (GUID Partition Table)", "bdev.html#bdev_config_gpt", [
        [ "SPDK GPT partition table", "bdev.html#bdev_ug_gpt", null ],
        [ "Creating a GPT partition table using NBD", "bdev.html#bdev_ug_gpt_create_part", null ]
      ] ],
      [ "iSCSI bdev", "bdev.html#bdev_config_iscsi", null ],
      [ "Linux AIO bdev", "bdev.html#bdev_config_aio", null ],
      [ "Malloc bdev", "bdev.html#bdev_config_malloc", null ],
      [ "Null", "bdev.html#bdev_config_null", null ],
      [ "NVMe bdev", "bdev.html#bdev_config_nvme", null ],
      [ "Logical volumes", "bdev.html#bdev_ug_logical_volumes", [
        [ "Logical volume store", "bdev.html#bdev_ug_lvol_store", null ],
        [ "Lvols", "bdev.html#bdev_ug_lvols", null ]
      ] ],
      [ "Passthru", "bdev.html#bdev_config_passthru", null ],
      [ "Pmem", "bdev.html#bdev_config_pmem", null ],
      [ "Virtio Block", "bdev.html#bdev_config_virtio_blk", null ],
      [ "Virtio SCSI", "bdev.html#bdev_config_virtio_scsi", null ]
    ] ],
    [ "BlobFS (Blobstore Filesystem)", "blobfs.html", [
      [ "BlobFS Getting Started Guide", "blobfs.html#blobfs_getting_started", null ],
      [ "RocksDB Integration", "blobfs.html#blobfs_rocksdb", null ]
    ] ],
    [ "JSON-RPC Methods", "jsonrpc.html", [
      [ "Overview", "jsonrpc.html#jsonrpc_overview", [
        [ "Error response message", "jsonrpc.html#jsonrpc_error_message", [
          [ "Parser error", "jsonrpc.html#jsonrpc_parser_error", null ],
          [ "Invalid params", "jsonrpc.html#jsonrpc_invalid_params", null ]
        ] ]
      ] ],
      [ "App Framework", "jsonrpc.html#jsonrpc_components_app", [
        [ "kill_instance", "jsonrpc.html#rpc_kill_instance", null ],
        [ "context_switch_monitor", "jsonrpc.html#rpc_context_switch_monitor", null ],
        [ "start_subsystem_init", "jsonrpc.html#rpc_start_subsystem_init", null ],
        [ "get_rpc_methods", "jsonrpc.html#rpc_get_rpc_methods", null ],
        [ "get_subsystems", "jsonrpc.html#rpc_get_subsystems", null ],
        [ "get_subsystem_config", "jsonrpc.html#rpc_get_subsystem_config", null ]
      ] ],
      [ "Block Device Abstraction Layer", "jsonrpc.html#jsonrpc_components_bdev", [
        [ "set_bdev_options", "jsonrpc.html#rpc_set_bdev_options", null ],
        [ "get_bdevs", "jsonrpc.html#rpc_get_bdevs", null ],
        [ "get_bdevs_iostat", "jsonrpc.html#rpc_get_bdevs_iostat", null ],
        [ "delete_bdev", "jsonrpc.html#rpc_delete_bdev", null ],
        [ "set_bdev_qos_limit", "jsonrpc.html#rpc_set_bdev_qos_limit", null ],
        [ "construct_malloc_bdev", "jsonrpc.html#rpc_construct_malloc_bdev", null ],
        [ "delete_malloc_bdev", "jsonrpc.html#rpc_delete_malloc_bdev", null ],
        [ "construct_null_bdev", "jsonrpc.html#rpc_construct_null_bdev", null ],
        [ "delete_null_bdev", "jsonrpc.html#rpc_delete_null_bdev", null ],
        [ "construct_aio_bdev", "jsonrpc.html#rpc_construct_aio_bdev", null ],
        [ "delete_aio_bdev", "jsonrpc.html#rpc_delete_aio_bdev", null ],
        [ "set_bdev_nvme_options", "jsonrpc.html#rpc_set_bdev_nvme_options", null ],
        [ "set_bdev_nvme_hotplug", "jsonrpc.html#rpc_set_bdev_nvme_hotplug", null ],
        [ "construct_nvme_bdev", "jsonrpc.html#rpc_construct_nvme_bdev", null ],
        [ "get_nvme_controllers", "jsonrpc.html#rpc_get_nvme_controllers", null ],
        [ "delete_nvme_controller", "jsonrpc.html#rpc_delete_nvme_controller", null ],
        [ "construct_rbd_bdev", "jsonrpc.html#rpc_construct_rbd_bdev", null ],
        [ "delete_rbd_bdev", "jsonrpc.html#rpc_delete_rbd_bdev", null ],
        [ "construct_error_bdev", "jsonrpc.html#rpc_construct_error_bdev", null ],
        [ "delete_error_bdev", "jsonrpc.html#rpc_delete_error_bdev", null ],
        [ "construct_iscsi_bdev", "jsonrpc.html#rpc_construct_iscsi_bdev", null ],
        [ "delete_iscsi_bdev", "jsonrpc.html#rpc_delete_iscsi_bdev", null ],
        [ "create_pmem_pool", "jsonrpc.html#rpc_create_pmem_pool", null ],
        [ "pmem_pool_info", "jsonrpc.html#rpc_pmem_pool_info", null ],
        [ "delete_pmem_pool", "jsonrpc.html#rpc_delete_pmem_pool", null ],
        [ "construct_pmem_bdev", "jsonrpc.html#rpc_construct_pmem_bdev", null ],
        [ "delete_pmem_bdev", "jsonrpc.html#rpc_delete_pmem_bdev", null ],
        [ "construct_passthru_bdev", "jsonrpc.html#rpc_construct_passthru_bdev", null ],
        [ "delete_passthru_bdev", "jsonrpc.html#rpc_delete_passthru_bdev", null ],
        [ "construct_virtio_dev", "jsonrpc.html#rpc_construct_virtio_dev", null ],
        [ "construct_virtio_user_scsi_bdev", "jsonrpc.html#rpc_construct_virtio_user_scsi_bdev", null ],
        [ "construct_virtio_pci_scsi_bdev", "jsonrpc.html#rpc_construct_virtio_pci_scsi_bdev", null ],
        [ "construct_virtio_user_blk_bdev", "jsonrpc.html#rpc_construct_virtio_user_blk_bdev", null ],
        [ "construct_virtio_pci_blk_bdev", "jsonrpc.html#rpc_construct_virtio_pci_blk_bdev", null ],
        [ "get_virtio_scsi_devs", "jsonrpc.html#rpc_get_virtio_scsi_devs", null ],
        [ "remove_virtio_bdev", "jsonrpc.html#rpc_remove_virtio_bdev", null ]
      ] ],
      [ "iSCSI Target", "jsonrpc.html#jsonrpc_components_iscsi_tgt", [
        [ "set_iscsi_options method", "jsonrpc.html#rpc_set_iscsi_options", null ],
        [ "get_iscsi_global_params method", "jsonrpc.html#rpc_get_iscsi_global_params", null ],
        [ "set_iscsi_discovery_auth method", "jsonrpc.html#rpc_set_iscsi_discovery_auth", null ],
        [ "add_iscsi_auth_group method", "jsonrpc.html#rpc_add_iscsi_auth_group", [
          [ "secret", "jsonrpc.html#rpc_add_iscsi_auth_group_secret", null ]
        ] ],
        [ "delete_iscsi_auth_group method", "jsonrpc.html#rpc_delete_iscsi_auth_group", null ],
        [ "get_iscsi_auth_groups", "jsonrpc.html#rpc_get_iscsi_auth_groups", null ],
        [ "add_secret_to_iscsi_auth_group", "jsonrpc.html#rpc_add_secret_to_iscsi_auth_group", null ],
        [ "delete_secret_from_iscsi_auth_group", "jsonrpc.html#rpc_delete_secret_from_iscsi_auth_group", null ],
        [ "get_initiator_groups method", "jsonrpc.html#rpc_get_initiator_groups", null ],
        [ "add_initiator_group method", "jsonrpc.html#rpc_add_initiator_group", null ],
        [ "delete_initiator_group method", "jsonrpc.html#rpc_delete_initiator_group", null ],
        [ "add_initiators_to_initiator_group method", "jsonrpc.html#rpc_add_initiators_to_initiator_group", null ],
        [ "get_target_nodes method", "jsonrpc.html#rpc_get_target_nodes", null ],
        [ "construct_target_node method", "jsonrpc.html#rpc_construct_target_node", null ],
        [ "set_iscsi_target_node_auth method", "jsonrpc.html#rpc_set_iscsi_target_node_auth", null ],
        [ "add_pg_ig_maps method", "jsonrpc.html#rpc_add_pg_ig_maps", null ],
        [ "delete_pg_ig_maps method", "jsonrpc.html#rpc_delete_pg_ig_maps", null ],
        [ "delete_target_node method", "jsonrpc.html#rpc_delete_target_node", null ],
        [ "get_portal_groups method", "jsonrpc.html#rpc_get_portal_groups", null ],
        [ "add_portal_group method", "jsonrpc.html#rpc_add_portal_group", null ],
        [ "delete_portal_group method", "jsonrpc.html#rpc_delete_portal_group", null ],
        [ "get_iscsi_connections method", "jsonrpc.html#rpc_get_iscsi_connections", null ],
        [ "target_node_add_lun method", "jsonrpc.html#rpc_target_node_add_lun", null ]
      ] ],
      [ "NVMe-oF Target", "jsonrpc.html#jsonrpc_components_nvmf_tgt", [
        [ "get_nvmf_subsystems method", "jsonrpc.html#rpc_get_nvmf_subsystems", null ],
        [ "nvmf_subsystem_create method", "jsonrpc.html#rpc_nvmf_subsystem_create", null ],
        [ "delete_nvmf_subsystem method", "jsonrpc.html#rpc_delete_nvmf_subsystem", null ],
        [ "nvmf_subsystem_add_listener  method", "jsonrpc.html#rpc_nvmf_subsystem_add_listener", [
          [ "listen_address", "jsonrpc.html#rpc_nvmf_listen_address", null ]
        ] ],
        [ "nvmf_subsystem_add_ns method", "jsonrpc.html#rpc_nvmf_subsystem_add_ns", [
          [ "namespace", "jsonrpc.html#rpc_nvmf_namespace", null ]
        ] ],
        [ "nvmf_subsystem_remove_ns method", "jsonrpc.html#rpc_nvmf_subsystem_remove_ns", null ],
        [ "nvmf_subsystem_add_host method", "jsonrpc.html#rpc_nvmf_subsystem_add_host", null ],
        [ "nvmf_subsystem_remove_host method", "jsonrpc.html#rpc_nvmf_subsystem_remove_host", null ],
        [ "nvmf_subsystem_allow_any_host method", "jsonrpc.html#rpc_nvmf_subsystem_allow_any_host", null ],
        [ "set_nvmf_target_options", "jsonrpc.html#rpc_set_nvmf_target_options", null ],
        [ "set_nvmf_target_config", "jsonrpc.html#rpc_set_nvmf_target_config", null ],
        [ "get_nvmf_transports method", "jsonrpc.html#rpc_get_nvmf_transports", null ]
      ] ],
      [ "Vhost Target", "jsonrpc.html#jsonrpc_components_vhost_tgt", [
        [ "set_vhost_controller_coalescing", "jsonrpc.html#rpc_set_vhost_controller_coalescing", null ],
        [ "construct_vhost_scsi_controller", "jsonrpc.html#rpc_construct_vhost_scsi_controller", null ],
        [ "add_vhost_scsi_lun", "jsonrpc.html#rpc_add_vhost_scsi_lun", null ],
        [ "remove_vhost_scsi_target", "jsonrpc.html#rpc_remove_vhost_scsi_target", null ],
        [ "construct_vhost_nvme_controller", "jsonrpc.html#rpc_construct_vhost_nvme_controller", null ],
        [ "add_vhost_nvme_ns", "jsonrpc.html#rpc_add_vhost_nvme_ns", null ],
        [ "construct_vhost_blk_controller", "jsonrpc.html#rpc_construct_vhost_blk_controller", null ],
        [ "get_vhost_controllers", "jsonrpc.html#rpc_get_vhost_controllers", [
          [ "Response", "jsonrpc.html#rpc_get_vhost_controllers_response", null ],
          [ "Vhost block", "jsonrpc.html#rpc_get_vhost_controllers_blk", null ],
          [ "Vhost SCSI", "jsonrpc.html#rpc_get_vhost_controllers_scsi", null ],
          [ "Vhost SCSI LUN", "jsonrpc.html#rpc_get_vhost_controllers_scsi_luns", null ],
          [ "Vhost NVMe", "jsonrpc.html#rpc_get_vhost_controllers_nvme", null ]
        ] ],
        [ "remove_vhost_controller", "jsonrpc.html#rpc_remove_vhost_controller", null ]
      ] ],
      [ "Logical Volume", "jsonrpc.html#jsonrpc_components_lvol", [
        [ "construct_lvol_store", "jsonrpc.html#rpc_construct_lvol_store", null ],
        [ "destroy_lvol_store", "jsonrpc.html#rpc_destroy_lvol_store", null ],
        [ "get_lvol_stores", "jsonrpc.html#rpc_get_lvol_stores", null ],
        [ "rename_lvol_store", "jsonrpc.html#rpc_rename_lvol_store", null ],
        [ "construct_lvol_bdev", "jsonrpc.html#rpc_construct_lvol_bdev", null ],
        [ "snapshot_lvol_bdev", "jsonrpc.html#rpc_snapshot_lvol_bdev", null ],
        [ "clone_lvol_bdev", "jsonrpc.html#rpc_clone_lvol_bdev", null ],
        [ "rename_lvol_bdev", "jsonrpc.html#rpc_rename_lvol_bdev", null ],
        [ "resize_lvol_bdev", "jsonrpc.html#rpc_resize_lvol_bdev", null ],
        [ "destroy_lvol_bdev", "jsonrpc.html#rpc_destroy_lvol_bdev", null ],
        [ "inflate_lvol_bdev", "jsonrpc.html#rpc_inflate_lvol_bdev", null ],
        [ "decouple_parent_lvol_bdev", "jsonrpc.html#rpc_decouple_parent_lvol_bdev", null ],
        [ "send_nvme_cmd", "jsonrpc.html#rpc_send_nvme_cmd", null ]
      ] ]
    ] ],
    [ "JSON-RPC Remote access", "jsonrpc_proxy.html", null ]
];