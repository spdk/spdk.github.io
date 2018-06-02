---
layout: post
title: "2018 SPDK US Summit Recap"
author: Anu Rao
categories: news
---

Here is a recap of 2018 SPDK Summit at the beautiful Dolce Hayes Mansion, San Jose
on May 15th and 16th.
We had a successful event and achieved all of our goals.
Thanks to the dedication and support of many contributors and great participation
from SPDK community members.

![Dolce Hayes Mansion](../../../../../img/summit-us-2018/dolce-hayes-mansion.jpg "Dolce Hayes Mansion")

# Executive Summary

2018 SPDK Summit started with a keynote from Jennifer Huffstetler, VP,
Data Center Group, Intel Corp and Jim Harris, Principal Engineer, Intel Corp.
Presenters from Nutanix, Alibaba, Oracle, eBay and Cisco shared how SPDK can help
with their storage solutions to accelerate performance.
We had over 170 attendees from 51 different companies represented at the Summit.
Audience enjoyed the sessions which included technical deep dive as well as talks
from SPDK community partners highlighting various ways SPDK was integrated
into their storage solutions.
Overall it was a successful event and we look forward to your participation in
our upcoming events.
Thanks for making time to provide actionable feedback on the Summit.

# Attendance

- We had over 253 attendees registered for the event with about 80% coming from
  the Bay Area. On day 1 we had 166 attendees and day 2 there were ~120 attendees
  out of which ~70 attended SPDK developers lab. SPDK Summit sessions were also
  live streamed on SPDK YouTube channel. We had ~40 online viewers.
- 51 companies were represented, including VMWare, Dell, HPE, IBM, Cisco, Nutanix,
  Alibaba, SAP, Oracle, eBay, Facebook, NetApp, Mellanox, Micron, Samsung, WD,
  Fujitsu among many others.
- General attendee profile was technical in nature, largely developers.

# Thank you!

- Thanks to following groups at Intel Corp for sponsoring the event
  Data Center Product Marketing Group and Cloud Platform group for funding the event,
  Non-Volatile Memory Group for sponsoring SSDs for the raffle,
  Intel Builders for sponsoring Starbucks gift cards,
  Software Solutions Group for giving away VTune licenses as part of the raffle.
- Many thanks to all the presenters from Intel Corp, Nutanix, Cisco Systems, Oracle,
  Alibaba and eBay for all the hard work in preparing, reviewing and presenting
  at the Summit.
- Thanks to all the volunteers who manned the Demo booths and the registration desk
  at the event.
- Last but not least, thanks to all the attendees for participation in the summit.
  Without your participation, this event wouldn’t have been successful.
  Also thanks for submitting surveys and great feedback.
  We will make every attempt to incorporate the feedback into our next event.

# Agenda

- The two day agenda focused on SPDK key features deep dive, presentations from
  community partners on how SPDK helped them, their learnings and future work.
- Nate Marushak, Director of Storage Acceleration Software, was the MC for the
  two-day event and did a magnificent job of keeping the speakers on time and
  well-stocked with questions from the audience. \\
  ![Nate Marushak](../../../../../img/summit-us-2018/nate-marushak.jpg "Nate Marushak")

## Day 1

- SPDK Summit was kick started by an Opening keynote from Jennifer Huffstetler,
  VP, Data Center Group, Intel Corp, on how the storage industry is changing and
  why optimizing storage software is becoming more critical.
  She highlighted the importance of Intel’s investment in Open Source Storage
  Acceleration Software like SPDK, ISA-L, PMDK, DPDK, etc. \\
  ![Jennifer Huffstetler](../../../../../img/summit-us-2018/jennifer-keynote.jpg "Jennifer Huffstetler")
- Jim Harris, Principal SPDK Architect, Intel Corp, presented on the state of
  the project, future plans and goals and why it’s important for SPDK community
  members to participate and contribute to the Project. \\
  ![Jim Harris](../../../../../img/summit-us-2018/jim-harris-state-of-project.jpg "Jim Harris")
- Felipe Franciosi from Nutanix shared why Nutanix adopted SPDK and how it has
  helped extract maximum performance while reducing latency and improving CPU
  utilization. He showed performance testing result using Intel® Optane™ SSDs
  and how he could extract over 5 million IOPS while scaling VMs. \\
  ![Nutanix presentation](../../../../../img/summit-us-2018/nutanix-presentation.jpg "SPDK and Nutanix AHV")
  ![Felipe Franciosi](../../../../../img/summit-us-2018/nutanix-felipe.jpg "Felipe Franciosi")
- Changpeng Liu, Software engineer from Intel Corp, presented Vhost-NVMe deep dive
  followed by talk from Oracle on NVMe-oF and how Oracle has integrated SPDK in
  Oracle RDBMS and future work using SPDK. \\
  ![Changpeng Liu](../../../../../img/summit-us-2018/changpeng.jpg "Changpeng Liu")
- Ben Walker, Software Engineer, Intel Corp, presented deep-dive on NVMe-oF
  SPDK driver followed by much awaited talk from Ed Warnicke from Cisco and
  Tomasz from SPDK team, Intel Corp, on user-space VPP integration with SPDK. \\
  ![Ben Walker](../../../../../img/summit-us-2018/ben.jpg)
  ![Tomasz Zawadzki and Ed Warnicke](../../../../../img/summit-us-2018/tomasz-ed-vpp.jpg "Tomasz Zawadzki and Ed Warnicke")
