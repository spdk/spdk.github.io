var user_guides =
[
    [ "System Configuration User Guide", "system_configuration.html", [
      [ "IOMMU configuration", "system_configuration.html#iommu_config", null ],
      [ "Running SPDK as non-priviledged user", "system_configuration.html#system_configuration_nonroot", [
        [ "Device access", "system_configuration.html#system_configuration_nonroot_device_access", null ],
        [ "Memory constraints", "system_configuration.html#system_configuration_nonroot_memory_constraints", null ]
      ] ]
    ] ],
    [ "SPDK Libraries", "libraries.html", [
      [ "Directory Structure", "libraries.html#structure", [
        [ "lib", "libraries.html#lib", null ],
        [ "module", "libraries.html#module", null ]
      ] ],
      [ "Library Conventions", "libraries.html#conventions", [
        [ "Headers", "libraries.html#headers", null ],
        [ "Naming Conventions", "libraries.html#naming", null ],
        [ "Map Files", "libraries.html#map", null ]
      ] ],
      [ "SPDK Shared Objects", "libraries.html#shared_objects", [
        [ "Shared Object Versioning", "libraries.html#versioning", null ],
        [ "Linking to Shared Objects", "libraries.html#so_linking", null ],
        [ "Replacing the env abstraction", "libraries.html#env_replacement", null ]
      ] ]
    ] ],
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
          [ "PCI address blocked and allowed lists", "app_overview.html#cmd_arg_pci_blocked_allowed", null ],
          [ "Unlink hugepage files after initialization", "app_overview.html#cmd_arg_huge_unlink", null ],
          [ "Log flag", "app_overview.html#cmd_arg_log_flags", null ]
        ] ],
        [ "CPU mask", "app_overview.html#cpu_mask", null ]
      ] ]
    ] ],
    [ "iSCSI Target", "iscsi.html", [
      [ "iSCSI Target Getting Started Guide", "iscsi.html#iscsi_getting_started", [
        [ "Prerequisites", "iscsi.html#iscsi_prereqs", [
          [ "Assigning CPU Cores to the iSCSI Target", "iscsi.html#iscsi_config_lcore", null ]
        ] ],
        [ "Configuring iSCSI Target via RPC method", "iscsi.html#iscsi_rpc", null ],
        [ "Configuring iSCSI Initiator", "iscsi.html#iscsi_initiator", null ]
      ] ],
      [ "iSCSI Hotplug", "iscsi.html#iscsi_hotplug", null ],
      [ "iSCSI Login Redirection", "iscsi.html#iscsi_login_redirection", null ]
    ] ],
    [ "NVMe over Fabrics Target", "nvmf.html", [
      [ "NVMe-oF Target Getting Started Guide", "nvmf.html#nvmf_getting_started", [
        [ "RDMA transport support", "nvmf.html#nvmf_rdma_transport", [
          [ "Prerequisites", "nvmf.html#nvmf_prereqs", null ],
          [ "Prerequisites for InfiniBand/RDMA Verbs", "nvmf.html#nvmf_prereqs_verbs", null ],
          [ "Prerequisites for RDMA NICs", "nvmf.html#nvmf_prereqs_rdma_nics", null ],
          [ "RDMA Limitations", "nvmf.html#nvmf_rdma_limitations", null ]
        ] ],
        [ "TCP transport support", "nvmf.html#nvmf_tcp_transport", null ],
        [ "Configuring the SPDK NVMe over Fabrics Target", "nvmf.html#nvmf_config", null ],
        [ "FC transport support", "nvmf.html#nvmf_fc_transport", [
          [ "Using RPCs", "nvmf.html#nvmf_config_rpc", null ],
          [ "Assigning CPU Cores to the NVMe over Fabrics Target", "nvmf.html#nvmf_config_lcore", null ]
        ] ],
        [ "Configuring the Linux NVMe over Fabrics Host", "nvmf.html#nvmf_host", null ],
        [ "Enabling NVMe-oF target tracepoints for offline analysis and debug", "nvmf.html#nvmf_trace", null ]
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
      [ "Target Audience", "bdev.html#bdev_ug_targetaudience", null ],
      [ "Introduction", "bdev.html#bdev_ug_introduction", null ],
      [ "Prerequisites", "bdev.html#bdev_ug_prerequisites", null ],
      [ "Configuring Block Device Modules", "bdev.html#bdev_ug_general_rpcs", null ],
      [ "Ceph RBD", "bdev.html#bdev_config_rbd", null ],
      [ "Compression Virtual Bdev Module", "bdev.html#bdev_config_compress", null ],
      [ "Crypto Virtual Bdev Module", "bdev.html#bdev_config_crypto", null ],
      [ "Delay Bdev Module", "bdev.html#bdev_config_delay", null ],
      [ "GPT (GUID Partition Table)", "bdev.html#bdev_config_gpt", [
        [ "SPDK GPT partition table", "bdev.html#bdev_ug_gpt", null ],
        [ "Creating a GPT partition table using NBD", "bdev.html#bdev_ug_gpt_create_part", null ]
      ] ],
      [ "iSCSI bdev", "bdev.html#bdev_config_iscsi", null ],
      [ "Linux AIO bdev", "bdev.html#bdev_config_aio", null ],
      [ "OCF Virtual bdev", "bdev.html#bdev_config_cas", null ],
      [ "Malloc bdev", "bdev.html#bdev_config_malloc", null ],
      [ "Null", "bdev.html#bdev_config_null", null ],
      [ "NVMe bdev", "bdev.html#bdev_config_nvme", [
        [ "NVMe bdev character device", "bdev.html#bdev_config_nvme_cuse", null ]
      ] ],
      [ "Logical volumes", "bdev.html#bdev_ug_logical_volumes", [
        [ "Logical volume store", "bdev.html#bdev_ug_lvol_store", null ],
        [ "Lvols", "bdev.html#bdev_ug_lvols", null ]
      ] ],
      [ "Passthru", "bdev.html#bdev_config_passthru", null ],
      [ "Pmem", "bdev.html#bdev_config_pmem", null ],
      [ "RAID", "bdev.html#bdev_ug_raid", null ],
      [ "Split", "bdev.html#bdev_ug_split", null ],
      [ "Uring", "bdev.html#bdev_ug_uring", null ],
      [ "Virtio Block", "bdev.html#bdev_config_virtio_blk", null ],
      [ "Virtio SCSI", "bdev.html#bdev_config_virtio_scsi", null ]
    ] ],
    [ "BlobFS (Blobstore Filesystem)", "blobfs.html", [
      [ "BlobFS Getting Started Guide", "blobfs.html#blobfs_getting_started", null ],
      [ "RocksDB Integration", "blobfs.html#blobfs_rocksdb", null ]
    ] ],
    [ "JSON-RPC", "jsonrpc.html", [
      [ "Overview", "jsonrpc.html#jsonrpc_overview", [
        [ "Error response message", "jsonrpc.html#jsonrpc_error_message", [
          [ "Parser error", "jsonrpc.html#jsonrpc_parser_error", null ],
          [ "Invalid params", "jsonrpc.html#jsonrpc_invalid_params", null ]
        ] ],
        [ "rpc.py", "jsonrpc.html#rpc_py", null ]
      ] ],
      [ "App Framework", "jsonrpc.html#jsonrpc_components_app", [
        [ "spdk_kill_instance", "jsonrpc.html#rpc_spdk_kill_instance", null ],
        [ "framework_monitor_context_switch", "jsonrpc.html#rpc_framework_monitor_context_switch", null ],
        [ "framework_start_init", "jsonrpc.html#rpc_framework_start_init", null ],
        [ "framework_wait_init", "jsonrpc.html#rpc_framework_wait_init", null ],
        [ "rpc_get_methods", "jsonrpc.html#rpc_rpc_get_methods", null ],
        [ "framework_get_subsystems", "jsonrpc.html#rpc_framework_get_subsystems", null ],
        [ "framework_get_config", "jsonrpc.html#rpc_framework_get_config", null ],
        [ "framework_get_reactors", "jsonrpc.html#rpc_framework_get_reactors", null ],
        [ "framework_set_scheduler", "jsonrpc.html#rpc_framework_set_scheduler", null ],
        [ "thread_get_stats", "jsonrpc.html#rpc_thread_get_stats", null ],
        [ "thread_set_cpumask", "jsonrpc.html#rpc_thread_set_cpumask", null ],
        [ "log_set_print_level", "jsonrpc.html#rpc_log_set_print_level", null ],
        [ "log_get_print_level", "jsonrpc.html#rpc_log_get_print_level", null ],
        [ "log_set_level", "jsonrpc.html#rpc_log_set_level", null ],
        [ "log_get_level", "jsonrpc.html#rpc_log_get_level", null ],
        [ "log_set_flag", "jsonrpc.html#rpc_log_set_flag", null ],
        [ "log_clear_flag", "jsonrpc.html#rpc_log_clear_flag", null ],
        [ "log_get_flags", "jsonrpc.html#rpc_log_get_flags", null ],
        [ "log_enable_timestamps", "jsonrpc.html#rpc_log_enable_timestamps", null ],
        [ "thread_get_pollers", "jsonrpc.html#rpc_thread_get_pollers", null ],
        [ "thread_get_io_channels", "jsonrpc.html#rpc_thread_get_io_channels", null ]
      ] ],
      [ "Block Device Abstraction Layer", "jsonrpc.html#jsonrpc_components_bdev", [
        [ "bdev_set_options", "jsonrpc.html#rpc_bdev_set_options", null ],
        [ "bdev_get_bdevs", "jsonrpc.html#rpc_bdev_get_bdevs", null ],
        [ "bdev_examine", "jsonrpc.html#rpc_bdev_examine", null ],
        [ "bdev_get_iostat", "jsonrpc.html#rpc_bdev_get_iostat", null ],
        [ "bdev_enable_histogram", "jsonrpc.html#rpc_bdev_enable_histogram", null ],
        [ "bdev_get_histogram", "jsonrpc.html#rpc_bdev_get_histogram", null ],
        [ "bdev_set_qos_limit", "jsonrpc.html#rpc_bdev_set_qos_limit", null ],
        [ "bdev_compress_create", "jsonrpc.html#rpc_bdev_compress_create", null ],
        [ "bdev_compress_delete", "jsonrpc.html#rpc_bdev_compress_delete", null ],
        [ "bdev_compress_get_orphans", "jsonrpc.html#rpc_bdev_compress_get_orphans", null ],
        [ "bdev_compress_set_pmd", "jsonrpc.html#rpc_bdev_compress_set_pmd", null ],
        [ "bdev_crypto_create", "jsonrpc.html#rpc_bdev_crypto_create", null ],
        [ "bdev_crypto_delete", "jsonrpc.html#rpc_bdev_crypto_delete", null ],
        [ "bdev_ocf_create", "jsonrpc.html#rpc_bdev_ocf_create", null ],
        [ "bdev_ocf_delete", "jsonrpc.html#rpc_bdev_ocf_delete", null ],
        [ "bdev_ocf_get_stats", "jsonrpc.html#rpc_bdev_ocf_get_stats", null ],
        [ "bdev_ocf_get_bdevs", "jsonrpc.html#rpc_bdev_ocf_get_bdevs", null ],
        [ "bdev_malloc_create", "jsonrpc.html#rpc_bdev_malloc_create", null ],
        [ "bdev_malloc_delete", "jsonrpc.html#rpc_bdev_malloc_delete", null ],
        [ "bdev_null_create", "jsonrpc.html#rpc_bdev_null_create", null ],
        [ "bdev_null_delete", "jsonrpc.html#rpc_bdev_null_delete", null ],
        [ "bdev_aio_create", "jsonrpc.html#rpc_bdev_aio_create", null ],
        [ "bdev_aio_delete", "jsonrpc.html#rpc_bdev_aio_delete", null ],
        [ "bdev_nvme_set_options", "jsonrpc.html#rpc_bdev_nvme_set_options", null ],
        [ "bdev_nvme_set_hotplug", "jsonrpc.html#rpc_bdev_nvme_set_hotplug", null ],
        [ "bdev_nvme_attach_controller", "jsonrpc.html#rpc_bdev_nvme_attach_controller", null ],
        [ "bdev_nvme_get_controllers", "jsonrpc.html#rpc_bdev_nvme_get_controllers", null ],
        [ "bdev_nvme_detach_controller", "jsonrpc.html#rpc_bdev_nvme_detach_controller", null ],
        [ "bdev_nvme_cuse_register", "jsonrpc.html#rpc_bdev_nvme_cuse_register", null ],
        [ "bdev_nvme_cuse_unregister", "jsonrpc.html#rpc_bdev_nvme_cuse_unregister", null ],
        [ "bdev_rbd_create", "jsonrpc.html#rpc_bdev_rbd_create", null ],
        [ "bdev_rbd_delete", "jsonrpc.html#rpc_bdev_rbd_delete", null ],
        [ "bdev_rbd_resize", "jsonrpc.html#rpc_bdev_rbd_resize", null ],
        [ "bdev_delay_create", "jsonrpc.html#rpc_bdev_delay_create", null ],
        [ "bdev_delay_delete", "jsonrpc.html#rpc_bdev_delay_delete", null ],
        [ "bdev_delay_update_latency", "jsonrpc.html#rpc_bdev_delay_update_latency", null ],
        [ "bdev_error_create", "jsonrpc.html#rpc_bdev_error_create", null ],
        [ "bdev_error_delete", "jsonrpc.html#rpc_bdev_error_delete", null ],
        [ "bdev_iscsi_create", "jsonrpc.html#rpc_bdev_iscsi_create", null ],
        [ "bdev_iscsi_delete", "jsonrpc.html#rpc_bdev_iscsi_delete", null ],
        [ "bdev_ftl_create", "jsonrpc.html#rpc_bdev_ftl_create", null ],
        [ "bdev_ftl_delete", "jsonrpc.html#rpc_bdev_ftl_delete", null ],
        [ "bdev_pmem_create_pool", "jsonrpc.html#rpc_bdev_pmem_create_pool", null ],
        [ "bdev_pmem_get_pool_info", "jsonrpc.html#rpc_bdev_pmem_get_pool_info", null ],
        [ "bdev_pmem_delete_pool", "jsonrpc.html#rpc_bdev_pmem_delete_pool", null ],
        [ "bdev_pmem_create", "jsonrpc.html#rpc_bdev_pmem_create", null ],
        [ "bdev_pmem_delete", "jsonrpc.html#rpc_bdev_pmem_delete", null ],
        [ "bdev_passthru_create", "jsonrpc.html#rpc_bdev_passthru_create", null ],
        [ "bdev_passthru_delete", "jsonrpc.html#rpc_bdev_passthru_delete", null ],
        [ "bdev_virtio_attach_controller", "jsonrpc.html#rpc_bdev_virtio_attach_controller", null ],
        [ "bdev_virtio_scsi_get_devices", "jsonrpc.html#rpc_bdev_virtio_scsi_get_devices", null ],
        [ "bdev_virtio_detach_controller", "jsonrpc.html#rpc_bdev_virtio_detach_controller", null ]
      ] ],
      [ "iSCSI Target", "jsonrpc.html#jsonrpc_components_iscsi_tgt", [
        [ "iscsi_set_options method", "jsonrpc.html#rpc_iscsi_set_options", null ],
        [ "iscsi_get_options method", "jsonrpc.html#rpc_iscsi_get_options", null ],
        [ "iscsi_set_discovery_auth method", "jsonrpc.html#rpc_iscsi_set_discovery_auth", null ],
        [ "iscsi_create_auth_group method", "jsonrpc.html#rpc_iscsi_create_auth_group", [
          [ "secret", "jsonrpc.html#rpc_iscsi_create_auth_group_secret", null ]
        ] ],
        [ "iscsi_delete_auth_group method", "jsonrpc.html#rpc_iscsi_delete_auth_group", null ],
        [ "iscsi_get_auth_groups", "jsonrpc.html#rpc_iscsi_get_auth_groups", null ],
        [ "iscsi_auth_group_add_secret", "jsonrpc.html#rpc_iscsi_auth_group_add_secret", null ],
        [ "iscsi_auth_group_remove_secret", "jsonrpc.html#rpc_iscsi_auth_group_remove_secret", null ],
        [ "iscsi_get_initiator_groups method", "jsonrpc.html#rpc_iscsi_get_initiator_groups", null ],
        [ "iscsi_create_initiator_group method", "jsonrpc.html#rpc_iscsi_create_initiator_group", null ],
        [ "iscsi_delete_initiator_group method", "jsonrpc.html#rpc_iscsi_delete_initiator_group", null ],
        [ "iscsi_initiator_group_add_initiators method", "jsonrpc.html#rpc_iscsi_initiator_group_add_initiators", null ],
        [ "iscsi_initiator_group_remove_initiators method", "jsonrpc.html#rpc_iscsi_initiator_group_remove_initiators", null ],
        [ "iscsi_get_target_nodes method", "jsonrpc.html#rpc_iscsi_get_target_nodes", null ],
        [ "iscsi_create_target_node method", "jsonrpc.html#rpc_iscsi_create_target_node", null ],
        [ "iscsi_target_node_set_auth method", "jsonrpc.html#rpc_iscsi_target_node_set_auth", null ],
        [ "iscsi_target_node_add_pg_ig_maps method", "jsonrpc.html#rpc_iscsi_target_node_add_pg_ig_maps", null ],
        [ "iscsi_target_node_remove_pg_ig_maps method", "jsonrpc.html#rpc_iscsi_target_node_remove_pg_ig_maps", null ],
        [ "iscsi_delete_target_node method", "jsonrpc.html#rpc_iscsi_delete_target_node", null ],
        [ "iscsi_get_portal_groups method", "jsonrpc.html#rpc_iscsi_get_portal_groups", null ],
        [ "iscsi_create_portal_group method", "jsonrpc.html#rpc_iscsi_create_portal_group", null ],
        [ "iscsi_start_portal_group method", "jsonrpc.html#rpc_iscsi_start_portal_group", null ],
        [ "iscsi_delete_portal_group method", "jsonrpc.html#rpc_iscsi_delete_portal_group", null ],
        [ "iscsi_portal_group_set_auth method", "jsonrpc.html#rpc_iscsi_portal_group_set_auth", null ],
        [ "iscsi_get_connections method", "jsonrpc.html#rpc_iscsi_get_connections", null ],
        [ "iscsi_target_node_add_lun method", "jsonrpc.html#rpc_iscsi_target_node_add_lun", null ],
        [ "iscsi_target_node_set_redirect method", "jsonrpc.html#rpc_iscsi_target_node_set_redirect", null ],
        [ "iscsi_target_node_request_logout method", "jsonrpc.html#rpc_iscsi_target_node_request_logout", null ]
      ] ],
      [ "NVMe-oF Target", "jsonrpc.html#jsonrpc_components_nvmf_tgt", [
        [ "nvmf_create_transport method", "jsonrpc.html#rpc_nvmf_create_transport", null ],
        [ "nvmf_get_subsystems method", "jsonrpc.html#rpc_nvmf_get_subsystems", null ],
        [ "nvmf_create_subsystem method", "jsonrpc.html#rpc_nvmf_create_subsystem", null ],
        [ "nvmf_delete_subsystem method", "jsonrpc.html#rpc_nvmf_delete_subsystem", null ],
        [ "nvmf_subsystem_add_listener  method", "jsonrpc.html#rpc_nvmf_subsystem_add_listener", [
          [ "listen_address", "jsonrpc.html#rpc_nvmf_listen_address", null ]
        ] ],
        [ "nvmf_subsystem_remove_listener  method", "jsonrpc.html#rpc_nvmf_subsystem_remove_listener", null ],
        [ "nvmf_subsystem_listener_set_ana_state  method", "jsonrpc.html#rpc_nvmf_subsystem_listener_set_ana_state", null ],
        [ "nvmf_subsystem_add_ns method", "jsonrpc.html#rpc_nvmf_subsystem_add_ns", [
          [ "namespace", "jsonrpc.html#rpc_nvmf_namespace", null ]
        ] ],
        [ "nvmf_subsystem_remove_ns method", "jsonrpc.html#rpc_nvmf_subsystem_remove_ns", null ],
        [ "nvmf_subsystem_add_host method", "jsonrpc.html#rpc_nvmf_subsystem_add_host", null ],
        [ "nvmf_subsystem_remove_host method", "jsonrpc.html#rpc_nvmf_subsystem_remove_host", null ],
        [ "nvmf_subsystem_allow_any_host method", "jsonrpc.html#rpc_nvmf_subsystem_allow_any_host", null ],
        [ "nvmf_subsystem_get_controllers", "jsonrpc.html#rpc_nvmf_subsystem_get_controllers", null ],
        [ "nvmf_subsystem_get_qpairs", "jsonrpc.html#rpc_nvmf_subsystem_get_qpairs", null ],
        [ "nvmf_subsystem_get_listeners", "jsonrpc.html#rpc_nvmf_subsystem_get_listeners", null ],
        [ "nvmf_set_max_subsystems", "jsonrpc.html#rpc_nvmf_set_max_subsystems", null ],
        [ "nvmf_set_config", "jsonrpc.html#rpc_nvmf_set_config", [
          [ "admin_cmd_passthru", "jsonrpc.html#spdk_nvmf_admin_passthru_conf", null ]
        ] ],
        [ "nvmf_get_transports method", "jsonrpc.html#rpc_nvmf_get_transports", null ],
        [ "nvmf_get_stats method", "jsonrpc.html#rpc_nvmf_get_stats", null ]
      ] ],
      [ "Vhost Target", "jsonrpc.html#jsonrpc_components_vhost_tgt", [
        [ "vhost_controller_set_coalescing", "jsonrpc.html#rpc_vhost_controller_set_coalescing", null ],
        [ "vhost_create_scsi_controller", "jsonrpc.html#rpc_vhost_create_scsi_controller", null ],
        [ "vhost_scsi_controller_add_target", "jsonrpc.html#rpc_vhost_scsi_controller_add_target", null ],
        [ "vhost_scsi_controller_remove_target", "jsonrpc.html#rpc_vhost_scsi_controller_remove_target", null ],
        [ "vhost_create_blk_controller", "jsonrpc.html#rpc_vhost_create_blk_controller", null ],
        [ "vhost_get_controllers", "jsonrpc.html#rpc_vhost_get_controllers", [
          [ "Response", "jsonrpc.html#rpc_vhost_get_controllers_response", null ],
          [ "Vhost block", "jsonrpc.html#rpc_vhost_get_controllers_blk", null ],
          [ "Vhost SCSI", "jsonrpc.html#rpc_vhost_get_controllers_scsi", null ],
          [ "Vhost SCSI LUN", "jsonrpc.html#rpc_vhost_get_controllers_scsi_luns", null ],
          [ "Vhost NVMe", "jsonrpc.html#rpc_vhost_get_controllers_nvme", null ]
        ] ],
        [ "vhost_delete_controller", "jsonrpc.html#rpc_vhost_delete_controller", null ]
      ] ],
      [ "Logical Volume", "jsonrpc.html#jsonrpc_components_lvol", [
        [ "bdev_lvol_create_lvstore", "jsonrpc.html#rpc_bdev_lvol_create_lvstore", null ],
        [ "bdev_lvol_delete_lvstore", "jsonrpc.html#rpc_bdev_lvol_delete_lvstore", null ],
        [ "bdev_lvol_get_lvstores", "jsonrpc.html#rpc_bdev_lvol_get_lvstores", null ],
        [ "bdev_lvol_rename_lvstore", "jsonrpc.html#rpc_bdev_lvol_rename_lvstore", null ],
        [ "bdev_lvol_create", "jsonrpc.html#rpc_bdev_lvol_create", null ],
        [ "bdev_lvol_snapshot", "jsonrpc.html#rpc_bdev_lvol_snapshot", null ],
        [ "bdev_lvol_clone", "jsonrpc.html#rpc_bdev_lvol_clone", null ],
        [ "bdev_lvol_rename", "jsonrpc.html#rpc_bdev_lvol_rename", null ],
        [ "bdev_lvol_resize", "jsonrpc.html#rpc_bdev_lvol_resize", null ],
        [ "bdev_lvol_set_read_only", "jsonrpc.html#rpc_bdev_lvol_set_read_only", null ],
        [ "bdev_lvol_delete", "jsonrpc.html#rpc_bdev_lvol_delete", null ],
        [ "bdev_lvol_inflate", "jsonrpc.html#rpc_bdev_lvol_inflate", null ],
        [ "bdev_lvol_decouple_parent", "jsonrpc.html#rpc_bdev_lvol_decouple_parent", null ],
        [ "bdev_raid_get_bdevs", "jsonrpc.html#rpc_bdev_raid_get_bdevs", null ],
        [ "bdev_raid_create", "jsonrpc.html#rpc_bdev_raid_create", null ],
        [ "bdev_raid_delete", "jsonrpc.html#rpc_bdev_raid_delete", null ],
        [ "bdev_nvme_opal_init", "jsonrpc.html#rpc_bdev_nvme_opal_init", null ],
        [ "bdev_nvme_opal_revert", "jsonrpc.html#rpc_bdev_nvme_opal_revert", null ],
        [ "bdev_opal_create", "jsonrpc.html#rpc_bdev_opal_create", null ],
        [ "bdev_opal_get_info", "jsonrpc.html#rpc_bdev_opal_get_info", null ],
        [ "bdev_opal_delete", "jsonrpc.html#rpc_bdev_opal_delete", null ],
        [ "bdev_opal_new_user", "jsonrpc.html#rpc_bdev_opal_new_user", null ],
        [ "bdev_opal_set_lock_state", "jsonrpc.html#rpc_bdev_opal_set_lock_state", null ],
        [ "notify_get_types", "jsonrpc.html#rpc_notify_get_types", null ],
        [ "notify_get_notifications", "jsonrpc.html#notify_get_notifications", null ]
      ] ],
      [ "Linux Network Block Device (NBD)", "jsonrpc.html#jsonrpc_components_nbd", [
        [ "nbd_start_disk", "jsonrpc.html#rpc_nbd_start_disk", null ],
        [ "nbd_stop_disk", "jsonrpc.html#rpc_nbd_stop_disk", null ],
        [ "nbd_get_disks", "jsonrpc.html#rpc_nbd_get_disks", null ]
      ] ],
      [ "Blobfs", "jsonrpc.html#jsonrpc_components_blobfs", [
        [ "blobfs_detect", "jsonrpc.html#rpc_blobfs_detect", null ],
        [ "blobfs_create", "jsonrpc.html#rpc_blobfs_create", null ],
        [ "blobfs_mount", "jsonrpc.html#rpc_blobfs_mount", null ],
        [ "blobfs_set_cache_size", "jsonrpc.html#rpc_blobfs_set_cache_size", null ]
      ] ],
      [ "Socket layer", "jsonrpc.html#jsonrpc_components_sock", [
        [ "sock_impl_get_options", "jsonrpc.html#rpc_sock_impl_get_options", null ],
        [ "sock_impl_set_options", "jsonrpc.html#rpc_sock_impl_set_options", null ],
        [ "sock_set_default_impl", "jsonrpc.html#rpc_sock_set_default_impl", null ],
        [ "bdev_nvme_send_cmd", "jsonrpc.html#rpc_bdev_nvme_send_cmd", null ],
        [ "spdk_get_version", "jsonrpc.html#rpc_spdk_get_version", null ]
      ] ]
    ] ],
    [ "JSON-RPC Remote access", "jsonrpc_proxy.html", null ]
];