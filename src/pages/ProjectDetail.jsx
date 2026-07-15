import { useParams, Link } from 'react-router-dom'

const ProjectDetail = () => {
  const { id } = useParams()

  const projects = {
    1: {
      title: '数字华容道-石头迷阵游戏',
      role: 'Java后端开发',
      period: '2026.01-2026.03',
      content: '项目背景：开发一款桌面数字华容道小游戏，实现数字块打、按键盘控制移动、通关判断等核心功能，适配不同操作系统，兼顾交互体验与代码可维护性，完成从需求梳理到落地测试的全流程开发。',
      core: [
        '独立基于Java Swing 完成数字华容道全流程开发，搭建GUI界面，实现数字块快速、菜单交互、步数展示等功能。',
        '设计二维数组状态管理，优化打乱算法规避无解问题，实现故障移动与通关判断核心规则。',
        '规范代码结构，抽象常量、使用枚举，解决界面图层覆盖、逻辑异常等问题，保障程序稳定。',
        '成功完成可运行桌面游戏，覆盖打乱、移动、通关、重置等完整流程，运行无异常。',
        '扎实掌握Swing 界面编程、事件驱动等技术，锻炼独立开发与问题排查能力，积累 GUI 开发实战经验。'
      ],
      technologies: ['Java', 'Swing', 'GUI']
    },
    4: {
      title: '智能学习辅助系统',
      role: 'Java后端开发',
      period: '2025.09-2025.11',
      content: '项目背景：开发智能学习辅助系统，提升后台管理效率。',
      core: [
        '核心模块开发与架构设计：基于 Spring Boot + MyBatis-Plus 构建后端架构，采用 MVC 分层模式开发，实现了部门管理、员工增删改查（CRUD）等核心业务模块。',
        '利用 MyBatis-Plus 的代码生成器与条件构造器，大幅减少 SQL 编写量；通过 MyBatis 动态 SQL（<if>、<foreach>）处理复杂的多条件查询需求，提升了数据检索的灵活性。',
        '集成 Spring Security（或过滤器/拦截器）+ JWT（JSON Web Token）技术，实现了无状态的统一登录认证与授权，有效防止了未授权访问，保障了系统接口安全。',
        '成功上线并稳定运行，系统响应时间控制在 200ms 以内，支持 QPS（每秒查询率）达到 500+。',
        '通过模块化开发与代码复用，将核心业务功能的开发效率提升了 30% 以上。'
      ],
      technologies: ['Java', 'Spring Boot', 'MyBatis-Plus', 'Spring Security', 'JWT']
    },
    6: {
      title: 'python数据采集',
      role: '数据采集',
      period: '2024.05-2024.06',
      content: '使用python的Requests、BeautifulSoup爬取新华网国际板块新闻，筛选2025年相关内容、提取关键信息，通过csv保存数据，设置随机延时确保爬取稳定性。',
      core: [
        '使用python的Selenium库，爬取1688平台商品数据，通过XPath定位获取商品名称、销售价格等信息，利用csv保存数据，结合time库实现延时与滚动操作保障爬取稳定性。'
      ],
      technologies: ['Python', 'Requests', 'BeautifulSoup', 'Selenium', 'XPath']
    }
  }

  const project = projects[id] || projects[1]

  return (
    <section className="section bg-primary-50 pt-24">
      <div className="container mx-auto">
        <div className="flex justify-start mb-6">
          <Link to="/projects" className="btn btn-secondary">
            ← 返回项目列表
          </Link>
        </div>
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md p-8">
          <h2 className="text-3xl font-bold text-primary-800 mb-4">{project.title}</h2>
          <div className="flex flex-wrap gap-4 mb-6">
            <div>
              <span className="text-gray-500">角色：</span>
              <span className="font-medium">{project.role}</span>
            </div>
            <div>
              <span className="text-gray-500">时间：</span>
              <span className="font-medium">{project.period}</span>
            </div>
          </div>
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-primary-800 mb-2">项目内容</h3>
            <p className="text-gray-700">{project.content}</p>
          </div>
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-primary-800 mb-2">核心贡献</h3>
            <ul className="space-y-2">
              {project.core.map((item, index) => (
                <li key={index} className="flex items-start space-x-2">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-primary-800 mb-2">技术栈</h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, index) => (
                <span key={index} className="px-3 py-1 bg-primary-100 text-primary-800 rounded-full">{tech}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProjectDetail