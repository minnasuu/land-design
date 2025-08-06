import React, { useEffect, useMemo, useState } from 'react'
import './index.scss';
import CalendarHeader from './CalendarHeader';
import WeekdaysRow from './WeekdaysRow';
import CalendarCell from './CalendarCell';
import Button from '../Button';
import { DateInput, getYearRange, shouldShowYearSelector } from './utils/dateRange';
import { getMonthDaysGrid, getHolidays, CalendarDay } from './utils/calendarUtils';

interface CalendarDateProps {
  language?: "zh" | "en";
  minDate?: DateInput;
  maxDate?: DateInput;
  onDayChange?: (day: number, month: number, year: number) => void;
  onDayMouseOver?: (day: number, month: number, year: number, mode: "date", e: React.MouseEvent) => void;
  onDayMouseOut?: (day: number, month: number, year: number, mode: "date", e: React.MouseEvent) => void;
  onDayMouseEnter?: (day: number, month: number, year: number, mode: "date", e: React.MouseEvent) => void;
  onDayMouseLeave?: (day: number, month: number, year: number, mode: "date", e: React.MouseEvent) => void;
  className?: string;
  style?: React.CSSProperties;
}

const CalendarDate: React.FC<CalendarDateProps> = ({
  language = "zh",
  minDate,
  maxDate,
  onDayChange,
  onDayMouseOver,
  onDayMouseOut,
  onDayMouseEnter,
  onDayMouseLeave,
  className = '',
  style,
}) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selected, setSelected] = useState<number | undefined>(new Date().getDate());
  const [inputYear, setInputYear] = useState<number>(new Date().getFullYear());
  const [holidays, setHolidays] = useState<Array<{ date: string, zhName: string, enName: string }>>([]);

  const curDay = new Date().getDate();
  const curMonth = new Date().getMonth();
  const curYear = new Date().getFullYear();
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();

  // 获取节假日
  useEffect(() => {
    getHolidays(year, language).then(setHolidays);
  }, [year, language]);

  // 计算年份范围和是否显示选择器
  const { yearRange, shouldShowYearSelector: showYearSelector } = useMemo(() => {
    const yearRange = getYearRange(minDate, maxDate);
    const shouldShow = shouldShowYearSelector(minDate, maxDate);

    return {
      yearRange,
      shouldShowYearSelector: shouldShow
    };
  }, [minDate, maxDate]);

  /** 月份切换禁用 */
  const monthPrevDisabled = useMemo(
    () => !showYearSelector && month <= 0,
    [month, showYearSelector]
  );
  const monthNextDisabled = useMemo(
    () => !showYearSelector && month >= 11,
    [month, showYearSelector]
  );

  /** 切换月份 */
  const handlePrevMonth = () => {
    if (month <= 0) {
      setInputYear(inputYear - 1);
    }
    if (month - 1 === curMonth) {
      setSelected(curDay);
    } else {
      setSelected(undefined);
    }
    setCurrentDate((prevDate) => {
      const prevMonth = prevDate.getMonth() - 1;
      return new Date(prevDate.getFullYear(), prevMonth, 1);
    });
  };

  const handleNextMonth = () => {
    if (month >= 11) {
      setInputYear(inputYear + 1);
    }
    if (month + 1 === curMonth) {
      setSelected(curDay);
    } else {
      setSelected(undefined);
    }
    setCurrentDate((prevDate) => {
      const nextMonth = prevDate.getMonth() + 1;
      return new Date(prevDate.getFullYear(), nextMonth, 1);
    });
  };

  const handleBackToDate = () => {
    setCurrentDate(new Date());
    setSelected(curDay);
    setInputYear(curYear);
    onDayChange?.(curDay, curMonth, curYear);
  };

  const handleMonthChange = (month: number) => {
    setCurrentDate((prevDate) => {
      return new Date(prevDate.getFullYear(), month, 1);
    });
  };

  const handleYearChange = (year: number) => {
    if (!isNaN(year)) {
      setCurrentDate((prevDate) => {
        return new Date(year, prevDate.getMonth(), 1);
      });
      /** 初始化状态 */
      if (year == curYear) {
        if (selected === undefined) {
          setSelected(curDay);
        }
      } else {
        setSelected(undefined);
      }
      setInputYear(year);
    }
  };

  // 判断是否为当前日期
  const isCurrentDate = year === curYear && month === curMonth;

  // 获取日历网格数据
  const calendarDays = getMonthDaysGrid(year, month, selected, minDate, maxDate);

  // 处理日期点击
  const handleDayClick = (day: CalendarDay) => {
    if (day.isCurrentMonth) {
      setSelected(day.dayNumber);
      onDayChange?.(day.dayNumber, day.month, day.year);
    }
  };

  // 处理日期悬浮事件
  const handleDayMouseOver = (day: CalendarDay, e: React.MouseEvent) => {
    if (day.isCurrentMonth) {
      onDayMouseOver?.(day.dayNumber, day.month, day.year, "date", e);
    }
  };

  const handleDayMouseOut = (day: CalendarDay, e: React.MouseEvent) => {
    if (day.isCurrentMonth) {
      onDayMouseOut?.(day.dayNumber, day.month, day.year, "date", e);
    }
  };

  const handleDayMouseEnter = (day: CalendarDay, e: React.MouseEvent) => {
    if (day.isCurrentMonth) {
      onDayMouseEnter?.(day.dayNumber, day.month, day.year, "date", e);
    }
  };

  const handleDayMouseLeave = (day: CalendarDay, e: React.MouseEvent) => {
    if (day.isCurrentMonth) {
      onDayMouseLeave?.(day.dayNumber, day.month, day.year, "date", e);
    }
  };

  return (
    <div className={`land-calendar-date ${className}`} style={style}>
      <CalendarHeader
        language={language}
        currentYear={inputYear}
        currentMonth={month}
        viewMode="date"
        shouldShowYearSelector={showYearSelector}
        yearRange={yearRange}
        monthPrevDisabled={monthPrevDisabled}
        monthNextDisabled={monthNextDisabled}
        onMonthChange={handleMonthChange}
        onYearChange={handleYearChange}
      />

      <WeekdaysRow language={language} />

      <div className="land-calendar-days">
        {calendarDays.map((day, index) => (
          <CalendarCell
            key={`${day.year}-${day.month}-${day.dayNumber}-${index}`}
            day={day}
            onDayClick={handleDayClick}
            onDayMouseOver={handleDayMouseOver}
            onDayMouseOut={handleDayMouseOut}
            onDayMouseEnter={handleDayMouseEnter}
            onDayMouseLeave={handleDayMouseLeave}
          >
            {day.isCurrentMonth && holidays.map(h => h.date).includes(`${day.month}-${day.dayNumber}`) && (
              <div className='land-calendar-bottom-dot'></div>
            )}
          </CalendarCell>
        ))}
      </div>

      {!isCurrentDate && (
        <Button
          type="transparent"
          status='primary'
          block
          size='small'
          text={language === "zh" ? "返回今天" : "Today"}
          className="land-calendar-btn back"
          onClick={handleBackToDate}
        />
      )}
    </div>
  );
};

export default CalendarDate; 