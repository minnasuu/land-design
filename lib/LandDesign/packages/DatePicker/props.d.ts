import { default as React, CSSProperties } from 'react';
import { CommonProps } from '../types';
import { DropdownProps } from '../Dropdown/props';
import { InputProps } from '../Input/props';
import { CalendarProps } from '../Calendar/props';
/**
 * DatePicker组件属性类型定义
 * 包含所有DatePicker组件支持的属性及其详细说明
 */
export type PickerType = "date" | "week" | "month" | "quarter" | "year";
/**
 * DatePicker基础属性
 * 包含日期选择器的基本配置和内容属性
 */
export interface DatePickerBaseProps extends CommonProps {
    /**
     * 是否可清除
     * 设置为true时，日期选择器可以清除
     */
    clearable?: boolean;
    /**
     * 选择器类型
     * 设置为date时，日期选择器可以选择日期
     * 设置为datetime时，日期选择器可以选择日期和时间
     * 设置为time时，日期选择器可以选择时间
     */
    pickerType?: PickerType;
    /**
     * 子元素
     * 可以传入React节点作为日期选择器的内容
     */
    children?: React.ReactNode;
    /**
     * 当前值
     * 可以是Date对象或日期字符串
     */
    value?: Date | string | null;
    /**
     * 占位符文本
     */
    placeholder?: string;
    /**
     * 是否显示确定按钮
     * 设置为true时，选择日期后需要点击确定按钮才确认
     * 设置为false或未设置时，选择日期后直接确认并关闭下拉框
     */
    showConfirmButton?: boolean;
    /**
     * 是否支持直接输入
     * 设置为true时，用户可以直接在输入框中输入日期（仅支持date模式）
     * 支持格式：YYYY-MM-DD、YYYY/MM/DD、YYYY年MM月DD日等
     */
    allowInput?: boolean;
}
/**
 * DatePicker显示属性
 * 用于配置日期选择器的显示方式
 */
export interface DatePickerDisplayProps {
    /**
     * 是否禁用
     * 设置为true时日期选择器完全不可用：
     * - 阻止所有鼠标和键盘交互
     * - 自动关闭已展开的下拉菜单
     * - 不响应输入框的聚焦和输入事件
     * - 不触发任何事件回调（onChange等）
     * - 禁用确认和取消按钮
     */
    disabled?: boolean;
}
/**
 * DatePicker样式属性
 * 用于配置日期选择器的视觉样式
 */
export interface DatePickerStyleProps {
    /**
     * 自定义样式
     * 可以传入CSS样式对象来自定义日期选择器外观
     */
    style?: CSSProperties;
    /**
     * 自定义类名
     * 可以传入额外的CSS类名
     */
    className?: string;
}
/**
 * DatePicker事件属性
 * 用于配置日期选择器的交互事件
 */
export interface DatePickerEventProps {
    /**
     * 变化事件
     * 当日期发生变化时触发
     * @param value 选择的日期值
     */
    onChange?: (value: Date | null) => void;
}
interface RefComponentProps {
    dropdownProps?: DropdownProps;
    inputProps?: InputProps;
    calendarProps?: CalendarProps;
}
/**
 * DatePicker组件完整属性类型
 * 合并了所有属性接口
 */
export type DatePickerProps = DatePickerBaseProps & DatePickerDisplayProps & DatePickerStyleProps & DatePickerEventProps & RefComponentProps;
export {};
/**
 * 属性优先级说明：
 * 1. type控制日期选择器的视觉样式
 * 2. disabled控制日期选择器是否可用
 * 3. onChange处理日期变化事件
 * 4. style和className会覆盖默认样式
 * 5. 当disabled为true时，onChange不会触发
 * 6. 组件基于HTML5的date input实现
 * 7. 支持所有HTML input date的标准属性
 * 8. 样式优先级：style > className > 默认样式
 * 9. 当type为border时，显示边框样式
 * 10. 当type为background时，显示背景样式
 */ 
