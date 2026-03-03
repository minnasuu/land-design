/**
 * BackToTop 组件元数据
 * 用于 AI 代码生成和组件文档
 */

export const BackToTopMeta = {
  name: 'BackToTop',
  chineseName: '回到顶部',
  description: '回到顶部组件，当页面滚动超过一定距离时显示，点击可快速回到页面顶部。支持固定定位和相对定位两种模式。',

  category: 'navigation',
  subcategory: 'scroll',

  importStatement: "import BackToTop from 'land-design/BackToTop';",

  features: [
    '支持固定定位和相对父容器定位',
    '可配置显示的滚动阈值',
    '平滑滚动动画',
    '支持自定义图标',
    '支持指定滚动容器',
    '显示/隐藏状态变化回调',
  ],

  useCases: [
    '长页面导航：长内容页面的快速回顶',
    '列表页面：商品列表、文章列表等的回顶',
    '文档页面：文档阅读页的快速定位',
    '滚动容器：指定容器内的回顶功能',
  ],

  examples: [
    {
      title: '基础用法',
      description: '固定在页面右下角的回顶按钮',
      code: `<BackToTop />`,
    },
    {
      title: '自定义显示阈值',
      description: '滚动超过 300px 时显示',
      code: `<BackToTop visibleHeight={300} />`,
    },
    {
      title: '自定义位置',
      description: '调整按钮位置',
      code: `<BackToTop offsetRight={40} offsetBottom={40} />`,
    },
    {
      title: '自定义图标',
      description: '使用自定义图标',
      code: `<BackToTop icon={<Icon name="arrow-up" />} />`,
    },
    {
      title: '相对父容器定位',
      description: '在指定容器内显示回顶按钮',
      code: `<div className="relative h-[500px] overflow-auto">
  <div className="h-[2000px]">长内容...</div>
  <BackToTop fixed={false} />
</div>`,
    },
    {
      title: '指定滚动容器',
      description: '监听指定容器的滚动',
      code: `<BackToTop
  target={document.getElementById('scroll-container')}
  visibleHeight={200}
/>`,
    },
  ],

  relatedComponents: ['Anchor', 'Affix', 'Icon'],

  notes: [
    'fixed=true 时相对视口定位，false 时相对父容器定位',
    '非固定定位时父容器需要设置 position: relative',
    '可通过 target 指定监听的滚动容器',
    'scrollBehavior 控制滚动动画效果',
  ],

  version: '1.0.0',
  changelog: [
    { version: '1.0.0', date: '2024-01-01', changes: ['初始版本发布'] },
  ],
};

export default BackToTopMeta;
