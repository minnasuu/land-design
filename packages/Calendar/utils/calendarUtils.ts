import { DateInput, isDayInRange, isWeekInRange } from './dateRange';

export interface CalendarDay {
  date: Date;
  isCurrentMonth: boolean;
  isToday: boolean;
  isSelected: boolean;
  isDisabled: boolean;
  dayNumber: number;
  month: number;
  year: number;
}

export interface CalendarWeek {
  dates: Date[];
  isCurrentWeek: boolean;
  isSelected: boolean;
  isDisabled: boolean;
  weekStart: Date;
  weekEnd: Date;
}

// 获取某月的所有日期（含前后补齐的other-month）
export function getMonthDaysGrid(
  year: number,
  month: number,
  selectedDay?: number,
  minDate?: DateInput,
  maxDate?: DateInput
): CalendarDay[] {
  const firstDayOfMonth = new Date(year, month, 1);
  const lastDayOfMonth = new Date(year, month + 1, 0);
  const firstDayOfWeek = firstDayOfMonth.getDay();
  const daysInMonth = lastDayOfMonth.getDate();
  const today = new Date();

  const days: CalendarDay[] = [];

  // 上月补齐
  for (let i = 0; i < firstDayOfWeek; i++) {
    const prevMonthLastDay = new Date(year, month, 0);
    const prevDate = new Date(prevMonthLastDay.getTime() - (firstDayOfWeek - i - 1) * 24 * 60 * 60 * 1000);
    const dayNumber = prevDate.getDate();
    const prevMonth = prevDate.getMonth();
    const prevYear = prevDate.getFullYear();

    days.push({
      date: prevDate,
      isCurrentMonth: false,
      isToday: prevDate.toDateString() === today.toDateString(),
      isSelected: false,
      isDisabled: !isDayInRange(prevYear, prevMonth, dayNumber, minDate, maxDate),
      dayNumber,
      month: prevMonth,
      year: prevYear
    });
  }

  // 本月
  for (let i = 1; i <= daysInMonth; i++) {
    const date = new Date(year, month, i);
    days.push({
      date,
      isCurrentMonth: true,
      isToday: date.toDateString() === today.toDateString(),
      isSelected: selectedDay === i,
      isDisabled: !isDayInRange(year, month, i, minDate, maxDate),
      dayNumber: i,
      month,
      year
    });
  }

  // 下月补齐
  const total = days.length;
  for (let i = 1; i <= 42 - total; i++) {
    const nextDate = new Date(year, month + 1, i);
    const dayNumber = nextDate.getDate();
    const nextMonth = nextDate.getMonth();
    const nextYear = nextDate.getFullYear();

    days.push({
      date: nextDate,
      isCurrentMonth: false,
      isToday: nextDate.toDateString() === today.toDateString(),
      isSelected: false,
      isDisabled: !isDayInRange(nextYear, nextMonth, dayNumber, minDate, maxDate),
      dayNumber,
      month: nextMonth,
      year: nextYear
    });
  }

  return days;
}

// 获取当月的所有周
export function getMonthWeeks(
  year: number,
  month: number,
  selectedWeek?: number,
  minDate?: DateInput,
  maxDate?: DateInput
): CalendarWeek[] {
  const firstDayOfMonth = new Date(year, month, 1);
  const lastDayOfMonth = new Date(year, month + 1, 0);
  const firstDayOfWeek = firstDayOfMonth.getDay();
  const daysInMonth = lastDayOfMonth.getDate();
  const today = new Date();

  const weeks: CalendarWeek[] = [];
  let currentWeek: Date[] = [];

  // 添加上个月的日期（填充第一周）
  for (let i = 0; i < firstDayOfWeek; i++) {
    const prevMonthLastDay = new Date(year, month, 0);
    const prevDate = new Date(prevMonthLastDay.getTime() - (firstDayOfWeek - i - 1) * 24 * 60 * 60 * 1000);
    currentWeek.push(prevDate);
  }

  // 添加当月的日期
  for (let day = 1; day <= daysInMonth; day++) {
    currentWeek.push(new Date(year, month, day));

    if (currentWeek.length === 7) {
      const weekStart = currentWeek[0];
      const weekEnd = currentWeek[6];
      const weekIndex = weeks.length;

      weeks.push({
        dates: [...currentWeek],
        isCurrentWeek: isCurrentWeekInMonth(currentWeek, today),
        isSelected: selectedWeek === weekIndex + 1,
        isDisabled: !isWeekInRange(weekStart, weekEnd, minDate, maxDate),
        weekStart,
        weekEnd
      });
      currentWeek = [];
    }
  }

  // 添加下个月的日期（填充最后一周）
  if (currentWeek.length > 0) {
    for (let i = currentWeek.length; i < 7; i++) {
      const nextDate = new Date(year, month + 1, i - currentWeek.length + 1);
      currentWeek.push(nextDate);
    }

    const weekStart = currentWeek[0];
    const weekEnd = currentWeek[6];
    const weekIndex = weeks.length;

    weeks.push({
      dates: currentWeek,
      isCurrentWeek: isCurrentWeekInMonth(currentWeek, today),
      isSelected: selectedWeek === weekIndex + 1,
      isDisabled: !isWeekInRange(weekStart, weekEnd, minDate, maxDate),
      weekStart,
      weekEnd
    });
  }

  return weeks;
}

// 判断是否为当前周（包含今天的周）
export function isCurrentWeekInMonth(weekDates: Date[], today: Date): boolean {
  return weekDates.some(date =>
    date.getDate() === today.getDate() &&
    date.getMonth() === today.getMonth() &&
    date.getFullYear() === today.getFullYear()
  );
}

// 获取星期栏数据
export const weekdays = [
  { zh: "日", en: "Su" },
  { zh: "一", en: "Mo" },
  { zh: "二", en: "Tu" },
  { zh: "三", en: "We" },
  { zh: "四", en: "Th" },
  { zh: "五", en: "Fr" },
  { zh: "六", en: "Sa" },
];

// 获取节假日数据
export async function getHolidays(year: number, language: "zh" | "en" = "zh") {
  try {
    const response = await fetch(
      `https://date.nager.at/api/v3/publicholidays/${year}/${language}`
    );
    const holidays = await response.json();
    return holidays.map((holiday: any) => {
      const holidayDate = holiday.date.split("-");
      return {
        date: `${Number(holidayDate[1])}-${Number(holidayDate[2])}`,
        zhName: holiday.localName,
        enName: holiday.name,
      };
    });
  } catch (error) {
    return [];
  }
} 