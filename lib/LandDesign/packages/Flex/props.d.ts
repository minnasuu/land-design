import { default as React, CSSProperties } from 'react';
import { CommonProps } from '../types';
/**
 * Flex组件属性类型定义
 * 包含所有Flex组件支持的属性及其详细说明
 */
/** 主轴对齐方式 */
export type FlexJustify = "start" | "center" | "end" | "space-between" | "space-around";
/** 交叉轴对齐方式 */
export type FlexAlign = "start" | "center" | "end" | "baseline";
/**
 * Flex基础属性
 * 包含弹性布局的基本配置和内容属性
 */
export interface FlexBaseProps extends CommonProps {
    /**
     * 子元素
     * 可以传入React节点作为弹性布局的内容
     */
    children?: React.ReactNode;
}
/**
 * Flex布局属性
 * 用于配置弹性布局的方向和对齐方式
 */
export interface FlexLayoutProps {
    /**
     * 是否为竖直方向
     * 设置为true时主轴为垂直方向，false时为水平方向
     */
    column?: boolean;
    /**
     * 是否换行
     * 设置为true时允许元素换行
     */
    wrap?: boolean;
    /**
     * 元素在主轴方向上的对齐方式
     * - start: 起始对齐
     * - center: 居中对齐
     * - end: 结束对齐
     * - space-between: 两端对齐
     * - space-around: 环绕对齐
     */
    justify?: FlexJustify;
    /**
     * 元素在交叉轴方向上的对齐方式
     * - start: 起始对齐
     * - center: 居中对齐
     * - end: 结束对齐
     * - baseline: 基线对齐
     */
    align?: FlexAlign;
    /**
     * 是否同时居中对齐
     * 设置为true时会在主轴和交叉轴都居中对齐
     */
    bothCenter?: boolean;
}
/**
 * Flex尺寸属性
 * 用于配置弹性布局的尺寸
 */
export interface FlexSizeProps {
    /**
     * 容器宽度
     * 设置弹性布局容器的宽度
     */
    width?: string;
    /**
     * 容器高度
     * 设置弹性布局容器的高度
     */
    height?: string;
    /**
     * 元素间隙
     * 设置元素之间的间距，可以是字符串或数字
     */
    gap?: string | number;
}
/**
 * Flex样式属性
 * 用于配置弹性布局的视觉样式
 */
export interface FlexStyleProps {
    /**
     * 自定义样式
     * 可以传入CSS样式对象来自定义弹性布局外观
     */
    style?: CSSProperties;
    /**
     * 自定义类名
     * 可以传入额外的CSS类名
     */
    className?: string;
}
/**
 * Flex组件完整属性类型
 * 合并了所有属性接口
 */
export type FlexProps = FlexBaseProps & FlexLayoutProps & FlexSizeProps & FlexStyleProps;
/**
 * 属性优先级说明：
 * 1. children是弹性布局的主要内容
 * 2. column控制主轴方向（水平或垂直）
 * 3. wrap控制是否允许换行
 * 4. justify控制主轴对齐方式
 * 5. align控制交叉轴对齐方式
 * 6. bothCenter会同时设置justify和align为center
 * 7. width和height设置容器的尺寸
 * 8. gap设置元素之间的间距
 * 9. style和className会覆盖默认样式
 * 10. 布局优先级：bothCenter > justify/align > 默认对齐
 * 11. 当column为true时，justify控制垂直对齐，align控制水平对齐
 */ 
