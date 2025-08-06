import React from 'react';

export default function Shadows() {
  const shadows = [
    {
      name: 'shadow-xs',
      description: '极浅阴影',
      usage: '卡片、按钮等小元素',
      example: 'shadow-xs'
    },
    {
      name: 'shadow-sm',
      description: '浅阴影',
      usage: '输入框、标签等',
      example: 'shadow-sm'
    },
    {
      name: 'shadow-md',
      description: '中等阴影',
      usage: '卡片、面板等',
      example: 'shadow-md'
    },
    {
      name: 'shadow-lg',
      description: '深阴影',
      usage: '模态框、抽屉等',
      example: 'shadow-lg'
    },
    {
      name: 'shadow-xl',
      description: '特深阴影',
      usage: '下拉菜单、工具提示等',
      example: 'shadow-xl'
    },
    {
      name: 'shadow-2xl',
      description: '最深层阴影',
      usage: '浮动元素、特殊强调',
      example: 'shadow-2xl'
    }
  ];

  const layers = [
    {
      level: 'Base',
      description: '基础层级',
      zIndex: '0',
      elements: ['页面背景', '主要内容区域']
    },
    {
      level: 'Content',
      description: '内容层级',
      zIndex: '1-10',
      elements: ['卡片', '按钮', '输入框']
    },
    {
      level: 'Overlay',
      description: '覆盖层级',
      zIndex: '100-200',
      elements: ['下拉菜单', '工具提示', '气泡']
    },
    {
      level: 'Modal',
      description: '模态层级',
      zIndex: '1000-1100',
      elements: ['模态框', '抽屉', '侧边栏']
    },
    {
      level: 'Toast',
      description: '通知层级',
      zIndex: '2000-2100',
      elements: ['消息提示', '通知', '加载遮罩']
    },
    {
      level: 'Tooltip',
      description: '工具提示层级',
      zIndex: '3000-3100',
      elements: ['全局工具提示', '上下文菜单']
    }
  ];

  return (
    <div className="max-w-4xl mx-auto">
      {/* 页面标题 */}
      <div className="mb-32">
        <h1 className="text-title-xxl text-text-primary mb-16">阴影系统</h1>
        <p className="text-text-secondary text-lg leading-relaxed">
          LandDesign 的阴影系统提供统一的视觉层次和深度感，帮助用户理解界面元素的层级关系。
        </p>
      </div>

      {/* 阴影等级 */}
      <section className="mb-48">
        <h2 className="text-title-xl text-text-primary mb-24">阴影等级</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-24">
          {shadows.map((shadow, index) => (
            <div key={index} className={`card-base card-md ${shadow.example} bg-bg-primary`}>
              <div className="text-center p-32">
                <div className="w-64 h-64 bg-bg-secondary rounded-lg mx-auto mb-16 flex items-center justify-center">
                  <span className="text-caption text-text-tertiary">阴影示例</span>
                </div>
                <h3 className="text-title-s text-text-primary mb-8">{shadow.name}</h3>
                <p className="text-body-s text-text-secondary mb-12">{shadow.description}</p>
                <div className="text-caption text-text-tertiary bg-bg-secondary px-8 py-4 rounded">
                  {shadow.usage}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 层级系统 */}
      <section className="mb-48">
        <h2 className="text-title-xl text-text-primary mb-24">层级系统</h2>
        <div className="card-base card-lg">
          <div className="space-y-16">
            {layers.map((layer, index) => (
              <div key={index} className="flex items-center justify-between p-16 border-b border-border-secondary last:border-b-0">
                <div className="flex-1">
                  <div className="flex items-center gap-16 mb-8">
                    <h3 className="text-title-m text-text-primary">{layer.level}</h3>
                    <span className="text-caption text-text-quaternary bg-bg-secondary px-8 py-4 rounded">
                      z-index: {layer.zIndex}
                    </span>
                  </div>
                  <p className="text-body-s text-text-secondary mb-8">{layer.description}</p>
                  <div className="flex flex-wrap gap-8">
                    {layer.elements.map((element, idx) => (
                      <span key={idx} className="text-caption text-text-tertiary bg-bg-secondary px-8 py-4 rounded">
                        {element}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 使用示例 */}
      <section className="mb-48">
        <h2 className="text-title-xl text-text-primary mb-24">使用示例</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
          <div className="card-base card-md shadow-md">
            <h3 className="text-title-m text-text-primary mb-16">卡片组件</h3>
            <p className="text-body-s text-text-secondary mb-16">
              使用中等阴影突出卡片内容，提供适当的视觉层次。
            </p>
            <div className="flex gap-8">
              <button className="btn-primary btn-sm shadow-sm">主要按钮</button>
              <button className="btn-secondary btn-sm shadow-xs">次要按钮</button>
            </div>
          </div>
          <div className="card-base card-md shadow-lg">
            <h3 className="text-title-m text-text-primary mb-16">模态框</h3>
            <p className="text-body-s text-text-secondary mb-16">
              使用深阴影创建模态框的浮动效果，确保在背景之上。
            </p>
            <div className="space-y-8">
              <div className="w-full h-32 bg-bg-secondary rounded flex items-center justify-center">
                <span className="text-caption text-text-tertiary">模态框内容</span>
              </div>
              <div className="flex gap-8">
                <button className="btn-primary btn-sm">确认</button>
                <button className="btn-secondary btn-sm">取消</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 最佳实践 */}
      <section>
        <h2 className="text-title-xl text-text-primary mb-24">最佳实践</h2>
        <div className="card-base card-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
            <div>
              <h3 className="text-title-m text-text-primary mb-16">✅ 推荐</h3>
              <ul className="space-y-8 text-body-s text-text-secondary">
                <li>• 根据元素重要性选择合适的阴影等级</li>
                <li>• 保持阴影方向的一致性</li>
                <li>• 考虑深色模式下的阴影效果</li>
                <li>• 使用层级系统管理元素堆叠</li>
              </ul>
            </div>
            <div>
              <h3 className="text-title-m text-text-primary mb-16">❌ 避免</h3>
              <ul className="space-y-8 text-body-s text-text-secondary">
                <li>• 过度使用阴影造成视觉混乱</li>
                <li>• 阴影方向不一致</li>
                <li>• 忽略性能影响（过多阴影）</li>
                <li>• 层级关系不清晰</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 