- After the break, Jim Harris, Principal Architect from Intel Corp and John Rudelic,
  Architect in Non-volatile SSD Group, Intel Corp, presented Open Channel SSD
  introduction and SPDK project plans to support Open Channel SSD. \\
  ![Open Channel SSDs](../../../../../img/summit-us-2018/open-channel-presentation.jpg "Open Channel SSDs: Extending SPDK's Reach")
  ![John Rudelic](../../../../../img/summit-us-2018/john-rudelic.jpg "John Rudelic")
  ![Jim Harris](../../../../../img/summit-us-2018/jim-harris-open-channel.jpg "Jim Harris")
- Ming Lin and Sheng Qiu from Alibaba gave a talk highlighting good, bad and ugly
  side of production deployments highlighting why they used SPDK and how it helped
  improve performance, key learnings and ended the talk with future plans
  to contribute to SPDK community. \\
  ![Alibaba; Using SPDK in Production](../../../../../img/summit-us-2018/alibaba-presentation-title.jpg "Alibaba: Using SPDK in Production")
  ![Alibaba presentation](../../../../../img/summit-us-2018/alibaba-presentation-slide.jpg "Alibaba presentation")
  ![Ming Lin](../../../../../img/summit-us-2018/alibaba3.jpg "Ming Lin")
  ![Sheng Qiu](../../../../../img/summit-us-2018/alibaba4.jpg "Sheng Qiu")
- Paul Luse, Principal Engineer from SPDK team, Intel Corp presented PMDK library
  integration with SPDK. He highlighted how SPDK enabled applications can access
  Persistent memory using SPDK. \\
  ![Paul Luse](../../../../../img/summit-us-2018/paul-luse-pmdk.jpg "Paul Luse")
- Manoj Wadekar from eBay give a talk on disaggregated storage and role of storage
  stack and importance of Storage acceleration software like SPDK to help extract
  performance. This was followed by a talk from Paul Luse, Intel Corp on
  Virtual BDevs and how it can be customized for various use cases. \\
  ![Manoj Wadekar](../../../../../img/summit-us-2018/ebay-manoj.jpg "Manoj Wadekar")
  ![Virtual bdevs presentation](../../../../../img/summit-us-2018/virtual-bdevs-presentation.jpg "Virtual bdevs presentation")
- We concluded the first day of the SPDK Summit with a Networking Event.
  Everyone enjoyed snacks and drinks while networking with their SPDK community peers.
- Each session appeared to gain significant interest; audience members asked deeply
  technical and knowledgeable questions.
- To support the presentations with actual data, we had a slew of Demos hosted at
  the foyer, outside the ballroom. We had over 50 people visiting the demo booths
  between talks and during breaks. We had the following demos hosted:
  - SPDK demo using Vhost and user space NVMe-oF driver, to showcase performance
    accessing NVMe=oF devices
  - SPDK integrated with Rack Scale Design
  - SPDK integrated with Cache Acceleration Software
  - SPDK integrated with OpenStack Cinder
  - SPDK profiling using VTune System Studio

## Day 2

- Day 2 opened with a highly-interactive technical deep-dive on the SPDK
  Logical Volumes feature delivered by Daniel Verkamp, Software Engineer,
  Intel Corp, followed by talk on BDev QOS features of SPDK by Gang Cao,
  Lead Engineer, Intel Corp. \\
  ![Daniel Verkamp](../../../../../img/summit-us-2018/daniel-logical-volumes.jpg "Daniel Verkamp")
  ![Gang Cao](../../../../../img/summit-us-2018/gang-bdev-qos.jpg "Gang Cao")
- Prital Shah and Greg Tucker delivered introductory talk on ISA-L, an open source
  software that optimizes storage functions like Encryption, Compression, Hashing,
  Deduplication etc. and how spdk vbdev can be created to do encryption etc using
  ISA-L via DPDK FW. \\
  ![Prital Shah](../../../../../img/summit-us-2018/prital-isa-l.jpg "Prital Shah")
  ![Greg Tucker](../../../../../img/summit-us-2018/greg-isa-l.jpg "Greg Tucker")
- John Kariuki, Software Engineer from Intel Corp hosted hands on developers lab
  at the Summit. We had over 70 participants attend the lab, and it was very well
  received. Attendees got to leverage the Virtual Bdev session from Day 1 to try out
  coding their first virtual Bdev using vbdev_passthrough template. Thanks to all
  the attendees for submitting the survey for the lab. Your feedback is very
  valuable to us. \\
  ![John Kariuki](../../../../../img/summit-us-2018/john-kariuki-lab.jpg "John Kariuki")
- After lunch, we dove into a talk on ABI, APIs and packaging delivered by Ben Walker.
  There was good amount of participation from the audience leading to good discussion. \\
  ![Ben Walker](../../../../../img/summit-us-2018/ben-api.jpg "Ben Walker")
- The event concluded with developers meetup hosted by Paul Luse, Intel Corp. and
  final raffle ticket drawings.
- Congratulations to all the lucky winners of the Raffle!!!!!!
- Presentations from the event are posted on [SPDK.io](../../../../../summit/us/2018/).
  Videos of the event are posted on [YouTube](https://www.youtube.com/channel/UCBJymdv0AXCcnbLtEw7jvBQ/videos).

# Promotional Engagement

- The event was cross promoted by Intel Field team, Market Star, Intel® Builders,
  multiple DCG organizations, Twitter and SPDK mailing list.
