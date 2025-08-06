import React, { useState, useMemo } from 'react'
import './index.scss';
import Select from '../Select';
import CalendarHeader from './CalendarHeader';
import WeekdaysRow from './WeekdaysRow';
import Button from '../Button';
import { DateInput, getYearRange, shouldShowYearSelector } from './utils/dateRange';
import { getMonthWeeks, CalendarWeek as WeekData } from './utils/calendarUtils';

interface CalendarWeekProps {
  language?: "zh" | "en";
  minDate?: DateInput;
  maxDate?: DateInput;
  onWeekChange?: (weekStart: Date, weekEnd: Date, year: number) => void;
  onWeekMouseOver?: (weekStart: Date, weekEnd: Date, year: number, mode: "week", e: React.MouseEvent) => void;
  onWeekMouseOut?: (weekStart: Date, weekEnd: Date, year: number, mode: "week", e: React.MouseEvent) => void;
  className?: string;
  style?: React.CSSProperties;
}

const CalendarWeek: React.FC<CalendarWeekProps> = ({
  language = "zh",
  minDate,
  maxDate,
  onWeekChange,
  onWeekMouseOver,
  onWeekMouseOut,
  className = '',
  style,
}) => {
  const [currentDate, setCurrentDate] = useState(new Date());

  const [selectedWeek, setSelectedWeek] = useState<number>(() => {
    const today = new Date();
    const monthWeeks = getMonthWeeks(today.getFullYear(), today.getMonth());

    // 找到包含今天的周
    let currentWeekIndex = 0;
    for (let i = 0; i < monthWeeks.length; i++) {
      if (monthWeeks[i].isCurrentWeek) {
        currentWeekIndex = i;
        break;
      }
    }

    const weekNumber = currentWeekIndex + 1;

    // 初始化时调用回调
    setTimeout(() => {
      const weekDates = monthWeeks[currentWeekIndex];
      onWeekChange?.(weekDates.weekStart, weekDates.weekEnd, today.getFullYear());
    }, 0);

    return weekNumber;
  });

  const year = currentDate.getFullYear();

  // 计算年份范围和是否显示选择器
  const { yearRange, shouldShowYearSelector: showYearSelector } = useMemo(() => {
    const yearRange = getYearRange(minDate, maxDate);
    const shouldShow = shouldShowYearSelector(minDate, maxDate);

    return {
      yearRange,
      shouldShowYearSelector: shouldShow
    };
  }, [minDate, maxDate]);

  const handlePrevMonth = () => {
    const newDate = new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1);
    setCurrentDate(newDate);

    // 检查新月份是否包含当前周
    const monthWeeks = getMonthWeeks(newDate.getFullYear(), newDate.getMonth());
    const today = new Date();
    let selectedWeekIndex = 0;

    for (let i = 0; i < monthWeeks.length; i++) {
      if (monthWeeks[i].isCurrentWeek) {
        selectedWeekIndex = i;
        break;
      }
    }

    setSelectedWeek(selectedWeekIndex + 1);

    // 调用回调
    const weekDates = monthWeeks[selectedWeekIndex];
    onWeekChange?.(weekDates.weekStart, weekDates.weekEnd, newDate.getFullYear());
  };

  const handleNextMonth = () => {
    const newDate = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1);
    setCurrentDate(newDate);

    // 检查新月份是否包含当前周
    const monthWeeks = getMonthWeeks(newDate.getFullYear(), newDate.getMonth());
    const today = new Date();
    let selectedWeekIndex = 0;

    for (let i = 0; i < monthWeeks.length; i++) {
      if (monthWeeks[i].isCurrentWeek) {
        selectedWeekIndex = i;
        break;
      }
    }

    setSelectedWeek(selectedWeekIndex + 1);

    // 调用回调
    const weekDates = monthWeeks[selectedWeekIndex];
    onWeekChange?.(weekDates.weekStart, weekDates.weekEnd, newDate.getFullYear());
  };

  const handleYearChange = (year: number) => {
    if (!isNaN(year)) {
      const newDate = new Date(year, currentDate.getMonth(), currentDate.getDate());
      setCurrentDate(newDate);

      // 检查新年份对应月份是否包含当前周
      const monthWeeks = getMonthWeeks(year, newDate.getMonth());
      const today = new Date();
      let selectedWeekIndex = 0;

      for (let i = 0; i < monthWeeks.length; i++) {
        if (monthWeeks[i].isCurrentWeek) {
          selectedWeekIndex = i;
          break;
        }
      }

      setSelectedWeek(selectedWeekIndex + 1);

      const weekDates = monthWeeks[selectedWeekIndex];
      onWeekChange?.(weekDates.weekStart, weekDates.weekEnd, year);
    }
  };

  const handleWeekSelect = (weekIndex: number) => {
    const weekNumber = weekIndex + 1;
    setSelectedWeek(weekNumber);
    const weekDates = monthWeeks[weekIndex];
    onWeekChange?.(weekDates.weekStart, weekDates.weekEnd, year);
  };

  // 返回当前周
  const handleBackToCurrentWeek = () => {
    const today = new Date();
    setCurrentDate(today);

    const monthWeeks = getMonthWeeks(today.getFullYear(), today.getMonth());
    let currentWeekIndex = 0;

    for (let i = 0; i < monthWeeks.length; i++) {
      if (monthWeeks[i].isCurrentWeek) {
        currentWeekIndex = i;
        break;
      }
    }

    setSelectedWeek(currentWeekIndex + 1);
    const weekDates = monthWeeks[currentWeekIndex];
    onWeekChange?.(weekDates.weekStart, weekDates.weekEnd, today.getFullYear());
  };

  const monthWeeks = getMonthWeeks(year, currentDate.getMonth(), selectedWeek, minDate, maxDate);
  const weekOptions = Array.from({ length: monthWeeks.length }, (_, i) => ({
    key: `${i + 1}`,
    label: `${language === "zh" ? "第" : "Week "}${i + 1}${language === "zh" ? "周" : ""}`,
  }));

  // 判断是否为当前周
  const isCurrentWeekInView = monthWeeks.some(week => week.isCurrentWeek);

  return (
    <div className={`land-calendar-week ${className}`} style={style}>
      <CalendarHeader
        language={language}
        currentYear={year}
        currentMonth={currentDate.getMonth()}
        viewMode="week"
        shouldShowYearSelector={showYearSelector}
        yearRange={yearRange}
        onMonthChange={(month) => {
          // 周视图中，月份变化对应月份的变化
          // 处理边界情况：从12月到1月，或从1月到12月
          const currentMonth = currentDate.getMonth();
          const monthDiff = month - currentMonth;

          if (monthDiff === 1 || monthDiff === -11) {
            // 下一月
            handleNextMonth();
          } else if (monthDiff === -1 || monthDiff === 11) {
            // 上一月
            handlePrevMonth();
          }
        }}
        onYearChange={handleYearChange}
      />

      <WeekdaysRow language={language} />

      <div className="land-calendar-week-days">
        {monthWeeks.map((weekData, weekIndex) => {
          return (
            <div
              key={weekIndex}
              className={`land-calendar-week-row ${weekData.isSelected ? "selected" : ""
                } ${weekData.isCurrentWeek ? "current" : ""
                } ${weekData.isDisabled ? "disabled" : ""}`}
              onClick={() => !weekData.isDisabled && handleWeekSelect(weekIndex)}
              onMouseOver={(e) => {
                if (!weekData.isDisabled) {
                  onWeekMouseOver?.(weekData.weekStart, weekData.weekEnd, year, "week", e);
                }
              }}
              onMouseOut={(e) => {
                if (!weekData.isDisabled) {
                  onWeekMouseOut?.(weekData.weekStart, weekData.weekEnd, year, "week", e);
                }
              }}
            >
              {weekData.dates.map((date, index) => (
                <div
                  key={index}
                  className={`land-calendar-item day ${date.toDateString() === new Date().toDateString() ? "current" : ""
                    } ${date.getMonth() !== currentDate.getMonth() ? "other-month" : ""
                    }`}
                >
                  <div className="day-number">{date.getDate()}</div>
                </div>
              ))}
            </div>
          );
        })}
      </div>

      {!isCurrentWeekInView && (
        <Button
          type="transparent"
          status='primary'
          block
          size='small'
          text={language === "zh" ? "返回今天" : "Today"}
          className="land-calendar-btn back"
          onClick={handleBackToCurrentWeek}
        />
      )}
    </div>
  );
};

export default CalendarWeek; 