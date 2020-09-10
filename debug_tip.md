---
layout: default
title:  "SPDK Debugging Tips"

toc:
  - title: Investigating issues found in SPDK CI Jenkins
    url: "#ci_jenkins"
  - title: Running autotest locally
    url: "#local_run"
  - title: Live debugging with GDB
    url: "#gdb"
---

<a id="ci_jenkins"></a>
## Investigating issues found in SPDK CI Jenkins

There are two test suites used in SPDK. One is the per-patch suite of tests which run on every proposed patch and generate the `+1` or `-1` verified vote from `SPDK CI Jenkins` in Gerrit. The other is the nightly test suite which is only run nightly. For this example, we'll debug a nightly test failure. These debugging tips are also apply to the per-patch test.

On the [CI Status Page](https://ci.spdk.io/) there is a `Job results` section with several links that contain contain the latest nightly test results. For example, the nightly test that tests SPDK master with DPDK master is [here](https://ci.spdk.io/public_build/autotest-nightly.html). On that page, you can find a failed nightly test and select it, bringing up a page that shows which individual test jobs failed. Selecting a given job brings up the test log. The most relevant information is typically in the file `build.log`, usually at the bottom.

<a id="local_run"></a>
## Running the tests on a local machine

The test suite is kicked off by running autotest.sh with the proper configuration and environment.

A configuration file is provided to specify which tests are to be executed as shown in the example below. Use `0` to unselect a test and `1` to select a test. Running the tests locally should produce the same results as seen in CI. As soon as you can reproduce the CI issue locally, you are ready to debug it. What's more, it is always encouraged to run as many test cases as possible like through the local execution of autotest.sh before submitting the patch.

~~~{.sh}
./autotest.sh your_conf_file
~~~

~~~{.sh}
SPDK_BUILD_DOC=0
SPDK_BUILD_IOAT_KMOD=0
SPDK_BUILD_SHARED_OBJECT=1
SPDK_FEDORA_PACKAGING=0
SPDK_RUN_CHECK_FORMAT=0
SPDK_RUN_SCANBUILD=0
SPDK_RUN_VALGRIND=0
SPDK_RUN_FUNCTIONAL_TEST=1
SPDK_TEST_ISCSI_INITIATOR=1
SPDK_TEST_UNITTEST=0
SPDK_TEST_ISCSI=1
SPDK_TEST_NVME=0
SPDK_TEST_BDEV_OCSSD=0
SPDK_TEST_FTL=0
SPDK_TEST_NVMF=0
SPDK_TEST_RBD=1
SPDK_TEST_VHOST=0
SPDK_TEST_BLOCKDEV=0
SPDK_TEST_IOAT=0
SPDK_TEST_EVENT=0
SPDK_TEST_BLOBFS=0
SPDK_TEST_PMDK=0
SPDK_TEST_LVOL=0
SPDK_RUN_VPP=0
SPDK_TEST_CRYPTO=0
SPDK_TEST_REDUCE=0
SPDK_TEST_OCF=0
SPDK_RUN_ASAN=0
SPDK_RUN_UBSAN=1
SPDK_TEST_VHOST_INIT=0
RUN_NIGHTLY=0
~~~

<a id="gdb"></a>
## Live debugging with GDB
In the case that there is core dump generated, one easy way to debug is with the help of gdb in the live debugging mode. Before live debugging with gdb, you need to build the spdk code in the debug mode. What's more, in the potential case that more than one core dump is generated, it is better to configure the core pattern like as shown with the additional information of PID. Later, we can live debug for the each corresponding core dumps accordingly.

~~~{.sh}
./configure --enable-debug
make clean
make
echo 'core.%p' > /proc/sys/kernel/core_pattern
~~~

Let's pick the unittest of nvme_ut as example.

~~~{.sh}
gdb ./test/lib/nvme/unit/nvme_c/nvme_ut
(gdb) b test_spdk_nvme_transport_id_parse_trtype
(gdb) r
Suite: nvme
  Test: test_opc_data_transfer ...passed
  Test: test_spdk_nvme_transport_id_parse_trtype ...
Breakpoint 3, test_spdk_nvme_transport_id_parse_trtype () at nvme_ut.c:247
247     in nvme_ut.c
(gdb) bt
#0  test_spdk_nvme_transport_id_parse_trtype () at nvme_ut.c:247
#1  0x00007ffff7bd0212 in run_single_test.constprop.4 () from /lib64/libcunit.so.1
#2  0x00007ffff7bd04a8 in run_single_suite.constprop.3 () from /lib64/libcunit.so.1
#3  0x00007ffff7bd0826 in CU_run_all_tests () from /lib64/libcunit.so.1
#4  0x000000000040147d in main (argc=<optimized out>, argv=<optimized out>) at nvme_ut.c:379
(gdb)
~~~

Based on this example, the regular methods of gdb debugging will help to identify and root cause the issue.
