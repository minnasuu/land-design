import React, { useState } from 'react';
import Button from '../Button';
import { message } from './MessagePlugin';
import Message from '.';
import CodeOperationContainer from '../../example/components/CodeOperationContainer';
import ComponentContentLayout from '../../example/components/ComponentContentLayout';
import ComponentPropsTable from '../../example/components/ComponentPropsTable';
import ComponentSectionLayout from '../../example/components/ComponentSectionLayout';

export default function MessageExample() {
  const [activeTab, setActiveTab] = useState<string>('examples');

  const messageProps = [
    { name: 'type', type: 'info | success | fail | error | warn', default: 'info', desc: '消息类型，用于表示不同的状态和语义' },
    { name: 'text', type: 'string', desc: '消息文本内容' },
    { name: 'simple', type: 'boolean', default: 'false', desc: '是否为简洁版样式，设置为true时显示简洁版本' },
    { name: 'duration', type: 'number', default: '3000', desc: '消息显示时长，单位为毫秒' },
    { name: 'style', type: 'CSSProperties', desc: '自定义样式，可以传入CSS样式对象来自定义消息外观' },
    { name: 'className', type: 'string', desc: '自定义类名，可以传入额外的CSS类名' },
  ];

  const messagePluginProps = [
    { name: 'message.info(text, options)', type: 'function', desc: '显示信息类型的消息' },
    { name: 'message.success(text, options)', type: 'function', desc: '显示成功类型的消息' },
    { name: 'message.fail(text, options)', type: 'function', desc: '显示失败类型的消息' },
    { name: 'message.error(text, options)', type: 'function', desc: '显示错误类型的消息' },
    { name: 'message.warning(text, options)', type: 'function', desc: '显示警告类型的消息' },
    { name: 'options.duration', type: 'number', default: '3000', desc: '消息显示时长' },
    { name: 'options.simple', type: 'boolean', default: 'false', desc: '是否为简洁版样式' },
  ];

  return (
    <ComponentContentLayout
      zh='全局提示'
      en='Message'
      desc='LandDesign 的全局提示组件，用于向用户展示操作反馈。支持多种类型、函数式调用和自定义样式。'
      activeTab={activeTab}
      onTabChange={setActiveTab}
    >

      {/* 标签页内容 */}
      {activeTab === 'examples' && (
        <div className='flex flex-col gap-24'>
          {/* 基础用法 */}
          <ComponentSectionLayout
            title='基础用法'
            id='basic-usage'
            description='Message 组件的基础用法，展示不同类型的全局提示。'
          >
            <CodeOperationContainer>
              <div className="flex flex-col gap-16">
                <Message type="info" text="全局提示（info）" />
                <Message type="success" text="全局提示（success）" />
                <Message type="fail" text="全局提示（fail）" />
                <Message type="error" text="全局提示（error）" />
                <Message type="warn" text="全局提示（warn）" />
              </div>
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 简洁版样式 */}
          <ComponentSectionLayout
            title='简洁版样式'
            id='message-simple'
            description='通过 simple 属性可以显示简洁版的消息样式。'
          >
            <CodeOperationContainer>
              <Message type="info" text="简洁版全局提示" simple />
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 函数式调用 */}
          <ComponentSectionLayout
            title='函数式调用（推荐）'
            id='message-function'
            description='推荐使用函数式调用方式，更加简洁和灵活。'
          >
            <CodeOperationContainer>
              <div className="flex flex-col gap-16">
                <div className="flex gap-12">
                  <Button onClick={() => message.info("全局提示（info）")}>全局提示（info）</Button>
                  <Button onClick={() => message.success("全局提示（success）")}>全局提示（success）</Button>
                  <Button onClick={() => message.fail("全局提示（fail）")}>全局提示（fail）</Button>
                  <Button onClick={() => message.warning("全局提示（warn）")}>全局提示（warn）</Button>
                  <Button onClick={() => message.error("全局提示（error）")}>全局提示（error）</Button>
                </div>
                <div>
                  <Button onClick={() => message.info("简洁版全局提示", { simple: true })}>
                    简洁版提示
                  </Button>
                </div>
              </div>
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 不同时长 */}
          <ComponentSectionLayout
            title='不同时长'
            id='message-duration'
            description='可以自定义消息的显示时长。'
          >
            <CodeOperationContainer>
              <div className="flex gap-12">
                <Button onClick={() => message.success("短时间提示", { duration: 1000 })}>
                  1秒提示
                </Button>
                <Button onClick={() => message.info("长时间提示", { duration: 5000 })}>
                  5秒提示
                </Button>
                <Button onClick={() => message.warning("永久提示", { duration: 0 })}>
                  永久提示
                </Button>
              </div>
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 复杂内容 */}
          <ComponentSectionLayout
            title='复杂内容'
            id='message-complex'
            description='消息内容支持复杂的文本和格式化。'
          >
            <CodeOperationContainer>
              <div className="flex gap-12">
                <Button onClick={() => message.success("✅ 操作成功！数据已保存到云端。")}>
                  带图标的消息
                </Button>
                <Button onClick={() => message.warning("⚠️ 警告：你的账户余额不足，请及时充值。")}>
                  带警告的消息
                </Button>
                <Button onClick={() => message.error("❌ 错误：网络连接失败，请检查网络设置。")}>
                  带错误的消息
                </Button>
              </div>
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 批量调用 */}
          <ComponentSectionLayout
            title='批量调用'
            id='message-batch'
            description='可以连续调用多个消息，它们会依次显示。'
          >
            <CodeOperationContainer>
              <div className="flex gap-12">
                <Button onClick={() => {
                  message.info("开始处理...");
                  setTimeout(() => message.success("处理完成！"), 1000);
                }}>
                  模拟处理流程
                </Button>
                <Button onClick={() => {
                  message.info("第一步：验证数据");
                  setTimeout(() => message.info("第二步：处理数据"), 1000);
                  setTimeout(() => message.success("第三步：完成！"), 2000);
                }}>
                  多步骤流程
                </Button>
              </div>
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 自定义样式 */}
          <ComponentSectionLayout
            title='自定义样式'
            id='message-custom'
            description='可以通过 style 属性自定义消息的样式。'
          >
            <CodeOperationContainer>
              <div className="flex gap-12">
                <Button onClick={() => message.info("自定义样式的消息", { 
                  style: {
                    backgroundColor: '#1890ff',
                    color: 'white',
                    borderRadius: '8px',
                    boxShadow: '0 4px 12px rgba(24, 144, 255, 0.3)'
                  }
                })}>
                  自定义样式
                </Button>
                <Button onClick={() => message.success("渐变背景消息", { 
                  style: {
                    background: 'linear-gradient(45deg, #52c41a, #73d13d)',
                    color: 'white',
                    border: 'none'
                  }
                })}>
                  渐变背景
                </Button>
              </div>
            </CodeOperationContainer>
          </ComponentSectionLayout>
        </div>
      )}

      {activeTab === 'props' && (
        <div className='flex flex-col gap-12'>
          <ComponentPropsTable props={messageProps} />
          <h3 className="mt-24 mb-12">Message Plugin API</h3>
          <ComponentPropsTable props={messagePluginProps} />
        </div>
      )}
    </ComponentContentLayout>
  );
}
