import React, { CSSProperties } from "react";
import { CommonProps } from "../types";
import { DropdownProps } from "../Dropdown/props";
import { InputProps } from "../Input/props";
import { CalendarProps, CalendarViewMode, DateInfo, WeekInfo, MonthInfo, QuarterInfo, YearInfo } from "../Calendar/props";
import { DateInput } from "../Calendar/utils/dateRange";

// ==================== 基础类型定义 ====================

/** 选择器类型 */
export type DatePickerType = "date" | "week" | "month" | "quarter" | "year";

/** 选择器尺寸 */
export type DatePickerSize = "small" | "default" | "large";

/** 选择器变体 */
export type DatePickerVariant = "outline" | "filled" | "borderless";

/** 日期格式化函数 */
export type DateFormatter = (date: Date, type: DatePickerType, language: "zh" | "en") => string;

/** 日期解析函数 */
export type DateParser = (input: string) => Date | null;

// ==================== 属性接口定义 ====================

/**
 * DatePicker 组件属性
 */
export interface DatePickerProps extends CommonProps {
  // ─── 基础属性 ───
  /** 
   * 当前选中值（受控模式）
   */
  value?: Date | null;

  /** 
   * 默认选中值（非受控模式）
   */
  defaultValue?: Date | null;

  /** 
   * 选择器类型
   * @default "date"
   */
  type?: DatePickerType;

  /** 
   * 语言设置
   * @default "zh"
   */
  language?: "zh" | "en";

  /** 
   * 尺寸
   * @default "default"
   */
  size?: DatePickerSize;

  /** 
   * 变体样式
   * @default "filled"
   */
  variant?: DatePickerVariant;

  // ─── 日期范围 ───
  /** 
   * 最小可选日期
   */
  minDate?: DateInput;

  /** 
   * 最大可选日期
   */
  maxDate?: DateInput;

  /** 
   * 禁用日期判断函数
   */
  disabledDate?: (date: Date) => boolean;

  // ─── 显示配置 ───
  /** 
   * 占位符文本
   */
  placeholder?: string;

  /** 
   * 日期格式化字符串或函数
   * 字符串支持: YYYY、MM、DD、Q、W 等占位符
   * 函数: (date: Date, type: DatePickerType) => string
   */
  format?: string | DateFormatter;

  /** 
   * 是否显示清除按钮
   * @default true
   */
  allowClear?: boolean;

  /** 
   * 是否允许直接输入（仅 date 类型）
   * @default false
   */
  allowInput?: boolean;

  /** 
   * 是否显示确认按钮
   * @default false
   */
  showConfirm?: boolean;

  /** 
   * 确认按钮文本
   */
  confirmText?: string;

  /** 
   * 取消按钮文本
   */
  cancelText?: string;

  /** 
   * 是否显示今天按钮
   * @default false
   */
  showToday?: boolean;

  /** 
   * 今天按钮文本
   */
  todayText?: string;

  /** 
   * 是否显示图标
   * @default true
   */
  showIcon?: boolean;

  /** 
   * 自定义图标
   */
  icon?: React.ReactNode;

  /** 
   * 自定义后缀图标
   */
  suffixIcon?: React.ReactNode;

  // ─── 状态控制 ───
  /** 
   * 是否禁用
   * @default false
   */
  disabled?: boolean;

  /** 
   * 是否只读
   * @default false
   */
  readOnly?: boolean;

  /** 
   * 下拉框是否打开（受控）
   */
  open?: boolean;

  /** 
   * 默认下拉框是否打开
   */
  defaultOpen?: boolean;

  /** 
   * 自动获取焦点
   * @default false
   */
  autoFocus?: boolean;

  // ─── 事件回调 ───
  /** 
   * 值变化回调
   */
  onChange?: (value: Date | null, info?: DateInfo | WeekInfo | MonthInfo | QuarterInfo | YearInfo) => void;

  /** 
   * 下拉框打开/关闭回调
   */
  onOpenChange?: (open: boolean) => void;

  /** 
   * 面板变化回调（切换年月时触发）
   */
  onPanelChange?: (date: Date, mode: CalendarViewMode) => void;

  /** 
   * 聚焦回调
   */
  onFocus?: (e: React.FocusEvent) => void;

  /** 
   * 失焦回调
   */
  onBlur?: (e: React.FocusEvent) => void;

  /** 
   * 清除回调
   */
  onClear?: () => void;

  /** 
   * 确认回调
   */
  onConfirm?: (value: Date | null) => void;

  // ─── 子组件属性透传 ───
  /** 
   * Dropdown 组件属性
   */
  dropdownProps?: Partial<DropdownProps>;

  /** 
   * Input 组件属性
   */
  inputProps?: Partial<InputProps>;

  /** 
   * Calendar 组件属性
   */
  calendarProps?: Partial<CalendarProps>;

  // ─── 样式属性 ───
  /** 
   * 输入框宽度
   */
  width?: number | string;

  /**
   * 宽度自适应内容
   * 当为 true 时，输入框宽度会根据选中值自动调整
   * @default false
   */
  autoWidth?: boolean;

  /**
   * autoWidth 模式下的最小宽度
   * @default 120
   */
  minWidth?: number | string;

  /** 
   * 自定义样式
   */
  style?: CSSProperties;

