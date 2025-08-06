import { default as React, CSSProperties } from 'react';
import { CommonProps } from '../types';
/**
 * Rate组件属性类型定义
 * 包含所有Rate组件支持的属性及其详细说明
 */
/**
 * Rate基础属性
 * 包含评分组件的基本配置和交互属性
 */
export interface RateBaseProps extends CommonProps {
    /**
     * 当前评分值
     * 控制评分组件的当前选中值，范围0到count
     */
    value?: number;
    /**
     * 评分总数
     * 设置评分组件的总星数，默认为5
     */
    count?: number;
}
/**
 * Rate样式属性
 * 用于配置评分组件的视觉样式
 */
export interface RateStyleProps {
    /**
     * 自定义样式
     * 可以传入CSS样式对象来自定义评分组件外观
     */
    style?: CSSProperties;
    /**
     * 自定义类名
     * 可以传入额外的CSS类名
     */
    className?: string;
    /**
     * 默认颜色
     * 未选中状态的星形颜色
     */
    defaultColor?: string;
    /**
     * 激活颜色
     * 选中状态的星形颜色
     */
    activeColor?: string;
}
/**
 * Rate自定义属性
 * 用于配置评分组件的自定义内容
 */
export interface RateCustomProps {
    /**
     * 自定义形状
     * 可以传入React节点作为自定义的评分形状
     * 如果不传入，将使用默认的星形图标
     */
    customSvg?: React.ReactNode;
    /**
     * 是否只读
     * 如果为true，则评分组件为只读状态，无法进行评分
     */
    readonly?: boolean;
}
/**
 * Rate事件属性
 * 用于配置评分组件的交互事件
 */
export interface RateEventProps {
    /**
     * 评分变化事件
     * 当用户点击评分时触发
     * @param value 新的评分值
     */
    onChange?: (value: number) => void;
}
/**
 * Rate组件完整属性类型
 * 合并了所有属性接口
 */
export type RateProps = RateBaseProps & RateStyleProps & RateCustomProps & RateEventProps;
/**
 * 属性优先级说明：
 * 1. value和onChange配合使用实现受控组件
 * 2. count属性设置评分组件的总星数，默认为5
 * 3. defaultColor和activeColor分别控制未选中和选中状态的颜色
 * 4. customSvg会覆盖默认的星形图标
 * 5. style和className会覆盖默认样式
 * 6. 评分范围：0 <= value <= count
 * 7. 当value为undefined时，组件为非受控状态
 */ 
