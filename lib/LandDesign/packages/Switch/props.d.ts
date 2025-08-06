import { default as React, CSSProperties } from 'react';
import { CommonProps } from '../types';
import { PopOverProps } from '../PopOver/props';
/**
 * Switch组件属性类型定义
 * 包含所有Switch组件支持的属性及其详细说明
 */
/**
 * Switch基础属性
 * 包含开关的基本配置和内容属性
 */
export interface SwitchBaseProps extends CommonProps {
    /**
     * 子元素
     * 可以传入React节点作为开关的内容
     */
    children?: React.ReactNode;
    /**
     * 是否开启
     * 控制开关的开启状态
     */
    checked?: boolean;
}
/**
 * Switch内容属性
 * 用于配置开关的显示内容
 */
export interface SwitchContentProps {
    /**
     * 描述文字
     * 开关的描述文本
     */
    label?: string;
    /**
     * 开启后的描述文字
     * 开关开启状态下的描述文本
     */
    checkedLabel?: string;
    /**
     * 默认图标
     * 可以传入React节点作为默认状态的图标
     */
    icon?: React.ReactNode;
    /**
     * 开启后的图标
     * 可以传入React节点作为开启状态的图标
     */
    checkedIcon?: React.ReactNode;
}
/**
 * Switch提示属性
 * 用于配置开关的提示信息
 */
export interface SwitchTipProps {
    /**
     * 整体提示内容
     * 可以传入React节点作为整体的提示信息
     */
    tip?: React.ReactNode;
    /**
     * 图标提示内容
     * 可以传入React节点作为图标的提示信息
     */
    iconTip?: React.ReactNode;
    /**
     * 提示内容属性
     * 可以传入PopOverProps来配置整体提示
     */
    tipProps?: PopOverProps;
    /**
     * 图标提示内容属性
     * 可以传入PopOverProps来配置图标提示
     */
    iconTipProps?: PopOverProps;
}
/**
 * Switch显示属性
 * 用于配置开关的显示方式
 */
export interface SwitchDisplayProps {
    /**
     * 暗黑模式
     * 设置为true时使用暗黑主题
     */
    dark?: boolean;
    /**
     * 禁用
     * 设置为true时开关不可用
     */
    disabled?: boolean;
}
/**
 * Switch样式属性
 * 用于配置开关的视觉样式
 */
export interface SwitchStyleProps {
    /**
     * 自定义样式
     * 可以传入CSS样式对象来自定义开关外观
     */
    style?: CSSProperties;
    /**
     * 自定义类名
     * 可以传入额外的CSS类名
     */
    className?: string;
}
/**
 * Switch事件属性
 * 用于配置开关的交互事件
 */
export interface SwitchEventProps {
    /**
     * 状态变化事件
     * 当开关状态发生变化时触发
     * @param checked 新的开关状态
     */
    onChange?: (checked: boolean) => void;
}
/**
 * Switch组件完整属性类型
 * 合并了所有属性接口
 */
export type SwitchProps = SwitchBaseProps & SwitchContentProps & SwitchTipProps & SwitchDisplayProps & SwitchStyleProps & SwitchEventProps;
/**
 * 属性优先级说明：
 * 1. checked控制开关的开启状态
 * 2. label和checkedLabel分别显示不同状态的描述
 * 3. icon和checkedIcon分别显示不同状态的图标
 * 4. tip和iconTip提供提示信息
 * 5. tipProps和iconTipProps配置提示的显示方式
 * 6. dark控制是否使用暗黑主题
 * 7. disabled控制开关是否可用
 * 8. onChange处理状态变化事件
 * 9. style和className会覆盖默认样式
 * 10. 当disabled为true时，onChange不会触发
 */ 
