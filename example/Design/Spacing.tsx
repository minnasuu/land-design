import React from 'react';

export default function Spacing() {
  const spacingScale = [
    { class: 'space-0', value: '0px', description: '无间距' },
    { class: 'space-4', value: '4px', description: '极小间距' },
    { class: 'space-8', value: '8px', description: '小间距' },
    { class: 'space-12', value: '12px', description: '较小间距' },
    { class: 'space-16', value: '16px', description: '基础间距' },
    { class: 'space-24', value: '24px', description: '中等间距' },
    { class: 'space-32', value: '32px', description: '大间距' },
    { class: 'space-48', value: '48px', description: '超大间距' },
    { class: 'space-64', value: '64px', description: '特大间距' },
  ];

  const paddingScale = [
    { class: 'p-0', value: '0px', description: '无内边距' },
    { class: 'p-4', value: '4px', description: '极小内边距' },
    { class: 'p-8', value: '8px', description: '小内边距' },
    { class: 'p-12', value: '12px', description: '较小内边距' },
    { class: 'p-16', value: '16px', description: '基础内边距' },
    { class: 'p-24', value: '24px', description: '中等内边距' },
    { class: 'p-32', value: '32px', description: '大内边距' },
    { class: 'p-48', value: '48px', description: '超大内边距' },
  ];

  const marginScale = [
    { class: 'm-0', value: '0px', description: '无外边距' },
    { class: 'm-4', value: '4px', description: '极小外边距' },
    { class: 'm-8', value: '8px', description: '小外边距' },
    { class: 'm-12', value: '12px', description: '较小外边距' },
    { class: 'm-16', value: '16px', description: '基础外边距' },
    { class: 'm-24', value: '24px', description: '中等外边距' },
    { class: 'm-32', value: '32px', description: '大外边距' },
    { class: 'm-48', value: '48px', description: '超大外边距' },
  ];

  const layoutExamples = [
    {
      title: '卡片布局',
      description: '使用统一的内边距和外边距创建一致的卡片布局',
      example: 'p-24 m-16'
    },
    {
      title: '按钮组',
      description: '按钮之间的间距使用小间距保持紧凑',
      example: 'gap-8'
    },
    {
      title: '表单布局',
      description: '表单项之间使用中等间距提供良好的视觉呼吸感',
      example: 'space-y-24'
    },
    {
      title: '页面布局',
      description: '页面主要区域使用大间距分隔不同内容块',
      example: 'space-y-48'
    }
  ];

  return (
    <div className="max-w-4xl mx-auto">
      {/* 页面标题 */}
      <div className="mb-32">
        <h1 className="text-title-xxl text-text-primary mb-16">间距规范</h1>
        <p className="text-text-secondary text-lg leading-relaxed">
          LandDesign 采用 8px 基础单位的间距系统，确保界面布局的一致性和视觉平衡。
        </p>
      </div>

      {/* 间距比例 */}
      <section className="mb-48">
        <h2 className="text-title-xl text-text-primary mb-24">间距比例</h2>
        <div className="card-base card-lg">
          <div className="space-y-16">
            {spacingScale.map((spacing, index) => (
              <div key={index} className="flex items-center justify-between p-16 border-b border-border-secondary last:border-b-0">
                <div className="flex-1">
                  <div className="flex items-center gap-16 mb-8">
                    <h3 className="text-title-s text-text-primary">{spacing.class}</h3>
                    <span className="text-caption text-text-quaternary bg-bg-secondary px-8 py-4 rounded">
                      {spacing.value}
                    </span>
                  </div>
                  <p className="text-body-s text-text-secondary">{spacing.description}</p>
                </div>
                <div className="flex items-center gap-8">
                  <div className="w-16 h-16 bg-primary rounded"></div>
                  <div className={`h-16 bg-border-primary rounded`} style={{ width: spacing.value }}></div>
                  <div className="w-16 h-16 bg-primary rounded"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 内边距 */}
      <section className="mb-48">
        <h2 className="text-title-xl text-text-primary mb-24">内边距 (Padding)</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
          {paddingScale.map((padding, index) => (
            <div key={index} className="card-base card-sm">
              <div className={`${padding.class} bg-bg-secondary rounded`}>
                <div className="text-center">
                  <h3 className="text-title-s text-text-primary mb-8">{padding.class}</h3>
                  <p className="text-caption text-text-tertiary mb-8">{padding.value}</p>
                  <div className="w-full h-32 bg-primary rounded flex items-center justify-center">
                    <span className="text-caption text-white">内容区域</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 外边距 */}
      <section className="mb-48">
        <h2 className="text-title-xl text-text-primary mb-24">外边距 (Margin)</h2>
        <div className="card-base card-lg">
          <div className="space-y-16">
            {marginScale.map((margin, index) => (
              <div key={index} className="flex items-center justify-between p-16 border-b border-border-secondary last:border-b-0">
                <div className="flex-1">
                  <div className="flex items-center gap-16 mb-8">
                    <h3 className="text-title-s text-text-primary">{margin.class}</h3>
                    <span className="text-caption text-text-quaternary bg-bg-secondary px-8 py-4 rounded">
                      {margin.value}
                    </span>
                  </div>
                  <p className="text-body-s text-text-secondary">{margin.description}</p>
                </div>
                <div className="flex items-center gap-8">
                  <div className="w-32 h-32 bg-bg-secondary rounded border-2 border-dashed border-border-primary flex items-center justify-center">
                    <span className="text-caption text-text-tertiary">元素</span>
                  </div>
                  <div className={`h-32 bg-border-primary rounded`} style={{ width: margin.value }}></div>
                  <div className="w-32 h-32 bg-bg-secondary rounded border-2 border-dashed border-border-primary flex items-center justify-center">
                    <span className="text-caption text-text-tertiary">元素</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 布局示例 */}
      <section className="mb-48">
        <h2 className="text-title-xl text-text-primary mb-24">布局示例</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
          {layoutExamples.map((example, index) => (
            <div key={index} className="card-base card-md">
              <h3 className="text-title-m text-text-primary mb-16">{example.title}</h3>
              <p className="text-body-s text-text-secondary mb-16">{example.description}</p>
              <div className="text-caption text-text-quaternary bg-bg-secondary px-8 py-4 rounded mb-16">
                {example.example}
              </div>
              <div className="space-y-8">
                <div className="p-16 bg-bg-secondary rounded">
                  <span className="text-caption text-text-tertiary">内容块 1</span>
                </div>
                <div className="p-16 bg-bg-secondary rounded">
                  <span className="text-caption text-text-tertiary">内容块 2</span>
                </div>
                <div className="p-16 bg-bg-secondary rounded">
                  <span className="text-caption text-text-tertiary">内容块 3</span>
                </div>
              </div>
            </div>
          ))}
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
                <li>• 使用 8px 的倍数作为间距基础</li>
                <li>• 保持间距的一致性</li>
                <li>• 根据内容重要性调整间距</li>
                <li>• 考虑响应式布局的间距适配</li>
              </ul>
            </div>
            <div>
              <h3 className="text-title-m text-text-primary mb-16">❌ 避免</h3>
              <ul className="space-y-8 text-body-s text-text-secondary">
                <li>• 使用随意的间距值</li>
                <li>• 间距过大或过小</li>
                <li>• 忽略移动端的间距适配</li>
                <li>• 不同组件间间距不一致</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 