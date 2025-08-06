import React, { useState } from 'react';
import Radio from '.';
import RadioGroup from '../RadioGroup';
import CodeOperationContainer from '../../example/components/CodeOperationContainer';
import ComponentContentLayout from '../../example/components/ComponentContentLayout';
import ComponentPropsTable from '../../example/components/ComponentPropsTable';
import ComponentSectionLayout from '../../example/components/ComponentSectionLayout';
import Flex from '../Flex';

export default function RadioExample() {
  const [activeTab, setActiveTab] = useState<string>('examples');
  const [checked1, setChecked1] = useState(false);
  const [checked2, setChecked2] = useState(false);
  const [checked3, setChecked3] = useState(false);
  const [checked4, setChecked4] = useState(false);
  const [checked, setChecked] = useState('');

  const radioProps = [
    {
      name: "label",
      type: "string",
      desc: "选项值",
    },
    {
      name: "tip",
      type: "Element",
      desc: "选项提示内容",
    },
    { name: "disabled", type: "boolean", desc: "是否禁用", default: "false" },
    {
      name: "animated",
      type: "boolean",
      desc: "是否启用动画效果",
      default: "true",
    },
    { name: "style", type: "CSSProperties", desc: "自定义样式" },
    { name: "className", type: "string", desc: "自定义类名" },
  ];
  const radioTypes = [
    {
      name: "RadioGroupProps",
      data: [
        { name: "data", type: "RadioItemType[]", desc: "数据" },
        { name: "checked", type: "string | number", desc: "当前选中项" },
        {
          name: "animated",
          type: "boolean",
          desc: "是否启用动画效果",
          default: "true",
        },
        {
          name: "onChange",
          type: "(value: string | number, item: RadioItemType, e: MouseEvent<HTMLDivElement>) => void",
          desc: "选择事件",
        },
      ],
    },
  ];

  const radioData = [
    { key: '1', label: '选项1' },
    { key: '2', label: '选项2' },
    { key: '3', label: '选项3' },
    { key: '4', label: '选项4' },
  ];

  return (
    <ComponentContentLayout
      zh='单选框'
      en='Radio'
      desc='LandDesign 的单选框组件，支持单选功能，提供动画效果和提示信息。'
      activeTab={activeTab}
      onTabChange={setActiveTab}
    >

      {/* 标签页内容 */}
      {activeTab === 'examples' && (
        <>
          {/* 基础用法 */}
          <ComponentSectionLayout
            title='基础用法'
            id='radio-normal'
            description='Radio 组件的基础用法，支持单选功能。'
          >
            <CodeOperationContainer>
              <Radio
                label="选项1"
                checked={checked1}
                onClick={() => setChecked1(!checked1)}
              />
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 包含提示 */}
          <ComponentSectionLayout
            title='包含提示'
            id='radio-tip'
            description='通过 tip 属性可以为单选框添加提示信息。'
          >
            <CodeOperationContainer>
              <Radio
                label="选项1"
                tip="提示内容"
                checked={checked2}
                onClick={() => setChecked2(!checked2)}
              />
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 禁用状态 */}
          <ComponentSectionLayout
            title='禁用状态'
            id='radio-disabled'
            description='通过 disabled 属性可以禁用单选框。'
          >
            <CodeOperationContainer>
              <Radio label="禁用状态" disabled />
              <Radio label="禁用且选中" disabled checked />
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 带动画效果 */}
          <ComponentSectionLayout
            title='带动画效果'
            id='radio-animation'
            description='通过 animated 属性可以控制选中时的动画效果。'
          >
            <CodeOperationContainer>
              <Radio
                label="带动画效果"
                animated
                checked={checked3}
                onClick={() => setChecked3(!checked3)}
              />
              <Radio
                label="无动画效果"
                animated={false}
                checked={checked4}
                onClick={() => setChecked4(!checked4)}
              />
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 组合使用 */}
          <ComponentSectionLayout
            title='组合使用'
            id='radio-group'
            description='通过 RadioGroup 组件可以更方便地管理多个单选框。'
          >
            <CodeOperationContainer>
              <RadioGroup
                checked={checked}
                onChange={v => setChecked(v)}
                data={radioData}
              />
            </CodeOperationContainer>
          </ComponentSectionLayout>
        </>
      )}

      {activeTab === 'props' && (
        <div className='flex flex-col gap-12'>
          <ComponentPropsTable props={radioProps} />
          {radioTypes.map(type => (
            <ComponentPropsTable props={type.data} />
          ))}
        </div>
      )}
    </ComponentContentLayout>
  );
}
