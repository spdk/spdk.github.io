---
layout: default
title: "SPDK版本"
lang: cn
---
<span class="glyphicon glyphicon-download"></span> [最新版本](https://github.com/spdk/spdk/releases)
---------

SPDK的所有版本都可以通过[GitHub](https://github.com/spdk/spdk/releases)获得。GitHub作为所有更改的主存储库，因此主分支始终包含最新的代码。

发布流程：
---------------

SPDK定义了一个公共[API](https://en.wikipedia.org/wiki/Application_programming_interface)版本, 其中[公共 API](http://www.spdk.io/doc/files.html) 包含[include/spdk](https://github.com/spdk/spdk/tree/master/include/spdk) 目录中的所有C语言头文件。 版本名称格式为 `YY.MM.vv`, 其中 `YY` 表示年, `MM` 表示月,  `vv` 表示次要版本号，通常省略。
例如，2016年12月发布的版本是16.12。次要版本是为以后发布的bug修复版本预留的，这些版本仍然与原始版本兼容。SPDK并不保证不同版本的发行版之间的API兼容性，尽管会尽一切努力避免破坏API。版本相同但次要版本号不同的版本保证是API兼容的。SPDK目前不保证两个版本之间的[ABI](https://en.wikipedia.org/wiki/Application_binary_interface)兼容性。

SPDK 使用季度发布周期。每个季度的前两个月是一个开放的合并时期。每个季度的最后一个月仅用于 bug 修复和文档修改, 因此, 在维护人员的斟酌判断
下，可能会延迟包含新功能的请求。下一个版本的[A high level roadmap](https://github.com/orgs/spdk/projects/5)总是在发布周期伊始发布。路线图可以随时在SPDK邮寄列表中讨论，并且非常欢迎反馈意见。

错误报告
-----------

错误报告可以使用[GitHub issues](https://github.com/spdk/spdk/issues)归档，并且应该指出有问题的SPDK版本(或者最新`master`）。
错误将始终在`master`分支进行修复，但是可能会返回到两个最新版本中的任一个，如果：

* 用户通过评论问题说明他们希望将错误返回到哪个版本来请求后端;
* 错误修复不需要改变API。
