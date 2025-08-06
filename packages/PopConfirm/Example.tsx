import React, { useState } from 'react';
import PopConfirm from '.';
import Button from '../Button';
import Icon from '../Icon';
import CodeOperationContainer from '../../example/components/CodeOperationContainer';
import ComponentContentLayout from '../../example/components/ComponentContentLayout';
import ComponentPropsTable from '../../example/components/ComponentPropsTable';
import ComponentSectionLayout from '../../example/components/ComponentSectionLayout';

export default function PopConfirmExample() {
  const [activeTab, setActiveTab] = useState<string>('examples');
  const [showBasic, setShowBasic] = useState<boolean>(false);
  const [showCustom, setShowCustom] = useState<boolean>(false);
  const [showIcon, setShowIcon] = useState<boolean>(false);
  const [showComplex, setShowComplex] = useState<boolean>(false);

  const popConfirmProps = [
    { name: 'show', type: 'boolean', desc: '控制确认气泡显示状态' },
    { name: 'content', type: 'ReactNode | string', desc: '确认气泡内容，可以是字符串或React节点' },
    { name: 'title', type: 'string', desc: '确认气泡标题' },
    { name: 'okText', type: 'string', default: '确定', desc: '确认按钮文案' },
    { name: 'cancelText', type: 'string', default: '取消', desc: '取消按钮文案' },
    { name: 'placement', type: 'top | bottom | left | right', default: 'top', desc: '气泡出现位置' },
    { name: 'onCancel', type: '() => void', desc: '取消按钮回调' },
    { name: 'onSubmit', type: '() => void', desc: '确认按钮回调' },
    { name: 'style', type: 'CSSProperties', desc: '自定义样式' },
    { name: 'className', type: 'string', desc: '自定义类名' },
    { name: 'children', type: 'ReactNode', desc: '触发确认气泡的元素' },
  ];

  return (
    <ComponentContentLayout
      zh='确认气泡'
      en='PopConfirm'
      desc='LandDesign 的确认气泡组件，用于在执行危险操作前向用户确认。支持自定义内容、按钮文案和多种交互方式。'
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
            description='PopConfirm 组件的基础用法，展示简单的确认气泡。'
          >
            <CodeOperationContainer>
              <div className="relative">
                <Button className="click-pop" onClick={() => setShowBasic(true)}>
                  <Icon name="delete" size={16} />点击删除
                </Button>
                <PopConfirm 
                  show={showBasic} 
                  content="删除后无法恢复！确定删除此条内容吗？" 
                  onCancel={() => setShowBasic(false)} 
                  onSubmit={() => setShowBasic(false)} 
                />
              </div>
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 自定义文案 */}
          <ComponentSectionLayout
            title='自定义文案'
            id='popconfirm-custom'
            description='可以自定义确认和取消按钮的文案。'
          >
            <CodeOperationContainer>
              <div className="relative">
                <Button onClick={() => setShowCustom(true)}>
                  自定义按钮文案
                </Button>
                <PopConfirm 
                  show={showCustom} 
                  content="此操作不可撤销，请谨慎操作！" 
                  submitLabel="我确定"
                  cancelLabel="再想想"
                  onCancel={() => setShowCustom(false)} 
                  onSubmit={() => setShowCustom(false)} 
                />
              </div>
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 带图标 */}
          <ComponentSectionLayout
            title='带图标'
            id='popconfirm-icon'
            description='可以在触发按钮中添加图标。'
          >
            <CodeOperationContainer>
              <div className="flex gap-16">
                <div className="relative">
                  <Button onClick={() => setShowIcon(true)}>
                    <Icon name="delete" size={16} />删除
                  </Button>
                  <PopConfirm 
                    show={showIcon} 
                    content="确定要删除这条记录吗？" 
                    onCancel={() => setShowIcon(false)} 
                    onSubmit={() => setShowIcon(false)} 
                  />
                </div>
                <div className="relative">
                  <Button onClick={() => setShowIcon(true)}>
                    <Icon name="setting" size={16} />设置
                  </Button>
                  <PopConfirm 
                    show={showIcon} 
                    content="修改设置将影响所有用户，确定继续吗？" 
                    onCancel={() => setShowIcon(false)} 
                    onSubmit={() => setShowIcon(false)} 
                  />
                </div>
              </div>
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 不同位置 */}
          <ComponentSectionLayout
            title='不同位置'
            id='popconfirm-placement'
            description='支持四个方向的定位。'
          >
            <CodeOperationContainer>
              <div className="flex flex-col gap-16">
                <div className="flex justify-center">
                  <div className="relative">
                    <Button onClick={() => setShowBasic(true)}>上方显示</Button>
                    <PopConfirm 
                      show={showBasic} 
                      content="上方确认气泡" 
                      placement="top"
                      onCancel={() => setShowBasic(false)} 
                      onSubmit={() => setShowBasic(false)} 
                    />
                  </div>
                </div>
                <div className="flex gap-16 justify-center">
                  <div className="relative">
                    <Button onClick={() => setShowBasic(true)}>左侧显示</Button>
                    <PopConfirm 
                      show={showBasic} 
                      content="左侧确认气泡" 
                      placement="left"
                      onCancel={() => setShowBasic(false)} 
                      onSubmit={() => setShowBasic(false)} 
                    />
                  </div>
                  <div className="relative">
                    <Button onClick={() => setShowBasic(true)}>右侧显示</Button>
                    <PopConfirm 
                      show={showBasic} 
                      content="右侧确认气泡" 
                      placement="right"
                      onCancel={() => setShowBasic(false)} 
                      onSubmit={() => setShowBasic(false)} 
                    />
                  </div>
                </div>
                <div className="flex justify-center">
                  <div className="relative">
                    <Button onClick={() => setShowBasic(true)}>下方显示</Button>
                    <PopConfirm 
                      show={showBasic} 
                      content="下方确认气泡" 
                      placement="bottom"
                      onCancel={() => setShowBasic(false)} 
                      onSubmit={() => setShowBasic(false)} 
                    />
                  </div>
                </div>
              </div>
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 复杂内容 */}
          <ComponentSectionLayout
            title='复杂内容'
            id='popconfirm-complex'
            description='确认气泡内容支持复杂的 React 节点。'
          >
            <CodeOperationContainer>
              <div className="relative">
                <Button onClick={() => setShowComplex(true)}>
                  复杂内容确认
                </Button>
                <PopConfirm 
                  show={showComplex} 
                  content={
                    <div className="p-12">
                      <h4 className="mb-8">⚠️ 危险操作</h4>
                      <p className="mb-8">此操作将永久删除以下内容：</p>
                      <ul className="mb-8">
                        <li>• 用户数据</li>
                        <li>• 配置文件</li>
                        <li>• 历史记录</li>
                      </ul>
                      <p className="text-red-500">删除后无法恢复！</p>
                    </div>
                  }
                  submitLabel="确定删除"
                  cancelLabel="取消"
                  onCancel={() => setShowComplex(false)} 
                  onSubmit={() => setShowComplex(false)} 
                />
              </div>
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 自定义样式 */}
          <ComponentSectionLayout
            title='自定义样式'
            id='popconfirm-custom-style'
            description='可以通过 style 属性自定义确认气泡的样式。'
          >
            <CodeOperationContainer>
              <div className="relative">
                <Button onClick={() => setShowBasic(true)}>
                  自定义样式
                </Button>
                <PopConfirm 
                  show={showBasic} 
                  content="自定义样式的确认气泡" 
                  style={{
                    backgroundColor: '#fff2e8',
                    border: '1px solid #fa8c16',
                    color: '#d46b08'
                  }}
                  onCancel={() => setShowBasic(false)} 
                  onSubmit={() => setShowBasic(false)} 
                />
              </div>
            </CodeOperationContainer>
          </ComponentSectionLayout>
        </div>
      )}

      {activeTab === 'props' && (
        <div className='flex flex-col gap-12'>
          <ComponentPropsTable props={popConfirmProps} />
        </div>
      )}
    </ComponentContentLayout>
  );
}
