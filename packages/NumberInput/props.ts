import React, { CSSProperties, ChangeEvent } from "react";
import { CommonProps } from "../types";
import { InputProps } from "../Input/props";

/**
 * NumberInput组件属性类型定义
 * 包含所有NumberInput组件支持的属性及其详细说明
 */

// ==================== 基础类型定义 ====================

/** 数字输入框类型 */
export type NumberInputType = "border" | "background";

// ==================== 属性接口定义 ====================

/**
 * NumberInput基础属性
 * 包含数字输入框的基本配置和内容属性
 */
export interface NumberInputBaseProps extends CommonProps {
  /** 
   * 子元素
   * 可以传入React节点作为数字输入框的内容
   */
  children?: React.ReactNode;

  /** 
   * 当前输入值
   * 数字输入框的当前值
   */
  value?: number;
}

/**
 * NumberInput显示属性
 * 用于配置数字输入框的显示方式
 */
export interface NumberInputDisplayProps {
  /** 
   * 输入框样式
   * - border: 边框样式（默认）
   * - background: 背景样式
   */
  type?: NumberInputType;

  /** 
   * 是否禁用输入框
   * 设置为true时数字输入框不可用
   */
  disabled?: boolean;

  /** 
   * 是否隐藏增减按钮
   * 设置为true时隐藏增减按钮
   */
  hideArrowButton?: boolean;
}

/**
 * NumberInput功能属性
 * 用于配置数字输入框的功能特性
 */
export interface NumberInputFeatureProps {
  /** 
   * 调整步数
   * 点击增减按钮时的步长
   */
  step?: number;

  /** 
   * 最小值
   * 设置数字输入框的最小值
   */
  min?: number;

  /** 
   * 最大值
   * 设置数字输入框的最大值
   */
  max?: number;

  /** 
   * 是否启用鼠标滚轮增减
   * 设置为true时可以通过鼠标滚轮增减数值
   */
  enableWheelScroll?: boolean;
}

/**
 * NumberInput内容属性
 * 用于配置数字输入框的显示内容
 */
export interface NumberInputContentProps {
  /** 
   * 前缀
   * 显示在输入框前面的文本
   */
  prefix?: string;

  /** 
   * 单位
   * 显示在输入框后面的文本
   */
  suffix?: string;
}

/**
 * NumberInput尺寸属性
 * 用于配置数字输入框的尺寸
 */
export interface NumberInputSizeProps {
  /** 
   * 宽度
   * 设置数字输入框的宽度
   */
  width?: number | string;
}

/**
 * NumberInput样式属性
 * 用于配置数字输入框的视觉样式
 */
export interface NumberInputStyleProps {
  /** 
   * 自定义样式
   * 可以传入CSS样式对象来自定义数字输入框外观
   */
  style?: CSSProperties;

  /** 
   * 自定义类名
   * 可以传入额外的CSS类名
   */
  className?: string;

  /** 
   * 文字对齐方式
   * 设置输入框内文字的对齐方式，可选值为left、center、right
   */
  textAlign?: "left" | "center" | "right";
}

/**
 * NumberInput事件属性
 * 用于配置数字输入框的交互事件
 */
export interface NumberInputEventProps {
  /** 
   * 变化事件
   * 当数值发生变化时触发
   * @param value 新的数值
   * @param event 事件对象
   */
  onChange?: (value: number, event: ChangeEvent<HTMLInputElement>) => void;
}
/**
 * NumberInput组件完整属性类型
 * 合并了所有属性接口
 */
export type NumberInputProps = NumberInputBaseProps &
  NumberInputDisplayProps &
  NumberInputFeatureProps &
  NumberInputContentProps &
  NumberInputSizeProps &
  NumberInputStyleProps &
  NumberInputEventProps &
  Omit<InputProps, 'value' | 'onChange'>;

/**
 * 属性优先级说明：
 * 1. value控制数字输入框的当前值
 * 2. type控制数字输入框的视觉样式
 * 3. step控制增减按钮的步长
 * 4. min和max限制数值范围
 * 5. prefix和suffix显示前缀和单位
 * 6. disabled控制输入框是否可用
 * 7. width控制输入框宽度
 * 8. onChange处理数值变化事件
 * 9. style和className会覆盖默认样式
 * 10. 当value超出min/max范围时会被限制
 */ 