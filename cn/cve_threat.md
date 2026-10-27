---
layout: default
title:  "SPDK常见漏洞与曝光(CVE)和威胁建模"
lang: cn
---

# 本文包括:

* [威胁建模](#threat)
* [案例：集成NVMe驱动](#usecase)
* [案例：NVMe over Fabrics Target](#usecase)

如需报告潜在的安全漏洞，或了解SPDK如何处理CVE，请参阅[SPDK安全策略](https://github.com/spdk/spdk/blob/master/SECURITY.md)。

<a id="threat"></a>
## 威胁建模

威胁建模是识别安全漏洞的常见行业惯例。SPDK将利用威胁建模来主动识别漏洞并解决漏洞问题。威胁建模涉及识别最常见的用例，确定涉及哪些组件，以及识别可能的攻击面和攻击动机。

下面的NVMe驱动用例可以作为未来更多用例的模型。我们鼓励每个人参与。

社区将定期举行hack-fests，无论是在峰会还是开发者聚会上，开发人员都会获得一个用例，并要求根据威胁建模查找漏洞。这将是一种有趣且互动的方式，有助于使SPDK更加安全。

<a id="usecase"></a>
## 威胁建模案例

* [案例: 集成NVMe驱动](https://review.spdk.io/download/threat_models/NVMe-Threat-Model.pdf)
* [案例: NVMe-oF Target](https://review.spdk.io/download/threat_models/NVMe-oF-Target-Threat-Model.pdf)
