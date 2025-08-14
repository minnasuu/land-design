import { default as React, CSSProperties } from 'react';
import { CommonProps } from '../types';
/**
 * Timeline组件属性类型定义
 * 包含所有Timeline组件支持的属性及其详细说明
 */
/** 时间线方向 */
export type TimelineDirection = "row" | "column";
/**
 * TimelineItem时间线项类型
 * 定义单个时间线项的配置信息
 */
export type TimelineItemType = {
    /**
     * 标题
     * 时间线项的主要标题
     */
    title?: string | React.ReactNode;
    /**
     * 副标题
     * 时间线项的次要标题
     */
    subTitle?: string | React.ReactNode;
    /**
     * 描述
     * 时间线项的详细描述信息
     */
    desc?: string | React.ReactNode;
    /**
     * 自定义图标
     * 可以传入React节点作为时间线项的图标
     */
    icon?: React.ReactNode;
};
/**
 * Timeline基础属性
 * 包含时间线组件的基本配置和内容属性
 */
export interface TimelineBaseProps extends CommonProps {
    /**
     * 子元素
     * 可以传入React节点作为时间线组件的内容
     */
    children?: React.ReactNode;
    /**
     * 数据
     * 包含所有时间线项的配置信息
     */
    data?: TimelineItemType[];
}
/**
 * Timeline布局属性
 * 用于配置时间线组件的布局方式
 */
export interface TimelineLayoutProps {
    /**
     * 方向
     * - row: 水平布局
     * - column: 垂直布局（默认）
     */
    direction?: TimelineDirection;
}
/**
 * Timeline样式属性
 * 用于配置时间线组件的视觉样式
 */
export interface TimelineStyleProps {
    /**
     * 自定义样式
     * 可以传入CSS样式对象来自定义时间线组件外观
     */
    style?: CSSProperties;
    /**
     * 自定义类名
     * 可以传入额外的CSS类名
     */
    className?: string;
    /**
     * 全局自定义图标
     * 可以传入React节点作为所有时间线项的默认图标
     */
    icon?: React.ReactNode;
}
/**
 * Timeline组件完整属性类型
 * 合并了所有属性接口
 */
export type TimelineProps = TimelineBaseProps & TimelineLayoutProps & TimelineStyleProps;
/**
 * 属性优先级说明：
 * 1. data包含所有时间线项的配置信息
 * 2. direction控制时间线的布局方向
 * 3. icon设置全局默认图标
 * 4. 每个TimelineItemType可以有自己的icon，优先级高于全局icon
 * 5. title、subTitle、desc分别显示不同层级的信息
 * 6. style和className会覆盖默认样式
 * 7. 当direction为row时，时间线水平排列
 * 8. 当direction为column时，时间线垂直排列
 * 9. 图标优先级：TimelineItemType.icon > 全局icon > 默认图标
 * 10. 组件支持混合使用data和children
 */ 
