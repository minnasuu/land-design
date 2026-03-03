/**
 * Rate 组件元数据
 * @description 用于 AI 代码生成的组件信息描述
 * @author Land Design System
 */

export const RateMeta = {
  // 基础信息
  name: 'Rate',
  chineseName: '评分',
  description: '评分组件，用于对事物进行评级打分。支持整星和半星评分，支持自定义图标，提供丰富的交互方式。',
  
  // 分类
  category: 'form',
  subcategory: 'input',
  
  // 引入方式
  importStatement: "import Rate from 'land-design/Rate';",
  
  // 组件特性
  features: [
    '支持受控和非受控两种模式',
    '支持半星评分',
    '支持清除评分（再次点击清零）',
    '支持自定义评分总数',
    '支持自定义图标',
    '支持选中和未选中不同图标',
    '支持键盘操作（方向键、Home、End）',
    '支持悬停提示文案',
    '支持禁用和只读状态',
    '支持自动聚焦',
    '完善的无障碍访问',
  ],
  
  // 使用场景
  useCases: [
    '商品评价打分',
    '服务满意度评分',
    '内容质量评级',
    '用户反馈评分',
    '技能等级展示',
    '优先级标记',
  ],
  
  // 代码示例
  examples: [
    {
      title: '基础用法',
      description: '默认五颗星评分',
      code: `<Rate defaultValue={3} onChange={(value) => console.log(value)} />`,
    },
    {
      title: '半星评分',
      description: '允许选择半颗星',
      code: `<Rate allowHalf defaultValue={2.5} />`,
    },
    {
      title: '只读模式',
      description: '仅展示评分，不可修改',
      code: `<Rate readOnly value={4} />`,
    },
    {
      title: '禁用状态',
      description: '禁用评分交互',
      code: `<Rate disabled value={3} />`,
    },
    {
      title: '自定义数量',
      description: '设置不同数量的星星',
      code: `<Rate count={10} defaultValue={7} />`,
    },
    {
      title: '自定义图标',
      description: '使用自定义的评分图标',
      code: `<Rate character={<Icon name="heart" />} defaultValue={3} />`,
    },
    {
      title: '不同尺寸',
      description: '小、中、大三种尺寸',
      code: `<Rate size="small" defaultValue={3} />
<Rate size="default" defaultValue={3} />
<Rate size="large" defaultValue={3} />`,
    },
    {
      title: '悬停提示',
      description: '悬停时显示评分文案',
      code: `<Rate
  showTooltip
  tooltips={['很差', '较差', '一般', '良好', '优秀']}
  defaultValue={3}
/>`,
    },
    {
      title: '自定义颜色',
      description: '修改选中和未选中的颜色',
      code: `<Rate
  activeColor="#ff6b6b"
  inactiveColor="#e0e0e0"
  defaultValue={3}
/>`,
    },
    {
      title: '不允许清除',
      description: '禁止清空评分',
      code: `<Rate allowClear={false} defaultValue={3} />`,
    },
  ],
  
  // 相关组件
  relatedComponents: ['Slider', 'Progress'],
  
  // 使用注意事项
  notes: [
    'value 值范围是 0 到 count',
    '半星模式下值可以是 0.5 的倍数',
    '默认允许半星和清除，可通过 allowHalf 和 allowClear 控制',
    'tooltips 数组长度应与 count 相同',
    'character 支持 ReactNode 或返回 ReactNode 的函数',
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

export default RateMeta;
