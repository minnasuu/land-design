import React, { useState } from 'react';
import Checkbox from '.';
import CheckboxGroup from '../CheckboxGroup';
import CodeOperationContainer from '../../example/components/CodeOperationContainer';
import ComponentContentLayout from '../../example/components/ComponentContentLayout';
import ComponentPropsTable from '../../example/components/ComponentPropsTable';
import ComponentSectionLayout from '../../example/components/ComponentSectionLayout';
import Flex from '../Flex';

export default function CheckboxExample() {
  const [activeTab, setActiveTab] = useState<string>('examples');
  const [checked1, setChecked1] = useState(false);
  const [checked2, setChecked2] = useState(false);
  const [checked3, setChecked3] = useState(false);
  const [groupChecked, setGroupChecked] = useState(['1', '2']);

  const handleGroupChange = (item: any) => {
    setGroupChecked(prev => {
      if (prev.includes(item.key)) {
        return prev.filter(key => key !== item.key);
      } else {
        return [...prev, item.key];
      }
    });
  };

  const checkboxProps = [
    { name: "label", type: "string", desc: "选项值" },
    { name: "tip", type: "Element", desc: "选项提示内容" },
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
  const checkboxTypes = [
    {
      name: "CheckboxGroupProps",
      data: [
        { name: "data", type: "CheckboxItemType[]", desc: "数据" },
        {
          name: "checked",
          type: "(number | string)[]",
          desc: "当前选择列表",
        },
        {
          name: "animated",
          type: "boolean",
          desc: "是否启用动画效果",
          default: "true",
        },
        {
          name: "onChange",
          type: "(item: CheckboxItemType) => void",
          desc: "选择事件",
        },
      ],
    },
  ];

  const checkboxData = [
    { key: '1', label: '选项1' },
    { key: '2', label: '选项2' },
    { key: '3', label: '选项3' },
    { key: '4', label: '选项4' },
  ];

  return (
    <ComponentContentLayout
      zh='复选框'
      en='Checkbox'
      desc='LandDesign 的复选框组件，支持多选功能，提供动画效果、半选状态和提示信息。'
      activeTab={activeTab}
      onTabChange={setActiveTab}
    >

      {/* 标签页内容 */}
      {activeTab === 'examples' && (
        <>
          {/* 基础用法 */}
          <ComponentSectionLayout
            title='基础用法'
            id='checkbox-normal'
            description='Checkbox 组件的基础用法，支持多选功能。'
          >
            <CodeOperationContainer>
              <Checkbox
                label="选项1"
                onCheckedChange={checked => setChecked1(checked)}
              />
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 提示内容 */}
          <ComponentSectionLayout
            title='提示内容'
            id='checkbox-tip'
            description='通过 tip 属性可以为复选框添加提示信息。'
          >
            <CodeOperationContainer>
              <Checkbox
                label="选项1"
                tip="提示内容"
              />
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 禁用状态 */}
          <ComponentSectionLayout
            title='禁用状态'
            id='checkbox-disabled'
            description='通过 disabled 属性可以禁用复选框。'
          >
            <CodeOperationContainer>
              <Checkbox label="禁用状态" disabled />
              <Checkbox label="禁用且选中" disabled checked />
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 带动画效果 */}
          <ComponentSectionLayout
            title='带动画效果'
            id='checkbox-animation'
            description='通过 animated 属性可以控制选中时的动画效果。'
          >
            <CodeOperationContainer>
              <Checkbox
                label="带动画效果"
                animated
                onCheckedChange={checked => setChecked2(checked)}
              />
              <Checkbox
                label="无动画效果"
                animated={false}
                onCheckedChange={checked => setChecked3(checked)}
              />
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 组合使用 */}
          <ComponentSectionLayout
            title='组合使用'
            id='checkbox-group'
            description='通过 CheckboxGroup 组件可以更方便地管理多个复选框。'
          >
            <CodeOperationContainer>
              <CheckboxGroup
                checked={groupChecked}
                onChange={handleGroupChange}
                data={checkboxData}
              />
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 半选状态 */}
          <ComponentSectionLayout
            title='半选状态'
            id='checkbox-indeterminate'
            description='通过 indeterminate 属性可以设置复选框的半选状态。'
          >
            <CodeOperationContainer>
              <Checkbox label="半选状态" indeterminate />
              <Checkbox label="选中状态" checked />
              <Checkbox label="未选中状态" />
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 不同样式 */}
          <ComponentSectionLayout
            title='不同样式'
            id='checkbox-styles'
            description='Checkbox 支持不同的样式变体。'
          >
            <CodeOperationContainer>
              <Checkbox
                label="默认样式"
                onCheckedChange={checked => setChecked1(checked)}
              />
              <Checkbox
                label="带提示样式"
                tip="这是一个提示"
              />
              <Checkbox
                label="禁用样式"
                disabled
              />
              <Checkbox
                label="半选样式"
                indeterminate
              />
            </CodeOperationContainer>
          </ComponentSectionLayout>
        </>
      )}

      {activeTab === 'props' && (
        <div className='flex flex-col gap-12'>
          <ComponentPropsTable props={checkboxProps} />
          {checkboxTypes.map(type => (
            <ComponentPropsTable props={type.data} />
          ))}
        </div>
      )}
    </ComponentContentLayout>
  );
}
