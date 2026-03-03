/**
 * SelectTree 组件元数据
 * @description 用于 AI 代码生成的组件信息描述
 * @author Land Design System
 */

export const SelectTreeMeta = {
  // 基础信息
  name: 'SelectTree',
  chineseName: '树形选择器',
  description: '树形选择器组件，用于从树形结构的数据中选择一个或多个值。支持单选和多选模式，可展开/收起子节点。',
  
  // 分类
  category: 'form',
  subcategory: 'selection',
  
  // 引入方式
  importStatement: "import SelectTree from 'land-design/SelectTree';",
  
  // 组件特性
  features: [
    '支持树形结构数据',
    '支持单选和多选模式',
    '支持节点展开/收起',
    '支持禁用某些节点',
    '支持节点提示信息',
    '支持自定义选项渲染',
    '支持自定义已选内容显示',
    '多种外观变体：outline、fill、text、transparent',
    '支持最大显示数量限制',
    '支持受控和非受控模式',
  ],
  
  // 使用场景
  useCases: [
    '部门/组织选择',
    '地区级联选择',
    '分类树选择',
    '菜单权限选择',
    '文件目录选择',
    '多级分类筛选',
  ],
  
  // 代码示例
  examples: [
    {
      title: '基础用法',
      description: '单选树形选择器',
      code: `<SelectTree
  options={[
    {
      key: 'parent1',
      label: '父节点1',
      children: [
        { key: 'child1-1', label: '子节点1-1' },
        { key: 'child1-2', label: '子节点1-2' },
      ],
    },
    {
      key: 'parent2',
      label: '父节点2',
      children: [
        { key: 'child2-1', label: '子节点2-1' },
      ],
    },
  ]}
  value={value}
  onChange={(val) => setValue(val)}
/>`,
    },
    {
      title: '多选模式',
      description: '可选择多个节点',
      code: `<SelectTree
  multiple
  options={treeData}
  values={selectedKeys}
  onChange={(vals) => setSelectedKeys(vals)}
/>`,
    },
    {
      title: '禁用某些节点',
      description: '部分节点不可选择',
      code: `<SelectTree
  options={[
    { key: '1', label: '可选' },
    { key: '2', label: '禁用', disabled: true },
    { key: '3', label: '可选' },
  ]}
/>`,
    },
    {
      title: '自定义显示',
      description: '自定义已选内容的展示方式',
      code: `<SelectTree
  options={treeData}
  customValueDisplay={({ items }) => (
    <div>{items.map(i => i.label).join(' > ')}</div>
  )}
/>`,
    },
  ],
  
  // 相关组件
  relatedComponents: ['Select', 'Dropdown', 'Checkbox'],
  
  // 使用注意事项
  notes: [
    'options 中每个选项的 key 必须唯一',
    '单选使用 value/onChange，多选使用 values/onChange',
    'children 字段用于定义子节点',
    'data 属性已废弃，请使用 options',
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

export default SelectTreeMeta;
