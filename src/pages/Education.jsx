const Education = () => {
  const education = {
    school: '绍兴理工学院',
    degree: '本科',
    major: '数据科学与大数据技术',
    period: '2023-2027',
    awards: [
      '在校担任学习委员',
      '曾获2024年第九届“LSCAT”杯浙江省笔译大赛优胜奖',
      '获2023-2024学年浙江省奖学金',
      '获2023年一等奖学金',
      '获第十六届全国大学生数学竞赛（非数学A类）优胜奖',
      '获2023年优秀团员',
      '2024-2025学年第一学期社会实践先进个人',
      '英语四级已过',
      '计算机二级，精通电脑办公软件'
    ]
  }

  const certificates = [
    {
      name: 'HCA华为认证ICT工程师',
      date: '2024年'
    }
  ]

  return (
    <section className="section bg-primary-50 pt-24">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center text-primary-800 mb-12">教育经历</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="card p-6">
            <h3 className="text-xl font-semibold text-primary-800 mb-4">学历信息</h3>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between items-center">
                  <h4 className="font-semibold text-lg">{education.school}</h4>
                  <span className="text-sm text-primary-700">{education.period}</span>
                </div>
                <p className="text-gray-600">{education.degree} · {education.major}</p>
              </div>
            </div>
          </div>
          <div className="card p-6">
            <h3 className="text-xl font-semibold text-primary-800 mb-4">资格证书</h3>
            <div className="space-y-4">
              {certificates.map((certificate, index) => (
                <div key={index}>
                  <h4 className="font-semibold">{certificate.name}</h4>
                  <p className="text-sm text-gray-600">{certificate.date}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-8">
          <div className="card p-6">
            <h3 className="text-xl font-semibold text-primary-800 mb-4">获奖情况</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {education.awards.map((award, index) => (
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

export default Education