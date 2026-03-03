/**
 * NumberInput 组件元数据
 * @description 用于 AI 代码生成的组件信息描述
 * @author Land Design System
 */

export const NumberInputMeta = {
  // 基础信息
  name: 'NumberInput',
  chineseName: '数字输入框',
  description: '数字输入框组件，用于数值输入的专用输入框，支持步进调整、范围限制、滚轮控制、精度控制等功能。提供多种外观变体和步进按钮布局。',
  
  // 分类
  category: 'form',
  subcategory: 'input',
  
  // 引入方式
  importStatement: "import NumberInput from 'land-design/NumberInput';",
  
  // 组件特性
  features: [
    '支持受控和非受控两种模式',
    '支持设置数值范围（min/max）',
    '支持自定义步长（step）',
    '支持数值精度控制（precision）',
    '支持严格步进模式',
    '支持滚轮调整数值',
    '支持键盘方向键控制',
    '支持自定义格式化显示',
    '支持前缀和后缀内容',
    '步进按钮可配置位置：右侧、两侧、隐藏',
    '多种外观变体：outline、fill、transparent',
    '支持自适应宽度',
    '完善的禁用和只读状态',
  ],
  
  // 使用场景
  useCases: [
    '数量选择（如商品数量、人数等）',
    '金额输入（配合精度控制）',
    '参数配置（如百分比、尺寸等）',
    '表单中的数值输入',
    '计数器功能',
    '数值范围选择',
  ],
  
  // 代码示例
  examples: [
    {
      title: '基础用法',
      description: '最简单的数字输入框',
      code: `<NumberInput defaultValue={0} onChange={(value) => console.log(value)} />`,
    },
    {
      title: '设置范围和步长',
      description: '限制输入范围并设置步长',
      code: `<NumberInput min={0} max={100} step={5} defaultValue={50} />`,
    },
    {
      title: '精度控制',
      description: '设置小数位数',
      code: `<NumberInput precision={2} step={0.01} defaultValue={0.5} />`,
    },
    {
      title: '带前后缀',
      description: '添加货币符号等装饰',
      code: `<NumberInput prefix="¥" suffix="元" defaultValue={100} />`,
    },
    {
      title: '两侧步进按钮',
      description: '步进按钮分布在两侧',
      code: `<NumberInput stepperPosition="both" defaultValue={0} />`,
    },
    {
      title: '滚轮控制',
      description: '启用鼠标滚轮调整数值',
      code: `<NumberInput wheelable defaultValue={0} />`,
    },
    {
      title: '自定义格式化',
      description: '自定义数值显示格式',
      code: `<NumberInput
  formatter={(value) => \`$ \${value}\`.replace(/\\B(?=(\\d{3})+(?!\\d))/g, ',')}
  parser={(displayValue) => Number(displayValue.replace(/\\$\\s?|(,*)/g, ''))}
  defaultValue={1000}
/>`,
    },
    {
      title: '不同外观变体',
      description: '展示不同的视觉样式',
      code: `<>
  <NumberInput variant="outline" defaultValue={0} />
  <NumberInput variant="fill" defaultValue={0} />
  <NumberInput variant="transparent" defaultValue={0} />
</>`,
    },
  ],
  
  // 相关组件
  relatedComponents: ['Input', 'Slider', 'Rate'],
  
  // 使用注意事项
  notes: [
    '当同时设置 precision 和 step 时，确保 step 的精度与 precision 匹配',
    'strictStep 模式下，值必须是步长的倍数',
    '滚轮控制需要设置 wheelable 为 true',
    'formatter 和 parser 需要成对使用',
    '受控模式下需要同时使用 value 和 onChange',
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

export default NumberInputMeta;
