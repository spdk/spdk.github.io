---
layout: post
title:  "Hitachi SPDK NVMe-oF Performance Report"
author: Shuhei Matsumoto
categories: news
---

We have been doing some work to evaluate the performance of SPDK and gain some hands-on experience with the SPDK NVMe-oF Target and Initiator.
The [Hitachi SPDK NVMe-oF Performance Report](https://review.spdk.io/download/papers/Hitachi_SPDK_NVMe_oF_Performance_Report.pdf) contains our test configuration and performance results.
In summary, we observed up to 8x more IOPS/Core with SPDK NVMe-oF Target and Initiator, vs the Linux Kernel, and a 90% reduction in the software latency.
Many thanks to John Kariuki and the SPDK team.
