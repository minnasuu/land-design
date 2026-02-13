import { useRef, useState } from 'react'
import Dropdown from '.';
import Button from '../Button';
import ComponentContentLayout from '../../example/components/ComponentContentLayout';
import ComponentSectionLayout from '../../example/components/ComponentSectionLayout';
import CodeOperationContainer from '../../example/components/CodeOperationContainer';
import ComponentPropsTable from '../../example/components/ComponentPropsTable';
import Link from '../Link';

const dropdownProps = [
  { name: 'items', type: <><Link anchor='DropdownItem-API'>DropdownItem</Link>[]</>, desc: '下拉选项数据' },
  { name: 'content', type: 'ReactNode', desc: '自定义下拉内容（优先级高于 items）' },
  { name: 'trigger', type: "'hover' | 'click'", desc: '触发方式', default: "'hover'" },
  { name: 'placement', type: "'top' | 'bottom'", desc: '展开方向', default: "'bottom'" },
  { name: 'alignment', type: "'left' | 'center' | 'right'", desc: '对齐方式', default: "'left'" },
  { name: 'attach', type: 'string | HTMLElement', desc: '面板挂载节点，传入 CSS 选择器或 DOM 节点；不传则在触发元素内部渲染' },
  { name: 'disabled', type: 'boolean', desc: '是否禁用', default: 'false' },
  { name: 'open', type: 'boolean', desc: '受控展开状态', default: 'false' },
  { name: 'toggleClassName', type: 'string', desc: '触发元素类名' },
  { name: 'toggleStyle', type: 'CSSProperties', desc: '触发元素样式' },
  { name: 'contentClassName', type: 'string', desc: '下拉面板类名' },
  { name: 'contentStyle', type: 'CSSProperties', desc: '下拉面板样式' },
  { name: 'onChange', type: <>(item: <Link anchor='DropdownItem-API'>DropdownItem</Link>){' =>'} void</>, desc: '选中下拉项时触发' },
  { name: 'onOpen', type: '() => void', desc: '面板展开时触发' },
  { name: 'onClose', type: '() => void', desc: '面板关闭时触发' },
  { name: 'style', type: 'CSSProperties', desc: '自定义样式' },
  { name: 'className', type: 'string', desc: '自定义类名' },
  { name: 'children', type: 'ReactNode', desc: '触发元素' },
];

const dropdownTypes = [
  {
    name: "DropdownItem",
    data: [
      { name: "key", type: "string", desc: "选项唯一标识" },
      { name: "label", type: "string | ReactNode", desc: "显示内容" },
    ],
  },
];

