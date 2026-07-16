const Plan = () => {
  // 短期规划
  const shortTermPlans = [
    {
      title: 'AI技术栈学习',
      description: '系统学习AI应用开发技术栈，重点掌握LangChain框架、Agent开发、提示词工程，结合已有Java基础构建AI应用能力。',
      timeline: '1-2年'
    },
    {
      title: 'AI项目实践',
      description: '从Java Web转型AI应用开发，参与或独立完成AI相关项目，积累实战经验，构建AI领域的项目作品集。',
      timeline: '1-2年'
    },
    {
      title: '技术能力整合',
      description: '将Java后端开发能力与AI应用开发相结合，形成全栈+AI的复合型技术能力，提升市场竞争力。',
      timeline: '1-2年'
    },
    {
      title: 'AI生态融入',
      description: '关注AI领域前沿动态，参与开源项目和技术社区，持续学习大模型应用开发的最新技术和工具。',
      timeline: '1-2年'
    }
  ]

  // 长期规划
  const longTermPlans = [
    {
      title: 'AI领域专家',
      description: '深耕AI应用开发领域，成为具备全栈+AI能力的技术专家，在垂直行业落地有影响力的AI解决方案。',
      timeline: '3-5年'
    },
    {
      title: 'AI产品化能力',
      description: '从技术开发向产品化转型，具备将AI技术转化为商业产品的能力，参与或主导AI产品的完整生命周期。',
      timeline: '3-5年'
    },
    {
      title: 'AI创业探索',
      description: '探索AI领域的创业机会，结合自身技术优势和市场需求，打造有价值的AI应用产品或服务。',
      timeline: '3-5年'
    },
    {
      title: 'AI知识传播',
      description: '通过技术博客、开源贡献、线下分享等方式，在AI应用开发领域建立个人影响力，帮助更多开发者成长。',
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