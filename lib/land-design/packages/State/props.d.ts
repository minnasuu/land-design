import { default as React, CSSProperties, MouseEvent } from 'react';
import { CommonProps } from '../types';
import { ButtonProps } from '../Button/props';
import { LinkProps } from '../Link/props';
/**
 * State组件属性类型定义
 * 包含所有State组件支持的属性及其详细说明
 */
/** 状态类型 */
export type StateType = "empty" | "offline";
/**
 * State基础属性
 * 包含状态组件的基本配置和内容属性
 */
export interface StateBaseProps extends CommonProps {
    /**
     * 子元素
     * 可以传入React节点作为状态组件的内容
     */
    children?: React.ReactNode;
    /**
     * 类型
     * - empty: 空状态
     * - offline: 离线状态
     */
    type?: StateType;
    /**
     * 标题
     * 可以传入字符串或React节点作为状态标题
     */
    title: React.ReactNode | string;
}
/**
 * State内容属性
 * 用于配置状态组件的显示内容
 */
export interface StateContentProps {
    /**
     * 副标题
     * 可以传入字符串或React节点作为状态副标题
     */
    subTitle?: React.ReactNode | string;
    /**
     * 标题链接
     * 标题的链接地址
     */
    titleLink?: string;
    /**
     * 副标题链接
     * 副标题的链接地址
     */
    subTitleLink?: string;
    /**
     * 按钮文本
     * 状态组件中按钮的文本
     */
    button?: string;
    /**
     * 空状态组件中图标
     * 空状态组件中图标的名称
     */
    emptyIcon?: string;
    /**
     * 图标
     * 断网状态组件中图标
     */
    offlineIcon?: string;
}
/**
 * State样式属性
 * 用于配置状态组件的视觉样式
 */
export interface StateStyleProps {
    /**
     * 自定义样式
     * 可以传入CSS样式对象来自定义状态组件外观
     */
    style?: CSSProperties;
    /**
     * 自定义类名
     * 可以传入额外的CSS类名
     */
    className?: string;
}
/**
 * State事件属性
 * 用于配置状态组件的交互事件
 */
export interface StateEventProps {
    /**
     * 标题链接点击事件
     * 当标题链接被点击时触发
     * @param e 事件对象
     */
    onTiTleLinkClick?: (e: MouseEvent) => void;
    /**
     * 副标题链接点击事件
     * 当副标题链接被点击时触发
     * @param e 事件对象
     */
    onSubTitleLinkClick?: (e: MouseEvent) => void;
    /**
     * 按钮点击事件
     * 当按钮被点击时触发
     * @param e 事件对象
     */
    onButtonClick?: (e: MouseEvent) => void;
}
interface ComponentProps {
    buttonProps?: ButtonProps;
    titleLinkProps?: LinkProps;
    subTitleLinkProps?: LinkProps;
}
/**
 * State组件完整属性类型
 * 合并了所有属性接口
 */
export type StateProps = StateBaseProps & StateContentProps & StateStyleProps & StateEventProps & ComponentProps;
export {};
/**
 * 属性优先级说明：
 * 1. type控制状态组件的类型和样式
 * 2. title是状态组件的主要标题
 * 3. subTitle是状态组件的次要标题
 * 4. titleLink和subTitleLink提供链接功能
 * 5. button提供按钮文本
 * 6. onTiTleLinkClick和onSubTitleLinkClick处理链接点击
 * 7. style和className会覆盖默认样式
 * 8. 当type为empty时，显示空状态样式
 * 9. 当type为offline时，显示离线状态样式
 * 10. 组件支持自定义图标和描述文本
 */ 
