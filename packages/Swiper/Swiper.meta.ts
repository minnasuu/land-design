/**
 * Swiper 组件元数据
 * @description 用于 AI 代码生成的组件信息描述
 * @author Land Design System
 */

export const SwiperMeta = {
  // 基础信息
  name: 'Swiper',
  chineseName: '轮播',
  description: '轮播组件，用于循环展示一组内容。支持多种切换效果、自动播放、指示器和导航按钮等功能。',
  
  // 分类
  category: 'display',
  subcategory: 'carousel',
  
  // 引入方式
  importStatement: "import Swiper from 'land-design/Swiper';",
  
  // 组件特性
  features: [
    '支持水平和垂直两种方向',
    '多种切换效果：滑动、淡入、立方体、覆盖流、翻转',
    '支持自动播放和播放间隔设置',
    '支持循环播放',
    '支持指示器显示',
    '支持导航按钮',
    '支持自动播放方向控制',
    '提供切换事件回调',
  ],
  
  // 使用场景
  useCases: [
    '首页 Banner 轮播',
    '产品图片展示',
    '广告轮播',
    '内容卡片轮播',
    '图片画廊',
    '引导页展示',
  ],
  
  // 代码示例
  examples: [
    {
      title: '基础用法',
      description: '简单的图片轮播',
      code: `<Swiper>
  <img src="/image1.jpg" alt="图片1" />
  <img src="/image2.jpg" alt="图片2" />
  <img src="/image3.jpg" alt="图片3" />
</Swiper>`,
    },
    {
      title: '自动播放',
      description: '自动循环播放',
      code: `<Swiper autoplay autoplayDelay={3000} loop>
  <div>内容1</div>
  <div>内容2</div>
  <div>内容3</div>
</Swiper>`,
    },
    {
      title: '显示指示器',
      description: '底部显示当前位置指示',
      code: `<Swiper showIndicators>
  <div>内容1</div>
  <div>内容2</div>
  <div>内容3</div>
</Swiper>`,
    },
    {
      title: '显示导航按钮',
      description: '左右导航箭头',
      code: `<Swiper showNavigation>
  <div>内容1</div>
  <div>内容2</div>
  <div>内容3</div>
</Swiper>`,
    },
    {
      title: '淡入淡出效果',
      description: '使用淡入效果切换',
      code: `<Swiper effect="fade">
  <div>内容1</div>
  <div>内容2</div>
</Swiper>`,
    },
    {
      title: '立方体效果',
      description: '3D 立方体切换',
      code: `<Swiper effect="cube">
  <div>内容1</div>
  <div>内容2</div>
</Swiper>`,
    },
    {
      title: '垂直方向',
      description: '上下滑动的轮播',
      code: `<Swiper direction="vertical" height={300}>
  <div>内容1</div>
  <div>内容2</div>
</Swiper>`,
    },
    {
      title: '受控模式',
      description: '控制当前显示的索引',
      code: `<Swiper activeIndex={currentIndex} onChange={(index) => setCurrentIndex(index)}>
  <div>内容1</div>
  <div>内容2</div>
</Swiper>`,
    },
  ],
  
  // 相关组件
  relatedComponents: ['Image', 'Tabs'],
  
  // 使用注意事项
  notes: [
    '每个子元素会被作为一个轮播项',
    '使用 loop 实现无限循环播放',
    '垂直方向时需要设置 height',
    'effect 效果需要与内容样式配合',
    'autoplay 时建议设置合适的 autoplayDelay',
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

export default SwiperMeta;
