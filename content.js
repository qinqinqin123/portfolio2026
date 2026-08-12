/*
 * 作品集内容文件
 * ---------------
 * 文字：直接修改引号中的内容。
 * 图片：把新图片放进 assets/work/，再修改对应的 src。
 * 顺序：移动 section 或 project 对象即可。
 * 注意保留英文逗号、引号和括号。
 */

window.PORTFOLIO = {
  profile: {
    name: "Qin Yang",
    role: "Visual Designer",
    tagline: "Brand · Information · Engagement",
    intro: "通过品牌、信息与传播设计，帮助企业在不同媒介与利益相关方之间建立清晰、一致的沟通体验。",
    year: "2026",
    email: "yangqin.jean@gmail.com",
  },
  sections: [
    {
      id: "brand",
      number: "01",
      title: "Design for Brand",
      titleZh: "构建品牌视觉",
      description: "建立或延展品牌视觉语言，将品牌定位转化为清晰、统一且能够持续使用的视觉系统，并在不同内容、媒介和传播场景中保持一致性与灵活性。",
      projects: [
        {
          id: "tfs",
          title: "Together for Sustainability",
          subtitle: "微信公众号视觉规范",
          challenge: "TfS 原有全球视觉规范主要面向英文和国际传播场景，无法直接解决中文长文本、微信公众号阅读节奏以及多种内容类型的设计需求。同时，日常内容需要由运营人员持续发布，因此视觉系统不仅要保持全球品牌一致性，也需要降低非设计人员的使用门槛。",
          approach: "我首先梳理 TfS 的全球品牌规范、品牌定位和微信公众号内容结构，将推送划分为长期介绍、日常资讯和重点专题三类，并为不同内容制定相应的视觉策略。在此基础上，我建立了字体、色彩、封面、视频封面、图标、图表、摘要、文末名片及内容组件等完整规范，并在秀米中搭建可重复使用的模板和组件库，使运营团队能够独立完成日常排版，同时通过差异化设计增强重点内容的传播表现。",
          gallery: [
            ["assets/work/tfs/system1.webp", "内容定位"],
            ["assets/work/tfs/system2.webp", "与视觉策略"],
            ["assets/work/tfs/system3.webp", "微信公众号应用"],
          ],
        },
        {
          id: "herbalife",
          title: "Herbalife",
          subtitle: "微信公众号视觉升级",
          challenge: "康宝莱微信公众号需要强化品牌识别，并在首条封面、次条封面、正文、动态 Banner 和文末矩阵等不同内容模块中保持统一。同时，视觉系统需要适应微信公众号的内容结构和高频发布需求，而不能只依赖单次设计。",
          approach: "从康宝莱现有品牌元素中提取绿色、品牌曲线和标志性图形，并结合微信公众号不同内容位置和尺寸要求，建立可重复使用的封面模板、动态 Banner、正文样式及文末矩阵名片。通过模块化的设计规则，使不同类型的推送能够保持一致的品牌露出，同时为后续内容保留灵活的延展空间。",
          gallery: [
            ["assets/work/herbalife/1.webp", "封面模板系统"],
            ["assets/work/herbalife/2.webp", "正文与文末组件"],
            ["assets/work/herbalife/3.webp", "微信公众号应用"],
          ],
        },
        {
          id: "academy",
          title: "APCO Asia Academy",
          subtitle: "员工品牌设计",
          challenge: "APCO Asia Academy 是面向亚洲地区新员工的内部学习与交流项目，需要帮助参与者理解公司业务、文化和跨区域协作方式。项目视觉既要延续 APCO 母品牌的专业形象，又需要具有更年轻、开放和具有参与感的表达，以体现职业成长、文化多样性和团队合作。",
          approach: "我从 APCO 的使命、价值观和品牌视觉中提取核心元素，并将项目定位归纳为 Start、Dynamic 和 Outstanding。视觉概念以 APCO 标志中的字母 A 为基础，将其转化为具有方向感和前进感的箭头图形，形成可组合、可延展的项目标识及辅助图形系统。该视觉语言随后被应用于课程手册、活动日程、证书、胸牌和周边物料中。",
          gallery: [
            ["assets/work/academy/1.webp", "品牌标识与辅助图形"],
            ["assets/work/academy/2.webp", "课程日程与卡片"],
            ["assets/work/academy/3.webp", "员工胸牌"],
          ],
        },
        {
          id: "advamed",
          title: "先进医疗技术协会中国十周年",
          subtitle: "庆典暨医疗技术创新国际论坛",
          challenge: "该活动同时承担 AdvaMed 中国成立十周年纪念和医疗技术创新论坛两种功能，需要兼顾周年庆典的里程碑感、医疗行业的专业性以及政府和国际行业活动所要求的正式感。活动面对多类受众，视觉还需要支持中英文信息和多种现场及传播物料。",
          approach: "我从活动性质、医疗行业语境和 AdvaMed 品牌特质三个维度梳理视觉定位，将“十周年”“医疗创新”和“连接合作”作为核心概念。主视觉以数字 10 和连续线条构成具有延展感的图形，并通过蓝紫渐变建立兼具科技感和纪念感的视觉氛围；随后建立横竖版适配规则，并完成邀请函、活动手册及其他会议传播物料。",
          gallery: [
            ["assets/work/advamed/1.webp", "活动主视觉"],
            ["assets/work/advamed/2.webp", "活动传播物料"],
            ["assets/work/advamed/3.webp", "活动传播物料"],
          ],
        },
      ],
    },
    {
      id: "information",
      number: "02",
      title: "Design for Information",
      titleZh: "信息设计",
      description: "将复杂的数据、文本和专业知识转化为清晰的信息结构，通过品牌化的视觉编码和跨媒介设计，帮助受众更高效地理解、比较和记忆关键信息。",
      projects: [
        {
          id: "reports",
          title: "报告与印刷品设计",
          subtitle: "Editorial & Reports",
          description: "根据文本和原始数据选择合适的视觉载体，为数据匹配图表形式，并将文本组织为清晰的信息结构；同时把品牌色彩、辅助图形与字体灵活应用于不同年份、尺寸和发布场景。",
          gallery: [
            ["assets/work/reports/report1.webp", "中国居民金融素养报告封面"],
            // ["assets/work/reports/report2.webp", "中国居民金融素养报告内页"],
            ["assets/work/reports/report3.webp", "财富健康指数报告封面"],
            ["assets/work/reports/report4.webp", "财富健康指数报告内页"],
            ["assets/work/reports/report5.webp", "财富健康指数报告封面"],
            ["assets/work/reports/report6.webp", "财富健康指数报告内页"],
          ],
        },
        {
          id: "presentations",
          title: "演示设计",
          subtitle: "Presentations & Digital Display",
          description: "通过动态演示和品牌化的信息组织，为发布会、年度大会与可持续发展沟通建立清晰的讲述节奏。",
          gallery: [
            ["assets/work/presentations/pre2.webp", "康宝莱风云大会展示"],
            ["assets/work/presentations/pre1.webp", "ETS 新品牌发布会展示"],
            ["assets/work/presentations/pre3.webp", "百事公司夏季达沃斯可持续报告"],
          ],
        },
        {
          id: "mobile",
          title: "移动端与社交媒体设计",
          subtitle: "Mobile Content",
          description: "针对移动端阅读节奏，将长篇信息拆分成清晰的视觉段落，并根据企业、ESG 与医疗科普内容建立不同的信息层级。",
          gallery: [
            ["assets/work/mobile/mobile.webp", "ESG 报告公众号推送长图"],
          ],
        },
        {
          id: "spatial",
          title: "展览与空间信息设计",
          subtitle: "Exhibition & Spatial Information",
          description: "以数据与参与式信息设计帮助观众理解馆藏、设计史和彼此之间的关系，并将研究内容转化为空间中的观看与交流体验。",
          gallery: [
            ["assets/work/spatial/1.webp", "Behind the Utopia 展览"],
            ["assets/work/spatial/2.webp", "Visualizing Knowledge 活动"],
          ],
        },
      ],
    },
    {
      id: "engagement",
      number: "03",
      title: "Design for Engagement",
      titleZh: "连接品牌与人",
      description: "围绕不同利益相关方的需求与沟通目标，设计能够建立参与、促进理解并传递品牌价值的传播体验。",
      projects: [
        {
          id: "trace",
          title: "The Trace",
          subtitle: "针对 Iittala, Arabia Finland 品牌探索设计",
          challenge: "Iittala 和 Arabia 的陶瓷产品在购买、使用、赠送、收藏和二手流通过程中不断产生新的价值，但这些价值并不完全来自产品功能或品牌宣传，也来自消费者的记忆、传统和个人关系。项目需要从消费者视角理解产品完整生命周期，并探索这些关系如何为品牌价值提供新的线索。",
          approach: "我通过分析 Instagram 上的 #iittala 和 #arabiafinland 内容、采访活跃用户以及调研二手商店，追踪产品在人与人、家庭和市场之间的流动，并归纳消费者赋予产品的功能价值、收藏价值和情感价值。书籍视觉以“痕迹”为核心概念，将可见的使用痕迹和不可见的记忆分别构成 A、B 两册。",
          gallery: [
            ["assets/work/trace/1.webp", "社交媒体数据研究"],
            ["assets/work/trace/2.webp", "书籍内页"],
            ["assets/work/trace/3.webp", "A/B 册封面"],
          ],
        },
        {
          id: "edwards",
          title: "爱德华生命科学",
          subtitle: "入华 20 周年媒体活动设计",
          challenge: "Edwards Lifesciences 入华二十周年活动同时承担纪念品牌长期发展和为进博会预热的媒体沟通功能。项目需要帮助媒体在较短时间内理解公司的最新品牌信息、业务进展及二十年来的重要成果，同时保持医疗科技企业所需要的专业性和可信度。",
          approach: "我围绕品牌现状、在华发展历程和二十周年成果重新梳理传播内容，并将其转化为适合媒体沟通场景的信息结构。在更新品牌手册的同时，我建立了统一的演示视觉语言，并完成活动 PPT 等传播物料。",
          gallery: [
            ["assets/work/edwards/1.webp", "会场易拉宝"],
            ["assets/work/edwards/2.webp", "演示设计"],
            ["assets/work/edwards/3.webp", "公司手册设计"],
          ],
        },
        {
          id: "apco-game",
          title: "APCO 品牌焕新",
          subtitle: "员工互动体验设计",
          challenge: "APCO 在品牌重塑和公司周年庆期间，需要让员工理解新的品牌定位、视觉语言和企业文化。单向的品牌介绍容易停留在信息传达层面，难以让员工真正参与并形成记忆。",
          approach: "我将新品牌中的色彩、图形和核心信息转化为一套大富翁游戏棋盘、卡牌和道具，并将员工熟悉的工作场景、公司制度和团队任务融入游戏机制。参与者在任务闯关、资源选择和团队竞合过程中主动接触品牌内容，使抽象的品牌策略转化为更具体、更具参与感的员工体验。",
          gallery: [
            ["assets/work/apco-game/1.webp", "游戏视觉系统"],
            ["assets/work/apco-game/2.webp", "游戏视觉系统"],
            ["assets/work/apco-game/board-game.webp", "APCO Billionaire 棋盘"],
          ],
        },
      ],
    },
  ],
};
