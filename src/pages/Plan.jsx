const Plan = () => {
  // 短期规划
  const shortTermPlans = [
    {
      title: '技术提升',
      description: '深入学习Java后端开发技术栈，包括Spring Boot、Spring Cloud等微服务架构，提升代码质量和架构设计能力。',
      timeline: '1-2年'
    },
    {
      title: '项目积累',
      description: '参与更多实际项目开发，积累实战经验，特别是在AI编程和全栈开发领域，构建自己的项目作品集。',
      timeline: '1-2年'
    },
    {
      title: '网站优化',
      description: '持续优化个人技术网站，增加更多技术内容和交互功能，提升网站的专业性和用户体验。',
      timeline: '1-2年'
    },
    {
      title: '证书考取',
      description: '考取相关技术证书，如Java高级开发工程师、Python数据分析工程师等，提升专业认可度。',
      timeline: '1-2年'
    }
  ]

  // 长期规划
  const longTermPlans = [
    {
      title: '个人品牌打造',
      description: '通过技术分享、开源贡献等方式，打造个人技术品牌，成为领域内有影响力的技术专家。',
      timeline: '3-5年'
    },
    {
      title: '技术深耕',
      description: '在AI编程与全栈开发领域深耕，掌握前沿技术，形成自己的技术专长和核心竞争力。',
      timeline: '3-5年'
    },
    {
      title: '合作拓展',
      description: '与更多同行、企业建立合作关系，参与大型项目开发，实现个人价值的最大化。',
      timeline: '3-5年'
    },
    {
      title: '知识传播',
      description: '通过博客、视频、线下分享等方式，传播技术知识，帮助更多开发者成长，回馈技术社区。',
      timeline: '3-5年'
    }
  ]

  return (
    <section className="section bg-white pt-24">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">个人规划</h2>
        
        {/* 短期规划 */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-gray-800 mb-8 text-center">短期规划 (1-2年)</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {shortTermPlans.map((plan, index) => (
              <div key={index} className="card p-6">
                <div className="flex justify-between items-start mb-4">
                  <h4 className="text-xl font-semibold text-gray-800">{plan.title}</h4>
                  <span className="px-3 py-1 bg-primary-100 text-primary-800 rounded-full text-sm">{plan.timeline}</span>
                </div>
                <p className="text-gray-700">{plan.description}</p>
              </div>
            ))}
          </div>
        </div>
        
        {/* 长期规划 */}
        <div>
          <h3 className="text-2xl font-semibold text-gray-800 mb-8 text-center">长期规划 (3-5年)</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {longTermPlans.map((plan, index) => (
              <div key={index} className="card p-6">
                <div className="flex justify-between items-start mb-4">
                  <h4 className="text-xl font-semibold text-gray-800">{plan.title}</h4>
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">{plan.timeline}</span>
                </div>
                <p className="text-gray-700">{plan.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Plan