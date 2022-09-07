---
layout: post
title:  "Tracing Framework Guide Part 2"
author: Krzysztof Karas
categories: "spdk_trace"
---

## Introduction

Hello again! Last time I posted the first part of SPDK trace guide, focusing on SPDK
tracepoints. This time we will take a close look at BPF probes, which are very different
from the SPDK tracepoints.

### A little reminder

As I mentioned before (in the previous post), we use two types of traces in SPDK: our own SPDK
tracepoints and BPF PROBES. The former are usually used in performance sensitive places such
as the I/O path where we want as little overhead as possible. The latter we use where there are
no time limitations and we can afford higher overhead due to software interrupts.

## Recording BPF probes

### Definition

To define a BPF probes we need to edit appropriate file in `scripts/bpf/`.
If we wanted to add a trace somewhere in bdev module, for example in
`module/bdev/nvme/bdev_nvme.c`, we would need to do two things:

1. Add a trace in the code, similarly to what we did with SPDK tracepoints.
2. Edit a `.bt` file in `scripts/bpf/`, or add it if it does not exist,

We usually pick a name that is preceded by module name. This is a string that will display each
time a trace event is captured, so it should be descriptive. Here is an example:

`bdev_nvme_ctrlr_delete` - this name tells us that the event was captured in bdev NVMe module
(`module/bdev/nvme`) related code, during controller deletion. General template for naming BPF
traces looks like this:

```bash
<probe name> = <library or module name>_<related event>
```

Keep in mind that probe name, argument number and their types must match exactly what we put
in `C` code to capture the events. The macro definitions can be found in
`include/spdk_internal/usdt.h`. For our example `bdev_nvme_ctrlr_delete`, `C` probe definition
looks like this:

```C
SPDK_DTRACE_PROBE1(bdev_nvme_ctrlr_delete, nvme_ctrlr->nbdev_ctrlr->name);
```

and `bdev_nvme_create_qpair` mentioned before as well:

```C
SPDK_DTRACE_PROBE3(bdev_nvme_create_qpair, nvme_ctrlr->nbdev_ctrlr->name,
                   spdk_nvme_qpair_get_id(qpair), spdk_thread_get_id(nvme_ctrlr->thread));
```

`nvme_ctrlr->nbdev_ctrlr->name` is a string, `spdk_nvme_qpair_get_id()` and `spdk_thread_get_id()`
return unsigned integers.

If we chose a name for our BPF probe, we can proceed to writing some code enabling our trace.
BPF probe definitions in SPDK look similar to function definition in `C` language. We use
`printf` to write timestamps, probe name and additional arguments.
Depending on what kind of information we want to include in the trace, entries might have only
one argument:

```bash
usdt:__EXE__:bdev_nvme_ctrlr_delete {
        printf("%d.%06d: delete bdev controller %s\n",
                elapsed / (uint64)(1000 * 1000), elapsed % (uint64)(1000 * 1000),
                str(arg1));
}
```

or multiple arguments, like this:

```bash
usdt:__EXE__:bdev_nvme_create_qpair {
        printf("%d.%06d: controller: %s create qpair with ID: %d on thread: %d\n",
                elapsed / (uint64)(1000 * 1000), elapsed % (uint64)(1000 * 1000),
                str(arg1), arg2, arg3);
}
```

Arguments can be added by writing `arg` and adding the first number available starting from `1`.
String arguments must have a prefix and be enclosed with parentheses: `str(argX)`, where X is the
argument number.
Integer and pointer arguments do not need to be preceded with any prefix.
We can add up to 4 arguments to each BPF probe.

Now we should add the trace definition to one of our `.bt` files. We were looking at
`bdev_nvme_ctrlr_delete` earlier, so lets open the file containing it: `nvme.bt`.
The traces are not sorted inside these files, but we should keep in mind that grouping
them by the related subject is very welcome. For example if we were adding a trace
near `bdev_nvme_ctrlr_delete`, we should place it under already existing `bdev_nvme_ctrlr_*`
definitions, to keep them grouped for easier access.

