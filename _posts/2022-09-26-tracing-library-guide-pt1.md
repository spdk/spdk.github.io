---
layout: post
title:  "Tracing Framework Guide Part 1"
author: Krzysztof Karas
categories: "spdk_trace"
---

## Introduction

Hello again! Some time ago I wrote a post about the [Tracing Framework in SPDK](https://spdk.io/spdk_trace/2022/01/17/tracing_library_post/).
While that post provided a lot of general information, this time we're going to go through
how to add traces to SPDK in detail, with examples. We'll also look at how to display them
using spdk_trace application.

### A little reminder

As I mentioned before (in the previous post), we use two types of traces in SPDK: our own SPDK
tracepoints and BPF traces. The former are usually used in performance sensitive places such
as the I/O path where we want as little overhead as possible. The latter we use where there are
not time limitations and we can afford higher overhead due to software interrupts.

## Defining SPDK Tracepoints

I will now start going over what we need to do to properly define and use a tracepoint in SPDK.
We are going to look at SPDK tracepoints this time. BPF traces are going to be
explained in the future post.

### Definition

The tracepoint definitions are all kept in one place: in `include/spdk_internal/trace_defs.h` file.
Here we can add definitions of new tracepoint elements. When defining a new value, we need to make
sure that the name and its value are unique.

- groups - These values are a really important set of values in SPDK tracing. They provide an
organization mechanism for all of the tracepoints. Grouping tracepoints allows the SPDK to enable
them in sets, instead of either enabling all of them at once. To get the list of all available
groups that can be enabled on SPDK startup, we can simply build and run SPDK target application
(e.g. build/bin/spdk_tgt) with `-h` parameter. If we were to choose `thread` group for example,
we would enable `TRACE_THREAD_IOCH_GET` and `TRACE_THREAD_IOCH_PUT` tracepoints from section
`/* Thread tracepoint definitions */`. Special value `all` enables all tracepoints.

- objects - These names aggregate tracepoints during SPDK runtime. In
`include/spdk_internal/trace_defs.h` we may define new types of objects to differentiate them
from others. A single tracepoint object may be referenced during multiple events recorded by one
or more tracepoints. We can treat them as an instance of a data structure. An example here:
`OBJECT_NVMF_TCP_IO` inside `lib/nvmf/tcp.c`. This one represents IO data structure
`struct spdk_nvmf_tcp_req` and is tied to the TCP requests inside SPDK. When we record an event
for an `NVMF_TCP_IO` object, it will include the pointer to the `spdk_nvmf_tcp_req`. The trace
object creation is indicated by `TCP_REQ_NEW`, which tells SPDK to spawn a new instance of this
object (this is the only tracepoint with "1" as 5th argument; more about how this works later) and
then it will be referenced many times by multiple TCP tracepoints until it finally gets destroyed
during request completion event, which is marked by `TCP_REQ_COMPLETED` tracepoint.

- tracepoints - each group of tracepoints has its own definition section, like
`/* NVMe-of TCP tracepoint  definitions */`. They are the most descriptive values, usually tied
to a certain event or function call.

- owners - These are mainly for associating objects with a higher order construct. For example:
OBJECT_NVME_PCIE_REQ has owner OWNER_NVME_PCIE_QP, indicating on which qpair (QP) the I/O was
submitted on. In this case the OWNER_NVME_PCIE_QP identifier is its NVMe queue ID. There is also
special value OWNER_NONE, which is used in cases where no owner association is required (i.e.
owner value must always be specified, so OWNER_NONE could be read as an "empty" value).

The way we add new definitions in `include/spdk_internal/trace_defs.h` is by writing
`#define TYPE_NAME 0xX`, where 0xX is the next available ID in hexadecimal format.
It is better if the IDs are in increasing order and follow already defined pattern for a section.

Now example:
We want to add a new tracepoint somewhere in NVMe-of TCP related code. If the owner was not defined
for our set of tracepoints, we could add it to the`trace_defs.h` file:

```C
/* Owner definitions */
...
#define OWNER_NVMF_TCP       0x30
```

Keep in mind that sometimes Owner for the tracepoint you want to implement is already
there (like in our case), so there is no need to add a new one.
Object and Trace group can be added the same way as Owner. New definitions should be placed
at the bottom of a definitions section and assigned new, highest available value, following
the pattern of a given section.
Now we can scroll down to `/* NVMe-of TCP tracepoint definitions */` section and
add a new tracepoint here:

```C
/* NVMe-of TCP tracepoint definitions */
...
#define TRACE_TCP_TEST_TPOINT       SPDK_TPOINT_ID(TRACE_GROUP_NVMF_TCP, 0x18)
```

`SPDK_TPOINT_ID` is a macro for assigning a unique ID to each tpoint, using Trace group's
own ID. The formal tracepoint registration to a Trace group happens later on.

And this is all when it comes to defining the SPDK tracepoint. In the next section
I will explain the process of declaring the contents of a trace.

### Declaration

We declare SPDK tracepoints in `.c` files where we want to record some values, using the
`SPDK_TRACE_REGISTER_FN` macro, which defines a constructor function to register tracepoint
registering functions during SPDK application start time. It also checks that trace groups'
names do not conflict with each other. The macro also lets us declare multiple tracepoints
in one place, assigning them the same Owner, Object (it also formally registers both of them)
and Trace group. We also need to include some header files:

```C
#include "spdk/trace.h"
#include "spdk_internal/trace_defs.h"

```

There are two ways we usually go about declaring a trace:

1) For traces watching a single value:

