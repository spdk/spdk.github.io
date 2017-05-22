---
layout: default
title:  "SPDK Development"
---

# License

SPDK is primarily licensed using a [BSD 3-clause license](https://opensource.org/licenses/BSD-3-Clause). Some optional or utility code, such as kernel modules, is licensed using a dual BSD/GPLv2 license. All submitted code must carry the appropriate license.

# Source Code

SPDK's source code is hosted by [GitHub](https://github.com/spdk/spdk) and code review is done through [GerritHub](https://review.gerrithub.io/#/q/project:spdk/spdk+status:open). To obtain a read-only copy of the latest source, use the following `git` command:

~~~{.sh}
git clone https://github.com/spdk/spdk
~~~

# Contributing

Everyone is welcome to contribute! Design pre-work and general discussion occurs on the mailing list and anyone is welcome to chime in on any discussion. Patch submission is done through GerritHub, which is outlined below. Decisions on whether to merge patches will be handled by the maintainers:

* Daniel Verkamp
* Ben Walker
* Jim Harris

SPDK uses [GerritHub](https://review.gerrithub.io/#/admin/projects/spdk/spdk) for patch submission, code review, and continuous integration. If you're familiar with Gerrit, SPDK is the `spdk/spdk` project. Otherwise, the following is a comprehensive guide to setting up a system to contribute code to SPDK. This guide assumes knowledge of `git`. If you are unfamiliar with `git`, there is an excellent (and free!) book [here](https://git-scm.com/book/en/v2). It is absolutely worth investing the time to learn it.

## GerritHub Configuration

[Gerrit](https://www.gerritcodereview.com/) is a code review, patch submission, and repository management system for git. [GerritHub](https://www.gerrithub.io) is a cloud hosting service for instances of Gerrit that is automatically synced with GitHub. All patch submission and review will occur through GerritHub and will be automatically synced to the main repository on GitHub.

To use GerritHub, you'll need a GitHub account, so [click here](https://github.com/join) to make one if you don't have one. You'll log in to GerritHub using your GitHub account. Once you have a GitHub account, visit [GerritHub](https://review.gerrithub.io) and click on the `GitHub Sign-in` button in the top right corner. You'll login with your **GitHub** credentials.

Now that you're signed in, click the drop down by your user name in the top right corner and then click on `Settings`. We're going to walk through some settings that will make GerritHub much more convenient to use with SPDK's workflow. On the far left of the page are settings pages such as `Profile`, `Diff Preferences`, `Identities`, etc. We'll hit a few of them below, but feel free to explore the rest of the settings.
* `Profile`: Verify that the information is correct here. It was imported from GitHub, so if it is incorrect you'll need to fix it in GitHub.
* `Preferences`:
  * Set Maximum Page Size to 100 rows per page. Otherwise you'll be hitting 'next' a lot.
  * We highly recommend you set your Email Notifications to None. Gerrit can send a lot of emails, especially if you are involved in lots of code reviews. Instead, most of the developers just check the main overview page for incoming reviews a few times a day (we poll instead of interrupt - sounds familiar!). If you are very occasionally submitting a patch and aren't doing many reviews, you may want to leave your email notifications enabled.
  * In the `My Menu` section, add the following entry: `Name: SPDK Open Reviews URL: #/dashboard/?Outgoing=projects:spdk+o:self+status:open&Needs%20Review=projects:spdk+r:self+-o:self+status:open&Open=projects:spdk+status:open+-r:self+-o:self`. You can probably also delete the other entries in there. This will add a link at the top of the page under "My" that will show you a nice dashboard of all of the SPDK review activity.
* `SSH Public Keys`: Upload a public SSH key here. This is only necessary if you need to push reviews over SSH. GerritHub also supports HTTPS, and HTTPS is the recommended method and the method described below.
* `HTTP Password`: Generate a password here and save it for later. This will be required when creating new code reviews using HTTPS.

Now that you're configured, you can clone the repository locally:

~~~{.sh}
git clone https://review.gerrithub.io/spdk/spdk
git submodule update --init
~~~

Or if you already cloned from GitHub, you can change your repository to point at GerritHub by doing:

~~~{.sh}
git remote set-url origin https://review.gerrithub.io/spdk/spdk
~~~

This will prompt you for a username and a password. The username is your GitHub name, but the password is the one generated from the `HTTP Password` section above. Remembering this password is annoying, so we recommend you use the [git credential helper](https://git-scm.com/docs/git-credential-store) to store your password for you. You can enable it for the SPDK repository with:

~~~{.sh}
git config credential.helper store
~~~

Then, after using the password once, it won't prompt you anymore.

Finally, you'll need to install the Gerrit commit-msg hook. This inserts a unique change ID each time you commit and is **required** for Gerrit to work. You can do that by running the following from the root of the git repository:

~~~{.sh}
curl -Lo .git/hooks/commit-msg https://review.gerrithub.io/tools/hooks/commit-msg
chmod +x .git/hooks/commit-msg
~~~

Now you should be all set!

## Submitting a Patch

Before diving into the mechanics of submitting a patch, we have a few requirements that need mentioning.

* All commits must be signed off by the developer which indicates that you agree to the [Developer Certificate of Origin](http://developercertificate.org/). This is done using the `-s` or `--signoff` option when commiting your changes.

* All commits must conform to the SPDK style guide. The style guide is defined by the script located in `scripts/check_format.sh`, which will programmatically fix coding style issues using the tools `astyle` and `pep8`.

* Commits should build and be tested as well as you can with the hardware you have available.

* You are expected to rewrite your local branch's history prior to submitting a review such that each commit has a clear functional purpose that takes an incremental step toward the goal of the series of commits. Developers are encouraged to commit early and often onto their local branches (for instance, commit to go to lunch), but these types of commits should be cleaned up prior to submitting reviews.

* Each commit should pass all tests and have a clear commit message describing the purpose of the commit. Good commit messages provide a very brief summary of what the commit does, preferably in the title, with (optionally) a justification for why the commit is necessary in the body. When a patch is merged it will be rebased onto the target branch, so your commit history will be visible!

Now that we have that out of the way, the mechanics of submitting a patch are reasonably simple. Development on SPDK is all done based on the `master` branch, so start by making sure you have the latest. The below assumes `origin` is pointed at GerritHub.

~~~{.sh}
git checkout master
git pull
~~~

Next, create a branch for your development work.

~~~{.sh}
git checkout -b <my_branch>
~~~

Then, make your changes and commit as you go. You'll build up a branch off of master with a series of commits. Once you are done, pull the latest from master again and rebase your changes on top.

~~~{.sh}
git checkout master
git pull
git checkout <my_branch>
git rebase -i master
~~~

Now your branch should be based on the tip of master and you should have the tip of <my_branch> checked out. You can push your code to Gerrit for review by doing the following:

~~~{.sh}
git push origin HEAD:refs/for/master
~~~

If that seems a bit wordy, there is a slick shortcut. In the root of your repository, open .git/config in a text editor and add these lines:

~~~
[remote "review"]
  url = https://review.gerrithub.io/spdk/spdk
  push = HEAD:refs/for/master
~~~

That essentially aliases the above command to this:

~~~{.sh}
git push review
~~~

Note that Gerrit is smart enough to create a sequence of reviews, one for each commit, when you push a branch. Use this to your benefit!

## Continuous Integration

SPDK employs continuous integration (CI), which means all patches are run through a series of tests **before** they are even reviewed. The SPDK CI system periodically looks at GerritHub, pulls the patches down, and runs them on a pool of multiple machines with real NVMe SSDs. The tests are all checked in to the main SPDK repository (follow `autorun.sh` in the root of the repository). That means that users can add tests to the CI system by simply submitting a patch. We highly recommend that tests are added in the same patch as the new code they are testing.

The [status of the CI system](https://ci.spdk.io/status/) is publicly accessible. This includes an overview of the queued patches. Note that patches will not automatically be queued up, but instead require a cursory approval from one of the SPDK maintainers before they run. This is to prevent denial of service attacks and malicious patches. Patches pending approval for a run through the CI system are listed under the 'Pending Approval' table on the CI status page.

When the CI system completes, it will post a comment on the Gerrit review with a +/-1 Verified flag, plus a link to the logs of the test run. This is particularly useful if the tests fail. Patches will not be merged without a +1 Verified from the CI system.

## Code Review

Everyone is encouraged to review all patches and mark them with a +1 (thumbs up) or -1 (thumbs down). Code review feedback is highly valued, so even if you are a beginner with SPDK, please jump in and start reviewing patches.

For a patch to be accepted, at least one maintainer must approve (+2). In practice, all patches will wait for at least two maintainers to provide a +2.

## Revising Patches

SPDK has fairly high standards for patch approval. We try to strike a balance between maintaining a high velocity and not allowing ourselves to become overwhelmed in technical debt. Given this, you should expect all non-trivial patches to go through at least a few rounds of code review.

Fortunately, Gerrit makes it very easy to update an outstanding review. You simply rewrite the commits in your git repository to incorporate the new changes and push again. For instance:

~~~{.sh}
git checkout <my_branch>
  address code review feedback
git commit -a --amend
git push review
~~~

Gerrit will automatically figure out that you amended a commit that was previously uploaded (this is what the Gerrit commit-msg hook we installed earlier does) and so it will just update the existing review. This works for entire series of patches, too. For confident git users, this is incredibly powerful. For those not some comfortable with git, rewriting history can be a bit of a challenge. Make it a point to get comfortable with `git rebase` and `git commit --amend` - it is worth every minute invested.

## Multi-Commit Patch Series

Gerrit has excellent support for creating series of patches, where each commit is reviewable separately but is dependent on the previous one for merging. You can push an entire series of patches to Gerrit using the following steps:

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

Gerrit will create three reviews, each dependent on one another. Inevitably, the SPDK core developers will ask you to make a change during code review on change #2. To address that feedback, you could do the following:

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

One trick is to make an alias for creating the temporary branch. Edit ~/.gitconfig and add the following:

~~~
[alias]
    mktmp = !git branch -f tmp && git checkout tmp
~~~

Then you could write the above as:

~~~{.sh}
git checkout <sha of change #2>
git mktmp
    address code review feedback
git commit -s -a --amend # The amend modifies change #2 to include your updates
git checkout <my_series> # Points at change #3
git rebase -i tmp # Move change #3 on top of the new change #2
git push review
~~~

The alias will automatically move an existing tmp branch to the new location, so you don't need to delete it. Just don't rely on tmp to point to anything permanent!
