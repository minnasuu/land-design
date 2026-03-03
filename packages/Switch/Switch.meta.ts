/**
 * Switch 组件元数据
 * @description 用于 AI 代码生成的组件信息描述
 * @author Land Design System
 */

export const SwitchMeta = {
  // 基础信息
  name: 'Switch',
  chineseName: '开关',
  description: '开关组件，用于表示两种相互对立的状态间的切换。比 Checkbox 更直观地展示开/关状态。',
  
  // 分类
  category: 'form',
  subcategory: 'selection',
  
  // 引入方式
  importStatement: "import Switch from 'land-design/Switch';",
  
  // 组件特性
  features: [
    '支持受控和非受控两种模式',
    '支持标签文字（可根据状态变化）',
    '支持轨道内显示内容',
    '支持滑块内显示图标',
    '支持加载状态',
    '支持禁用和只读状态',
    '支持提示信息',
    '三种尺寸可选',
    '支持自定义样式',
  ],
  
  // 使用场景
  useCases: [
    '设置项的开关',
    '功能启用/禁用',
    '权限开关',
    '模式切换（如暗黑模式）',
    '消息通知开关',
    '自动保存开关',
  ],
  
  // 代码示例
  examples: [
    {
      title: '基础用法',
      description: '简单的开关',
      code: `<Switch onChange={(checked) => console.log(checked)} />`,
    },
    {
      title: '默认开启',
      description: '初始为开启状态',
      code: `<Switch defaultChecked />`,
    },
    {
      title: '受控模式',
      description: '通过 checked 控制状态',
      code: `<Switch checked={isOn} onChange={(checked) => setIsOn(checked)} />`,
    },
    {
      title: '带标签',
      description: '显示标签文字',
      code: `<Switch label="自动保存" />`,
    },
    {
      title: '状态切换标签',
      description: '开/关显示不同标签',
      code: `<Switch label="关闭" checkedLabel="开启" />`,
    },
    {
      title: '轨道内文字',
      description: '在轨道内显示状态文字',
      code: `<Switch uncheckedContent="OFF" checkedContent="ON" />`,
    },
    {
      title: '滑块图标',
      description: '在滑块内显示图标',
      code: `<Switch 
  icon={<Icon name="close" />}
  checkedIcon={<Icon name="check" />}
/>`,
    },
    {
      title: '加载状态',
      description: '切换时显示加载中',
      code: `<Switch loading />`,
    },
    {
      title: '禁用状态',
      description: '不可操作的开关',
      code: `<Switch disabled />
<Switch disabled checked />`,
    },
    {
      title: '不同尺寸',
      description: '小、中、大三种尺寸',
      code: `<Switch size="small" />
<Switch size="default" />
<Switch size="large" />`,
    },
    {
      title: '带提示',
      description: '显示帮助提示信息',
      code: `<Switch label="高级选项" iconTip="开启后将启用高级功能" />`,
    },
  ],
  
  // 相关组件
  relatedComponents: ['Checkbox', 'Radio'],
  
  // 使用注意事项
  notes: [
    '受控模式需要同时使用 checked 和 onChange',
    'loading 状态时开关不可点击',
    '标签位置可通过 labelPosition 设置为左侧或右侧',
    '滑块图标和轨道内容可以同时使用',
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

export default SwitchMeta;
