import React, { useState } from 'react';
import Alert from '.';
import Button from '../Button';
import Icon from '../Icon';
import CodeOperationContainer from '../../example/components/CodeOperationContainer';
import ComponentContentLayout from '../../example/components/ComponentContentLayout';
import ComponentPropsTable from '../../example/components/ComponentPropsTable';
import ComponentSectionLayout from '../../example/components/ComponentSectionLayout';

export default function AlertExample() {
  const [activeTab, setActiveTab] = useState<string>('examples');
  const [showClosable, setShowClosable] = useState(true);

  const alertProps = [
    { name: 'type', type: "'info' | 'success' | 'warning' | 'error' | 'loading'", desc: 'Alert类型，控制图标和颜色主题', default: 'info' },
    { name: 'variant', type: "'filled' | 'outlined' | 'light' | 'text'", desc: 'Alert变体样式', default: 'light' },
    { name: 'direction', type: "'horizontal' | 'vertical'", desc: 'Alert布局方向', default: 'horizontal' },
    { name: 'size', type: "'small' | 'medium' | 'large'", desc: 'Alert尺寸', default: 'medium' },
    { name: 'title', type: 'ReactNode', desc: 'Alert标题内容' },
    { name: 'description', type: 'ReactNode', desc: 'Alert描述内容' },
    { name: 'icon', type: 'ReactNode | false', desc: '自定义图标，传入 false 隐藏图标' },
    { name: 'closable', type: 'boolean', desc: '是否显示关闭按钮', default: 'false' },
    { name: 'closeIcon', type: 'ReactNode', desc: '自定义关闭按钮' },
    { name: 'bordered', type: 'boolean', desc: '是否显示边框', default: 'true' },
    { name: 'link', type: 'string', desc: '链接文本' },
    { name: 'onLinkClick', type: '(e: MouseEvent) => void', desc: '链接点击事件' },
    { name: 'action', type: 'ReactNode', desc: '操作区域内容' },
    { name: 'onClose', type: '(e: MouseEvent) => void', desc: '关闭回调' },
    { name: 'afterClose', type: '() => void', desc: '关闭动画结束后回调' },
    { name: 'style', type: 'CSSProperties', desc: '自定义样式' },
    { name: 'className', type: 'string', desc: '自定义类名' },
  ];

  return (
    <ComponentContentLayout
      zh='警告提示'
      en='Alert'
      desc='用于展示重要的提示信息。支持多种类型、变体样式、布局方向和自定义内容。'
      activeTab={activeTab}
      onTabChange={setActiveTab}
    >
      {activeTab === 'examples' && (
        <div className='flex flex-col gap-24'>
          {/* 基础用法 */}
          <ComponentSectionLayout
            title='基础用法'
            id='basic-usage'
            description='Alert 组件的基础用法，展示不同类型的警告提示。'
          >
            <CodeOperationContainer>
              <div className="flex flex-col gap-16">
                <Alert type="info" title="这是一条信息提示" />
                <Alert type="success" title="操作成功！" />
                <Alert type="warning" title="你的额度即将用完！" />
                <Alert type="error" title="操作失败，请重试" />
                <Alert type="loading" title="加载中..." />
              </div>
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 变体样式 */}
          <ComponentSectionLayout
            title='变体样式'
            id='alert-variants'
            description='Alert 支持 4 种变体样式：filled（填充）、outlined（边框）、light（浅色，默认）、text（纯文本）。'
          >
            <CodeOperationContainer>
              <div className="flex flex-col gap-16">
                <div>
                  <h4 className="mb-8">Filled 填充样式</h4>
                  <div className="flex flex-col gap-8">
                    <Alert type="info" variant="filled" title="信息提示" />
                    <Alert type="success" variant="filled" title="成功提示" />
                    <Alert type="warning" variant="filled" title="警告提示" />
                    <Alert type="error" variant="filled" title="错误提示" />
                  </div>
                </div>
                <div>
                  <h4 className="mb-8">Outlined 边框样式</h4>
                  <div className="flex flex-col gap-8">
                    <Alert type="info" variant="outlined" title="信息提示" />
                    <Alert type="success" variant="outlined" title="成功提示" />
                  </div>
                </div>
                <div>
                  <h4 className="mb-8">Light 浅色样式（默认）</h4>
                  <div className="flex flex-col gap-8">
                    <Alert type="info" variant="light" title="信息提示" />
                    <Alert type="success" variant="light" title="成功提示" />
                  </div>
                </div>
                <div>
                  <h4 className="mb-8">Text 纯文本样式</h4>
                  <div className="flex flex-col gap-8">
                    <Alert type="info" variant="text" title="信息提示" />
                    <Alert type="success" variant="text" title="成功提示" />
                  </div>
                </div>
              </div>
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 尺寸 */}
          <ComponentSectionLayout
            title='尺寸'
            id='alert-sizes'
            description='支持 small、medium、large 三种尺寸。'
          >
            <CodeOperationContainer>
              <div className="flex flex-col gap-16">
                <Alert type="info" size="small" title="小尺寸 Alert" />
                <Alert type="info" size="medium" title="中等尺寸 Alert（默认）" />
                <Alert type="info" size="large" title="大尺寸 Alert" />
              </div>
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 带描述 */}
          <ComponentSectionLayout
            title='带描述'
            id='alert-description'
            description='通过 description 属性可以添加详细描述内容。'
          >
            <CodeOperationContainer>
              <div className="flex flex-col gap-16">
                <Alert 
                  type="info" 
                  title="系统更新通知"
                  description="系统将于今晚 22:00 进行维护升级，届时服务将暂停约30分钟。"
                />
                <Alert 
                  type="warning" 
                  title="账户安全提醒"
                  description="检测到您的账户存在异常登录行为，建议立即修改密码。"
                />
              </div>
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 带链接 */}
          <ComponentSectionLayout
            title='带链接'
            id='alert-link'
            description='通过 link 属性可以为 Alert 添加可点击的链接。'
          >
            <CodeOperationContainer>
              <div className="flex flex-col gap-16">
                <Alert type="error" title="加载失败" link="重试" />
                <Alert type="warning" title="你的额度即将用完！" link="立即充值" />
                <Alert type="success" title="提交成功！" link="查看详情" />
              </div>
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 可关闭 */}
          <ComponentSectionLayout
            title='可关闭'
            id='alert-closable'
            description='通过 closable 属性可以显示关闭按钮。'
          >
            <CodeOperationContainer>
              <div className="flex flex-col gap-16">
                {showClosable && (
                  <Alert 
                    type="info" 
                    title="这是一条可关闭的提示"
                    closable
                    onClose={() => setShowClosable(false)}
                    afterClose={() => console.log('关闭动画结束')}
                  />
                )}
                {!showClosable && (
                  <Button size="small" onClick={() => setShowClosable(true)}>
                    重新显示
                  </Button>
                )}
                <Alert 
                  type="success" 
                  title="带描述的可关闭提示"
                  description="点击右侧关闭按钮可以关闭此提示。"
                  closable
                />
              </div>
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 自定义图标 */}
          <ComponentSectionLayout
            title='自定义图标'
            id='alert-custom-icon'
            description='通过 icon 属性可以自定义图标，传入 false 可隐藏图标。'
          >
            <CodeOperationContainer>
              <div className="flex flex-col gap-16">
                <Alert 
                  type="info" 
                  title="自定义图标"
                  icon={<Icon name="star-fill" color="var(--color-warning-6)" />}
                />
                <Alert 
                  type="info" 
                  title="隐藏图标"
                  icon={false}
                />
              </div>
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 带操作 */}
          <ComponentSectionLayout
            title='带操作'
            id='alert-action'
            description='通过 action 属性可以添加操作按钮。'
          >
            <CodeOperationContainer>
              <div className="flex flex-col gap-16">
                <Alert 
                  type="warning" 
                  title="你的会员即将到期"
                  action={<Button size="small" variant="fill">立即续费</Button>}
                />
                <Alert 
                  type="info" 
                  title="新版本可用"
                  description="发现新版本 v2.0.0，包含多项改进和修复。"
                  action={
                    <div className="flex gap-8">
                      <Button size="small" variant="fill">稍后提醒</Button>
                      <Button size="small" variant="background" status="primary">立即更新</Button>
                    </div>
                  }
                />
              </div>
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 垂直布局 */}
          <ComponentSectionLayout
            title='垂直布局'
            id='alert-vertical'
            description='通过 direction="vertical" 可以设置垂直布局。'
          >
            <CodeOperationContainer>
              <div className="flex gap-16">
                <Alert 
                  type="success" 
                  direction="vertical"
                  title="操作成功"
                  description="您的数据已成功保存"
                />
                <Alert 
                  type="error" 
                  direction="vertical"
                  title="操作失败"
                  description="请检查网络连接后重试"
                  action={<Button size="small">重试</Button>}
                />
              </div>
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 兼容旧版 */}
          <ComponentSectionLayout
            title='兼容旧版用法'
            id='alert-legacy'
            description='仍然支持旧版属性，会自动转换为新版。'
          >
            <CodeOperationContainer>
              <div className="flex flex-col gap-16">
                <Alert type="default" title="旧版 default 类型（转为 info）" />
                <Alert type="fail" title="旧版 fail 类型（转为 error）" />
                <Alert type="warn" title="旧版 warn 类型（转为 warning）" />
                <Alert type="error" title="旧版 error 类型（保持不变）" noBg />
              </div>
            </CodeOperationContainer>
          </ComponentSectionLayout>
        </div>
      )}

      {activeTab === 'props' && (
        <div className='flex flex-col gap-12'>
          <ComponentPropsTable props={alertProps} />
        </div>
      )}
    </ComponentContentLayout>
  );
}
