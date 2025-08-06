import React, { useState } from 'react';
import Collapse from ".";
import CodeOperationContainer from '../../example/components/CodeOperationContainer';
import ComponentContentLayout from '../../example/components/ComponentContentLayout';
import ComponentPropsTable from '../../example/components/ComponentPropsTable';
import ComponentSectionLayout from '../../example/components/ComponentSectionLayout';

export default function CollapseExample() {
  const [activeTab, setActiveTab] = useState<string>('examples');

  const collapseProps = [
    { name: 'title', type: 'string | React.ReactNode', desc: '折叠面板标题' },
    { name: 'content', type: 'string | React.ReactNode', desc: '折叠面板内容' },
    { name: 'open', type: 'boolean', default: 'false', desc: '是否展开' },
    { name: 'hideIcon', type: 'boolean', default: 'false', desc: '是否隐藏图标' },
    { name: 'style', type: 'CSSProperties', desc: '自定义样式' },
    { name: 'className', type: 'string', desc: '自定义类名' },
  ];

  return (
    <ComponentContentLayout
      zh='折叠面板'
      en='Collapse'
      desc='LandDesign 的折叠面板组件，支持展开收起、自定义标题内容、隐藏图标等功能。'
      activeTab={activeTab}
      onTabChange={setActiveTab}
    >

      {/* 标签页内容 */}
      {activeTab === 'examples' && (
        <>
          {/* 基础用法 */}
          <ComponentSectionLayout
            title='基础用法'
            id='collapse-normal'
            description='Collapse 组件的基础用法，支持展开收起功能。'
          >
            <CodeOperationContainer style={{ justifyContent: 'flex-start' }}>
              <Collapse
                title="折叠标题 1"
                content="这部分是每个折叠面板折叠或展开的内容这部分是每个折叠面板折叠或展开的内容"
              />
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 默认展开 */}
          <ComponentSectionLayout
            title='默认展开'
            id='collapse-default-open'
            description='通过 open 属性可以设置折叠面板的默认展开状态。'
          >
            <CodeOperationContainer style={{ justifyContent: 'flex-start' }}>
              <Collapse
                title="折叠标题 2"
                content="这部分是每个折叠面板折叠或展开的内容这部分是每个折叠面板折叠或展开的内容"
                open={true}
              />
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 隐藏图标 */}
          <ComponentSectionLayout
            title='隐藏图标'
            id='collapse-hide-icon'
            description='通过 hideIcon 属性可以隐藏展开收起的图标。'
          >
            <CodeOperationContainer style={{ justifyContent: 'flex-start' }}>
              <Collapse
                title="折叠标题 3"
                content="这部分是每个折叠面板折叠或展开的内容这部分是每个折叠面板折叠或展开的内容"
                hideIcon={true}
              />
            </CodeOperationContainer>
          </ComponentSectionLayout>
        </>
      )}

      {activeTab === 'props' && (
        <div className='flex flex-col gap-12'>
          <ComponentPropsTable props={collapseProps} />
        </div>
      )}
    </ComponentContentLayout>
  );
}
