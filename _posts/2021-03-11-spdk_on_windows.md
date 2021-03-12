---
layout: post
title:  "SPDK on Windows (Experimental)"
author: Nick Connolly
categories: news
---

Yes, it *really does* say Windows and SPDK in the same sentence!
It is now possible to experiment with SPDK on Windows.

## Introduction

In a typical Data Centre, a significant percentage of the servers will
be running Microsoft Windows. This represents a huge, untapped opportunity
to extend the deployment of SPDK! Until now, it has been impossible to run
SPDK-based applications on Windows because SPDK uses POSIX APIs. To address
this, a simple POSIX emulation layer has been introduced to SPDK's main
branch for use on Windows, enabling cross-compilation with MinGW.

What value does this add? A few potential use cases include:

* Providing access to storage via a native NVMe-oF initiator.\
Windows doesn't have a baked-in driver and there aren't any software only solutions available.
* Delivering fast access to NVMe storage, avoiding kernel bottlenecks.
* Constructing iSCSI and NVMF storage targets.
* Integration into environments running Windows Containers.

So, how has this been achieved?

## Portability Improvements

SPDK is intended to be portable to different platforms, but by focusing
on Linux and FreeBSD a few minor assumptions had crept into the code.
For example:

* On Windows a 'long' is 32-bits whereas on Linux and FreeBSD it is 64-bits.
Some assignments and casts needed to be changed and printf has to use
 PRI64x to print 64-bit values.
* Bitfields are handled differently if adjacent definitions
have a different basic type.
* A POSIX mutex must be initialized before use.

It is a testimony to the high quality of the SPDK code that so few changes
were required.


## Windows Platform Development Kit

[MayaData](https://mayadata.io/) has started a new project called the
[Windows Platform Development Kit (WPDK)](https://wpdk.github.io)
to provide the POSIX functionality needed to run SPDK on Windows.
WPDK implements a set of headers and a lightweight library specifically
tailored to meet the needs of SPDK.

The scope of the project is limited to SPDK support. Unlike Cygwin, it
is not intended to be a generic POSIX emulation library. Functionality is
mapped as closely as possible to existing Windows semantics with minimum
emulation. It is intended to be a production quality layer that runs
as native code, with no surprises, that can be tested independently.

Supporting packages such as *libcunit*, which are required to build SPDK,
are included to simplify the use of [WPDK](https://wpdk.github.io).

## Makefile Changes

The SPDK makefiles have been extended with a few strategic changes to:

* Incorporate WPDK into the build in much the same way as DPDK ('--with-wpdk=\<dir\>').
* Produce executables that end in '.exe' as required by Windows.
* Handle specific attributes of MinGW such as enforcing '-mstack-protector-guard=global'
to avoid a stack protection bug.

## Current Status

The project is currently at an early experimental stage:

* All of the SPDK source compiles, apart from spdk_top which requires libcurses.
* All of the SPDK Unit Tests pass.
* The iSCSI target can serve storage.
* The NVMe over TCP target can serve storage.
* The SPDK stack can attach to a physical NVMe disk and issue I/O.
* Unit tests exist for the majority of the WPDK functionality.

## Future Direction

The intent is to pursue the project to production quality, fully
integrated into the SPDK CI and Test environment.

## Getting Started

A 'Getting Started' guide is available:

* [Building SPDK for Windows](https://github.com/wpdk/wpdk/blob/master/doc/build-spdk.md)

## Acknowledgements

The support and encouragement of the SPDK community has been much appreciated
and has helped to turn this 'crazy idea' into an experimental reality in a
short timeframe.

The [Windows Platform Development Kit](https://wpdk.github.io) has been developed
and contributed by [MayaData](https://mayadata.io/), the Data Agility company.

Portions of the code are based on work done by the
[DPDK community](https://www.dpdk.org/) to add support for Windows.

## Contributing

Contributions are welcome and needed! Please head over to the
[WPDK documentation](https://github.com/wpdk/wpdk#windows-platform-development-kit)
and [WPDK repository](https://github.com/wpdk/wpdk) to get started.

Please join the [SPDK community](https://spdk.io/community) and tell us how you are using SPDK on Windows.
For real-time discussions, the SPDK Slack contains a [Windows channel](https://spdk-team.slack.com/archives/C01Q700GPGU).

Happy Experimenting!
