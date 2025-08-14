import { default as React, MouseEvent, CSSProperties } from 'react';
import { PopOverProps } from '../PopOver/props';
import { CommonProps } from '../types';
/**
 * Link组件属性类型定义
 * 包含所有Link组件支持的属性及其详细说明
 */
/** 链接状态 */
export type LinkStatus = "default" | "primary" | "success" | "danger" | "warning";
/** 链接目标 */
export type LinkTarget = "_self" | "_blank" | "_parent" | "_top";
/** 链接尺寸 */
export type LinkSize = "mini" | "small" | "default" | "large";
/**
 * Link基础属性
 * 包含链接的基本配置和交互属性
 */
export interface LinkBaseProps extends CommonProps {
    /**
     * 链接地址
     * 链接的目标URL地址
     */
    href?: string;
    /**
     * 链接打开方式
     * - _self: 在当前窗口打开（默认）
     * - _blank: 在新窗口打开
     * - _parent: 在父窗口打开
     * - _top: 在顶层窗口打开
     */
    target?: LinkTarget;
    /**
     * 链接锚点
     * 链接的锚点
     */
    anchor?: string;
    /**
     * 是否禁用
     * 设置为true时链接不可点击
     */
    disabled?: boolean;
    /**
     * 子元素
     * 可以传入React节点作为链接内容
     */
    children?: React.ReactNode;
}
/**
 * Link样式属性
 * 用于配置链接的视觉样式
 */
export interface LinkStyleProps {
    /**
     * 自定义样式
     * 可以传入CSS样式对象来自定义链接外观
     */
    style?: CSSProperties;
    /**
     * 自定义类名
     * 可以传入额外的CSS类名
     */
    className?: string;
    /**
     * 链接状态样式
     * - default: 默认状态
     * - primary: 主要状态
     * - success: 成功状态
     * - danger: 危险状态
     * - warning: 警告状态
     */
    status?: LinkStatus;
    /**
     * 链接尺寸
     * - mini: 迷你尺寸
     * - small: 小尺寸
     * - default: 默认尺寸
     * - large: 大尺寸
     */
    size?: LinkSize;
    /**
     * 是否显示下划线
     * 设置为true时会显示下划线
     */
    underline?: boolean;
    /**
     * 悬停时是否显示下划线
     * 设置为true时鼠标悬停会显示下划线
     */
    hoverUnderline?: boolean;
}
/**
 * Link图标属性
 * 用于配置链接的图标
 */
export interface LinkIconProps {
    /**
     * 前缀图标
     * 为true时显示默认图标，为ReactNode时显示自定义图标
     */
    prefixIcon?: boolean | React.ReactNode;
    /**
     * 后缀图标
     * 为true时显示默认图标，为ReactNode时显示自定义图标
     */
    suffixIcon?: boolean | React.ReactNode;
}
/**
 * Link提示属性
 * 用于配置链接的提示气泡
 */
export interface LinkTipProps {
    /**
     * 气泡内容
     * 可以传入字符串或React节点作为气泡显示内容
     */
    tip?: React.ReactNode | string;
    /**
     * 气泡配置
     * 可以传入PopOver组件的配置属性
     */
    tipProps?: PopOverProps;
}
/**
 * Link事件属性
 * 用于配置链接的交互事件
 */
export interface LinkEventProps {
    /**
     * 点击事件处理函数
     * 当链接被点击时触发
     * @param e 鼠标事件对象
     */
    onClick?: (e: MouseEvent<HTMLAnchorElement>) => void;
}
/**
 * Link组件完整属性类型
 * 合并了所有属性接口
 */
export type LinkProps = LinkBaseProps & LinkStyleProps & LinkIconProps & LinkTipProps & LinkEventProps;
/**
 * LinkWave组件属性
 * 扩展了Link组件的动画效果
 */
export interface LinkWaveProps extends LinkProps {
    /**
     * 是否启用动画效果
     * 设置为true时会显示点击动画效果
     */
    animation?: boolean;
    /**
     * 是否启用变换效果
     * 设置为true时会显示悬停变换效果
     */
    transform?: boolean;
}
/**
 * 属性优先级说明：
 * 1. href和target配合使用控制链接的跳转行为
 * 2. disabled属性会禁用所有交互功能
 * 3. status和size分别控制链接的状态和尺寸样式
 * 4. underline和hoverUnderline控制下划线的显示
 * 5. prefixIcon和suffixIcon可以添加图标装饰
 * 6. tip和tipProps配合使用显示提示气泡
 * 7. onClick事件在链接点击时触发
 * 8. animation和transform在LinkWave组件中提供动画效果
 * 9. style和className会覆盖默认样式
 * 10. 当disabled为true时，onClick事件不会触发
 */ 