  /** 
   * 自定义类名
   */
  className?: string;

  /** 
   * 自定义下拉框样式
   */
  dropdownStyle?: CSSProperties;

  /** 
   * 自定义下拉框类名
   */
  dropdownClassName?: string;

  /** 
   * 子元素（自定义触发器）
   */
  children?: React.ReactNode;
}

/**
 * 默认属性值
 */
export const defaultDatePickerProps: Partial<DatePickerProps> = {
  type: "date",
  language: "zh",
  size: "default",
  variant: "filled",
  allowClear: true,
  allowInput: false,
  showConfirm: false,
  showToday: false,
  showIcon: true,
  disabled: false,
  readOnly: false,
  autoFocus: false,
  autoWidth: false,
  minWidth: 120,
};

// ==================== 工具函数 ====================

/**
 * 根据类型获取默认占位符
 */
export function getDefaultPlaceholder(type: DatePickerType, language: "zh" | "en"): string {
  const placeholders: Record<DatePickerType, { zh: string; en: string }> = {
    date: { zh: "请选择日期", en: "Select date" },
    week: { zh: "请选择周", en: "Select week" },
    month: { zh: "请选择月份", en: "Select month" },
    quarter: { zh: "请选择季度", en: "Select quarter" },
    year: { zh: "请选择年份", en: "Select year" },
  };
  return placeholders[type][language];
}

/**
 * 默认日期格式化函数
 */
export function defaultFormatDate(date: Date, type: DatePickerType, language: "zh" | "en"): string {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();

  switch (type) {
    case "year":
      return language === "zh" ? `${year}年` : `${year}`;
    case "month":
      return language === "zh" ? `${year}年${month}月` : `${year}-${month.toString().padStart(2, "0")}`;
    case "quarter":
      const quarter = Math.ceil(month / 3);
      return language === "zh" ? `${year}年第${quarter}季度` : `${year} Q${quarter}`;
    case "week":
      const startOfYear = new Date(year, 0, 1);
      const days = Math.floor((date.getTime() - startOfYear.getTime()) / (24 * 60 * 60 * 1000));
      const weekNumber = Math.ceil((days + startOfYear.getDay() + 1) / 7);
      return language === "zh" ? `${year}年第${weekNumber}周` : `${year} W${weekNumber}`;
    case "date":
    default:
      return `${year}-${month.toString().padStart(2, "0")}-${day.toString().padStart(2, "0")}`;
  }
}

/**
 * 解析用户输入的日期字符串
 */
export function parseInputDate(input: string): Date | null {
  if (!input.trim()) return null;

  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth() + 1;

  // 支持多种日期格式
  const patterns = [
    // YYYY-MM-DD
    { pattern: /^(\d{4})-(\d{1,2})-(\d{1,2})$/, extract: (m: RegExpMatchArray) => ({ year: +m[1], month: +m[2], day: +m[3] }) },
    // YYYY/MM/DD
    { pattern: /^(\d{4})\/(\d{1,2})\/(\d{1,2})$/, extract: (m: RegExpMatchArray) => ({ year: +m[1], month: +m[2], day: +m[3] }) },
    // YYYY年MM月DD日
    { pattern: /^(\d{4})年(\d{1,2})月(\d{1,2})日$/, extract: (m: RegExpMatchArray) => ({ year: +m[1], month: +m[2], day: +m[3] }) },
    // YYYY年MM月
    { pattern: /^(\d{4})年(\d{1,2})月$/, extract: (m: RegExpMatchArray) => ({ year: +m[1], month: +m[2], day: 1 }) },
    // YYYY年
    { pattern: /^(\d{4})年$/, extract: (m: RegExpMatchArray) => ({ year: +m[1], month: 1, day: 1 }) },
    // MM月DD日
    { pattern: /^(\d{1,2})月(\d{1,2})日$/, extract: (m: RegExpMatchArray) => ({ year: currentYear, month: +m[1], day: +m[2] }) },
    // DD日
    { pattern: /^(\d{1,2})日$/, extract: (m: RegExpMatchArray) => ({ year: currentYear, month: currentMonth, day: +m[1] }) },
  ];

  for (const { pattern, extract } of patterns) {
    const match = input.match(pattern);
    if (match) {
      try {
        const { year, month, day } = extract(match);
        const date = new Date(year, month - 1, day);
        if (date.getFullYear() === year && date.getMonth() === month - 1 && date.getDate() === day) {
          return date;
        }
      } catch {
        continue;
      }
    }
  }

  return null;
}

// ==================== 兼容旧 API ====================

/** @deprecated 使用 DatePickerType 代替 */
export type PickerType = DatePickerType;

/** @deprecated 使用 DatePickerProps 的子接口组合 */
export interface DatePickerBaseProps extends CommonProps {
  clearable?: boolean;
  pickerType?: PickerType;
  children?: React.ReactNode;
  value?: Date | string | null;
  placeholder?: string;
  showConfirmButton?: boolean;
  allowInput?: boolean;
}

/** @deprecated */
export interface DatePickerDisplayProps {
  disabled?: boolean;
}

/** @deprecated */
export interface DatePickerStyleProps {
  style?: CSSProperties;
  className?: string;
}

/** @deprecated */
export interface DatePickerEventProps {
  onChange?: (value: Date | null) => void;
}
