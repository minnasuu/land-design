import { useState } from 'react';
import Calendar from ".";
import CodeOperationContainer from '../../example/components/CodeOperationContainer';
import ComponentContentLayout from '../../example/components/ComponentContentLayout';
import ComponentPropsTable from '../../example/components/ComponentPropsTable';
import ComponentSectionLayout from '../../example/components/ComponentSectionLayout';

export default function CalendarExample() {
  const [activeTab, setActiveTab] = useState<string>('examples');
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [selectedWeek, setSelectedWeek] = useState<Date | null>(null);
  const [selectedMonth, setSelectedMonth] = useState<Date | null>(null);
  const [selectedQuarter, setSelectedQuarter] = useState<Date | null>(null);
  const [selectedYear, setSelectedYear] = useState<Date | null>(null);

  // 格式化显示
  const formatDate = (date: Date | null): string => {
    if (!date) return '未选择';
    return `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')}`;
  };

  const formatWeek = (date: Date | null): string => {
    if (!date) return '未选择';
    const year = date.getFullYear();
    const startOfYear = new Date(year, 0, 1);
    const days = Math.floor((date.getTime() - startOfYear.getTime()) / (24 * 60 * 60 * 1000));
    const weekNumber = Math.ceil((days + startOfYear.getDay() + 1) / 7);
    return `${year}年第${weekNumber}周`;
  };

  const formatMonth = (date: Date | null): string => {
    if (!date) return '未选择';
    return `${date.getFullYear()}年${date.getMonth() + 1}月`;
  };

  const formatQuarter = (date: Date | null): string => {
    if (!date) return '未选择';
    const quarter = Math.floor(date.getMonth() / 3) + 1;
    return `${date.getFullYear()}年第${quarter}季度`;
  };

  const formatYear = (date: Date | null): string => {
    if (!date) return '未选择';
    return `${date.getFullYear()}年`;
  };

  const calendarProps = [
    { name: 'value', type: 'Date | null', desc: '当前选中值（受控模式）' },
    { name: 'defaultValue', type: 'Date | null', desc: '默认选中值（非受控模式）' },
    { name: 'mode', type: '"date" | "week" | "month" | "quarter" | "year"', default: '"date"', desc: '视图模式' },
    { name: 'language', type: '"zh" | "en"', default: '"zh"', desc: '语言设置' },
    { name: 'size', type: '"small" | "default" | "large"', default: '"default"', desc: '尺寸' },
    { name: 'minDate', type: 'DateInput', desc: '最小可选日期' },
    { name: 'maxDate', type: 'DateInput', desc: '最大可选日期' },
    { name: 'disabledDate', type: '(date: Date) => boolean', desc: '禁用日期判断函数' },
    { name: 'weekStartDay', type: '0 | 1 | 2 | 3 | 4 | 5 | 6', default: '0', desc: '星期起始日（0=周日）' },
    { name: 'showHolidays', type: 'boolean', default: 'false', desc: '是否显示节假日标记' },
    { name: 'showWeekNumber', type: 'boolean', default: 'false', desc: '是否显示周数' },
    { name: 'showTodayButton', type: 'boolean', default: 'true', desc: '是否显示返回今天按钮' },
    { name: 'showOtherMonthDays', type: 'boolean', default: 'true', desc: '是否显示其他月份日期' },
    { name: 'allowOtherMonthSelect', type: 'boolean', default: 'true', desc: '是否允许点击其他月份日期' },
    { name: 'headerRender', type: '(props) => ReactNode', desc: '自定义头部内容' },
    { name: 'dateRender', type: '(date: DateInfo) => ReactNode', desc: '自定义日期单元格内容' },
    { name: 'onChange', type: '(value: Date, info) => void', desc: '值变化回调' },
    { name: 'onDateSelect', type: '(date: Date, info) => void', desc: '日期选择回调（date模式）' },
    { name: 'onWeekSelect', type: '(weekStart: Date, info) => void', desc: '周选择回调（week模式）' },
    { name: 'onMonthSelect', type: '(month, year, info) => void', desc: '月份选择回调（month模式）' },
    { name: 'onQuarterSelect', type: '(quarter, year, info) => void', desc: '季度选择回调（quarter模式）' },
    { name: 'onYearSelect', type: '(year, info) => void', desc: '年份选择回调（year模式）' },
    { name: 'onPanelChange', type: '(date: Date, mode) => void', desc: '面板变化回调' },
  ];

  return (
    <ComponentContentLayout
      zh='日历'
      en='Calendar'
      desc='LandDesign 的日历组件，支持多种视图模式、语言设置、日期范围限制等功能。'
      activeTab={activeTab}
      onTabChange={setActiveTab}
    >
      {activeTab === 'examples' && (
        <>
          {/* 基础用法 */}
          <ComponentSectionLayout
            title='基础用法'
            id='calendar-basic'
            description='Calendar 组件的基础用法，默认显示日期视图。支持受控和非受控两种模式。'
          >
            <div className="fs-12 color-gray-4 mb-8">
              当前选择: {formatDate(selectedDate)}
            </div>
            <CodeOperationContainer>
              <Calendar
                mode="date"
                value={selectedDate}
                onChange={(date) => setSelectedDate(date)}
              />
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 尺寸 */}
          <ComponentSectionLayout
            title='尺寸'
            id='calendar-size'
            description='通过 size 属性设置日历尺寸。'
          >
            <CodeOperationContainer column>
              <div>
                <div className="fs-12 color-gray-4 mb-8">小尺寸 (small)</div>
                <Calendar size="small" mode="date" />
              </div>
              <div>
                <div className="fs-12 color-gray-4 mb-8">默认尺寸 (default)</div>
                <Calendar size="default" mode="date" />
              </div>
              <div>
                <div className="fs-12 color-gray-4 mb-8">大尺寸 (large)</div>
                <Calendar size="large" mode="date" />
              </div>
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 视图模式 */}
          <ComponentSectionLayout
            title='视图模式'
            id='calendar-mode'
            description='Calendar 支持多种视图模式：日期、周、月、季度、年。'
          >
            <CodeOperationContainer column>
              <div>
                <div className="fs-12 color-gray-4 mb-8">周视图 - 当前选择: {formatWeek(selectedWeek)}</div>
                <Calendar
                  mode="week"
                  value={selectedWeek}
                  onChange={(date) => setSelectedWeek(date)}
                />
              </div>
              <div>
                <div className="fs-12 color-gray-4 mb-8">月视图 - 当前选择: {formatMonth(selectedMonth)}</div>
                <Calendar
                  mode="month"
                  value={selectedMonth}
                  onChange={(date) => setSelectedMonth(date)}
                />
              </div>
              <div>
                <div className="fs-12 color-gray-4 mb-8">季度视图 - 当前选择: {formatQuarter(selectedQuarter)}</div>
                <Calendar
                  mode="quarter"
                  value={selectedQuarter}
                  onChange={(date) => setSelectedQuarter(date)}
                />
              </div>
              <div>
                <div className="fs-12 color-gray-4 mb-8">年视图 - 当前选择: {formatYear(selectedYear)}</div>
                <Calendar
                  mode="year"
                  value={selectedYear}
                  onChange={(date) => setSelectedYear(date)}
                />
              </div>
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 语言设置 */}
          <ComponentSectionLayout
            title='语言设置'
            id='calendar-language'
            description='通过 language 属性设置日历的语言。'
          >
            <CodeOperationContainer column>
              <div>
                <div className="fs-12 color-gray-4 mb-8">中文（默认）</div>
                <Calendar mode="date" language="zh" />
              </div>
              <div>
                <div className="fs-12 color-gray-4 mb-8">英文</div>
                <Calendar mode="date" language="en" />
              </div>
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 日期范围限制 */}
          <ComponentSectionLayout
            title='日期范围限制'
            id='calendar-range'
            description='通过 minDate 和 maxDate 属性限制可选择的日期范围。'
          >
            <CodeOperationContainer column>
              <div>
                <div className="fs-12 color-gray-4 mb-8">限制范围：2024年1月1日 - 2025年12月31日</div>
                <Calendar
                  mode="date"
                  minDate="2024-01-01"
                  maxDate="2025-12-31"
                />
              </div>
              <div>
                <div className="fs-12 color-gray-4 mb-8">仅限今年</div>
                <Calendar
                  mode="date"
                  minDate={new Date(new Date().getFullYear(), 0, 1)}
                  maxDate={new Date(new Date().getFullYear(), 11, 31)}
                />
              </div>
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 其他月份日期点击 */}
          <ComponentSectionLayout
            title='其他月份日期点击'
            id='calendar-other-month'
            description='点击其他月份的日期可以自动跳转到对应月份并选中。通过 allowOtherMonthSelect 控制。'
          >
            <CodeOperationContainer column>
              <div>
                <div className="fs-12 color-gray-4 mb-8">允许点击其他月份（默认）</div>
                <Calendar mode="date" allowOtherMonthSelect={true} />
              </div>
              <div>
                <div className="fs-12 color-gray-4 mb-8">禁止点击其他月份</div>
                <Calendar mode="date" allowOtherMonthSelect={false} />
              </div>
              <div>
                <div className="fs-12 color-gray-4 mb-8">隐藏其他月份日期</div>
                <Calendar mode="date" showOtherMonthDays={false} />
              </div>
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 隐藏返回今天按钮 */}
          <ComponentSectionLayout
            title='隐藏返回今天按钮'
            id='calendar-today-button'
            description='通过 showTodayButton 属性控制是否显示返回今天按钮。'
          >
            <CodeOperationContainer>
              <Calendar mode="date" showTodayButton={false} />
            </CodeOperationContainer>
          </ComponentSectionLayout>
        </>
      )}

      {activeTab === 'props' && (
        <div className='flex flex-col gap-12'>
          <ComponentPropsTable props={calendarProps} />
        </div>
      )}
    </ComponentContentLayout>
  );
}
