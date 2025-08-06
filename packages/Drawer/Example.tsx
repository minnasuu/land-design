import React, { useState } from 'react';
import Drawer from '.';
import Button from '../Button';
import Input from '../Input';
import Select from '../Select';
import Alert from '../Alert';
import CodeOperationContainer from '../../example/components/CodeOperationContainer';
import ComponentContentLayout from '../../example/components/ComponentContentLayout';
import ComponentPropsTable from '../../example/components/ComponentPropsTable';
import ComponentSectionLayout from '../../example/components/ComponentSectionLayout';

export default function DrawerExample() {
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
  const [showPosition, setShowPosition] = useState<boolean>(false);

  const drawerProps = [
    { name: 'show', type: 'boolean', desc: '控制侧拉窗显示状态' },
    { name: 'title', type: 'string', desc: '侧拉窗标题' },
    { name: 'position', type: 'DrawerPosition (left | right | top | bottom)', desc: '侧拉窗出现位置', default: 'right' },
    { name: 'width', type: 'string | number', desc: '侧拉窗宽度（左右位置时）', default: '400px' },
    { name: 'height', type: 'string | number', desc: '侧拉窗高度（上下位置时）', default: '100%' },
    { name: 'submitLabel', type: 'string', desc: '提交按钮文案', default: '确定' },
    { name: 'cancelLabel', type: 'string', desc: '取消按钮文案', default: '取消' },
    { name: 'mask', type: 'boolean', desc: '是否显示遮罩层', default: 'true' },
    { name: 'headerComponent', type: 'ReactNode', desc: '自定义头部组件' },
    { name: 'headerLeftComponent', type: 'ReactNode', desc: '自定义头部左侧组件' },
    { name: 'headerRightComponent', type: 'ReactNode', desc: '自定义头部右侧组件' },
    { name: 'footerComponent', type: 'ReactNode', desc: '自定义底部组件' },
    { name: 'footerLeftComponent', type: 'ReactNode', desc: '自定义底部左侧组件' },
    { name: 'footerRightComponent', type: 'ReactNode', desc: '自定义底部右侧组件' },
    { name: 'onClose', type: '() => void', desc: '关闭侧拉窗回调' },
    { name: 'onCancel', type: '() => void', desc: '取消按钮回调' },
    { name: 'onSubmit', type: '() => void', desc: '提交按钮回调' },
    { name: 'style', type: 'CSSProperties', desc: '自定义样式' },
    { name: 'className', type: 'string', desc: '自定义类名' },
    { name: 'children', type: 'ReactNode', desc: '侧拉窗内容' },
  ];

  return (
    <ComponentContentLayout
      zh='侧拉窗'
      en='Drawer'
      desc='LandDesign 的侧拉窗组件，用于从屏幕边缘滑出的内容面板。支持多种位置、自定义头部底部和丰富的交互功能。'
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
            description='Drawer 组件的基础用法，展示简单的侧拉窗。'
          >
            <CodeOperationContainer>
              <Button onClick={() => setShowBasic(true)}>打开侧拉窗</Button>
              <Drawer
                show={showBasic}
                onClose={() => setShowBasic(false)}
                onCancel={() => setShowBasic(false)}
                onSubmit={() => setShowBasic(false)}
              >
                这里是侧拉窗的具体内容
              </Drawer>
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 带标题 */}
          <ComponentSectionLayout
            title='带标题'
            id='drawer-title'
            description='通过 title 属性可以为侧拉窗添加标题。'
          >
            <CodeOperationContainer>
              <Button onClick={() => setShowTitle(true)}>打开侧拉窗（侧拉窗标题）</Button>
              <Drawer
                show={showTitle}
                title="侧拉窗标题"
                onClose={() => setShowTitle(false)}
                onCancel={() => setShowTitle(false)}
                onSubmit={() => setShowTitle(false)}
              >
                这里是侧拉窗的具体内容
              </Drawer>
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 自定义头部 */}
          <ComponentSectionLayout
            title='自定义头部'
            id='drawer-custom-header'
            description='支持自定义头部左侧、右侧或整体组件。'
          >
            <CodeOperationContainer>
              <div className="flex flex-col gap-16">
                <div>
                  <h4 className="mb-8">自定义头部左侧</h4>
                  <Button onClick={() => setShowHeaderLeft(true)}>打开侧拉窗（自定义头部左侧）</Button>
                  <Drawer
                    show={showHeaderLeft}
                    headerLeftComponent={<Input placeholder="搜索..." />}
                    onClose={() => setShowHeaderLeft(false)}
                    onCancel={() => setShowHeaderLeft(false)}
                    onSubmit={() => setShowHeaderLeft(false)}
                  >
                    这里是侧拉窗的具体内容
                  </Drawer>
                </div>
                <div>
                  <h4 className="mb-8">自定义头部右侧</h4>
                  <Button onClick={() => setShowHeaderRight(true)}>打开侧拉窗（自定义头部右侧）</Button>
                  <Drawer
                    show={showHeaderRight}
                    headerRightComponent={<Select placeholder="选择..." />}
                    onClose={() => setShowHeaderRight(false)}
                    onCancel={() => setShowHeaderRight(false)}
                    onSubmit={() => setShowHeaderRight(false)}
                  >
                    这里是侧拉窗的具体内容
                  </Drawer>
                </div>
                <div>
                  <h4 className="mb-8">自定义整体头部</h4>
                  <Button onClick={() => setShowCustomHeader(true)}>打开侧拉窗（自定义头部）</Button>
                  <Drawer
                    show={showCustomHeader}
                    headerComponent={
                      <div
                        style={{ height: "64px" }}
                        className="flex items-center justify-center"
                      >
                        自定义侧拉窗头部
                      </div>
                    }
                    onClose={() => setShowCustomHeader(false)}
                    onCancel={() => setShowCustomHeader(false)}
                    onSubmit={() => setShowCustomHeader(false)}
                  >
                    这里是侧拉窗的具体内容
                  </Drawer>
                </div>
              </div>
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 自定义按钮文案 */}
          <ComponentSectionLayout
            title='自定义按钮文案'
            id='drawer-custom-submit'
            description='可以自定义提交和取消按钮的文案。'
          >
            <CodeOperationContainer>
              <Button onClick={() => setShowCustomSubmit(true)}>打开侧拉窗（自定义按钮文案）</Button>
              <Drawer
                show={showCustomSubmit}
                title="侧拉窗标题"
                submitLabel="保存"
                cancelLabel="关闭"
                onClose={() => setShowCustomSubmit(false)}
                onSubmit={() => setShowCustomSubmit(false)}
              >
                这里是侧拉窗的具体内容
              </Drawer>
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 自定义底部 */}
          <ComponentSectionLayout
            title='自定义底部'
            id='drawer-custom-footer'
            description='支持自定义底部左侧、右侧或整体组件。'
          >
            <CodeOperationContainer>
              <div className="flex flex-col gap-16">
                <div>
                  <h4 className="mb-8">自定义底部左侧</h4>
                  <Button onClick={() => setShowFooterLeft(true)}>打开侧拉窗（自定义底部左侧）</Button>
                  <Drawer
                    show={showFooterLeft}
                    title="侧拉窗标题"
                    footerLeftComponent={<Alert title="侧拉窗底部提示内容" />}
                    onClose={() => setShowFooterLeft(false)}
                    onCancel={() => setShowFooterLeft(false)}
                    onSubmit={() => setShowFooterLeft(false)}
                  >
                    这里是侧拉窗的具体内容
                  </Drawer>
                </div>
                <div>
                  <h4 className="mb-8">自定义底部右侧</h4>
                  <Button onClick={() => setShowFooterRight(true)}>打开侧拉窗（自定义底部右侧）</Button>
                  <Drawer
                    show={showFooterRight}
                    title="侧拉窗标题"
                    footerRightComponent={<>自定义侧拉窗底部右侧</>}
                    onClose={() => setShowFooterRight(false)}
                  >
                    这里是侧拉窗的具体内容
                  </Drawer>
                </div>
                <div>
                  <h4 className="mb-8">自定义整体底部</h4>
                  <Button onClick={() => setShowCustomFooter(true)}>打开侧拉窗（自定义底部）</Button>
                  <Drawer
                    show={showCustomFooter}
                    title="侧拉窗标题"
                    onClose={() => setShowCustomFooter(false)}
                    footerComponent={
                      <div style={{ height: "64px" }} className="flex items-center justify-center">
                        自定义侧拉窗底部
                      </div>
                    }
                  >
                    这里是侧拉窗的具体内容
                  </Drawer>
                </div>
              </div>
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 不同位置 */}
          <ComponentSectionLayout
            title='不同位置'
            id='drawer-position'
            description='支持从四个方向滑出：左侧、右侧、顶部、底部。'
          >
            <CodeOperationContainer>
              <div className="flex gap-12">
                <Button onClick={() => setShowPosition(true)}>右侧侧拉窗</Button>
                <Drawer
                  show={showPosition}
                  placement="right"
                  title="右侧侧拉窗"
                  onClose={() => setShowPosition(false)}
                >
                  这是从右侧滑出的侧拉窗内容
                </Drawer>
              </div>
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 遮罩层 */}
          <ComponentSectionLayout
            title='遮罩层'
            id='drawer-mask'
            description='通过 mask 属性可以控制遮罩层的显示。'
          >
            <CodeOperationContainer>
              <Button onClick={() => setShowMask(true)}>打开侧拉窗（含遮罩）</Button>
              <Drawer
                show={showMask}
                mask
                onClose={() => setShowMask(false)}
                onCancel={() => setShowMask(false)}
                onSubmit={() => setShowMask(false)}
              >
                这里是侧拉窗的具体内容
              </Drawer>
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 复杂内容 */}
          <ComponentSectionLayout
            title='复杂内容'
            id='drawer-complex'
            description='侧拉窗内容支持复杂的 React 节点和表单。'
          >
            <CodeOperationContainer>
              <Button onClick={() => setShowBasic(true)}>打开复杂内容侧拉窗</Button>
              <Drawer
                show={showBasic}
                title="用户设置"
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
              </Drawer>
            </CodeOperationContainer>
          </ComponentSectionLayout>
        </div>
      )}

      {activeTab === 'props' && (
        <div className='flex flex-col gap-12'>
          <ComponentPropsTable props={drawerProps} />
        </div>
      )}
    </ComponentContentLayout>
  );
}
