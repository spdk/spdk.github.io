---
layout: post
title:  "Tracing Framework"
author: Krzysztof Karas
categories: "spdk_trace"
---

## Introduction

Traces in SPDK provide us with information about what is happening inside our code in various
scenarios. One could think about them as "info logs", but defined very differently than regular
print to stdout function. Over the few last months a great deal of effort has been put into
expanding our tracing framework and we want to tell you about our work in a few words.

### Trace types

We use two types of traces: SPDK tracepoints and BPF dtrace probes. The former are usually used in
places requiring short processing time, like io related code. The latter are implemented where
there are no time constraints, as they have higher overhead due to software interrupts.

## General structure

Our tracing framework is spread across multiple files.
SPDK tracepoints are implemented in:

- `trace_defs.h` is the place where we keep all our tracepoint and trace group definitions,
- `trace` library in `/lib` directory provides most of the functionality to initiate, record and
cleanup traces in our SPDK application,
- `trace_parser` lies next to the trace library - it is used to parse recorded traces.

This type of traces requires registration before calling to record them from within the code.
We use `SPDK_TRACE_REGISTER_FN` macro inside the file they are to be used in to specify the
tracepoint name and its arguments, if there are any.

BPF dtrace probes are specified in the `.c` files with `SPDK_DTRACE_PROBE` macro - it allows to
specify a probe point with up to 4 arguments. The `.bt` files in `scripts/bpf` directory provide
examples of how to use the probe points. The `bpftrace.sh` script may be later executed to print
out all saved records.

Both of above trace types may be used together to annotate SPDK tracepoints with supplementary
information from BPF dtrace probes - this provides another layer of detail to printed traces.

### Trace parser

Trace parser library was recently extracted from our trace library and expanded later by
Konrad Sztyber. It is written in C++ and its main purpose is to parse traces recorded by
SPDK application and allow other applications, e.g. `trace.py`, to make use of recorded tracepoints.

## How to

You can find information about how to run spdk tracepoints and BPF dtrace probes in our
documentation pages [here](https://spdk.io/doc/nvmf_tgt_tracepoints.html) and
[here](https://spdk.io/doc/usdt.html). For detailed description of BPF tracing please
check out our previous blogpost
[BPF tracing with SPDK](https://spdk.io/news/2021/09/28/bpf_tracing_with_spdk/).

## Current traces

We currently use SPDK tracepoints to track information in our libraries:

- bdev
- blobfs
- ftl
- iscsi
- nvme
- nvmf
- scsi
- thread

We also have them in module/accel/idxd module and test/app/fuzz/iscsi_fuzz.

BPF dtrace probes are used in libraries:

- nvmf
- ctrlr
- subsystem

and in modules:

- event
- scheduler

## Even more traces

There are a number of traces on the way to be introduced in the near future, providing even broader
coverage for different code paths in our project. Stay tuned!

We also plan to release more material on the topic to help you understand and create your own
traces inside SPDK!

## Contributing

If you have an idea how to improve our tracing framework, you are welcome to post a GitHub issue
[here](https://github.com/spdk/spdk/issues) with `enhancement` label and we will se what we can do!
Same goes for questions: just post an issue with `question` label and we will do our best to answer
any concerns.
