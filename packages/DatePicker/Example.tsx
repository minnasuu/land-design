import React, { useState } from 'react';
import DatePicker from '.';
import CodeOperationContainer from '../../example/components/CodeOperationContainer';
import ComponentContentLayout from '../../example/components/ComponentContentLayout';
import ComponentPropsTable from '../../example/components/ComponentPropsTable';
import ComponentSectionLayout from '../../example/components/ComponentSectionLayout';

export default function DatePickerExample() {
  const [activeTab, setActiveTab] = useState<string>('examples');
  const [dateValue, setDateValue] = useState<Date | null>(null);
  const [monthValue, setMonthValue] = useState<Date | null>(null);
  const [yearValue, setYearValue] = useState<Date | null>(null);
  const [weekValue, setWeekValue] = useState<Date | null>(null);
  const [quarterValue, setQuarterValue] = useState<Date | null>(null);
  const [confirmDateValue, setConfirmDateValue] = useState<Date | null>(null);
  const [inputDateValue, setInputDateValue] = useState<Date | null>(null);

  const handleDateChange = (value: Date | null) => {
    console.log('Date changed:', value);
    setDateValue(value);
  };

  const handleConfirmDateChange = (value: Date | null) => {
    console.log('Confirm date changed:', value);
    setConfirmDateValue(value);
  };

  const handleInputDateChange = (value: Date | null) => {
    console.log('Input date changed:', value);
    setInputDateValue(value);
  };

  const datePickerProps = [
    { name: 'value', type: 'Date | string | null', desc: '当前值' },
    { name: 'pickerType', type: 'PickerType', default: 'date', desc: '选择器类型：date | week | month | quarter | year' },
    { name: 'placeholder', type: 'string', desc: '占位符文本' },
    { name: 'clearable', type: 'boolean', default: 'false', desc: '是否可清除' },
    { name: 'showConfirmButton', type: 'boolean', default: 'false', desc: '是否显示确定按钮' },
    { name: 'allowInput', type: 'boolean', default: 'false', desc: '是否支持直接输入' },
    { name: 'disabled', type: 'boolean', default: 'false', desc: '是否禁用' },
    { name: 'onChange', type: '(value: Date | null) => void', desc: '变化事件' },
  ];

  return (
    <ComponentContentLayout
      zh='日期选择器'
      en='DatePicker'
      desc='LandDesign 的日期选择器组件，支持多种日期类型选择、直接输入、确认按钮等功能。'
      activeTab={activeTab}
      onTabChange={setActiveTab}
    >

      {/* 标签页内容 */}
      {activeTab === 'examples' && (
        <>
          {/* 基础用法 */}
          <ComponentSectionLayout
            title='基础用法'
            id='date-picker-normal'
            description='DatePicker 组件的基础用法，支持日期选择。'
          >
            <CodeOperationContainer>
              <DatePicker
                placeholder="点击日历后直接确认"
                value={dateValue}
                onChange={handleDateChange}
              />
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 不同类型选择器 */}
          <ComponentSectionLayout
            title='不同类型选择器'
            id='date-picker-type'
            description='DatePicker 支持多种不同的选择器类型。'
          >
            <CodeOperationContainer column>
              <DatePicker
                pickerType="year"
                placeholder="请选择年份"
                value={yearValue}
                onChange={setYearValue}
              />
              <DatePicker
                pickerType="month"
                placeholder="请选择月份"
                value={monthValue}
                onChange={setMonthValue}
              />
              <DatePicker
                pickerType="quarter"
                placeholder="请选择季度"
                value={quarterValue}
                onChange={setQuarterValue}
              />
              <DatePicker
                pickerType="week"
                placeholder="请选择周"
                value={weekValue}
                onChange={setWeekValue}
              />
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 需要确定按钮 */}
          <ComponentSectionLayout
            title='需要确定按钮'
            id='date-picker-confirm'
            description='通过 showConfirmButton 属性可以启用确定按钮模式。'
          >
            <CodeOperationContainer>
              <DatePicker
                showConfirmButton={true}
                placeholder="选择后需要点击确定"
                value={confirmDateValue}
                onChange={handleConfirmDateChange}
              />
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 支持直接输入 */}
          <ComponentSectionLayout
            title='支持直接输入'
            id='date-picker-input'
            description='通过 allowInput 属性可以启用直接输入功能（仅date模式）。'
          >
            <ul className='flex flex-col gap-4 text-12 color-text-secondary mb-8'>
              <li>
                支持格式：YYYY-MM-DD、YYYY/MM/DD、YYYY年MM月DD日、MM月DD日等
              </li>
              <li>
                示例：2024-01-15、2024/01/15、2024年1月15日、1月15日
              </li>
              <li>
                输入后按Enter或失焦时确认，输入无效时恢复原值
              </li>
            </ul>
            <CodeOperationContainer>
              <DatePicker
                allowInput={true}
                value={inputDateValue}
                onChange={handleInputDateChange}
              />
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 禁用状态 */}
          <ComponentSectionLayout
            title='禁用状态'
            id='date-picker-disabled'
            description='通过 disabled 属性可以禁用日期选择器。'
          >
            <CodeOperationContainer>
              <DatePicker disabled placeholder="禁用-日期选择" />
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 可清除 */}
          <ComponentSectionLayout
            title='可清除'
            id='date-picker-clearable'
            description='通过 clearable 属性可以启用清除功能。'
          >
            <CodeOperationContainer>
              <DatePicker
                clearable
                placeholder="可清除的日期选择器"
                value={dateValue}
                onChange={handleDateChange}
              />
            </CodeOperationContainer>
          </ComponentSectionLayout>
        </>
      )}

      {activeTab === 'props' && (
        <div className='flex flex-col gap-12'>
          <ComponentPropsTable props={datePickerProps} />
        </div>
      )}
    </ComponentContentLayout>
  );
}