```C
SPDK_TRACE_REGISTER_FN(nvmf_tcp_trace, "nvmf_tcp", TRACE_GROUP_NVMF_TCP)
{
spdk_trace_register_owner(OWNER_NVMF_TCP, 'r');
spdk_trace_register_object(OBJECT_NVMF_TCP, 'r');
spdk_trace_register_description("TCP_TEST_TPOINT",
                                 TRACE_TCP_TEST_TPOINT,
                                 OWNER_NVMF_TCP, OWNER_NVMF_TCP, 1,
                                 SPDK_TRACE_ARG_TYPE_PTR, "arg1");
}
```

2) Where we need multiple values recorded in a tracepoint:

```C
SPDK_TRACE_REGISTER_FN(nvmf_tcp_trace, "nvmf_tcp", TRACE_GROUP_NVMF_TCP)
{
        spdk_trace_register_owner(OWNER_NVMF_TCP, 'r');
        spdk_trace_register_object(OBJECT_NVMF_TCP, 'r');

        struct spdk_trace_tpoint_opts opts[] = {
                {
                        "TCP_TEST_TPOINT", TRACE_TCP_TEST_TPOINT,
                        OWNER_NVMF_TCP, OWNER_NVMF_TCP, 1,
                        {
                                { "arg1", SPDK_TRACE_ARG_TYPE_INT, 8 },
                                { "arg2", SPDK_TRACE_ARG_TYPE_PTR, 8 },
                                { "arg3", SPDK_TRACE_ARG_TYPE_INT, 8 },
                                { "arg4", SPDK_TRACE_ARG_TYPE_STR, 8 }
                        }
                }
        };
}
```

Owner registraction function call arguments should include a value matching one of the entries
from `/* Owner definitions */` section inside `include/spdk_internal/trace_defs.h` and a unique
to all owners letter. Object registration should follow similar rules.

