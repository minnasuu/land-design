import React from 'react';

export default function Typography() {
  const fontSizes = [
    { class: 'text-title-xxl', size: '48px', weight: '600', description: '超大标题' },
    { class: 'text-title-xl', size: '36px', weight: '600', description: '大标题' },
    { class: 'text-title-l', size: '28px', weight: '600', description: '标题' },
    { class: 'text-title-m', size: '24px', weight: '600', description: '中标题' },
    { class: 'text-title-s', size: '20px', weight: '600', description: '小标题' },
    { class: 'text-body-l', size: '18px', weight: '400', description: '大正文' },
    { class: 'text-body-m', size: '16px', weight: '400', description: '正文' },
    { class: 'text-body-s', size: '14px', weight: '400', description: '小正文' },
    { class: 'text-caption', size: '12px', weight: '400', description: '说明文字' },
  ];

  const fontWeights = [
    { class: 'font-thin', weight: '100', description: '极细' },
    { class: 'font-light', weight: '300', description: '细体' },
    { class: 'font-normal', weight: '400', description: '常规' },
    { class: 'font-medium', weight: '500', description: '中等' },
    { class: 'font-semibold', weight: '600', description: '半粗' },
    { class: 'font-bold', weight: '700', description: '粗体' },
    { class: 'font-extrabold', weight: '800', description: '特粗' },
  ];

  const textColors = [
    { class: 'text-text-primary', description: '主要文本' },
    { class: 'text-text-secondary', description: '次要文本' },
    { class: 'text-text-tertiary', description: '第三级文本' },
    { class: 'text-text-quaternary', description: '第四级文本' },
    { class: 'text-text-disabled', description: '禁用文本' },
  ];

  return (
    <div className="max-w-4xl mx-auto">
      {/* 页面标题 */}
      <div className="mb-32">
        <h1 className="text-title-xxl text-text-primary mb-16">字体规范</h1>
        <p className="text-text-secondary text-lg leading-relaxed">
          LandDesign 采用现代化的字体系统，确保在不同设备和场景下都能提供清晰易读的文本体验。
        </p>
      </div>

      {/* 字体大小 */}
      <section className="mb-48">
        <h2 className="text-title-xl text-text-primary mb-24">字体大小</h2>
        <div className="card-base card-lg">
          <div className="space-y-16">
            {fontSizes.map((font, index) => (
              <div key={index} className="flex items-center justify-between p-16 border-b border-border-secondary last:border-b-0">
                <div className="flex-1">
                  <div className={`${font.class} text-text-primary mb-4`}>
                    {font.description}
                  </div>
                  <div className="text-caption text-text-tertiary">
                    {font.class} • {font.size} • {font.weight}
                  </div>
                </div>
                <div className="text-caption text-text-quaternary bg-bg-secondary px-8 py-4 rounded">
                  {font.size}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 字体粗细 */}
      <section className="mb-48">
        <h2 className="text-title-xl text-text-primary mb-24">字体粗细</h2>
        <div className="card-base card-lg">
          <div className="space-y-16">
            {fontWeights.map((font, index) => (
              <div key={index} className="flex items-center justify-between p-16 border-b border-border-secondary last:border-b-0">
                <div className="flex-1">
                  <div className={`text-body-m ${font.class} text-text-primary mb-4`}>
                    字体粗细示例文本
                  </div>
                  <div className="text-caption text-text-tertiary">
                    {font.class} • {font.weight}
                  </div>
                </div>
                <div className="text-caption text-text-quaternary bg-bg-secondary px-8 py-4 rounded">
                  {font.weight}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 文本颜色 */}
      <section className="mb-48">
        <h2 className="text-title-xl text-text-primary mb-24">文本颜色</h2>
        <div className="card-base card-lg">
          <div className="space-y-16">
            {textColors.map((color, index) => (
              <div key={index} className="flex items-center justify-between p-16 border-b border-border-secondary last:border-b-0">
                <div className="flex-1">
                  <div className={`text-body-m ${color.class} mb-4`}>
                    这是一段示例文本，展示不同的文本颜色效果
                  </div>
                  <div className="text-caption text-text-tertiary">
                    {color.class}
                  </div>
                </div>
                <div className="text-caption text-text-quaternary bg-bg-secondary px-8 py-4 rounded">
                  {color.description}
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
          <div className="card-base card-md">
            <h3 className="text-title-m text-text-primary mb-16">页面标题</h3>
            <div className="space-y-12">
              <h1 className="text-title-xxl text-text-primary">页面主标题</h1>
              <h2 className="text-title-xl text-text-primary">页面副标题</h2>
              <p className="text-body-m text-text-secondary">
                这是页面的主要内容描述，使用正文大小和次要文本颜色。
              </p>
            </div>
          </div>
          <div className="card-base card-md">
            <h3 className="text-title-m text-text-primary mb-16">卡片内容</h3>
            <div className="space-y-12">
              <h3 className="text-title-s text-text-primary">卡片标题</h3>
              <p className="text-body-s text-text-secondary">
                卡片内容使用较小的字体大小，保持视觉层次。
              </p>
              <div className="text-caption text-text-tertiary">
                辅助信息使用说明文字
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
                <li>• 使用语义化的字体大小类名</li>
                <li>• 保持合适的行高和字间距</li>
                <li>• 确保文本颜色有足够的对比度</li>
                <li>• 在不同设备上测试可读性</li>
              </ul>
            </div>
            <div>
              <h3 className="text-title-m text-text-primary mb-16">❌ 避免</h3>
              <ul className="space-y-8 text-body-s text-text-secondary">
                <li>• 使用过小的字体大小</li>
                <li>• 文本颜色对比度不足</li>
                <li>• 在同一页面使用过多字体大小</li>
                <li>• 忽略移动端的可读性</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 