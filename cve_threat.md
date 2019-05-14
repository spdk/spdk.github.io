---
layout: default
title:  "SPDK Common Vulnerabilities and Exposures (CVE) Process"
---

# In this document:

* [CVE Process](#cve)
* [Threat Modeling](#threat)
* [Use Case: Integrate NVMe Driver](#nvmeuse)

<a id="cve"></a>
## Common Vulnerabilities and Exposures (CVE) Process

he SPDK CVE process is designed to be simple yet effective. The process is here to help make sure that security
vulnerabilities are dealt with efficiently and with the least amount of advertising possible. An SPDK CVE sub-team
exists to handle this process. If you are interested in joining please contact one of the SPDK maintainers.
Issues can come from anywhere but when one comes to the attention of the community the sub-team leader should
be notified via private communications ASAP. This is to assure that we don't advertise possible vulnerabilities
before they are fully understood.

Sub team members are responsible for the following process:

1. Upon receiving a notification of a security vulnerability, the sub-team leader will call for a sub-team meeting
to discuss the potential issue.
2. The sub-team will identify the resources required to investigate and determine the scope of the vulnerability, including a fix or work-around.
3. When the fix or workaround has been identified, the sub-team will approve it or ask for further investigation.
4. Once approved, the patch will be submitted via normal channels without verbose information on the vulnerability
itself. It will simply state what the patch is doing (not why).
5. Once the patch is merged, the most recent official release will be used as a baseline for a maintenance release and will
include only the fix(es) identified for the issue at hand.
6. Once the release is tagged, the sub-team leader will file an issue with https://cve.mitre.org
7. After the issue has been filed, an announcement will be made on the mailing list with more information about
the patch and the fix so that community members can decide for themselves what their exposure is and when, if at
all, they should move to the new release.

<a id="threat"></a>
## Threat Modeling

Threat modeling is a common industry practice for identifying security vulnerabilities. SPDK will everage threat
modeling in an effort to proactively identify vulnerabilities and address them. Threat modeling involves identifying
the most common use cases, mapping out what components are involved, and identifying possible attack surfaces
and attack motives.

The use case below, NVMe Driver Integration, can servce as a model for additional use cases. Everyone is encouraged
to participate.

The community will hold hack-fests periodically, either at summits or developer meetups, where developers are given
a use case and asked to find vulnerabilities based on the threat modeling. It will be a fun and interactive way of
helping make SPDK more secure.

<a id="nvmeuse"></a>
## Threat Models by Use Case

* [Use Case: Integrate NVMe Driver](../files/NVMe-Threat-Model.pdf)
*
*
