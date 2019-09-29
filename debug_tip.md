---
layout: default
title:  "SPDK Debugging Tips"
---

# In this document:

* [CI Result Chasing](#ci)
* [Run Autotest Locally](#local_run)
* [Live Debug with GDB](#gdb)

<a id="ci"></a>
## CI autotest (per patch and nightly) result chasing

There are majorly two types of autotest from [SPDK CI](https://dqtibwqq6s6ux.cloudfront.net/). One is the per patch result after it is executed through the SPDK CI infrastructure, the other is the per day nightly testing. Here we take nightly as the example to share some debugging tips which also apply to the per patch autotest.

Once the testing has been run, there is a `Job results` section on the [SPDK CI webpage](https://dqtibwqq6s6ux.cloudfront.net/), several links are listed there, for example the link of [Autotest-Nightly-Failing](https://dqtibwqq6s6ux.cloudfront.net/public_build/autotest-nightly-failing.html) where recent failures of nightly testing are listed. As nightly autotest is running daily, so that the failed runs are listed by time from latest to oldest. Take failure at [29-September 06:41:22](https://dqtibwqq6s6ux.cloudfront.net/public_build/autotest-nightly-failing_454.html) as example, all the subjobs are listed together with their result. You can click the subjob like [example failed subjob](https://dqtibwqq6s6ux.cloudfront.net/results/autotest-nightly-failing/builds/454/archive/vhost_autotest_nightly/index.html) with `Test Failure` status to view the details of the failure from its assogicated `build.log` like the [example log](https://dqtibwqq6s6ux.cloudfront.net/results/autotest-nightly-failing/builds/454/archive/vhost_autotest_nightly/build.log). Scroll down to the bottom to get the information of failure.

<a id="local_run"></a>
## How to run the autotest on local machine

All the auto tests are invoked through the single file [autotest.sh](https://github.com/spdk/spdk/blob/master/autotest.sh) with the proper testing configuration which is described below to identify which module to test and whether run in the nightly mode.

The configuration file can be specified to run required test cases like below example with `1` to enable and `0` to disable and it is also needed as the additional parameter after the `autotest.sh` shell file. The output of the testing case is same as that running on the SPDK CI infrastructure except that the local environment needs some kinds of configuration to make sure the test cases can run successfully. Once the failure of testing which is chased and identified in the above section is triggered, we could debug and analyze the reason of the failure. What's more, it is always encouraging to run as many test cases as possible like through the local running of autotest.sh before submitting the patch if the local environment could support.

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
## Live Debug with GDB
In the case that there is core dump generated, one easier way to root cause is with the help of gdb. Before live debugging with gdb, you are suggested to build the spdk code in the debug mode.

~~~{.sh}
./configure --enable-debug
make clean
make
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

Based on this example, at this moment, the regular methods of gdb debugging will help to identify and root cause the issue.
