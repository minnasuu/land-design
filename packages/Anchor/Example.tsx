import { useState } from 'react';
import Anchor from '.';
import ComponentContentLayout from '../../example/components/ComponentContentLayout';
import ComponentSectionLayout from '../../example/components/ComponentSectionLayout';
import CodeOperationContainer from '../../example/components/CodeOperationContainer';
import ComponentPropsTable from '../../example/components/ComponentPropsTable';
import Link from '../Link';

const AnchorItemLink = (
  <Link anchor="AnchorItem-API">AnchorItem</Link>
);

const anchorProps = [
  { name: 'items', type: <>{AnchorItemLink}[]</>, desc: '锚点数据，支持嵌套结构' },
  { name: 'gap', type: 'number', desc: '锚点项之间的间距（px）', default: '4' },
  { name: 'onChange', type: '(key: string) => void', desc: '锚点变化时的回调' },
  { name: 'offsetTop', type: 'number', desc: '滚动偏移量（px）', default: '0' },
  { name: 'getContainer', type: '() => HTMLElement | Window', desc: '滚动容器选择器', default: '() => window' },
  { name: 'renderItem', type: '(item, index, active, defaultNode) => ReactNode', desc: '自定义锚点项渲染函数，传入后隐藏默认指示器' },
  { name: 'style', type: 'CSSProperties', desc: '自定义样式' },
  { name: 'className', type: 'string', desc: '自定义类名' },
];

const itemTypes = [
  {
    name: 'AnchorItem',
    data: [
      { name: 'key', type: 'string', desc: '唯一标识，对应目标元素 id' },
      { name: 'title', type: 'string', desc: '锚点文字内容' },
      { name: 'children', type: 'AnchorItem[]', desc: '子项，支持嵌套层级导航' },
    ],
  },
];

export default function AnchorExample() {
  const [activeTab, setActiveTab] = useState<string>('examples');

  const anchorData1 = Array.from({ length: 10 }, (_, i) => ({
    key: `a-section${i + 1}`,
    title: `第${i + 1}部分`,
  }));
  const anchorData2 = Array.from({ length: 10 }, (_, i) => ({
    key: `b-section${i + 1}`,
    title: `第${i + 1}部分`,
  }));
  const anchorData4 = Array.from({ length: 10 }, (_, i) => ({
    key: `d-section${i + 1}`,
    title: `第${i + 1}部分`,
  }));

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
              <div className='sticky top-[168px] w-[200px] h-fit'>
                <Anchor
                  items={anchorData1}
                  onChange={(key) => console.log('Anchor A selected:', key)}
                  getContainer={() => {
                    const container = document.getElementById('a-scroller');
                    return container || window;
                  }}
                />
              </div>
              <div id="a-scroller" className='flex-1 flex flex-col gap-12 overflow-auto h-[600px]'>
                {anchorData1.map((item, index) => (
                  <div key={item.key} id={item.key} className='p-24 h-[200px] flex-shrink-0 color-text-primary bg-bg-secondary'>
                    <h3>第{index + 1}部分</h3>
                    <p>这是第{index + 1}部分的内容，用于测试锚点选中逻辑。</p>
                  </div>
                ))}
              </div>
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 自定义偏移 */}
          <ComponentSectionLayout
            title='自定义偏移'
            id='anchor-offset'
            description='通过 offsetTop 属性设置滚动偏移量，适用于有固定头部的情况。'
          >
            <CodeOperationContainer>
              <div className='sticky top-188 w-[200px] h-fit'>
                <Anchor
                  items={anchorData2}
                  offsetTop={80}
                  getContainer={() => {
                    const container = document.getElementById('b-scroller');
                    return container || window;
                  }}
                />
              </div>
              <div id="b-scroller" className='flex-1 flex flex-col gap-12 overflow-auto h-[600px]'>
                {anchorData2.map((item, index) => (
                  <div key={item.key} id={item.key} className='p-24 h-[200px] flex-shrink-0 color-text-primary bg-bg-secondary'>
                    <h3>第{index + 1}部分</h3>
                    <p>这是第{index + 1}部分的内容，用于测试锚点选中逻辑。{item.key}</p>
                  </div>
                ))}
              </div>
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 自定义渲染 */}
          <ComponentSectionLayout
            title='自定义渲染锚点项'
            id='anchor-render-item'
            description='通过 renderItem 自定义每个锚点项的渲染内容，可根据激活状态展示不同样式。'
          >
            <CodeOperationContainer>
              <div className='sticky top-188 w-[200px] h-fit'>
                <Anchor
                  items={anchorData4}
                  gap={12}
                  renderItem={(_item, _index, active, _defaultNode) => (
                    <div
                      className='flex items-center gap-8 cursor-pointer px-8 rounded-md transition-all'
                      style={{
                        width:'24px',
                        height:'4px',
                        backgroundColor: active ? '#000' : '#999',
                      }}
                    >
                    </div>
                  )}
                  getContainer={() => {
                    const container = document.getElementById('d-scroller');
                    return container || window;
                  }}
                />
              </div>
              <div id="d-scroller" className='flex-1 flex flex-col gap-12 overflow-auto h-[600px]'>
                {anchorData4.map((item, index) => (
                  <div key={item.key} id={item.key} className='p-24 h-[200px] flex-shrink-0 color-text-primary bg-bg-secondary'>
                    <h3>第{index + 1}部分</h3>
                    <p>这是第{index + 1}部分的内容，用于测试自定义渲染锚点项。</p>
                  </div>
                ))}
              </div>
            </CodeOperationContainer>
          </ComponentSectionLayout>
        </div>
      )}

      {activeTab === 'props' && (
        <div className='flex flex-col gap-12'>
          <ComponentPropsTable props={anchorProps} />
          {itemTypes.map(i => (
            <div key={i.name} className='flex flex-col gap-12' id={`${i.name}-API`}>
              <h3 className='text-sm font-bold'>{i.name}</h3>
              <ComponentPropsTable props={i.data} />
            </div>
          ))}
        </div>
      )}
    </ComponentContentLayout>
  );
}
