const Blog = () => {
  // 文章分类
  const categories = [
    { name: 'Java开发', count: 12 },
    { name: 'Python实战', count: 15 },
    { name: '数据采集', count: 8 },
    { name: '项目踩坑', count: 6 },
    { name: '技术成长', count: 10 }
  ]

  // 置顶文章
  const featuredPosts = [
    {
      id: 1,
      title: 'Python数据采集实战教程：从入门到精通',
      category: '数据采集',
      date: '2026-03-15',
      views: 2580,
      summary: '本教程详细介绍了Python数据采集的完整流程，包括Requests库的使用、BeautifulSoup解析、Selenium模拟浏览器操作等，适合初学者入门。',
      content: '详细内容...'
    },
    {
      id: 2,
      title: 'Java项目开发流程总结：从需求到部署',
      category: 'Java开发',
      date: '2026-02-28',
      views: 1890,
      summary: '总结了Java项目开发的完整流程，包括需求分析、架构设计、编码实现、测试部署等各个阶段的最佳实践和注意事项。',
      content: '详细内容...'
    }
  ]

  // 文章列表
  const posts = [
    {
      id: 3,
      title: 'Spring Boot集成MyBatis-Plus实战',
      category: 'Java开发',
      date: '2026-03-10',
      views: 1200,
      summary: '介绍如何在Spring Boot项目中集成MyBatis-Plus，实现高效的数据库操作。'
    },
    {
      id: 4,
      title: '使用Selenium爬取动态网站数据',
      category: '数据采集',
      date: '2026-03-05',
      views: 980,
      summary: '详细讲解如何使用Selenium模拟浏览器操作，爬取动态加载的网站数据。'
    },
    {
      id: 5,
      title: 'Python数据分析入门：使用Pandas处理数据',
      category: 'Python实战',
      date: '2026-02-20',
      views: 1560,
      summary: '介绍Pandas库的基本使用方法，包括数据读取、清洗、转换和分析等操作。'
    },
    {
      id: 6,
      title: '项目开发中常见的10个坑及解决方案',
      category: '项目踩坑',
      date: '2026-02-15',
      views: 890,
      summary: '总结了项目开发过程中常见的10个问题及相应的解决方案，帮助开发者避免踩坑。'
    }
  ]

  return (
    <section className="section bg-white pt-24">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">技术分享</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* 侧边栏 - 分类 */}
          <div className="lg:col-span-1">
            <div className="card p-6 mb-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">文章分类</h3>
              <ul className="space-y-2">
                {categories.map((category, index) => (
                  <li key={index} className="flex justify-between items-center">
                    <a href="#" className="text-gray-700 hover:text-primary transition-colors">{category.name}</a>
                    <span className="text-sm text-gray-500">{category.count}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          {/* 主内容区 */}
          <div className="lg:col-span-3">
            {/* 置顶文章 */}
            <div className="mb-10">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">置顶文章</h3>
              {featuredPosts.map((post) => (
                <div key={post.id} className="card p-6 mb-4 border-l-4 border-primary">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-lg font-semibold text-gray-800">{post.title}</h4>
                    <span className="px-2 py-1 bg-primary-100 text-primary-800 rounded-full text-xs">{post.category}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <span className="mr-4">{post.date}</span>
                    <span>{post.views} 阅读</span>
                  </div>
                  <p className="text-gray-600 mb-4">{post.summary}</p>
                  <a href="#" className="text-primary font-medium hover:underline">阅读全文 →</a>
                </div>
              ))}
            </div>
            
            {/* 文章列表 */}
            <div>
              <h3 className="text-xl font-semibold text-gray-800 mb-4">最新文章</h3>
              {posts.map((post) => (
                <div key={post.id} className="card p-6 mb-4">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="text-lg font-semibold text-gray-800">{post.title}</h4>
                    <span className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">{post.category}</span>
                  </div>
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <span className="mr-4">{post.date}</span>
                    <span>{post.views} 阅读</span>
                  </div>
                  <p className="text-gray-600 mb-4">{post.summary}</p>
                  <a href="#" className="text-primary font-medium hover:underline">阅读全文 →</a>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Blog