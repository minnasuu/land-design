/**
 * TagInput 组件元数据
 * @description 用于 AI 代码生成的组件信息描述
 */

export const TagInputMeta = {
  // 组件基本信息
  name: 'TagInput',
  chineseName: '标签输入框',
  description: '标签输入框组件，允许用户通过输入创建和管理标签。支持回车添加、删除、限制数量等功能，适用于标签录入场景。',
  
  // 组件分类
  category: 'form',
  subcategory: 'input',
  
  // 引入方式
  importStatement: "import TagInput from 'land-design/TagInput';",
  
  // 组件特性
  features: [
    '支持通过回车键添加标签',
    '支持删除单个标签或清空全部',
    '支持受控和非受控模式',
    '支持设置最大标签数量',
    '支持设置单个标签最大长度',
    '支持禁止重复标签',
    '支持禁用和只读状态',
    '两种外观变体：outline（描边）、fill（填充）',
    '三种尺寸：small、default、large',
    '支持自定义标签渲染',
    '支持前缀和后缀内容',
    '支持清空按钮'
  ],
  
  // 使用场景
  useCases: [
    '文章标签编辑',
    '搜索关键词输入',
    '商品标签管理',
    '邮件收件人输入',
    '技能标签添加',
    '兴趣爱好标签',
    '分类标签设置'
  ],
  
  // 代码示例
  examples: [
    {
      title: '基础用法',
      description: '最简单的标签输入框',
      code: `const [tags, setTags] = useState(['标签1', '标签2']);

<TagInput 
  value={tags} 
  onChange={(newTags) => setTags(newTags)} 
  placeholder="按回车添加标签"
/>`
    },
    {
      title: '非受控模式',
      description: '使用 defaultValue 的非受控用法',
      code: `<TagInput 
  defaultValue={['默认标签1', '默认标签2']} 
  onChange={(tags, trigger) => {
    console.log('标签变化:', tags, '触发方式:', trigger);
  }}
/>`
    },
    {
      title: '限制数量',
      description: '设置最大标签数量',
      code: `<TagInput 
  maxCount={5}
  placeholder="最多输入5个标签"
/>`
    },
    {
      title: '限制长度',
      description: '设置单个标签的最大长度',
      code: `<TagInput 
  maxTagLength={10}
  placeholder="单个标签最多10个字符"
/>`
    },
    {
      title: '禁止重复',
      description: '默认不允许重复标签',
      code: `<TagInput 
  allowDuplicate={false}
  placeholder="不允许重复标签"
/>`
    },
    {
      title: '不同变体',
      description: '描边和填充两种样式',
      code: `<TagInput variant="outline" placeholder="描边样式" />
<TagInput variant="fill" placeholder="填充样式" />`
    },
    {
      title: '不同尺寸',
      description: '三种不同尺寸',
      code: `<TagInput size="small" placeholder="小尺寸" />
<TagInput size="default" placeholder="默认尺寸" />
<TagInput size="large" placeholder="大尺寸" />`
    },
    {
      title: '禁用状态',
      description: '禁用的标签输入框',
      code: `<TagInput 
  disabled 
  defaultValue={['标签1', '标签2']}
/>`
    },
    {
      title: '只读状态',
      description: '只读的标签输入框',
      code: `<TagInput 
  readOnly 
  defaultValue={['标签1', '标签2']}
/>`
    },
    {
      title: '自定义标签渲染',
      description: '使用 renderTag 自定义标签外观',
      code: `<TagInput 
  renderTag={(tag, index, onClose) => (
    <span 
      key={index} 
      style={{ 
        padding: '2px 8px', 
        background: '#f0f0f0', 
        borderRadius: 4 
      }}
    >
      {typeof tag === 'string' ? tag : tag.label}
      <span onClick={onClose} style={{ marginLeft: 4, cursor: 'pointer' }}>×</span>
    </span>
  )}
/>`
    },
    {
      title: '带前缀后缀',
      description: '添加前缀和后缀内容',
      code: `import { Icon } from 'land-design';

<TagInput 
  prefix={<Icon name="tag" />}
  suffix={<span>标签</span>}
/>`
    },
    {
      title: '完整事件处理',
      description: '监听各种事件',
      code: `<TagInput 
  onChange={(tags, trigger) => console.log('变化:', tags, trigger)}
  onAdd={(tag) => console.log('添加:', tag)}
  onRemove={(tag, index) => console.log('删除:', tag, '索引:', index)}
  onClear={() => console.log('清空')}
  onEnter={(value) => console.log('回车:', value)}
/>`
    }
  ],
  
  // 相关组件
  relatedComponents: ['Tag', 'Input', 'Select'],
  
  // 使用注意事项
  notes: [
    '按回车键会将当前输入添加为新标签',
    '按 Backspace 键在输入框为空时会删除最后一个标签',
    'maxCount 限制的是标签总数，不是输入长度',
    'maxTagLength 限制的是单个标签的字符长度',
    'allowDuplicate 为 false 时，重复的标签不会被添加',
    '使用 TagItem 对象类型可以为标签添加更多自定义配置',
    'onChange 的第二个参数 trigger 表示触发方式：add、remove、clear'
  ],
  
  // 版本信息
  version: '1.0.0',
  
  // 更新日志
  changelog: [
    { version: '1.0.0', date: '2024-01-01', description: '初始版本' }
  ]
};

export default TagInputMeta;
