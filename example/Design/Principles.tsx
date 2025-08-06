import React from 'react';

export default function Principles() {
  const principles = [
    {
      title: "一致性 Consistency",
      description: "保持设计元素的一致性和统一性，确保用户在不同场景下都能获得熟悉的体验。",
      icon: "🎯",
      examples: ["统一的颜色系统", "一致的组件样式", "标准化的交互模式"]
    },
    {
      title: "简洁性 Simplicity",
      description: "追求简洁明了的设计，去除不必要的装饰，让用户专注于核心功能。",
      icon: "✨",
      examples: ["清晰的视觉层次", "精简的界面元素", "直观的操作流程"]
    },
    {
      title: "可访问性 Accessibility",
      description: "确保所有用户都能平等地使用产品，包括残障用户。",
      icon: "♿",
      examples: ["足够的颜色对比度", "键盘导航支持", "屏幕阅读器兼容"]
    },
    {
      title: "响应式 Responsive",
      description: "适配不同设备和屏幕尺寸，提供一致的用户体验。",
      icon: "📱",
      examples: ["移动端优化", "平板适配", "桌面端体验"]
    },
    {
      title: "可扩展性 Scalable",
      description: "设计系统能够支持产品的快速迭代和功能扩展。",
      icon: "🚀",
      examples: ["模块化组件", "灵活的主题系统", "易于维护的代码"]
    }
  ];

  return (
    <div className="max-w-4xl mx-auto">
      {/* 页面标题 */}
      <div className="mb-32">
        <h1 className="text-title-xxl text-text-primary mb-16">设计原则</h1>
        <p className="text-text-secondary text-lg leading-relaxed">
          LandDesign 基于现代设计理念，致力于为用户提供优秀的产品体验。我们的设计原则指导着每一个组件的设计和实现。
        </p>
      </div>

      {/* 设计原则列表 */}
      <div className="space-y-32">
        {principles.map((principle, index) => (
          <div key={index} className="card-base card-lg">
            <div className="flex items-start gap-24">
              <div className="text-48 text-center w-80 flex-shrink-0">
                {principle.icon}
              </div>
              <div className="flex-1">
                <h2 className="text-title-xl text-text-primary mb-16">
                  {principle.title}
                </h2>
                <p className="text-text-secondary text-lg leading-relaxed mb-24">
                  {principle.description}
                </p>
                <div className="space-y-8">
                  {principle.examples.map((example, idx) => (
                    <div key={idx} className="flex items-center gap-12">
                      <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
                        <span className="text-white text-xs font-bold">{idx + 1}</span>
                      </div>
                      <span className="text-text-primary">{example}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* 设计流程 */}
      <div className="mt-48 card-base card-lg">
        <h2 className="text-title-xl text-text-primary mb-24">设计流程</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-24">
          <div className="text-center">
            <div className="w-64 h-64 rounded-full bg-primary text-white flex items-center justify-center text-32 font-bold mx-auto mb-16">
              1
            </div>
            <h3 className="text-title-m text-text-primary mb-8">需求分析</h3>
            <p className="text-text-secondary">深入理解用户需求和业务目标</p>
          </div>
          <div className="text-center">
            <div className="w-64 h-64 rounded-full bg-success text-white flex items-center justify-center text-32 font-bold mx-auto mb-16">
              2
            </div>
            <h3 className="text-title-m text-text-primary mb-8">设计实现</h3>
            <p className="text-text-secondary">基于设计原则创建组件和界面</p>
          </div>
          <div className="text-center">
            <div className="w-64 h-64 rounded-full bg-warning text-white flex items-center justify-center text-32 font-bold mx-auto mb-16">
              3
            </div>
            <h3 className="text-title-m text-text-primary mb-8">D2C</h3>
            <p className="text-text-secondary">Design to Code 设计到代码的转换</p>
          </div>
        </div>
      </div>
    </div>
  );
} 