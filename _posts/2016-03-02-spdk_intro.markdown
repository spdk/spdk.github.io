---
layout: post
title:  "Introduction to the Storage Performance Development Kit"
img: p3700-aic.jpg
author: Ben Walker
categories: news
---

The Storage Performance Development Kit (SPDK) provides a set of tools and libraries for writing high performance, scalable storage applications. It achieves high performance by moving all of the necessary drivers into userspace and operating in a polled mode instead of relying on interrupts. It is primarily designed to be leveraged by OEMs and cloud service providers to optimize their storage solutions. Generally, guidelines from the related networking project [DPDK](http://www.dpdk.org) should be followed. Specifically, their [guide for writing efficient code](http://dpdk.org/doc/guides/prog_guide/writing_efficient_code.html) almost all applies to SPDK.

The first component to be released in SPDK is an NVMe device driver. Others can be expected in the future.

We hope the community will collaborate with us as we build an effective toolkit for high performance storage applications. Pull requests are accepted!
