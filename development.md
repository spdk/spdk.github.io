---
layout: default
title:  "SPDK Development"
---

License
--------

SPDK is licensed using a [BSD 3-clause license](https://opensource.org/licenses/BSD-3-Clause). All code submitted to the project is required to carry that license.

Source Code
-----------

SPDK's source code is available on [GitHub](https://github.com/spdk/spdk) and may be cloned using `git` with the following command:

~~~{.sh}
git clone https://github.com/spdk/spdk
~~~

Contributing
------------

Everyone is welcome to contribute!

Patches may be submitted using [GitHub pull requests](http://github.com/spdk/spdk/pulls) (PRs). All commits must be signed off by the developer (`--signoff`) which indicates that you agree to the [Developer Certificate of Origin](http://developercertificate.org/).

All code is checked for style correctness by running `scripts/check_format.sh`. This script requires `astyle` and optionally `pep8` and will automatically format C, C++, and Python code. 

Patch discussion will happen directly on the GitHub PR. Design pre-work and general discussion occurs on the mailing list. Anyone can provide feedback in either location and all discussion is welcome. Decisions on whether to merge patches will be handled by the maintainers:

* Daniel Verkamp
* Benjamin Walker
* James Harris

For guidelines on SPDK releases and bug reports, see [SPDK Releases](http://www.spdk.io/releases).