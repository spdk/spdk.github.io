---
layout: default
title: Continuous Integration

toc:
  - title: Useful Scripts
  - title: SPDK CI Github Actions
    url: "https://github.com/spdk/spdk-ci/actions"
---


## Useful Scripts

The following pages provide real-time visibility into the state of patches
submitted to the SPDK project:

* [Queue Status](https://review.spdk.io/queue_status.html) - Shows the current
  CI queue, including patches that are in progress and waiting to be tested.
  The page is updated every 60 seconds. The scheduler uses round-robin across
  patch owners so that no single contributor monopolizes the CI queue.

* [Mergable Changes](https://review.spdk.io/mergable_changes.html) - Shows
  the outstanding patch status, including changes ready for merge, changes
  needing another +2 Code-Review vote, and changes still awaiting review.
  The page is updated every 5 minutes.


## SPDK CI Github Actions

[SPDK CI Github Actions](https://github.com/spdk/spdk-ci) is a
collection of Github Actions workflows that are used to test the SPDK code
base. These workflows are used to test various SPDK configurations by
utilizing free-tier Github Actions runners.

Github Actions free-tier comes with a number of limitations, only allowing
tests which do not require actual, real hardware dependencies (such as
Network Interface Cards or specific NVMe drives). For workflows requiring
hardware dependencies - self-hosted Github runners are attached and used
in spdk/spdk-ci repository. See:
[Community CI Workflows] (https://github.com/spdk/spdk-ci?tab=readme-ov-file#community-ci-workflows)
for details.


In case you would like to suggest a change in SPDK's continuous integration,
please use [SPDK's Github issue section](https://github.com/spdk/spdk/issues),
and create a new issue with `Infrastructure` and `Enhancement` labels
selected, or reach out on [SPDK Slack](https://spdk-team.slack.com/) `#spdk-ci`
channel. Please provide as many details as possible:

* name of the task
* hardware requirements, if any
* detailed description of the task
  * what is the reason for change?
  * what needs to be done?
  * what is the expected outcome?
  * what are the completion criteria?

If you would like to contribute directly - everyone is welcome to do so by
submitting a pull request to [SPDK CI](https://github.com/spdk/spdk-ci/).

Anyone is allowed to contribute patches to the SPDK's code base. All patches,
after review, will be tested against the SPDK CI Github Actions. For more
information on this process, please see the
[development](http://www.spdk.io/development/) page.
