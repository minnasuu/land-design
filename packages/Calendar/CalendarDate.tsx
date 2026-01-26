import React, { useEffect, useMemo, useState } from 'react'
import './index.scss';
import CalendarHeader from './CalendarHeader';
import WeekdaysRow from './WeekdaysRow';
import CalendarCell from './CalendarCell';
import Button from '../Button';
import { DateInput, getYearRange, shouldShowYearSelector, isMonthInRange } from './utils/dateRange';
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
  const monthPrevDisabled = useMemo(() => {
    // 如果没有日期限制，允许自由切换
    if (!minDate && !maxDate) {
      return false;
    }
    
    // 有日期限制时，检查上个月是否在允许范围内
    const prevMonth = month <= 0 ? 11 : month - 1;
    const prevYear = month <= 0 ? year - 1 : year;
    return !isMonthInRange(prevYear, prevMonth, minDate, maxDate);
  }, [month, year, minDate, maxDate]);

  const monthNextDisabled = useMemo(() => {
    // 如果没有日期限制，允许自由切换
    if (!minDate && !maxDate) {
      return false;
    }
    
    // 有日期限制时，检查下个月是否在允许范围内
    const nextMonth = month >= 11 ? 0 : month + 1;
    const nextYear = month >= 11 ? year + 1 : year;
    return !isMonthInRange(nextYear, nextMonth, minDate, maxDate);
  }, [month, year, minDate, maxDate]);

  /** 切换月份 */
  const handlePrevMonth = () => {
    const currentMonth = currentDate.getMonth();
    const currentYear = currentDate.getFullYear();
    
    // 计算上一个月的年份和月份
    let prevMonth, prevYear;
    if (currentMonth === 0) {
      // 从1月切换到上一年的12月
      prevMonth = 11;
      prevYear = currentYear - 1;
    } else {
      // 正常的月份减1
      prevMonth = currentMonth - 1;
      prevYear = currentYear;
    }
    
    // 更新inputYear状态
    setInputYear(prevYear);
    
    // 更新选中状态
    if (prevMonth === curMonth && prevYear === curYear) {
      setSelected(curDay);
    } else {
      setSelected(undefined);
    }
    
    // 更新当前日期
    setCurrentDate(new Date(prevYear, prevMonth, 1));
  };

  const handleNextMonth = () => {
    const currentMonth = currentDate.getMonth();
    const currentYear = currentDate.getFullYear();
    
    // 计算下一个月的年份和月份
    let nextMonth, nextYear;
    if (currentMonth === 11) {
      // 从12月切换到下一年的1月
      nextMonth = 0;
      nextYear = currentYear + 1;
    } else {
      // 正常的月份加1
      nextMonth = currentMonth + 1;
      nextYear = currentYear;
    }
    
    // 更新inputYear状态
    setInputYear(nextYear);
    
    // 更新选中状态
    if (nextMonth === curMonth && nextYear === curYear) {
      setSelected(curDay);
    } else {
      setSelected(undefined);
    }
    
    // 更新当前日期
    setCurrentDate(new Date(nextYear, nextMonth, 1));
  };

  const handleBackToDate = () => {
    setCurrentDate(new Date());
    setSelected(curDay);
    setInputYear(curYear);
    onDayChange?.(curDay, curMonth, curYear);
  };

  const handleMonthChange = (month: number) => {
    const currentYear = currentDate.getFullYear();
    
    // 创建新日期，让JavaScript自动处理跨年
    const newDate = new Date(currentYear, month, 1);
    const actualYear = newDate.getFullYear();
    const actualMonth = newDate.getMonth();
    
    // 更新状态
    setCurrentDate(newDate);
    setInputYear(actualYear);
    
    // 更新选中状态
    if (actualMonth === curMonth && actualYear === curYear) {
      setSelected(curDay);
    } else {
      setSelected(undefined);
    }
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