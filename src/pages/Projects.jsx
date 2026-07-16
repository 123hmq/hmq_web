import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import { projectsData, projectCategories, featuredProjects, awards } from '../data/projects'

const getProjectById = (id) => {
  return projectsData.find(project => project.id === parseInt(id))
}

const Projects = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <section className="section pt-24 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #ffffff 0%, #f0fdf4 25%, #ffffff 50%, #dcfce7 75%, #ffffff 100%)' }}>
      <div className="absolute top-20 -left-40 w-80 h-80 bg-green-100 rounded-full opacity-40 blur-3xl"></div>
      <div className="absolute top-1/2 -right-32 w-64 h-64 bg-green-50 rounded-full opacity-30 blur-3xl"></div>
      <div className="absolute bottom-20 left-1/4 w-48 h-48 bg-emerald-50 rounded-full opacity-25 blur-2xl"></div>
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-left text-gray-800 mb-4">项目成果</h2>
        
        <div className="mb-16">
          <h3 className="text-2xl font-semibold text-gray-800 mb-8 text-center">代表作品</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredProjects.map((projectId) => {
              const project = getProjectById(projectId)
              if (!project) return null
              return (
                <Link to={`/projects/${project.id}`} key={project.id} className="card group cursor-pointer overflow-hidden">
                  <div className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <h4 className="text-xl font-semibold text-gray-800 group-hover:text-primary transition-colors duration-300">{project.title}</h4>
                      <span className="px-3 py-1 bg-primary-100 text-primary-800 rounded-full text-sm">{project.role}</span>
                    </div>
                    <p className="text-sm text-gray-500 mb-4">{project.period}</p>
                    <p className="text-gray-700 mb-6">{project.content}</p>
                    <div className="mb-6">
                      <h5 className="text-sm font-medium text-gray-600 mb-2">核心成果</h5>
                      <ul className="space-y-2">
                        {project.core.map((achievement, index) => (
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
              )
            })}
          </div>
        </div>
        
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
                {category.projects.map((projectId) => {
                  const project = getProjectById(projectId)
                  if (!project) return null
                  return (
                    <Link to={`/projects/${project.id}`} key={project.id} className="card group cursor-pointer flex-1">
                      <div className="p-6 flex flex-col lg:flex-row gap-6">
                        <div className="flex-1">
                          <h5 className="text-xl font-semibold text-gray-800 mb-2 group-hover:text-primary transition-colors duration-300">{project.title}</h5>
                          <p className="text-sm text-gray-500 mb-2">{project.role}</p>
                          <p className="text-sm text-gray-500 mb-4">{project.period}</p>
                          <p className="text-gray-600 mb-4">{project.content}</p>
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
                  )
                })}
              </div>
              {category.projects.length === 0 && (
                <p className="text-gray-400 text-sm ml-2">暂无项目</p>
              )}
            </div>
          ))}
        </div>
        
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