/**
 * Progress 组件元数据
 * @description 用于 AI 代码生成的组件信息描述
 * @author Land Design System
 */

export const ProgressMeta = {
  // 基础信息
  name: 'Progress',
  chineseName: '进度条',
  description: '进度条组件，用于展示操作或任务的当前进度。支持线形和环形两种类型，以及不同的状态显示。',
  
  // 分类
  category: 'feedback',
  subcategory: 'progress',
  
  // 引入方式
  importStatement: "import Progress from 'land-design/Progress';",
  
  // 组件特性
  features: [
    '支持线形（line）和环形（circle）两种类型',
    '支持默认、成功、失败三种状态',
    '进度值支持 0-1 范围的小数',
    '支持隐藏进度数值显示',
    '支持自定义线条宽度',
    '平滑的进度动画过渡',
    '状态图标自动显示',
  ],
  
  // 使用场景
  useCases: [
    '文件上传/下载进度',
    '任务完成进度',
    '表单填写进度',
    '数据加载进度',
    '步骤完成情况',
    '技能或属性展示',
  ],
  
  // 代码示例
  examples: [
    {
      title: '基础用法',
      description: '线形进度条',
      code: `<Progress value={0.6} />`,
    },
    {
      title: '环形进度条',
      description: '圆环形式展示进度',
      code: `<Progress type="circle" value={0.75} />`,
    },
    {
      title: '不同状态',
      description: '展示成功和失败状态',
      code: `<Progress value={1} status="success" />
<Progress value={0.3} status="fail" />`,
    },
    {
      title: '隐藏数值',
      description: '不显示进度百分比',
      code: `<Progress value={0.5} hideLabel />`,
    },
    {
      title: '自定义线宽',
      description: '调整进度条粗细',
      code: `<Progress value={0.6} strokeWidth={12} />`,
    },
    {
      title: '动态进度',
      description: '配合状态更新进度',
      code: `const [progress, setProgress] = useState(0);
// 更新进度
<Progress value={progress} />`,
    },
  ],
  
  // 相关组件
  relatedComponents: ['Loading', 'Steps'],
  
  // 使用注意事项
  notes: [
    'value 值范围是 0 到 1，表示 0% 到 100%',
    '超出范围的值会被自动限制在 0-1 之间',
    'status 为 success 或 fail 时会显示对应图标',
    '环形进度条默认大小为 80px',
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

export default ProgressMeta;
