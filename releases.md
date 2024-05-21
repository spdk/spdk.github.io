---
layout: default
title:  "SPDK Releases"
---

<span class="glyphicon glyphicon-download"></span> [Latest Release](https://github.com/spdk/spdk/releases)
---------

All releases of SPDK are available through [GitHub](https://github.com/spdk/spdk/releases). GitHub serves as the master repository for all changes, so the master branch always contains the latest code.

Release Process
---------------

An SPDK release defines a public [API](https://en.wikipedia.org/wiki/Application_programming_interface) version, where the [public API](http://www.spdk.io/doc/files.html) comprises all of the C header files in the [include/spdk](https://github.com/spdk/spdk/tree/master/include/spdk) directory. The version names are in the format `YY.MM.vv`, where `YY` is year, `MM` is month, and `vv` is a minor version number and is often omitted. For example, the release in December of 2016 is version 16.12. The minor version is reserved for bug fix releases made at a later date that remain API compatible with the original release. SPDK makes no guarantees about API compatibility between releases with differing YY.MM versions, although every effort will be made to avoid breaking the API. Releases with identical YY.MM versions but differing minor version numbers are guaranteed to be API compatible. SPDK makes no guarantees about [ABI](https://en.wikipedia.org/wiki/Application_binary_interface) compatibility between any two versions at this time.

SPDK uses a quarterly release cycle. The first two months of each quarter are an open window for merges. The final month of each quarter is intended only for bug fixes and documentation and so pull requests containing new features may be delayed, at the discretion of the maintainers. [A high level roadmap](https://github.com/orgs/spdk/projects/5) for the next release is always posted at the start of the release cycle. The roadmap may be discussed on the SPDK mailing list at any time, and feedback is very welcome.

Bug Reports
-----------

Bug reports may be filed using [GitHub issues](https://github.com/spdk/spdk/issues) and should indicate the version of SPDK in question (or say `master` for the latest). Bugs will always be fixed on the `master` branch first, but may be back-ported to either of the two most recent releases if:

* A user requests the back-port by commenting on the issue stating to which version they'd like the bug back-ported
* The bug fix does not require a breaking API change
