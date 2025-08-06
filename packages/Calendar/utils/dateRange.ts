/**
 * 日期范围限制工具函数
 * 支持类似dayjs的日期格式
 */

export type DateInput = string | number | Date;

/**
 * 解析日期输入
 * 支持多种格式：
 * - Date对象
 * - 时间戳
 * - 日期字符串 (YYYY-MM-DD, YYYY/MM/DD, YYYY-MM-DD HH:mm:ss等)
 */
export function parseDate(dateInput: DateInput): Date | null {
  if (dateInput instanceof Date) {
    return dateInput;
  }

  if (typeof dateInput === 'number') {
    return new Date(dateInput);
  }

  if (typeof dateInput === 'string') {
    // 尝试解析各种日期格式
    const date = new Date(dateInput);
    return isNaN(date.getTime()) ? null : date;
  }

  return null;
}

/**
 * 检查日期是否在指定范围内
 */
export function isDateInRange(
  date: Date,
  minDate?: DateInput,
  maxDate?: DateInput
): boolean {
  const parsedMinDate = minDate ? parseDate(minDate) : null;
  const parsedMaxDate = maxDate ? parseDate(maxDate) : null;

  if (parsedMinDate && date < parsedMinDate) {
    return false;
  }

  if (parsedMaxDate && date > parsedMaxDate) {
    return false;
  }

  return true;
}

/**
 * 检查日期是否在指定范围内（包含边界）
 */
export function isDateInRangeInclusive(
  date: Date,
  minDate?: DateInput,
  maxDate?: DateInput
): boolean {
  const parsedMinDate = minDate ? parseDate(minDate) : null;
  const parsedMaxDate = maxDate ? parseDate(maxDate) : null;

  if (parsedMinDate && date < parsedMinDate) {
    return false;
  }

  if (parsedMaxDate && date > parsedMaxDate) {
    return false;
  }

  return true;
}

/**
 * 获取日期范围的最小年份
 */
export function getMinYear(minDate?: DateInput): number | undefined {
  if (!minDate) return undefined;
  const parsedDate = parseDate(minDate);
  return parsedDate ? parsedDate.getFullYear() : undefined;
}

/**
 * 获取日期范围的最大年份
 */
export function getMaxYear(maxDate?: DateInput): number | undefined {
  if (!maxDate) return undefined;
  const parsedDate = parseDate(maxDate);
  return parsedDate ? parsedDate.getFullYear() : undefined;
}

/**
 * 检查年份是否在范围内
 */
export function isYearInRange(
  year: number,
  minDate?: DateInput,
  maxDate?: DateInput
): boolean {
  const minYear = getMinYear(minDate);
  const maxYear = getMaxYear(maxDate);

  if (minYear && year < minYear) {
    return false;
  }

  if (maxYear && year > maxYear) {
    return false;
  }

  return true;
}

/**
 * 检查月份是否在范围内
 */
export function isMonthInRange(
  year: number,
  month: number,
  minDate?: DateInput,
  maxDate?: DateInput
): boolean {
  const testDate = new Date(year, month, 1);
  return isDateInRange(testDate, minDate, maxDate);
}

/**
 * 检查季度是否在范围内
 */
export function isQuarterInRange(
  year: number,
  quarter: number,
  minDate?: DateInput,
  maxDate?: DateInput
): boolean {
  const startMonth = (quarter - 1) * 3;
  const startDate = new Date(year, startMonth, 1);
  const endDate = new Date(year, startMonth + 2, 31);

  return isDateInRange(startDate, minDate, maxDate) ||
    isDateInRange(endDate, minDate, maxDate);
}

/**
 * 检查周是否在范围内
 */
export function isWeekInRange(
  weekStart: Date,
  weekEnd: Date,
  minDate?: DateInput,
  maxDate?: DateInput
): boolean {
  return isDateInRange(weekStart, minDate, maxDate) ||
    isDateInRange(weekEnd, minDate, maxDate);
}

/**
 * 检查日期是否在范围内
 */
export function isDayInRange(
  year: number,
  month: number,
  day: number,
  minDate?: DateInput,
  maxDate?: DateInput
): boolean {
  const testDate = new Date(year, month, day);
  return isDateInRange(testDate, minDate, maxDate);
}

/**
 * 获取可用的年份范围
 */
export function getYearRange(
  minDate?: DateInput,
  maxDate?: DateInput
): [number, number] {
  const currentYear = new Date().getFullYear();
  const minYear = getMinYear(minDate);
  const maxYear = getMaxYear(maxDate);

  if (!minYear && !maxYear) {
    return [currentYear, currentYear];
  }

  if (minYear && !maxYear) {
    return [minYear, currentYear];
  }

  if (!minYear && maxYear) {
    return [currentYear, maxYear];
  }

  if (minYear && maxYear) {
    return [minYear, maxYear];
  }

  return [currentYear, currentYear];
}

/**
 * 检查是否应该显示年份选择器
 */
export function shouldShowYearSelector(
  minDate?: DateInput,
  maxDate?: DateInput
): boolean {
  const [minYear, maxYear] = getYearRange(minDate, maxDate);
  return maxYear > minYear;
} 