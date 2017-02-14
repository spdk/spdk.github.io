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
The following is a typical development work flow decribing the steps to download the SPDK code, make changes and submit a patch for review:

1. Login to github.com and fork the SPDK repository.
2. Create a new branch in your private copy of the SPDK repository that you forked in the previous step.
3. Run git clone command on your development box to download the code to your development box.

  ~~~{.sh}
  git clone https://github.com/your_github_username/spdk.git
  ~~~

4. Create a local branch that tracks the remote branch you created in step 2 so that when you push your changes the remote branch will be updated. For example, if the branch you created in step 2 is called bug_fix, run the following git command on your development box in the SPDK home directory to create a local branch called bug_fix that tracks the remote branch.

  ~~~{.sh}
  git checkout --track origin/bug_fix
  ~~~

5. Make changes on the new branch and commit them on your local repository. Commit as many times as you want because the commits are local and will be combined before pushing to the remote repository. For example:

  ~~~{.sh}
  git add test.cpp
  git commit -s -m "bug fix #: i/O buffer corrupted"
  ~~~

  Note that all commits must be signed off by the developer (`--signoff`) which indicates that you agree to the [Developer Certificate of  Origin](http://developercertificate.org/). This is done using the -s option when commiting your changes.
  
6. Rebase all changes on the local repository branch:

  ~~~{.sh}
  git rebase -i master
  ~~~

7. Push the changes to github

  ~~~{.sh}
  git push https://github.com/your github username/spdk.git
  ~~~

  All code is checked for style correctness by running `scripts/check_format.sh`. This script requires `astyle` and optionally `pep8` and   will automatically format C, C++, and Python code.

8. Submit a pull request using [GitHub pull requests](http://github.com/spdk/spdk/pulls) (PRs)
9. Provide a brief description of the changes you made and include the Signed-off-by the developer at the end of pull request description.

Patch discussion will happen directly on the GitHub PR. Design pre-work and general discussion occurs on the mailing list. Anyone can provide feedback in either location and all discussion is welcome. Decisions on whether to merge patches will be handled by the maintainers:

* Daniel Verkamp
* Benjamin Walker
* James Harris

For guidelines on SPDK releases and bug reports, see [SPDK Releases](http://www.spdk.io/releases).
