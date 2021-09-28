---
layout: post
title: "BPF tracing with SPDK"
author: Konrad Sztyber
categories: news
---

Recently, in the [v21.07 release](https://spdk.io/release/2021/07/29/21.07_release), SPDK got
support for BPF tracing.  It consists of a set of scripts and static probes defined within the SPDK
libraries giving the user yet another way to inspect SPDK-based applications. SPDK already had a
tracing library, called `libtrace`, for a long time.  BPF tracing isn't supposed to replace it, but
rather complement it.  Both have slightly different capabilities - `libtrace` has significantly
lower overhead, but is less flexible.  BPF traces, on the other hand, are more costly (they require
a kernel trap), but are more robust and can even be attached dynamically, without having to define
the probes in code.

## User-level tracing

Firstly, let's discuss what BPF tracing is and how SPDK is utilizing it.  BPF, Berkeley Packet
Filter, is a technology that was originally developed to analyze and filter network traffic.  It
allows the user to run user-supplied programs inside the operating system kernel in a special BPF
virtual machine.  Later on, in Linux, it was extended (hence eBPF - extended BPF) to support more
use-cases, among-others, tracing.  It lets users to leverage Linux tracing subsystem to attach
probes at certain places in the program and, once hit, run an eBPF program tied to that probe
[[1](https://lwn.net/Articles/740157)].  In user-space applications, it works by placing an
instruction (`int3` on x86) generating `SIGTRAP`, which is then caught by the kernel triggering the
execution of the eBPF program.  SPDK uses [bpftrace](https://github.com/iovisor/bpftrace) to define
and attach probes.  This tool uses a high-level scripting language (described by its authors as a
mix of awk and C) to describe the actions to be taken when a given probe is triggered.

The probes can be divided into two categories: statically and dynamically defined.  Static probes,
called USDT (User Statically-Defined Tracing), are placed by the programmer in various critical
locations in code (using one of the `SPDK_DTRACE_PROBE*` macros).  Dynamic probes, on the other
hand, can be enabled at the start of *any* function without having to change the code or recompile
the application.  There's one caveat though: some of the static function calls might get inlined by
the compiler, in which case the probe won't get executed when expected.

## Tools and examples

In order for USDT probes to be compiled-in, SPDK must be configured with `--with-usdt`.  It's also
recommended to build a recent version of bpftrace from source, as we've encountered a number of
issues with packaged versions on both Ubuntu 20.04 and Fedora 33.  `scripts/bpftrace.sh` can be used
to attach and display the traces.  It expects two parameters - PID of the process to trace and the
bpftrace script to attach.  These scripts are capable of gathering and displaying a variety of
different information and statistics.  For instance, it's possible to print parameters of a function
each time it's called, count how many times a given code path is executed, or even create and
display a histogram from a set of values.  SPDK already provides several useful scripts, located in
the `scripts/bpf` directory.

Let's take a look at one of them, `scripts/bpf/send_msg.bt`, see how it works and how it can be used
to inspect an SPDK application.  The goal of this script is to count the number of times a function
is executed through `spdk_thread_send_msg()` and `spdk_for_each_channel()`.  The contents of the
script are pretty straight-forward:
```
uprobe:__EXE__:spdk_thread_send_msg {
	@send_msg[usym(arg1)] = count();
}

uprobe:__EXE__:spdk_for_each_channel {
	@for_each_channel[usym(arg1)] = count();
}
```
It defines two dynamic probes (via the `uprobe` keyword) that saves the number of calls to each
function in a map (called `send_msg` and `for_each_channel` respectively). The first argument,
`arg1`, is used as a key in the map and, in both cases, refers to the pointer to the function to be
executed.  The script uses two helper functions: `usym()` returning the name of a symbol at given
address, and `count()`, which counts the number of times a function has been called.  For more
information on the available functions and the general syntax of the scripts, consult the
[bpftrace manual](https://github.com/iovisor/bpftrace/blob/master/man/adoc/bpftrace.adoc).

There's one extra special variable called `__EXE__`.  This one is SPDK-specific and is replaced by
`scripts/bpftrace.sh` with the name of the executable (which is expected by bpftrace).  There's also
`__PID__`, which is replaced by the PID of the traced process.  Both of them offer a convenient way
of using the same scripts with different applications.  More details can be found in
[SPDK documentation](https://spdk.io/doc/usdt.html).

Once the script is attached, it'll run until the application exits (or the script is stopped).  When
that happens, it'll print out the name of each function along with the number of times it was
called.  The sample output below was gathered by attaching to an NVMe/TCP target:
```
@for_each_channel[nvmf_ctrlr_disconnect_io_qpairs_on_pg]: 1
@for_each_channel[_nvmf_tgt_add_transport]: 1
@for_each_channel[subsystem_state_change_on_pg]: 5

@send_msg[_nvmf_ctrlr_add_admin_qpair]: 1
@send_msg[_nvmf_subsystem_add_ctrlr]: 1
@send_msg[_nvmf_ctrlr_destruct]: 1
@send_msg[_finish_unregister]: 1
@send_msg[_nvmf_ctrlr_destruct]: 1
@send_msg[put_io_channel]: 4
@send_msg[_call_completion]: 7
@send_msg[_call_channel]: 7
@send_msg[nvmf_ctrlr_add_io_qpair]: 24
@send_msg[_nvmf_ctrlr_add_io_qpair]: 24
@send_msg[_nvmf_ctrlr_free_from_qpair]: 25
@send_msg[_nvmf_poll_group_add]: 25
@send_msg[_nvmf_transport_qpair_fini]: 25
```

The other available scripts can be used to track system calls (`syscalls.bt`), NVMeoF subsystem
state transitions (`nvmf.bt`), and readv calls with the number of bytes read (`readv.bt`).  These,
on their own, provide a lot of information, but they can also be used as a guideline for writing
scripts aimed to track different properties of an application.

## SPDK and BPF traces together

As stated before, one of the main goals of the SPDK trace library was to have minimal overhead. This
means that each tracepoint is allowed to record only the most critical data.  It makes it possible
to place tracepoints in I/O path without major effect on performance.  But now, with BPF traces, we
can put bpftrace probes in places where objects are created, gather all kinds of their properties,
and then use that data to annotate SPDK traces.

For instance, in NVMe/RDMA I/O path we record the pointer to a qpair on which a request is executed.
We can use bpftrace to record information about a qpair such as its queue ID, thread ID, subsystem
NQN, and host NQN and display it along with the pointer when showing SPDK traces. This is what the
`scripts/bpf/trace.py` script is responsible for.

Let's see how it works in practice.  Firstly, bpftraces have to be recorded (assuming we're tracing
`spdk_tgt` app exposing an NVMe/RDMA target):
```
$ scripts/bpf/trace.py --record `pidof spdk_tgt` > bpftraces
```
Then, we can use it to annotate the traces:
```
$ build/bin/spdk_trace -f /dev/shm/spdk_tgt_trace.pid`pidof spdk_tgt` -j | scripts/bpf/trace.py --bpftrace bpftraces
```
This will transform the output from:
```
 0  39100254.090     RDMA_REQ_COMPLETING     id: r10  time: 49.692   qpair: 0x1178af0
 0  39100320.354     RDMA_REQ_COMPLETED      id: r10  time: 115.956  qpair: 0x1178af0
 0  39100494.100     RDMA_REQ_NEW            id: r11  qpair: 0x11790a0
 0  39100494.454     RDMA_REQ_NEED_BUFFER    id: r11  time: 0.354    qpair: 0x11790a0
 0  39100494.684     RDMA_REQ_RDY_TO_EXECUTE id: r11  time: 0.584    qpair: 0x11790a0
 0  39100500.546     RDMA_REQ_EXECUTING      id: r11  time: 6.446    qpair: 0x11790a0
 0  39100516.727     RDMA_REQ_EXECUTED       id: r11  time: 22.627   qpair: 0x11790a0
 0  39100516.903     RDMA_REQ_RDY_TO_COMPL   id: r11  time: 22.803   qpair: 0x11790a0
 0  39100517.333     RDMA_REQ_COMPLETING     id: r11  time: 23.233   qpair: 0x11790a0
 0  39100550.895     RDMA_REQ_COMPLETED      id: r11  time: 56.795   qpair: 0x11790a0
```
to:
```
 0  39100254.090     RDMA_REQ_COMPLETING     id: r10  time: 49.692   qpair(ptr=0x1178af0, thread=2, qid=1, subnqn=nqn.2016-06.io.spdk:cnode0, hostnqn=nqn.2014-08.org.nvmexpress:uuid:8da29bed555a45e8b9bc378e115f4c2)
 0  39100320.354     RDMA_REQ_COMPLETED      id: r10  time: 115.956  qpair(ptr=0x1178af0, thread=2, qid=1, subnqn=nqn.2016-06.io.spdk:cnode0, hostnqn=nqn.2014-08.org.nvmexpress:uuid:8da29bed555a45e8b9bc378e115f4c2)
 0  39100494.100     RDMA_REQ_NEW            id: r11  qpair(ptr=0x11790a0, thread=2, qid=2, subnqn=nqn.2016-06.io.spdk:cnode0, hostnqn=nqn.2014-08.org.nvmexpress:uuid:8da29bed555a45e8b9bc378e115f4c2)
 0  39100494.454     RDMA_REQ_NEED_BUFFER    id: r11  time: 0.354    qpair(ptr=0x11790a0, thread=2, qid=2, subnqn=nqn.2016-06.io.spdk:cnode0, hostnqn=nqn.2014-08.org.nvmexpress:uuid:8da29bed555a45e8b9bc378e115f4c2)
 0  39100494.684     RDMA_REQ_RDY_TO_EXECUTE id: r11  time: 0.584    qpair(ptr=0x11790a0, thread=2, qid=2, subnqn=nqn.2016-06.io.spdk:cnode0, hostnqn=nqn.2014-08.org.nvmexpress:uuid:8da29bed555a45e8b9bc378e115f4c2)
 0  39100500.546     RDMA_REQ_EXECUTING      id: r11  time: 6.446    qpair(ptr=0x11790a0, thread=2, qid=2, subnqn=nqn.2016-06.io.spdk:cnode0, hostnqn=nqn.2014-08.org.nvmexpress:uuid:8da29bed555a45e8b9bc378e115f4c2)
 0  39100516.727     RDMA_REQ_EXECUTED       id: r11  time: 22.627   qpair(ptr=0x11790a0, thread=2, qid=2, subnqn=nqn.2016-06.io.spdk:cnode0, hostnqn=nqn.2014-08.org.nvmexpress:uuid:8da29bed555a45e8b9bc378e115f4c2)
 0  39100516.903     RDMA_REQ_RDY_TO_COMPL   id: r11  time: 22.803   qpair(ptr=0x11790a0, thread=2, qid=2, subnqn=nqn.2016-06.io.spdk:cnode0, hostnqn=nqn.2014-08.org.nvmexpress:uuid:8da29bed555a45e8b9bc378e115f4c2)
 0  39100517.333     RDMA_REQ_COMPLETING     id: r11  time: 23.233   qpair(ptr=0x11790a0, thread=2, qid=2, subnqn=nqn.2016-06.io.spdk:cnode0, hostnqn=nqn.2014-08.org.nvmexpress:uuid:8da29bed555a45e8b9bc378e115f4c2)
 0  39100550.895     RDMA_REQ_COMPLETED      id: r11  time: 56.795   qpair(ptr=0x11790a0, thread=2, qid=2, subnqn=nqn.2016-06.io.spdk:cnode0, hostnqn=nqn.2014-08.org.nvmexpress:uuid:8da29bed555a45e8b9bc378e115f4c2)
```

For now, only RDMA qpairs can be annotated, however, expect more to come in the future.

## Conclusion

Summing up, SPDK now has another robust way of inspecting its applications via BPF tracing.  It
consists of a set of bpftrace programs, USDT probes defined in SPDK libraries, and several scripts
that simplify BPF tracing and make it possible to combine it with regular SPDK traces.

Stay tuned for more blog posts on this topic.  Happy tracing!
