/**
 * Tree 组件元数据
 * @description 用于 AI 代码生成的组件信息描述
 * @author Land Design System
 */

export const TreeMeta = {
  // 基础信息
  name: 'Tree',
  chineseName: '树',
  description: '内联缩进树组件，常驻展示层级数据，支持单选、多选（复选框）与父子节点联动。',

  // 分类
  category: 'data',
  subcategory: 'display',

  // 引入方式
  importStatement: "import Tree from 'land-design/Tree';",

  // 组件特性
  features: [
    '内联常驻展示，无下拉触发器',
    '经典单列缩进层级结构',
    '支持展开/收起',
    '支持单选与多选（复选框）',
    '多选支持父子节点联动（半选/全选）',
    '支持禁用某些节点',
    '支持自定义节点渲染',
    '支持受控与非受控模式',
  ],

  // 使用场景
  useCases: [
    '文件目录树',
    '组织架构展示',
    '权限/菜单树',
    '分类导航',
    '内联多选归类',
  ],

  // 代码示例
  examples: [
    {
      title: '基础用法',
      description: '单选内联树',
      code: `<Tree
  treeData={treeData}
  defaultExpandedKeys={['root']}
  value={value}
  onChange={(v) => setValue(v)}
/>`,
    },
    {
      title: '多选模式',
      description: '显示复选框并支持父子联动',
      code: `<Tree
  multiple
  treeData={treeData}
  values={values}
  onChange={(v) => setValues(v)}
/>`,
    },
  ],

  // 相关组件
  relatedComponents: ['Cascader', 'Checkbox'],

  // 使用注意事项
  notes: [
    'treeData 中每个节点的 key 必须唯一',
    '单选使用 value，多选使用 values',
    'children 字段用于定义子节点',
    'Tree 为内联展示组件，不带下拉触发器；需要下拉请使用 Cascader',
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

export default TreeMeta;
