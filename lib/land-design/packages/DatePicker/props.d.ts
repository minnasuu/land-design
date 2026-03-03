import { default as React, CSSProperties } from 'react';
import { CommonProps } from '../types';
import { DropdownProps } from '../Dropdown/props';
import { InputProps } from '../Input/props';
import { CalendarProps, CalendarViewMode, DateInfo, WeekInfo, MonthInfo, QuarterInfo, YearInfo } from '../Calendar/props';
import { DateInput } from '../Calendar/utils/dateRange';
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
/**
 * DatePicker 组件属性
 */
export interface DatePickerProps extends CommonProps {
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
export declare const defaultDatePickerProps: Partial<DatePickerProps>;
/**
 * 根据类型获取默认占位符
 */
export declare function getDefaultPlaceholder(type: DatePickerType, language: "zh" | "en"): string;
/**
 * 默认日期格式化函数
 */
export declare function defaultFormatDate(date: Date, type: DatePickerType, language: "zh" | "en"): string;
/**
 * 解析用户输入的日期字符串
 */
export declare function parseInputDate(input: string): Date | null;
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
