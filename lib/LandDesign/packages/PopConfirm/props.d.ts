import { default as React, CSSProperties } from 'react';
import { CommonProps } from '../types';
import { ButtonProps } from '../Button/props';
/**
 * PopConfirm组件属性类型定义
 * 包含所有PopConfirm组件支持的属性及其详细说明
 */
/** 气泡确认框类型 */
export declare enum PopConfirmType {
    /** 背景样式 */
    BG = "background",
    /** 边框样式 */
    BORDER = "border"
}
/** 气泡位置 */
export type PopConfirmPlacement = "top" | "bottom" | "left" | "right";
/** 颜色主题 */
export type PopConfirmTheme = "light" | "dark";
/**
 * PopConfirm基础属性
 * 包含气泡确认框的基本配置和内容属性
 */
export interface PopConfirmBaseProps extends CommonProps {
    /**
     * 子元素
     * 气泡确认框的触发元素
     */
    children?: React.ReactNode;
    /**
     * 是否直接显示
     * 控制气泡确认框的显示状态
     */
    show?: boolean;
}
/**
 * PopConfirm显示属性
 * 用于配置气泡确认框的显示方式
 */
export interface PopConfirmDisplayProps {
    /**
     * 样式
     * 气泡确认框的视觉样式
     */
    type?: PopConfirmType;
    /**
     * 颜色模式
     * - light: 浅色主题（默认）
     * - dark: 深色主题
     */
    theme?: PopConfirmTheme;
    /**
     * 气泡内容
     * 可以传入React节点作为气泡的显示内容
     */
    content?: React.ReactNode;
    /**
     * 气泡位置
     * - top: 上方显示
     * - bottom: 下方显示
     * - left: 左侧显示
     * - right: 右侧显示
     */
    placement?: PopConfirmPlacement;
    /**
     * 是否隐藏气泡箭头
     * 设置为true时会隐藏气泡的箭头指示器
     */
    hideArrow?: boolean;
    cancelLabel?: string;
    submitLabel?: string;
}
/**
 * PopConfirm按钮属性
 * 用于配置气泡确认框的按钮
 */
export interface PopConfirmButtonProps {
    /**
     * 取消按钮扩展属性
     * 可以传入ButtonProps来配置取消按钮
     */
    cancelButtonProps?: ButtonProps;
    /**
     * 确认按钮扩展属性
     * 可以传入ButtonProps来配置确认按钮
     */
    submitButtonProps?: ButtonProps;
}
/**
 * PopConfirm样式属性
 * 用于配置气泡确认框的视觉样式
 */
export interface PopConfirmStyleProps {
    /**
     * 自定义样式
     * 可以传入CSS样式对象来自定义气泡确认框外观
     */
    style?: CSSProperties;
    /**
     * 自定义类名
     * 可以传入额外的CSS类名
     */
    className?: string;
}
/**
 * PopConfirm事件属性
 * 用于配置气泡确认框的交互事件
 */
export interface PopConfirmEventProps {
    /**
     * 取消事件
     * 当取消按钮被点击时触发
     */
    onCancel?: () => void;
    /**
     * 确认事件
     * 当确认按钮被点击时触发
     */
    onSubmit?: () => void;
}
/**
 * PopConfirm组件完整属性类型
 * 合并了所有属性接口
 */
export type PopConfirmProps = PopConfirmBaseProps & PopConfirmDisplayProps & PopConfirmButtonProps & PopConfirmStyleProps & PopConfirmEventProps;
/**
 * 属性优先级说明：
 * 1. show控制气泡确认框的显示状态
 * 2. type控制气泡确认框的视觉样式
 * 3. theme控制颜色主题
 * 4. content设置气泡的显示内容
 * 5. placement控制气泡的显示位置
 * 6. hideArrow控制是否显示箭头
 * 7. cancelButtonProps和submitButtonProps配置按钮
 * 8. onCancel和onSubmit处理用户操作
 * 9. style和className会覆盖默认样式
 * 10. 按钮优先级：自定义按钮属性 > 默认按钮样式
 */ 
