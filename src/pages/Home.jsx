import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
      {/* 首屏Banner */}
      <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 pt-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <div className="w-32 h-32 rounded-full bg-primary mx-auto md:mx-0 mb-6 flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6v6m0 0v6m0-6h6m-6 0H6M17 16l-5-5-5 5" />
                  <circle cx="12" cy="8" r="3" stroke="currentColor" strokeWidth={1.5} fill="none" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 16h6" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 12v4" />
                </svg>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">赵京</h1>
              <p className="text-xl text-gray-600 mb-4">全栈开发 | 大模型应用开发 | 数据采集・热爱代码的技术女生</p>
              <p className="text-lg text-gray-700 mb-8">进德修业，笃行不怠；以技术立身，以实干致远</p>
              <div className="flex flex-wrap gap-4">
                <Link to="/projects" className="btn btn-primary">
                  查看我的项目
                </Link>
                <Link to="/blog" className="btn btn-secondary">
                  技术干货分享
                </Link>
              </div>
            </div>
            <div className="animate-slide-in">
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <div className="text-center">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">核心技术栈</h3>
                  <div className="flex flex-wrap justify-center gap-3">
                    <span className="px-4 py-2 bg-primary-100 text-primary-800 rounded-full">Java</span>
                    <span className="px-4 py-2 bg-primary-100 text-primary-800 rounded-full">Python</span>
                    <span className="px-4 py-2 bg-primary-100 text-primary-800 rounded-full">Spring Boot</span>
                    <span className="px-4 py-2 bg-primary-100 text-primary-800 rounded-full">数据采集</span>
                    <span className="px-4 py-2 bg-primary-100 text-primary-800 rounded-full">LangChain框架</span>
                    <span className="px-4 py-2 bg-primary-100 text-primary-800 rounded-full">Agent开发</span>
                    <span className="px-4 py-2 bg-primary-100 text-primary-800 rounded-full">提示词工程</span>
                    <span className="px-4 py-2 bg-primary-100 text-primary-800 rounded-full">web前后端</span>
                    <span className="px-4 py-2 bg-primary-100 text-primary-800 rounded-full">智能客服开发</span>
                    <span className="px-4 py-2 bg-primary-100 text-primary-800 rounded-full">dify</span>
                    <span className="px-4 py-2 bg-primary-100 text-primary-800 rounded-full">数据清洗</span>
                    <span className="px-4 py-2 bg-primary-100 text-primary-800 rounded-full">机器学习</span>
                  </div>
                  <div className="mt-6">
                    <h4 className="text-lg font-medium text-gray-700 mb-3">项目经验</h4>
                    <ul className="text-left space-y-2">
                      <li className="flex items-start space-x-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>数字华容道-石头迷阵游戏</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>智能学籍辅助系统</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Python数据采集项目</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>机器学习数据训练拟合 对新数据进行预测</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>基于langchain的智能客服开发</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 核心亮点摘要 */}
      <section className="section bg-white">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">核心亮点</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* 个人定位 */}
            <div className="card p-6">
              <div className="w-12 h-12 rounded-lg bg-primary-100 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">个人定位</h3>
              <p className="text-gray-600">聚焦AI编程与全栈开发领域，打造个人技术展示与交流平台</p>
            </div>

            {/* 核心技能 */}
            <Link to="/skills">
            <div className="card p-6">
              <div className="w-12 h-12 rounded-lg bg-primary-100 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">核心技能</h3>
              <p className="text-gray-600">Java、Python、数据采集、前端开发等全栈技术</p>
            </div>
            </Link>

            {/* 代表项目 */}
            <Link to="/projects">
            <div className="card p-6">
              <div className="w-12 h-12 rounded-lg bg-primary-100 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">代表项目</h3>
              <p className="text-gray-600">数字华容道游戏、智能学籍辅助系统、Python数据采集</p>
            </div>
            </Link>

            {/* 核心目标 */}
            <div className="card p-6">
              <div className="w-12 h-12 rounded-lg bg-primary-100 flex items-center justify-center mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">核心目标</h3>
              <p className="text-gray-600">搭建交流桥梁，打造个人技术品牌，为职场发展奠定基础</p>
            </div>
          </div>
        </div>
      </section>

      {/* 访客指引 */}
      <section className="section bg-primary-50">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl font-bold text-primary-800 mb-4">对访客的寄语</h2>
          <p className="max-w-2xl mx-auto text-gray-700">
            欢迎来到我的个人技术网站！这里记录了我的技术成长轨迹，分享了Java、Python开发和数据采集等实战干货与项目经验。
            我希望通过这个平台与更多同行交流学习，共同进步。如果您有任何问题或合作意向，欢迎随时联系我！
          </p>
        </div>
      </section>
    </>
  )
}

export default Home