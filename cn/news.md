---
layout: news
title:  "SPDK用户案例"
lang: cn
---

# 新闻条目

## 阿里云
### [高性能云服务器：本地SSD](https://promotion.aliyun.com/ntms/act/ecshighperformance.html?open_id=1d8213d3-b437-4596-a88a-d27798942d3a-&open_cid=4703)
> “本地存储设计：NVMe SSD+先进的SPDK存储技术……”

### [阿里云解决大规模高性能存储可靠性问题再次被系统领域顶会认可!](https://mp.weixin.qq.com/s?__biz=MzUxNjE3MTcwMg==&mid=2247484531&idx=1&sn=a2e2403553f35bd95dede1c20008c701&chksm=f9aa36aaceddbfbc2ad61322d1429541c65433f0187cfed43da1abc5b0a74324b7f5e48b6664&mpshare=1&scene=1&srcid=0725GYCQ4umImcE9RTra9b7Q&sharer_sharetime=1595633885692&sharer_shareid=1e1dec1b9475e3734b8e5a5d756cd987&exportkey=A7u3lgJYloOKluHO9Anx%2FlU%3D&pass_ticket=79U82s1g4cln4qPznk2LWHFfonukEua2qL0xjsaXGItU%2F7R8VRtV8ob3jpgdu23g&wx_header=0#rd)
> “阿里云操作系统团队，阿里云存储团队以及上海交通大学新兴并行计算研究中心一起合作的论文(Spool: Reliable Virtualized NVMe Storage Pool in Public Cloud Infrastructure)被系统领域著名会议USENIX ATC'20录用为长论文。Spool是我们4年前提出并在阿里云块存储持续落地的解决方案，Spool阐述了阿里云如何解决本地SSD实例存储服务的可靠性，以2.97%的性能损失，减少94%的数据丢失和90.58%的启动时间，并帮助基于SPDK的NVMe大规模稳定可靠的应用于生产，目前包括阿里云最新一代云存储ESSD也一直沿用Spool技术，这次我们的工作也又一次得到了系统顶级学术会议的认可，我们将在这篇文章中详细介绍Spool的工作细节。”


## 华为云
### [打造极致性能&领先时代的云存储](https://mp.weixin.qq.com/s?__biz=MzU2MDQyODg5OQ==&mid=2247483678&idx=1&sn=1ae7ba94c9a1eb700b281f334349bcdd&chksm=fc096312cb7eea04806cb1a79730c0b20a26be30cc598c9a48984c314e5a6ff9a2883d4548c0&mpshare=1&scene=1&srcid=1011i0o8g9PMom1NJvNc6M1F&pass_ticket=78pFPUJXIj2jXUbDK37gFxL1pHBmmS0LyvDfYau6Um90HlQij9oDVpABPtHWgusn#rd)
> “自研高效IO协议栈及SPDK，降低前后端时延、降低SSD读写时延……”


## UCloud
### [13倍性能，3倍稳定性提升！UCloud云硬盘做了这些事](https://mp.weixin.qq.com/s?__biz=MzUwOTA1NDg4NQ==&mid=2247485279&idx=1&sn=22d544ff61f95bee5d7c31741fa109fe&chksm=f9195d95ce6ed483b630aa82868ec3c673578c916c701f040465d6ad0eb71d56ac527ba5bb4a&mpshare=1&scene=1&srcid=1109eUsfiFQsJuWdHaci4KWL&pass_ticket=M8iA8MZjqSvTO58%2BTEC99yB4Qp%2BWMsiSeWnXZdkmA8%2B93TtihBKMThXsAhUs3e1U#rd)
> “超高性能存储-RDMA+SPDK：SPDK可以在用户态高并发零拷贝地以用户态驱动直接访问NVME 固态硬盘。并利用轮询模式避免了内核上下文切换和中断处理带来的开销。”

