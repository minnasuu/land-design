import React from 'react'
import Dropdown from '.';
import Button from '../Button';
import ComponentContentLayout from '../../example/components/ComponentContentLayout';
import ComponentSectionLayout from '../../example/components/ComponentSectionLayout';
import CodeOperationContainer from '../../example/components/CodeOperationContainer';
import ComponentPropsTable from '../../example/components/ComponentPropsTable';

// API 文档配置
const dropdownProps = [
  { name: 'dropData', type: 'DropdownItemType[]', desc: '下拉选项数据' },
  { name: 'dropContent', type: 'ReactNode', desc: '自定义下拉内容' },
  { name: 'trigger', type: '"hover" | "click"', default: 'hover', desc: '触发方式' },
  { name: 'placement', type: '"top" | "bottom"', default: 'bottom', desc: '下拉框位置' },
  { name: 'alignment', type: '"left" | "center" | "right"', default: 'left', desc: '对齐方式' },
  { name: 'targetBody', type: 'boolean', default: 'false', desc: '是否全局定位' },
  { name: 'disabled', type: 'boolean', default: 'false', desc: '是否禁用' },
  { name: 'open', type: 'boolean', desc: '是否强制展开' },
  { name: 'onChange', type: '(item: DropdownItemType) => void', desc: '选择变化回调' },
  { name: 'style', type: 'CSSProperties', desc: '自定义样式' },
  { name: 'className', type: 'string', desc: '自定义类名' },
  { name: 'children', type: 'ReactNode', desc: '触发元素' },
];

