/**
 * Tag 组件元数据
 * @description 用于 AI 代码生成的组件信息描述
 */

export const TagMeta = {
  // 组件基本信息
  name: 'Tag',
  chineseName: '标签',
  description: '标签组件，用于进行标记和分类的小标签。支持多种变体、颜色、形状，可用于信息分类、状态标记、筛选条件展示等场景。',
  
  // 组件分类
  category: 'display',
  subcategory: 'label',
  
  // 引入方式
  importStatement: "import Tag from 'land-design/Tag';",
  
  // 组件特性
  features: [
    '支持三种变体：filled（填充）、outlined（描边）、light（浅色）',
    '支持多种预设颜色：default、primary、success、warning、error、info',
    '支持自定义颜色：backgroundColor、textColor、borderColor',
    '支持三种尺寸：small、medium、large',
    '支持三种形状：square（直角）、rounded（圆角）、pill（胶囊形）',
    '支持关闭/删除功能，可自定义关闭图标',
    '支持可选中模式（checkable），带选中状态',
    '支持可点击模式，显示 hover 效果',
    '支持前置和后置图标',
    '支持受控和非受控的显示/隐藏',
    '提供 CheckableTag 子组件，专门用于可选中标签',
    '提供 TagGroup 子组件，用于管理标签组',
    '支持文字加粗'
  ],
  
  // 使用场景
  useCases: [
    '文章或内容的标签分类',
    '商品属性标签展示',
    '用户标签/角色标识',
    '状态标记（如：已发布、待审核）',
    '筛选条件的可视化展示',
    '多选筛选器（使用 CheckableTag）',
    '标签云展示',
    '消息或通知的类型标记'
  ],
  
  // 代码示例
  examples: [
    {
      title: '基础用法',
      description: '最简单的标签使用方式',
      code: `<Tag>默认标签</Tag>
<Tag color="primary">主色标签</Tag>
<Tag color="success">成功标签</Tag>
<Tag color="warning">警告标签</Tag>
<Tag color="error">错误标签</Tag>`
    },
    {
      title: '不同变体',
      description: '三种不同的标签变体样式',
      code: `<Tag variant="filled" color="primary">填充样式</Tag>
<Tag variant="outlined" color="primary">描边样式</Tag>
<Tag variant="light" color="primary">浅色样式</Tag>`
    },
    {
      title: '不同尺寸',
      description: '三种不同尺寸的标签',
      code: `<Tag size="small">小标签</Tag>
<Tag size="medium">中标签</Tag>
<Tag size="large">大标签</Tag>`
    },
    {
      title: '不同形状',
      description: '三种不同形状的标签',
      code: `<Tag shape="square">直角标签</Tag>
<Tag shape="rounded">圆角标签</Tag>
<Tag shape="pill">胶囊标签</Tag>`
    },
    {
      title: '带图标的标签',
      description: '在标签中添加前置或后置图标',
      code: `import { Icon } from 'land-design';

<Tag icon={<Icon name="user" />}>用户</Tag>
<Tag suffixIcon={<Icon name="close" />}>带后置图标</Tag>`
    },
    {
      title: '可关闭标签',
      description: '支持关闭/删除的标签',
      code: `const [visible, setVisible] = useState(true);

{visible && (
  <Tag 
    closable 
    onClose={() => setVisible(false)}
  >
    可关闭标签
  </Tag>
)}`
    },
    {
      title: '可选中标签',
      description: '支持选中状态的标签',
      code: `const [checked, setChecked] = useState(false);

<Tag 
  checkable 
  checked={checked}
  onCheck={(val) => setChecked(val)}
>
  {checked ? '已选中' : '点击选中'}
</Tag>

// 或使用 CheckableTag 组件
<Tag.CheckableTag 
  checked={checked} 
  onChange={setChecked}
>
  可选中标签
</Tag.CheckableTag>`
    },
    {
      title: '标签组',
      description: '使用 TagGroup 管理多个标签',
      code: `<Tag.Group gap={8} maxCount={5}>
  <Tag>标签1</Tag>
  <Tag>标签2</Tag>
  <Tag>标签3</Tag>
  <Tag>标签4</Tag>
  <Tag>标签5</Tag>
  <Tag>标签6</Tag>
</Tag.Group>`
    },
    {
      title: '自定义颜色',
      description: '使用自定义颜色的标签',
      code: `<Tag backgroundColor="#f0f5ff" textColor="#1890ff" borderColor="#91d5ff">
  自定义颜色
</Tag>
<Tag color="#722ed1">紫色标签</Tag>`
    }
  ],
  
  // 相关组件
  relatedComponents: ['Badge', 'Checkbox', 'Button'],
  
  // 使用注意事项
  notes: [
    'color 属性支持预设颜色字符串，也支持自定义颜色值',
    'backgroundColor、textColor、borderColor 优先级高于 color',
    '使用 checkable 模式时，建议配合 checked 和 onCheck 使用受控模式',
    'TagGroup 的 maxCount 会自动折叠超出的标签，并显示 +N',
    '关闭事件 onClose 触发后不会自动隐藏标签，需要自行控制 visible',
    'children 和图标内容不宜过长，标签应保持简洁'
  ],
  
  // 版本信息
  version: '1.0.0',
  
  // 更新日志
  changelog: [
    { version: '1.0.0', date: '2024-01-01', description: '初始版本，支持基础标签功能' }
  ]
};

export default TagMeta;