### [UCloud RSSD云盘120万IOPS的背后，SPDK IO路径优化实践](https://mp.weixin.qq.com/s?__biz=MzUwOTA1NDg4NQ==&mid=2247485707&idx=1&sn=c6f8e7ebe48a13e7783abc187c588002&chksm=f91953c1ce6edad7c61b267acb0abc1292486ae70cf4883e9f811320f08a596874e12e0f7d72&mpshare=1&scene=1&srcid=0523NZ3tMRR6jvAOYngdBkXB&pass_ticket=wtEIGZYEis9CDCq2bHqr9cZpaldcKOrajkGA0dojARAuGlY%2FloOQcZQ%2FsK0w0KRa#rd)
> “SPDK作为一个快速发展迭代的项目，每个版本都会给我们带来惊喜，里面也有很多有意思的功能等待我们发掘并进一步运用到云盘及其它产品性能的提升上。”

## 腾讯数据库
### [可怕！数据库竟然打破安迪-比尔定律](https://www.cnblogs.com/qcloud1001/p/9087911.html)
> “ 对于单块的SSD Disk，相比传统的Direct IO方式，采用SPDK的直接数据传输无论在顺序读还是随机读模式都有超过一倍的性能提升，对比depth为1时的写性能，无论是随机写还是顺序写都有30%的性能提升。”


## 双11
### [浅谈分布式存储系统Pangu2.0——它让双11运维变得智能起来](https://yq.aliyun.com/articles/291207)
> “首先，Pangu2.0拥有自己的单机存储引擎Bypass OS kernel，它是一个基于SPDK的用户态文件系统……”

### [高IO型本地盘存储实例：双十一中，阿里如何将数据库性能提升100%、响应时间减少80%？](http://www.infoq.com/cn/news/2017/02/IO-ali-data-warehouse)
> “为了解决I/O性能上的痛点，阿里云开始基于NVMe 协议和英特尔开源项目SPDK研发高IO存储实例……”

### [阿里数据库十年变迁，那些你不知道的二三事](https://mp.weixin.qq.com/s?__biz=MzIzOTU0NTQ0MA==&mid=2247488607&idx=1&sn=19e53786933d0c106fa5db842d10ce36&chksm=e9292950de5ea046f0502473454f111a94c8bcf21a83030a5a62466f49abd6653aaaa2f2a0ad&mpshare=1&scene=1&srcid=1204PQWDOwPML9yl7dblk6EV&pass_ticket=M8iA8MZjqSvTO58%2BTEC99yB4Qp%2BWMsiSeWnXZdkmA8%2B93TtihBKMThXsAhUs3e1U#rd)
> “ ……2018年双11，随着存储计算分离技术的大规模使用，标志着数据库进入了一个新的时代……”

## 红包场景
### [SPDK+NVMe SSD对接Virtio支撑红包场景性能](https://mp.weixin.qq.com/s/nP62NpX0NAo4BZhpkAWaQg)
> “最终在块设备层使用了标准virtio blk驱动；硬件驱动使用了SPDK工具集；硬件使用了NVMe SSD……”

## 深信服(Sangfor)
### [三万英尺看分布式存储中本地存储引擎](https://mp.weixin.qq.com/s?__biz=MjM5ODI5Njc2MA==&mid=2655831732&idx=2&sn=2ef2f5b338fc7145d87fe7685d9335aa&chksm=bd748b638a03027558f6925d48fe12ba27aedd5aa749dddad5e40592bf7e79249c144d27a200&mpshare=1&scene=1&srcid=&sharer_sharetime=1590671665398&sharer_shareid=bce63ba0449f498eb13c109c5eaef06d&exportkey=A%2FGUxq5dqdlstzBGYEhU9l0%3D&pass_ticket=QOTscjJWy3u2k7TmQww%2FS9XnYJkCuG109UsYE3PYjmwWTEFMXGD09hVFmSqMD30e#rd)
> “我们简单介绍深信服企业级分布式存储EDS团队在高性能本地存储的实践之路。PFStore(Phoenix Fast Store)是EDS团队自研的基于SPDK的用户态本地存储引擎......”

## 更多SPDK使用案例，请参考[news]({{ baseurl_rel }}/news)页面
