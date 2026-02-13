import React, { useState } from 'react';
import Divider from '.';
import ComponentContentLayout from '../../example/components/ComponentContentLayout';
import ComponentSectionLayout from '../../example/components/ComponentSectionLayout';
import CodeOperationContainer from '../../example/components/CodeOperationContainer';
import ComponentPropsTable from '../../example/components/ComponentPropsTable';
import Flex from '../Flex';

const dividerProps = [
  { name: 'direction', type: "'horizontal' | 'vertical'", desc: '分割线方向', default: "'horizontal'" },
  { name: 'variant', type: "'solid' | 'dashed'", desc: '线型', default: "'solid'" },
  { name: 'align', type: "'start' | 'center' | 'end'", desc: '有内容时的对齐方式', default: "'center'" },
  { name: 'content', type: 'ReactNode', desc: '分割线中间显示的内容' },
  { name: 'length', type: 'string', desc: '分割线长度，支持 CSS 长度值', default: "'100%'" },
  { name: 'spacing', type: 'number', desc: '分割线与周围的间距(px)', default: '0' },
  { name: 'dashLength', type: 'number', desc: '虚线每段长度(px)', default: '10' },
  { name: 'dashGap', type: 'number', desc: '虚线间隔(px)', default: '5' },
  { name: 'className', type: 'string', desc: '自定义类名' },
  { name: 'style', type: 'CSSProperties', desc: '自定义样式' },
];

export default function DividerExample() {
  const [activeTab, setActiveTab] = useState<string>('examples');

  return (
    <ComponentContentLayout
      zh="分割线"
      en="Divider"
      desc="LandDesign 的分割线组件，用于分隔内容区域。支持水平、垂直方向，以及实线、虚线等不同样式。"
      activeTab={activeTab}
      onTabChange={setActiveTab}
    >
      {activeTab === 'examples' && (
        <div className="flex flex-col gap-24">
          {/* 基础用法 */}
          <ComponentSectionLayout
            title="基础用法"
            id="basic"
            description="默认水平实线分割线。"
          >
            <CodeOperationContainer style={{ flexDirection: 'column' }}>
              <Divider />
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 方向 */}
          <ComponentSectionLayout
            title="方向"
            id="direction"
            description="通过 direction 属性设置分割线方向。"
          >
            <CodeOperationContainer className="whitespace-nowrap" style={{ flexDirection: 'column' }}>
              <Flex align="center" gap={8}>
                水平分割线：
                <Divider />
              </Flex>
              <Flex align="center" style={{ height: 100 }}>
                垂直分割线：
                <Divider direction="vertical" length="100%" />
              </Flex>
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 线型 */}
          <ComponentSectionLayout
            title="线型"
            id="variant"
            description="通过 variant 属性切换实线与虚线，虚线可自定义段长和间隔。"
          >
            <CodeOperationContainer>
              <Flex gap={24} column justify="center">
                <Divider />
                <Divider variant="dashed" />
                <Divider variant="dashed" dashGap={10} dashLength={20} />
              </Flex>
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 间距 */}
          <ComponentSectionLayout
            title="间距"
            id="spacing"
            description="通过 spacing 属性设置分割线与周围内容的间距。"
          >
            <CodeOperationContainer>
              <Flex gap={24} column justify="center">
                <Divider spacing={10} />
                <Divider spacing={20} />
                <Divider spacing={30} />
              </Flex>
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 带内容 */}
          <ComponentSectionLayout
            title="带内容"
            id="content"
            description="通过 content 属性在分割线中间显示内容，配合 align 调整对齐。"
          >
            <CodeOperationContainer>
              <Flex gap={24} column justify="center">
                <Divider content="居中" />
                <Divider content="靠左" align="start" />
                <Divider content="靠右" align="end" />
              </Flex>
            </CodeOperationContainer>
          </ComponentSectionLayout>
        </div>
      )}

      {activeTab === 'props' && (
        <div className="flex flex-col gap-12">
          <ComponentPropsTable props={dividerProps} />
        </div>
      )}
    </ComponentContentLayout>
  );
}
