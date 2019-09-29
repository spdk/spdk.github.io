---
layout: default
title:  "SPDK Debugging Tips"
---

# In this document:

* [CI Result Chasing](#ci)

<a id="ci"></a>
## CI autotest (per patch and nightly) result chasing

There are majorly two types of autotest from [SPDK CI](https://dqtibwqq6s6ux.cloudfront.net/), one is the per patch result after it is executed through the SPDK CI infrastructure. The other is the per day nightly testing. Here we take nightly as the example to share some debugging tips which also apply to the per patch autotest.

Once the testing has been run, there is a `Job results` on the [SPDK CI webpage](https://dqtibwqq6s6ux.cloudfront.net/), several links are listed there, for example the link of [Autotest-Nightly-Failing](https://dqtibwqq6s6ux.cloudfront.net/public_build/autotest-nightly-failing.html) where recent failures of nightly testing are listed. As nightly autotest is running daily, so that the failed runs are listed by time from latest to oldest. Take failure at [29-September 06:41:22](https://dqtibwqq6s6ux.cloudfront.net/public_build/autotest-nightly-failing_454.html) as example, all the subjobs are listed together with their result. You can click the subjob with `Test Failure` status to view the details of the failure from its assogicated `build.log` like the [example log](https://dqtibwqq6s6ux.cloudfront.net/results/autotest-nightly-failing/builds/454/archive/vhost_autotest_nightly/build.log). Scroll down to the bottom to get the information of failure.
