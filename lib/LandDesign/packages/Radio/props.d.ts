import { default as React, CSSProperties } from 'react';
import { CommonProps } from '../types';
/**
 * Radio组件属性类型定义
 * 包含所有Radio组件支持的属性及其详细说明
 */
/**
 * Radio基础属性
 * 包含单选框的基本配置和交互属性
 */
export interface RadioBaseProps extends CommonProps {
    /**
     * 单选框标签
     * 显示在单选框旁边的文本内容
     */
    label: string;
    /**
     * 是否选中
     * 控制单选框的选中状态
     */
    checked?: boolean;
    /**
     * 是否禁用
     * 设置为true时单选框不可点击
     */
    disabled?: boolean;
    /**
     * 是否启用动画效果
     * 控制选中时的动画效果，默认为true
     */
    animated?: boolean;
}
/**
 * Radio提示属性
 * 用于配置单选框的提示信息
 */
export interface RadioTipProps {
    /**
     * 整个选项提示内容
     * 可以传入React节点作为整个选项的提示信息
     */
    tip?: React.ReactNode;
    /**
     * 图标提示内容
     * 可以传入React节点作为图标的提示信息
     */
    iconTip?: React.ReactNode;
}
/**
 * Radio样式属性
 * 用于配置单选框的视觉样式
 */
export interface RadioStyleProps {
    /**
     * 自定义样式
     * 可以传入CSS样式对象来自定义单选框外观
     */
    style?: CSSProperties;
    /**
     * 自定义类名
     * 可以传入额外的CSS类名
     */
    className?: string;
}
/**
 * Radio事件属性
 * 用于配置单选框的交互事件
 */
export interface RadioEventProps {
    /**
     * 点击事件
     * 当单选框被点击时触发
     * @param e 鼠标事件对象
     */
    onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
}
/**
 * Radio组件完整属性类型
 * 合并了所有属性接口
 */
export type RadioProps = RadioBaseProps & RadioTipProps & RadioStyleProps & RadioEventProps;
/**
 * 属性优先级说明：
 * 1. label是必需属性，用于显示单选框的文本内容
 * 2. checked和onClick配合使用实现受控组件
 * 3. disabled属性会禁用所有交互功能
 * 4. tip和iconTip分别用于不同位置的提示信息
 * 5. style和className会覆盖默认样式
 * 6. 当disabled为true时，onClick事件不会触发
 */ 
