import { useParams, Link } from 'react-router-dom'
import { useEffect } from 'react'
import { projectsData } from '../data/projects'

const ProjectDetail = () => {
  const { id } = useParams()
  const project = projectsData.find(p => p.id === parseInt(id))

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [id])

  if (!project) {
    return (
      <section className="section pt-24">
        <div className="container mx-auto text-center">
          <p className="text-gray-500">项目不存在</p>
          <Link to="/projects" className="btn btn-primary mt-4">返回项目列表</Link>
        </div>
      </section>
    )
  }

  return (
    <section className="section pt-24 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #ffffff 0%, #f0fdf4 25%, #ffffff 50%, #dcfce7 75%, #ffffff 100%)' }}>
      <div className="absolute top-20 -left-40 w-80 h-80 bg-green-100 rounded-full opacity-40 blur-3xl"></div>
      <div className="absolute top-1/2 -right-32 w-64 h-64 bg-green-50 rounded-full opacity-30 blur-3xl"></div>
      <div className="absolute bottom-20 left-1/4 w-48 h-48 bg-emerald-50 rounded-full opacity-25 blur-2xl"></div>

      <div className="container mx-auto">
        <div className="flex justify-start mb-8">
          <Link to="/projects" className="btn btn-primary flex items-center gap-2">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            返回项目列表
          </Link>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="card p-8 md:p-12">
            <div className="text-center mb-10">
              <span className="inline-block px-4 py-2 bg-primary-100 text-primary-800 rounded-full text-sm font-medium mb-4">
                {project.role}
              </span>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">{project.title}</h1>
              <p className="text-gray-500 text-lg">{project.period}</p>
            </div>

            <div className="flex flex-wrap justify-center gap-3 mb-10">
              {project.technologies.map((tech, index) => (
                <span key={index} className="px-3 py-1 bg-primary-100 text-primary-800 rounded-full text-sm font-medium">
                  {tech}
                </span>
              ))}
            </div>

            <div className="space-y-8">
              <div className="card p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-primary-100 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <h2 className="text-xl font-semibold text-gray-800">项目背景</h2>
                </div>
                <p className="text-gray-700 leading-relaxed">{project.project_background}</p>
              </div>

              <div className="card p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-primary-100 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h2 className="text-xl font-semibold text-gray-800">项目目标</h2>
                </div>
                <p className="text-gray-700 leading-relaxed">{project.project_objective}</p>
              </div>

              <div className="card p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-primary-100 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h2 className="text-xl font-semibold text-gray-800">核心内容</h2>
                </div>
                <p className="text-gray-700 leading-relaxed">{project.project_core_content}</p>
              </div>

              <div className="card p-6">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-lg bg-primary-100 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                    </svg>
                  </div>
                  <h2 className="text-xl font-semibold text-gray-800">功能模块</h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {project.core_function_modules.map((module, index) => (
                    <div key={index} className="bg-gray-50 rounded-lg p-5">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="flex-shrink-0 w-8 h-8 rounded-full bg-primary text-white text-sm font-bold flex items-center justify-center">
                          {index + 1}
                        </span>
                        <h3 className="font-semibold text-gray-800">{module.module_name.replace(/_/g, ' ')}</h3>
                      </div>
                      <p className="text-gray-600 text-sm pl-11">{module.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="card p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-primary-100 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <h2 className="text-xl font-semibold text-gray-800">核心成果</h2>
                </div>
                <ul className="space-y-3">
                  {project.core.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-10 pt-6 border-t border-gray-200">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-2 text-gray-500">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                  <span className="text-sm">项目编号: #{project.id}</span>
                </div>
                <Link to="/projects" className="btn btn-primary flex items-center gap-2">
                  查看更多项目
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ProjectDetail