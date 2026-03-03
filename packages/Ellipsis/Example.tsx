import React, { useState } from 'react';
import Ellipsis, { useEllipsis } from '.';
import CodeOperationContainer from '../../example/components/CodeOperationContainer';
import ComponentContentLayout from '../../example/components/ComponentContentLayout';
import ComponentPropsTable from '../../example/components/ComponentPropsTable';
import ComponentSectionLayout from '../../example/components/ComponentSectionLayout';
import Tag from '../Tag';

// useEllipsis 钩子使用示例组件 - 单行
function UseEllipsisSingleDemo() {
  const { ref, isEllipsis, width, scrollWidth } = useEllipsis<HTMLDivElement>();

  return (
    <div style={{ width: '200px' }}>
      <div
        ref={ref}
        style={{
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap',
        }}
      >
        这是一段使用 useEllipsis 钩子的长文本内容，用于演示单行省略检测功能。
      </div>
      <div className="mt-8 flex items-center gap-8">
        <Tag color={isEllipsis ? 'warning' : 'success'}>
          {isEllipsis ? '已省略' : '未省略'}
        </Tag>
        <span className="text-text-secondary text-12">
          宽度: {width}px / 内容: {scrollWidth}px
        </span>
      </div>
    </div>
  );
}

// useEllipsis 钩子使用示例组件 - 多行
function UseEllipsisMultipleDemo() {
  const { ref, isEllipsis, height, scrollHeight } = useEllipsis<HTMLDivElement>({ line: 2 });

  return (
    <div style={{ width: '250px' }}>
      <div
        ref={ref}
        style={{
          display: '-webkit-box',
          WebkitLineClamp: 2,
          WebkitBoxOrient: 'vertical',
          overflow: 'hidden',
        } as React.CSSProperties}
      >
        这是一段使用 useEllipsis 钩子的长文本内容，用于演示多行省略检测功能。当文本超出两行时，会被自动省略，并且钩子会返回 isEllipsis 为 true。
      </div>
      <div className="mt-8 flex items-center gap-8">
        <Tag color={isEllipsis ? 'warning' : 'success'}>
          {isEllipsis ? '已省略' : '未省略'}
        </Tag>
        <span className="text-text-secondary text-12">
          高度: {height}px / 内容: {scrollHeight}px
        </span>
      </div>
    </div>
  );
}

// useEllipsis 响应式示例
function UseEllipsisResponsiveDemo() {
  const { ref, isEllipsis, width, check } = useEllipsis<HTMLDivElement>({ line: 3 });

  return (
    <div
      className="border border-border-primary p-16"
      style={{
        width: '300px',
        resize: 'horizontal',
        overflow: 'auto',
        minWidth: '150px',
        maxWidth: '600px',
      }}
    >
      <div
        ref={ref}
        style={{
          display: '-webkit-box',
          WebkitLineClamp: 3,
          WebkitBoxOrient: 'vertical',
          overflow: 'hidden',
        } as React.CSSProperties}
      >
        这是一段响应式文本内容，使用 useEllipsis 钩子检测省略状态。拖动容器右边框调整宽度，观察省略状态的变化。钩子会自动监听容器大小变化并更新状态。
      </div>
      <div className="mt-12 flex items-center gap-8 flex-wrap">
        <Tag color={isEllipsis ? 'warning' : 'success'}>
          {isEllipsis ? '已省略' : '未省略'}
        </Tag>
        <span className="text-text-secondary text-12">容器宽度: {width}px</span>
        <button
          className="px-8 py-4 text-12 bg-fill-secondary rounded-4 hover:bg-fill-tertiary transition-colors"
          onClick={check}
        >
          手动检查
        </button>
      </div>
    </div>
  );
}

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

  const useEllipsisOptions = [
    { name: 'line', type: 'number', desc: '显示行数，用于判断是单行还是多行省略检测', default: '1' },
    { name: 'debounceDelay', type: 'number', desc: '防抖延迟时间（毫秒），用于优化频繁尺寸变化时的性能', default: '100' },
    { name: 'watchParent', type: 'boolean', desc: '是否监听父级容器变化', default: 'true' },
    { name: 'watchDom', type: 'boolean', desc: '是否监听 DOM 变化', default: 'true' },
    { name: 'watchResize', type: 'boolean', desc: '是否监听窗口大小变化', default: 'true' },
  ];

  const useEllipsisReturns = [
    { name: 'ref', type: 'RefObject<T>', desc: '需要绑定到目标元素的 ref' },
    { name: 'isEllipsis', type: 'boolean', desc: '是否处于省略状态（文本溢出）' },
    { name: 'width', type: 'number', desc: '元素的当前宽度' },
    { name: 'height', type: 'number', desc: '元素的当前高度' },
    { name: 'scrollWidth', type: 'number', desc: '元素的滚动宽度（实际内容宽度）' },
    { name: 'scrollHeight', type: 'number', desc: '元素的滚动高度（实际内容高度）' },
    { name: 'check', type: '() => void', desc: '手动触发检查函数' },
  ];

  return (
    <ComponentContentLayout
      zh='文字省略'
      en='Ellipsis'
      desc='LandDesign 的文字省略组件，用于处理文本内容过长时的省略显示。支持单行和多行省略，自动检测文本是否超出容器，并提供hover显示完整内容的功能。同时提供 useEllipsis 钩子供外部单独使用。'
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

          {/* useEllipsis 钩子示例 */}
          <ComponentSectionLayout
            title='useEllipsis 钩子'
            id='use-ellipsis-hook'
            description='提供 useEllipsis 钩子供外部单独使用，可以获取元素的省略状态和尺寸信息。'
          >
            <CodeOperationContainer style={{ alignItems: 'flex-start', gap: '32px', flexWrap: 'wrap' }}>
              <div>
                <h4 className="mb-12 text-14 font-medium">单行检测</h4>
                <UseEllipsisSingleDemo />
              </div>
              <div>
                <h4 className="mb-12 text-14 font-medium">多行检测</h4>
                <UseEllipsisMultipleDemo />
              </div>
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* useEllipsis 响应式示例 */}
          <ComponentSectionLayout
            title='useEllipsis 响应式'
            id='use-ellipsis-responsive'
            description='useEllipsis 钩子会自动监听容器变化，也支持手动触发检查。'
          >
            <CodeOperationContainer>
              <UseEllipsisResponsiveDemo />
            </CodeOperationContainer>
          </ComponentSectionLayout>
        </>
      )}

      {activeTab === 'props' && (
        <div className='flex flex-col gap-24'>
          <div>
            <h3 className="text-16 font-medium mb-12">Ellipsis 组件属性</h3>
            <ComponentPropsTable props={ellipsisProps} />
          </div>
          
          <div>
            <h3 className="text-16 font-medium mb-12">useEllipsis 钩子参数</h3>
            <ComponentPropsTable props={useEllipsisOptions} />
          </div>
          
          <div>
            <h3 className="text-16 font-medium mb-12">useEllipsis 返回值</h3>
            <ComponentPropsTable props={useEllipsisReturns} />
          </div>
        </div>
      )}
    </ComponentContentLayout>
  );
}
