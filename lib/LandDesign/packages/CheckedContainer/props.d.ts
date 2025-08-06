import { default as React, CSSProperties } from 'react';
import { CommonProps } from '../types';
/**
 * CheckedContainer组件属性类型定义
 * 包含所有CheckedContainer组件支持的属性及其详细说明
 */
/**
 * CheckedContainer基础属性
 * 包含选中容器的基本配置和内容属性
 */
export interface CheckedContainerBaseProps extends CommonProps {
    /**
     * 是否选中
     * 控制容器的选中状态，影响视觉样式
     */
    checked?: boolean;
    /**
     * 子元素
     * 可以传入React节点作为容器的内容
     */
    children?: React.ReactNode;
}
/**
 * CheckedContainer样式属性
 * 用于配置选中容器的视觉样式
 */
export interface CheckedContainerStyleProps {
    /**
     * 自定义样式
     * 可以传入CSS样式对象来自定义容器外观
     */
    style?: CSSProperties;
    /**
     * 自定义类名
     * 可以传入额外的CSS类名
     */
    className?: string;
    /**
     * 容器间距
     * 设置容器内部元素之间的间距
     */
    gap?: number;
    /**
     * 边框宽度
     * 设置容器边框的宽度
     */
    strokeWidth?: number;
    /**
     * 圆角半径
     * 设置容器边框的圆角半径
     */
    radius?: number;
}
/**
 * CheckedContainer组件完整属性类型
 * 合并了所有属性接口
 */
export type CheckedContainerProps = CheckedContainerBaseProps & CheckedContainerStyleProps;
/**
 * 属性优先级说明：
 * 1. checked属性控制容器的选中状态，影响视觉样式
 * 2. children是容器的主要内容
 * 3. gap设置容器内部元素之间的间距
 * 4. strokeWidth控制边框宽度
 * 5. radius控制边框圆角
 * 6. style和className会覆盖默认样式
 * 7. 当checked为true时，容器会显示选中状态的样式
 * 8. 样式属性的优先级：style > strokeWidth/radius > 默认样式
 */ 
