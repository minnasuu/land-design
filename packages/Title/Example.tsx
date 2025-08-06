import React, { useState } from 'react';
import Title from '.';
import CodeOperationContainer from '../../example/components/CodeOperationContainer';
import ComponentContentLayout from '../../example/components/ComponentContentLayout';
import ComponentPropsTable from '../../example/components/ComponentPropsTable';
import ComponentSectionLayout from '../../example/components/ComponentSectionLayout';

export default function TitleExample() {
  const [activeTab, setActiveTab] = useState<string>('examples');

  const titleProps = [
    { name: 'title', type: 'string | ReactNode', desc: '标题内容，可以传入字符串或React节点' },
    { name: 'type', type: 'h1 | h2 | h3 | h4', desc: '标题层级：h1(一级) | h2(二级) | h3(三级) | h4(四级)', default: 'h3' },
    { name: 'prefix', type: 'string', desc: '标题前缀，可以传入字符串作为标题的前缀' },
    { name: 'sub', type: 'string | ReactNode', desc: '标题角标，可以传入字符串或React节点作为标题的角标' },
    { name: 'tip', type: 'string | ReactNode', desc: '提示内容，可以传入字符串或React节点作为标题的提示' },
    { name: 'onClick', type: '() => void', desc: '点击事件，当标题被点击时触发' },
    { name: 'style', type: 'CSSProperties', desc: '自定义样式，可以传入CSS样式对象来自定义标题外观' },
    { name: 'className', type: 'string', desc: '自定义类名，可以传入额外的CSS类名' },
    { name: 'children', type: 'ReactNode', desc: '子元素，可以传入React节点作为标题的内容' },
  ];

  return (
    <ComponentContentLayout
      zh='标题'
      en='Title'
      desc='LandDesign 的标题组件，用于展示不同层级的标题。支持前缀、角标、提示和自定义样式。'
      activeTab={activeTab}
      onTabChange={setActiveTab}
    >

      {/* 标签页内容 */}
      {activeTab === 'examples' && (
        <>
          {/* 不同层级 */}
          <ComponentSectionLayout
            title='不同层级'
            id='title-levels'
            description='支持 h1、h2、h3、h4 四种标题层级。'
          >
            <CodeOperationContainer style={{ gap: '32px' }}>
              <div>
                <h4 className="mb-8">一级标题 (h1)</h4>
                <Title title="页面主标题" type="h1" />
              </div>
              <div>
                <h4 className="mb-8">二级标题 (h2)</h4>
                <Title title="章节标题" type="h2" />
              </div>
              <div>
                <h4 className="mb-8">三级标题 (h3)</h4>
                <Title title="小节标题" type="h3" />
              </div>
              <div>
                <h4 className="mb-8">四级标题 (h4)</h4>
                <Title title="子标题" type="h4" />
              </div>
            </CodeOperationContainer>
          </ComponentSectionLayout>
        </>
      )}

      {activeTab === 'props' && (
        <div className='flex flex-col gap-12'>
          <ComponentPropsTable props={titleProps} />
        </div>
      )}
    </ComponentContentLayout>
  );
}
