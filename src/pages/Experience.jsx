const Experience = () => {
  const volunteerExperiences = [
    {
      title: '2025年“6.26”国际禁毒日主题宣传活动',
      period: '2025.06-2025.06',
      hours: '9小时',
      description: '作为在校大学生，我报名参加了2025年“6.26”国际禁毒日主题宣传活动，通过向公众回答有关禁毒的知识、分发禁毒宣传单等，向大众宣传禁毒知识，了解毒品的危害。'
    }
  ]

  const clubExperiences = [
    {
      title: '绍兴理工学院技术部',
      position: '干事',
      period: '2023.09-2024.09',
      description: '在学校技术部担任干事，参加音乐会排练会场布置，在迎新活动中担任志愿者。'
    }
  ]

  return (
    <section className="section bg-white pt-24">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center text-primary-800 mb-12">经历</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="card p-6">
            <h3 className="text-xl font-semibold text-primary-800 mb-4">志愿者经历</h3>
            <div className="space-y-6">
              {volunteerExperiences.map((exp, index) => (
                <div key={index}>
                  <h4 className="font-semibold">{exp.title}</h4>
                  <div className="flex flex-wrap gap-4 mb-2">
                    <span className="text-sm text-gray-500">{exp.period}</span>
                    <span className="text-sm text-gray-500">{exp.hours}</span>
                  </div>
                  <p className="text-gray-600">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="card p-6">
            <h3 className="text-xl font-semibold text-primary-800 mb-4">社团经历</h3>
            <div className="space-y-6">
              {clubExperiences.map((exp, index) => (
                <div key={index}>
                  <h4 className="font-semibold">{exp.title}</h4>
                  <div className="flex flex-wrap gap-4 mb-2">
                    <span className="text-sm text-gray-500">{exp.position}</span>
                    <span className="text-sm text-gray-500">{exp.period}</span>
                  </div>
                  <p className="text-gray-600">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience