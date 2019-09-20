---
layout: default
title:  "开发"
jsfiles: /js/meetings.js
lang: cn
---
# 本文内容包括:

* [开源许可](#license)
* [源代码](#source)
* [贡献代码](#contributing)
* [开发指南](#guidelines)
* [GerritHub配置](#gerrithub)
* [提交补丁](#patch)
* [持续集成](#integration)
* [代码评审](#review)
* [修正补丁](#revise)
* [Multi-Commit一系列补丁](#multi)
* [核心维护者](#core)

# 相关文档

* [常见漏洞与曝光(CVE)流程和威胁建模](../cve_threat/)

<a id="license"></a>
## 开源许可

SPDK主要使用BSD-3条款授权的许可证。某些可选或实用程序代码（如内核模块）使用双BSD/GPLv2许可证进行许可。所有提交的代码必须带有相应的许可协议。

<a id="source"></a>
## 源代码
SPDK的源代码由 [GitHub](https://github.com/spdk/spdk)托管，补丁提交和审核是通过
[GerritHub](https://review.gerrithub.io/q/projects:spdk+status:open)完成的。

构建库的说明和示例位于
[README](https://github.com/spdk/spdk/blob/master/README.md)文件中。

<a id="contributing"></a>
## 贡献代码

欢迎大家踊跃贡献代码！通过[社区](/cn/community/) 页面提供的任意一种的交流方式，可以参与设计前期工作和广泛的讨论。

补丁通过GerritHub提交，并且社区中的每个人会为补丁进行投票。通常，一个补丁需要至少两个+2票才能被merge。+2票权限保留给[核心维护人员](#core)，可以在收件人列表或IRC中联系他们。

<a id="guidelines"></a>
## 开发指南

这些基本准则有助于确保SPDK开发社区保持有趣、公平和高效。

* 开发人员应尽量在GerritHub上保持活跃，以便对可能到来的变更保持关注。
* [Trello](https://www.trello.com/spdk/) 是我们管理未完成事务的地方，也是为更复杂的补丁设计资料的绝佳之处。代码合并之后，代码仓库中的文档将取代Trello上一切相关材料（即，一旦特性合并，Trello上的资料就不会保留）。
* 应始终遵守编码和提交指南 （即保证提交信息的明确与简洁）
* 开发人员无需向补丁中添加特定的审阅人员。相反，社区维护人员和社区中的其他人应当始终关注提交的新补丁。开发人员有权利完全自由地参与某个补丁的审阅工作，或者让其他人成为补丁的审阅人员。
* 所有关于代码评审的评论必须在正式合并补丁之前得到回应。可以通过修改代码或回复评论来对评论做出回应。
* 补丁没有最长或最短的存留时间限制。一个补丁可能在数小时，数周甚至更长时间内被接受。社区开发人员的良好互动会直接提高社区的运作效率。
* 补丁提交者，包括核心维护人员，不能给他们自己提交的补丁投+1或+2票。他们可以给自己的补丁投-1票，用以表示此补丁不应生效。

<a id="gerrithub"></a>
## GerritHub配置

用户可使用GitHub帐户登录GerritHub。登录后，在右上角单击您的用户名并选择“设置”。你应该设置以下内容:

* `Profile`: 确保这里的信息准确无误
* `HTTP Password`: 设置密码，在git提示时将使用此密码（不是GitHub密码）
* `Preferences`:
  * 将“Maximum Page Size”设置为每页100行。否则会经常需要点击“next”。
  * 我们强烈建议您将邮件通知设置为“None”。Gerrit将会发送很多邮件（也许会造成困扰）。
  * 在 `My Menu` 部分，添加以下条目：

  ~~~
  Name: SPDK Open Reviews
  URL: #/dashboard/?Outgoing=projects:spdk+o:self+status:open&Needs%20Review=projects:spdk+r:self+-o:self+status:open&Open=projects:spdk+status:open+-r:self+-o:self
  ~~~

您也可以删除其中的其他条目。这将在页面顶部添加一个链接，位于“My”下方，该链接将指向一个显示您的所有SPDK评论活动的板块。

完成以上步骤则配置完成，您可以在本地克隆GerritHub存储库:

~~~{.sh}
git clone https://review.gerrithub.io/spdk/spdk
cd spdk
git submodule update --init
~~~

或者，如果您已经直接从GitHub克隆，则可以通过执行以下操作将您的存储库更改为指向GerritHub：

~~~{.sh}
git remote set-url origin https://review.gerrithub.io/spdk/spdk
~~~

当您稍后推送补丁时，系统会提示您输入密码。该密码是在GerritHub设置的`HTTP Password` 部分生成的，而不是您的GitHub密码。为了方便起见，请打开[git凭证助手](https://git-scm.com/docs/git-credential-store)为您存储密码。您可以通过以下方式为SPDK存储库启用它：

~~~{.sh}
git config credential.helper store
~~~

最后，您需要安装Gerrit commit-msg hook。这会在您每次提交时插入唯一的更改ID，并且Gerrit**需要**它才能工作。

~~~{.sh}
curl -Lo .git/hooks/commit-msg https://review.gerrithub.io/tools/hooks/commit-msg
chmod +x .git/hooks/commit-msg
~~~

现在，在文本编辑器中打开.git/config并添加以下几行：(这将使推送评论更容易)

~~~
[remote "review"]
  url = https://review.gerrithub.io/spdk/spdk
  push = HEAD:refs/for/master
~~~

您还可以启用git pre-commit和pre-push hook来自动检查格式化并运行单元测试:

~~~
git config core.hooksPath .githooks
~~~

现在，您应该都准备好了!

<a id="patch"></a>
## 提交补丁

提交要求：

* 所有的提交都必须由开发人员签名，表明签署同意了 [开发者原创证书](http://developercertificate.org/).
这是在提交更改时使用 `-s` 或 `--signoff` 选项完成的。

* 所有的提交必须符合SPDK样式指南。样式指南由`script/check_format.sh`中的脚本定义，它将使用工具astyle和pep8以编程方式修复编码样式问题。确保在提交补丁前运行此脚本。

* 所有新代码必须包括附带的单元测试代码。

* 代码提交之前应通过所有的单元测试，同时，提交的代码应当被rebase。

* 在提交review之前，进行squash commit，以便每一个commit都有一个明确的目的，即朝着一系列commit的共同目标迈近一步。

* 提交一份明确描述commit目标的提交注释（commit message）。一份良好的提交注释在标题中简要说明了commit的作用，紧接着用很短的一段话说明commit带来的变化。例如， 解决了什么问题，怎么样发现的这个问题，以及这个补丁是如何解决这个问题的。

SPDK的开发都是基于master分支完成的，所以首先要保证你有最新的版本。

下面假设 `origin` 指向GerritHub。

~~~{.sh}
git checkout master
git pull
~~~

接下来，为你的开发工作创建一个分支。

~~~{.sh}
git checkout -b <my_branch>
~~~

然后，进行更改并commit。您将使用一系列commit来构建master的分支。完成之后，再次从master中提取最新的内容，并在这基础上rebase您的修改。

~~~{.sh}
git checkout master
git pull
git checkout <my_branch>
git rebase -i master
~~~

现在您的分支应该基于master之上，并且应该有check out的提示。您可以通过以下步骤将代码推送到Gerrit进行检查：

~~~{.sh}
git push review
~~~

如果提示输入密码，请记住该密码来自GerritHub设置的`HTTP Password`部分。如果启用了git凭证助手，那么只会提示您一次。

<a id="integration"></a>
## 持续集成

SPDK采用了持续集成（CI, Continuous Integration），这意味着所有的补丁在被审阅之前都要经过一系列的测试。SPDK CI系统定期查看GerritHub，将补丁拉下，并将它们运行在具有物理NVMe SSD的多台计算机池中。所有测试都被检入到主SPDK存储库（遵循库根目录的`autorun.sh`文件）。这意味着用户只需提交一个补丁就可以向CI系统添加测试。

[CI系统状态](https://dqtibwqq6s6ux.cloudfront.net/) 涵盖了对排队的补丁的概述。请注意，补丁不会自动排队，而是需要SPDK维护人员在测试之前粗略地批准。CI状态页面上的“待批准”表格中列出了待批准通过CI系统测试的补丁。

当CI系统完成测试时，它将使用+/-1验证标志对Gerrit的review发表评论，并添加链接到测试运行日志 。在测试不通过时，这一点将十分有用。如果没有从CI系统测试得到+1，则不会合并补丁。

如果CI系统给你的补丁一个-1，但你认为CI系统的判断是错误的（与补丁无关），请联系维护人员（通过IRC）重新运行你的补丁。

<a id="review"></a>
## 代码评审

我们鼓励社区中每一个人参与到每一个补丁的评审中来，并用+1（竖起大拇指）或-1（拇指向下）标记它们。代码评审反馈非常重要，所以即使您是一个SPDK新手，也请加入进来并开始评审补丁。

<a id="revise"></a>
## 修正补丁

SPDK的补丁批准标准很高。我们试图在高速更新和避免陷入“技术债务”之间取得平衡。因此，所有重要的补丁都至少要经过好几轮代码评审。
幸运的是，Gerrit使得更新未完成的评审变得非常容易。您只需更新git存储库中的提交，以合并新的更改，并再次推送。例如：

~~~{.sh}
git checkout <my_branch>
  对代码review的进行反馈
git commit -a --amend
git push review
~~~

<a id="multi"></a>
## Multi-Commit一系列补丁

Gerrit对创建一系列补丁有很好的支持，在这些补丁中，每个commit都可以单独进行重新查看，但是依赖于先前的合并。您可以使用以下步骤将整个系列的补丁推送到Gerrit：

~~~{.sh}
git checkout master
git pull
git checkout <my_series>
    做一些修改
git commit -s -a # 更改1
    做一些修改
git commit -s -a # 更改2
    做一些修改
git commit -s -a # 更改3
git push review
~~~

Gerrit将创建三个review，每个review都相互依赖。代码审查人员不可避免地会在review期间让您更改代码。为了解决这种问题，您可以执行以下操作：

~~~{.sh}
git checkout <sha of change #2>
git checkout -b tmp # 'tmp'或任何其他名字
  对代码review进行反馈
git commit -s -a --amend #修改了更改2以包含您的更新
git checkout <my_series> # 指向更改3
git rebase -i tmp # 在更改2之上移动更改3
git push review
git branch -D tmp # 清理'tmp'分支
~~~

<a id="core"></a>
## 核心维护人员

SPDK核心维护人员的主要职责是为SPDK项目提供技术监督。目前，SPDK核心维护者有：

* Jim Harris (IRC: jimharris)
* Changpeng Liu (IRC: changpe1)
* Shuhei Matsumoto (IRC: Shuhei)
* Ben Walker (IRC: bwalker)

技术监督绝大部分是通过审查和批准补丁来实现的。补丁必须获得两个核心维护人员的+2票，并且从SPDK自动测试池中获得+1票，才能审批通过。只有核心维护人员有权利投出+2票和审批通过补丁。如果核心维护人员审阅了补丁，但是认为自己对这个补丁涉及的领域不熟悉，不能提供专业意见，也可以投出+1票。

在极少数情况下，根据核心维护人员的判断，补丁也可以在只有一个+2票情况下审批通过。

核心维护者的其他职责包括：

* 设定代码评审和开发指南
* 对社区流程事务做出决策
* 树立良好的开发实践榜样
* 促进社区更加活跃与高效
* 参与项目发展蓝图的设计
* 发掘、整理并组织开发任务
