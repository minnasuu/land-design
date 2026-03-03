/**
 * AffixContainer 组件元数据
 * 用于 AI 代码生成和组件文档
 */

export const AffixContainerMeta = {
  // 组件基本信息
  name: 'AffixContainer',
  chineseName: '图钉容器',
  description: '图钉容器组件，提供灵活的图钉定位功能，支持预设位置和自定义位置，以及多种显示模式。可用于在容器内任意位置放置徽标、标签、操作按钮等元素。',
  
  // 组件分类
  category: 'container',
  subcategory: 'layout',
  
  // 导入方式
  importStatement: "import AffixContainer from 'land-design/AffixContainer';",
  
  // 组件特性
  features: [
    '支持 10 种预设位置：topStart、topCenter、topEnd、bottomStart、bottomCenter、bottomEnd、startCenter、endCenter、center、custom',
    '支持自定义位置，通过 left/top/right/bottom 精确控制',
    '支持三种显示模式：始终显示、悬停显示、悬停隐藏',
    '支持多个图钉同时显示',
    '支持自定义偏移距离和层级',
    '支持悬停显示时的动画效果',
  ],
  
  // 适用场景
  useCases: [
    '图片角标：在图片上添加标签、徽章',
    '卡片装饰：在卡片容器上添加状态标识',
    '操作按钮：悬停时显示编辑、删除等操作按钮',
    '商品标签：展示折扣、新品、热卖等标签',
    '头像徽标：在头像上显示在线状态或消息数量',
  ],
  
  // 代码示例
  examples: [
    {
      title: '基础用法 - 单个图钉',
      description: '在容器中心显示一个图钉',
      code: `<AffixContainer
  className='w-full h-[200px] bg-gray-100 rounded-lg'
  items={{ content: <Tag>标签</Tag> }}
/>`,
    },
    {
      title: '多个图钉位置',
      description: '在容器的不同位置显示多个图钉',
      code: `<AffixContainer
  className='w-full h-[200px] bg-gray-100 rounded-lg'
  items={[
    { placement: 'topStart', content: <Tag>左上</Tag> },
    { placement: 'topEnd', content: <Tag>右上</Tag> },
    { placement: 'bottomStart', content: <Tag>左下</Tag> },
    { placement: 'bottomEnd', content: <Tag>右下</Tag> },
    { placement: 'center', content: <Tag>居中</Tag> },
  ]}
/>`,
    },
    {
      title: '自定义位置',
      description: '使用 custom 定位精确控制图钉位置',
      code: `<AffixContainer
  className='w-full h-[200px] bg-gray-100 rounded-lg'
  items={{
    placement: 'custom',
    content: <Tag>自定义位置</Tag>,
    left: '20%',
    top: '60%',
  }}
/>`,
    },
    {
      title: '悬停显示',
      description: '鼠标悬停时显示图钉内容',
      code: `<AffixContainer
  className='w-full h-[200px] bg-gray-100 rounded-lg'
  items={{
    content: <Button>操作</Button>,
    display: 'hoverShow',
    animation: 'fadeIn 0.2s ease',
  }}
/>`,
    },
    {
      title: '图片角标',
      description: '在图片上添加折扣标签',
      code: `<AffixContainer
  items={{
    placement: 'topStart',
    content: <Tag theme='danger'>-20%</Tag>,
    offset: 8,
  }}
>
  <img src='/product.jpg' className='w-full h-full object-cover rounded-lg' />
</AffixContainer>`,
    },
  ],
  
  // 相关组件
  relatedComponents: ['Tag', 'Badge', 'Image', 'Button'],
  
  // 注意事项
  notes: [
    '容器需要设置相对定位（组件内部已处理）',
    '使用 custom 位置时，需要同时提供 left/top 或 right/bottom 值',
    'offset 仅对预设位置生效，custom 位置需要通过 left/top 等属性控制',
    '多个图钉可以使用不同的 zIndex 控制层叠顺序',
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

export default AffixContainerMeta;
