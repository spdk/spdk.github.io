---
layout: default
title:  "SPDK Common Vulnerabilities and Exposures (CVE) Process"
---

# In this document:

* [CVE Process](#cve)
* [Threat Modeling](#threat)
* [Use Case: Integrate NVMe Driver](#nvmeuse)

<a id="cve"></a>
## CVE Process

The SPDK CVE process is design to be simple yet effective. The process is here to help make sure that issues
related to security & vulnerability are treated efficiently with the least amount of advertising possible. An
SPDK CVE sub team exists, if you are interested in joining please contact one of the maintainers, and is
responsible for following the process outlined here:

1. Issues can come from anywhere but when one comes to the attention of the community the sub team leader should
be notified via private communications ASAP. This is to assure that we don't advertise possible vulnerabilities
before they are fully understood.
2. The sub team leader will call available sub team members together to discuss the potential issue.
3. Resources will be identified to investigate and determine the scope of the vulnerability and work to identify
a fix or workaround.
3. Resources will be identified to investigate and determine the scope of the vulnerability and work to identify
a fix or workaround.
4. Then the fix or workaround has been identified, the subtend will approve it or ask for continued investigation.
5. Once approved, the patch will be submitted via normal channels without verbose information on the vulnerability
itself, it will simply state what the patch is doing (not why).
6. Once the patch is merged, the last tagged release will be used as a baseline for a maintenance release and will
include only the fixe(s) identified for the issue at hand.
7. Once the release is tagged, the sub team lead will file an issue with https://cve.mitre.org
8. After the issue has been filled, an announcement will be made on the mailing list with more information about
the patch and the fix so that community members can decide for themselves what their exposure is and when, if at
all, they should move to the new release.

<a id="threat"></a>
## Threat Modeling

Threat modeling is a common industry activity and SPDK is adopting this style of identifying potential issues in
an effort to proactively catch security and vulnerability issues. The basic idea is to identify the most common
use cases for SPDK and map out what components are involved and, for that use case, where the attack sufaces are
and what kinds of attackers might be interested in going after them. There is a lot of information on thread
modeling available on the web, for SPDK we will be continuing to grow our use cases over time following the
"style of the file" way of thinking. Use the example use case below, the NVMe Driver Integration, as a model
for how to contribute new use cases over time.  Everyone is encouraged to participate.

The community will hold hack-fests periodically, either at summits or developer meetups, where developers are given
a use case and asked to find vulnerabilities based on the threat modeling. It will be a fun interactive way of
helping make SPDK more stable.

<a id="nvmeuse"></a>
## Use Case: Integrate NVMe Driver
Will insert link to PDF for this thread model, its a bunch of pics and tables so doesn't lend itself well to markdown
