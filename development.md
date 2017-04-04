---
layout: default
title:  "SPDK Development"
---

# License

SPDK is primarily licensed using a [BSD 3-clause license](https://opensource.org/licenses/BSD-3-Clause). Some optional or utility code, such as kernel modules, is licensed using a dual BSD/GPLv2 license. All submitted code must carry the appropriate license.

# Source Code

SPDK's source code is available on [GitHub](https://github.com/spdk/spdk) and may be cloned using `git` with the following command:

~~~{.sh}
git clone https://github.com/spdk/spdk
~~~

# Contributing

Everyone is welcome to contribute! SPDK uses GitHub pull requests for patch submission. See the [full documentation](https://help.github.com/categories/collaborating-with-issues-and-pull-requests/) for details or the section below for a quick example. GitHub allows for a wide range of workflows, but for the SPDK project we require that contributors stick to the following guidelines:

* All commits must be signed off by the developer which indicates that you agree to the [Developer Certificate of Origin](http://developercertificate.org/). This is done using the `-s` or `--signoff` option when commiting your changes.

* All commits must conform to the SPDK style guide. The style guide is defined by the script located in `scripts/check_format.sh`, which will programmatically fix coding style issues using the tools `astyle` and `pep8`.

* You are expected to rewrite your local branch's history prior to submitting a pull request such that each commit has a clear functional purpose that takes an incremental step toward the goal of the series of commits. The title and description of the pull request should describe the purpose of the patch series. Developers are encouraged to commit early and often onto their local branches (for instance, commit to go to lunch), but these types of commits should be cleaned up prior to submitting the pull request.

* Each commit should pass all tests and have a clear commit message describing the purpose of the commit. Good commit messages provide a very brief summary of what the commit does, preferably in the title, with (optionally) a justification for why the commit is necessary in the body. When a pull request is merged it will be rebased onto the target branch, so your commit history will be visible!

Patch discussion will typically happen directly on the GitHub pull request. Design pre-work and general discussion occurs on the mailing list. Anyone can provide feedback in either location and all discussion is welcome. Decisions on whether to merge patches will be handled by the maintainers:

* Daniel Verkamp
* Benjamin Walker
* Jim Harris

For guidelines on SPDK releases and bug reports, see [SPDK Releases](http://www.spdk.io/releases).

# Opening a Pull Request

**Step 1** - Log in to [GitHub.com](http://github.com) and fork the SPDK repository.

**Step 2** - Create a new branch in your private copy of the SPDK repository that you forked in the previous step.

**Step 3** - Run the git clone command on your development box to download the code.

  ~~~{.sh}
  git clone https://github.com/<your_github_username>/spdk.git
  ~~~

**Step 4** - Create a local branch that tracks the remote branch you created in step 2 so that when you push your changes the remote branch will be updated. For example, if the branch you created in step 2 is called bug_fix, run the following git command on your development box in the SPDK directory to create a local branch called bug_fix that tracks the remote branch.

  ~~~{.sh}
  git checkout --track origin/bug_fix
  ~~~

**Step 5** - Make changes on the new branch and commit them to your local repository. Commit as many times as you want because the commits are local and will be combined before pushing to the remote repository. For example:

  ~~~{.sh}
  git add test.cpp
  git commit -s -m "nvme: fix I/O corruption with unaligned buffers"
  ~~~

  Note that all commits must be signed off by the developer which indicates that you agree to the [Developer Certificate of  Origin](http://developercertificate.org/). This is done using the `-s` or `--signoff` option when commiting your changes.

**Step 6** - Push the changes to GitHub

  ~~~{.sh}
  git push https://github.com/<your_github_username>/spdk.git
  ~~~

**Step 7** - Submit a pull request using [GitHub pull requests](http://github.com/spdk/spdk/pulls) (PRs)

**Step 8** - The GitHub pull request will automatically include the commit message. You can edit the commit message and provide more details if you'd like. Ensure you include the Signed-off-by the developer at the end of pull request description.

