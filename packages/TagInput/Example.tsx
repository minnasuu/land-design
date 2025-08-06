import React, { useState } from 'react';
import TagInput from '.';
import CodeOperationContainer from '../../example/components/CodeOperationContainer';
import ComponentContentLayout from '../../example/components/ComponentContentLayout';
import ComponentPropsTable from '../../example/components/ComponentPropsTable';
import ComponentSectionLayout from '../../example/components/ComponentSectionLayout';

export default function TagInputExample() {
  const [activeTab, setActiveTab] = useState<string>('examples');
  const [tagData, setTagData] = useState<string[]>([]);

  const tagInputProps = [
    { name: "tagData", type: "string[]", desc: "标签数据" },
    {
      name: "placeholder",
      type: "string",
      desc: "输入框占位符",
      default: "按下回车以输入标签",
    },
    {
      name: "width",
      type: "number | string",
      desc: "输入框宽度",
      default: "100%",
    },
    { name: "maxLength", type: "number", desc: "最大标签数量", default: "5" },
    { name: "highlightStr", type: "string[]", desc: "高亮文字数组" },
    { name: "highlightStyle", type: "CSSProperties", desc: "高亮内容样式" },
    { name: "onChange", type: "(e:any) => void", desc: "标签数据变化事件" },
    { name: "disabled", type: "boolean", desc: "是否禁用", default: "false" },
    {
      name: "showClear",
      type: "boolean",
      desc: "是否显示清空按钮",
      default: "true",
    },
    { name: "onClear", type: "(e:any) => void", desc: "清空事件" },
    { name: "onFocus", type: "(e:any) => void", desc: "输入框聚焦事件" },
    { name: "onBlur", type: "(e:any) => void", desc: "输入框失去焦点事件" },
    { name: "onEnter", type: "(e:any) => void", desc: "输入框回车事件" },
    { name: "onDelete", type: "(e:any) => void", desc: "删除标签事件" },
    { name: "tagStyle", type: "CSSProperties", desc: "标签样式" },
    { name: "tagClassName", type: "string", desc: "标签类名" },
    { name: "style", type: "CSSProperties", desc: "输入框样式" },
    { name: "className", type: "string", desc: "输入框类名" },
  ];

  return (
    <ComponentContentLayout
      zh='标签输入框'
      en='TagInput'
      desc='LandDesign 的标签输入框组件，支持动态添加和删除标签，提供高亮显示、字数限制等功能。'
      activeTab={activeTab}
      onTabChange={setActiveTab}
    >

      {/* 标签页内容 */}
      {activeTab === 'examples' && (
        <>
          {/* 基础用法 */}
          <ComponentSectionLayout
            title='基础用法'
            id='tag-input-normal'
            description='TagInput 组件的基础用法，支持动态添加和删除标签。'
          >
            <CodeOperationContainer>
              <TagInput
                maxLength={20}
                width={240}
                tagData={tagData}
                onChange={(val) => setTagData(val)}
              />
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 高亮文字 */}
          <ComponentSectionLayout
            title='高亮文字'
            id='tag-input-highlight'
            description='通过 highlightStr 属性可以高亮显示指定的文字。'
          >
            <CodeOperationContainer>
              <TagInput
                highlightStr={['不好']}
                width={240}
                tagData={tagData}
                onChange={(val) => setTagData(val)}
              />
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 字数限制 */}
          <ComponentSectionLayout
            title='字数限制'
            id='tag-input-max-length'
            description='通过 maxLength 属性可以限制最大标签数量。'
          >
            <CodeOperationContainer>
              <TagInput
                maxLength={5}
                width={240}
                placeholder="最多添加5个标签"
                tagData={tagData}
                onChange={(val) => setTagData(val)}
              />
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 禁用状态 */}
          <ComponentSectionLayout
            title='禁用状态'
            id='tag-input-disabled'
            description='通过 disabled 属性可以禁用标签输入框。'
          >
            <CodeOperationContainer>
              <TagInput
                disabled
                width={240}
                tagData={['标签1', '标签2']}
              />
            </CodeOperationContainer>
          </ComponentSectionLayout>
        </>
      )}

      {activeTab === 'props' && (
        <div className='flex flex-col gap-12'>
          <ComponentPropsTable props={tagInputProps} />
        </div>
      )}
    </ComponentContentLayout>
  );
}
