/**
 * Dropdown 组件元数据
 * 用于 AI 代码生成和组件文档
 */

export const DropdownMeta = {
  name: 'Dropdown',
  chineseName: '下拉菜单',
  description: '下拉菜单组件，用于展示下拉选项列表。支持悬停和点击两种触发方式。',

  category: 'navigation',
  subcategory: 'dropdown',

  importStatement: "import Dropdown from 'land-design/Dropdown';",

  features: [
    '支持 hover 和 click 两种触发方式',
    '支持上下两种展开方向',
    '支持左中右三种对齐方式',
    '支持数据驱动和自定义内容',
    '支持挂载到指定容器',
    '支持受控展开状态',
  ],

  useCases: [
    '导航菜单：下拉导航菜单',
    '操作菜单：更多操作下拉菜单',
    '选择器：简单选择场景',
    '用户菜单：用户头像下拉菜单',
  ],

  examples: [
    {
      title: '基础用法',
      description: '基础的下拉菜单',
      code: `<Dropdown
  items={[
    { key: '1', label: '选项1' },
    { key: '2', label: '选项2' },
    { key: '3', label: '选项3' },
  ]}
  onChange={(item) => console.log(item)}
>
  <Button text="下拉菜单" />
</Dropdown>`,
    },
    {
      title: '点击触发',
      description: '点击触发下拉菜单',
      code: `<Dropdown
  trigger="click"
  items={[
    { key: '1', label: '选项1' },
    { key: '2', label: '选项2' },
  ]}
>
  <Button text="点击展开" />
</Dropdown>`,
    },
    {
      title: '自定义内容',
      description: '自定义下拉内容',
      code: `<Dropdown content={<CustomPanel />}>
  <Button text="自定义内容" />
</Dropdown>`,
    },
    {
      title: '向上展开',
      description: '下拉面板向上展开',
      code: `<Dropdown placement="top" items={items}>
  <Button text="向上展开" />
</Dropdown>`,
    },
  ],

  relatedComponents: ['Select', 'Menu', 'PopOver'],

  notes: [
    'content 优先级高于 items',
    'trigger 默认为 hover',
    'attach 可指定面板挂载位置',
    '可通过 open 实现受控模式',
  ],

  version: '1.0.0',
  changelog: [
    { version: '1.0.0', date: '2024-01-01', changes: ['初始版本发布'] },
  ],
};

export default DropdownMeta;
