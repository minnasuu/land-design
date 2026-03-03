/**
 * Message 组件元数据
 * 用于 AI 代码生成和组件文档
 */

export const MessageMeta = {
  name: 'Message',
  chineseName: '消息提示',
  description: '消息提示组件，用于显示全局的反馈信息。支持组件使用和函数式调用两种方式。',

  category: 'feedback',
  subcategory: 'message',

  importStatement: "import Message, { message } from 'land-design/Message';",

  features: [
    '支持 5 种消息类型：info、success、warning、error、loading',
    '支持 3 种变体样式：filled、light、outlined',
    '支持 7 种显示位置',
    '支持函数式调用（message.info/success/...）',
    '支持关闭按钮和自动关闭',
    '支持消息更新和手动关闭',
    '支持最大显示数量限制',
  ],

  useCases: [
    '操作反馈：操作成功/失败的提示',
    '系统通知：系统级别的消息通知',
    '加载状态：异步操作的加载提示',
    '表单验证：表单提交结果反馈',
  ],

  examples: [
    {
      title: '组件用法',
      description: '作为组件使用',
      code: `<Message type="success" content="操作成功" />`,
    },
    {
      title: '函数式调用',
      description: '使用静态方法',
      code: `message.success('操作成功');
message.error('操作失败');
message.warning('请注意');
message.loading('加载中...');`,
    },
    {
      title: '自定义时长',
      description: '设置显示时长',
      code: `message.info('3秒后关闭', { duration: 3000 });
message.info('不自动关闭', { duration: 0, closable: true });`,
    },
    {
      title: '不同位置',
      description: '显示在不同位置',
      code: `message.info('顶部居中', { placement: 'top' });
message.info('顶部右侧', { placement: 'top-right' });
message.info('底部', { placement: 'bottom' });`,
    },
    {
      title: '更新消息',
      description: '动态更新消息内容',
      code: `const instance = message.loading('加载中...');
setTimeout(() => {
  instance.update({ type: 'success', content: '加载完成' });
}, 2000);`,
    },
    {
      title: '手动关闭',
      description: '通过实例关闭',
      code: `const instance = message.loading('处理中...');
setTimeout(() => instance.close(), 3000);`,
    },
  ],

  relatedComponents: ['Alert', 'Notification', 'Dialog'],

  notes: [
    '函数式调用返回实例，可调用 update/close',
    'duration 为 0 时不自动关闭',
    'key 可用于更新或关闭指定消息',
    'maxCount 限制同时显示的最大数量',
  ],

  version: '1.0.0',
  changelog: [
    { version: '1.0.0', date: '2024-01-01', changes: ['初始版本发布'] },
  ],
};

export default MessageMeta;
