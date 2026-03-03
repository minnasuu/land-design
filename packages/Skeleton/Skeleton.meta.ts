/**
 * Skeleton 组件元数据
 * @description 用于 AI 代码生成的组件信息描述
 * @author Land Design System
 */

export const SkeletonMeta = {
  // 基础信息
  name: 'Skeleton',
  chineseName: '骨架屏',
  description: '骨架屏组件，用于在内容加载过程中显示占位图形，减少用户等待的焦虑感。支持自定义形状、尺寸和动画效果。',
  
  // 分类
  category: 'feedback',
  subcategory: 'loading',
  
  // 引入方式
  importStatement: "import Skeleton from 'land-design/Skeleton';",
  
  // 组件特性
  features: [
    '支持自定义宽度和高度',
    '支持自定义圆角',
    '支持自定义渐变色',
    '内置加载动画效果',
    '可组合构建复杂骨架',
    '轻量级实现',
  ],
  
  // 使用场景
  useCases: [
    '页面首次加载占位',
    '列表数据加载占位',
    '图片加载占位',
    '卡片内容加载占位',
    '表单加载占位',
    '文章内容加载占位',
  ],
  
  // 代码示例
  examples: [
    {
      title: '基础用法',
      description: '简单的矩形骨架',
      code: `<Skeleton width={200} height={20} />`,
    },
    {
      title: '圆形骨架',
      description: '头像占位',
      code: `<Skeleton width={48} height={48} radius="50%" />`,
    },
    {
      title: '圆角矩形',
      description: '按钮占位',
      code: `<Skeleton width={100} height={36} radius={18} />`,
    },
    {
      title: '自定义颜色',
      description: '修改渐变色',
      code: `<Skeleton 
  width={200} 
  height={20} 
  start="#f0f0f0" 
  stop="#e0e0e0" 
/>`,
    },
    {
      title: '组合使用',
      description: '构建卡片骨架',
      code: `<div style={{ display: 'flex', gap: 12 }}>
  <Skeleton width={48} height={48} radius="50%" />
  <div style={{ flex: 1 }}>
    <Skeleton width="60%" height={16} />
    <Skeleton width="100%" height={12} style={{ marginTop: 8 }} />
    <Skeleton width="80%" height={12} style={{ marginTop: 4 }} />
  </div>
</div>`,
    },
    {
      title: '列表骨架',
      description: '多行文本占位',
      code: `<>
  <Skeleton width="100%" height={16} />
  <Skeleton width="90%" height={16} style={{ marginTop: 8 }} />
  <Skeleton width="70%" height={16} style={{ marginTop: 8 }} />
</>`,
    },
  ],
  
  // 相关组件
  relatedComponents: ['Loading', 'State'],
  
  // 使用注意事项
  notes: [
    '建议骨架屏的布局与实际内容布局保持一致',
    '可以通过组合多个 Skeleton 构建复杂的加载占位',
    'width 和 height 支持数字（px）或字符串（如百分比）',
    '动画效果自动启用，无需额外配置',
  ],
  
  // 版本信息
  version: '1.0.0',
  
  // 更新日志
  changelog: [
    {
      version: '1.0.0',
      date: '2024-01-01',
      changes: ['初始版本发布'],
    },
  ],
};

export default SkeletonMeta;
