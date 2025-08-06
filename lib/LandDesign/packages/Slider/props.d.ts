import { default as React, CSSProperties } from 'react';
import { CommonProps } from '../types';
/**
 * Slider组件属性类型定义
 * 包含所有Slider组件支持的属性及其详细说明
 */
/**
 * Slider基础属性
 * 包含滑块的基本配置和内容属性
 */
export interface SliderBaseProps extends CommonProps {
    /**
     * 子元素
     * 可以传入React节点作为滑块的内容
     */
    children?: React.ReactNode;
    /**
     * 输入值
     * 支持单个值或范围值 [min, max]
     */
    value?: number | [number, number];
}
/**
 * Slider功能属性
 * 用于配置滑块的功能特性
 */
export interface SliderFeatureProps {
    /**
     * 最小值
     * 设置滑块的最小值
     */
    min?: number;
    /**
     * 最大值
     * 设置滑块的最大值
     */
    max?: number;
    /**
     * 调节步数
     * 滑块移动的步长
     */
    step?: number;
    /**
     * 是否为范围选择器
     * 设置为true时支持选择范围值
     */
    range?: boolean;
}
/**
 * Slider显示属性
 * 用于配置滑块的显示方式
 */
export interface SliderDisplayProps {
    /**
     * 是否需要背景分割线
     * 设置为true时会显示背景分割线
     */
    useDivider?: boolean;
    /**
     * 前缀
     * 可以传入React节点作为滑块的前缀
     */
    prefix?: React.ReactNode;
    /**
     * 后缀
     * 可以传入React节点作为滑块的后缀
     */
    suffix?: React.ReactNode;
    /**
     * 是否显示气泡提示
     * 设置为true时会显示当前值的气泡提示
     */
    showTooltip?: boolean;
    /**
     * 气泡提示位置
     * 设置气泡提示的显示位置
     */
    tooltipPlacement?: 'top' | 'bottom';
    /**
     * 自定义气泡内容格式化函数
     * 可以自定义气泡中显示的内容格式
     */
    tooltipFormatter?: (value: number) => string;
}
/**
 * Slider尺寸属性
 * 用于配置滑块的尺寸
 */
export interface SliderSizeProps {
    /**
     * 控件高度
     * 设置滑块的高度
     */
    height?: number;
    /**
     * 滑块大小
     * 设置滑块拖拽手柄的大小
     */
    thumbSize?: number;
}
/**
 * Slider颜色属性
 * 用于配置滑块的颜色
 */
export interface SliderColorProps {
    /**
     * 默认背景色
     * 设置滑块的默认背景颜色
     */
    defaultBg?: string;
    /**
     * 激活背景色
     * 设置滑块激活状态的背景颜色
     */
    activeBg?: string;
}
/**
 * Slider样式属性
 * 用于配置滑块的视觉样式
 */
export interface SliderStyleProps {
    /**
     * 自定义样式
     * 可以传入CSS样式对象来自定义滑块外观
     */
    style?: CSSProperties;
    /**
     * 自定义类名
     * 可以传入额外的CSS类名
     */
    className?: string;
}
/**
 * Slider事件属性
 * 用于配置滑块的交互事件
 */
export interface SliderEventProps {
    /**
     * 值变化事件
     * 当滑块值发生变化时触发
     * @param val 新的值，可能是单个值或范围值
     */
    onChange?: (val: number | [number, number]) => void;
    /**
     * 开始拖拽事件
     * 当开始拖拽滑块时触发
     */
    onStart?: () => void;
    /**
     * 结束拖拽事件
     * 当结束拖拽滑块时触发
     */
    onEnd?: () => void;
}
/**
 * Slider组件完整属性类型
 * 合并了所有属性接口
 */
export type SliderProps = SliderBaseProps & SliderFeatureProps & SliderDisplayProps & SliderSizeProps & SliderColorProps & SliderStyleProps & SliderEventProps;
/**
 * 属性优先级说明：
 * 1. value控制滑块的当前值
 * 2. min和max限制滑块的值范围
 * 3. step控制滑块移动的步长
 * 4. range控制是否为范围选择器
 * 5. useDivider控制是否显示背景分割线
 * 6. prefix和suffix显示前缀和后缀
 * 7. showTooltip控制是否显示气泡提示
 * 8. tooltipPlacement控制气泡提示位置
 * 9. tooltipFormatter自定义气泡内容格式
 * 10. height和thumbSize控制滑块尺寸
 * 11. defaultBg和activeBg控制颜色
 * 12. onChange处理值变化事件
 * 13. onStart和onEnd处理拖拽开始和结束事件
 * 14. 当range为true时，value应该是数组格式
 */ 
