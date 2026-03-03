/**
 * Watermark 组件元数据
 * @description 用于 AI 代码生成的组件信息描述
 */

export const WatermarkMeta = {
  // 组件基本信息
  name: 'Watermark',
  chineseName: '水印',
  description: '水印组件，用于在页面或区域上添加水印覆盖层。支持文本水印和图片水印，常用于版权保护、品牌展示或防截图场景。',
  
  // 组件分类
  category: 'display',
  subcategory: 'overlay',
  
  // 引入方式
  importStatement: "import Watermark from 'land-design/Watermark';",
  
  // 组件特性
  features: [
    '支持文本水印和图片水印',
    '支持自定义水印尺寸（宽高）',
    '支持自定义水印间距',
    '支持自定义水印偏移量',
    '支持自定义旋转角度',
    '支持自定义字体样式（大小、颜色、粗细、字体族）',
    '支持自定义层级（z-index）',
    '水印自动平铺覆盖整个区域',
    '图片水印优先级高于文本水印'
  ],
  
  // 使用场景
  useCases: [
    '文档版权保护',
    '图片版权保护',
    '品牌标识展示',
    '敏感信息标记',
    '防截图/防复制',
    '内部文档标记',
    '预览内容保护'
  ],
  
  // 代码示例
  examples: [
    {
      title: '基础文本水印',
      description: '最简单的文本水印',
      code: `<Watermark content="版权所有">
  <div style={{ height: 300 }}>
    这里是需要添加水印的内容区域
  </div>
</Watermark>`
    },
    {
      title: '多行文本水印',
      description: '使用数组设置多行文本',
      code: `<Watermark content={['Land Design', '版权所有']}>
  <div style={{ height: 300 }}>
    内容区域
  </div>
</Watermark>`
    },
    {
      title: '图片水印',
      description: '使用图片作为水印',
      code: `<Watermark url="https://example.com/logo.png" width={120} height={64}>
  <div style={{ height: 300 }}>
    内容区域
  </div>
</Watermark>`
    },
    {
      title: '自定义字体样式',
      description: '自定义水印的字体效果',
      code: `<Watermark 
  content="机密文档"
  fontSize={20}
  fontColor="rgba(255, 0, 0, 0.15)"
  fontWeight="bold"
>
  <div style={{ height: 300 }}>
    内容区域
  </div>
</Watermark>`
    },
    {
      title: '自定义旋转角度',
      description: '调整水印的旋转角度',
      code: `<Watermark content="自定义角度" rotate={-30}>
  <div style={{ height: 300 }}>
    内容区域
  </div>
</Watermark>`
    },
    {
      title: '自定义间距',
      description: '调整水印之间的间距',
      code: `<Watermark content="间距调整" gap={[100, 100]}>
  <div style={{ height: 300 }}>
    内容区域
  </div>
</Watermark>`
    },
    {
      title: '自定义偏移',
      description: '调整水印的起始偏移位置',
      code: `<Watermark content="偏移调整" offset={[50, 50]}>
  <div style={{ height: 300 }}>
    内容区域
  </div>
</Watermark>`
    },
    {
      title: '自定义尺寸',
      description: '调整单个水印的尺寸',
      code: `<Watermark content="大尺寸水印" width={200} height={100}>
  <div style={{ height: 300 }}>
    内容区域
  </div>
</Watermark>`
    },
    {
      title: '全页面水印',
      description: '覆盖整个页面的水印',
      code: `<Watermark 
  content="全局水印"
  style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0 }}
  zIndex={1000}
>
  <div style={{ minHeight: '100vh' }}>
    页面内容
  </div>
</Watermark>`
    },
    {
      title: '组合使用',
      description: '自定义多个水印属性',
      code: `<Watermark 
  content="Land Design 2024"
  fontSize={16}
  fontColor="rgba(0, 0, 0, 0.1)"
  rotate={-22}
  gap={[150, 150]}
  width={180}
  height={48}
>
  <div style={{ height: 400, padding: 24 }}>
    <h2>文档标题</h2>
    <p>这是需要保护的文档内容...</p>
  </div>
</Watermark>`
    }
  ],
  
  // 相关组件
  relatedComponents: ['Image', 'Modal', 'Drawer'],
  
  // 使用注意事项
  notes: [
    'content 和 url 同时存在时，优先使用图片水印',
    '水印会覆盖在 children 内容之上，不会阻挡交互',
    '默认旋转角度为 -22 度，可通过 rotate 调整',
    '字体颜色建议使用带透明度的颜色，如 rgba(0, 0, 0, 0.15)',
    '水印通过 Canvas 绘制，不会影响 DOM 结构',
    '全页面水印需要将容器设置为 fixed 定位',
    '图片水印的图片需要支持跨域访问（CORS）'
  ],
  
  // 版本信息
  version: '1.0.0',
  
  // 更新日志
  changelog: [
    { version: '1.0.0', date: '2024-01-01', description: '初始版本' }
  ]
};

export default WatermarkMeta;