When declaring an actual tracepoint, names like arg1, arg2, should be replaced with
more descriptive ones: offset, ctx or anything that a value represents - these names
get emitted by spdk_trace with the corresponding value.
SPDK tracepoints can take three types of arguments: integers (SPDK_TRACE_ARG_TYPE_INT),
strings (SPDK_TRACE_ARG_TYPE_STR) and pointers (SPDK_TRACE_ARG_TYPE_PTR) followed by
size in bytes. The difference between integers and pointers here is that an argument
SPDK_TRACE_ARG_TYPE_INT will be an integer displayed in decimal format, while
SPDK_TRACE_ARG_TYPE_PTR will show as a value in hexadecimal form.
Letters in `spdk_trace_register_owner` and `spdk_trace_register_object`
mean ID prefix, so the letter that is going to appear before the ID. A single 1 or 0 as
5th argument of `spdk_trace_register_description` decides whether to create a new object
or not (some traces are parts of instances of a given object). For example:
`BDEV_IO_START` uses 1, because this event marks the beginning of life of a new bdev_io
object inside SPDK. When later SPDK application detects `BDEV_IO_DONE` event bound
to the same IO, it will calculate time delta between `BDEV_IO_START` and `BDEV_IO_DONE`
and display it inside a trace. Let's look at a partial output from spdk_trace application:

```bash
...
 0: 141193.578 b00 BDEV_IO_START                         id:    i429      type:  2                ctx:   0x7ffb7d48b110   offset:12048            len:   2
...
 0: 143030.609 b00 BDEV_IO_DONE                          id:    i429      time:  1837.035         ctx:   0x7ffb7d48b110
...
```

In case of these two tracepoints we can see from left to right:

1) timestamp - this is the time measured from the start of SPDK application in microseconds
2) owner ID inside SPDK runtime. This value will be different from what we see in
`include/spdk_internal/trace_defs.h` - the first character is the one passed as the second
argument of `spdk_trace_register_owner()` function mentioned earlier, followed by poller ID
from which the registration has been called.
3) tracepoint name
4) ID of the object instance from which the event was recorded
5) time, if the recorded event ends some longer process (in this case bdev IO). This value
is a difference in application time between two events: 143030.609 - 141193.578 = (*about*) 1837.035
6) arguments provided in the tracepoint definition (in case of BDEV_IO_START: type, ctx, offset
and len; in case of BDEV_IO_DONE only ctx; ctx is a pointer to the instance of tracepoint object)

*about* - the real value should be equal to 1837.031, but the rounding of decimal fractions was
not perfect this time.

There is also a neat feature called relations. We can specify a relation between a
tracepoint and a certain object, to which other tracepoints belong. Relations are defined inside
`SPDK_TRACE_REGISTER_FN` macro by calling `spdk_trace_tpoint_register_relation`. Currently
SPDK has only two relations defined, so lets look at them as an example. They can be found
inside `lib/nvmf/tcp.c` file.

```C
        spdk_trace_tpoint_register_relation(TRACE_BDEV_IO_START, OBJECT_NVMF_TCP_IO, 1);
        spdk_trace_tpoint_register_relation(TRACE_BDEV_IO_DONE, OBJECT_NVMF_TCP_IO, 0);
```

The first relation binds trace event called `TRACE_BDEV_IO_START`, which is defined in
bdev library `lib/bdev/bdev.c`, to the new object `OBJECT_NVMF_TCP_IO` registered inside
TCP library. We can do that by taking unique ID of a tracepoint and ID of registered
object and matching them later during SPDK runtime. The last argument indicates argument index
of the related object. It's the position of the tracepoint context inside a trace entry
in Trace Parser library. To understand what that means, we should look inside `lib/bdev/bdev.c`
file and jump to the `SPDK_TRACE_REGISTER_FN` macro. Structure `spdk_trace_tpoint_opts` defines
tracepoints inside bdev library and both `BDEV_IO_START`, and `BDEV_IO_DONE` are the
first two definitions here. The third argument in the `spdk_trace_tpoint_register_relation`
definitions matches the position of `ctx` parameter in tracepoint definitions - this is a pointer
to the related object `OBJECT_NVMF_TCP_IO`.

Second relation works similarly, but it binds `TRACE_BDEV_IO_DONE` to the same
object `OBJECT_NVMF_TCP_IO`, so it can be used later to do the time calculations.

The partial output from spdk_trace would look like this:

