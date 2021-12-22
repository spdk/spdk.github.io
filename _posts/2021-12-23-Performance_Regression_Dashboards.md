---
layout: post
title:  "SPDK Performance Regression Test Dashboards"
author: Karol Latecki
categories: news
---

<p> SPDK Continuous Integration system provides functional test results for patches submitted
at <a href="https://review.spdk.io">https://review.spdk.io</a>.
These tests however, do not provide information about the impact of submitted changes on SPDK's
overall performance. Because of that, we decided to make performance regression test results
available for the community. The tests are scheduled to run roughly every two hours using the
most recent SPDK code base available on master branch. Result are presented using Grafana
dashboards containing information about IOPS, Bandwidth and Latency (along with visual
representation) are available on
<a href="https://performance.spdk.io">https://performance.spdk.io</a>.</p>

<p>The tests are executed using steps described in
<a href="https://spdk.io/doc/performance_reports.html">SPDK performance report documents</a>.
The hardware used for regressions tests is different than that described in the performance
reports. Therefore the results from dashboards should not be treated as a substitute or
equivalent to quarterly report documents.</p>

<p>
Following test cases from quarterly reports are represented, with more coming soon!
<table>
    <ul>
        <li>SPDK Vhost
            <ul>
                <li>Test Case 1: SPDK Vhost Core Scaling</li>
            </ul>
        </li>
        <li>SPDK NVMe-oF TCP
            <ul>
                <li>Test Case 1: SPDK NVMe-oF TCP Target I/O core scaling</li>
                <li>Test Case 2: SPDK NVMe-oF TCP Initiator I/O core scaling</li>
                <li>Test Case 3: Linux Kernel vs. SPDK NVMe-oF TCP Latency</li>
            </ul>
        </li>
        <li>SPDK NVMe-oF RDMA
            <ul>
                <li>Test Case 1: SPDK NVMe-oF RDMA Target I/O core scaling</li>
                <li>Test Case 2: SPDK NVMe-oF RDMA Initiator I/O core scaling</li>
                <li>Test Case 3: Linux Kernel vs. SPDK NVMe-oF RDMA Latency</li>
            </ul>
        </li>
    </ul>
</table>
</p>
