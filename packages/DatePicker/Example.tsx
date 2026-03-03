import { useState } from 'react';
import DatePicker from '.';
import CodeOperationContainer from '../../example/components/CodeOperationContainer';
import ComponentContentLayout from '../../example/components/ComponentContentLayout';
import ComponentPropsTable from '../../example/components/ComponentPropsTable';
import ComponentSectionLayout from '../../example/components/ComponentSectionLayout';

export default function DatePickerExample() {
  const [activeTab, setActiveTab] = useState<string>('examples');
  const [dateValue, setDateValue] = useState<Date | null>(null);
  const [weekValue, setWeekValue] = useState<Date | null>(null);
  const [monthValue, setMonthValue] = useState<Date | null>(null);
  const [quarterValue, setQuarterValue] = useState<Date | null>(null);
  const [yearValue, setYearValue] = useState<Date | null>(null);
  const [confirmValue, setConfirmValue] = useState<Date | null>(null);
  const [inputValue, setInputValue] = useState<Date | null>(null);
  const [autoWidthValue, setAutoWidthValue] = useState<Date | null>(null);

  const datePickerProps = [
    { name: 'value', type: 'Date | null', desc: '当前选中值（受控模式）' },
    { name: 'defaultValue', type: 'Date | null', desc: '默认选中值（非受控模式）' },
    { name: 'type', type: '"date" | "week" | "month" | "quarter" | "year"', default: '"date"', desc: '选择器类型' },
    { name: 'language', type: '"zh" | "en"', default: '"zh"', desc: '语言设置' },
    { name: 'size', type: '"small" | "default" | "large"', default: '"default"', desc: '尺寸' },
    { name: 'variant', type: '"outline" | "filled" | "borderless"', default: '"filled"', desc: '样式变体' },
    { name: 'placeholder', type: 'string', desc: '占位符文本' },
    { name: 'format', type: 'string | function', desc: '日期格式化' },
    { name: 'minDate', type: 'DateInput', desc: '最小可选日期' },
    { name: 'maxDate', type: 'DateInput', desc: '最大可选日期' },
    { name: 'disabledDate', type: '(date: Date) => boolean', desc: '禁用日期判断函数' },
    { name: 'allowClear', type: 'boolean', default: 'true', desc: '是否显示清除按钮' },
    { name: 'allowInput', type: 'boolean', default: 'false', desc: '是否允许直接输入（仅date类型）' },
    { name: 'showConfirm', type: 'boolean', default: 'false', desc: '是否显示确认按钮' },
    { name: 'showToday', type: 'boolean', default: 'false', desc: '是否显示今天按钮' },
    { name: 'showIcon', type: 'boolean', default: 'true', desc: '是否显示图标' },
    { name: 'disabled', type: 'boolean', default: 'false', desc: '是否禁用' },
    { name: 'readOnly', type: 'boolean', default: 'false', desc: '是否只读' },
    { name: 'open', type: 'boolean', desc: '下拉框是否打开（受控）' },
    { name: 'autoFocus', type: 'boolean', default: 'false', desc: '自动获取焦点' },
    { name: 'width', type: 'number | string', desc: '输入框宽度' },
    { name: 'autoWidth', type: 'boolean', default: 'false', desc: '宽度自适应内容' },
    { name: 'minWidth', type: 'number | string', default: '120', desc: 'autoWidth 模式下的最小宽度' },
    { name: 'onChange', type: '(value: Date | null, info?) => void', desc: '值变化回调' },
    { name: 'onOpenChange', type: '(open: boolean) => void', desc: '下拉框打开/关闭回调' },
    { name: 'onClear', type: '() => void', desc: '清除回调' },
    { name: 'onConfirm', type: '(value: Date | null) => void', desc: '确认回调' },
  ];

  return (
    <ComponentContentLayout
      zh='日期选择器'
      en='DatePicker'
      desc='LandDesign 的日期选择器组件，支持多种日期类型选择、直接输入、确认按钮等功能。'
      activeTab={activeTab}
      onTabChange={setActiveTab}
    >
      {activeTab === 'examples' && (
        <>
          {/* 基础用法 */}
          <ComponentSectionLayout
            title='基础用法'
            id='date-picker-basic'
            description='DatePicker 组件的基础用法，支持日期选择。'
          >
            <CodeOperationContainer>
              <DatePicker
                placeholder="请选择日期"
                value={dateValue}
                onChange={(value) => {
                  console.log('Date changed:', value);
                  setDateValue(value);
                }}
              />
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 尺寸 */}
          <ComponentSectionLayout
            title='尺寸'
            id='date-picker-size'
            description='通过 size 属性设置选择器尺寸。'
          >
            <CodeOperationContainer column>
              <DatePicker size="small" placeholder="小尺寸" />
              <DatePicker size="default" placeholder="默认尺寸" />
              <DatePicker size="large" placeholder="大尺寸" />
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 样式变体 */}
          <ComponentSectionLayout
            title='样式变体'
            id='date-picker-variant'
            description='通过 variant 属性设置不同的样式变体。'
          >
            <CodeOperationContainer column>
              <DatePicker variant="filled" placeholder="填充样式（默认）" />
              <DatePicker variant="outline" placeholder="边框样式" />
              <DatePicker variant="borderless" placeholder="无边框样式" />
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 选择器类型 */}
          <ComponentSectionLayout
            title='选择器类型'
            id='date-picker-type'
            description='DatePicker 支持多种选择器类型。'
          >
            <CodeOperationContainer column>
              <DatePicker
                type="date"
                placeholder="日期选择"
                value={dateValue}
                onChange={setDateValue}
              />
              <DatePicker
                type="week"
                placeholder="周选择"
                value={weekValue}
                onChange={setWeekValue}
              />
              <DatePicker
                type="month"
                placeholder="月份选择"
                value={monthValue}
                onChange={setMonthValue}
              />
              <DatePicker
                type="quarter"
                placeholder="季度选择"
                value={quarterValue}
                onChange={setQuarterValue}
              />
              <DatePicker
                type="year"
                placeholder="年份选择"
                value={yearValue}
                onChange={setYearValue}
              />
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 确认按钮 */}
          <ComponentSectionLayout
            title='确认按钮'
            id='date-picker-confirm'
            description='通过 showConfirm 属性启用确认按钮模式。'
          >
            <CodeOperationContainer>
              <DatePicker
                showConfirm
                placeholder="选择后需要点击确定"
                value={confirmValue}
                onChange={setConfirmValue}
                onConfirm={(value) => console.log('Confirmed:', value)}
              />
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 直接输入 */}
          <ComponentSectionLayout
            title='直接输入'
            id='date-picker-input'
            description='通过 allowInput 属性启用直接输入功能（仅date类型）。'
          >
            <ul className='flex flex-col gap-4 text-12 color-text-secondary mb-8'>
              <li>支持格式：YYYY-MM-DD、YYYY/MM/DD、YYYY年MM月DD日 等</li>
              <li>示例：2024-01-15、2024/01/15、2024年1月15日</li>
              <li>输入后按Enter或失焦时确认，输入无效时恢复原值</li>
            </ul>
            <CodeOperationContainer>
              <DatePicker
                allowInput
                placeholder="可直接输入日期"
                value={inputValue}
                onChange={setInputValue}
              />
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 今天按钮 */}
          <ComponentSectionLayout
            title='今天按钮'
            id='date-picker-today'
            description='通过 showToday 属性显示快速选择今天的按钮。'
          >
            <CodeOperationContainer>
              <DatePicker showToday placeholder="带今天按钮" />
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 日期范围限制 */}
          <ComponentSectionLayout
            title='日期范围限制'
            id='date-picker-range'
            description='通过 minDate 和 maxDate 属性限制可选择的日期范围。'
          >
            <CodeOperationContainer>
              <DatePicker
                minDate="2024-01-01"
                maxDate="2025-12-31"
                placeholder="2024-2025年范围"
              />
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 禁用和只读 */}
          <ComponentSectionLayout
            title='禁用和只读'
            id='date-picker-disabled'
            description='通过 disabled 和 readOnly 属性控制状态。'
          >
            <CodeOperationContainer column>
              <DatePicker disabled placeholder="禁用状态" />
              <DatePicker readOnly value={new Date()} placeholder="只读状态" />
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 语言设置 */}
          <ComponentSectionLayout
            title='语言设置'
            id='date-picker-language'
            description='通过 language 属性设置语言。'
          >
            <CodeOperationContainer column>
              <DatePicker language="zh" placeholder="中文（默认）" />
              <DatePicker language="en" placeholder="English" />
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 自定义宽度 */}
          <ComponentSectionLayout
            title='自定义宽度'
            id='date-picker-width'
            description='通过 width 属性设置选择器宽度。'
          >
            <CodeOperationContainer column>
              <DatePicker width={200} placeholder="200px" />
              <DatePicker width="100%" placeholder="100%" />
              <DatePicker width="50%" placeholder="50%" />
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 自适应宽度 */}
          <ComponentSectionLayout
            title='自适应宽度'
            id='date-picker-auto-width'
            description='通过 autoWidth 属性使选择器宽度根据选中值自适应。当 value 展示时，宽度会自动调整以适应内容。'
          >
            <CodeOperationContainer column>
              <div className="flex items-center gap-8">
                <span className="fs-12 color-gray-4">日期选择：</span>
                <DatePicker
                  autoWidth
                  placeholder="请选择日期"
                  value={autoWidthValue}
                  onChange={setAutoWidthValue}
                />
              </div>
              <div className="flex items-center gap-8">
                <span className="fs-12 color-gray-4">周选择：</span>
                <DatePicker
                  type="week"
                  autoWidth
                  placeholder="请选择周"
                />
              </div>
              <div className="flex items-center gap-8">
                <span className="fs-12 color-gray-4">月份选择：</span>
                <DatePicker
                  type="month"
                  autoWidth
                  placeholder="请选择月份"
                />
              </div>
              <div className="flex items-center gap-8">
                <span className="fs-12 color-gray-4">季度选择：</span>
                <DatePicker
                  type="quarter"
                  autoWidth
                  placeholder="请选择季度"
                />
              </div>
              <div className="flex items-center gap-8">
                <span className="fs-12 color-gray-4">年份选择：</span>
                <DatePicker
                  type="year"
                  autoWidth
                  placeholder="请选择年份"
                />
              </div>
              <div className="flex items-center gap-8">
                <span className="fs-12 color-gray-4">自定义最小宽度：</span>
                <DatePicker
                  autoWidth
                  minWidth={180}
                  placeholder="最小宽度180px"
                />
              </div>
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
