export const projectsData = [
  {
    id: 1,
    title: '数字华容道-石头迷阵游戏',
    role: 'Java后端开发',
    period: '2026.01-2026.03',
    image: ['/images/stone_maze.jpg', '/images/stone_success.jpg'],
    content: '开发一款桌面数字华容道小游戏，实现数字块打乱、按键盘控制移动、通关判断等核心功能，适配不同操作系统，兼顾交互体验与代码可维护性，完成从需求梳理到落地测试的全流程开发。',
    core: [
      '独立基于Java Swing完成数字华容道全流程开发，搭建GUI界面，实现数字块移动、菜单交互、步数展示等功能。',
      '设计二维数组状态管理，优化打乱算法规避无解问题，实现故障移动与通关判断核心规则。',
      '规范代码结构，抽象常量、使用枚举，解决界面图层覆盖、逻辑异常等问题，保障程序稳定。',
      '成功完成可运行桌面游戏，覆盖打乱、移动、通关、重置等完整流程，运行无异常。',
      '扎实掌握Swing界面编程、事件驱动等技术，锻炼独立开发与问题排查能力，积累GUI开发实战经验。'
    ],
    technologies: ['Java', 'Swing', 'GUI'],
    project_background: '数字拼图是经典的益智游戏，本项目旨在通过Java图形界面编程实现一个交互性强的拼图游戏，锻炼玩家的逻辑思维能力和空间想象能力。',
    project_objective: '开发一个功能完整、界面美观的4×4数字拼图游戏，实现游戏初始化、随机打乱、键盘控制、步数统计、胜利检测和游戏重置等核心功能。',
    project_core_content: '游戏采用4×4的网格布局，包含1-15号数字色块和一个空白块。玩家通过键盘方向键控制空白块移动，相邻的数字块随之交换位置。系统通过随机移动空白块100次来打乱拼图顺序，确保每次生成的拼图都有解。游戏过程中实时统计移动步数，当所有数字按1-15顺序排列且空白块位于右下角时，判定为胜利并显示通关图片。',
    core_function_modules: [
      { module_name: 'frame_initialization', description: '初始化游戏主窗口，设置标题、大小、关闭方式和布局管理器' },
      { module_name: 'image_display', description: '根据二维数组数据绘制4×4数字色块矩阵，实现界面刷新和背景图展示' },
      { module_name: 'random_shuffle', description: '通过随机移动空白块打乱拼图顺序，确保生成的拼图一定可解' },
      { module_name: 'keyboard_control', description: '监听键盘方向键事件，控制数字块的上下左右移动和数据交换' },
      { module_name: 'win_detection', description: '对比当前数据与目标数据，判断拼图是否完成并显示胜利提示' },
      { module_name: 'menu_system', description: '提供系统菜单，支持游戏重启和退出功能' }
    ]
  },
  {
    id: 2,
    title: '智能扫地机器人客服系统',
    role: 'AI应用开发工程师',
    period: '2026.04-2026.06',
    image: ['/images/agent_robot_1.jpg', '/images/agent_robot_2.jpg'],
    content: '基于LangGraph开发智能客服系统，集成RAG检索增强技术，实现自主推理与多工具协同调用，为用户提供专业的产品咨询与故障排查服务。',
    core: [
      '基于LangGraph构建ReAct模式智能体，思考-行动-观察推理闭环',
      '搭建ChromaDB向量数据库，实现文档自动加载、切分与向量化',
      '封装7种工具函数（RAG检索、天气查询等），支持多工具协同调用',
      '基于Streamlit开发流式交互界面，实现响应实时输出',
      '完成完整系统开发部署，支持多轮对话与专业知识库查询'
    ],
    technologies: ['Python', 'LangGraph', 'LangChain', 'Streamlit', 'ChromaDB'],
    project_background: '随着AI技术的发展，智能客服系统已成为企业提升服务效率的重要手段。本项目旨在基于大语言模型和Agent技术，构建一个具备自主推理能力的智能客服系统，为用户提供专业、高效的产品咨询服务。',
    project_objective: '开发一个基于LangGraph的智能客服系统，实现多工具协同调用、RAG检索增强、流式交互等核心功能，为扫地机器人产品提供专业的售前咨询和售后故障排查服务。',
    project_core_content: '系统采用LangGraph框架构建ReAct模式智能体，实现思考-行动-观察的推理闭环。搭建ChromaDB向量数据库存储产品知识库，支持文档自动加载、文本切分和向量化检索。封装7种工具函数，包括RAG检索、天气查询、计算器等，智能体可根据用户需求自主选择并调用合适的工具。基于Streamlit开发前端交互界面，实现流式响应输出，提升用户体验。',
    core_function_modules: [
      { module_name: 'agent_framework', description: '基于LangGraph构建ReAct模式智能体，实现思考-行动-观察推理闭环' },
      { module_name: 'vector_database', description: '搭建ChromaDB向量数据库，实现文档自动加载、切分与向量化' },
      { module_name: 'tool_functions', description: '封装RAG检索、天气查询、计算器等7种工具函数，支持多工具协同调用' },
      { module_name: 'streamlit_interface', description: '基于Streamlit开发流式交互界面，实现响应实时输出' },
      { module_name: 'knowledge_base', description: '构建扫地机器人产品知识库，支持文档检索与问答' },
      { module_name: 'dialog_manager', description: '实现多轮对话管理，支持上下文理解与意图识别' }
    ]
  },
  {
    id: 3,
    title: '中草药知识科普网站',
    role: '全栈开发',
    period: '2026.03-2026.06',
    image: ['/images/herb_home.jpg', '/images/herb_detail.jpg'],
    content: '开发一款中草药知识科普网站，实现草药浏览、药方查询、食疗推荐等功能，支持用户登录注册、收藏分享，提供完整的中草药知识体系展示。',
    core: [
      '基于Vue.js + Spring Boot实现前后端分离开发',
      '设计中草药、药方、食疗等多模块数据模型，完成CRUD操作',
      '实现用户登录注册、收藏管理、消息通知等用户功能',
      '开发首页轮播、草药分类浏览、详情展示、药方查询等核心功能',
      '完成前后端接口联调，优化分页查询、图片资源管理等性能问题'
    ],
    technologies: ['Vue.js', 'Spring Boot', 'MyBatis', 'MySQL', 'Vite'],
    project_background: '中草药是中国传统医学的瑰宝，随着人们健康意识的提高，中草药知识科普需求日益增长。本项目旨在通过互联网技术，搭建一个中草药知识科普平台，为用户提供全面、系统的中草药知识服务。',
    project_objective: '开发一个功能完整的中草药知识科普网站，实现草药浏览、药方查询、食疗推荐、用户管理等核心功能，构建完整的中草药知识体系展示平台。',
    project_core_content: '网站采用Vue.js + Spring Boot前后端分离架构，前端使用Vite构建工具，后端采用MyBatis进行数据库操作。设计中草药、药方、食疗等多模块数据模型，实现完整的CRUD操作。用户模块支持登录注册、收藏管理、消息通知等功能。首页展示轮播图和热门草药，草药分类浏览支持按药性、功效等维度筛选，药方查询支持多条件搜索，食疗推荐提供养生食谱。',
    core_function_modules: [
      { module_name: 'herb_browse', description: '实现草药分类浏览、详情展示、图片管理等功能' },
      { module_name: 'recipe_query', description: '开发药方查询系统，支持多条件搜索和详情展示' },
      { module_name: 'diet_recommend', description: '实现食疗推荐功能，提供养生食谱和食材搭配' },
      { module_name: 'user_management', description: '开发用户登录注册、收藏管理、消息通知等功能' },
      { module_name: 'homepage_banner', description: '实现首页轮播图和热门内容推荐' },
      { module_name: 'search_engine', description: '开发全站搜索功能，支持草药、药方、食疗的统一搜索' }
    ]
  },
  {
    id: 4,
    title: '智能学习辅助系统',
    role: 'Java后端开发',
    period: '2025.09-2025.11',
    image: '/images/student-system.jpg',
    content: '开发智能学习辅助系统，提升后台管理效率，基于Spring Boot + MyBatis-Plus构建后端架构。',
    core: [
      '基于Spring Boot + MyBatis-Plus构建后端架构，采用MVC分层模式开发，实现了部门管理、员工增删改查（CRUD）等核心业务模块。',
      '利用MyBatis-Plus的代码生成器与条件构造器，大幅减少SQL编写量；通过MyBatis动态SQL（<if>、<foreach>）处理复杂的多条件查询需求，提升了数据检索的灵活性。',
      '集成Spring Security（或过滤器/拦截器）+ JWT（JSON Web Token）技术，实现了无状态的统一登录认证与授权，有效防止了未授权访问，保障了系统接口安全。',
      '成功上线并稳定运行，系统响应时间控制在200ms以内，支持QPS（每秒查询率）达到500+。',
      '通过模块化开发与代码复用，将核心业务功能的开发效率提升了30%以上。'
    ],
    technologies: ['Java', 'Spring Boot', 'MyBatis-Plus', 'Spring Security', 'JWT'],
    project_background: '随着教育信息化的发展，学校和培训机构需要高效的学习辅助系统来管理教学资源和学生信息。本项目旨在开发一个智能学习辅助系统，提升后台管理效率，为教学活动提供技术支持。',
    project_objective: '开发一个基于Spring Boot的智能学习辅助系统后端，实现用户管理、课程管理、学习进度跟踪等核心功能，保障系统安全性和性能。',
    project_core_content: '系统基于Spring Boot + MyBatis-Plus构建后端架构，采用MVC分层模式开发。实现了部门管理、员工管理、学生管理等核心业务模块的CRUD操作。利用MyBatis-Plus的代码生成器与条件构造器减少SQL编写量，通过动态SQL处理复杂查询需求。集成Spring Security + JWT实现无状态的统一登录认证与授权。系统响应时间控制在200ms以内，支持QPS达到500+。',
    core_function_modules: [
      { module_name: 'user_management', description: '实现用户注册、登录、角色权限管理等功能' },
      { module_name: 'department_management', description: '开发部门管理模块，支持部门增删改查和层级管理' },
      { module_name: 'employee_management', description: '实现员工信息管理，支持CRUD操作和条件查询' },
      { module_name: 'course_management', description: '开发课程管理模块，支持课程发布和学习进度跟踪' },
      { module_name: 'authentication', description: '集成Spring Security + JWT实现无状态登录认证与授权' },
      { module_name: 'data_query', description: '利用MyBatis-Plus和动态SQL实现高效的数据检索' }
    ]
  },
  {
    id: 5,
    title: '个人网站',
    role: '全栈开发',
    period: '2026.04-2026.7',
    image: '/images/personal-site.jpg',
    content: '基于React + Tailwind CSS开发的个人作品集展示网站，包含首页、关于我、项目成果、技能展示、教育经历、工作经验、联系我、博客分享和未来规划等多个模块，支持响应式布局和表单交互功能。',
    core: [
      '基于React + Tailwind CSS实现现代化UI设计，采用组件化开发模式提高代码复用性',
      '使用React Router实现页面路由管理，支持单页应用的页面切换',
      '实现响应式布局，适配桌面端与移动端设备，提升用户体验',
      '集成EmailJS服务实现留言板功能，支持表单验证和提交反馈',
      '采用HashRouter路由模式，适配静态网站托管环境',
      '设计项目分类展示系统，支持代表作品和分类项目的分级展示'
    ],
    technologies: ['React', 'Tailwind CSS', 'React Router', 'Vite', 'EmailJS', 'JavaScript'],
    project_background: '个人网站是开发者展示个人技术能力和项目成果的重要平台，本项目旨在通过现代化的Web技术，搭建一个功能完整、界面美观的个人作品集网站，为求职和技术交流提供支持。',
    project_objective: '开发一个功能完整、界面美观的个人作品集展示网站，实现个人介绍、项目展示、技能展示、教育经历、联系方式等核心模块，支持响应式布局和表单交互功能。',
    project_core_content: '网站采用React组件化开发模式，包含Header导航组件和Footer底部组件，主页面路由涵盖首页、关于我、项目成果、项目详情、技能展示、教育经历、工作经验、联系我、博客分享和未来规划等多个模块。首页展示个人定位和核心技能标签，项目页面支持代表作品和分类项目的分级展示，联系页面集成EmailJS实现留言板功能，支持表单验证和提交成功/失败反馈。网站采用Tailwind CSS实现现代化样式设计，支持响应式布局适配不同设备屏幕。',
    core_function_modules: [
      { module_name: 'header_navigation', description: '实现顶部导航栏组件，支持页面跳转和响应式菜单切换' },
      { module_name: 'home_page', description: '首页展示个人定位、核心技能标签和项目经验摘要' },
      { module_name: 'about_page', description: '关于我页面展示个人基础信息、成长历程和兴趣爱好' },
      { module_name: 'projects_page', description: '项目成果页面支持代表作品卡片展示和分类项目列表' },
      { module_name: 'project_detail_page', description: '项目详情页面展示项目背景、目标、核心内容和功能模块' },
      { module_name: 'skills_page', description: '技能展示页面展示专业技能和技术栈' },
      { module_name: 'education_page', description: '教育经历页面展示学历背景和学习经历' },
      { module_name: 'experience_page', description: '工作经验页面展示实习和项目经历' },
      { module_name: 'contact_page', description: '联系我页面包含联系方式和留言板功能，集成EmailJS服务' },
      { module_name: 'blog_page', description: '博客分享页面展示技术文章和学习心得' },
      { module_name: 'plan_page', description: '未来规划页面展示个人发展方向和目标' },
      { module_name: 'responsive_layout', description: '响应式布局设计，适配桌面端与移动端设备' }
    ]
  },
  {
    id: 6,
    title: '新闻数据爬取',
    role: '数据采集',
    period: '2024.05-2024.06',
    image: '/images/douban-movie.jpg',
    content: '使用Python的Requests、BeautifulSoup爬取新华网国际板块新闻，筛选2025年相关内容、提取关键信息，通过csv保存数据，设置随机延时确保爬取稳定性。',
    core: [
      '成功爬取新华网国际板块新闻数据，包含新闻标题、发布时间、内容摘要等信息',
      '使用BeautifulSoup解析HTML，提取结构化数据',
      '实现数据清洗，处理异常数据和缺失值',
      '将爬取结果保存为CSV文件，便于后续分析使用',
      '设置随机延时，避免被目标网站封禁IP'
    ],
    technologies: ['Python', 'Requests', 'BeautifulSoup', 'CSV'],
    project_background: '新闻数据是了解国际形势和社会热点的重要来源，本项目旨在通过网络爬虫技术，自动采集新华网国际板块的新闻数据，为后续的数据分析和舆情监测提供数据支持。',
    project_objective: '开发一个新闻数据爬取程序，实现新华网国际板块新闻的自动采集、数据清洗和结构化存储。',
    project_core_content: '程序使用Python的Requests库发送HTTP请求，获取新华网国际板块的HTML页面。使用BeautifulSoup解析HTML内容，提取新闻标题、发布时间、内容摘要等关键信息。实现数据清洗逻辑，处理异常数据和缺失值。将爬取结果保存为CSV文件，便于后续分析使用。设置随机延时，避免被目标网站封禁IP，确保爬取稳定性。',
    core_function_modules: [
      { module_name: 'http_request', description: '使用Requests库发送HTTP请求，获取目标网页内容' },
      { module_name: 'html_parsing', description: '使用BeautifulSoup解析HTML，提取新闻标题、时间、内容等信息' },
      { module_name: 'data_cleaning', description: '实现数据清洗逻辑，处理异常数据和缺失值' },
      { module_name: 'data_storage', description: '将爬取结果保存为CSV文件，支持数据导出' },
      { module_name: 'anti_block', description: '设置随机延时和请求头伪装，避免被目标网站封禁' },
      { module_name: 'date_filter', description: '筛选指定年份的新闻内容，支持时间范围过滤' }
    ]
  },
  {
    id: 7,
    title: '招聘网站数据爬取',
    role: '数据采集',
    period: '2024.07-2024.08',
    image: '/images/job-scraping.jpg',
    content: '爬取主流招聘网站的职位信息，包括职位名称、公司、薪资、地点、要求等，支持多城市职位搜索。',
    core: [
      '使用Selenium模拟浏览器操作，爬取动态加载的招聘数据',
      '通过XPath定位元素，准确提取职位名称、公司、薪资等信息',
      '实现多城市职位搜索功能，支持批量爬取',
      '将数据保存为Excel文件，支持数据筛选和分析',
      '实现自动翻页和数据去重，提升爬取效率'
    ],
    technologies: ['Python', 'Selenium', 'XPath', 'pandas'],
    project_background: '招聘数据对于求职者了解市场行情和职业发展规划具有重要参考价值。本项目旨在通过网络爬虫技术，自动采集主流招聘网站的职位信息，为求职者提供全面的就业市场数据。',
    project_objective: '开发一个招聘数据爬取程序，实现多城市职位信息的自动采集、数据清洗和结构化存储。',
    project_core_content: '程序使用Selenium模拟浏览器操作，处理动态加载的网页内容。通过XPath定位元素，准确提取职位名称、公司名称、薪资范围、工作地点、任职要求等信息。实现多城市职位搜索功能，支持批量爬取多个城市的招聘数据。使用pandas将数据保存为Excel文件，支持数据筛选和分析。实现自动翻页和数据去重逻辑，提升爬取效率和数据质量。',
    core_function_modules: [
      { module_name: 'browser_automation', description: '使用Selenium模拟浏览器操作，处理动态加载的网页' },
      { module_name: 'element_extraction', description: '通过XPath定位元素，提取职位名称、公司、薪资等信息' },
      { module_name: 'multi_city_search', description: '实现多城市职位搜索功能，支持批量爬取' },
      { module_name: 'data_export', description: '将数据保存为Excel文件，支持数据筛选和分析' },
      { module_name: 'auto_pagination', description: '实现自动翻页功能，提升爬取效率' },
      { module_name: 'data_deduplication', description: '实现数据去重逻辑，确保数据质量' }
    ]
  },
  {
    id: 8,
    title: '微博热点话题信息爬取',
    role: '数据采集',
    period: '2024.09-2024.10',
    image: '/images/weibo-hot.jpg',
    content: '爬取微博热搜榜单，获取话题标题、热度、讨论量、阅读量等数据，实现实时数据监控与趋势分析。',
    core: [
      '调用微博API接口，获取实时热搜榜单数据',
      '解析JSON响应，提取话题标题、热度、讨论量等信息',
      '实现定时任务，自动采集热搜数据',
      '分析热点趋势，生成数据统计报告',
      '实现数据可视化展示，直观呈现热点变化'
    ],
    technologies: ['Python', 'Requests', 'JSON', '定时任务', '数据可视化'],
    project_background: '微博作为国内最大的社交媒体平台之一，其热搜榜单反映了社会热点和公众关注点。本项目旨在通过API接口获取微博热搜数据，实现实时数据监控和趋势分析。',
    project_objective: '开发一个微博热搜数据采集与分析系统，实现实时数据采集、趋势分析和可视化展示。',
    project_core_content: '系统调用微博API接口，获取实时热搜榜单数据。解析JSON响应，提取话题标题、热度值、讨论量、阅读量等信息。实现定时任务，自动采集热搜数据并存储。分析热点趋势，识别热门话题的变化规律，生成数据统计报告。使用数据可视化工具，直观呈现热点变化趋势和话题分布。',
    core_function_modules: [
      { module_name: 'api_integration', description: '调用微博API接口，获取实时热搜榜单数据' },
      { module_name: 'json_parsing', description: '解析JSON响应，提取话题标题、热度、讨论量等信息' },
      { module_name: 'scheduled_task', description: '实现定时任务，自动采集热搜数据' },
      { module_name: 'trend_analysis', description: '分析热点趋势，生成数据统计报告' },
      { module_name: 'data_visualization', description: '实现数据可视化展示，直观呈现热点变化' },
      { module_name: 'data_storage', description: '存储历史热搜数据，支持数据回溯和对比分析' }
    ]
  },
  {
    id: 9,
    title: '灯带消消乐',
    role: '硬件开发',
    period: '2026.02-2026.03',
    image: '/images/mcu-led.jpg',
    content: '基于STM32单片机开发的灯带消消乐游戏，实现LED灯带的点亮、熄灭、滑动消除等交互效果，支持多种游戏模式。',
    core: [
      '完成STM32单片机最小系统设计与焊接',
      '实现LED灯带驱动电路设计，支持RGB颜色控制',
      '开发消消乐游戏逻辑，支持滑动消除、连击加分等功能',
      '使用定时器中断实现游戏帧率控制，确保流畅交互体验',
      '设计多种游戏模式，提升游戏趣味性'
    ],
    technologies: ['STM32', 'GPIO', 'LED灯带', '定时器中断', 'PWM'],
    project_background: '随着物联网和嵌入式技术的发展，基于单片机的互动游戏越来越受到欢迎。本项目旨在通过STM32单片机开发一个灯带消消乐游戏，结合硬件电路和软件算法，实现有趣的交互体验。',
    project_objective: '开发一个基于STM32单片机的灯带消消乐游戏，实现LED灯带控制、游戏逻辑、用户交互等核心功能。',
    project_core_content: '项目基于STM32单片机开发，完成最小系统设计与焊接。设计LED灯带驱动电路，支持RGB颜色控制。开发消消乐游戏逻辑，实现点亮、熄灭、滑动消除等交互效果，支持连击加分功能。使用定时器中断实现游戏帧率控制，确保流畅的交互体验。设计多种游戏模式，提升游戏趣味性和挑战性。',
    core_function_modules: [
      { module_name: 'hardware_design', description: '完成STM32单片机最小系统设计与焊接' },
      { module_name: 'led_driver', description: '实现LED灯带驱动电路设计，支持RGB颜色控制' },
      { module_name: 'game_logic', description: '开发消消乐游戏逻辑，支持滑动消除、连击加分等功能' },
      { module_name: 'timing_control', description: '使用定时器中断实现游戏帧率控制' },
      { module_name: 'user_interaction', description: '实现用户输入检测和游戏交互逻辑' },
      { module_name: 'game_modes', description: '设计多种游戏模式，提升游戏趣味性' }
    ]
  },
  {
    id: 10,
    title: '按键发声装置',
    role: '硬件开发',
    period: '2026.01-2026.02',
    image: '/images/mcu-beeper.jpg',
    content: '基于STM32单片机开发的按键发声装置，实现不同按键对应不同音调的音效输出，支持音乐播放功能。',
    core: [
      '设计按键矩阵电路，支持8个独立按键输入',
      '实现蜂鸣器PWM驱动，支持不同频率音调输出',
      '开发按键扫描算法，支持长按、短按识别',
      '实现简单音乐播放功能，支持多音符组合输出',
      '优化按键消抖处理，提升操作准确性'
    ],
    technologies: ['STM32', 'GPIO', '蜂鸣器', '定时器', '按键扫描'],
    project_background: '电子乐器和发声装置是嵌入式系统的常见应用场景。本项目旨在通过STM32单片机开发一个按键发声装置，实现不同按键对应不同音调的音效输出，为用户提供有趣的音乐体验。',
    project_objective: '开发一个基于STM32单片机的按键发声装置，实现按键输入检测、蜂鸣器驱动、音调输出等核心功能。',
    project_core_content: '项目基于STM32单片机开发，设计按键矩阵电路，支持8个独立按键输入。实现蜂鸣器PWM驱动，支持不同频率的音调输出。开发按键扫描算法，支持长按、短按识别。实现简单音乐播放功能，支持多音符组合输出。优化按键消抖处理，提升操作准确性和响应速度。',
    core_function_modules: [
      { module_name: 'keyboard_circuit', description: '设计按键矩阵电路，支持8个独立按键输入' },
      { module_name: 'buzzer_driver', description: '实现蜂鸣器PWM驱动，支持不同频率音调输出' },
      { module_name: 'key_scanning', description: '开发按键扫描算法，支持长按、短按识别' },
      { module_name: 'music_player', description: '实现简单音乐播放功能，支持多音符组合输出' },
      { module_name: 'debounce_processing', description: '优化按键消抖处理，提升操作准确性' },
      { module_name: 'tone_control', description: '实现音调控制逻辑，支持不同音调的生成' }
    ]
  }
]

export const projectCategories = [
  {
    name: '网站项目',
    projects: [4, 3, 5]
  },
  {
    name: '数据爬取及处理',
    projects: [6, 7, 8]
  },
  {
    name: '智能客服-Agent应用',
    projects: [2]
  },
  {
    name: 'Java小游戏',
    projects: [1]
  },
  {
    name: '单片机项目',
    isHardware: true,
    projects: [9, 10]
  }
]

export const featuredProjects = [1, 2, 3]

export const awards = [
  '2024年第九届"LSCAT"杯浙江省笔译大赛优胜奖',
  '2023-2024学年浙江省奖学金',
  '2023年一等奖学金',
  '第十六届全国大学生数学竞赛（非数学A类）优胜奖',
  '2023年优秀团员',
  '2024-2025学年第一学期社会实践先进个人'
]