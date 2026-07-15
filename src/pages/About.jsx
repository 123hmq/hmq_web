const About = () => {
  return (
    <section className="section bg-white pt-24">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">关于我</h2>
        
        {/* 个人基础信息 */}
        <div className="card p-8 mb-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="text-center md:text-left">
              <div className="w-32 h-32 rounded-full bg-primary mx-auto md:mx-0 mb-6 flex items-center justify-center">
                <span className="text-white font-bold text-4xl">赵</span>
              </div>
              <h3 className="text-2xl font-semibold text-gray-800 mb-2">赵京</h3>
              <p className="text-gray-600 mb-4">本科 | Java 后端开发 | 热爱生活 | 擅长分享</p>
            </div>
            <div>
              <h4 className="text-xl font-semibold text-gray-800 mb-4">个人基础信息</h4>
              <ul className="space-y-3">
                <li className="flex justify-between">
                  <span className="text-gray-500">性别：</span>
                  <span className="font-medium">女</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-gray-500">年龄：</span>
                  <span className="font-medium">21</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-gray-500">所在地：</span>
                  <span className="font-medium">浙江省绍兴市群贤中路绍兴理工学院</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-gray-500">联系电话：</span>
                  <span className="font-medium">暂不公开，可通过站内留言联系</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-gray-500">电子邮箱：</span>
                  <span className="font-medium">3647592302@qq.com</span>
                </li>
                <li className="flex justify-between">
                  <span className="text-gray-500">个人标签：</span>
                  <span className="font-medium">双非本科 | Java 后端开发 | 热爱生活 | 擅长分享 | 情感共鸣</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* 成长历程 */}
        <div className="card p-8 mb-12">
          <h4 className="text-xl font-semibold text-gray-800 mb-6">成长历程</h4>
          
          <h5 className="text-lg font-medium text-gray-700 mb-4">1. 教育经历</h5>
          <div className="mb-8">
            <div className="flex justify-between items-center mb-2">
              <h6 className="font-medium">绍兴理工学院 - 数据科学与大数据技术专业本科</h6>
              <span className="text-sm text-gray-500">2023年7月 - 2027年6月</span>
            </div>
            <p className="text-gray-600 pl-4 border-l-2 border-primary">
              学习计算机科学与技术专业知识，重点掌握 Python、Java、前端开发等技能，参与校级科研项目，熟悉项目开发流程，培养了严谨的逻辑思维和问题解决能力。
            </p>
          </div>

          <h5 className="text-lg font-medium text-gray-700 mb-4">2. 成长关键节点</h5>
          <div className="space-y-6">
            <div className="flex">
              <div className="w-24 flex-shrink-0 text-sm text-gray-500">2023年</div>
              <div className="flex-grow pl-4 border-l-2 border-primary">
                <p className="text-gray-700">首次接触编程，产生浓厚兴趣，开始自学Java基础语法</p>
              </div>
            </div>
            <div className="flex">
              <div className="w-24 flex-shrink-0 text-sm text-gray-500">2024年</div>
              <div className="flex-grow pl-4 border-l-2 border-primary">
                <p className="text-gray-700">第一次独立完成编程项目，坚定了技术深耕的方向；开始尝试内容创作，发布第一篇个人技术文章</p>
              </div>
            </div>
            <div className="flex">
              <div className="w-24 flex-shrink-0 text-sm text-gray-500">2025年</div>
              <div className="flex-grow pl-4 border-l-2 border-primary">
                <p className="text-gray-700">参与第一个商业项目，积累了实战经验，明确了个人技术风格；获得技术相关证书，提升了专业认可度</p>
              </div>
            </div>
            <div className="flex">
              <div className="w-24 flex-shrink-0 text-sm text-gray-500">2026年</div>
              <div className="flex-grow pl-4 border-l-2 border-primary">
                <p className="text-gray-700">专注于Java后端开发领域，形成个人核心竞争力；开始对接合作需求，实现个人价值变现；决定搭建个人网站，整合个人资源，扩大个人影响力</p>
              </div>
            </div>
          </div>
        </div>

        {/* 个人风采 */}
        <div className="card p-8">
          <h4 className="text-xl font-semibold text-gray-800 mb-6">个人风采</h4>
          
          <h5 className="text-lg font-medium text-gray-700 mb-4">兴趣爱好</h5>
          <ul className="space-y-2 mb-8">
            <li className="flex items-start space-x-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>喜欢读书，尤其偏爱文学、人生哲理书籍，坚持每月阅读1-2本书，定期分享读书感悟</span>
            </li>
            <li className="flex items-start space-x-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>喜欢运动，坚持慢跑，保持健康的生活状态</span>
            </li>
            <li className="flex items-start space-x-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>喜欢弹钢琴，会简单的钢琴曲，音乐可以治愈生活</span>
            </li>
            <li className="flex items-start space-x-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>喜欢歌手：华晨宇，我是一枚小黑煤球，欢迎同频的朋友给我留言！</span>
            </li>
          </ul>

          <h5 className="text-lg font-medium text-gray-700 mb-4">生活态度</h5>
          <p className="text-gray-700">
            秉持"认真工作，快乐生活"的态度，既专注于专业能力的提升，也注重生活的仪式感；
            喜欢记录生活，相信每一份努力都有回报，每一次成长都值得被铭记；
            乐于分享，希望通过自己的经历和作品，给他人带来一点启发和温暖；
            待人真诚，愿意与同频者交流学习，共同成长。
          </p>
        </div>
      </div>
    </section>
  )
}

export default About