import React, { useState } from 'react';
import Ellipsis from '.';
import CodeOperationContainer from '../../example/components/CodeOperationContainer';
import ComponentContentLayout from '../../example/components/ComponentContentLayout';
import ComponentPropsTable from '../../example/components/ComponentPropsTable';
import ComponentSectionLayout from '../../example/components/ComponentSectionLayout';

export default function EllipsisExample() {
  const [activeTab, setActiveTab] = useState<string>('examples');

  const ellipsisProps = [
    { name: 'line', type: 'number', desc: '显示行数，设置文本显示的最大行数，超过时显示省略号', default: '1' },
    { name: 'text', type: 'ReactNode', desc: '文本内容，可以传入React节点作为要处理的文本内容' },
    { name: 'children', type: 'ReactNode', desc: '子元素，可以传入React节点作为省略号组件的内容' },
    { name: 'open', type: 'boolean', desc: '是否启用hover提示，设置为true时，当文本被省略时hover会显示完整内容', default: 'true' },
    { name: 'style', type: 'CSSProperties', desc: '自定义样式，可以传入CSS样式对象来自定义省略号组件外观' },
    { name: 'className', type: 'string', desc: '自定义类名，可以传入额外的CSS类名' },
    { name: 'popoverProps', type: 'PopOverProps', desc: 'PopOver组件属性，用于自定义hover提示的显示方式' },
    { name: 'setMaxWidth', type: '(contentWidth: number) => number', desc: '设置maxWidth的回调函数，接收contentWidth作为参数，返回自定义的maxWidth值' },
  ];

  return (
    <ComponentContentLayout
      zh='文字省略'
      en='Ellipsis'
      desc='LandDesign 的文字省略组件，用于处理文本内容过长时的省略显示。支持单行和多行省略，自动检测文本是否超出容器，并提供hover显示完整内容的功能。'
      activeTab={activeTab}
      onTabChange={setActiveTab}
    >

      {/* 标签页内容 */}
      {activeTab === 'examples' && (
        <>
          {/* 单行省略 */}
          <ComponentSectionLayout
            title='单行省略'
            id='ellipsis-single'
            description='当文本内容超出容器宽度时，自动显示省略号。hover时显示完整内容。'
          >
            <CodeOperationContainer style={{ alignItems: 'flex-start', gap: '32px' }}>
              <Ellipsis text="这是一段非常长的文字内容，当文本超出容器宽度时会自动显示省略号，鼠标悬停时会显示完整内容。" style={{ width: '200px' }} />
              <Ellipsis style={{ width: '200px' }}>
                这是通过children传入的文本内容，同样支持省略和hover显示完整内容的功能
              </Ellipsis>
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 多行省略 */}
          <ComponentSectionLayout
            title='多行省略'
            id='ellipsis-multiple'
            description='设置line属性可以控制文本显示的行数，超出指定行数时显示省略号。'
          >
            <CodeOperationContainer style={{ gap: '32px' }}>
            <Ellipsis
                    text="这是一段非常长的文字内容，当文本超出指定行数时会自动显示省略号。这是第二行的内容，用于演示多行省略的效果。这是第三行的内容，应该会被省略。"
                    line={2}
                  />
            <Ellipsis
                    text="这是一段非常长的文字内容，用于演示3行省略的效果。这是第二行的内容，继续展示多行文本。这是第三行的内容，应该会被显示。这是第四行的内容，应该会被省略。"
                    line={3}
                  />
            <Ellipsis
                    text="这是一段非常长的文字内容，用于演示4行省略的效果。这是第二行的内容，继续展示多行文本。这是第三行的内容，继续展示。这是第四行的内容，应该会被显示。这是第五行的内容，应该会被省略。"
                    line={4}
                  />
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 响应式示例 */}
          <ComponentSectionLayout
            title='响应式示例'
            id='ellipsis-responsive'
            description='组件会自动监听容器大小变化，动态判断是否需要省略。'
          >
            <CodeOperationContainer>
              <div className="border border-border-primary p-16" style={{
                width: '300px',
                resize: 'horizontal',
                overflow: 'auto',
                minWidth: '200px',
                maxWidth: '800px'
              }}>
                <Ellipsis
                  text="这是一段响应式文字内容，当容器宽度改变时，组件会自动重新计算是否需要显示省略号。你可以拖动容器的右边框来调整宽度，观察省略号的变化。"
                  line={2}
                />
              </div>
            </CodeOperationContainer>
          </ComponentSectionLayout>
        </>
      )}

      {activeTab === 'props' && (
        <div className='flex flex-col gap-12'>
          <ComponentPropsTable props={ellipsisProps} />
        </div>
      )}
    </ComponentContentLayout>
  );
}
