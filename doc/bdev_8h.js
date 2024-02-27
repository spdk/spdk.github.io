var bdev_8h =
[
    [ "spdk_bdev_media_event", "structspdk__bdev__media__event.html", "structspdk__bdev__media__event" ],
    [ "spdk_bdev_io_stat", "structspdk__bdev__io__stat.html", "structspdk__bdev__io__stat" ],
    [ "spdk_bdev_opts", "structspdk__bdev__opts.html", "structspdk__bdev__opts" ],
    [ "spdk_bdev_ext_io_opts", "structspdk__bdev__ext__io__opts.html", "structspdk__bdev__ext__io__opts" ],
    [ "spdk_bdev_open_async_opts", "structspdk__bdev__open__async__opts.html", "structspdk__bdev__open__async__opts" ],
    [ "spdk_bdev_io_wait_entry", "structspdk__bdev__io__wait__entry.html", "structspdk__bdev__io__wait__entry" ],
    [ "SPDK_BDEV_BUF_SIZE_WITH_MD", "bdev_8h.html#a60c60455b0ae9e1c8139bb24df036d6d", null ],
    [ "SPDK_BDEV_LARGE_BUF_MAX_SIZE", "bdev_8h.html#a9496c34e0fc135e1f309fd586e8e65d0", null ],
    [ "SPDK_BDEV_MAX_INTERLEAVED_MD_SIZE", "bdev_8h.html#a9a20cbee5def3eb9f9893d60ba70103e", null ],
    [ "SPDK_BDEV_SMALL_BUF_MAX_SIZE", "bdev_8h.html#a22219ae3fb084dcb87bcc6d454b415aa", null ],
    [ "spdk_bdev_event_cb_t", "bdev_8h.html#ab4755b1b0a2a204732c3be266b6e1b08", null ],
    [ "spdk_bdev_fini_cb", "bdev_8h.html#ad33efc88148d8984b353e54b7ee0058f", null ],
    [ "spdk_bdev_for_each_channel_done", "bdev_8h.html#a16f406e9a97a6ac7072867bdcc7c1df1", null ],
    [ "spdk_bdev_for_each_channel_msg", "bdev_8h.html#a4ac2a1bd295f6c71dbe706e61f5f6ac4", null ],
    [ "spdk_bdev_get_device_stat_cb", "bdev_8h.html#a1e2b47e30b56bc875b618beffced9662", null ],
    [ "spdk_bdev_histogram_data_cb", "bdev_8h.html#abbca76276132f1e14e9d2e5fda17a12a", null ],
    [ "spdk_bdev_histogram_status_cb", "bdev_8h.html#ab34045ef60486be1ea00198807bd66c8", null ],
    [ "spdk_bdev_init_cb", "bdev_8h.html#aa6a8987bb3a1bc368881f6b81d249bd3", null ],
    [ "spdk_bdev_io_completion_cb", "bdev_8h.html#a0c5602dfd313f90032dd91683b9663e3", null ],
    [ "spdk_bdev_io_timeout_cb", "bdev_8h.html#a83db84993554e784cbddf2d217f6ea4f", null ],
    [ "spdk_bdev_io_wait_cb", "bdev_8h.html#a9c7e19e090b8cdb22e8fc6b1984e5278", null ],
    [ "spdk_bdev_open_async_cb_t", "bdev_8h.html#a0253fe337c6697d014adffde6f8cd000", null ],
    [ "spdk_bdev_remove_cb_t", "bdev_8h.html#a51a55c97586c2d524fffcabc4d7910d6", null ],
    [ "spdk_bdev_wait_for_examine_cb", "bdev_8h.html#af8ee74dcabcf41f4332c7e75b4afa11a", null ],
    [ "spdk_for_each_bdev_fn", "bdev_8h.html#a4163854db79e0e3b211dd72ca031fbb0", null ],
    [ "spdk_bdev_event_type", "bdev_8h.html#a13e432c6b290dcf392335a406206fd83", [
      [ "SPDK_BDEV_EVENT_REMOVE", "bdev_8h.html#a13e432c6b290dcf392335a406206fd83a89f4612602ac5a085667f620b767f9b9", null ],
      [ "SPDK_BDEV_EVENT_RESIZE", "bdev_8h.html#a13e432c6b290dcf392335a406206fd83acb97bc25f59f9d5ee74131c74d46febc", null ],
      [ "SPDK_BDEV_EVENT_MEDIA_MANAGEMENT", "bdev_8h.html#a13e432c6b290dcf392335a406206fd83ac1bed935ec177b0aa93e5c1c9780d22e", null ]
    ] ],
    [ "spdk_bdev_io_type", "bdev_8h.html#a633029e24ab5ae4a689bffa2565a519f", [
      [ "SPDK_BDEV_IO_TYPE_INVALID", "bdev_8h.html#a633029e24ab5ae4a689bffa2565a519fa9772bec2b4589e73cb1482b22bf1d830", null ],
      [ "SPDK_BDEV_IO_TYPE_READ", "bdev_8h.html#a633029e24ab5ae4a689bffa2565a519fa082387ea2a8c07af3dc4be2efbddd8b5", null ],
      [ "SPDK_BDEV_IO_TYPE_WRITE", "bdev_8h.html#a633029e24ab5ae4a689bffa2565a519fadd40cc27c991938e52e29d4f302035d3", null ],
      [ "SPDK_BDEV_IO_TYPE_UNMAP", "bdev_8h.html#a633029e24ab5ae4a689bffa2565a519fa6a5cf239682a76fac4fa9c5c4cc686cb", null ],
      [ "SPDK_BDEV_IO_TYPE_FLUSH", "bdev_8h.html#a633029e24ab5ae4a689bffa2565a519fa05c8dadf3dd98d26b4b5c69be05e565b", null ],
      [ "SPDK_BDEV_IO_TYPE_RESET", "bdev_8h.html#a633029e24ab5ae4a689bffa2565a519fa2c98e0128da7b8921933cadac03c2611", null ],
      [ "SPDK_BDEV_IO_TYPE_NVME_ADMIN", "bdev_8h.html#a633029e24ab5ae4a689bffa2565a519faa50f563003db009f2aaa66fc1e8c4b83", null ],
      [ "SPDK_BDEV_IO_TYPE_NVME_IO", "bdev_8h.html#a633029e24ab5ae4a689bffa2565a519fa88e44705d375863181f5b64de01ab415", null ],
      [ "SPDK_BDEV_IO_TYPE_NVME_IO_MD", "bdev_8h.html#a633029e24ab5ae4a689bffa2565a519faaed3a468fd479a2abb44a4c9354e9130", null ],
      [ "SPDK_BDEV_IO_TYPE_WRITE_ZEROES", "bdev_8h.html#a633029e24ab5ae4a689bffa2565a519fafe05a68dda7f3bdfa3d91bab8a92960a", null ],
      [ "SPDK_BDEV_IO_TYPE_ZCOPY", "bdev_8h.html#a633029e24ab5ae4a689bffa2565a519fa6471d47a721be4be33373ff4c36d5246", null ],
      [ "SPDK_BDEV_IO_TYPE_GET_ZONE_INFO", "bdev_8h.html#a633029e24ab5ae4a689bffa2565a519facabcac1e5a1a6746bf8fe6b488f39f9f", null ],
      [ "SPDK_BDEV_IO_TYPE_ZONE_MANAGEMENT", "bdev_8h.html#a633029e24ab5ae4a689bffa2565a519fa34ce78290ebe4963c471bf741689c113", null ],
      [ "SPDK_BDEV_IO_TYPE_ZONE_APPEND", "bdev_8h.html#a633029e24ab5ae4a689bffa2565a519fa0be425e7142d2e0adedd4a883ef0dc0f", null ],
      [ "SPDK_BDEV_IO_TYPE_COMPARE", "bdev_8h.html#a633029e24ab5ae4a689bffa2565a519fa2df554da6afc1daaa7313fa25fb24623", null ],
      [ "SPDK_BDEV_IO_TYPE_COMPARE_AND_WRITE", "bdev_8h.html#a633029e24ab5ae4a689bffa2565a519fa0475ddf806a6b7ee01dbd6336a5deb6f", null ],
      [ "SPDK_BDEV_IO_TYPE_ABORT", "bdev_8h.html#a633029e24ab5ae4a689bffa2565a519fa57d0b0477d9c04c9df1119d223c14ca4", null ],
      [ "SPDK_BDEV_IO_TYPE_SEEK_HOLE", "bdev_8h.html#a633029e24ab5ae4a689bffa2565a519fa8c86acecb32726a5430ab1b33865638b", null ],
      [ "SPDK_BDEV_IO_TYPE_SEEK_DATA", "bdev_8h.html#a633029e24ab5ae4a689bffa2565a519fa1305efd089b10195eab818df329985e6", null ],
      [ "SPDK_BDEV_IO_TYPE_COPY", "bdev_8h.html#a633029e24ab5ae4a689bffa2565a519fae3e0fb4f93d6a7b5539f856a96f19c39", null ],
      [ "SPDK_BDEV_IO_TYPE_NVME_IOV_MD", "bdev_8h.html#a633029e24ab5ae4a689bffa2565a519fabd34ae35fca365445629997b2085f652", null ],
      [ "SPDK_BDEV_NUM_IO_TYPES", "bdev_8h.html#a633029e24ab5ae4a689bffa2565a519fab8b20053cecdcd7973f1c2d0dce2b457", null ]
    ] ],
    [ "spdk_bdev_qos_rate_limit_type", "bdev_8h.html#aedfbfc44fa2113d7ee219d09a0994d93", [
      [ "SPDK_BDEV_QOS_RW_IOPS_RATE_LIMIT", "bdev_8h.html#aedfbfc44fa2113d7ee219d09a0994d93a679f76e345c7295f991eeb84d977e5b0", null ],
      [ "SPDK_BDEV_QOS_RW_BPS_RATE_LIMIT", "bdev_8h.html#aedfbfc44fa2113d7ee219d09a0994d93a595aaec5bb61bcbdc9f08e111cfd0943", null ],
      [ "SPDK_BDEV_QOS_R_BPS_RATE_LIMIT", "bdev_8h.html#aedfbfc44fa2113d7ee219d09a0994d93af9ae83e85454b81d7210cc97b1507a1d", null ],
      [ "SPDK_BDEV_QOS_W_BPS_RATE_LIMIT", "bdev_8h.html#aedfbfc44fa2113d7ee219d09a0994d93a1b3f5fed3a3173110561ff7c58f211dc", null ],
      [ "SPDK_BDEV_QOS_NUM_RATE_LIMIT_TYPES", "bdev_8h.html#aedfbfc44fa2113d7ee219d09a0994d93a25c0a2574ea232ae0fd9fd3969c00b11", null ]
    ] ],
    [ "spdk_bdev_status", "bdev_8h.html#ad6c166f5d928c2995df57c96a2977862", [
      [ "SPDK_BDEV_STATUS_INVALID", "bdev_8h.html#ad6c166f5d928c2995df57c96a2977862a8ae156ac27597e66878248e0b2ed0dff", null ],
      [ "SPDK_BDEV_STATUS_READY", "bdev_8h.html#ad6c166f5d928c2995df57c96a2977862a81b16f97132d8245c61f02fd94b4ec11", null ],
      [ "SPDK_BDEV_STATUS_UNREGISTERING", "bdev_8h.html#ad6c166f5d928c2995df57c96a2977862a5d925fc967dea1f6d58c0acf82d6ef98", null ],
      [ "SPDK_BDEV_STATUS_REMOVING", "bdev_8h.html#ad6c166f5d928c2995df57c96a2977862a82598753017f84c485785b04f9dcf5fa", null ]
    ] ],
    [ "spdk_bdev_abort", "bdev_8h.html#a841dcef50460f33c8b5e321e187dc3dd", null ],
    [ "spdk_bdev_channel_get_histogram", "bdev_8h.html#a83092483a9de9f7d736ef4ceaaf0d26c", null ],
    [ "spdk_bdev_close", "bdev_8h.html#aaf5fc830851a2eb0aa34bbb40cf5eac6", null ],
    [ "spdk_bdev_compare_blocks", "group__bdev__io__submit__functions.html#ga0846ab7b6c938f0f52ac36cd09a75278", null ],
    [ "spdk_bdev_compare_blocks_with_md", "group__bdev__io__submit__functions.html#ga8a69444aaff6f046f7de8524e8c886d8", null ],
    [ "spdk_bdev_comparev_and_writev_blocks", "group__bdev__io__submit__functions.html#gafaa766d5c5ca4bc2979e1f5f9015ef11", null ],
    [ "spdk_bdev_comparev_blocks", "group__bdev__io__submit__functions.html#gaf27fa5b35ac2a8d7d78cb31fa8500c8c", null ],
    [ "spdk_bdev_comparev_blocks_with_md", "group__bdev__io__submit__functions.html#ga323ccdb094b61f56840f29745339ceb3", null ],
    [ "spdk_bdev_copy_blocks", "group__bdev__io__submit__functions.html#gaea6141ec0cb4090741c6be7ae6927dae", null ],
    [ "spdk_bdev_desc_get_bdev", "bdev_8h.html#ac6418cfa0e9076ef7dafa7753c4c2028", null ],
    [ "spdk_bdev_dump_info_json", "bdev_8h.html#a3ef2e861ccd2d6135bfe13257f047fb9", null ],
    [ "spdk_bdev_examine", "bdev_8h.html#ae720ef13c98f9ba40e6562d4a8582427", null ],
    [ "spdk_bdev_finish", "bdev_8h.html#a7263aeb5393b46fa5af8e04760f62ea4", null ],
    [ "spdk_bdev_first", "bdev_8h.html#a578b0a9d444ddbb23c8181d9a5ea4f46", null ],
    [ "spdk_bdev_first_leaf", "bdev_8h.html#a717d20a033b87c5de88892c78ae55f4c", null ],
    [ "spdk_bdev_flush", "group__bdev__io__submit__functions.html#ga7105b63cc84037543d9472ab33c8be93", null ],
    [ "spdk_bdev_flush_blocks", "group__bdev__io__submit__functions.html#ga9d84cd937e760cf32756654dc9720ed4", null ],
    [ "spdk_bdev_for_each_channel", "bdev_8h.html#a1b51dde3495e6b37f172e172cca3cfd2", null ],
    [ "spdk_bdev_for_each_channel_continue", "bdev_8h.html#a576acbae728d3d4ecc83ea5603cdd3f9", null ],
    [ "spdk_bdev_free_io", "bdev_8h.html#a9ac23d38eb3b56b58197e0111ef68c6b", null ],
    [ "spdk_bdev_get_acwu", "bdev_8h.html#a8414b6c4af71136f0c1cb7af4a8d33fa", null ],
    [ "spdk_bdev_get_block_size", "bdev_8h.html#a3ba8c5672c8226b9b63f44543518c527", null ],
    [ "spdk_bdev_get_buf_align", "bdev_8h.html#ab4d238484b372a77ba130fbb70f83519", null ],
    [ "spdk_bdev_get_by_name", "bdev_8h.html#a89c759c53d028e3e408d19156f0e1eb1", null ],
    [ "spdk_bdev_get_data_block_size", "bdev_8h.html#a84041f3948f91dc0dd0656895970061a", null ],
    [ "spdk_bdev_get_device_stat", "bdev_8h.html#aa478b43fc9e6e41c34438f5b2ef742d5", null ],
    [ "spdk_bdev_get_dif_type", "bdev_8h.html#ac94b5900766ec42da5fc3658a5749858", null ],
    [ "spdk_bdev_get_io_channel", "bdev_8h.html#ab5bb9e746b030d7c4c89cbcf60076c7e", null ],
    [ "spdk_bdev_get_io_stat", "bdev_8h.html#ab1ba28ba382edd1d792d51a054eb3aa2", null ],
    [ "spdk_bdev_get_io_time", "bdev_8h.html#a8a082eb89d57860b2e57ebf7f5b3caa2", null ],
    [ "spdk_bdev_get_max_copy", "bdev_8h.html#a8b542430078d502325f37b92fc3d15ca", null ],
    [ "spdk_bdev_get_md_size", "bdev_8h.html#abc3537d0315100b24da6acc95929e849", null ],
    [ "spdk_bdev_get_media_events", "bdev_8h.html#af359a282820d73a253ffbbe127a30b96", null ],
    [ "spdk_bdev_get_memory_domains", "bdev_8h.html#a2643db603c5c9762d839036c1658bf1b", null ],
    [ "spdk_bdev_get_module_ctx", "bdev_8h.html#a833f281dc52c09e6491ae9415cdb9980", null ],
    [ "spdk_bdev_get_module_name", "bdev_8h.html#acb85b88dd223598d61c464b026403174", null ],
    [ "spdk_bdev_get_name", "bdev_8h.html#ad97a853dcb945bf004817424b7aa28af", null ],
    [ "spdk_bdev_get_num_blocks", "bdev_8h.html#a86568eca8f0b4d0dc9bc59c5138fc7a5", null ],
    [ "spdk_bdev_get_optimal_io_boundary", "bdev_8h.html#aa79625889e23318204d235da36a4fa02", null ],
    [ "spdk_bdev_get_opts", "bdev_8h.html#ab0c4412ed5d0e1869620965304d36b7f", null ],
    [ "spdk_bdev_get_physical_block_size", "bdev_8h.html#a2c895e82c51c654a5b3f838f7254d690", null ],
    [ "spdk_bdev_get_product_name", "bdev_8h.html#a1cb4d1f8822c30be8c5d9c5dc3e62483", null ],
    [ "spdk_bdev_get_qd", "bdev_8h.html#a471f32e8948203f7aaf320396a1ae7c9", null ],
    [ "spdk_bdev_get_qd_sampling_period", "bdev_8h.html#adab852ac707702316bf869a3d7dfdc85", null ],
    [ "spdk_bdev_get_qos_rate_limits", "bdev_8h.html#a08c63fbd418d5a77f34ddca9a4268f41", null ],
    [ "spdk_bdev_get_qos_rpc_type", "bdev_8h.html#a9d79dd7fdd009d8bd1c6bb0161af1ec1", null ],
    [ "spdk_bdev_get_uuid", "bdev_8h.html#add8565cdbf3d57697b67202b869a7beb", null ],
    [ "spdk_bdev_get_weighted_io_time", "bdev_8h.html#a526ab43ba037b8637a23e9d42289884e", null ],
    [ "spdk_bdev_get_write_unit_size", "bdev_8h.html#ab5775a23cadb2eb1d5381dc105577a37", null ],
    [ "spdk_bdev_has_write_cache", "bdev_8h.html#a93f6d6ce09da384501f09a49581caa37", null ],
    [ "spdk_bdev_histogram_enable", "bdev_8h.html#a0b4556cb07c52ae7b5b7e7f10cbdc637", null ],
    [ "spdk_bdev_histogram_get", "bdev_8h.html#aacf15571883da5a441297b5090e6aaf5", null ],
    [ "spdk_bdev_initialize", "bdev_8h.html#a854eb960c06597051071023a3d70e887", null ],
    [ "spdk_bdev_io_get_aio_status", "bdev_8h.html#a701290c13896ad545b58f5c5fecfbd93", null ],
    [ "spdk_bdev_io_get_cb_arg", "bdev_8h.html#a64e77ef346fd873d97328e9816ceda57", null ],
    [ "spdk_bdev_io_get_iovec", "bdev_8h.html#aa05d8c0e82bfbcc209af1eb958230ede", null ],
    [ "spdk_bdev_io_get_md_buf", "bdev_8h.html#a3ac624f9a0a153750242b70a805a7382", null ],
    [ "spdk_bdev_io_get_nvme_fused_status", "bdev_8h.html#a44c7d2a0cf76be7d06d9dc5e09553ec8", null ],
    [ "spdk_bdev_io_get_nvme_status", "bdev_8h.html#ae7e1bf90f44f042c2b2ad463b8667735", null ],
    [ "spdk_bdev_io_get_scsi_status", "bdev_8h.html#ac3c213b4317d5077197950253af1ac50", null ],
    [ "spdk_bdev_io_get_seek_offset", "bdev_8h.html#a03943b94f83f3402fb8da4093985a829", null ],
    [ "spdk_bdev_io_type_supported", "bdev_8h.html#a7cd5dff692dc162459801d5649fe7655", null ],
    [ "spdk_bdev_is_dif_check_enabled", "bdev_8h.html#a147389751cd351d30703e28f522e9610", null ],
    [ "spdk_bdev_is_dif_head_of_md", "bdev_8h.html#a4e43a19692e14e5e46b3315e4cf0bc1d", null ],
    [ "spdk_bdev_is_md_interleaved", "bdev_8h.html#aa02f628c6ef7cae08b8b623b4800c74d", null ],
    [ "spdk_bdev_is_md_separate", "bdev_8h.html#ac8c880555f4d66991c1fd9dbd3abaf4f", null ],
    [ "spdk_bdev_is_zoned", "bdev_8h.html#a2e334778f2dfb469e2f96bcd42c6343b", null ],
    [ "spdk_bdev_next", "bdev_8h.html#aa1c0b9cb8dde1177df3442206cf87d2d", null ],
    [ "spdk_bdev_next_leaf", "bdev_8h.html#a6ae4a6dad6562cdefd3476ec23bfcccb", null ],
    [ "spdk_bdev_nvme_admin_passthru", "group__bdev__io__submit__functions.html#gae2249ef71e7125338b6cebf935a881ab", null ],
    [ "spdk_bdev_nvme_io_passthru", "group__bdev__io__submit__functions.html#gab172cf6afc9ef154bd823b91b09dee87", null ],
    [ "spdk_bdev_nvme_io_passthru_md", "group__bdev__io__submit__functions.html#gac6b5933e4c0b2ad68bad591655b4f9e6", null ],
    [ "spdk_bdev_nvme_iov_passthru_md", "group__bdev__io__submit__functions.html#ga42545d4c7c98398a8750a30b26167a3d", null ],
    [ "spdk_bdev_open_async", "bdev_8h.html#af29e58cf7325dbc4f4ca8e0abb2d9506", null ],
    [ "spdk_bdev_open_ext", "bdev_8h.html#aca93f44b46f0b877df9b6936ef9e0a9e", null ],
    [ "spdk_bdev_queue_io_wait", "bdev_8h.html#acc4beee18ded7837fa92bd7c34e7ef2e", null ],
    [ "spdk_bdev_read", "group__bdev__io__submit__functions.html#ga4b500ce84df1d2551f76e635c9dafbd5", null ],
    [ "spdk_bdev_read_blocks", "group__bdev__io__submit__functions.html#gaeec9efd151e2fb34ee3d22a1edbbb53f", null ],
    [ "spdk_bdev_read_blocks_with_md", "group__bdev__io__submit__functions.html#gadc8784109649bebb80df9f9535467b85", null ],
    [ "spdk_bdev_readv", "group__bdev__io__submit__functions.html#ga9ac9efa882e87909acfd4bccaddb1778", null ],
    [ "spdk_bdev_readv_blocks", "group__bdev__io__submit__functions.html#ga55483d5ae010c514b37b976ad803b4b2", null ],
    [ "spdk_bdev_readv_blocks_ext", "group__bdev__io__submit__functions.html#ga8125396dbfee45c78c73534c6e7f22f3", null ],
    [ "spdk_bdev_readv_blocks_with_md", "group__bdev__io__submit__functions.html#ga80f72a0b5b1e02a667ce15cc17ceefeb", null ],
    [ "spdk_bdev_reset", "group__bdev__io__submit__functions.html#gaca574d3e94be6150343823dd2e7ecf46", null ],
    [ "spdk_bdev_seek_data", "group__bdev__io__submit__functions.html#ga368a41ccc1395faeaddc853a6f7f81d0", null ],
    [ "spdk_bdev_seek_hole", "group__bdev__io__submit__functions.html#ga41233f5dd570c8ae72ea4749786a8172", null ],
    [ "spdk_bdev_set_opts", "bdev_8h.html#a828be2f36a5c1e343488130c457f5bf5", null ],
    [ "spdk_bdev_set_qd_sampling_period", "bdev_8h.html#a9d37ad1d4da0bcb51ada76dbe4f4ce15", null ],
    [ "spdk_bdev_set_qos_rate_limits", "bdev_8h.html#a70520c668368881df8d7410fec9b1a08", null ],
    [ "spdk_bdev_set_timeout", "bdev_8h.html#af0fc679da6beac3cf9677f1bf97c6974", null ],
    [ "spdk_bdev_subsystem_config_json", "bdev_8h.html#a57814ce5dc208380ebf39dab0e1ce9a8", null ],
    [ "spdk_bdev_unmap", "group__bdev__io__submit__functions.html#ga680c9c302998f7b003e2476e35d9ae4b", null ],
    [ "spdk_bdev_unmap_blocks", "group__bdev__io__submit__functions.html#ga7555fdd41019e29b40e535b72457d30b", null ],
    [ "spdk_bdev_wait_for_examine", "bdev_8h.html#a4e34f9d44b0d59b4e1d88967e77d9675", null ],
    [ "spdk_bdev_write", "group__bdev__io__submit__functions.html#gaa740a114ef34d6a2f126d4e3a9dd9e9b", null ],
    [ "spdk_bdev_write_blocks", "group__bdev__io__submit__functions.html#ga12da8917f525a6e11cbf22b2b7652c89", null ],
    [ "spdk_bdev_write_blocks_with_md", "group__bdev__io__submit__functions.html#ga01380182ca77b43e2a854aa59058fe12", null ],
    [ "spdk_bdev_write_zeroes", "group__bdev__io__submit__functions.html#gadc50b78fec7f69190d9139aff29a9043", null ],
    [ "spdk_bdev_write_zeroes_blocks", "group__bdev__io__submit__functions.html#ga047f8a9f8d0a3d1d7bfcdf0a9838b261", null ],
    [ "spdk_bdev_writev", "group__bdev__io__submit__functions.html#ga9a508a1c301a1321faf0680a8f31f59a", null ],
    [ "spdk_bdev_writev_blocks", "group__bdev__io__submit__functions.html#gaf5849064d12de9f140a41522d1f7c95b", null ],
    [ "spdk_bdev_writev_blocks_ext", "group__bdev__io__submit__functions.html#ga418f6f4ab853a3152a7f7ba256894a3f", null ],
    [ "spdk_bdev_writev_blocks_with_md", "group__bdev__io__submit__functions.html#ga635944e7a651c01ecf5d808f988d138d", null ],
    [ "spdk_bdev_zcopy_end", "bdev_8h.html#ac432e059187b2dee62418354664e87c2", null ],
    [ "spdk_bdev_zcopy_start", "bdev_8h.html#a0ae02ac58ed10886d4a00ba3d94af4ce", null ],
    [ "spdk_for_each_bdev", "bdev_8h.html#ac93dda3868b191be70ac7e1517422c1f", null ],
    [ "spdk_for_each_bdev_leaf", "bdev_8h.html#aeb680eb5205197872738e482204ab441", null ],
    [ "SPDK_STATIC_ASSERT", "bdev_8h.html#a3a91870429bdfa6f80dca0ae4b608e65", null ],
    [ "SPDK_STATIC_ASSERT", "bdev_8h.html#a1a0f34e14b9849b25c5b24c2b4941ad0", null ],
    [ "SPDK_STATIC_ASSERT", "bdev_8h.html#a2a07b56033890913587438d1c77942db", null ]
];