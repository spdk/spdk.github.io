---
layout: default
title:  "SPDK Common Vulnerabilities and Exposures (CVE) Process"

toc:
  - title: CVE Process
    url: "#cve"
  - title: Current CVEs
    url: "#current"
  - title: Threat Modeling
    url: "#threat"
  - title: "Use Case: Integrate NVMe Driver"
    url: "#usecase"
  - title: "Use Case: NVMe over Fabrics Target"
    url: "#usecase"
  - title: "Use Case: Vhost integration"
    url: "#usecase"
---

<a id="cve"></a>
## Common Vulnerabilities and Exposures (CVE) Process

The SPDK CVE process is designed to be simple yet effective. The process is here to help make sure that security
vulnerabilities are dealt with efficiently, and with the least amount of advertising possible. An SPDK CVE sub-team
exists to handle this process. If you are interested in joining please contact one of the SPDK maintainers.
Issues can come from anywhere but when one comes to the attention of the community the sub-team leader should
be notified via private communications ASAP. This is to ensure that we don't advertise possible vulnerabilities
before they are fully understood.

If you believe you have identified a potential security issue, please contact the sub-team directly via private
email (see below), do not discuss on Slack or report the issue in GitHub.

Sub-team members are responsible for the following process:

1. Upon receiving a notification of a security vulnerability, the sub-team leader will call for a sub-team meeting
to discuss the potential issue.
2. The sub-team will identify the resources required to investigate and determine the scope of the vulnerability, including a fix or workaround.
3. When the fix or workaround has been identified, the sub-team will approve it or ask for further investigation.
4. Once approved, the patch will be submitted via normal channels without verbose information on the vulnerability
itself. It will simply state what the patch is doing (not why).
5. Once the patch is merged, the most recent official release will be used as a baseline for a maintenance release and will
include only the fix(es) identified for the issue at hand.
6. Once the release is tagged, the sub-team leader will file an issue with the [CVE Org](https://cve.mitre.org)
7. After the issue has been filed, an announcement will be made on the mailing list with more information about
the patch and the fix so that community members can decide for themselves what their exposure is and when, if at
all, they should move to the new release.

CVE Sub-Team Members:

* Jim Harris, james.r.harris@intel.com
* John Levon, john.levon@nutanix.com
* Changpeng Liu, changpeng.liu@intel.com
* Paul Luse, paul.e.luse@intel.com
* Alexey Marchuk, alexeymar@nvidia.com
* Shuhei Matsumoto, smatsumoto@nvidia.com
* Konrad Sztyber, konrad.sztyber@intel.com
* Ben Walker, benjamin.walker@intel.com
* Anna Wan, qun.wan@intel.com
* Tomek Zawadzki, tomasz.zawadzki@intel.com

<a id="current"></a>
## Current CVEs

[Click here for a list of all SPDK CVE entires.](https://cve.mitre.org/cgi-bin/cvekey.cgi?keyword=spdk)

<a id="threat"></a>
## Threat Modeling

Threat modeling is a common industry practice for identifying security vulnerabilities. SPDK will leverage threat
modeling in an effort to proactively identify vulnerabilities and address them. Threat modeling involves identifying
the most common use cases, mapping out what components are involved, and identifying possible attack surfaces
and attack motives.

The use case below, NVMe Driver Integration, can serve as a model for future use cases. Everyone is encouraged
to participate.

The community will hold hack-fests periodically, either at summits or developer meetups, where developers are given
a use case and asked to find vulnerabilities based on the threat modeling. It will be a fun and interactive way of
helping make SPDK more secure.

<a id="usecase"></a>
## Threat Models by Use Case

* [Use Case: Integrate NVMe Driver](https://ci.spdk.io/download/threat_models/NVMe-Threat-Model.pdf)
* [Use Case: NVMe-oF target](https://ci.spdk.io/download/threat_models/NVMe-oF-Target-Threat-Model.pdf)
* [Use Case: Vhost integration](https://ci.spdk.io/download/threat_models/VHOST-threat-model.pdf)
