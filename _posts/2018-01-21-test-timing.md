---
layout: post
title:  "How Long Did My Test Take?"
author: Paul Luse 
categories: news
---

When submitting a new unit test, it's not necessary to worry too much
about how long the test takes because there's no real hardware involved
so the unit tests execute super-fast.

However, when you are adding a test that runs either per patch or on a
nightly basis that uses real hardware it's very important to understand
how long the test takes because it's far too easy to unintentionally increase
the per patch or nightly tests by an amount that will either cause the
series of tests to timeout or simply waste valuable limited resources in
the test pool.

When adding a test that does IO to an NVMeOF target, for example, you might
run FIO for 30 seconds thinking you've added only 30 seconds when in reality
you may have added up to 3x that (or more) because of the time it takes for 
the automated software to setup the test bed.

Fortunately there's an easy way in the SPDK CI system to see how long any
specific timestamped series of commands takes.  For this to work, all you
have to do is make sure you surround the code that invokes your tests with
timing enter and exit functions. You do this in the shell script that you've
added or modified while adding your test.

For example, in `spdk/test/nvmf/nvmf.sh`, you can see examples of this:

timing_enter nvmf_tgt
...your code...
timing_exit nvmf_tgt

And you can nest these statements as well.

Once you've done this and submitted your patch, you can use timing charts
that are automatically generated as part of the CI process to see how long
things are taking.  To get to the timing charts, start by finding your patch
on [GerritHub](https://review.gerrithub.io/#/q/project:spdk/spdk+status:open).
 
Now find your +1 verified link to the build output as shown below:
![CI Link](../../../../../img/blog/plus_1.jpg "CI Link")

Next you need to find the test system that executed your tests, the descriptions
of what each test server does are next to, as shown below, so that's the best
hint. Otherwise you can look through them all until you see your timing labels.
Click on the test system once you find it.
![Test System Link](../../../../../img/blog/test_system.jpg "Test System Link")

In the directory listing, you'll see the file `timing.svg` click on it.
![Directory Listing](../../../../../img/blog/dir_list.jpg "Directory Listing")

Now you will see the timing chart showing the test time per block as defined
by the timing labels described earlier. As you mouse-over each block you will
see the test time for that block and all those above it.
![Timing](../../../../../img/blog/timing.jpg "Timing")
