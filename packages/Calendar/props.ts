import React, { CSSProperties } from "react";
import { CommonProps } from "../types";
import { DateInput } from "./utils/dateRange";

// ==================== 基础类型定义 ====================

/** 语言类型 */
export type CalendarLanguage = "zh" | "en";

/** 日历视图模式 */
export type CalendarViewMode = "date" | "week" | "month" | "quarter" | "year";

/** 日历尺寸 */
export type CalendarSize = "small" | "default" | "large";

/** 星期起始日 */
export type WeekStartDay = 0 | 1 | 2 | 3 | 4 | 5 | 6; // 0=周日, 1=周一, ...

/** 日期信息 */
export interface DateInfo {
  /** 日期对象 */
  date: Date;
  /** 日期数字 */
  day: number;
  /** 月份（0-11） */
  month: number;
  /** 年份 */
  year: number;
  /** 是否为当前月 */
  isCurrentMonth: boolean;
  /** 是否为今天 */
  isToday: boolean;
  /** 是否选中 */
  isSelected: boolean;
  /** 是否禁用 */
  isDisabled: boolean;
}

/** 周信息 */
export interface WeekInfo {
  /** 周开始日期 */
  startDate: Date;
  /** 周结束日期 */
  endDate: Date;
  /** 周内所有日期 */
  dates: Date[];
  /** 周数 */
  weekNumber: number;
  /** 是否为当前周 */
  isCurrentWeek: boolean;
  /** 是否选中 */
  isSelected: boolean;
  /** 是否禁用 */
  isDisabled: boolean;
}

/** 月份信息 */
export interface MonthInfo {
  /** 月份（0-11） */
  month: number;
  /** 年份 */
  year: number;
  /** 是否为当前月 */
  isCurrentMonth: boolean;
  /** 是否选中 */
  isSelected: boolean;
  /** 是否禁用 */
  isDisabled: boolean;
}

/** 季度信息 */
export interface QuarterInfo {
  /** 季度（1-4） */
  quarter: number;
  /** 年份 */
  year: number;
  /** 是否为当前季度 */
  isCurrentQuarter: boolean;
  /** 是否选中 */
  isSelected: boolean;
  /** 是否禁用 */
  isDisabled: boolean;
}

/** 年份信息 */
export interface YearInfo {
  /** 年份 */
  year: number;
  /** 是否为当前年 */
  isCurrentYear: boolean;
  /** 是否选中 */
  isSelected: boolean;
  /** 是否禁用 */
  isDisabled: boolean;
}

// ==================== 属性接口定义 ====================

/**
 * Calendar 组件属性
 */
export interface CalendarProps extends CommonProps {
  // ─── 基础属性 ───
  /** 
   * 当前选中值（受控模式）
   * - date 模式: Date 对象
   * - week 模式: Date 对象（周开始日期）
   * - month 模式: Date 对象
   * - quarter 模式: Date 对象
   * - year 模式: Date 对象或数字
   */
  value?: Date | null;

  /** 
   * 默认选中值（非受控模式）
   */
  defaultValue?: Date | null;

  /** 
   * 视图模式
   * @default "date"
   */
  mode?: CalendarViewMode;

  /** 
   * 语言设置
   * @default "zh"
   */
  language?: CalendarLanguage;

  /** 
   * 尺寸
   * @default "default"
   */
  size?: CalendarSize;

  // ─── 日期范围 ───
  /** 
   * 最小可选日期
   * 支持 Date 对象、时间戳、日期字符串
   */
  minDate?: DateInput;

  /** 
   * 最大可选日期
   * 支持 Date 对象、时间戳、日期字符串
   */
  maxDate?: DateInput;

  /** 
   * 禁用日期判断函数
   * 返回 true 表示禁用该日期
   */
  disabledDate?: (date: Date) => boolean;

  // ─── 显示配置 ───
  /** 
   * 星期起始日（0-6，0=周日）
   * @default 0
   */
  weekStartDay?: WeekStartDay;

  /** 
   * 是否显示节假日标记
   * @default false
   */
  showHolidays?: boolean;

  /** 
   * 是否显示周数
   * @default false
   */
  showWeekNumber?: boolean;

  /** 
   * 是否显示"返回今天"按钮
   * @default true
   */
  showTodayButton?: boolean;

  /** 
   * 是否显示其他月份的日期
   * @default true
   */
  showOtherMonthDays?: boolean;

  /** 
   * 是否允许点击其他月份日期进行跳转
   * @default true
   */
  allowOtherMonthSelect?: boolean;

  /** 
   * 自定义头部内容
   */
  headerRender?: (props: {
    year: number;
    month: number;
    mode: CalendarViewMode;
  }) => React.ReactNode;

  /** 
   * 自定义日期单元格内容
   */
  dateRender?: (date: DateInfo) => React.ReactNode;

  /** 
   * 自定义月份单元格内容
   */
  monthRender?: (month: MonthInfo) => React.ReactNode;

  // ─── 事件回调 ───
  /** 
   * 值变化回调
   * @param value 选中的日期
   * @param info 详细信息
   */
  onChange?: (value: Date, info: DateInfo | WeekInfo | MonthInfo | QuarterInfo | YearInfo) => void;

  /** 
   * 日期选择回调（date 模式专用）
   */
  onDateSelect?: (date: Date, info: DateInfo) => void;

  /** 
   * 周选择回调（week 模式专用）
   */
  onWeekSelect?: (weekStart: Date, info: WeekInfo) => void;

  /** 
   * 月份选择回调（month 模式专用）
   */
  onMonthSelect?: (month: number, year: number, info: MonthInfo) => void;

  /** 
   * 季度选择回调（quarter 模式专用）
   */
  onQuarterSelect?: (quarter: number, year: number, info: QuarterInfo) => void;

  /** 
   * 年份选择回调（year 模式专用）
   */
  onYearSelect?: (year: number, info: YearInfo) => void;

  /** 
   * 面板变化回调（切换年月时触发）
   */
  onPanelChange?: (date: Date, mode: CalendarViewMode) => void;

  // ─── 鼠标事件 ───
  /** 日期鼠标进入 */
  onDateMouseEnter?: (date: Date, info: DateInfo, e: React.MouseEvent) => void;
  /** 日期鼠标离开 */
  onDateMouseLeave?: (date: Date, info: DateInfo, e: React.MouseEvent) => void;

  // ─── 样式属性 ───
  /** 自定义样式 */
  style?: CSSProperties;
  /** 自定义类名 */
  className?: string;
  /** 子元素 */
  children?: React.ReactNode;
}

/**
 * 默认属性值
 */
export const defaultCalendarProps: Partial<CalendarProps> = {
  mode: "date",
  language: "zh",
  size: "default",
  weekStartDay: 0,
  showHolidays: false,
  showWeekNumber: false,
  showTodayButton: true,
  showOtherMonthDays: true,
  allowOtherMonthSelect: true,
};

// ==================== 子组件属性类型 ====================

/**
 * CalendarHeader 组件属性
 */
export interface CalendarHeaderProps {
  /** 语言 */
  language?: CalendarLanguage;
  /** 当前年份 */
  year: number;
  /** 当前月份（0-11） */
  month?: number;
  /** 视图模式 */
  mode?: CalendarViewMode;
  /** 是否显示年份选择器 */
  showYearSelector?: boolean;
  /** 年份范围 */
  yearRange?: [number, number];
  /** 上一个按钮禁用 */
  prevDisabled?: boolean;
  /** 下一个按钮禁用 */
  nextDisabled?: boolean;
  /** 自定义年份显示 */
  yearDisplay?: string;
  /** 自定义年份选项 */
  yearOptions?: Array<{ key: string; label: string }>;
  /** 右侧自定义内容 */
  extra?: React.ReactNode;
  /** 上一个按钮点击 */
  onPrev?: () => void;
  /** 下一个按钮点击 */
  onNext?: () => void;
  /** 年份变化 */
  onYearChange?: (year: number) => void;
  /** 月份变化 */
  onMonthChange?: (month: number) => void;
  /** 自定义类名 */
  className?: string;
  /** 自定义样式 */
  style?: CSSProperties;
}

/**
 * CalendarCell 组件属性
 */
export interface CalendarCellProps {
  /** 日期信息 */
  date: DateInfo;
  /** 是否显示其他月份 */
  showOtherMonth?: boolean;
  /** 点击回调 */
  onClick?: (date: DateInfo) => void;
  /** 其他月份日期点击 */
  onOtherMonthClick?: (date: DateInfo) => void;
  /** 鼠标进入 */
  onMouseEnter?: (date: DateInfo, e: React.MouseEvent) => void;
  /** 鼠标离开 */
  onMouseLeave?: (date: DateInfo, e: React.MouseEvent) => void;
  /** 子元素 */
  children?: React.ReactNode;
  /** 自定义类名 */
  className?: string;
}

/**
 * WeekdaysRow 组件属性
 */
export interface WeekdaysRowProps {
  /** 语言 */
  language?: CalendarLanguage;
  /** 星期起始日 */
  weekStartDay?: WeekStartDay;
  /** 自定义类名 */
  className?: string;
}

// ==================== 工具函数类型 ====================

/**
 * 日期格式化函数类型
 */
export type DateFormatter = (date: Date, language: CalendarLanguage) => string;

/**
 * 日期解析函数类型
 */
export type DateParser = (input: string) => Date | null;

// ==================== 兼容旧 API ====================

/** @deprecated 使用 CalendarViewMode 代替 */
export type ViewMode = CalendarViewMode;

/** @deprecated 使用 onChange 代替 */
export type OnDayChange = (day: number, month: number, year: number) => void;

/** @deprecated 使用 onWeekSelect 代替 */
export type OnWeekChange = (weekStart: Date, weekEnd: Date, year: number) => void;

/** @deprecated 使用 onMonthSelect 代替 */
export type OnMonthChange = (month: number, year: number) => void;

/** @deprecated 使用 onQuarterSelect 代替 */
export type OnQuarterChange = (quarter: number, year: number) => void;

/** @deprecated 使用 onYearSelect 代替 */
export type OnYearChange = (year: number) => void;
