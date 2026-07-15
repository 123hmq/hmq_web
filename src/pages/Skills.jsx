const Skills = () => {
  const coreSkills = [
    {
      name: 'Java编程',
      level: '熟练掌握',
      percentage: 85,
      description: '能够独立完成Java后端开发，熟悉Spring Boot、Spring MVC、MyBatis等主流框架，具备良好的代码风格和编程习惯。',
      tools: ['IntelliJ IDEA', 'Maven', 'Spring Boot', 'MyBatis', 'MySQL'],
      certificate: 'HCA华为认证ICT工程师'
    },
    {
      name: 'Python编程',
      level: '精通',
      percentage: 90,
      description: '能够独立开发小型网站、爬虫程序，熟练使用Requests、Selenium、BeautifulSoup等库进行数据采集，掌握数据处理和可视化技能。',
      tools: ['PyCharm', 'Jupyter Notebook', 'Requests', 'Selenium', 'BeautifulSoup'],
      certificate: 'Python高级开发工程师证书（待考）'
    },
    {
      name: '数据采集',
      level: '精通',
      percentage: 90,
      description: '能够设计和实现各种数据采集方案，包括静态网站爬取、动态网站爬取、API数据获取等，具备数据清洗和存储能力。',
      tools: ['Python', 'Requests', 'Selenium', 'BeautifulSoup', 'XPath', 'CSV', 'MySQL'],
      certificate: '数据采集工程师证书（待考）'
    },
    {
      name: '前端开发',
      level: '熟练掌握',
      percentage: 80,
      description: '能够使用HTML、CSS、JavaScript、Vue等技术开发响应式网站，具备良好的UI/UX设计意识。',
      tools: ['HTML5', 'CSS3', 'JavaScript', 'Vue', 'Tailwind CSS', 'React'],
      certificate: '前端开发工程师证书（待考）'
    }
  ]

  const auxiliarySkills = [
    {
      name: '英语',
      level: '英语四级',
      description: '具备基础的英语听说读写能力，能够阅读英文专业文献、进行简单英文沟通。'
    },
    {
      name: '办公软件',
      level: '熟练使用',
      description: '精通Office办公软件，能够制作精美的PPT、Excel表格。'
    },
    {
      name: '计算机等级',
      level: '计算机二级',
      description: '具备扎实的计算机基础知识，熟悉操作系统、网络等相关知识。'
    },
    {
      name: '沟通协作',
      level: '良好',
      description: '具备良好的沟通协调能力、团队协作能力，能够高效对接合作需求。'
    }
  ]

  return (
    <section className="section bg-white pt-24">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">专业技能</h2>
        
        {/* 核心技能 */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-gray-800 mb-8 text-center">核心技能</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {coreSkills.map((skill, index) => (
              <div key={index} className="card p-6">
                <div className="flex justify-between items-center mb-4">
                  <h4 className="text-xl font-semibold text-gray-800">{skill.name}</h4>
                  <span className="px-3 py-1 bg-primary-100 text-primary-800 rounded-full text-sm">{skill.level}</span>
                </div>
                
                {/* 技能熟练度 */}
                <div className="mb-4">
                  <div className="flex justify-between mb-1">
                    <span className="text-sm text-gray-600">熟练度</span>
                    <span className="text-sm text-gray-600">{skill.percentage}%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-primary h-2 rounded-full transition-all duration-1000 ease-out" 
                      style={{ width: `${skill.percentage}%` }}
                    ></div>
                  </div>
                </div>
                
                {/* 技能描述 */}
                <p className="text-gray-700 mb-4">{skill.description}</p>
                
                {/* 相关工具 */}
                <div className="mb-4">
                  <h5 className="text-sm font-medium text-gray-600 mb-2">相关工具</h5>
                  <div className="flex flex-wrap gap-2">
                    {skill.tools.map((tool, toolIndex) => (
                      <span key={toolIndex} className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">{tool}</span>
                    ))}
                  </div>
                </div>
                
                {/* 相关证书 */}
                {skill.certificate && (
                  <div>
                    <h5 className="text-sm font-medium text-gray-600 mb-2">相关证书</h5>
                    <p className="text-gray-700">{skill.certificate}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        
        {/* 辅助技能 */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-gray-800 mb-8 text-center">辅助技能</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {auxiliarySkills.map((skill, index) => (
              <div key={index} className="card p-6">
                <h4 className="text-lg font-semibold text-gray-800 mb-2">{skill.name}</h4>
                <div className="mb-3">
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">{skill.level}</span>
                </div>
                <p className="text-gray-600 text-sm">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* 技能总结 */}
        <div className="card p-8">
          <h3 className="text-2xl font-semibold text-gray-800 mb-6 text-center">技能总结</h3>
          <div className="max-w-3xl mx-auto">
            <ul className="space-y-3">
              <li className="flex items-start space-x-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>熟悉Python，使用Request, Selenium, BeautifulSoup进行数据采集</span>
              </li>
              <li className="flex items-start space-x-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>熟悉掌握Java基础知识，Spring MVC，事理事务</span>
              </li>
              <li className="flex items-start space-x-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>熟悉掌握Spring，SpringBoot, MyBatis 等主流开发框架</span>
              </li>
              <li className="flex items-start space-x-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>熟练使用IDE，具备良好的编码习惯</span>
              </li>
              <li className="flex items-start space-x-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>熟悉MySQL数据库，能够编写高效SQL 语句并进行简单优化</span>
              </li>
              <li className="flex items-start space-x-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>了解AOP等核心思想,Maven等开发工具</span>
              </li>
              <li className="flex items-start space-x-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span>掌握常用linux 命令</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills