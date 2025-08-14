import { default as React, CSSProperties } from 'react';
import { CommonProps } from '../types';
/**
 * Title组件属性类型定义
 * 包含所有Title组件支持的属性及其详细说明
 */
/** 标题层级 */
export type TitleType = "h1" | "h2" | "h3" | "h4";
/**
 * Title基础属性
 * 包含标题的基本配置和内容属性
 */
export interface TitleBaseProps extends CommonProps {
    /**
     * 子元素
     * 可以传入React节点作为标题的内容
     */
    children?: React.ReactNode;
    /**
     * 标题内容
     * 可以传入字符串或React节点作为标题文本
     */
    title?: string | React.ReactNode;
    /**
     * 标题层级
     * - h1: 一级标题
     * - h2: 二级标题
     * - h3: 三级标题
     * - h4: 四级标题
     */
    type?: TitleType;
}
/**
 * Title装饰属性
 * 用于配置标题的装饰元素
 */
export interface TitleDecorationProps {
    /**
     * 标题前缀
     * 可以传入字符串作为标题的前缀
     */
    prefix?: string;
    /**
     * 标题角标
     * 可以传入字符串或React节点作为标题的角标
     */
    sub?: string | React.ReactNode;
    /**
     * 提示内容
     * 可以传入字符串或React节点作为标题的提示
     */
    tip?: string | React.ReactNode;
}
/**
 * Title样式属性
 * 用于配置标题的视觉样式
 */
export interface TitleStyleProps {
    /**
     * 自定义样式
     * 可以传入CSS样式对象来自定义标题外观
     */
    style?: CSSProperties;
    /**
     * 自定义类名
     * 可以传入额外的CSS类名
     */
    className?: string;
}
/**
 * Title事件属性
 * 用于配置标题的交互事件
 */
export interface TitleEventProps {
    /**
     * 点击事件
     * 当标题被点击时触发
     */
    onClick?: () => void;
}
/**
 * Title组件完整属性类型
 * 合并了所有属性接口
 */
export type TitleProps = TitleBaseProps & TitleDecorationProps & TitleStyleProps & TitleEventProps;
/**
 * 属性优先级说明：
 * 1. title和children都可以作为标题内容，title优先级更高
 * 2. type控制标题的HTML标签和样式层级
 * 3. prefix在标题前添加前缀文本
 * 4. sub在标题后添加角标内容
 * 5. tip提供额外的提示信息
 * 6. onClick处理标题的点击事件
 * 7. style和className会覆盖默认样式
 * 8. 当title和children同时存在时，优先使用title
 * 9. type会影响标题的字体大小和权重
 * 10. 组件支持多种装饰元素的组合使用
  */ 
