---
layout: post
title:  SPDK Test Script Hierarchy
author: Seth Howell
categories: update
---

As the SPDK code base has been growing, so has the collection of test scripts
used by the automated build pool to perform continuous integration testing.
The SPDK test bed is comprised of a hierarchy of bash scripts which make calls
to example applications (located under spdk/examples) and tools written for
testing (located under spdk/test). By running these test scripts and aggregating
the results, the SPDK automated test pool helps contributors identify
code errors or continuous integration issues introduced by their patches.

When submitting a new test, it can be difficult to find where it fits into the
big picture. In order to help answer this question, I have created a [hierarchy](../../../../../doc/test_hierarchy.pdf) diagram
of the test scripts and their relationships to each other. It also contains a brief
description of the functions performed by some of the more complex scripts.
This hierarchy is likely to evolve over time, but the diagram provides a good
starting place for anyone trying to understand how testing is done in SPDK, where
to find common helper functions to use in their test cases, or where to place
newly created tests in the SPDK repository.

Please look forward to more blog posts aimed at helping everyone better understand
and utilize the SPDK test infrastructure. Testing is a major portion of this project.
The more we, as members of the SPDK community, contribute to building a robust and
efficient test infrastructure, the better off we will all be.