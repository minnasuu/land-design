import React, { useState } from 'react';
import Dialog from '.';
import Button from '../Button';
import Input from '../Input';
import Select from '../Select';
import Alert from '../Alert';
import CodeOperationContainer from '../../example/components/CodeOperationContainer';
import ComponentContentLayout from '../../example/components/ComponentContentLayout';
import ComponentPropsTable from '../../example/components/ComponentPropsTable';
import ComponentSectionLayout from '../../example/components/ComponentSectionLayout';

export default function DialogExample() {
  const [activeTab, setActiveTab] = useState<string>('examples');
  const [showBasic, setShowBasic] = useState<boolean>(false);
  const [showTitle, setShowTitle] = useState<boolean>(false);
  const [showHeaderLeft, setShowHeaderLeft] = useState<boolean>(false);
  const [showHeaderRight, setShowHeaderRight] = useState<boolean>(false);
  const [showCustomHeader, setShowCustomHeader] = useState<boolean>(false);
  const [showCustomSubmit, setShowCustomSubmit] = useState<boolean>(false);
  const [showFooterLeft, setShowFooterLeft] = useState<boolean>(false);
  const [showFooterRight, setShowFooterRight] = useState<boolean>(false);
  const [showCustomFooter, setShowCustomFooter] = useState<boolean>(false);
  const [showMask, setShowMask] = useState<boolean>(false);

  const dialogProps = [
    { name: 'show', type: 'boolean', desc: '控制弹窗显示状态' },
    { name: 'title', type: 'string', desc: '弹窗标题' },
    { name: 'submitLabel', type: 'string', default: '确定', desc: '提交按钮文案' },
    { name: 'cancelLabel', type: 'string', default: '取消', desc: '取消按钮文案' },
    { name: 'mask', type: 'boolean', default: 'false', desc: '是否显示遮罩层' },
    { name: 'headerComponent', type: 'ReactNode', desc: '自定义头部组件' },
    { name: 'headerLeftComponent', type: 'ReactNode', desc: '自定义头部左侧组件' },
    { name: 'headerRightComponent', type: 'ReactNode', desc: '自定义头部右侧组件' },
    { name: 'footerComponent', type: 'ReactNode', desc: '自定义底部组件' },
    { name: 'footerLeftComponent', type: 'ReactNode', desc: '自定义底部左侧组件' },
    { name: 'footerRightComponent', type: 'ReactNode', desc: '自定义底部右侧组件' },
    { name: 'onClose', type: '() => void', desc: '关闭弹窗回调' },
    { name: 'onCancel', type: '() => void', desc: '取消按钮回调' },
    { name: 'onSubmit', type: '() => void', desc: '提交按钮回调' },
    { name: 'style', type: 'CSSProperties', desc: '自定义样式' },
    { name: 'className', type: 'string', desc: '自定义类名' },
    { name: 'children', type: 'ReactNode', desc: '弹窗内容' },
  ];

  return (
    <ComponentContentLayout
      zh='对话框'
      en='Dialog'
      desc='LandDesign 的对话框组件，用于展示重要的信息或收集用户输入。支持自定义头部、底部和多种交互方式。'
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
            description='Dialog 组件的基础用法，展示简单的弹窗。'
          >
            <CodeOperationContainer>
              <Button onClick={() => setShowBasic(true)}>打开弹窗</Button>
              <Dialog 
                show={showBasic} 
                onClose={() => setShowBasic(false)} 
                onCancel={() => setShowBasic(false)} 
                onSubmit={() => setShowBasic(false)}
              >
                这里是弹窗的具体内容
              </Dialog>
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 带标题 */}
          <ComponentSectionLayout
            title='带标题'
            id='dialog-title'
            description='通过 title 属性可以为弹窗添加标题。'
          >
            <CodeOperationContainer>
              <Button onClick={() => setShowTitle(true)}>打开弹窗（弹窗标题）</Button>
              <Dialog 
                show={showTitle} 
                title='弹窗标题' 
                onClose={() => setShowTitle(false)} 
                onCancel={() => setShowTitle(false)} 
                onSubmit={() => setShowTitle(false)}
              >
                这里是弹窗的具体内容
              </Dialog>
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 自定义头部 */}
          <ComponentSectionLayout
            title='自定义头部'
            id='dialog-custom-header'
            description='支持自定义头部左侧、右侧或整体组件。'
          >
            <CodeOperationContainer>
              <div className="flex flex-col gap-16">
                <div>
                  <h4 className="mb-8">自定义头部左侧</h4>
                  <Button onClick={() => setShowHeaderLeft(true)}>打开弹窗（自定义头部左侧）</Button>
                  <Dialog 
                    show={showHeaderLeft} 
                    headerLeftComponent={<Input placeholder="搜索..." />} 
                    onClose={() => setShowHeaderLeft(false)} 
                    onCancel={() => setShowHeaderLeft(false)} 
                    onSubmit={() => setShowHeaderLeft(false)}
                  >
                    这里是弹窗的具体内容
                  </Dialog>
                </div>
                <div>
                  <h4 className="mb-8">自定义头部右侧</h4>
                  <Button onClick={() => setShowHeaderRight(true)}>打开弹窗（自定义头部右侧）</Button>
                  <Dialog 
                    show={showHeaderRight} 
                    headerRightComponent={<Select placeholder="选择..." />} 
                    onClose={() => setShowHeaderRight(false)} 
                    onCancel={() => setShowHeaderRight(false)} 
                    onSubmit={() => setShowHeaderRight(false)}
                  >
                    这里是弹窗的具体内容
                  </Dialog>
                </div>
                <div>
                  <h4 className="mb-8">自定义整体头部</h4>
                  <Button onClick={() => setShowCustomHeader(true)}>打开弹窗（自定义头部）</Button>
                  <Dialog 
                    show={showCustomHeader} 
                    headerComponent={
                      <div style={{ height: '64px' }} className='flex items-center justify-center'>
                        自定义弹窗头部
                      </div>
                    } 
                    onCancel={() => setShowCustomHeader(false)} 
                    onSubmit={() => setShowCustomHeader(false)}
                  >
                    这里是弹窗的具体内容
                  </Dialog>
                </div>
              </div>
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 自定义按钮文案 */}
          <ComponentSectionLayout
            title='自定义按钮文案'
            id='dialog-custom-submit'
            description='可以自定义提交和取消按钮的文案。'
          >
            <CodeOperationContainer>
              <Button onClick={() => setShowCustomSubmit(true)}>打开弹窗（自定义按钮文案）</Button>
              <Dialog 
                show={showCustomSubmit} 
                title='弹窗标题' 
                submitLabel='知道了' 
                onClose={() => setShowCustomSubmit(false)} 
                onSubmit={() => setShowCustomSubmit(false)}
              >
                这里是弹窗的具体内容
              </Dialog>
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 自定义底部 */}
          <ComponentSectionLayout
            title='自定义底部'
            id='dialog-custom-footer'
            description='支持自定义底部左侧、右侧或整体组件。'
          >
            <CodeOperationContainer>
              <div className="flex flex-col gap-16">
                <div>
                  <h4 className="mb-8">自定义底部左侧</h4>
                  <Button onClick={() => setShowFooterLeft(true)}>打开弹窗（自定义底部左侧）</Button>
                  <Dialog 
                    show={showFooterLeft} 
                    title='弹窗标题' 
                    footerLeftComponent={<Alert title='弹窗底部提示内容' />} 
                    onClose={() => setShowFooterLeft(false)} 
                    onCancel={() => setShowFooterLeft(false)} 
                    onSubmit={() => setShowFooterLeft(false)}
                  >
                    这里是弹窗的具体内容
                  </Dialog>
                </div>
                <div>
                  <h4 className="mb-8">自定义底部右侧</h4>
                  <Button onClick={() => setShowFooterRight(true)}>打开弹窗（自定义底部右侧）</Button>
                  <Dialog 
                    show={showFooterRight} 
                    title='弹窗标题' 
                    footerRightComponent={<>自定义弹窗底部右侧</>} 
                    onClose={() => setShowFooterRight(false)}
                  >
                    这里是弹窗的具体内容
                  </Dialog>
                </div>
                <div>
                  <h4 className="mb-8">自定义整体底部</h4>
                  <Button onClick={() => setShowCustomFooter(true)}>打开弹窗（自定义底部）</Button>
                  <Dialog 
                    show={showCustomFooter} 
                    title='弹窗标题' 
                    onClose={() => setShowCustomFooter(false)} 
                    footerComponent={
                      <div style={{ height: '64px' }} className='flex items-center justify-center'>
                        自定义弹窗底部
                      </div>
                    }
                  >
                    这里是弹窗的具体内容
                  </Dialog>
                </div>
              </div>
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 遮罩层 */}
          <ComponentSectionLayout
            title='遮罩层'
            id='dialog-mask'
            description='通过 mask 属性可以显示遮罩层。'
          >
            <CodeOperationContainer>
              <Button onClick={() => setShowMask(true)}>打开弹窗（含遮罩）</Button>
              <Dialog 
                show={showMask} 
                mask 
                onClose={() => setShowMask(false)} 
                onCancel={() => setShowMask(false)} 
                onSubmit={() => setShowMask(false)}
              >
                这里是弹窗的具体内容
              </Dialog>
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 复杂内容 */}
          <ComponentSectionLayout
            title='复杂内容'
            id='dialog-complex'
            description='弹窗内容支持复杂的 React 节点和表单。'
          >
            <CodeOperationContainer>
              <Button onClick={() => setShowBasic(true)}>打开复杂内容弹窗</Button>
              <Dialog 
                show={showBasic} 
                title='用户信息' 
                onClose={() => setShowBasic(false)} 
                onCancel={() => setShowBasic(false)} 
                onSubmit={() => setShowBasic(false)}
              >
                <div className="flex flex-col gap-16">
                  <div>
                    <label className="block mb-4">姓名：</label>
                    <Input placeholder="请输入姓名" />
                  </div>
                  <div>
                    <label className="block mb-4">邮箱：</label>
                    <Input placeholder="请输入邮箱" />
                  </div>
                  <div>
                    <label className="block mb-4">部门：</label>
                    <Select placeholder="请选择部门" />
                  </div>
                  <Alert type="default" title="请确保信息准确无误" />
                </div>
              </Dialog>
            </CodeOperationContainer>
          </ComponentSectionLayout>
        </div>
      )}

      {activeTab === 'props' && (
        <div className='flex flex-col gap-12'>
          <ComponentPropsTable props={dialogProps} />
        </div>
      )}
    </ComponentContentLayout>
  );
}
