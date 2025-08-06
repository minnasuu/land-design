import React from 'react';
import Button from '../Button';
import Icon from '../Icon';
import Select from '../Select';

interface CalendarHeaderProps {
  language?: "zh" | "en";
  currentYear: number;
  currentMonth?: number;
  shouldShowYearSelector: boolean;
  yearRange: [number, number];
  monthPrevDisabled?: boolean;
  monthNextDisabled?: boolean;
  onMonthChange?: (month: number) => void;
  onYearChange?: (year: number) => void;
  customYearDisplay?: string;
  customYearOptions?: Array<{ key: string; label: string }>;
  rightContent?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
  viewMode?: "date" | "week" | "month" | "quarter" | "year";
}

const CalendarHeader: React.FC<CalendarHeaderProps> = ({
  language = "zh",
  currentYear,
  currentMonth,
  shouldShowYearSelector,
  yearRange,
  monthPrevDisabled = false,
  monthNextDisabled = false,
  onMonthChange,
  onYearChange,
  customYearDisplay,
  customYearOptions,
  rightContent,
  className = '',
  style,
  viewMode = "date",
}) => {
  // 生成年份选项数组
  const years = React.useMemo(() => {
    if (!shouldShowYearSelector) return [];

    if (customYearOptions) {
      return customYearOptions;
    }

    const [startYear, endYear] = yearRange;
    const yearCount = endYear - startYear + 1;

    return Array.from({ length: yearCount }, (_, index) => ({
      key: `${startYear + index}`,
      label: `${startYear + index}`,
    }));
  }, [shouldShowYearSelector, yearRange, customYearOptions]);

  const enMonth = React.useMemo(() => {
    return {
      1: { en: "January", zh: "一月" },
      2: { en: "February", zh: "二月" },
      3: { en: "March", zh: "三月" },
      4: { en: "April", zh: "四月" },
      5: { en: "May", zh: "五月" },
      6: { en: "June", zh: "六月" },
      7: { en: "July", zh: "七月" },
      8: { en: "August", zh: "八月" },
      9: { en: "September", zh: "九月" },
      10: { en: "October", zh: "十月" },
      11: { en: "November", zh: "十一月" },
      12: { en: "December", zh: "十二月" },
    };
  }, []);

  // 根据视图模式判断是否显示月份
  const shouldShowMonth = viewMode === "date" || viewMode === "week";

  // 根据视图模式判断是否显示年份导航按钮
  const shouldShowYearNav = viewMode === "date" || viewMode === "week" || viewMode === "month" || viewMode === "quarter" || viewMode === "year";

  // 根据视图模式判断是否显示月份导航按钮
  const shouldShowMonthNav = viewMode === "date" || viewMode === "week";

  return (
    <div className={`land-calendar-header ${className}`} style={style}>
      <div className="land-calendar-header-btn-group">
        {/* 年份导航按钮 - 只在需要年份导航的视图中显示 */}
        {shouldShowYearNav && (
          <Button
            type="text"
            size='small'
            icon={<Icon name="arrow-double" />}
            className="land-calendar-btn prev"
            disabled={monthPrevDisabled}
            onClick={() => onYearChange?.(currentYear - 1)}
          />
        )}
        {/* 月份导航按钮 - 只在日期和周视图中显示 */}
        {shouldShowMonthNav && (
          <Button
            type="text"
            size='small'
            icon={<Icon name="arrow" />}
            className="land-calendar-btn prev"
            disabled={monthPrevDisabled}
            onClick={() => onMonthChange?.(currentMonth !== undefined ? currentMonth - 1 : -1)}
          />
        )}
      </div>
      <div className="land-calendar-header-center">
        <div className="land-calendar-year">
          {shouldShowYearSelector ? (
            <Select
              type='transparent'
              selected={currentYear.toString()}
              data={years}
              onChange={(item) => onYearChange?.(Number(item.key))}
            />
          ) : (
            <div className='land-calendar-year-input'>
              {customYearDisplay || currentYear}
            </div>
          )}
        </div>
        {/* 月份显示 - 只在日期和周视图中显示 */}
        {shouldShowMonth && currentMonth !== undefined && (
          <>
            {language === "zh" ? enMonth[currentMonth + 1].zh : enMonth[currentMonth + 1].en}
          </>
        )}
      </div>
      {rightContent && (
        <div className="land-calendar-right-content">
          {rightContent}
        </div>
      )}
      <div className="land-calendar-header-btn-group">
        {/* 月份导航按钮 - 只在日期和周视图中显示 */}
        {shouldShowMonthNav && (
          <Button
            type="text"
            size='small'
            icon={<Icon name="arrow" />}
            className="land-calendar-btn next"
            disabled={monthNextDisabled}
            onClick={() => onMonthChange?.(currentMonth !== undefined ? currentMonth + 1 : 1)}
          />
        )}
        {/* 年份导航按钮 - 只在需要年份导航的视图中显示 */}
        {shouldShowYearNav && (
          <Button
            type="text"
            size='small'
            icon={<Icon name="arrow-double" />}
            className="land-calendar-btn next"
            disabled={monthNextDisabled}
            onClick={() => onYearChange?.(currentYear + 1)}
          />
        )}
      </div>
    </div>
  );
};

export default CalendarHeader; 