var prog_guides =
[
    [ "Blobstore Programmer's Guide", "blob.html", [
      [ "In this document", "blob.html#blob_pg_toc", null ],
      [ "Target Audience", "blob.html#blob_pg_audience", null ],
      [ "Introduction", "blob.html#blob_pg_intro", null ],
      [ "Theory of Operation", "blob.html#blob_pg_theory", null ],
      [ "Design Considerations", "blob.html#blob_pg_design", null ],
      [ "Examples", "blob.html#blob_pg_examples", null ],
      [ "Configuration", "blob.html#blob_pg_config", null ],
      [ "Component Detail", "blob.html#blob_pg_component", [
        [ "Blob cluster layout", "blob.html#blob_pg_cluster_layout", [
          [ "Thin Provisioning", "blob.html#blob_pg_thin_provisioning", null ],
          [ "Snapshots and Clones", "blob.html#blob_pg_snapshots", null ],
          [ "External Snapshots and Esnap Clones", "blob.html#blob_pg_esnap_and_esnap_clone", null ],
          [ "Copy-on-write", "blob.html#blob_pg_copy_on_write", null ]
        ] ]
      ] ]
    ] ],
    [ "Block Device Layer Programming Guide", "bdev_pg.html", null ],
    [ "Writing a Custom Block Device Module", "bdev_module.html", null ],
    [ "NVMe over Fabrics Target Programming Guide", "nvmf_tgt_pg.html", null ],
    [ "Flash Translation Layer", "ftl.html", [
      [ "Terminology", "ftl.html#ftl_terminology", [
        [ "Logical to physical address map", "ftl.html#ftl_l2p", null ],
        [ "Band", "ftl.html#ftl_band", null ],
        [ "Non volatile cache", "ftl.html#ftl_nvcache", null ],
        [ "Garbage collection and relocation", "ftl.html#ftl_reloc", null ]
      ] ],
      [ "Metadata", "ftl.html#ftl_metadata", null ],
      [ "Dirty shutdown recovery", "ftl.html#ftl_dirty_shutdown", [
        [ "Shared memory recovery", "ftl.html#ftl_shm_recovery", null ],
        [ "Trim", "ftl.html#ftl_trim", null ]
      ] ],
      [ "Usage", "ftl.html#ftl_usage", [
        [ "Prerequisites", "ftl.html#ftl_prereq", null ],
        [ "FTL bdev creation", "ftl.html#ftl_create", null ]
      ] ],
      [ "FTL bdev stack", "ftl.html#ftl_bdev_stack", null ]
    ] ],
    [ "GDB Macros User Guide", "gdb_macros.html", null ],
    [ "SPDK \"Reduce\" Block Compression Algorithm", "reduce.html", null ],
    [ "Notify library", "notify.html", [
      [ "Register event types", "notify.html#notify_register", null ],
      [ "Get info about events", "notify.html#notify_get_info", null ],
      [ "Get new events", "notify.html#notify_listen", null ],
      [ "Send events", "notify.html#notify_send", null ],
      [ "RPC Calls", "notify.html#rpc_calls", null ]
    ] ]
];