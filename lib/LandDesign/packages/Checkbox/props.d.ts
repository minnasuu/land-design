import { default as React, CSSProperties } from 'react';
import { CommonProps } from '../types';
/**
 * Checkbox组件属性类型定义
 * 包含所有Checkbox组件支持的属性及其详细说明
 */
/**
 * Checkbox基础属性
 * 包含复选框的基本配置和交互属性
 */
export interface CheckboxBaseProps extends CommonProps {
    /**
     * 是否选中
     * 控制复选框的选中状态
     */
    checked?: boolean;
    /**
     * 是否半选
     * 控制复选框的半选状态
     */
    indeterminate?: boolean;
    /**
     * 复选框标签
     * 显示在复选框旁边的文本内容
     */
    label?: string;
    /**
     * 是否禁用
     * 设置为true时复选框不可点击
     */
    disabled?: boolean;
    /**
     * 是否启用动画效果
     * 控制选中时的动画效果，默认为true
     */
    animated?: boolean;
}
/**
 * Checkbox提示属性
 * 用于配置复选框的提示信息
 */
export interface CheckboxTipProps {
    /**
     * 提示内容
     * 可以传入字符串作为复选框的提示信息
     */
    tip?: string;
}
/**
 * Checkbox样式属性
 * 用于配置复选框的视觉样式
 */
export interface CheckboxStyleProps {
    /**
     * 自定义样式
     * 可以传入CSS样式对象来自定义复选框外观
     */
    style?: CSSProperties;
    /**
     * 自定义类名
     * 可以传入额外的CSS类名
     */
    className?: string;
}
/**
 * Checkbox事件属性
 * 用于配置复选框的交互事件
 */
export interface CheckboxEventProps {
    /**
     * 状态变化事件
     * 当复选框状态发生变化时触发
     */
    onCheckedChange?: (checked: boolean, e: React.MouseEvent) => void;
}
/**
 * Checkbox组件完整属性类型
 * 合并了所有属性接口
 */
export type CheckboxProps = CheckboxBaseProps & CheckboxTipProps & CheckboxStyleProps & CheckboxEventProps;
/**
 * 属性优先级说明：
 * 1. checked和onChange配合使用实现受控组件
 * 2. label显示在复选框旁边的文本内容
 * 3. disabled属性会禁用所有交互功能
 * 4. tip提供额外的提示信息
 * 5. style和className会覆盖默认样式
 * 6. 当disabled为true时，onChange事件不会触发
 * 7. 当label为空时，复选框只显示图标
 */ 