export default function DropdownExample() {
  const [activeTab, setActiveTab] = useState<string>('examples');
  const customContainerRef = useRef<HTMLDivElement>(null);
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
      activeTab={activeTab}
      onTabChange={setActiveTab}
    >
      {activeTab === 'examples' && (
        <div className='flex flex-col gap-24'>
          {/* hover 下拉 */}
          <ComponentSectionLayout
            title='hover 下拉'
            id='dropdown-hover'
            description='默认使用 hover 触发方式显示下拉菜单。'
          >
            <CodeOperationContainer>
              <div className='flex column items-center gap-24'>
                <Dropdown items={sampleData} onChange={(item) => console.log('选中:', item)}>
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
                <Dropdown trigger='click' items={sampleData} onChange={(item) => console.log('选中:', item)}>
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
                <Dropdown trigger='click' items={sampleData} alignment='center' onChange={(item) => console.log('选中:', item)}>
                  <Button text="居中对齐" />
                </Dropdown>
                <Dropdown trigger='click' items={sampleData} alignment='left' onChange={(item) => console.log('选中:', item)}>
                  <Button text="左对齐" />
                </Dropdown>
                <Dropdown trigger='click' items={sampleData} alignment='right' onChange={(item) => console.log('选中:', item)}>
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
                <Dropdown trigger='click' items={sampleData} placement='bottom' onChange={(item) => console.log('选中:', item)}>
                  <Button text="向下展开" />
                </Dropdown>
                <Dropdown trigger='click' items={sampleData} placement='top' onChange={(item) => console.log('选中:', item)}>
                  <Button text="向上展开" />
                </Dropdown>
              </div>
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 挂载到 body */}
          <ComponentSectionLayout
            title='挂载到 body'
            id='dropdown-attach-body'
            description='通过 attach="body" 将面板挂载到 body，脱离父容器层叠上下文。'
          >
            <CodeOperationContainer>
              <div className='flex items-center justify-center gap-24'>
                <Dropdown attach="body" items={sampleData} onChange={(item) => console.log('选中:', item)}>
                  <Button text="body-左对齐" />
                </Dropdown>
                <Dropdown attach="body" items={sampleData} alignment='center' onChange={(item) => console.log('选中:', item)}>
                  <Button text="body-居中" />
                </Dropdown>
                <Dropdown attach="body" items={sampleData} alignment='right' onChange={(item) => console.log('选中:', item)}>
                  <Button text="body-右对齐" />
                </Dropdown>
              </div>
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 挂载到指定节点 */}
          <ComponentSectionLayout
            title='挂载到指定节点'
            id='dropdown-attach-custom'
            description='通过 attach 属性传入 CSS 选择器或 HTMLElement，将面板挂载到指定容器。'
          >
            <CodeOperationContainer>
              <div className='flex flex-col gap-16'>
                <div
                  ref={customContainerRef}
                  style={{ position: 'relative', padding: '16px', border: '2px dashed var(--color-border-primary)', borderRadius: '8px', minHeight: '60px' }}
                >
                  <span style={{ color: 'var(--color-text-secondary)', fontSize: '12px' }}>自定义挂载容器（面板会渲染在此区域内）</span>
                </div>
                <div className='flex items-center gap-12'>
                  <Dropdown
                    trigger='click'
                    attach={customContainerRef.current || undefined}
                    items={sampleData}
                    onChange={(item) => console.log('选中:', item)}
                  >
                    <Button text="挂载到上方容器" />
                  </Dropdown>
                </div>
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
                <Dropdown trigger='click' items={sampleData} alignment='left' onChange={(item) => console.log('选中:', item)}>
                  <Button text="左边界测试" />
                </Dropdown>
                <Dropdown trigger='click' items={sampleData} alignment='center' onChange={(item) => console.log('选中:', item)}>
                  <Button text="居中测试" />
                </Dropdown>
                <Dropdown trigger='click' items={sampleData} alignment='right' onChange={(item) => console.log('选中:', item)}>
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
                style={{ height: '300px', padding: '20px', position: 'relative' }}
                className='border overflow-auto scrollbar-none'
              >
                <div style={{ height: '600px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
                  <div style={{ height: '100px', background: 'var(--color-bg-secondary)', color: 'var(--color-text-primary)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    滚动区域顶部
                  </div>

                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Dropdown trigger='click' items={sampleData} onChange={(item) => console.log('选中:', item)}>
                      <Button text="滚动容器内-左" />
                    </Dropdown>
                    <Dropdown trigger='click' items={sampleData} alignment='center' onChange={(item) => console.log('选中:', item)}>
                      <Button text="滚动容器内-中" />
                    </Dropdown>
                    <Dropdown trigger='click' items={sampleData} alignment='right' onChange={(item) => console.log('选中:', item)}>
                      <Button text="滚动容器内-右" />
                    </Dropdown>
                  </div>

                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Dropdown attach="body" trigger='click' items={sampleData} onChange={(item) => console.log('选中:', item)}>
                      <Button text="body挂载-左" />
                    </Dropdown>
                    <Dropdown attach="body" trigger='click' items={sampleData} alignment='center' onChange={(item) => console.log('选中:', item)}>
                      <Button text="body挂载-中" />
                    </Dropdown>
                    <Dropdown attach="body" trigger='click' items={sampleData} alignment='right' onChange={(item) => console.log('选中:', item)}>
                      <Button text="body挂载-右" />
                    </Dropdown>
                  </div>

                  <div style={{ height: '200px', background: '#f0f0f0', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    中间区域
                  </div>

                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Dropdown trigger='click' items={sampleData} placement='top' onChange={(item) => console.log('选中:', item)}>
                      <Button text="向上展开-左" />
                    </Dropdown>
                    <Dropdown trigger='click' items={sampleData} placement='top' alignment='center' onChange={(item) => console.log('选中:', item)}>
                      <Button text="向上展开-中" />
                    </Dropdown>
                    <Dropdown trigger='click' items={sampleData} placement='top' alignment='right' onChange={(item) => console.log('选中:', item)}>
                      <Button text="向上展开-右" />
                    </Dropdown>
                  </div>

                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Dropdown attach="body" trigger='click' items={sampleData} placement='top' onChange={(item) => console.log('选中:', item)}>
                      <Button text="body挂载-向上-左" />
                    </Dropdown>
                    <Dropdown attach="body" trigger='click' items={sampleData} placement='top' alignment='center' onChange={(item) => console.log('选中:', item)}>
                      <Button text="body挂载-向上-中" />
                    </Dropdown>
                    <Dropdown attach="body" trigger='click' items={sampleData} placement='top' alignment='right' onChange={(item) => console.log('选中:', item)}>
                      <Button text="body挂载-向上-右" />
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
            description='通过 content 属性可以自定义下拉菜单的内容。'
          >
            <CodeOperationContainer>
              <div className='flex column items-center gap-24'>
                <Dropdown
                  trigger='click'
                  content={
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
                  <Dropdown items={sampleData} disabled onChange={(item) => console.log('选中:', item)}>
                    <Button text="禁用-hover" />
                  </Dropdown>
                  <Dropdown trigger="click" items={sampleData} disabled onChange={(item) => console.log('选中:', item)}>
                    <Button text="禁用-click" />
                  </Dropdown>
                  <Dropdown attach="body" items={sampleData} disabled onChange={(item) => console.log('选中:', item)}>
                    <Button text="禁用-body挂载" />
                  </Dropdown>
                </div>

                <div className='flex items-center gap-12'>
                  <Dropdown items={sampleData} disabled open onChange={(item) => console.log('选中:', item)}>
                    <Button text="禁用-强制展开" />
                  </Dropdown>
                  <Dropdown trigger="click" items={sampleData} disabled open onChange={(item) => console.log('选中:', item)}>
                    <Button text="禁用-强制展开-click" />
                  </Dropdown>
                </div>
              </div>
            </CodeOperationContainer>
          </ComponentSectionLayout>
        </div>
      )}
      {activeTab === 'props' && (
        <div className='flex flex-col gap-12'>
          <ComponentPropsTable props={dropdownProps} />
          {dropdownTypes.map(i => (
            <div key={i.name} className='flex flex-col gap-12' id={`${i.name}-API`}>
              <h3 className='text-sm font-bold'>{i.name}</h3>
              <ComponentPropsTable props={i.data as any} />
            </div>
          ))}
        </div>
      )}
    </ComponentContentLayout>
  )
}
