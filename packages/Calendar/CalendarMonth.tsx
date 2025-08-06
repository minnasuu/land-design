import React, { useState, useMemo } from 'react'
import './index.scss';
import CalendarHeader from './CalendarHeader';
import Button from '../Button';
import { DateInput, getYearRange, shouldShowYearSelector, isMonthInRange } from './utils/dateRange';

interface CalendarMonthProps {
  language?: "zh" | "en";
  minDate?: DateInput;
  maxDate?: DateInput;
  onMonthChange?: (month: number, year: number) => void;
  onMonthMouseOver?: (month: number, year: number, mode: "month", e: React.MouseEvent) => void;
  onMonthMouseOut?: (month: number, year: number, mode: "month", e: React.MouseEvent) => void;
  className?: string;
  style?: React.CSSProperties;
}

const CalendarMonth: React.FC<CalendarMonthProps> = ({
  language = "zh",
  minDate,
  maxDate,
  onMonthChange,
  onMonthMouseOver,
  onMonthMouseOut,
  className = '',
  style,
}) => {
  const currentDate = new Date();
  const currentMonth = currentDate.getMonth();
  const currentYearValue = currentDate.getFullYear();

  const [currentYear, setCurrentYear] = useState(currentYearValue);
  const [selectedMonth, setSelectedMonth] = useState<number>(currentMonth);
  const [selectedYear, setSelectedYear] = useState<number>(currentYearValue);

  // 计算年份范围和是否显示选择器
  const { yearRange, shouldShowYearSelector: showYearSelector } = useMemo(() => {
    const yearRange = getYearRange(minDate, maxDate);
    const shouldShow = shouldShowYearSelector(minDate, maxDate);

    return {
      yearRange,
      shouldShowYearSelector: shouldShow
    };
  }, [minDate, maxDate]);

  const handlePrevYear = () => {
    const newYear = currentYear - 1;
    setCurrentYear(newYear);
  };

  const handleNextYear = () => {
    const newYear = currentYear + 1;
    setCurrentYear(newYear);
  };

  const handleYearChange = (year: number) => {
    if (!isNaN(year)) {
      setCurrentYear(year);
    }
  };

  const handleMonthSelect = (month: number) => {
    setSelectedMonth(month);
    setSelectedYear(currentYear);
    onMonthChange?.(month, currentYear);
  };

  // 返回当前月
  const handleBackToCurrentMonth = () => {
    setCurrentYear(currentYearValue);
    setSelectedMonth(currentMonth);
    setSelectedYear(currentYearValue);
    onMonthChange?.(currentMonth, currentYearValue);
  };

  const months = [
    { zh: "一月", en: "January", value: 0 },
    { zh: "二月", en: "February", value: 1 },
    { zh: "三月", en: "March", value: 2 },
    { zh: "四月", en: "April", value: 3 },
    { zh: "五月", en: "May", value: 4 },
    { zh: "六月", en: "June", value: 5 },
    { zh: "七月", en: "July", value: 6 },
    { zh: "八月", en: "August", value: 7 },
    { zh: "九月", en: "September", value: 8 },
    { zh: "十月", en: "October", value: 9 },
    { zh: "十一月", en: "November", value: 10 },
    { zh: "十二月", en: "December", value: 11 },
  ];

  const isCurrentMonth = (month: number) => {
    return currentYear === currentYearValue && month === currentMonth;
  };

  const isSelectedMonth = (month: number) => {
    return currentYear === selectedYear && month === selectedMonth;
  };

  // 判断是否为当前月
  const isCurrentMonthInView = currentYear === currentYearValue;

  return (
    <div className={`land-calendar-month ${className}`} style={style}>
      <CalendarHeader
        language={language}
        currentYear={currentYear}
        viewMode="month"
        shouldShowYearSelector={showYearSelector}
        yearRange={yearRange}
        onMonthChange={(month) => {
          // 月视图中，月份变化对应年份的变化
          if (month > 11) {
            handleNextYear();
          } else if (month < 0) {
            handlePrevYear();
          }
        }}
        onYearChange={handleYearChange}
      />

      <div className="land-calendar-months-grid">
        {months.map((month, index) => {
          const isInRange = isMonthInRange(currentYear, month.value, minDate, maxDate);
          return (
            <div
              key={index}
              className={`land-calendar-month-item ${isCurrentMonth(month.value) ? "current" : ""
                } ${isSelectedMonth(month.value) ? "selected" : ""
                } ${!isInRange ? "disabled" : ""}`}
              onClick={() => isInRange && handleMonthSelect(month.value)}
              onMouseOver={(e) => {
                if (isInRange) {
                  onMonthMouseOver?.(month.value, currentYear, "month", e);
                }
              }}
              onMouseOut={(e) => {
                if (isInRange) {
                  onMonthMouseOut?.(month.value, currentYear, "month", e);
                }
              }}
            >
              <div className="month-name">
                {language === "zh" ? month.zh : month.en}
              </div>
            </div>
          );
        })}
      </div>

      {!isCurrentMonthInView && (
        <Button
          type="transparent"
          status='primary'
          block
          size='small'
          text={language === "zh" ? "返回今天" : "Today"}
          className="land-calendar-btn back"
          onClick={handleBackToCurrentMonth}
        />
      )}
    </div>
  );
};

export default CalendarMonth; 