export default function DropdownExample() {
  const sampleData = [
    { key: '1', label: '选项 1' },
    { key: '2', label: '选项 2' },
    { key: '3', label: '选项 3' },
    { key: '4', label: '选项 4' },
    { key: '5', label: '选项 5' },
  ];

  return (
    <ComponentContentLayout
      zh='下拉菜单'
      en='Dropdown'
      desc='LandDesign 的下拉菜单组件，用于显示选项列表。支持 hover/click 触发，多种对齐方式，自定义内容等功能。'
      activeTab='examples'
    >
      <div className='flex flex-col gap-24'>
        {/* hover 下拉 */}
        <ComponentSectionLayout
          title='hover 下拉'
          id='dropdown-hover'
          description='默认使用 hover 触发方式显示下拉菜单。'
        >
          <CodeOperationContainer>
            <div className='flex column items-center gap-24'>
              <Dropdown dropData={sampleData} onChange={(item) => console.log('选中:', item)}>
                <Button text="hover试试" />
              </Dropdown>
            </div>
          </CodeOperationContainer>
        </ComponentSectionLayout>

        {/* click 下拉 */}
        <ComponentSectionLayout
          title='click 下拉'
          id='dropdown-click'
          description='通过 trigger="click" 可以设置点击触发方式。'
        >
          <CodeOperationContainer>
            <div className='flex column items-center gap-24'>
              <Dropdown trigger='click' dropData={sampleData} onChange={(item) => console.log('选中:', item)}>
                <Button text="click试试" />
              </Dropdown>
            </div>
          </CodeOperationContainer>
        </ComponentSectionLayout>

        {/* 对齐方式 */}
        <ComponentSectionLayout
          title='对齐方式'
          id='dropdown-alignment'
          description='通过 alignment 属性可以设置下拉菜单的对齐方式。'
        >
          <CodeOperationContainer>
            <div className='flex items-center justify-center gap-24'>
              <Dropdown trigger='click' dropData={sampleData} alignment='center' onChange={(item) => console.log('选中:', item)}>
                <Button text="居中对齐" />
              </Dropdown>
              <Dropdown trigger='click' dropData={sampleData} alignment='left' onChange={(item) => console.log('选中:', item)}>
                <Button text="左对齐" />
              </Dropdown>
              <Dropdown trigger='click' dropData={sampleData} alignment='right' onChange={(item) => console.log('选中:', item)}>
                <Button text="右对齐" />
              </Dropdown>
            </div>
          </CodeOperationContainer>
        </ComponentSectionLayout>

        {/* 位置方向 */}
        <ComponentSectionLayout
          title='位置方向'
          id='dropdown-placement'
          description='通过 placement 属性可以设置下拉菜单的展开方向。'
        >
          <CodeOperationContainer>
            <div className='flex items-center justify-center gap-24'>
              <Dropdown trigger='click' dropData={sampleData} placement='bottom' onChange={(item) => console.log('选中:', item)}>
                <Button text="向下展开" />
              </Dropdown>
              <Dropdown trigger='click' dropData={sampleData} placement='top' onChange={(item) => console.log('选中:', item)}>
                <Button text="向上展开" />
              </Dropdown>
            </div>
          </CodeOperationContainer>
        </ComponentSectionLayout>

        {/* 全局定位下拉 */}
        <ComponentSectionLayout
          title='全局定位下拉'
          id='dropdown-target-body'
          description='通过 targetBody 属性可以设置下拉菜单相对于 body 定位。'
        >
          <CodeOperationContainer>
            <div className='flex items-center justify-center gap-24'>
              <Dropdown targetBody dropData={sampleData} onChange={(item) => console.log('选中:', item)}>
                <Button text="全局定位-左对齐" />
              </Dropdown>
              <Dropdown targetBody dropData={sampleData} alignment='center' onChange={(item) => console.log('选中:', item)}>
                <Button text="全局定位-居中" />
              </Dropdown>
              <Dropdown targetBody dropData={sampleData} alignment='right' onChange={(item) => console.log('选中:', item)}>
                <Button text="全局定位-右对齐" />
              </Dropdown>
            </div>
          </CodeOperationContainer>
        </ComponentSectionLayout>

        {/* 边界测试 */}
        <ComponentSectionLayout
          title='边界测试'
          id='dropdown-boundary-test'
          description='测试不同对齐方式在边界情况下的表现。'
        >
          <CodeOperationContainer>
            <div className='flex items-center justify-between gap-24'>
              <Dropdown trigger='click' dropData={sampleData} alignment='left' onChange={(item) => console.log('选中:', item)}>
                <Button text="左边界测试" />
              </Dropdown>
              <Dropdown trigger='click' dropData={sampleData} alignment='center' onChange={(item) => console.log('选中:', item)}>
                <Button text="居中测试" />
              </Dropdown>
              <Dropdown trigger='click' dropData={sampleData} alignment='right' onChange={(item) => console.log('选中:', item)}>
                <Button text="右边界测试" />
              </Dropdown>
            </div>
          </CodeOperationContainer>
        </ComponentSectionLayout>

        {/* 滚动容器测试 */}
        <ComponentSectionLayout
          title='滚动容器测试'
          id='dropdown-scroll-test'
          description='测试在滚动容器内下拉菜单的定位表现。'
        >
          <CodeOperationContainer>
            <div
              style={{
                height: '300px',
                padding: '20px',
                position: 'relative'
              } as React.CSSProperties}
              className='border overflow-auto scrollbar-none'
            >
              <div style={{ height: '600px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div style={{ height: '100px', background: 'var(--color-bg-secondary)', color: 'var(--color-text-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  滚动区域顶部
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Dropdown trigger='click' dropData={sampleData} onChange={(item) => console.log('选中:', item)}>
                    <Button text="滚动容器内-左" />
                  </Dropdown>
                  <Dropdown trigger='click' dropData={sampleData} alignment='center' onChange={(item) => console.log('选中:', item)}>
                    <Button text="滚动容器内-中" />
                  </Dropdown>
                  <Dropdown trigger='click' dropData={sampleData} alignment='right' onChange={(item) => console.log('选中:', item)}>
                    <Button text="滚动容器内-右" />
                  </Dropdown>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Dropdown targetBody trigger='click' dropData={sampleData} onChange={(item) => console.log('选中:', item)}>
                    <Button text="全局定位-左" />
                  </Dropdown>
                  <Dropdown targetBody trigger='click' dropData={sampleData} alignment='center' onChange={(item) => console.log('选中:', item)}>
                    <Button text="全局定位-中" />
                  </Dropdown>
                  <Dropdown targetBody trigger='click' dropData={sampleData} alignment='right' onChange={(item) => console.log('选中:', item)}>
                    <Button text="全局定位-右" />
                  </Dropdown>
                </div>

                <div style={{ height: '200px', background: '#f0f0f0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  中间区域
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Dropdown trigger='click' dropData={sampleData} placement='top' onChange={(item) => console.log('选中:', item)}>
                    <Button text="向上展开-左" />
                  </Dropdown>
                  <Dropdown trigger='click' dropData={sampleData} placement='top' alignment='center' onChange={(item) => console.log('选中:', item)}>
                    <Button text="向上展开-中" />
                  </Dropdown>
                  <Dropdown trigger='click' dropData={sampleData} placement='top' alignment='right' onChange={(item) => console.log('选中:', item)}>
                    <Button text="向上展开-右" />
                  </Dropdown>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Dropdown targetBody trigger='click' dropData={sampleData} placement='top' onChange={(item) => console.log('选中:', item)}>
                    <Button text="全局定位-向上展开-左" />
                  </Dropdown>
                  <Dropdown targetBody trigger='click' dropData={sampleData} placement='top' alignment='center' onChange={(item) => console.log('选中:', item)}>
                    <Button text="全局定位-向上展开-中" />
                  </Dropdown>
                  <Dropdown targetBody trigger='click' dropData={sampleData} placement='top' alignment='right' onChange={(item) => console.log('选中:', item)}>
                    <Button text="全局定位-向上展开-右" />
                  </Dropdown>
                </div>

                <div style={{ height: '100px', background: '#f0f0f0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  滚动区域底部
                </div>
              </div>
            </div>
          </CodeOperationContainer>
        </ComponentSectionLayout>

        {/* 自定义内容 */}
        <ComponentSectionLayout
          title='自定义内容'
          id='dropdown-custom-content'
          description='通过 dropContent 属性可以自定义下拉菜单的内容。'
        >
          <CodeOperationContainer>
            <div className='flex column items-center gap-24'>
              <Dropdown
                trigger='click'
                dropContent={
                  <div style={{ padding: '16px', minWidth: '200px' }}>
                    <h4 style={{ margin: '0 0 8px 0' }}>自定义内容</h4>
                    <p style={{ margin: '0 0 12px 0', color: '#666' }}>这里可以放置任何自定义内容</p>
                    <div style={{ display: 'flex', gap: '8px' }}>
                      <Button text="操作1" size="small" />
                      <Button text="操作2" size="small" />
                    </div>
                  </div>
                }
              >
                <Button text="自定义内容" />
              </Dropdown>
            </div>
          </CodeOperationContainer>
        </ComponentSectionLayout>

        {/* 禁用状态 */}
        <ComponentSectionLayout
          title='禁用状态'
          id='dropdown-disabled'
          description='通过 disabled 属性可以禁用下拉菜单。'
        >
          <CodeOperationContainer>
            <div className='flex column items-center gap-24'>
              <div className='flex items-center gap-12'>
                <Dropdown dropData={sampleData} disabled onChange={(item) => console.log('选中:', item)}>
                  <Button text="禁用-hover" />
                </Dropdown>
                <Dropdown trigger="click" dropData={sampleData} disabled onChange={(item) => console.log('选中:', item)}>
                  <Button text="禁用-click" />
                </Dropdown>
                <Dropdown targetBody dropData={sampleData} disabled onChange={(item) => console.log('选中:', item)}>
                  <Button text="禁用-全局定位" />
                </Dropdown>
              </div>

              <div className='flex items-center gap-12'>
                <Dropdown
                  dropData={sampleData}
                  disabled
                  open={true}
                  onChange={(item) => console.log('选中:', item)}
                >
                  <Button text="禁用-强制展开" />
                </Dropdown>
                <Dropdown
                  trigger="click"
                  dropData={sampleData}
                  disabled
                  open={true}
                  onChange={(item) => console.log('选中:', item)}
                >
                  <Button text="禁用-强制展开-click" />
                </Dropdown>
              </div>
            </div>
          </CodeOperationContainer>
        </ComponentSectionLayout>
      </div>
    </ComponentContentLayout>
  )
}
