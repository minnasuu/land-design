import React, { useState } from 'react';
import Calendar from ".";
import CodeOperationContainer from '../../example/components/CodeOperationContainer';
import ComponentContentLayout from '../../example/components/ComponentContentLayout';
import ComponentPropsTable from '../../example/components/ComponentPropsTable';
import ComponentSectionLayout from '../../example/components/ComponentSectionLayout';

export default function CalendarExample() {
  const [activeTab, setActiveTab] = useState<string>('examples');
  const [selectedDate, setSelectedDate] = useState<string>('');
  const [selectedWeek, setSelectedWeek] = useState<string>('');
  const [selectedMonth, setSelectedMonth] = useState<string>('');
  const [selectedQuarter, setSelectedQuarter] = useState<string>('');
  const [selectedYear, setSelectedYear] = useState<string>('');

  // 事件处理函数
  const handleDayChange = (day: number, month: number, year: number) => {
    const dateStr = `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;
    setSelectedDate(dateStr);
    console.log('选择的日期:', { day, month, year });
  };

  const handleWeekChange = (weekStart: Date, weekEnd: Date, year: number) => {
    const weekStr = `${weekStart.toLocaleDateString()} - ${weekEnd.toLocaleDateString()}`;
    setSelectedWeek(weekStr);
    console.log('选择的周:', { weekStart, weekEnd, year });
  };

  const handleMonthChange = (month: number, year: number) => {
    const monthStr = `${year}-${month.toString().padStart(2, '0')}`;
    setSelectedMonth(monthStr);
    console.log('选择的月份:', { month, year });
  };

  const handleQuarterChange = (quarter: number, year: number) => {
    const quarterStr = `${year}年第${quarter}季度`;
    setSelectedQuarter(quarterStr);
    console.log('选择的季度:', { quarter, year });
  };

  const handleYearChange = (year: number) => {
    setSelectedYear(year.toString());
    console.log('选择的年份:', { year });
  };

  const calendarProps = [
    { name: 'viewMode', type: 'CalendarViewMode (date | week | month | quarter | year)', desc: '视图模式', default: 'date' },
    { name: 'language', type: 'CalendarLanguage (zh | en)', desc: '语言设置', default: 'zh' },
    { name: 'minDate', type: 'DateInput', desc: '最小日期' },
    { name: 'maxDate', type: 'DateInput', desc: '最大日期' },
    { name: 'onDayChange', type: '(day: number, month: number, year: number) => void', desc: '日期选择事件' },
    { name: 'onWeekChange', type: '(weekStart: Date, weekEnd: Date, year: number) => void', desc: '周选择事件' },
    { name: 'onMonthChange', type: '(month: number, year: number) => void', desc: '月选择事件' },
    { name: 'onQuarterChange', type: '(quarter: number, year: number) => void', desc: '季度选择事件' },
    { name: 'onYearChange', type: '(year: number) => void', desc: '年选择事件' },
  ];

  return (
    <ComponentContentLayout
      zh='日历'
      en='Calendar'
      desc='LandDesign 的日历组件，支持多种视图模式、语言设置、日期范围限制等功能。'
      activeTab={activeTab}
      onTabChange={setActiveTab}
    >

      {/* 标签页内容 */}
      {activeTab === 'examples' && (
        <>
          {/* 基础用法 */}
          <ComponentSectionLayout
            title='基础用法'
            id='calendar-normal'
            description='Calendar 组件的基础用法，默认显示日期视图。'
          >
            <div className="fs-12 color-gray-4 mb-8">
              当前选择: {selectedDate || '未选择'}
            </div>
            <CodeOperationContainer>
              <Calendar
                viewMode="date"
                onDayChange={handleDayChange}
              />
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 视图模式 */}
          <ComponentSectionLayout
            title='视图模式'
            id='calendar-view-mode'
            description='Calendar 支持多种不同的视图模式。'
          >
            <CodeOperationContainer column>
              <div>
                <div className="fs-12 color-gray-4 mb-8">
                  当前选择: {selectedWeek || '未选择'}
                </div>
                <Calendar
                  viewMode="week"
                  onWeekChange={handleWeekChange}
                />
              </div>
              <div>
                <div className="fs-12 color-gray-4 mb-8">
                  当前选择: {selectedMonth || '未选择'}
                </div>
                <Calendar
                  viewMode="month"
                  onMonthChange={handleMonthChange}
                />
              </div>
              <div>
                <div className="fs-12 color-gray-4 mb-8">
                  当前选择: {selectedQuarter || '未选择'}
                </div>
                <Calendar
                  viewMode="quarter"
                  onQuarterChange={handleQuarterChange}
                />
              </div>
              <div>
                <div className="fs-12 color-gray-4 mb-8">
                  当前选择: {selectedYear || '未选择'}
                </div>
                <Calendar
                  viewMode="year"
                  onYearChange={handleYearChange}
                />
              </div>
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 语言设置 */}
          <ComponentSectionLayout
            title='语言设置'
            id='calendar-language'
            description='通过 language 属性可以设置日历的语言。'
          >
            <CodeOperationContainer column>
              <div>
                <div className="fs-12 color-gray-4 mb-8">中文（默认）</div>
                <Calendar
                  viewMode="date"
                  language="zh"
                  onDayChange={handleDayChange}
                />
              </div>
              <div>
                <div className="fs-12 color-gray-4 mb-8">英文</div>
                <Calendar
                  viewMode="date"
                  language="en"
                  onDayChange={handleDayChange}
                />
              </div>
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 日期范围设置 */}
          <ComponentSectionLayout
            title='日期范围设置'
            id='calendar-date-range'
            description='通过 minDate 和 maxDate 属性可以限制可选择的日期范围。'
          >
            <CodeOperationContainer column>
              <div>
                <div className="fs-12 color-gray-4 mb-8">
                  限制选择范围：2020年1月1日 - 2025年12月31日
                </div>
                <Calendar
                  viewMode="date"
                  minDate="2020-01-01"
                  maxDate="2025-12-31"
                  onDayChange={handleDayChange}
                />
              </div>
              <div>
                <div className="fs-12 color-gray-4 mb-8">
                  从2020年1月1日开始
                </div>
                <Calendar
                  viewMode="date"
                  minDate="2020-01-01"
                  onDayChange={handleDayChange}
                />
              </div>
              <div>
                <div className="fs-12 color-gray-4 mb-8">
                  到2030年12月31日结束
                </div>
                <Calendar
                  viewMode="date"
                  maxDate="2030-12-31"
                  onDayChange={handleDayChange}
                />
              </div>
              <div>
                <div className="fs-12 color-gray-4 mb-8">
                  固定在2024年1月1日，不显示年份选择器
                </div>
                <Calendar
                  viewMode="date"
                  minDate="2024-01-01"
                  maxDate="2024-01-01"
                  onDayChange={handleDayChange}
                />
              </div>
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 英文版本示例 */}
          <ComponentSectionLayout
            title='英文版本示例'
            id='calendar-language-en'
            description='Calendar 的英文版本示例。'
          >
            <CodeOperationContainer column>
              <div>
                <div className="fs-12 color-gray-4 mb-8">英文周视图</div>
                <Calendar
                  viewMode="week"
                  language="en"
                  onWeekChange={handleWeekChange}
                />
              </div>
              <div>
                <div className="fs-12 color-gray-4 mb-8">英文月视图</div>
                <Calendar
                  viewMode="month"
                  language="en"
                  onMonthChange={handleMonthChange}
                />
              </div>
              <div>
                <div className="fs-12 color-gray-4 mb-8">英文季度视图</div>
                <Calendar
                  viewMode="quarter"
                  language="en"
                  onQuarterChange={handleQuarterChange}
                />
              </div>
              <div>
                <div className="fs-12 color-gray-4 mb-8">英文年视图</div>
                <Calendar
                  viewMode="year"
                  language="en"
                  onYearChange={handleYearChange}
                />
              </div>
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
