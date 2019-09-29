---
layout: default
title:  "SPDK程序调试建议"
---

# 本文涉及到:

* [如何查看自动化CI测试结果](#ci)
* [如何在本地跑自动化测试](#local_run)
* [使用GDB来在线调试](#gdb)

<a id="ci"></a>
## 查看自动化CI(每个改动和每晚测试）的结果

在[SPDK CI](https://dqtibwqq6s6ux.cloudfront.net/)持续化测试网页上，主要有两类自动化测试。其中一类是针对每个改动的测试；还有一类是每晚跑一次的测试。每晚跑一次的测试会跑的更久，涉及更多的测试覆盖。这里我们以每晚跑一次的测试作为例子，来分享一些调试小建议。这些建议同样适用到针对每次改动的测试。

当测试完成后，在[SPDK CI webpage](https://dqtibwqq6s6ux.cloudfront.net/)页面上有个`Job results`部分，有多个相关测试结果的链接，比如每晚跑的测试失败的链接[Autotest-Nightly-Failing](https://dqtibwqq6s6ux.cloudfront.net/public_build/autotest-nightly-failing.html)。在这个链接里，包括了最近跑的失败的测试，按最近到最远时间顺序排序。我们拿[29-September 06:41:22](https://dqtibwqq6s6ux.cloudfront.net/public_build/autotest-nightly-failing_454.html)这次测试结果作为例子，点开链接后，所有子测试任务和对应的测试结果都列出来了。我们可以点击`Test Failure`状态的子任务来具体查看该任务执行的情况，从[例子页面](https://dqtibwqq6s6ux.cloudfront.net/results/autotest-nightly-failing/builds/454/archive/vhost_autotest_nightly/index.html)上找到相关的`build.log`文件，比如[参考失败log文件](https://dqtibwqq6s6ux.cloudfront.net/results/autotest-nightly-failing/builds/454/archive/vhost_autotest_nightly/build.log)可以查看具体测试失败的原因。拉到网页最下面可以大致获得更多失败信息。

<a id="local_run"></a>
## 如何在本地机器上跑自动化测试

相关的自动化测试是从[autotest.sh](https://github.com/spdk/spdk/blob/master/autotest.sh)单个文件调用开始的。在不同的机器上跑不同的测试任务通过指定特定的测试配置来完成。具体配置在下面会描述，包括了每晚一次的长时间测试的选项。

下面的配置是具体的内容，可以通过指定`1`来启用或者`0`来关闭相应的测试模块，当调用`autotest.sh`脚本文件时，需要跟一个对应的配置文件。这样在本地的机器上也可以跑和SPDK CI测试框架一样的测试内容，这里可能需要额外的一些配置来使能和适配本地的机器。基本上跑起来后，相关的测试结果会输出来终端屏幕上。一旦相同的测试失败问题被触发，我们可以在本地机器上调试和分析导致出错的原因。更重要的是，我们建议在上传改动前，有本地测试环境的话，可以尽量多的现在本地完成测试。

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
## 使用GDB来在线调试
如果在测试失败中，有发生core dump之类的问题，一个比较快速的方法去定位问题是使用GDB在线调试。为了更好地定位问题，在在线调试前，我们建议先把SPDK代码的debug开关按下面方法打开。同时，建议按下面设置来配置core dump文件，通过不同的PID来标识潜在的不同core dump，后期来通过GDB进行多次有针对的调试。

~~~{.sh}
./configure --enable-debug
make clean
make
echo 'core.%p' > /proc/sys/kernel/core_pattern
~~~

我们拿nvme_ut unittest可执行程序来作为例子。

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

按上面这个例子，到了这个阶段，下面可以使用GDB的常规调试方法来定位、调试和解决问题。
