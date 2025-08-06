import React, { CSSProperties } from "react";
import { CommonProps } from "../types";

/**
 * Input组件属性类型定义
 * 包含所有Input组件支持的属性及其详细说明
 */

// ==================== 基础类型定义 ====================

/** 输入框类型 */
export type InputType = "border" | "background" | "transparent";

/** HTML输入类型 */
export type HTMLInputType = "text" | "password" | "email" | "number" | "tel" | "url" | "search";

// ==================== 属性接口定义 ====================

/**
 * Input基础属性
 * 包含输入框的基本配置和交互属性
 */
export interface InputBaseProps extends CommonProps {
  /** 
   * 输入框类型
   * - border: 边框样式，有边框线
   * - background: 背景样式，有背景色
   * - transparent: 透明样式，无边框和背景
   */
  type?: InputType;

  /** 
   * 输入值
   * 输入框的当前值，受控组件
   */
  value?: string;

  /** 
   * HTML输入类型
   * 设置input元素的type属性，影响输入行为
   */
  inputType?: HTMLInputType;

  /** 
   * 占位符文本
   * 当输入框为空时显示的提示文本
   */
  placeholder?: string;

  /** 
   * 是否禁用
   * 设置为true时输入框不可编辑
   */
  disabled?: boolean;

  /** 
   * 允许输入的最大字符数
   * 限制用户输入的最大长度
   */
  maxLength?: number;

  /** 
   * 是否显示字数统计
   * 设置为true时会在输入框下方显示当前字数/最大字数
   */
  showNumber?: boolean;
}

/**
 * Input内容属性
 * 用于配置输入框的前缀、后缀等内容
 */
export interface InputContentProps {
  /** 
   * 结构前缀
   * 在输入框左侧添加的结构化内容，如标签、图标等
   */
  beforeContent?: React.ReactNode;

  /** 
   * 结构后缀
   * 在输入框右侧添加的结构化内容，如按钮、图标等
   */
  afterContent?: React.ReactNode;

  /** 
   * 内容前缀
   * 在输入框内部左侧添加的内容，如图标、符号等
   */
  prefix?: React.ReactNode;

  /** 
   * 内容后缀
   * 在输入框内部右侧添加的内容，如图标、清除按钮等
   */
  suffix?: React.ReactNode;
}

/**
 * Input样式属性
 * 用于配置输入框的视觉样式
 */
export interface InputStyleProps {
  /** 
   * 自定义样式
   * 可以传入CSS样式对象来自定义输入框外观
   */
  style?: CSSProperties;

  /** 
   * 自定义类名
   * 可以传入额外的CSS类名
   */
  className?: string;

  /** 
   * 输入框宽度
   * 设置输入框的宽度，可以是数字或字符串
   */
  width?: number | string;

  /** 
   * 文字对齐方式
   * 设置输入框内文字的对齐方式，可选值为left、center、right
   */
  textAlign?: "left" | "center" | "right";
}

/**
 * Input事件属性
 * 用于配置输入框的交互事件
 */
export interface InputEventProps {
  /** 
   * 值变化事件
   * 当输入值发生变化时触发
   * @param val 当前输入值
   * @param e 原生事件对象
   */
  onChange?: (val: string, e?: React.ChangeEvent<HTMLInputElement>) => void;

  /** 
   * 回车事件
   * 当用户按下回车键时触发
   * @param val 当前输入值
   * @param e 原生事件对象
   */
  onEnter?: (val: string, e?: React.KeyboardEvent<HTMLInputElement>) => void;

  /** 
   * 失焦事件
   * 当输入框失去焦点时触发
   * @param e 原生事件对象
   */
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;

  /** 
   * 清除事件
   * 当用户点击清除按钮时触发
   */
  onClear?: () => void;
  [key: string]: any;
}

/**
 * Input组件完整属性类型
 * 合并了所有属性接口
 */
export type InputProps = InputBaseProps &
  InputContentProps &
  InputStyleProps &
  InputEventProps;

/**
 * 属性优先级说明：
 * 1. value和onChange配合使用实现受控组件
 * 2. disabled属性会禁用所有交互功能
 * 3. maxLength和showNumber配合使用，showNumber为true时才会显示字数统计
 * 4. beforeContent和afterContent在输入框外部，prefix和suffix在输入框内部
 * 5. onClear事件需要配合suffix中的清除按钮使用
 * 6. style和className会覆盖默认样式
 * 7. width属性会覆盖默认宽度设置
 */ 