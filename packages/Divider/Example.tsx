import React, { useState } from 'react'
import Divider from ".";
import ComponentContentLayout from '../../example/components/ComponentContentLayout';
import ComponentSectionLayout from '../../example/components/ComponentSectionLayout';
import CodeOperationContainer from '../../example/components/CodeOperationContainer';
import ComponentPropsTable from '../../example/components/ComponentPropsTable';
import Flex from '../Flex';

// API 文档配置
const dividerProps = [
  { name: 'direction', type: 'DividerDirection (row | column)', desc: '分割线方向', default: 'row' },
  { name: 'content', type: 'ReactNode | string', desc: '分割线包含的内容' },
  { name: 'lineLength', type: 'string', desc: '分割线宽度和高度' },
  { name: 'gap', type: 'number', desc: '分割线上下或左右边距' },
  { name: 'type', type: 'DividerType (solid | dashed)', desc: '分割线类型', default: 'solid' },
  { name: 'dashedGap', type: 'number', desc: '虚线分割线间距' },
  { name: 'dashedLength', type: 'number', desc: '虚线分割线长度' },
  { name: 'align', type: 'DividerAlign (left | center | right)', desc: '内容对齐方式', default: 'center' },
  { name: 'style', type: 'CSSProperties', desc: '自定义样式' },
  { name: 'className', type: 'string', desc: '自定义类名' },
];

export default function DividerExample() {
  const [activeTab, setActiveTab] = useState<string>('examples');

  return (
    <ComponentContentLayout
      zh='分割线'
      en='Divider'
      desc='LandDesign 的分割线组件，用于分隔内容区域。支持水平、垂直方向，以及实线、虚线等不同样式。'
      activeTab={activeTab}
      onTabChange={setActiveTab}
    >
      {activeTab === 'examples' && (
        <div className='flex flex-col gap-24'>
          {/* 分割线方向 */}
          <ComponentSectionLayout
            title='分割线方向'
            id='divider-direction'
            description='支持水平和垂直两种方向的分割线。'
          >
            <CodeOperationContainer className='whitespace-nowrap' style={{ flexDirection: 'column' }}>
              <Flex align='center' gap={8}>
                横向分割线：
                <Divider />
              </Flex>
              <Flex align='center' style={{ height: '100px' }}>
                纵向分割线：
                <Divider direction="column" lineLength="100%" className="flex-1" />
              </Flex>
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 分割线类型 */}
          <ComponentSectionLayout
            title='分割线类型'
            id='divider-type'
            description='支持实线和虚线两种类型，虚线可以自定义间距和长度。'
          >
            <CodeOperationContainer>
              <Flex gap={24} column justify='center'>
                <Divider />
                <Divider type="dashed" />
                <Divider type="dashed" dashedGap={10} dashedLength={20} />
              </Flex>
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 分割线间距 */}
          <ComponentSectionLayout
            title='分割线间距'
            id='divider-gap'
            description='通过 gap 属性设置分割线与周围内容的间距。'
          >
            <CodeOperationContainer>
              <Flex gap={24} column justify='center'>
                <Divider gap={10} />
                <Divider gap={20} />
                <Divider gap={30} />
              </Flex>
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 包含内容分割线 */}
          <ComponentSectionLayout
            title='包含内容分割线'
            id='divider-content'
            description='可以在分割线中间显示内容，支持左对齐、居中、右对齐。'
          >
            <CodeOperationContainer>
              <Flex gap={24} column justify='center'>
                <Divider content="content" />
                <Divider content="content" align="left" />
                <Divider content="content" align="right" />
              </Flex>
            </CodeOperationContainer>
          </ComponentSectionLayout>
        </div>
      )}

      {activeTab === 'props' && (
        <div className='flex flex-col gap-12'>
          <ComponentPropsTable props={dividerProps} />
        </div>
      )}
    </ComponentContentLayout>
  )
}
