---
layout: default
title:  "SPDK Development"

toc:
  - title: Process
    url: "#"
    items:
    - title: License
      url: "#license"
    - title: Source
      url: "#source"
    - title: Contributing
      url: "#contributing"
    - title: Development Guidelines
      url: "#guidelines"
    - title: Gerrit Configuration
      url: "#Gerrit"
    - title: Submitting a Patch
      url: "#patch"
    - title: Continuous Integration
      url: "#integration"
    - title: False Positives in CI
      url: "#integration_false_positive"
    - title: Local Testing
      url: "#local"
    - title: Code Review
      url: "#review"
    - title: Review Hashtags
      url: "#hashtags"
    - title: Revising Patches
      url: "#revise"
    - title: Multi-Commit Patch Series
      url: "#multi"
    - title: Managing Submodule Patches
      url: "#submodule"
    - title: Core Maintainers
      url: "#core"
  - title: Continuous Integration
    url: "../ci/"
  - title: Roadmap
    url: "https://trello.com/b/MN8auadQ/spdk-roadmap"
  - title: CVE Process and Threat Modeling
    url: "../cve_threat/"
  - title: Debugging Tips
    url: "../debug_tip/"
---

<a id="license"></a>
## License

SPDK is primarily licensed using a [BSD 3-clause license](https://opensource.org/licenses/BSD-3-Clause).
Some optional or utility code, such as kernel modules, is licensed using a dual BSD/GPLv2 license.
All submitted code must carry the appropriate license.

<a id="source"></a>
## Source Code

SPDK's source code is hosted by [GitHub](https://github.com/spdk/spdk) and
patch submission and review is done through
[Gerrit](https://review.spdk.io/q/projects:spdk+status:open).

Instructions for building the libraries and examples are located in the
[README](https://github.com/spdk/spdk/blob/master/README.md).

<a id="contributing"></a>
## Contributing

Everyone is welcome to contribute! Design pre-work and general discussion occurs via one of the
communications channels described on the [Community](/community/) page.

Patch submission is done through Gerrit where patches are voted on by everyone in the community.
A patch usually requires a minimum of two +2 votes before it will be merged. +2 votes are reserved for
the [core maintainers](#core) who can be contacted on the mailing list or in Slack.

<a id="guidelines"></a>
## Development Guidelines

These general guidelines help ensure that the SPDK development community remains fun, fair, and efficient.

* Developers should strive to be active on Gerrit in order to stay in the loop on upcoming changes.
* [Trello](https://www.trello.com/spdk/) is where we maintain our backlog and is a great place for design
material for more complex patches. Once code has been merged, however, the documentation in the repository
supersedes any materials found on Trello (i.e., collateral found on Trello is not maintained once a feature is merged).
* Coding and submission guidelines (i.e. being clear and concise in the commit message) should always be respected.
* Developers do not need to add specific reviewers to patches. Instead, the maintainers and everyone else in the community
should always be on the lookout for incoming patches. If a developer would like to be added to a review, or would like
a specific person added to their patch, they should feel free to do so.
* All comments on code reviews must be addressed prior to the patch being merged. Comments can be addressed by making
code changes or by replying to the comment.
* There’s no minimum or maximum time for the life cycle of a patch. A patch may be accepted
in hours or possibly weeks or longer. How efficiently our community operates is a direct result of how well our
community developers interact with each other.
* Patch authors, including core maintainers, may not vote +1 or +2 on their own patches.  They may vote -1 on
their own patches to signify that the patch should not be committed.

<a id="Gerrit"></a>
## Gerrit Configuration

Log into [Gerrit](https://review.spdk.io) using your GitHub account credentials. Once logged in, in the
top right corner click your user name and select 'Settings'. You should set up the following:

* `Profile`: Verify that the information is correct here. This includes registering the e-mail address in your profile. The e-mail address must be registered before generating an HTTP password.
* `HTTP Password`: Generate a password. You'll use this password when prompted by git (not your GitHub password!).
* `Preferences`:
  * Set Maximum Page Size to 100 rows per page. Otherwise you'll be hitting 'next' a lot.
  * We highly recommend you set your Email Notifications to None. Gerrit can send a lot of emails!
  * In the `My Menu` section, add the following entry:

  ~~~
  Name: SPDK Open Reviews
  URL: #/dashboard/?Outgoing=projects:spdk+o:self+status:open&Needs%20Review=projects:spdk+r:self+-o:self+status:open&Open=projects:spdk+status:open+-r:self+-o:self
  ~~~

  You can probably also delete the other entries in there. This will add a link at the top of the page
  under "My" that will show you a nice dashboard of all of the SPDK review activity.

Now that you're configured, you can clone the Gerrit repository locally:

~~~{.sh}
git clone https://review.spdk.io/spdk/spdk
cd spdk
git submodule update --init
~~~

Or if you already cloned directly from GitHub, you can change your repository to point at Gerrit by doing:

~~~{.sh}
git remote set-url origin https://review.spdk.io/spdk/spdk
~~~

When you later push a patch, you'll be prompted for a password. That password
is the one generated in the `HTTP Password` section of the Gerrit settings,
not your GitHub password. To make it easy, turn on the
[git credential helper](https://git-scm.com/docs/git-credential-store) to store
your password for you. You can enable it for the SPDK repository with:

~~~{.sh}
git config credential.helper store
~~~

Finally, you'll need to install the Gerrit commit-msg hook. This inserts a unique change ID each time you
commit and is **required** for Gerrit to work.

~~~{.sh}
curl -Lo .git/hooks/commit-msg https://review.spdk.io/tools/hooks/commit-msg
chmod +x .git/hooks/commit-msg
~~~

Now open .git/config in a text editor and add these lines: (this will make pushing reviews easier)

~~~
[remote "review"]
  url = https://review.spdk.io/spdk/spdk
  push = HEAD:refs/for/master
~~~

You may also enable the git pre-commit and pre-push hooks to automatically check formatting and run the unit tests:

~~~
cp .githooks/* .git/hooks/
~~~

Now you should be all set!

<a id="patch"></a>
## Submitting a Patch

Submission Requirements:

* All commits must be signed off by the developer which indicates that you agree to the [Developer Certificate of Origin](http://developercertificate.org/).
This is done using the `-s` or `--signoff` option when committing your changes.

* All commits must conform to the SPDK style guide. The style guide is defined by the script located in `scripts/check_format.sh`,
which will programmatically fix coding style issues using the tools `astyle` and `pep8`. Be sure to run this script prior to
submitting a patch.

* All new code must include accompanying unit test code.

* Commits should be rebased and all unit tests should be passing prior to submission.

* Squash commits prior to submitting a review such that each commit has a clear purpose that takes an incremental step toward
the goal of the series of commits.

* Provide a clear commit message describing the purpose of the commit. Good commit messages provide a very brief summary of
what the commit does in the title followed by a short paragraph providing context for the change. For example, what problem is
being solved, how was it discovered and how this patch solves the problem.  See [Continuous Integration](#integration) for the special case of a
Request For Comments (RFC) type of patch.

* The first line of your commit message should be in the form "component: short description of patch".
There should be a blank line between this first line and the rest of the commit message. For example:
"nvme: add support for NVME_IOCTL_IO_CMD for cuse"

* If your commit fixes a GitHub issue, please include "Fixes #issue number" on a separate line so that GitHub can link the two.

* If your commit adds a public API function, make sure that function begins with the `spdk_` prefix, add that function to the corresponding
map file found in the same directory as the c file to which it belongs, and add it to a header file in `include/spdk` or `include/spdk_internal`.

* Any library functions that are not to be exported outside of their parent library should not begin with the `spdk` prefix and should instead by
properly namespaced by prepending the name of the library to the function name (e.g. nvme_, nvmf_, bdev_).

Development on SPDK is all done based on the `master` branch, so start by making sure you have the latest. The below
assumes `origin` is pointed at Gerrit.

~~~{.sh}
git checkout master
git pull
~~~

Next, create a branch for your development work.

~~~{.sh}
git checkout -b <my_branch>
~~~

Then, make your changes and commit as you go. You'll build up a branch off of master with a series of commits. Once you are
done, pull the latest from master again, rebase your changes on top, and update the submodule pointers that SPDK relies on.

~~~{.sh}
git checkout master
git pull
git checkout <my_branch>
git rebase -i master
git submodule update
~~~

Now your branch should be based on the tip of master and you should have the tip of <my_branch> checked out. You can push
your code to Gerrit for review by doing the following:

~~~{.sh}
git push review
~~~

If prompted for a password, remember that it is the password from the `HTTP
Password` section of the Gerrit settings. If you enabled the git credential
helper, you'll only be prompted once.

<a id="integration"></a>
## Continuous Integration

SPDK employs continuous integration (CI), which means all patches are run through a series of tests **before** they are even reviewed
with the exception:

* Patches containing [RFC] in the git commit message header are treated specially to spur comments only.  As such, these RFC patches
are **not** run through the CI system.  While a developer may specify reviewers in Gerrit for these patches, it
is highly suggested one either sends email to the SPDK mailing list or a message on the Slack to bring
attention to this type of patch for discussion.

The SPDK CI system periodically looks at Gerrit, pulls the patches down, and runs them on a pool of multiple machines with
real NVMe SSDs. The tests are all checked in to the main SPDK repository (follow `autorun.sh` in the root of the repository).
That means that users can add tests to the CI system by simply submitting a patch. Tests are required to be added in the
same patch as the new code they are testing.

The [status of the CI system](https://ci.spdk.io/) includes an overview of the queued patches. Note that patches will not
automatically be queued up, but instead require a cursory approval from one of the SPDK maintainers before they run. Patches
pending approval for a run through the CI system are listed under the 'Pending Approval' table on the CI status page.

When the CI system completes, it will post a comment on the Gerrit review with a +/-1 Verified flag, plus a link to the logs
of the test run. This is particularly useful if the tests fail. Patches will not be merged without a +1 Verified from the CI system.

<a id="integration_false_positive"></a>
### False Positives and Retriggering Patches

Occasionally, one of the CI tests will fail on a patch for an unrelated reason. We call these intermittent failures. We have a system for reporting
these failures to GitHub that allows us to track their frequency and allocate resources for tracking down and eliminating their causes.

If the CI system gives your patch a -1 but you believe it is in error (not related to your patch), you should match it to an outstanding
intermittent failure [GitHub Issue](https://github.com/spdk/spdk/issues?q=is%3Aopen+is%3Aissue+label%3A%22Intermittent+Failure%22) or file
a [new issue](https://github.com/spdk/spdk/issues/new/choose). If you do create a new issue, be sure to add the "Intermittent Failure" label to it. Once
you have obtained an issue number from GitHub, either by matching to an existing latent failure or creating your own, you can simply post a comment
to your patch on Gerrit with the following form:

~~~{.sh}
# Replace 555 with your issue number.
false positive: 555
~~~

The CI system will then take care of removing the -1 vote from your patch. It will also comment on the GitHub issue you referenced with a link
to the latest failure's log. We will prioritize tacking down and fixing these issues based on the number of comments on each one. If the system
is unable to match your comment to a valid GitHub issue, it will post back a comment on Gerrit letting you know it was unable to retrigger
your patch.

#### Triggering Specific Sub Job

When debugging changes, it may be necessary to run a specific sub job without running the entire per-patch job. Especially when uploading 'Work in Progress'
and [RFC] patches. To do this, you need to post a comment with the following content:

~~~{.sh}
tests:subjob1,subjob2,subjob3
~~~

where subjob is a job from the list:

* BlobFS-autotest
* centos7-vg-autotest
* clang-vg-autotest
* crypto-autotest
* freebsd-vg-autotest
* iscsi-vg-autotest
* iscsi-uring-vg-autotest
* lvol-vg-autotest
* nvme-vg-autotest
* nvme-cmb-pmr-vg-autotest
* nvmf-phy-autotest
* nvmf-phy-short-fuzz-autotest
* nvmf-tcp-phy-autotest
* nvmf-tcp-uring-vg-autotest
* nvmf-tcp-vg-autotest
* pmdk-vg-autotest
* rocky8-vg-autotest
* ubuntu18-vg-autotest
* ubuntu20-vg-autotest
* ubuntu22-vg-autotest
* valgrind-vg-autotest
* vfio-user-autotest
* vhost-autotest
* vhost-initiator-vg-autotest
* zns-vg-autotest

#### Mellanox Build Bot

If Mellanox Build Bot gives your patch a -1 and you believe that this failure is not related to your patch, you can re-trigger a new
build by posting a comment with the following content:

~~~{.sh}
Mellanox:retest
~~~

<a id="local"></a>
## Local Testing

You are also encouraged to run a subset of the Continuous Integration tests locally on your changes before uploading them for review by the
automated test pool. Some of the tests have been optimized to run locally with little to no setup beyond running pkgdep. The community is
constantly trying to make these tests easier to run locally to give developers a simple way to debug build pool failures offline without
having to run the whole suite. Please see below for simplifications and resources for running tests locally.

<a id="local_iscsi"></a>
### iSCSI Tests

Most of the tests under the `test/iscsi_tgt` directory in SPDK can also be run in isolation by supplying the iso flag for Example:

~~~{.sh}
sudo ./spdk/test/iscsi_tgt/fio/fio.sh --iso
~~~

The iSCSI iso flag takes care of setting up hugepages for SPDK applications. It also sets up a virtual network interface to run the tests.

<a id="local_nvmf"></a>
### NVMe-oF Tests

Each of the tests under the `test/nvmf` directory in SPDK can be run in isolation by passing the iso flag to them. For example:

~~~{.sh}
sudo ./spdk/test/nvmf/target/fio.sh --iso --transport=rdma
sudo ./spdk/test/nvmf/target/shutdown.sh --iso --transport=rdma
~~~

Please also note the use of the transport flag. This flag must be supplied when running a test locally and controls which transport is tested
against in the specific test. Valid values for this flag are "rdma" and "tcp".

When used with the RDMA transport, the NVMe-oF iso flag configures an RDMA interface with the proper IP address and sets up the hugepages
for SPDK applications. It will configure the interface on an RDMA capable NIC if available, otherwise it will emulate RDMA using Soft-RoCE.
Soft-RoCE requires the presence of the rxe_cfg configuration tool.

<a id="local_unit"></a>
### Unit Tests

The SPDK unittests are located inside of the `test/unit` directory of SPDK. There is a top level script located at `test/unit/unittest.sh` which
will execute all of the unittests. You are encouraged to run this script against your local changes before uploading a patch to the CI infrastructure.
Each unit test file can also be executed individually. This enables you to quickly run a single unit test without executing all of unittest.sh.
This enables you to run the individual unittest behind a debugger.

~~~{.sh}
sudo ./spdk/test/unit/lib/bdev/bdev.c/bdev_ut
sudo gdb ./spdk/test/unit/lib/bdev/bdev.c/bdev_ut
~~~

<a id="local_vhost"></a>
### vhost Tests

The vhost tests under `test/vhost` require the presence of a virtual machine image on the host machine.
Please, see the [Virtual Test Configuration](https://github.com/spdk/spdk/blob/master/test/common/config/README.md) for steps to prepare it.

<a id="review"></a>
## Code Review

Everyone is encouraged to review all patches and mark them with a +1 (thumbs up) or -1 (thumbs down). Code review feedback is
highly valued, so even if you are a beginner with SPDK, please jump in and start reviewing patches. For a patch to be merged,
two maintainers must give it a +2 vote, only maintainers are allowed to use +2.

<a id="hashtags"></a>
## Review Hashtags

SPDK core maintainers use a custom Gerrit dashboard to determine patches they should focus on
next for review.  In some cases, a core maintainer may request further action before voting
on the patch.  Further actions may include answering a question about a patch, requesting
a rebase for the patch, or requesting that another developer first vote the patch +1.

In these cases, Core maintainers will use Gerrit hashtags to mark patches where further
action has been requested.  This will remove the patch from the list of patches that core
maintainers should focus on.

Once the request is met (i.e. the question is answered, the patch is rebased, or another
developer voted the patch +1), the hashtag can be removed by the patch owner.  Once the
hashtag is removed, the patch will immediately go to the top of the list of patches for the
core maintainers to review.

Hashtags for a patch are listed on the patch's main Gerrit review page, in the same area where
the owner, reviewer, project and branch are listed.  Hashtags can be removed by clicking on the
small X next to the name of the hashtag.

The following hashtags are currently used by core maintainers:

* "waiting for +1" - requests a specific reviewer to provide the +1 or requests help
from anyone to review the patch; the core maintainer will provide specifics in a comment on
the patch
* "needs rebase" - this requests the submitter to rebase the patch from the latest master
branch (or in some cases, newer versions of unmerged patches that the tagged patch depends on)
* "question" - the core maintainer has a question about the patch that needs to be answered
before the core maintainer can vote on the patch

<a id="revise"></a>
## Revising Patches

SPDK has fairly high standards for patch approval. We try to strike a balance between maintaining a high velocity and not allowing
ourselves to become overwhelmed in technical debt. Given this, you should expect all non-trivial patches to go through at least a
few rounds of code review.

Fortunately, Gerrit makes it very easy to update an outstanding review. You simply update the commits in your git repository to
incorporate the new changes and push again. For instance:

~~~{.sh}
git checkout <my_branch>
  address code review feedback
git commit -a --amend
git push review
~~~

<a id="multi"></a>
## Multi-Commit Patch Series

Gerrit has excellent support for creating series of patches, where each commit is reviewable separately but is dependent on
the previous one for merging. You can push an entire series of patches to Gerrit using the following steps:

~~~{.sh}
git checkout master
git pull
git checkout <my_series>
    make some changes
git commit -s -a # Change 1
    make some changes
git commit -s -a # Change 2
    make some changes
git commit -s -a # Change 3
git push review
~~~

Gerrit will create three reviews, each dependent on one another. Inevitably, a reviewer will ask you to make a change during
code review on change #2. To address that feedback, you should do the following:

~~~{.sh}
git checkout <sha of change #2>
git checkout -b tmp # 'tmp' or any name you want
    address code review feedback
git commit -s -a --amend # The amend modifies change #2 to include your updates
git checkout <my_series> # Points at change #3
git rebase -i tmp # Move change #3 on top of the new change #2
git submodule update
git push review
git branch -D tmp # Clean up the 'tmp' branch
~~~
<a id="submodule"></a>
### Managing Submodule Patches

SPDK uses git submodules to incorporate some dependencies such as DPDK and these submodules point to a
fork of the relevant upstream repository. This allows the SPDK community to apply SPDK-specific patches
to the fork for either critical fixes or to unblock new development. Keeping the SPDK fork in sync with
the upstream repository is a manual process. In order to simplify the process, patches for submodules are
expected to be made as follows:

* Before proposing your patch to the SPDK fork, propose it in the upstream community first for feedback.
* Incorporate feedback and then propose a patch to the relevant SPDK fork using the same commit message as
was used in the upstream.
* Track your upstream patch and notify the SPDK community (any communications channel) when it has been accepted.

At SPDK major (usually quarterly) release time, the SPDK repo is tagged which implicitly also captures the hashes
for each of the respective submodules.  Shortly thereafter, by convention a branch is instantiated in the SPDK
repo following the naming convention of vYY.MM.x (where YY=last two digits of the year, and MM=month) based on
that major release hash in preparation for any future maintenance releases derived from that major release.
Any SPDK maintenance releases can only include new bug fixes to existing and currently used branches.

Work meanwhile continues on SPDK's master branch for the march toward the next quarterly release.  During that phase
a check is performed upstream corresponding to each forked repo maintained as a git submodule to see if there
is a newer release.  For each newer release, we fork a copy of that release representing it as a new branch
in the respective submodule.  By that point hopefully any SPDK-specific patches which were previously
submitted to those respective upstream projects will have been incorporated in the newer release and so
the release is inspected for them.   For those SPDK-specific patches that have not been incorporated in
the newer release, they are ported forward atop the newer release branch in the submodule.  A commit is then
done on the SPDK repo's master branch for each of the updated submodules to capture the hash of their new heads.

<a id="core"></a>
## Core Maintainers

The SPDK core maintainers primary responsibility is to provide technical oversight for the SPDK Project.
The current list of SPDK core maintainers includes:

* Jim Harris
* Changpeng Liu
* Alexey Marchuk
* Shuhei Matsumoto
* Konrad Sztyber
* Ben Walker
* Tomek Zawadzki

Additionally, SPDK has two maintainers focused on the spdk-csi project:

* Yibo Cai
* Antti Kervinen

The bulk of this technical oversight is achieved through reviewing and approving patches.  Patches
must receive +2 votes from two core maintainers and a +1 vote from the SPDK automated test pool before
it can be committed.  Only core maintainers have the ability to add a +2 vote and commit patches.  Core
maintainers may also vote +1 on patches if they have reviewed the patch but cannot provide an expert opinion
in an area of code with which they are not as familiar.

Under rare circumstances and at the discretion of a core maintainer, a patch may be committed with only one
+2 vote.

Other roles and responsibilities of the core maintainers include:

* Setting code review and development guidelines
* Making decisions on community processes
* Role modeling good development practices
* Fostering a positive, productive community
* Participating in project roadmap definition
* Identifying and organizing development tasks

### Core Maintainers Emeritus

* Darek Stojaczyk (2018-2020)
* Daniel Verkamp (2015-2018)
