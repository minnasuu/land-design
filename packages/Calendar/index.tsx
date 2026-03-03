import React, { useCallback, useMemo, useState } from "react";
import "./index.scss";
import { 
  CalendarProps, 
  defaultCalendarProps,
  DateInfo,
  WeekInfo,
  MonthInfo,
  QuarterInfo,
  YearInfo 
} from "./props";
import CalendarHeader from "./CalendarHeader";
import WeekdaysRow from "./WeekdaysRow";
import CalendarCell from "./CalendarCell";
import Button from "../Button";
import Icon from "../Icon";
import { 
  getYearRange, 
  shouldShowYearSelector, 
  isMonthInRange,
  isQuarterInRange,
  isYearInRange
} from "./utils/dateRange";
import { 
  getMonthDaysGrid, 
  getMonthWeeks,
  CalendarDay,
  CalendarWeek as WeekData
} from "./utils/calendarUtils";

// ─── 主组件 ───
const Calendar: React.FC<CalendarProps> = (props) => {
  const {
    value,
    defaultValue,
    mode = defaultCalendarProps.mode!,
    language = defaultCalendarProps.language!,
    size = defaultCalendarProps.size!,
    minDate,
    maxDate,
    disabledDate,
    weekStartDay = defaultCalendarProps.weekStartDay!,
    showHolidays = defaultCalendarProps.showHolidays!,
    showWeekNumber = defaultCalendarProps.showWeekNumber!,
    showTodayButton = defaultCalendarProps.showTodayButton!,
    showOtherMonthDays = defaultCalendarProps.showOtherMonthDays!,
    allowOtherMonthSelect = defaultCalendarProps.allowOtherMonthSelect!,
    headerRender,
    dateRender,
    monthRender,
    onChange,
    onDateSelect,
    onWeekSelect,
    onMonthSelect,
    onQuarterSelect,
    onYearSelect,
    onPanelChange,
    onDateMouseEnter,
    onDateMouseLeave,
    className = "",
    style,
    children,
    ...restProps
  } = props;

  // ─── 状态管理 ───
  const today = new Date();
  const [panelDate, setPanelDate] = useState(() => {
    return value || defaultValue || today;
  });
  const [selectedValue, setSelectedValue] = useState<Date | null>(() => {
    return value ?? defaultValue ?? null;
  });

  // 受控/非受控模式
  const isControlled = value !== undefined;
  const currentValue = isControlled ? value : selectedValue;

  // 当前面板的年月
  const panelYear = panelDate.getFullYear();
  const panelMonth = panelDate.getMonth();

  // ─── 计算属性 ───
  const { yearRange, showYearSelector } = useMemo(() => {
    return {
      yearRange: getYearRange(minDate, maxDate),
      showYearSelector: shouldShowYearSelector(minDate, maxDate),
    };
  }, [minDate, maxDate]);

  // 月份导航禁用状态
  const prevDisabled = useMemo(() => {
    if (!minDate && !maxDate) return false;
    const prevMonth = panelMonth <= 0 ? 11 : panelMonth - 1;
    const prevYear = panelMonth <= 0 ? panelYear - 1 : panelYear;
    return !isMonthInRange(prevYear, prevMonth, minDate, maxDate);
  }, [panelMonth, panelYear, minDate, maxDate]);

  const nextDisabled = useMemo(() => {
    if (!minDate && !maxDate) return false;
    const nextMonth = panelMonth >= 11 ? 0 : panelMonth + 1;
    const nextYear = panelMonth >= 11 ? panelYear + 1 : panelYear;
    return !isMonthInRange(nextYear, nextMonth, minDate, maxDate);
  }, [panelMonth, panelYear, minDate, maxDate]);

  // 判断是否显示返回今天按钮
  const shouldShowTodayButton = useMemo(() => {
    if (!showTodayButton) return false;
    return panelYear !== today.getFullYear() || panelMonth !== today.getMonth();
  }, [showTodayButton, panelYear, panelMonth]);

  // ─── 日历网格数据 ───
  const calendarDays = useMemo(() => {
    const selectedDay = currentValue?.getDate();
    const selectedMonth = currentValue?.getMonth();
    const selectedYear = currentValue?.getFullYear();
    
    return getMonthDaysGrid(panelYear, panelMonth, undefined, minDate, maxDate).map(day => ({
      ...day,
      isSelected: day.isCurrentMonth && 
        day.dayNumber === selectedDay && 
        day.month === selectedMonth && 
        day.year === selectedYear,
    }));
  }, [panelYear, panelMonth, currentValue, minDate, maxDate]);

  // 周数据
  const calendarWeeks = useMemo(() => {
    return getMonthWeeks(panelYear, panelMonth, undefined, minDate, maxDate);
  }, [panelYear, panelMonth, minDate, maxDate]);

  // 月份数据
  const months = useMemo(() => {
    const monthNames = [
      { zh: "一月", en: "Jan" },
      { zh: "二月", en: "Feb" },
      { zh: "三月", en: "Mar" },
      { zh: "四月", en: "Apr" },
      { zh: "五月", en: "May" },
      { zh: "六月", en: "Jun" },
      { zh: "七月", en: "Jul" },
      { zh: "八月", en: "Aug" },
      { zh: "九月", en: "Sep" },
      { zh: "十月", en: "Oct" },
      { zh: "十一月", en: "Nov" },
      { zh: "十二月", en: "Dec" },
    ];
    return monthNames.map((name, index) => ({
      ...name,
      value: index,
      isCurrentMonth: panelYear === today.getFullYear() && index === today.getMonth(),
      isSelected: currentValue ? panelYear === currentValue.getFullYear() && index === currentValue.getMonth() : false,
      isDisabled: !isMonthInRange(panelYear, index, minDate, maxDate),
    }));
  }, [panelYear, currentValue, minDate, maxDate]);

  // 季度数据
  const quarters = useMemo(() => {
    const currentQuarter = Math.floor(today.getMonth() / 3) + 1;
    const selectedQuarter = currentValue ? Math.floor(currentValue.getMonth() / 3) + 1 : null;
    
    return [
      { zh: "第一季度", en: "Q1", value: 1, months: language === "zh" ? "1-3月" : "Jan-Mar", desc: language === "zh" ? "春季" : "Spring" },
      { zh: "第二季度", en: "Q2", value: 2, months: language === "zh" ? "4-6月" : "Apr-Jun", desc: language === "zh" ? "夏季" : "Summer" },
      { zh: "第三季度", en: "Q3", value: 3, months: language === "zh" ? "7-9月" : "Jul-Sep", desc: language === "zh" ? "秋季" : "Autumn" },
      { zh: "第四季度", en: "Q4", value: 4, months: language === "zh" ? "10-12月" : "Oct-Dec", desc: language === "zh" ? "冬季" : "Winter" },
    ].map(q => ({
      ...q,
      isCurrentQuarter: panelYear === today.getFullYear() && q.value === currentQuarter,
      isSelected: currentValue ? panelYear === currentValue.getFullYear() && q.value === selectedQuarter : false,
      isDisabled: !isQuarterInRange(panelYear, q.value, minDate, maxDate),
    }));
  }, [panelYear, currentValue, language, minDate, maxDate]);

  // 年份数据（十年）
  const decadeStart = Math.floor(panelYear / 10) * 10;
  const years = useMemo(() => {
    return Array.from({ length: 10 }, (_, i) => {
      const year = decadeStart + i;
      return {
        year,
        isCurrentYear: year === today.getFullYear(),
        isSelected: currentValue ? year === currentValue.getFullYear() : false,
        isDisabled: !isYearInRange(year, minDate, maxDate),
      };
    });
  }, [decadeStart, currentValue, minDate, maxDate]);

  // ─── 事件处理 ───
  const handlePanelChange = useCallback((newDate: Date) => {
    setPanelDate(newDate);
    onPanelChange?.(newDate, mode);
  }, [mode, onPanelChange]);

  const handlePrev = useCallback(() => {
    let newDate: Date;
    if (mode === "date" || mode === "week") {
      newDate = new Date(panelYear, panelMonth - 1, 1);
    } else if (mode === "month" || mode === "quarter") {
      newDate = new Date(panelYear - 1, panelMonth, 1);
    } else {
      newDate = new Date(decadeStart - 10, 0, 1);
    }
    handlePanelChange(newDate);
  }, [mode, panelYear, panelMonth, decadeStart, handlePanelChange]);

  const handleNext = useCallback(() => {
    let newDate: Date;
    if (mode === "date" || mode === "week") {
      newDate = new Date(panelYear, panelMonth + 1, 1);
    } else if (mode === "month" || mode === "quarter") {
      newDate = new Date(panelYear + 1, panelMonth, 1);
    } else {
      newDate = new Date(decadeStart + 10, 0, 1);
    }
    handlePanelChange(newDate);
  }, [mode, panelYear, panelMonth, decadeStart, handlePanelChange]);

  const handleYearChange = useCallback((year: number) => {
    if (!isNaN(year)) {
      const newDate = new Date(year, panelMonth, 1);
      handlePanelChange(newDate);
    }
  }, [panelMonth, handlePanelChange]);

  const handleToday = useCallback(() => {
    const todayDate = new Date();
    setPanelDate(todayDate);
    if (!isControlled) {
      setSelectedValue(todayDate);
    }
    
    const info: DateInfo = {
      date: todayDate,
      day: todayDate.getDate(),
      month: todayDate.getMonth(),
      year: todayDate.getFullYear(),
      isCurrentMonth: true,
      isToday: true,
      isSelected: true,
      isDisabled: false,
    };
    
    onChange?.(todayDate, info);
    onDateSelect?.(todayDate, info);
  }, [isControlled, onChange, onDateSelect]);

  // 日期选择
  const handleDateClick = useCallback((day: CalendarDay) => {
    if (day.isDisabled) return;
    
    const selectedDate = day.date;
    
    if (!isControlled) {
      setSelectedValue(selectedDate);
    }
    
    const info: DateInfo = {
      date: selectedDate,
      day: day.dayNumber,
      month: day.month,
      year: day.year,
      isCurrentMonth: day.isCurrentMonth,
      isToday: day.isToday,
      isSelected: true,
      isDisabled: false,
    };
    
    onChange?.(selectedDate, info);
    onDateSelect?.(selectedDate, info);
  }, [isControlled, onChange, onDateSelect]);

  // 其他月份日期点击
  const handleOtherMonthClick = useCallback((day: CalendarDay) => {
    if (!allowOtherMonthSelect || day.isDisabled) return;
    
    // 跳转到对应月份
    setPanelDate(new Date(day.year, day.month, 1));
    
    // 选中该日期
    const selectedDate = day.date;
    if (!isControlled) {
      setSelectedValue(selectedDate);
    }
    
    const info: DateInfo = {
      date: selectedDate,
      day: day.dayNumber,
      month: day.month,
      year: day.year,
      isCurrentMonth: true,
      isToday: day.isToday,
      isSelected: true,
      isDisabled: false,
    };
    
    onChange?.(selectedDate, info);
    onDateSelect?.(selectedDate, info);
  }, [allowOtherMonthSelect, isControlled, onChange, onDateSelect]);

  // 周选择
  const handleWeekClick = useCallback((week: WeekData, index: number) => {
    if (week.isDisabled) return;
    
    const selectedDate = week.weekStart;
    if (!isControlled) {
      setSelectedValue(selectedDate);
    }
    
    const info: WeekInfo = {
      startDate: week.weekStart,
      endDate: week.weekEnd,
      dates: week.dates,
      weekNumber: index + 1,
      isCurrentWeek: week.isCurrentWeek,
      isSelected: true,
      isDisabled: false,
    };
    
    onChange?.(selectedDate, info);
    onWeekSelect?.(selectedDate, info);
  }, [isControlled, onChange, onWeekSelect]);

  // 月份选择
  const handleMonthClick = useCallback((monthIndex: number) => {
    const monthData = months[monthIndex];
    if (monthData.isDisabled) return;
    
    const selectedDate = new Date(panelYear, monthIndex, 1);
    if (!isControlled) {
      setSelectedValue(selectedDate);
    }
    
    const info: MonthInfo = {
      month: monthIndex,
      year: panelYear,
      isCurrentMonth: monthData.isCurrentMonth,
      isSelected: true,
      isDisabled: false,
    };
    
    onChange?.(selectedDate, info);
    onMonthSelect?.(monthIndex, panelYear, info);
  }, [panelYear, months, isControlled, onChange, onMonthSelect]);

  // 季度选择
  const handleQuarterClick = useCallback((quarter: number) => {
    const quarterData = quarters.find(q => q.value === quarter);
    if (!quarterData || quarterData.isDisabled) return;
    
    const selectedDate = new Date(panelYear, (quarter - 1) * 3, 1);
    if (!isControlled) {
      setSelectedValue(selectedDate);
    }
    
    const info: QuarterInfo = {
      quarter,
      year: panelYear,
      isCurrentQuarter: quarterData.isCurrentQuarter,
      isSelected: true,
      isDisabled: false,
    };
    
    onChange?.(selectedDate, info);
    onQuarterSelect?.(quarter, panelYear, info);
  }, [panelYear, quarters, isControlled, onChange, onQuarterSelect]);

  // 年份选择
  const handleYearClick = useCallback((year: number) => {
    const yearData = years.find(y => y.year === year);
    if (!yearData || yearData.isDisabled) return;
    
    const selectedDate = new Date(year, 0, 1);
    if (!isControlled) {
      setSelectedValue(selectedDate);
    }
    
    const info: YearInfo = {
      year,
      isCurrentYear: yearData.isCurrentYear,
      isSelected: true,
      isDisabled: false,
    };
    
    onChange?.(selectedDate, info);
    onYearSelect?.(year, info);
  }, [years, isControlled, onChange, onYearSelect]);

  // ─── 渲染方法 ───
  const renderHeader = () => {
    if (headerRender) {
      return headerRender({ year: panelYear, month: panelMonth, mode });
    }

    let yearDisplay: string | undefined;
    let yearOptions: Array<{ key: string; label: string }> | undefined;

    if (mode === "year") {
      yearDisplay = `${decadeStart}-${decadeStart + 9}`;
      const [minYear, maxYear] = yearRange;
      const startDecade = Math.floor(minYear / 10) * 10;
      const endDecade = Math.floor(maxYear / 10) * 10;
      yearOptions = [];
      for (let d = startDecade; d <= endDecade; d += 10) {
        yearOptions.push({ key: d.toString(), label: `${d}-${d + 9}` });
      }
    }

    return (
      <CalendarHeader
        language={language}
        year={panelYear}
        month={panelMonth}
        mode={mode}
        showYearSelector={showYearSelector}
        yearRange={yearRange}
        prevDisabled={prevDisabled}
        nextDisabled={nextDisabled}
        yearDisplay={yearDisplay}
        yearOptions={yearOptions}
        onPrev={handlePrev}
        onNext={handleNext}
        onYearChange={handleYearChange}
      />
    );
  };

  const renderDateView = () => (
    <>
      <WeekdaysRow language={language} weekStartDay={weekStartDay} />
      <div className="land-calendar__grid land-calendar__grid--date">
        {calendarDays.map((day, index) => (
          <CalendarCell
            key={`${day.year}-${day.month}-${day.dayNumber}-${index}`}
            day={day}
            onDayClick={handleDateClick}
            onOtherMonthDayClick={allowOtherMonthSelect ? handleOtherMonthClick : undefined}
          >
            {dateRender?.({
              date: day.date,
              day: day.dayNumber,
              month: day.month,
              year: day.year,
              isCurrentMonth: day.isCurrentMonth,
              isToday: day.isToday,
              isSelected: day.isSelected,
              isDisabled: day.isDisabled,
            })}
          </CalendarCell>
        ))}
      </div>
    </>
  );

  const renderWeekView = () => (
    <>
      <WeekdaysRow language={language} weekStartDay={weekStartDay} />
      <div className="land-calendar__grid land-calendar__grid--week">
        {calendarWeeks.map((week, weekIndex) => {
          const isSelected = currentValue 
            ? week.dates.some(d => d.toDateString() === currentValue.toDateString())
            : false;
          
          return (
            <div
              key={weekIndex}
              className={`land-calendar__week-row ${isSelected ? "land-calendar__week-row--selected" : ""} ${week.isCurrentWeek ? "land-calendar__week-row--current" : ""} ${week.isDisabled ? "land-calendar__week-row--disabled" : ""}`}
              onClick={() => handleWeekClick(week, weekIndex)}
            >
              {week.dates.map((date, dayIndex) => (
                <div
                  key={dayIndex}
                  className={`land-calendar__cell ${date.toDateString() === today.toDateString() ? "land-calendar__cell--today" : ""} ${date.getMonth() !== panelMonth ? "land-calendar__cell--other" : ""}`}
                >
                  <span className="land-calendar__cell-text">{date.getDate()}</span>
                </div>
              ))}
            </div>
          );
        })}
      </div>
    </>
  );

  const renderMonthView = () => (
    <div className="land-calendar__grid land-calendar__grid--month">
      {months.map((month, index) => (
        <div
          key={index}
          className={`land-calendar__month-cell ${month.isCurrentMonth ? "land-calendar__month-cell--current" : ""} ${month.isSelected ? "land-calendar__month-cell--selected" : ""} ${month.isDisabled ? "land-calendar__month-cell--disabled" : ""}`}
          onClick={() => handleMonthClick(index)}
        >
          <span className="land-calendar__month-text">
            {language === "zh" ? month.zh : month.en}
          </span>
        </div>
      ))}
    </div>
  );

  const renderQuarterView = () => (
    <div className="land-calendar__grid land-calendar__grid--quarter">
      {quarters.map((quarter, index) => (
        <div
          key={index}
          className={`land-calendar__quarter-cell ${quarter.isCurrentQuarter ? "land-calendar__quarter-cell--current" : ""} ${quarter.isSelected ? "land-calendar__quarter-cell--selected" : ""} ${quarter.isDisabled ? "land-calendar__quarter-cell--disabled" : ""}`}
          onClick={() => handleQuarterClick(quarter.value)}
        >
          <div className="land-calendar__quarter-header">
            <span className="land-calendar__quarter-name">
              {language === "zh" ? quarter.zh : quarter.en}
            </span>
          </div>
          <span className="land-calendar__quarter-months">{quarter.months}</span>
          <span className="land-calendar__quarter-desc">{quarter.desc}</span>
        </div>
      ))}
    </div>
  );

  const renderYearView = () => (
    <div className="land-calendar__grid land-calendar__grid--year">
      {years.map((yearData, index) => (
        <div
          key={index}
          className={`land-calendar__year-cell ${yearData.isCurrentYear ? "land-calendar__year-cell--current" : ""} ${yearData.isSelected ? "land-calendar__year-cell--selected" : ""} ${yearData.isDisabled ? "land-calendar__year-cell--disabled" : ""}`}
          onClick={() => handleYearClick(yearData.year)}
        >
          <span className="land-calendar__year-text">{yearData.year}</span>
        </div>
      ))}
    </div>
  );

  const renderContent = () => {
    switch (mode) {
      case "date":
        return renderDateView();
      case "week":
        return renderWeekView();
      case "month":
        return renderMonthView();
      case "quarter":
        return renderQuarterView();
      case "year":
        return renderYearView();
      default:
        return renderDateView();
    }
  };

  // ─── 根类名 ───
  const rootClassName = [
    "land-calendar",
    `land-calendar--${mode}`,
    `land-calendar--${size}`,
    className,
  ].filter(Boolean).join(" ");

  return (
    <div className={rootClassName} style={style} {...restProps}>
      {renderHeader()}
      <div className="land-calendar__body">
        {renderContent()}
      </div>
      {shouldShowTodayButton && (
        <Button
          variant="transparent"
          status="primary"
          block
          size="small"
          icon={<Icon name="last-step" />}
          text={language === "zh" ? "返回今天" : "Today"}
          className="land-calendar__today-btn"
          onClick={handleToday}
        />
      )}
      {children}
    </div>
  );
};

export default Calendar;
export { default as CalendarHeader } from "./CalendarHeader";
export { default as WeekdaysRow } from "./WeekdaysRow";
export { default as CalendarCell } from "./CalendarCell";
export * from "./utils/calendarUtils";
export * from "./props";
