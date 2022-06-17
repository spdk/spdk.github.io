---
layout: default
title:  "SPDK用户案例"
lang: cn

toc:
  - title: 用户案例
    url: ../news
  - title: 技术文章
    url: ../articles
  - title: 白皮书
    url: ../whitepaper
  - title: 在线分享
    url: ../webinar
---

## 阿里云
### [高性能云服务器：本地SSD](https://promotion.aliyun.com/ntms/act/ecshighperformance.html?open_id=1d8213d3-b437-4596-a88a-d27798942d3a-&open_cid=4703)
> “本地存储设计：NVMe SSD+先进的SPDK存储技术……”

### [阿里云解决大规模高性能存储可靠性问题再次被系统领域顶会认可!](https://mp.weixin.qq.com/s?__biz=MzUxNjE3MTcwMg==&mid=2247484531&idx=1&sn=a2e2403553f35bd95dede1c20008c701&chksm=f9aa36aaceddbfbc2ad61322d1429541c65433f0187cfed43da1abc5b0a74324b7f5e48b6664&mpshare=1&scene=1&srcid=0725GYCQ4umImcE9RTra9b7Q&sharer_sharetime=1595633885692&sharer_shareid=1e1dec1b9475e3734b8e5a5d756cd987&exportkey=A7u3lgJYloOKluHO9Anx%2FlU%3D&pass_ticket=79U82s1g4cln4qPznk2LWHFfonukEua2qL0xjsaXGItU%2F7R8VRtV8ob3jpgdu23g&wx_header=0#rd)
> “阿里云操作系统团队，阿里云存储团队以及上海交通大学新兴并行计算研究中心一起合作的论文(Spool: Reliable Virtualized NVMe Storage Pool in Public Cloud Infrastructure)被系统领域著名会议USENIX ATC'20录用为长论文。Spool是我们4年前提出并在阿里云块存储持续落地的解决方案，Spool阐述了阿里云如何解决本地SSD实例存储服务的可靠性，以2.97%的性能损失，减少94%的数据丢失和90.58%的启动时间，并帮助基于SPDK的NVMe大规模稳定可靠的应用于生产，目前包括阿里云最新一代云存储ESSD也一直沿用Spool技术，这次我们的工作也又一次得到了系统顶级学术会议的认可，我们将在这篇文章中详细介绍Spool的工作细节。”

### [达摩院重要科技突破！空天数据库引擎Ganos解读](https://mp.weixin.qq.com/s?__biz=MzIzOTU0NTQ0MA==&mid=2247503532&idx=1&sn=eaddf09ce693188bbf6666c77b07a4dd&chksm=e92af3a3de5d7ab5ecda11a6bf033ef9c2273c4477f5f8ed2ca14367bac97fa2409403eee0e3&mpshare=1&scene=1&srcid=0525S7YkL4NomFEDOCR1M1k3&sharer_sharetime=1621907036591&sharer_shareid=bce63ba0449f498eb13c109c5eaef06d&exportkey=AzmPnGxc0qgnHCPMmLuQtLc%3D&pass_ticket=EAT6tmcbITyDRRuPWQmxc5liib0leAceqPPZ15Olj89nWx6p9SSzzAPI%2BiUyCqo0&wx_header=0#rd)
> “基于PolarDB，Ganos采用了存计分离和分布式共享存储架构。计算和存储分离，将原有一体化设计的数据库的各个组件（计算/内存/存储）完全解耦，形成可独立伸缩的资源池。同时，为降低存计分离带来的写入和查询延迟，共享存储系统采用了端到端全用户态模式，融合了 RDMA、SPDK 等高速数据传输和存取软硬件技术，以及与近存储计算介质硬件结合的DB处理下推技术，有效地提升了空天数据的存储规模和处理能力。”

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

### [性能领跑云原生数据库市场！英特尔携手腾讯共建云原生技术生态](https://cloud.it168.com/a2022/0616/6747/000006747234.shtml)
> “为进一步深入优化产品架构和技术实现，TDSQL-C与英特尔技术团队积极开展联合创新。结合最新一代英特尔® 至强® 可扩展处理器以及英特尔® 傲腾™ 持久内存(PMem) 的硬件特性重构二级缓存设计方案，新版本在IO bound场景中的读写性能提升了2倍以上。TDSQL-C还携手英特尔多方位优化存储方案设计，如加入轮询、算法优化、消除锁等机制，优化存储引擎等，并引入由英特尔提供的SPDK开发套件，优化NVMe固态盘的IOPS和时延性能。”

