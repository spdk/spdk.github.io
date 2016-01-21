---
layout: post
title:  "Our Intro of SPDK to the Open Source Community"
date:   2015-09-21 09:33:19 -0700
categories: update
---

The Storage Performance Development Kit (formerly known as DPDK for Storage or "Waikiki Beach")
provides a set of tools and libraries for writing high performance, scalable storage applications.
It achieves high performance by moving all of the necessary drivers into userspace
and operating in a polled mode instead of relying on interrupts.
It is primarily designed to be leveraged by OEMs to optimize their storage solutions.
Part of Intel's storage industry enabling plan is to move from a traditional release model
to an open source release model.

The first component of SPDK released to the open source community is the User-Mode NVMe device driver.
This specific driver was chosen to help ease architectural transitions to NVMe,
which helps Intel’s blossoming storage media business.
The NVMe driver is simply the first component to be generally released;
the open source SPDK project will continue adding beneficial,
broadly applicable components to the development kit.
