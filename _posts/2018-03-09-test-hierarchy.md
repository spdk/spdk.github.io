---
layout: post
title:  SPDK Test Script Hierarchy
author: Seth Howell
categories: update
---

As the SPDK code base has been growing, so has the collection of test scripts
used by the automated build pool to verify that it is all functioning properly.
The SPDK test bed is comprised of a hierarchy of bash scripts which make calls
to example applications and unit tests written in c. By running these test scripts
and aggregating the results, the SPDK build pool is able to verify the correctness
of each patch that is incorporated into SPDK.

When submitting a new test, it can be difficult to know where it fits into the
big picture. In order to help answer this question, I have created a [hierarchy](../../../../../doc/test_hierarchy.pdf) diagram
of the test scripts and their relationships to each other. It also contains a brief
description of the functions performed by some of the more complex scripts.
This hierarchy is likely to evolve over time, but the diagram provides a good
starting place for anyone trying to understand how testing is done in SPDK, where
to find common helper functions to use in their test cases, or where to place
newly created tests in the SPDK repository.
