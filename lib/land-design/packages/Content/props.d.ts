import { default as React, CSSProperties } from 'react';
import { CommonProps } from '../types';
/**
 * Content组件属性类型定义
 * 包含所有Content组件支持的属性及其详细说明
 */
/**
 * Content基础属性
 * 包含内容组件的基本配置和内容属性
 */
export interface ContentBaseProps extends CommonProps {
    /**
     * 子元素
     * 可以传入React节点或字符串作为内容
     */
    children?: React.ReactNode | string;
}
/**
 * Content样式属性
 * 用于配置内容组件的视觉样式
 */
export interface ContentStyleProps {
    /**
     * 自定义样式
     * 可以传入CSS样式对象来自定义内容组件外观
     */
    style?: CSSProperties;
    /**
     * 自定义类名
     * 可以传入额外的CSS类名
     */
    className?: string;
}
/**
 * Content组件完整属性类型
 * 合并了所有属性接口
 */
export type ContentProps = ContentBaseProps & ContentStyleProps;
/**
 * 属性优先级说明：
 * 1. children是内容组件的主要内容，可以是React节点或字符串
 * 2. style和className会覆盖默认样式
 * 3. 当children为字符串时，会直接渲染为文本内容
 * 4. 当children为React节点时，会渲染为对应的组件
 * 5. 样式优先级：style > className > 默认样式
 * 6. 这是一个通用的内容容器组件，主要用于布局和样式控制
 */ 