```bash
 0: 141184.297 t02 TCP_REQ_NEW                           id:    r520             qpair: 0x618000004080
 0: 141185.109 t02 TCP_REQ_NEED_BUFFER                   id:    r520             time:  0.810            qpair: 0x618000004080
```

```bash
 0: 141186.500 t02 TCP_REQ_TX_H_TO_C                     id:    r520             time:  2.199            qpair: 0x618000004080
```

```bash
 0: 141189.609 t02 TCP_REQ_RDY_TO_EXECUTE                id:    r520             time:  5.321            qpair: 0x618000004080
 0: 141193.578 b00 BDEV_IO_START                         id:    i429 (r520)      type:  2                ctx:   0x7ffb7d48b110   offset:12048            len:   2
```

```bash
 0: 143030.609 b00 BDEV_IO_DONE                          id:    i429 (r520)      time:  1837.035         ctx:   0x7ffb7d48b110
 0: 143032.734 t02 TCP_REQ_EXECUTED                      id:    r520             time:  1848.446         qpair: 0x618000004080
 0: 143033.031 t02 TCP_REQ_RDY_TO_COMPLETE               id:    r520             time:  1848.728         qpair: 0x618000004080
 0: 143034.344 t02 TCP_REQ_TRANSFER_C2H                  id:    r520             time:  1850.043         qpair: 0x618000004080
```

```bash
 0: 143606.969 t02 TCP_REQ_COMPLETED                     id:    r520             time:  2422.666         qpair: 0x618000004080

```

This time we can see that traces describing bdev IO start and finish contain additional value
in parentheses, right after the object IO. In this case this is the ID of TCP request tracepoint
object that was initialized during TCP request. Another object was later created for bdev IO
trace events and SPDK bound them together with trace relation mechnism.

Usage of spdk_trace to record and display the traces will be explained later.

### Recording a trace

Now that we have our tracepoint defined and declared, it is time to finally make use of it
in our code. In the same file as we declared our tracepoint, we may call `spdk_trace_record`
like this:

```C
        spdk_trace_record(TRACE_TCP_TEST_TPOINT, 0, 0,
                         (uintptr_t)object_pointer, arg1);

```

where the arguments are:

1) tracepoint ID (the one we assigned in trace_defs.h)
2) poller ID
3) size
4) pointer to trace object instance
5) first argument

Each time the code execution hits the `spdk_trace_record` it will record a value of a given
argument. Now let's proceed to the next section, where we'll be testing our change.

### Getting the recorded data

Our code is now ready, we may configure and build the SPDK project. Note that I gave an example
with TCP library, so we'll be configuring SPDK with `./configure` without any arguments,
as TCP support is enabled by default.
After that build the project and launch SPDK application (for example `build/bin/nvmf_tgt`)
with a flag to enable the tracepoint: `-e nvmf_tcp:<new tracepoint ID>` or just `-e nvmf_tcp`, if you prefer to see all
traces from TCP group.

After that run `build/bin/spdk_trace` with flags provided by SPDK on startup. Look for a lines that looks similar to these:

```bash
[2022-06-13 14:52:04.427428] app.c: 450:app_setup_trace: *NOTICE*: Use 'spdk_trace -s spdk_tgt -p 599051' to capture a snapshot of events at runtime.
[2022-06-13 14:52:04.427446] app.c: 455:app_setup_trace: *NOTICE*: Or copy /dev/shm/spdk_tgt_trace.pid599051 for offline analysis/debug.
```

If the code hit your tracepoint, you should see it printed here along with the values' of arguments
that you provided.

## Final words

### Summary

Traces are an important part of SPDK and a way of gathering data during application runtime.
They are neatly organized into SPDK traces, which were explained in this blogpost, and bpf probes, which are going to be a topic of a future post.

### Questions?

If you have any questions related to this topic, or any other in SPDK do not hesitate to ask on our
Slack channels or on our GitHub!
You may also prepare your own patches with traces in SPDK, if you feel like we should have them in
a certain place.
