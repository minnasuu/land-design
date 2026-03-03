/**
 * Uploader 组件元数据
 * @description 用于 AI 代码生成的组件信息描述
 */

export const UploaderMeta = {
  // 组件基本信息
  name: 'Uploader',
  chineseName: '上传',
  description: '文件上传组件，用于将本地文件上传到服务器。支持拖拽上传、多文件上传、图片预览、上传进度显示等功能。',
  
  // 组件分类
  category: 'form',
  subcategory: 'upload',
  
  // 引入方式
  importStatement: "import Uploader from 'land-design/Uploader';",
  
  // 组件特性
  features: [
    '四种上传区域变体：dragger（拖拽区域）、button（按钮）、picture（图片墙）、avatar（头像上传）',
    '支持拖拽上传',
    '支持多文件上传',
    '支持目录上传',
    '支持文件类型限制（accept）',
    '支持文件大小限制（maxSize）',
    '支持文件数量限制（maxCount）',
    '三种文件列表显示类型：text、picture、picture-card',
    '支持上传进度显示',
    '支持文件预览',
    '支持自定义上传逻辑（beforeUpload）',
    '支持受控和非受控模式',
    '支持禁用和只读状态',
    '本地预览模式（不传 action 时）',
    '完整的事件回调：进度、成功、失败、删除等'
  ],
  
  // 使用场景
  useCases: [
    '图片上传',
    '头像设置',
    '文件附件上传',
    '批量文件上传',
    '文档/资料上传',
    '表单中的文件字段',
    '图片墙/相册管理'
  ],
  
  // 代码示例
  examples: [
    {
      title: '基础拖拽上传',
      description: '默认的拖拽上传区域',
      code: `<Uploader
  action="/api/upload"
  onChange={(file, fileList) => {
    console.log('文件变化:', file, fileList);
  }}
/>`
    },
    {
      title: '按钮上传',
      description: '使用按钮样式的上传',
      code: `<Uploader
  variant="button"
  action="/api/upload"
>
  点击上传
</Uploader>`
    },
    {
      title: '图片上传',
      description: '图片墙样式的上传',
      code: `<Uploader
  variant="picture"
  action="/api/upload"
  accept="image/*"
  multiple
  maxCount={9}
  listType="picture-card"
/>`
    },
    {
      title: '头像上传',
      description: '头像样式的单图上传',
      code: `<Uploader
  variant="avatar"
  action="/api/upload"
  accept="image/*"
/>`
    },
    {
      title: '文件类型限制',
      description: '只允许上传指定类型的文件',
      code: `<Uploader
  accept=".jpg,.png,.pdf"
  hint="只支持 JPG、PNG、PDF 格式"
/>`
    },
    {
      title: '文件大小限制',
      description: '限制单个文件的大小',
      code: `<Uploader
  maxSize={5 * 1024 * 1024}
  hint="单个文件不超过 5MB"
/>`
    },
    {
      title: '多文件上传',
      description: '支持多文件选择和数量限制',
      code: `<Uploader
  multiple
  maxCount={5}
  onExceed={(files) => {
    console.log('超出数量限制，被拒绝的文件:', files);
  }}
/>`
    },
    {
      title: '上传前校验',
      description: '使用 beforeUpload 进行上传前校验',
      code: `<Uploader
  beforeUpload={(file) => {
    const isImage = file.type.startsWith('image/');
    if (!isImage) {
      alert('只能上传图片文件');
      return false;
    }
    const isLt2M = file.size < 2 * 1024 * 1024;
    if (!isLt2M) {
      alert('图片大小不能超过 2MB');
      return false;
    }
    return true;
  }}
/>`
    },
    {
      title: '受控模式',
      description: '完全控制文件列表',
      code: `const [fileList, setFileList] = useState([]);

<Uploader
  fileList={fileList}
  onChange={(file, newFileList) => {
    setFileList(newFileList);
  }}
/>`
    },
    {
      title: '自定义上传区域',
      description: '完全自定义上传区域内容',
      code: `<Uploader
  title="上传文件"
  hint="支持 jpg、png、pdf 格式，单个文件不超过 10MB"
  icon={<Icon name="upload" size={48} />}
/>`
    },
    {
      title: '本地预览模式',
      description: '不传 action，仅本地预览',
      code: `<Uploader
  accept="image/*"
  listType="picture-card"
  onPreview={(file) => {
    window.open(file.url);
  }}
/>`
    },
    {
      title: '完整事件处理',
      description: '监听所有上传相关事件',
      code: `<Uploader
  action="/api/upload"
  onChange={(file, fileList) => console.log('变化:', file)}
  onProgress={(percent, file) => console.log('进度:', percent)}
  onSuccess={(response, file) => console.log('成功:', response)}
  onError={(error, file) => console.log('失败:', error)}
  onRemove={(file) => console.log('删除:', file)}
  onPreview={(file) => console.log('预览:', file)}
/>`
    }
  ],
  
  // 相关组件
  relatedComponents: ['Button', 'Progress', 'Image'],
  
  // 使用注意事项
  notes: [
    '不传 action 时使用本地预览模式，不实际上传到服务器',
    'beforeUpload 返回 false 或 Promise.reject() 可阻止上传',
    'beforeUpload 返回新的 File 对象可替换原文件',
    'accept 支持 MIME 类型（如 image/*）和文件扩展名（如 .jpg）',
    'multiple 为 true 时才能选择多个文件',
    'maxCount 仅在 multiple 为 true 时生效',
    'fileList 和 onChange 配合使用实现受控模式',
    'variant="avatar" 适用于单图上传场景',
    'listType 决定文件列表的展示方式，与 variant 配合使用'
  ],
  
  // 版本信息
  version: '1.0.0',
  
  // 更新日志
  changelog: [
    { version: '1.0.0', date: '2024-01-01', description: '初始版本' }
  ]
};

export default UploaderMeta;
