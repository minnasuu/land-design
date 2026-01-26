import { default as React, CSSProperties } from 'react';
import { CommonProps } from '../types';
/**
 * Textarea组件属性类型定义
 * 包含所有Textarea组件支持的属性及其详细说明
 */
/** 文本域类型 */
export type TextareaType = "border" | "background" | "transparent";
/**
 * Textarea基础属性
 * 包含文本域的基本配置和交互属性
 */
export interface TextareaBaseProps extends CommonProps {
    /**
     * 文本域类型
     * - border: 边框样式，有边框线
     * - background: 背景样式，有背景色
     * - transparent: 透明样式，无边框和背景
     */
    type?: TextareaType;
    /**
     * 输入值
     * 文本域的当前值，受控组件
     */
    value?: string;
    /**
     * 占位符文本
     * 当文本域为空时显示的提示文本
     */
    placeholder?: string;
    /**
     * 是否禁用
     * 设置为true时文本域不可编辑
     */
    disabled?: boolean;
    /**
     * 允许输入的最大字符数
     * 限制用户输入的最大长度
     */
    maxLength?: number;
    /**
     * 是否显示字数统计
     * 设置为true时会在文本域下方显示当前字数/最大字数
     */
    showNumber?: boolean;
    /**
     * 文本域行数
     * 设置文本域的默认显示行数
     */
    rows?: number;
    /**
     * 是否可调整大小
     * 控制用户是否可以拖拽调整文本域大小
     */
    resize?: "none" | "both" | "horizontal" | "vertical";
}
/**
 * Textarea内容属性
 * 用于配置文本域的前缀、后缀等内容
 */
export interface TextareaContentProps {
    /**
     * 结构前缀
     * 在文本域上方添加的结构化内容，如标签、图标等
     */
    beforeContent?: React.ReactNode;
    /**
     * 结构后缀
     * 在文本域下方添加的结构化内容，如按钮、提示等
     */
    afterContent?: React.ReactNode;
}
/**
 * Textarea样式属性
 * 用于配置文本域的视觉样式
 */
export interface TextareaStyleProps {
    /**
     * 自定义样式
     * 可以传入CSS样式对象来自定义文本域外观
     */
    style?: CSSProperties;
    /**
     * 自定义类名
     * 可以传入额外的CSS类名
     */
    className?: string;
    /**
     * 文本域宽度
     * 设置文本域的宽度，可以是数字或字符串
     */
    width?: number | string;
    /**
     * 文本域高度
     * 设置文本域的高度，可以是数字或字符串
     */
    height?: number | string;
    /**
     * 文字对齐方式
     * 设置文本域内文字的对齐方式，可选值为left、center、right
     */
    textAlign?: "left" | "center" | "right";
}
/**
 * Textarea事件属性
 * 用于配置文本域的交互事件
 */
export interface TextareaEventProps {
    /**
     * 值变化事件
     * 当输入值发生变化时触发
     * @param val 当前输入值
     * @param e 原生事件对象
     */
    onChange?: (val: string, e?: React.ChangeEvent<HTMLTextAreaElement>) => void;
    /**
     * 聚焦事件
     * 当文本域获得焦点时触发
     * @param e 原生事件对象
     */
    onFocus?: (e: React.FocusEvent<HTMLTextAreaElement>) => void;
    /**
     * 失焦事件
     * 当文本域失去焦点时触发
     * @param e 原生事件对象
     */
    onBlur?: (e: React.FocusEvent<HTMLTextAreaElement>) => void;
    /**
     * 清除事件
     * 当用户点击清除按钮时触发
     */
    onClear?: () => void;
    /**
     * 键盘事件
     * 当用户按下键盘时触发
     * @param e 原生事件对象
     */
    onKeyDown?: (e: React.KeyboardEvent<HTMLTextAreaElement>) => void;
    [key: string]: any;
}
/**
 * Textarea组件完整属性类型
 * 合并了所有属性接口，同时继承原生textarea属性
 */
export type TextareaProps = TextareaBaseProps & TextareaContentProps & TextareaStyleProps & TextareaEventProps & Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, 'onChange' | 'onFocus' | 'onBlur' | 'onKeyDown'>;
/**
 * 属性优先级说明：
 * 1. value和onChange配合使用实现受控组件
 * 2. disabled属性会禁用所有交互功能
 * 3. maxLength和showNumber配合使用，showNumber为true时才会显示字数统计
 * 4. beforeContent和afterContent在文本域外部，prefix和suffix在文本域内部
 * 5. onClear事件需要配合suffix中的清除按钮使用
 * 6. style和className会覆盖默认样式
 * 7. width和height属性会覆盖默认尺寸设置
 * 8. resize属性控制用户是否可以调整文本域大小
 */
