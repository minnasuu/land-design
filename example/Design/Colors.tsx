import React, { useState } from 'react'

export default function Colors() {
  const [isDark, setIsDark] = useState(false)

  const toggleTheme = () => {
    setIsDark(!isDark)
    const html = document.documentElement
    if (isDark) {
      html.classList.remove('dark')
    } else {
      html.classList.add('dark')
    }
  }

  const colorCategories = [
    {
      title: "文本颜色",
      description: "用于不同重要程度的文本内容",
      colors: [
        { class: 'text-text-primary', name: '主要文本', description: '页面主要内容' },
        { class: 'text-text-secondary', name: '次要文本', description: '辅助说明文字' },
        { class: 'text-text-tertiary', name: '第三级文本', description: '弱化信息' },
        { class: 'text-text-quaternary', name: '第四级文本', description: '最弱信息' },
        { class: 'text-text-disabled', name: '禁用文本', description: '不可用状态' },
      ]
    },
    {
      title: "背景颜色",
      description: "用于不同层级的背景区域",
      colors: [
        { class: 'bg-bg-primary', name: '主要背景', description: '页面主背景' },
        { class: 'bg-bg-secondary', name: '次要背景', description: '卡片背景' },
        { class: 'bg-bg-tertiary', name: '第三级背景', description: '嵌套背景' },
        { class: 'bg-bg-quaternary', name: '第四级背景', description: '最深背景' },
        { class: 'bg-bg-disabled', name: '禁用背景', description: '不可用状态' },
      ]
    },
    {
      title: "状态颜色",
      description: "用于表示不同的状态和反馈",
      colors: [
        { class: 'bg-primary', name: '主要状态', description: '主要操作' },
        { class: 'bg-success', name: '成功状态', description: '成功反馈' },
        { class: 'bg-warning', name: '警告状态', description: '警告提示' },
        { class: 'bg-error', name: '错误状态', description: '错误反馈' },
        { class: 'bg-link', name: '链接状态', description: '链接元素' },
      ]
    },
    {
      title: "灰度系统",
      description: "用于创建层次和对比",
      colors: [
        { class: 'bg-gray-primary', name: '主要灰度', description: '深色元素' },
        { class: 'bg-gray-secondary', name: '次要灰度', description: '中等灰度' },
        { class: 'bg-gray-tertiary', name: '第三级灰度', description: '浅灰度' },
        { class: 'bg-gray-light', name: '浅灰度', description: '最浅灰度' },
        { class: 'bg-gray-dark', name: '深灰度', description: '深色灰度' },
        { class: 'bg-gray-darker', name: '最深灰度', description: '最深深度' },
      ]
    }
  ];

  return (
    <div className="max-w-4xl mx-auto">
      {/* 页面标题 */}
      <div className="mb-32">
        <h1 className="text-title-xxl text-text-primary mb-16">颜色系统</h1>
        <p className="text-text-secondary text-lg leading-relaxed">
          LandDesign 采用语义化的颜色系统，支持浅色和深色模式，确保在不同场景下都能提供优秀的视觉体验。
        </p>

        {/* 主题切换 */}
        <div className="mt-24">
          <button
            onClick={toggleTheme}
            className="btn-primary btn-md"
          >
            {isDark ? '切换浅色模式' : '切换深色模式'}
          </button>
        </div>
      </div>

      {/* 颜色分类 */}
      <div className="space-y-48">
        {colorCategories.map((category, index) => (
          <section key={index}>
            <h2 className="text-title-xl text-text-primary mb-16">{category.title}</h2>
            <p className="text-text-secondary text-body-m mb-24">{category.description}</p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
              {category.colors.map((color, idx) => (
                <div key={idx} className="card-base card-md">
                  <div className={`${color.class} w-full h-32 rounded-lg mb-16 flex items-center justify-center`}>
                    <span className={`text-body-s font-medium ${color.class.includes('bg-') && !color.class.includes('bg-bg-') && !color.class.includes('bg-gray-')
                        ? 'text-white'
                        : 'text-text-primary'
                      }`}>
                      {color.name}
                    </span>
                  </div>
                  <h3 className="text-title-s text-text-primary mb-8">{color.name}</h3>
                  <p className="text-body-s text-text-secondary mb-12">{color.description}</p>
                  <div className="text-caption text-text-tertiary bg-bg-secondary px-8 py-4 rounded">
                    {color.class}
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>

      {/* 使用示例 */}
      <section className="mt-48">
        <h2 className="text-title-xl text-text-primary mb-24">使用示例</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
          <div className="card-base card-md">
            <h3 className="text-title-m text-text-primary mb-16">卡片组件</h3>
            <p className="text-text-secondary text-body-s mb-16">
              使用语义化颜色创建层次分明的卡片组件。
            </p>
            <div className="space-y-12">
              <div className="p-16 bg-bg-secondary rounded">
                <h4 className="text-title-s text-text-primary mb-8">卡片标题</h4>
                <p className="text-body-s text-text-secondary">卡片内容使用次要文本颜色</p>
              </div>
              <div className="flex gap-8">
                <button className="btn-primary btn-sm">主要按钮</button>
                <button className="btn-secondary btn-sm">次要按钮</button>
              </div>
            </div>
          </div>

          <div className="card-base card-md">
            <h3 className="text-title-m text-text-primary mb-16">状态展示</h3>
            <p className="text-text-secondary text-body-s mb-16">
              使用状态颜色传达不同的信息类型。
            </p>
            <div className="space-y-12">
              <div className="flex gap-8">
                <span className="badge-primary">主要</span>
                <span className="badge-success">成功</span>
                <span className="badge-warning">警告</span>
                <span className="badge-error">错误</span>
              </div>
              <div className="p-16 bg-success text-white rounded">
                <span className="text-body-s">成功消息示例</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 最佳实践 */}
      <section className="mt-48">
        <h2 className="text-title-xl text-text-primary mb-24">最佳实践</h2>
        <div className="card-base card-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
            <div>
              <h3 className="text-title-m text-text-primary mb-16">✅ 推荐</h3>
              <ul className="space-y-8 text-body-s text-text-secondary">
                <li>• 使用语义化的颜色类名</li>
                <li>• 确保文本与背景的对比度</li>
                <li>• 保持颜色使用的一致性</li>
                <li>• 考虑深色模式的适配</li>
              </ul>
            </div>
            <div>
              <h3 className="text-title-m text-text-primary mb-16">❌ 避免</h3>
              <ul className="space-y-8 text-body-s text-text-secondary">
                <li>• 使用硬编码的颜色值</li>
                <li>• 忽略可访问性要求</li>
                <li>• 过度使用颜色</li>
                <li>• 颜色含义不明确</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

