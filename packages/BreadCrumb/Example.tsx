import React, { useState } from 'react'
import BreadCrumb from ".";
import ComponentContentLayout from '../../example/components/ComponentContentLayout';
import ComponentSectionLayout from '../../example/components/ComponentSectionLayout';
import CodeOperationContainer from '../../example/components/CodeOperationContainer';
import ComponentPropsTable from '../../example/components/ComponentPropsTable';

// API 文档配置
const breadCrumbProps = [
  { name: 'data', type: 'BreadCrumbItemType[]', desc: '面包屑数据，包含所有面包屑项的配置信息' },
  { name: 'current', type: 'string', desc: '当前激活项的值' },
  { name: 'showMask', type: 'boolean', default: 'false', desc: '是否显示遮罩效果' },
  { name: 'hoverPreview', type: 'boolean', default: 'false', desc: '省略时hover显示全部内容' },
  { name: 'onChange', type: '(item: BreadCrumbItemType) => void', desc: '变化回调函数' },
  { name: 'style', type: 'CSSProperties', desc: '自定义样式' },
  { name: 'className', type: 'string', desc: '自定义类名' },
  { name: 'children', type: 'ReactNode', desc: '子元素' },
];

const breadCrumbTypes = [
  {
    name: "BreadCrumbItemProps",
    data: [
      { name: "key", type: "string", desc: "唯一标识" },
      { name: "label", type: "string", desc: "内容" },
      { name: "tip", type: "string", desc: "提示内容" },
      { name: "maxWidth", type: "string", desc: "最大宽度" },
    ],
  },
];

export default function BreadCrumbExample() {
  const [activeTab, setActiveTab] = useState<string>('examples');

  return (
    <ComponentContentLayout
      zh='面包屑'
      en='BreadCrumb'
      desc='LandDesign 的面包屑组件，用于显示页面层级导航。支持自定义样式、遮罩效果、悬停预览等功能。'
      activeTab={activeTab}
      onTabChange={setActiveTab}
    >
      {activeTab === 'examples' && (
        <div className='flex flex-col gap-24'>
          {/* 常规面包屑 */}
          <ComponentSectionLayout
            title='常规面包屑'
            id='breadCrumb-normal'
            description='BreadCrumb 组件的基础用法，显示页面层级导航。'
          >
            <CodeOperationContainer>
              <BreadCrumb
                data={[
                  { value: "1", label: '页面1' },
                  { value: "2", label: '页面页面页面页面1-1' },
                  { value: "3", label: '页面页面页面页面1-1-2' },
                ]}
                current="3"
              />
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 滚动蒙层 */}
          <ComponentSectionLayout
            title='滚动蒙层'
            id='breadCrumb-mask'
            description='通过 showMask 属性可以显示遮罩效果，提升视觉层次。'
          >
            <CodeOperationContainer>
              <BreadCrumb
                data={[
                  { value: "1", label: '页面1' },
                  { value: "2", label: '页面页面页面页面1-1' },
                  { value: "3", label: '页面页面页面页面1-1-2' },
                ]}
                current="3"
                showMask
                className='w-[320px]'
              />
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 设置省略项的最大宽度 */}
          <ComponentSectionLayout
            title='设置省略项的最大宽度'
            id='breadCrumb-maxWidth'
            description='通过 maxWidth 属性可以设置面包屑项的最大宽度。'
          >
            <CodeOperationContainer>
              <BreadCrumb
                data={[
                  { value: "1", label: '页面1' },
                  { value: "2", label: '页面页面页面页面1-1' },
                  { value: "3", label: '页面页面页面页面1-1-2', maxWidth: 100 },
                ]}
                current="3"
              />
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* hover 显示全部内容 */}
          <ComponentSectionLayout
            title='hover 显示全部内容'
            id='breadCrumb-hover'
            description='当内容过长时，可以通过 hoverPreview 属性在悬停时显示完整内容。'
          >
            <CodeOperationContainer>
              <BreadCrumb
                data={[
                  { value: "1", label: '页面1' },
                  { value: "2", label: '页面页面页面页面1-1' },
                  { value: "3", label: '页面页面页面页面1-1-2', maxWidth: 100 },
                ]}
                current="3"
                hoverPreview
              />
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 设置选项提示内容 */}
          <ComponentSectionLayout
            title='设置选项提示内容'
            id='breadCrumb-tip'
            description='可以通过 tip 属性为面包屑项添加提示内容。'
          >
            <CodeOperationContainer>
              <BreadCrumb
                data={[
                  { value: "1", label: '页面1', tip: '页面1的提示内容' },
                  { value: "2", label: '页面页面页面页面1-1', tip: '页面页面页面页面1-1的提示内容' },
                  { value: "3", label: '页面页面页面页面1-1-2', tip: '页面页面页面页面1-1-2的提示内容' },
                ]}
                current="3"
              />
            </CodeOperationContainer>
          </ComponentSectionLayout>
        </div>
      )}

      {activeTab === 'props' && (
        <div className='flex flex-col gap-12'>
          <ComponentPropsTable props={breadCrumbProps} />
          {breadCrumbTypes?.map(i => <div key={i.name} className='flex flex-col gap-12' id={`${i.name}-API`}>
            <h3 className='text-sm font-bold'>{i.name}</h3>
            <ComponentPropsTable props={i.data} />
          </div>)}
        </div>
      )}
    </ComponentContentLayout>
  )
}
