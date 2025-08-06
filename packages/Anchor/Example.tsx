import React, { useMemo, useState } from 'react'
import Anchor from ".";
import ComponentContentLayout from '../../example/components/ComponentContentLayout';
import ComponentSectionLayout from '../../example/components/ComponentSectionLayout';
import CodeOperationContainer from '../../example/components/CodeOperationContainer';
import ComponentPropsTable from '../../example/components/ComponentPropsTable';
import Flex from '../Flex';

// API 文档配置
const anchorProps = [
  { name: 'data', type: 'AnchorItemType[]', desc: '锚点数据，包含锚点项的结构化数据' },
  { name: 'gap', type: 'number', default: '4', desc: '锚点项之间的间距' },
  { name: 'onChange', type: '(key: string) => void', desc: '点击锚点时的回调函数' },
  { name: 'offsetTop', type: 'number', default: '0', desc: '滚动到目标位置时的偏移距离' },
  { name: 'getContainer', type: '() => HTMLElement | Window', default: 'window', desc: '滚动容器选择器' },
  { name: 'showIndicator', type: 'boolean', default: 'true', desc: '是否显示指示器' },
  { name: 'indicatorStyle', type: 'CSSProperties', desc: '自定义指示器样式' },
  { name: 'style', type: 'CSSProperties', desc: '自定义样式' },
  { name: 'className', type: 'string', desc: '自定义类名' },
];

const anchorTypes = [
  {
    name: "AnchorItemType",
    data: [
      { name: "key", type: "string", desc: "唯一标识" },
      { name: "href", type: "string", desc: "锚点链接" },
      { name: "title", type: "string", desc: "锚点标题" },
    ],
  },
];

export default function AnchorExample() {
  const [activeTab, setActiveTab] = useState<string>('examples');
  const anchorData1 = [
    ...Array.from({ length: 10 }).map((_, index) => ({ key: `a-section${index + 1}`, title: `第${index + 1}部分` })),
  ];
  const anchorData2 = [
    ...Array.from({ length: 10 }).map((_, index) => ({ key: `b-section${index + 1}`, title: `第${index + 1}部分` })),
  ];
  const anchorData3 = [
    ...Array.from({ length: 10 }).map((_, index) => ({ key: `c-section${index + 1}`, title: `第${index + 1}部分` })),
  ];


  return (
    <ComponentContentLayout
      zh='锚点'
      en='Anchor'
      desc='LandDesign 的锚点组件，用于页面内导航。支持滚动监听、自动选中、自定义偏移等功能。'
      activeTab={activeTab}
      onTabChange={setActiveTab}
    >
      {activeTab === 'examples' && (
        <div className='flex flex-col gap-24'>
          {/* 基础用法 */}
          <ComponentSectionLayout
            title='基础用法'
            id='anchor-basic'
            description='Anchor 组件的基础用法，支持滚动监听和自动选中。'
          >
            <CodeOperationContainer>
              <Flex gap={24}>
                <div className='sticky top-188 w-[200px] h-fit'>
                  <Anchor
                    data={anchorData1}
                    onChange={(key) => console.log('Anchor A selected:', key)}
                    getContainer={() => {
                      const container = document.getElementById("a-scroller");
                      return container || window;
                    }}
                  />
                </div>

                <div id="a-scroller" className='flex-1 flex flex-col gap-12 overflow-auto h-[600px]'>
                  {anchorData1?.map((item, index) => (
                    <div id={`${item.key}`} className='p-24 h-[200px] flex-shrink-0 color-text-primary bg-bg-secondary'>
                      <h3>第{index + 1}部分</h3>
                      <p>这是第{index + 1}部分的内容，用于测试锚点选中逻辑。</p>
                    </div>
                  ))}
                </div>
              </Flex>
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 自定义偏移 */}
          <ComponentSectionLayout
            title='自定义偏移'
            id='anchor-offset'
            description='通过 offsetTop 属性设置滚动偏移量，适用于有固定头部的情况。'
          >
            <CodeOperationContainer>
              <Flex gap={24}>
                <div className='sticky top-188 w-[200px] h-fit'>
                  <Anchor
                    data={anchorData2}
                    offsetTop={80}
                    getContainer={() => {
                      const container = document.getElementById("b-scroller");
                      return container || window;
                    }}
                  />
                </div>

                <div id="b-scroller" className='flex-1 flex flex-col gap-12 overflow-auto h-[600px]'>
                  {anchorData2?.map((item, index) => (
                    <div id={`${item.key}`} className='p-24 h-[200px] flex-shrink-0 color-text-primary bg-bg-secondary'>
                      <h3>第{index + 1}部分</h3>
                      <p>这是第{index + 1}部分的内容，用于测试锚点选中逻辑。{item.key}</p>
                    </div>
                  ))}
                </div>
              </Flex>
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 自定义指示器 */}
          <ComponentSectionLayout
            title='自定义指示器'
            id='anchor-indicator'
            description='可以自定义指示器的样式，或者隐藏指示器。'
          >
            <CodeOperationContainer>
              <Flex gap={24}>
                <div className='sticky top-188 w-[200px] h-fit'>
                  <Anchor
                    data={anchorData3}
                    indicatorStyle={{
                      backgroundColor: 'var(--color-primary)',
                      width: '3px',
                      borderRadius: '2px'
                    }}
                    onChange={(key) => console.log('Anchor C selected:', key)}
                    getContainer={() => {
                      const container = document.getElementById("c-scroller");
                      return container || window;
                    }}
                  />
                </div>

                <div id="c-scroller" className='flex-1 flex flex-col gap-12 overflow-auto h-[600px]'>
                  {anchorData3?.map((item, index) => (
                    <div id={`${item.key}`} className='p-24 h-[200px] flex-shrink-0 color-text-primary bg-bg-secondary'>
                      <h3>第{index + 1}部分</h3>
                      <p>这是第{index + 1}部分的内容，用于测试锚点选中逻辑。{item.key}</p>
                    </div>
                  ))}
                </div>
              </Flex>
            </CodeOperationContainer>
          </ComponentSectionLayout>
        </div>
      )}

      {activeTab === 'props' && (
        <div className='flex flex-col gap-12'>
          <ComponentPropsTable props={anchorProps} />
          {anchorTypes?.map(i => <div key={i.name} className='flex flex-col gap-12' id={`${i.name}-API`}>
            <h3 className='text-sm font-bold'>{i.name}</h3>
            <ComponentPropsTable props={i.data} />
          </div>)}
        </div>
      )}
    </ComponentContentLayout>
  )
}
