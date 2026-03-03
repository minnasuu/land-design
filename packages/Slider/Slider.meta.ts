/**
 * Slider 组件元数据
 * @description 用于 AI 代码生成的组件信息描述
 * @author Land Design System
 */

export const SliderMeta = {
  // 基础信息
  name: 'Slider',
  chineseName: '滑块',
  description: '滑块组件，用于在一个范围内选择数值。支持单值和范围选择，支持刻度标记和 Tooltip 显示。',
  
  // 分类
  category: 'form',
  subcategory: 'input',
  
  // 引入方式
  importStatement: "import Slider from 'land-design/Slider';",
  
  // 组件特性
  features: [
    '支持受控和非受控两种模式',
    '支持单值选择和范围选择',
    '支持设置最小值、最大值和步长',
    '支持水平和垂直方向',
    '支持刻度标记显示',
    '支持 Tooltip 提示值',
    '支持自定义 Tooltip 格式',
    '支持前缀和后缀内容',
    '支持禁用和只读状态',
    '支持自定义样式',
  ],
  
  // 使用场景
  useCases: [
    '音量/亮度调节',
    '价格区间选择',
    '进度调节',
    '数值范围筛选',
    '透明度/颜色调节',
    '时间范围选择',
  ],
  
  // 代码示例
  examples: [
    {
      title: '基础用法',
      description: '单值滑块',
      code: `<Slider defaultValue={30} onChange={(value) => console.log(value)} />`,
    },
    {
      title: '范围选择',
      description: '选择一个数值范围',
      code: `<Slider range defaultValue={[20, 50]} />`,
    },
    {
      title: '设置步长',
      description: '每次移动固定步长',
      code: `<Slider step={10} defaultValue={30} />`,
    },
    {
      title: '设置范围',
      description: '限制可选的数值范围',
      code: `<Slider min={0} max={1000} defaultValue={500} />`,
    },
    {
      title: '显示刻度',
      description: '显示刻度标记',
      code: `<Slider
  showMarks
  marks={[
    { value: 0, label: '0°C' },
    { value: 25, label: '25°C' },
    { value: 50, label: '50°C' },
    { value: 75, label: '75°C' },
    { value: 100, label: '100°C' },
  ]}
  defaultValue={25}
/>`,
    },
    {
      title: '始终显示 Tooltip',
      description: '持续显示当前值',
      code: `<Slider tooltip="always" defaultValue={50} />`,
    },
    {
      title: '自定义 Tooltip',
      description: '格式化 Tooltip 内容',
      code: `<Slider
  tooltipFormatter={(value) => \`\${value}%\`}
  defaultValue={60}
/>`,
    },
    {
      title: '垂直方向',
      description: '垂直布局的滑块',
      code: `<Slider orientation="vertical" style={{ height: 200 }} defaultValue={50} />`,
    },
    {
      title: '不同尺寸',
      description: '小、中、大三种尺寸',
      code: `<Slider size="small" defaultValue={30} />
<Slider size="default" defaultValue={50} />
<Slider size="large" defaultValue={70} />`,
    },
  ],
  
  // 相关组件
  relatedComponents: ['NumberInput', 'Progress', 'Rate'],
  
  // 使用注意事项
  notes: [
    'value 为数组时自动启用范围模式',
    'step 必须大于 0',
    '垂直模式下需要设置容器高度',
    'onChange 在拖动过程中持续触发，onChangeComplete 在拖动结束时触发',
    'marks 中的 value 值应在 min 和 max 范围内',
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

export default SliderMeta;