## 腾讯云
### [腾讯云存储发布三个性能第一新品，让高性能应用轻松上云](https://mp.weixin.qq.com/s?__biz=MjM5NDQyNDQ0Mw==&mid=2652396562&idx=1&sn=6da8907f5bdcb4f73dc7307a179d516b&chksm=bd6b0f068a1c86108a7401cb1cb5a56a63e8a9adf42aca59121c21a11685768c4a06a5543495&mpshare=1&scene=1&srcid=051836Xb2aZWt4X85oZP4k8G&sharer_sharetime=1621389350055&sharer_shareid=bce63ba0449f498eb13c109c5eaef06d&exportkey=A2I9cCxluXFCYkF8NqacmEM%3D&pass_ticket=BB1zGDOlf9tuiEOfomZl%2Bns5Dw6zh5OZZ7%2Fm90M4mBpsRWENC%2BaGtiJq7XyxXwnT&wx_header=0#rd)
> “当前，腾讯云的快，主要有几大因素，一是硬件使用了RDMA、持久化内存；同时，软件上采用SPDK技术、并优化链路实现零拷贝技术；另外，EC纠删码和无损压缩技术也保持了成本的优势。”

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

## 金山云
### [金山云+英特尔：混合云存储市场的“创新者”](https://www.sohu.com/a/418794638_351410)
> “金山云使用SPDK之后，用户态的驱动通过轮询硬件而不是依赖中断来完成，这可以降低总延迟和减少延迟差异，并且和内核驱动相比，在每个CPU内核的IOPS上具有更明显的性能优势；同时，SPDK具备I/O路径的无锁高性能模式，避免了所有在I/O关键路径中的锁，而是依靠消息传递在多个线程中共享资源，从而提高了并行性。可以说，SPDK 有效整合了英特尔的网络、数据和存储技术，真正将固态存储介质的性能潜力充分发挥了出来......”

## 中国移动
### [干货分享|SPDK技术简介和一些实践经验](https://mp.weixin.qq.com/s?__biz=MzIzMzk0MDgxNQ==&mid=2247490879&idx=1&sn=40a0e5cbdd734599fb48eb9c112b3fa7&chksm=e8fcaf1fdf8b2609963fd4b8e9ddc65b4fd715d9df462caf7882a5d5845ef45f618eb0dc8ca1&mpshare=1&scene=1&srcid=1215BOAcuZ7lwU2fVkbm4OAr&sharer_sharetime=1608102337386&sharer_shareid=bce63ba0449f498eb13c109c5eaef06d&exportkey=A%2BQX%2BiRdm%2Bom2sojFFMlT%2B4%3D&pass_ticket=%2BFOpaf%2FRhmSk8QlTrXaIrM3MOdG3DByrpKT3%2F1pvRnoDbSG1NVORPrCDLUjU0PZ8&wx_header=0#rd)
> “SPDK能有优异的性能，离不开它优异的线程模型，实际使用过程中核的分配相当重要，从上面可以看出，在后端是ceph的场景下，ceph线程运行的核如果没有规划......”

## 美团
### [Rocksdb加SPDK改善吞吐能力建设](https://mp.weixin.qq.com/s?__biz=MzI3NDA4ODY4MA==&mid=2653337548&idx=1&sn=126be7995677120b5da6f68f78875e61&chksm=f0cb404bc7bcc95d769f6e5abcb6c4e403fc4a2078270b151493277545a7608317c5afa38707&scene=0&xtrack=1&exportkey=A1sqiH%2BMBtpcYEqZYRxO3%2BY%3D&pass_ticket=Yqc82YTsvhRYO%2F9LVG0fQnlhT4AQex%2BS%2BcfddHU25xFgtLVwCovG%2BHck3uYODoz7&wx_header=0#rd)
> “以上便是我们有关rocksdb吞吐能力建设所做的一些改进和尝试，核心内容主要围绕在如何与SPDK做有效整合，从而实现kernal旁路机制，以及如何通过异步化访问来提升整体吞吐。”

### [速度与压缩比如何兼得？压缩算法在构建部署中的优化](https://mp.weixin.qq.com/s?__biz=MzI3NDA4ODY4MA==&mid=2653337496&idx=1&sn=7488f53349a8305402c31fb29a64548d&chksm=f0cb401fc7bcc909d804c39e86118be3b2b219bc5adcbe3c6e0a738745d47df52351560a5f73&scene=0&xtrack=1&exportkey=A3g9BgwANfOTTNkJuJvcc2c%3D&pass_ticket=Yqc82YTsvhRYO%2F9LVG0fQnlhT4AQex%2BS%2BcfddHU25xFgtLVwCovG%2BHck3uYODoz7&wx_header=0#rd)
> “综合以上几点，决定一期采取 ISA-L 的方式加速，可以最稳定并且较高速地提升构建平台的效率”

## 浪潮
### [软硬件结合，分布式数据库ZNBase存储架构优化实践软硬件结合，分布式数据库ZNBase存储架构优化实践](https://baijiahao.baidu.com/s?id=1708408682720278227&wfr=spider&for=pc)
> “由于RocksDB采用LSM-Tree架构，同样也存在一定的问题。比如在大数据量下有比较高的读放大、写放大、空间放大，性能衰减也比较厉害。为了提高ZNBase在海量数据下的性能表现，ZNBase团队结合浪潮的硬件优势，开发了使用SPDK驱动在专用硬件ZNS SSD上进行软硬件融合的存储引擎......”

## 更多SPDK使用案例，请参考[news]({{ baseurl_rel }}/news)页面
