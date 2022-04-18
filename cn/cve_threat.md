---
layout: default
title:  "SPDK常见漏洞与曝光(CVE)流程"
lang: cn
---

# 本文包括:

* [CVE流程](#cve)
* [威胁建模](#threat)
* [案例：集成NVMe驱动](#usecase)
* [案例：NVMe over Fabrics Target](#usecase)

<a id="cve"></a>
## 常见漏洞与曝光(CVE)流程

SPDK CVE流程设计得简单而有效。此过程旨在确保有效处理安全漏洞，并尽可能通过少量的广播。SPDK CVE子团队是专门来处理此过程的。如果您有兴趣加入，请联系其中一位SPDK维护人员。问题可以来自任何地方，但当出现问题时，应尽快通过下面邮件地址通知子团队负责人。这是为了确保在完全弄清楚问题之前，不会去发布未确定的漏洞。

如果您认为自己已发现潜在的安全问题，请通过以下电子邮件直接与子团队联系，请不要在Slack上讨论或在GitHub上发布问题。

子团队成员负责以下流程：

1. 收到安全漏洞通知后，小组负责人将召集小组会议讨论潜在问题。
2. 子团队将确定调查和确定漏洞范围所需的资源，包括修复或临时解决方法。
3. 一旦确定了修复或临时解决方法后，子团队将会批准该修复或要求进一步调查。
4. 一旦获得批准，补丁将通过正常渠道提交，而不会提供有关漏洞本身的详细信息。它将简单地说明补丁做些什么(而不是为什么)。
5. 合并修补程序后，最新的正式版本将用作维护版本的基准，并且仅包括针对手头上确定的问题的修订。
6. 标记版本后，子团队负责人将向[CVE组织](https://cve.mitre.org/)提交问题
7. 提交问题后，将在邮件列表上发布公告，提供有关补丁和修复的更多信息，以便社区成员可以自行决定他们的曝光情况以及何时，如果可行的话，他们应该转移到新的发布。

CVE小组成员联系方式：

* Jim Harris, james.r.harris@intel.com
* John Levon, john.levon@nutanix.com
* Changpeng Liu, changpeng.liu@intel.com
* Paul Luse, paul.e.luse@intel.com
* Alexey Marchuk, alexeymar@nvidia.com
* Shuhei Matsumoto, smatsumoto@nvidia.com
* Ben Walker, benjamin.walker@intel.com
* Anna Wan, qun.wan@intel.com
* Tomek Zawadzki, tomasz.zawadzki@intel.com

<a id="threat"></a>
## 威胁建模

威胁建模是识别安全漏洞的常见行业惯例。SPDK将利用威胁建模来主动识别漏洞并解决漏洞问题。威胁建模涉及识别最常见的用例，确定涉及哪些组件，以及识别可能的攻击面和攻击动机。

下面的NVMe驱动用例可以作为未来更多用例的模型。我们鼓励每个人参与。

社区将定期举行hack-fests，无论是在峰会还是开发者聚会上，开发人员都会获得一个用例，并要求根据威胁建模查找漏洞。这将是一种有趣且互动的方式，有助于使SPDK更加安全。

<a id="usecase"></a>
## 威胁建模案例

* [案例: 集成NVMe驱动](https://ci.spdk.io/download/threat_models/NVMe-Threat-Model.pdf)
* [案例: NVMe-oF Target](https://ci.spdk.io/download/threat_models/NVMe-oF-Target-Threat-Model.pdf)
