---
layout: default
title:  "SPDK Development"
---

# In this document:

* [License](#license)
* [Source Code](#source)
* [Contributing](#contributing)
* [Development Guidelines](#guidelines)
* [GerritHub Configuration](#gerrithub)
* [Submitting a Patch](#patch)
* [Continuous Integration](#integration)
* [Code Review](#review)
* [Review Hashtags](#hashtags)
* [Revising Patches](#revise)
* [Multi-Commit Patch Series](#multi)
* [Core Maintainers](#core)

<a id="license"></a>
## License

SPDK is primarily licensed using a [BSD 3-clause license](https://opensource.org/licenses/BSD-3-Clause).
Some optional or utility code, such as kernel modules, is licensed using a dual BSD/GPLv2 license.
All submitted code must carry the appropriate license.

<a id="source"></a>
## Source Code

SPDK's source code is hosted by [GitHub](https://github.com/spdk/spdk) and
patch submission and review is done through
[GerritHub](https://review.gerrithub.io/q/projects:spdk+status:open).

Instructions for building the libraries and examples are located in the
[README](https://github.com/spdk/spdk/blob/master/README.md).

<a id="contributing"></a>
## Contributing

Everyone is welcome to contribute! Design pre-work and general discussion occurs via one of the
communications channels described on the [Community](/community/) page.

Patch submission is done through GerritHub where patches are voted on by everyone in the community.
A patch usually requires a minimum of two +2 votes before it will be merged. +2 votes are reserved for
the [core maintainers](#core) who can be contacted on the mailing list or in IRC.

<a id="guidelines"></a>
## Development Guidelines

These general guidelines help ensure that the SPDK development community remains fun, fair, and efficient.

* Developers should strive to be active on GerritHub in order to stay in the loop on upcoming changes.
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

<a id="gerrithub"></a>
## GerritHub Configuration

Log into [GerritHub](https://review.gerrithub.io) using your GitHub account credentials. Once logged in, in the
top right corner click your user name and select 'Settings'. You should set up the following:

* `Profile`: Verify that the information is correct here.
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

Now that you're configured, you can clone the GerritHub repository locally:

~~~{.sh}
git clone https://review.gerrithub.io/spdk/spdk
cd spdk
git submodule update --init
~~~

Or if you already cloned directly from GitHub, you can change your repository to point at GerritHub by doing:

~~~{.sh}
git remote set-url origin https://review.gerrithub.io/spdk/spdk
~~~

When you later push a patch, you'll be prompted for a password. That password
is the one generated in the `HTTP Password` section of the GerritHub settings,
not your GitHub password. To make it easy, turn on the
[git credential helper](https://git-scm.com/docs/git-credential-store) to store
your password for you. You can enable it for the SPDK repository with:

~~~{.sh}
git config credential.helper store
~~~

Finally, you'll need to install the Gerrit commit-msg hook. This inserts a unique change ID each time you
commit and is **required** for Gerrit to work.

~~~{.sh}
curl -Lo .git/hooks/commit-msg https://review.gerrithub.io/tools/hooks/commit-msg
chmod +x .git/hooks/commit-msg
~~~

Now open .git/config in a text editor and add these lines: (this will make pushing reviews easier)

~~~
[remote "review"]
  url = https://review.gerrithub.io/spdk/spdk
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
There should be a blank line between this first line and the rest of the commit message.

* If your commit fixes a GitHub issue, please include "Fixes #issue number" on a separate line so that GitHub can link the two.

Development on SPDK is all done based on the `master` branch, so start by making sure you have the latest. The below
assumes `origin` is pointed at GerritHub.

~~~{.sh}
git checkout master
git pull
~~~

Next, create a branch for your development work.

~~~{.sh}
git checkout -b <my_branch>
~~~

Then, make your changes and commit as you go. You'll build up a branch off of master with a series of commits. Once you are
done, pull the latest from master again and rebase your changes on top.

~~~{.sh}
git checkout master
git pull
git checkout <my_branch>
git rebase -i master
~~~

Now your branch should be based on the tip of master and you should have the tip of <my_branch> checked out. You can push
your code to Gerrit for review by doing the following:

~~~{.sh}
git push review
~~~

If prompted for a password, remember that it is the password from the `HTTP
Password` section of the GerritHub settings. If you enabled the git credential
helper, you'll only be prompted once.

<a id="integration"></a>
## Continuous Integration

SPDK employs continuous integration (CI), which means all patches are run through a series of tests **before** they are even reviewed
with the exception:

* Patches containing [RFC] in the git commit message header are treated specially to spur comments only.  As such, these RFC patches
are **not** run through the CI system.  While a developer may specify reviewers in Gerrit for these patches, it
is highly suggested one either sends email to the SPDK mailing list or a message on the IRC SPDK channel to bring
attention to this type of patch for discussion.

The SPDK CI system periodically looks at GerritHub, pulls the patches down, and runs them on a pool of multiple machines with
real NVMe SSDs. The tests are all checked in to the main SPDK repository (follow `autorun.sh` in the root of the repository).
That means that users can add tests to the CI system by simply submitting a patch. Tests are required to be added in the
same patch as the new code they are testing.

The [status of the CI system](https://dqtibwqq6s6ux.cloudfront.net/) includes an overview of the queued patches. Note that patches will not
automatically be queued up, but instead require a cursory approval from one of the SPDK maintainers before they run. Patches
pending approval for a run through the CI system are listed under the 'Pending Approval' table on the CI status page.

When the CI system completes, it will post a comment on the Gerrit review with a +/-1 Verified flag, plus a link to the logs
of the test run. This is particularly useful if the tests fail. Patches will not be merged without a +1 Verified from the CI system.

If the CI system gives your patch a -1 but you believe it is in error (not related to your patch), add a comment to the patch
that starts with the word "retrigger".  This will signal the CI system to re-run for the associated patch.

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
code review on change #2. To address that feedback, you could do the following:

~~~{.sh}
git checkout <sha of change #2>
git checkout -b tmp # 'tmp' or any name you want
    address code review feedback
git commit -s -a --amend # The amend modifies change #2 to include your updates
git checkout <my_series> # Points at change #3
git rebase -i tmp # Move change #3 on top of the new change #2
git push review
git branch -D tmp # Clean up the 'tmp' branch
~~~

<a id="core"></a>
## Core Maintainers

The SPDK core maintainers primary responsibility is to provide technical oversight for the SPDK Project.
The current list of SPDK core maintainers includes:

* Jim Harris (IRC: jimharris)
* Changpeng Liu (IRC: changpe1)
* Shuhei Matsumoto (IRC: Shuhei)
* Darek Stojaczyk (IRC: darsto)
* Ben Walker (IRC: bwalker)

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

* Daniel Verkamp (2015-2018)
