import { CSSProperties, ReactNode } from 'react';
/**
 * Slider 尺寸
 * - small: 小尺寸
 * - default: 默认尺寸
 * - large: 大尺寸
 */
export type SliderSize = "small" | "default" | "large";
/**
 * Slider 方向
 * - horizontal: 水平（默认）
 * - vertical: 垂直
 */
export type SliderOrientation = "horizontal" | "vertical";
/**
 * Tooltip 显示模式
 * - hover: 悬停时显示
 * - always: 始终显示
 * - never: 从不显示
 */
export type SliderTooltipMode = "hover" | "always" | "never";
/**
 * Tooltip 位置
 */
export type SliderTooltipPlacement = "top" | "bottom" | "left" | "right";
/**
 * 刻度标记配置
 */
export interface SliderMark {
    /** 标记值 */
    value: number;
    /** 标记标签 */
    label?: ReactNode;
    /** 标记样式 */
    style?: CSSProperties;
}
/**
 * Slider 基础属性
 */
export interface SliderBaseProps {
    /**
     * 受控模式的当前值
     * @description 单值模式为 number，范围模式为 [number, number]
     */
    value?: number | [number, number];
    /**
     * 非受控模式的默认值
     * @default 0
     */
    defaultValue?: number | [number, number];
    /**
     * 最小值
     * @default 0
     */
    min?: number;
    /**
     * 最大值
     * @default 100
     */
    max?: number;
    /**
     * 步长
     * @description 值的增减步长，需要大于 0
     * @default 1
     */
    step?: number;
    /**
     * 是否为范围选择模式
     * @default false
     */
    range?: boolean;
    /**
     * 表单字段名
     */
    name?: string;
}
/**
 * Slider 外观属性
 */
export interface SliderAppearanceProps {
    /**
     * 尺寸
     * @default "default"
     */
    size?: SliderSize;
    /**
     * 方向
     * @default "horizontal"
     */
    orientation?: SliderOrientation;
    /**
     * 是否显示刻度标记
     * @default false
     */
    showMarks?: boolean;
    /**
     * 刻度标记配置
     * @description 可以是布尔值或标记数组
     */
    marks?: SliderMark[] | boolean;
    /**
     * 是否显示刻度点
     * @default false
     */
    showDots?: boolean;
    /**
     * 是否只能选择刻度值
     * @default false
     */
    included?: boolean;
}
/**
 * Slider Tooltip 属性
 */
export interface SliderTooltipProps {
    /**
     * Tooltip 显示模式
     * @default "hover"
     */
    tooltip?: SliderTooltipMode;
    /**
     * Tooltip 位置
     * @default "top"
     */
    tooltipPlacement?: SliderTooltipPlacement;
    /**
     * Tooltip 格式化函数
     */
    tooltipFormatter?: (value: number) => ReactNode;
}
/**
 * Slider 内容属性
 */
export interface SliderContentProps {
    /**
     * 前缀内容
     */
    prefix?: ReactNode;
    /**
     * 后缀内容
     */
    suffix?: ReactNode;
}
/**
 * Slider 状态属性
 */
export interface SliderStateProps {
    /**
     * 是否禁用
     * @default false
     */
    disabled?: boolean;
    /**
     * 只读模式
     * @default false
     */
    readOnly?: boolean;
}
/**
 * Slider 样式属性
 */
export interface SliderStyleProps {
    /**
     * 自定义类名
     */
    className?: string;
    /**
     * 自定义样式
     */
    style?: CSSProperties;
    /**
     * 轨道自定义类名
     */
    trackClassName?: string;
    /**
     * 轨道自定义样式
     */
    trackStyle?: CSSProperties;
    /**
     * 激活轨道自定义样式
     */
    activeTrackStyle?: CSSProperties;
    /**
     * 滑块自定义类名
     */
    thumbClassName?: string;
    /**
     * 滑块自定义样式
     */
    thumbStyle?: CSSProperties;
}
/**
 * Slider 事件属性
 */
export interface SliderEventProps {
    /**
     * 值变化回调（拖拽过程中持续触发）
     * @param value 当前值
     */
    onChange?: (value: number | [number, number]) => void;
    /**
     * 值变化完成回调（拖拽结束或点击后触发）
     * @param value 最终值
     */
    onChangeComplete?: (value: number | [number, number]) => void;
    /**
     * 获得焦点事件
     */
    onFocus?: (event: React.FocusEvent) => void;
    /**
     * 失去焦点事件
     */
    onBlur?: (event: React.FocusEvent) => void;
}
/**
 * Slider 组件完整属性
 */
export interface SliderProps extends SliderBaseProps, SliderAppearanceProps, SliderTooltipProps, SliderContentProps, SliderStateProps, SliderStyleProps, SliderEventProps {
}
export declare const sliderDefaultProps: Partial<SliderProps>;
