/**
 * Statistic 组件元数据
 * @description 用于 AI 代码生成的组件信息描述
 * @author Land Design System
 */

export const StatisticMeta = {
  // 基础信息
  name: 'Statistic',
  chineseName: '统计数值',
  description: '统计数值组件，用于展示统计数据，支持数值动画、趋势指示、前后缀等功能。适用于数据大屏和数据展示场景。',
  
  // 分类
  category: 'display',
  subcategory: 'data',
  
  // 引入方式
  importStatement: "import Statistic from 'land-design/Statistic';",
  
  // 组件特性
  features: [
    '数值精度控制',
    '支持前缀和后缀',
    '支持单位显示',
    '支持趋势图标（上升/下降）',
    '丰富的数值动画效果',
    '支持自定义动画配置',
    '动画支持循环播放',
  ],
  
  // 使用场景
  useCases: [
    '数据大屏展示',
    '仪表盘数据卡片',
    '销售额/订单量统计',
    '用户增长数据',
    '实时数据监控',
    '财务报表数据',
  ],
  
  // 代码示例
  examples: [
    {
      title: '基础用法',
      description: '简单的数值展示',
      code: `<Statistic value={1234567} />`,
    },
    {
      title: '带精度',
      description: '控制小数位数',
      code: `<Statistic value={99.56} precision={2} />`,
    },
    {
      title: '带前后缀',
      description: '添加货币符号等',
      code: `<Statistic value={112893} prefix="¥" suffix="元" />`,
    },
    {
      title: '带单位',
      description: '显示数值单位',
      code: `<Statistic value={98.6} unit="%" />`,
    },
    {
      title: '趋势图标',
      description: '显示上升/下降趋势',
      code: `<Statistic value={11.28} trendIcon="up" suffix="%" />
<Statistic value={-5.32} trendIcon="down" suffix="%" />`,
    },
    {
      title: '数值动画',
      description: '数值变化动画效果',
      code: `<Statistic value={999} animation="increase" />`,
    },
    {
      title: '随机数字滚动',
      description: '老虎机风格的数字滚动',
      code: `<Statistic value={8888} animation="random" />`,
    },
    {
      title: '自定义动画配置',
      description: '配置动画时长和缓动',
      code: `<Statistic 
  value={5000} 
  animation="increase"
  animationConfig={{
    duration: 2000,
    easing: 'easeOut',
  }}
/>`,
    },
    {
      title: '循环动画',
      description: '动画循环播放',
      code: `<Statistic 
  value={100} 
  animation="bounce"
  animationConfig={{ loop: true, loopInterval: 3000 }}
/>`,
    },
  ],
  
  // 相关组件
  relatedComponents: ['Progress', 'NumberInput'],
  
  // 使用注意事项
  notes: [
    'precision 用于控制小数点后的位数',
    '动画效果：increase（增长）、decrease（减少）、random（随机滚动）等',
    '趋势图标与动画可以同时使用',
    '显示顺序：prefix + value + unit + suffix + trendIcon',
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

export default StatisticMeta;
