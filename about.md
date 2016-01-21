---
layout: page
title: About SPDK
permalink: /about/
---

Storage Performance Development Kit
===================================

The Storage Performance Development Kit (SPDK) provides a set of tools and libraries
for writing high performance, scalable, user-mode storage applications.
It achieves high performance by moving all of the necessary drivers
into userspace and operating in a polled mode instead of relying on interrupts,
which avoids kernel context switches and eliminates interrupt handling overhead.
