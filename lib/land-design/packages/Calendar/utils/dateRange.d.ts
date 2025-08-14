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
export declare function parseDate(dateInput: DateInput): Date | null;
/**
 * 检查日期是否在指定范围内
 */
export declare function isDateInRange(date: Date, minDate?: DateInput, maxDate?: DateInput): boolean;
/**
 * 检查日期是否在指定范围内（包含边界）
 */
export declare function isDateInRangeInclusive(date: Date, minDate?: DateInput, maxDate?: DateInput): boolean;
/**
 * 获取日期范围的最小年份
 */
export declare function getMinYear(minDate?: DateInput): number | undefined;
/**
 * 获取日期范围的最大年份
 */
export declare function getMaxYear(maxDate?: DateInput): number | undefined;
/**
 * 检查年份是否在范围内
 */
export declare function isYearInRange(year: number, minDate?: DateInput, maxDate?: DateInput): boolean;
/**
 * 检查月份是否在范围内
 */
export declare function isMonthInRange(year: number, month: number, minDate?: DateInput, maxDate?: DateInput): boolean;
/**
 * 检查季度是否在范围内
 */
export declare function isQuarterInRange(year: number, quarter: number, minDate?: DateInput, maxDate?: DateInput): boolean;
/**
 * 检查周是否在范围内
 */
export declare function isWeekInRange(weekStart: Date, weekEnd: Date, minDate?: DateInput, maxDate?: DateInput): boolean;
/**
 * 检查日期是否在范围内
 */
export declare function isDayInRange(year: number, month: number, day: number, minDate?: DateInput, maxDate?: DateInput): boolean;
/**
 * 获取可用的年份范围
 */
export declare function getYearRange(minDate?: DateInput, maxDate?: DateInput): [number, number];
/**
 * 检查是否应该显示年份选择器
 */
export declare function shouldShowYearSelector(minDate?: DateInput, maxDate?: DateInput): boolean;
