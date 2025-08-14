import { default as React, CSSProperties } from 'react';
import { CommonProps } from '../types';
/**
 * Statistic组件属性类型定义
 * 包含所有Statistic组件支持的属性及其详细说明
 */
/** 趋势图标类型 */
export type StatisticTrendIcon = "up" | "down" | "default";
/** 动画类型 */
export type StatisticAnimation = "increase" | "decrease" | "random" | "bounce" | "fade" | "slide" | "scale" | "flip" | "none";
/** 缓动函数类型 */
export type StatisticEasing = "linear" | "easeIn" | "easeOut" | "easeInOut" | "bounce" | "elastic";
/** 动画配置 */
export interface StatisticAnimationConfig {
    /** 动画持续时间（毫秒） */
    duration?: number;
    /** 缓动函数 */
    easing?: StatisticEasing;
    /** 延迟时间（毫秒） */
    delay?: number;
    /** 是否循环播放 */
    loop?: boolean;
    /** 循环间隔（毫秒） */
    loopInterval?: number;
}
/**
 * Statistic基础属性
 * 包含统计组件的基本配置和内容属性
 */
export interface StatisticBaseProps extends CommonProps {
    /**
     * 子元素
     * 可以传入React节点作为统计组件的内容
     */
    children?: React.ReactNode;
    /**
     * 数值
     * 要显示的统计数值
     */
    value?: number;
    /**
     * 精度
     * 数值的小数位数
     */
    precision?: number;
}
/**
 * Statistic内容属性
 * 用于配置统计组件的显示内容
 */
export interface StatisticContentProps {
    /**
     * 前缀
     * 可以传入React节点作为数值的前缀
     */
    prefix?: React.ReactNode;
    /**
     * 后缀
     * 可以传入React节点作为数值的后缀
     */
    suffix?: React.ReactNode;
    /**
     * 单位
     * 数值的单位，如"%"、"元"等
     */
    unit?: string;
}
/**
 * Statistic装饰属性
 * 用于配置统计组件的装饰元素
 */
export interface StatisticDecorationProps {
    /**
     * 趋势图标
     * - up: 上升趋势
     * - down: 下降趋势
     * - default: 默认状态
     */
    trendIcon?: StatisticTrendIcon;
    /**
     * 动画效果
     * - increase: 增长动画
     * - decrease: 减少动画
     * - random: 随机数字滚动动画
     * - bounce: 弹跳动画
     * - fade: 淡入淡出动画
     * - slide: 滑动动画
     * - scale: 缩放动画
     * - flip: 翻转动画
     * - none: 无动画
     */
    animation?: StatisticAnimation;
    /**
     * 动画配置
     * 可以自定义动画的持续时间、缓动函数等
     */
    animationConfig?: StatisticAnimationConfig;
}
/**
 * Statistic样式属性
 * 用于配置统计组件的视觉样式
 */
export interface StatisticStyleProps {
    /**
     * 自定义样式
     * 可以传入CSS样式对象来自定义统计组件外观
     */
    style?: CSSProperties;
    /**
     * 自定义类名
     * 可以传入额外的CSS类名
     */
    className?: string;
}
/**
 * Statistic组件完整属性类型
 * 合并了所有属性接口
 */
export type StatisticProps = StatisticBaseProps & StatisticContentProps & StatisticDecorationProps & StatisticStyleProps;
/**
 * 属性优先级说明：
 * 1. value是要显示的主要数值
 * 2. prefix和suffix分别显示在数值的前后
 * 3. unit显示数值的单位
 * 4. trendIcon显示趋势指示图标
 * 5. animation控制数值变化的动画效果
 * 6. animationConfig可以自定义动画参数
 * 7. precision控制数值的精度显示
 * 8. style和className会覆盖默认样式
 * 9. 显示顺序：prefix + value + unit + suffix + trendIcon
 * 10. 当value为undefined时，组件可能显示占位符
 * 11. animation通常与value的变化配合使用
 * 12. trendIcon和animation可以同时使用增强视觉效果
 */ 
