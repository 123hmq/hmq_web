import { Link } from 'react-router-dom'

const Projects = () => {
  // 代表作品
  const featuredProjects = [
    {
      id: 1,
      title: '数字华容道-石头迷阵游戏',
      role: 'Java后端开发',
      period: '2026.01-2026.03',
      image: ['/images/stone_maze.jpg','/images/stone_success.jpg'],
      description: '独立开发一款桌面数字华容道小游戏，实现数字块打、按键盘控制移动、通关判断等核心功能，适配不同操作系统，兼顾交互体验与代码可维护性。',
      technologies: ['Java', 'Swing', 'GUI'],
      achievements: [
        '独立基于Java Swing完成数字华容道全流程开发',
        '设计二维数组状态管理，优化打乱算法规避无解问题',
        '规范代码结构，抽象常量、使用枚举，解决界面图层覆盖问题',
        '成功完成可运行桌面游戏，覆盖打乱、移动、通关、重置等完整流程'
      ]
    },
    {
      "id": 2,
      "title": "智能扫地机器人客服系统",
      "role": "AI应用开发工程师",
      "period": "2026.04-2026.06",
      "image": ['/images/agent_robot_1.jpg','/images/agent_robot_2.jpg'],
      "description": "基于LangGraph开发智能客服系统，集成RAG检索增强技术，实现自主推理与多工具协同调用，为用户提供专业的产品咨询与故障排查服务。",
      "technologies": ["Python", "LangGraph", "LangChain", "Streamlit"],
      "achievements": [
          "基于LangGraph构建ReAct模式智能体，思考-行动-观察推理闭环",
          "搭建ChromaDB向量数据库，实现文档自动加载、切分与向量化",
          "封装7种工具函数（RAG检索、天气查询等）,支持多工具协同调用",
          "基于Streamlit开发流式交互界面，实现响应实时输出",
      ]
    },
    {
      id: 3,
      title: '中草药知识科普网站',
      role: '全栈开发',
      period: '2026.03-2026.06',
      image: ['/images/herb_home.jpg', '/images/herb_detail.jpg'],
      description: '开发一款中草药知识科普网站，实现草药浏览、药方查询、食疗推荐等功能，支持用户登录注册、收藏分享，提供完整的中草药知识体系展示。',
      technologies: ['Vue.js', 'Spring Boot', 'MyBatis', 'MySQL', 'Vite'],
      achievements: [
          '基于Vue.js + Spring Boot实现前后端分离开发',
          '设计中草药、药方、食疗等多模块数据模型，完成CRUD操作',
          '实现用户登录注册、收藏管理、消息通知等用户功能',
          '开发首页轮播、草药分类浏览、详情展示、药方查询等核心功能',
          '完成前后端接口联调，优化分页查询、图片资源管理等性能问题'
      ]
    }
  ]

  // 项目分类
  const projectCategories = [
    {
      name: '网站项目',
      projects: [
        {
          id: 4,
          title: '智能学习辅助系统',
          role: 'Java后端开发',
          period: '2025.09-2025.11',
          image: '/images/student-system.jpg',
          description: '开发智能学习辅助系统，提升后台管理效率，基于Spring Boot + MyBatis-Plus构建后端架构。',
          technologies: ['Java', 'Spring Boot', 'MyBatis-Plus', 'Spring Security'],
          achievements: [
            '基于Spring Boot + MyBatis-Plus构建后端架构，采用MVC分层模式开发',
            '利用MyBatis-Plus的代码生成器与条件构造器，大幅减少SQL编写量',
            '集成Spring Security + JWT技术，实现无状态的统一登录认证与授权',
            '系统响应时间控制在200ms以内，支持QPS达到500+'
          ]
        },
        {
          id: 3,
          title: '中草药科普网站',
          role: '全栈开发',
          period: '2026.03-2026.06',
          image: '/images/herb_site.jpg',
          description: '基于Vue.js + Spring Boot开发的中草药知识科普网站，实现草药浏览、药方查询、食疗推荐等功能，支持用户登录注册、收藏分享。',
          technologies: ['Vue.js', 'Spring Boot', 'MyBatis', 'MySQL', 'Vite'],
          achievements: [
            '基于Vue.js + Spring Boot实现前后端分离开发',
            '设计中草药、药方、食疗等多模块数据模型，完成CRUD操作',
            '实现用户登录注册、收藏管理、消息通知等用户功能',
            '开发首页轮播、草药分类浏览、详情展示、药方查询等核心功能'
          ]
        },
        {
          id: 5,
          title: '个人网站',
          role: '全栈开发',
          period: '2026.05-2026.06',
          image: '/images/personal-site.jpg',
          description: '个人作品集展示网站，展示个人技能、项目成果、荣誉奖项等内容，采用现代化设计风格，支持响应式布局。',
          technologies: ['React', 'Tailwind CSS', 'React Router', 'Vite'],
          achievements: [
            '基于React + Tailwind CSS实现现代化UI设计',
            '采用组件化开发模式，提高代码复用性与可维护性',
            '使用React Router实现页面路由管理，支持单页应用',
            '实现响应式布局，适配桌面端与移动端设备'
          ]
        }
      ]
    },
    {
      name: '数据爬取及处理',
      projects: [
        {
          id: 6,
          title: '新闻数据爬取',
          role: '数据采集',
          period: '2024.05-2024.06',
          image: '/images/douban-movie.jpg',
          description: '爬取豆瓣电影Top250榜单数据，包括电影名称、评分、导演、演员、简介等信息，实现数据清洗与结构化存储。',
          technologies: ['Python', 'Requests', 'BeautifulSoup', 'CSV'],
          achievements: [
            '成功爬取豆瓣电影Top250完整数据，包含电影名称、评分、导演、演员等信息',
            '使用BeautifulSoup解析HTML，提取结构化数据',
            '实现数据清洗，处理异常数据和缺失值',
            '将爬取结果保存为CSV文件，便于后续分析使用'
          ]
        },
        {
          id: 7,
          title: '招聘网站数据爬取',
          role: '数据采集',
          period: '2024.07-2024.08',
          image: '/images/job-scraping.jpg',
          description: '爬取主流招聘网站的职位信息，包括职位名称、公司、薪资、地点、要求等，支持多城市职位搜索。',
          technologies: ['Python', 'Selenium', 'XPath', 'pandas'],
          achievements: [
            '使用Selenium模拟浏览器操作，爬取动态加载的招聘数据',
            '通过XPath定位元素，准确提取职位名称、公司、薪资等信息',
            '实现多城市职位搜索功能，支持批量爬取',
            '将数据保存为Excel文件，支持数据筛选和分析'
          ]
        },
        {
          id: 8,
          title: '微博热点话题信息爬取',
          role: '数据采集',
          period: '2024.09-2024.10',
          image: '/images/weibo-hot.jpg',
          description: '爬取微博热搜榜单，获取话题标题、热度、讨论量、阅读量等数据，实现实时数据监控与趋势分析。',
          technologies: ['Python', 'Requests', 'JSON', '定时任务'],
          achievements: [
            '调用微博API接口，获取实时热搜榜单数据',
            '解析JSON响应，提取话题标题、热度、讨论量等信息',
            '实现定时任务，自动采集热搜数据',
            '分析热点趋势，生成数据统计报告'
          ]
        }
      ]
    },
    {
      name: '智能客服-Agent应用',
      projects: [
        {
          id: 2,
          title: '智能扫地机器人客服系统',
          role: '全栈开发',
          period: '2025.07-2025.09',
          image: '/images/robot-service.jpg',
          description: '基于LangGraph构建智能体，实现多工具协同的智能客服系统，支持产品咨询、故障排查等场景。',
          technologies: ['Python', 'LangGraph', 'ChromaDB', 'Streamlit', 'LangChain'],
          achievements: [
            '基于LangGraph构建ReAct模式智能体，实现思考-行动-观察推理闭环',
            '搭建ChromaDB向量数据库，实现文档自动加载、切分与向量化',
            '封装7种工具函数（RAG检索、天气查询等），支持多工具协同调用',
            '基于Streamlit开发流式交互界面，实现响应式实时输出',
            '完成完整系统开发部署，支持多轮对话与专业知识库查询'
          ]
        }
      ]
    },
    {
      name: 'Java小游戏',
      projects: [
        {
          id: 9,
          title: '数字华容道-石头迷阵游戏',
          role: '全栈开发',
          period: '2025.01-2025.03',
          image: ['/images/stone_maze.jpg', '/images/stone_success.jpg'],
          description: '开发一款基于Web的数字华容道游戏，玩家需要通过滑动数字方块，将打乱的数字按顺序排列。',
          technologies: ['Java', 'Spring Boot', 'MySQL', 'Vue.js', 'WebSocket'],
          achievements: [
            '实现数字华容道核心算法，支持多种难度级别',
            '开发用户注册登录、游戏记录保存等功能',
            '实现游戏实时对战功能，支持双人在线竞技',
            '设计响应式界面，适配不同设备屏幕'
          ]
        }
      ]
    },
    {
      name: '单片机项目',
      isHardware: true,
      projects: [
        {
          id: 10,
          title: '灯带消消乐',
          role: '硬件开发',
          period: '2026.02-2026.03',
          image: '/images/mcu-led.jpg',
          description: '基于STM32单片机开发的灯带消消乐游戏，实现LED灯带的点亮、熄灭、滑动消除等交互效果，支持多种游戏模式。',
          technologies: ['STM32', 'GPIO', 'LED灯带', '定时器中断', 'PWM'],
          achievements: [
            '完成STM32单片机最小系统设计与焊接',
            '实现LED灯带驱动电路设计，支持RGB颜色控制',
            '开发消消乐游戏逻辑，支持滑动消除、连击加分等功能',
            '使用定时器中断实现游戏帧率控制，确保流畅交互体验'
          ]
        },
        {
          id: 11,
          title: '按键发声装置',
          role: '硬件开发',
          period: '2026.01-2026.02',
          image: '/images/mcu-beeper.jpg',
          description: '基于STM32单片机开发的按键发声装置，实现不同按键对应不同音调的音效输出，支持音乐播放功能。',
          technologies: ['STM32', 'GPIO', '蜂鸣器', '定时器', '按键扫描'],
          achievements: [
            '设计按键矩阵电路，支持8个独立按键输入',
            '实现蜂鸣器PWM驱动，支持不同频率音调输出',
            '开发按键扫描算法，支持长按、短按识别',
            '实现简单音乐播放功能，支持多音符组合输出'
          ]
        }
      ]
    }
  ]

  // 荣誉奖项
  const awards = [
    '2024年第九届“LSCAT”杯浙江省笔译大赛优胜奖',
    '2023-2024学年浙江省奖学金',
    '2023年一等奖学金',
    '第十六届全国大学生数学竞赛（非数学A类）优胜奖',
    '2023年优秀团员',
    '2024-2025学年第一学期社会实践先进个人'
  ]

  return (
    <section className="section pt-24 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #ffffff 0%, #f0fdf4 25%, #ffffff 50%, #dcfce7 75%, #ffffff 100%)' }}>
      {/* 装饰性绿色圆形 */}
      <div className="absolute top-20 -left-40 w-80 h-80 bg-green-100 rounded-full opacity-40 blur-3xl">1</div>
      <div className="absolute top-1/2 -right-32 w-64 h-64 bg-green-50 rounded-full opacity-30 blur-3xl">2</div>
      <div className="absolute bottom-20 left-1/4 w-48 h-48 bg-emerald-50 rounded-full opacity-25 blur-2xl">3</div>
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-left text-gray-800 mb-4">项目成果</h2>
        
        {/* 代表作品 */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-gray-800 mb-8 text-center">代表作品</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProjects.map((project) => (
              <Link to={`/projects/${project.id}`} key={project.id} className="card group cursor-pointer overflow-hidden">
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h4 className="text-xl font-semibold text-gray-800 group-hover:text-primary transition-colors duration-300">{project.title}</h4>
                    <span className="px-3 py-1 bg-primary-100 text-primary-800 rounded-full text-sm">{project.role}</span>
                  </div>
                  <p className="text-sm text-gray-500 mb-4">{project.period}</p>
                  <p className="text-gray-700 mb-6">{project.description}</p>
                  <div className="mb-6">
                    <h5 className="text-sm font-medium text-gray-600 mb-2">核心成果</h5>
                    <ul className="space-y-2">
                      {project.achievements.map((achievement, index) => (
                        <li key={index} className="flex items-start space-x-2">
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-gray-600 text-sm">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, index) => (
                      <span key={index} className="px-2 py-1 bg-primary-100 text-primary-800 rounded-full text-xs">{tech}</span>
                    ))}
                  </div>
                  <div className="flex justify-end">
                    <span className="text-primary font-medium group-hover:underline">查看详情 →</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
        
        {/* 项目分类 */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-gray-800 mb-8 text-center">项目分类</h3>
          {projectCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="mb-12">
              <h4 className="text-xl font-semibold text-gray-800 mb-6 flex items-center gap-2">
                {category.name}
                {category.isHardware && (
                  <span className="text-lg">⚙️</span>
                )}
              </h4>
              <div className="flex flex-col lg:flex-row gap-8">
                {category.projects.map((project) => (
                  <Link to={`/projects/${project.id}`} key={project.id} className="card group cursor-pointer flex-1">
                    <div className="p-6 flex flex-col lg:flex-row gap-6">
                      <div className="flex-1">
                        <h5 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-primary transition-colors duration-300">{project.title}</h5>
                        <p className="text-sm text-gray-500 mb-2">{project.role}</p>
                        <p className="text-sm text-gray-500 mb-4">{project.period}</p>
                        <p className="text-gray-600 mb-4">{project.description}</p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.technologies.map((tech, index) => (
                            <span key={index} className="px-2 py-1 bg-primary-100 text-primary-800 rounded-full text-xs">{tech}</span>
                          ))}
                        </div>
                        <div className="mt-4 flex justify-end">
                          <span className="text-primary font-medium group-hover:underline">查看详情 →</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
              {category.projects.length === 0 && (
                <p className="text-gray-400 text-sm ml-2">暂无项目</p>
              )}
            </div>
          ))}
        </div>
        
        {/* 荣誉奖项 */}
        <div>
          <h3 className="text-2xl font-semibold text-gray-800 mb-8 text-center">荣誉奖项</h3>
          <div className="card p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {awards.map((award, index) => (
                <div key={index} className="flex items-start space-x-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{award}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects