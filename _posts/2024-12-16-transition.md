---
layout: post
title:  "Updates on SPDK Linux Foundation Transition"
author: Jim Harris
categories: news
---

After Intel's recent [announcement](https://spdk.io/news/2024/12/05/LF/) about
SPDK's transition to the Linux Foundation (LF), SPDK needs to have an orderly
shutdown of the SPDK project resources provided by Intel to facilitate the
transition.

The SPDK CI at Intel, which drives the vast majority of per-patch and nightly
testing, will be permanently turned off Tuesday, December 17 (morning CEST).
SPDK [Gerrit](https://review.spdk.io) will be shutdown Thursday, December 19
(morning CEST), to enable transition of the Gerrit instance from Intel to the
LF. All efforts are being made to ensure no Gerrit data is lost during the
transition. There are no changes to the SPDK [GitHub](https://github.com/spdk)
repositories as part of this transition.

No more patches will be merged to the SPDK master branch starting
immediately. Patch merges will resume when the SPDK LF project establishes a
new CI and the SPDK Gerrit instance is restored under the LF. Any services or
local repositories currently pointing to Gerrit can be pointed to the SPDK
GitHub repositories while the transition is in progress. SPDK GitHub is an
exact mirror, as always, of the current state of all SPDK Gerrit branches.

The SPDK LF project is actively working on the transition and will provide
updates as details become available. Please contact
[Rob Mills](mailto:rob.mills@nutanix.com) from Nutanix with any questions
about the SPDK LF project transition.

Thanks,

Jim Harris
(on behalf of the SPDK core maintainers and SPDK LF project)