If you wonder about `__EXE__`, this is a special marker that allows us to fulfill Bpftrace's
requirement for a full path to the binary file. Later we'll be using `bpftrace.sh` script to
dynamically replace this string with needed path using information from `procfs`. SPDK BPF probes
also recognize `__PID__` marker, which is used to dynamically replace with PID of probed process.
These markers are used later by `bpftrace.sh` wrapper script. This mechanism is useful when
filtering certain kernel events (like system calls).

Now that we went over defining the traces, we can go to the next section to place them in
the code.

### Recording a trace

We will have to include a header in the file, where we want to place our BPF probe. This is
the same file all BPF macros live in:

```C
#include "spdk_internal/usdt.h"
```

The declaration in the code would look very similar to what we already seen in the previous
section:

```C
SPDK_DTRACE_PROBE4(<probe name>, arg1, arg2, arg3, arg4);
```

probe name, the number and the type of arguments must match what we defined in `.bt` file earlier.
You can use up to 4 arguments, using different macros for this purpose:

```C
SPDK_DTRACE_PROBE(<probe name>)
SPDK_DTRACE_PROBE1(<probe name>,a1)
SPDK_DTRACE_PROBE2(<probe name>,a1,a2)
SPDK_DTRACE_PROBE3(<probe name>,a1,a2,a3)
SPDK_DTRACE_PROBE4(<probe name>,a1,a2,a3,a4)
```

### Getting the recorded data

To get the information from BPF probes, we need to run `./configure --with-usdt`. This will assure
SPDK is built with bpf probes enabled. Now we need to run the SPDK application (for example
spdk_tgt) and in the second terminal

```bash
scripts/bpftrace.sh `pidof spdk_tgt` scripts/bpf/nvmf.bt
```

This will run the application responsible for catching and printing BPF probes.
A new entry will appear each time a BPF probe is hit in the code.

`bpftrace.sh` is a wrapper for bpftrace itself, which uses special markers explained earlier.
The whole script boils down to one command:

```bash
bpftrace -p $1 -e "$BPF_SCRIPT" ${BPF_OUTFILE:+-o "$BPF_OUTFILE"}
```

* bpftrace is a command to run BPF probes and record their events.
* -p $1 takes provided PID of the process to run probes on.
* -e "$BPF_SCRIPT" represent two scripts inside SPDK: `bpf/gen.py` and `bpf/gen_enums.sh`,
first of which is responsible for replacing `__EXE__` and `__PID__` markers with appropriate
values during execution. Second prints out enumerated states of SPDK target and subsystems.
* BPF_OUTFILE is an output file to be created and filled with captured events.

## Final words

### Summary

Traces are an important part of SPDK and a way of gathering data during application runtime.
They are neatly organized into SPDK and BPF probes, which differ in their use cases:

* SPDK tracepoints are faster and usually used where time is of the essence
* BPF probes are slower and require higher overhead due to software interrupts.

The main reason for the slowness in BPF probes is the time needed for the code to execute.
Before user registers a probe, a handler has to be written to the kernel module, which then
is installed to the already running kernel. When user registers a probe, the addresses at which
the probe has to activate contains interrupt instruction (int3 for x86). As soon as execution
reches the probed address, interrupt is executed, which causes control to reaches the handler.
That handler is called through an interrupt gate and interrupts are disabled upon entering
there. After that the handler notifies the probes that the breakpoint occurred. The probes then
check if the breakpoint was set by BPF probe registration. If yes, then the probe function is
executed, otherwise 0 is returned.

To read more about BPF probes, I encourage you visit [BPF repository on GitHub](https://github.com/iovisor/bpftrace).

### Questions?

If you have any questions related to this topic, or any other in SPDK do not hesitate to ask on our
Slack channels or on our GitHub!
You may also prepare your own patches with traces in SPDK, if you feel like we should have them in
a certain place.
