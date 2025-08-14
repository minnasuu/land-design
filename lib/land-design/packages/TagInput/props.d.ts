import { default as React, CSSProperties, ChangeEvent, FocusEvent, KeyboardEvent } from 'react';
import { CommonProps } from '../types';
import { InputProps } from '../Input/props';
/**
 * TagInput组件属性类型定义
 * 包含所有TagInput组件支持的属性及其详细说明
 */
/**
 * TagInput基础属性
 * 包含标签输入框的基本配置和内容属性
 */
export interface TagInputBaseProps extends CommonProps, InputProps {
    /**
     * 子元素
     * 可以传入React节点作为标签输入框的内容
     */
    children?: React.ReactNode;
    /**
     * 初始标签
     * 标签输入框的初始标签数据
     */
    tagData?: string[];
}
/**
 * TagInput显示属性
 * 用于配置标签输入框的显示方式
 */
export interface TagInputDisplayProps {
    /**
     * 占位符
     * 当没有标签时显示的提示文本
     */
    placeholder?: string;
    /**
     * 是否显示标签数量
     * 设置为true时会显示当前标签的数量
     */
    showClear?: boolean;
}
/**
 * TagInput功能属性
 * 用于配置标签输入框的功能特性
 */
export interface TagInputFeatureProps {
    /**
     * 允许输入的最大标签数
     * 限制可以添加的最大标签数量
     */
    maxLength?: number;
    /**
     * 高亮文字数组
     * 需要高亮显示的文本数组
     */
    highlightStr?: string[];
}
/**
 * TagInput尺寸属性
 * 用于配置标签输入框的尺寸
 */
export interface TagInputSizeProps {
    /**
     * 宽度
     * 设置标签输入框的宽度
     */
    width?: number | string;
}
/**
 * TagInput样式属性
 * 用于配置标签输入框的视觉样式
 */
export interface TagInputStyleProps {
    /**
     * 自定义样式
     * 可以传入CSS样式对象来自定义标签输入框外观
     */
    style?: CSSProperties;
    /**
     * 自定义类名
     * 可以传入额外的CSS类名
     */
    className?: string;
    /**
     * 标签样式
     * 可以传入CSS样式对象来自定义标签外观
     */
    tagStyle?: CSSProperties;
    /**
     * 标签类名
     * 为标签添加自定义类名
     */
    tagClassName?: string;
    /**
     * 高亮内容样式
     * 可以传入CSS样式对象来自定义高亮内容外观
     */
    highlightStyle?: CSSProperties;
}
/**
 * TagInput事件属性
 * 用于配置标签输入框的交互事件
 */
export interface TagInputEventProps {
    /**
     * 变化事件
     * 当标签数据发生变化时触发
     * @param val 新的标签数组
     * @param e 事件对象
     */
    onChange?: (val: string[], e: ChangeEvent<HTMLInputElement>) => void;
    /**
     * 回车事件
     * 当按下回车键时触发
     * @param val 当前的标签数组
     * @param e 事件对象
     */
    onEnter?: (val: string[], e: KeyboardEvent<HTMLInputElement>) => void;
    /**
     * 聚焦事件
     * 当输入框获得焦点时触发
     * @param e 事件对象
     */
    onFocus?: (e: FocusEvent<HTMLInputElement>) => void;
    /**
     * 失焦事件
     * 当输入框失去焦点时触发
     * @param val 当前的标签数组
     * @param e 事件对象
     */
    onBlur?: (val: string[], e: FocusEvent<HTMLInputElement>) => void;
    /**
     * 清空事件
     * 当清空标签时触发
     */
    onClear?: () => void;
    /**
     * 删除事件
     * 当删除标签时触发
     */
    onDelete?: (val: string) => void;
}
/**
 * TagInput组件完整属性类型
 * 合并了所有属性接口
 */
export type TagInputProps = TagInputBaseProps & TagInputDisplayProps & TagInputFeatureProps & TagInputSizeProps & TagInputStyleProps & TagInputEventProps;
/**
 * 属性优先级说明：
 * 1. tagData控制标签输入框的初始数据
 * 2. placeholder显示在没有标签时的提示
 * 3. maxLength限制最大标签数量
 * 4. highlightStr控制需要高亮的文本
 * 5. showNumber控制是否显示标签数量
 * 6. width控制标签输入框的宽度
 * 7. onChange、onEnter、onFocus、onBlur处理各种事件
 * 8. style和className会覆盖默认样式
 * 9. tagStyle和tagClassName控制标签样式
 * 10. highlightStyle控制高亮内容的样式
 */ 
