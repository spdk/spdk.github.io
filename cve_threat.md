---
layout: default
title:  "SPDK Common Vulnerabilities and Exposures (CVE) and Threat Modeling"

toc:
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

To report a potential security vulnerability, or to learn how SPDK handles CVEs, see the
[SPDK security policy](https://github.com/spdk/spdk/blob/master/SECURITY.md).

<a id="current"></a>
## Current CVEs

[Click here for a list of all SPDK CVE entries.](https://www.cve.org/CVERecord/SearchResults?query=spdk)

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

* [Use Case: Integrate NVMe Driver](https://review.spdk.io/download/threat_models/NVMe-Threat-Model.pdf)
* [Use Case: NVMe-oF target](https://review.spdk.io/download/threat_models/NVMe-oF-Target-Threat-Model.pdf)
* [Use Case: Vhost integration](https://review.spdk.io/download/threat_models/VHOST-threat-model.pdf)
