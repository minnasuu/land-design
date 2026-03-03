/**
 * Textarea 组件元数据
 * @description 用于 AI 代码生成的组件信息描述
 */

export const TextareaMeta = {
  // 组件基本信息
  name: 'Textarea',
  chineseName: '多行文本框',
  description: '多行文本输入框组件，用于输入多行文本内容。支持自动高度调整、字数统计、多种外观变体等功能。',
  
  // 组件分类
  category: 'form',
  subcategory: 'input',
  
  // 引入方式
  importStatement: "import Textarea from 'land-design/Textarea';",
  
  // 组件特性
  features: [
    '三种外观变体：outline（描边）、filled（填充）、transparent（透明）',
    '五种语义状态：default、primary、warning、danger、success',
    '支持自动高度调整（autoSize），可设置最小和最大行数',
    '支持字数统计显示，可自定义格式',
    '支持最大字符数限制',
    '支持清除按钮',
    '支持禁用和只读状态',
    '支持自定义尺寸调整方式（resize）',
    '支持块级显示（占满容器宽度）',
    '支持前置和后置内容区域',
    '支持受控和非受控模式'
  ],
  
  // 使用场景
  useCases: [
    '评论/留言输入',
    '文章/博客内容编辑',
    '备注信息填写',
    '反馈意见提交',
    '描述信息录入',
    '消息发送输入框',
    '代码片段输入',
    '地址详细信息填写'
  ],
  
  // 代码示例
  examples: [
    {
      title: '基础用法',
      description: '最简单的多行文本框',
      code: `<Textarea placeholder="请输入内容" />`
    },
    {
      title: '受控模式',
      description: '使用 value 和 onChange 控制输入',
      code: `const [value, setValue] = useState('');

<Textarea 
  value={value} 
  onChange={(val) => setValue(val)} 
  placeholder="请输入内容"
/>`
    },
    {
      title: '不同变体',
      description: '三种外观样式',
      code: `<Textarea variant="outline" placeholder="描边样式（默认）" />
<Textarea variant="filled" placeholder="填充样式" />
<Textarea variant="transparent" placeholder="透明样式" />`
    },
    {
      title: '不同状态',
      description: '五种语义状态',
      code: `<Textarea status="default" placeholder="默认状态" />
<Textarea status="primary" placeholder="主色状态" />
<Textarea status="success" placeholder="成功状态" />
<Textarea status="warning" placeholder="警告状态" />
<Textarea status="danger" placeholder="错误状态" />`
    },
    {
      title: '字数统计',
      description: '显示字数和最大限制',
      code: `<Textarea 
  showCount 
  maxLength={200}
  placeholder="最多输入200字"
/>`
    },
    {
      title: '自定义字数格式',
      description: '自定义字数统计显示',
      code: `<Textarea 
  showCount 
  maxLength={100}
  countFormatter={(count, max) => \`已输入 \${count}/\${max} 字\`}
/>`
    },
    {
      title: '自动高度',
      description: '根据内容自动调整高度',
      code: `<Textarea 
  autoSize 
  placeholder="内容增多时自动增高"
/>

// 限制最小最大行数
<Textarea 
  autoSize={{ minRows: 2, maxRows: 6 }}
  placeholder="最少2行，最多6行"
/>`
    },
    {
      title: '固定行数',
      description: '设置固定的行数',
      code: `<Textarea rows={6} placeholder="固定6行高度" />`
    },
    {
      title: '清除按钮',
      description: '传入 onClear 显示清除按钮',
      code: `const [value, setValue] = useState('');

<Textarea 
  value={value}
  onChange={setValue}
  onClear={() => setValue('')}
  placeholder="点击清除按钮清空"
/>`
    },
    {
      title: '禁用和只读',
      description: '禁用和只读状态',
      code: `<Textarea disabled placeholder="禁用状态" defaultValue="禁用的内容" />
<Textarea readOnly placeholder="只读状态" defaultValue="只读的内容" />`
    },
    {
      title: '调整大小',
      description: '允许用户拖拽调整大小',
      code: `<Textarea resize="both" placeholder="可调整大小" />
<Textarea resize="vertical" placeholder="仅垂直调整" />
<Textarea resize="horizontal" placeholder="仅水平调整" />
<Textarea resize="none" placeholder="不可调整" />`
    },
    {
      title: '块级显示',
      description: '占满父容器宽度',
      code: `<Textarea block placeholder="占满容器宽度" />`
    },
    {
      title: '自定义尺寸',
      description: '设置宽度和高度',
      code: `<Textarea 
  width={400} 
  height={200} 
  placeholder="自定义尺寸"
/>`
    },
    {
      title: '前后内容区域',
      description: '添加额外的内容区域',
      code: `<Textarea 
  beforeContent={<div style={{ marginBottom: 8 }}>标题区域</div>}
  afterContent={<div style={{ marginTop: 8 }}>提示：请认真填写</div>}
  placeholder="请输入内容"
/>`
    }
  ],
  
  // 相关组件
  relatedComponents: ['Input', 'Form', 'Editor'],
  
  // 使用注意事项
  notes: [
    'autoSize 为 true 时会自动计算高度，配合 minRows 和 maxRows 可限制范围',
    'showCount 需要配合 maxLength 使用才能显示完整的 "当前/最大" 格式',
    '传入 onClear 回调才会显示清除按钮',
    'variant="transparent" 适用于内嵌在其他容器中的场景',
    'resize 属性在 autoSize 启用时可能不生效',
    'block 属性会使组件宽度为 100%，忽略 width 设置'
  ],
  
  // 版本信息
  version: '1.0.0',
  
  // 更新日志
  changelog: [
    { version: '1.0.0', date: '2024-01-01', description: '初始版本' }
  ]
};

export default TextareaMeta;
