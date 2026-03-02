import React, { CSSProperties } from "react";
import { CommonProps } from "../types";

/**
 * Radio 组件属性类型定义
 * @description 单选框组件的完整属性接口
 * @author Land Design System
 */

// ============================================================================
// SECTION: 属性接口定义
// ============================================================================

/**
 * Radio 基础属性
 * @description 单选框的基本配置属性
 */
export interface RadioBaseProps extends CommonProps {
  /** 
   * 单选框的值
   * @description 用于表单提交和 RadioGroup 中标识选项
   */
  value?: string | number;

  /** 
   * 表单字段名
   * @description 原生 name 属性，用于表单提交
   */
  name?: string;

  /** 
   * 标签文本
   * @description 显示在单选框旁边的文本内容
   */
  label?: React.ReactNode;

  /** 
   * 是否选中
   * @description 控制单选框的选中状态，配合 onCheckedChange 实现受控模式
   * @default false
   */
  checked?: boolean;

  /** 
   * 默认是否选中
   * @description 非受控模式下的初始选中状态
   * @default false
   */
  defaultChecked?: boolean;

  /** 
   * 是否禁用
   * @description 设置为 true 时单选框不可点击
   * @default false
   */
  disabled?: boolean;
}

/**
 * Radio 动效属性
 * @description 单选框的动画效果配置
 */
export interface RadioAnimationProps {
  /** 
   * 是否启用动画
   * @description 控制选中时的过渡动画效果
   * @default true
   */
  animated?: boolean;
}

/**
 * Radio 提示属性
 * @description 单选框的提示信息配置
 */
export interface RadioTipProps {
  /** 
   * 提示内容
   * @description 鼠标悬停时显示的提示信息
   */
  tip?: React.ReactNode;
}

/**
 * Radio 样式属性
 * @description 单选框的视觉样式配置
 */
export interface RadioStyleProps {
  /** 
   * 自定义样式
   * @description CSS 样式对象，用于覆盖默认样式
   */
  style?: CSSProperties;

  /** 
   * 自定义类名
   * @description 额外的 CSS 类名
   */
  className?: string;

  /** 
   * 标签自定义样式
   * @description 标签文本的 CSS 样式对象
   */
  labelStyle?: CSSProperties;

  /** 
   * 标签自定义类名
   * @description 标签文本的额外 CSS 类名
   */
  labelClassName?: string;
}

/**
 * Radio 事件属性
 * @description 单选框的交互事件配置
 */
export interface RadioEventProps {
  /** 
   * 选中状态变化事件
   * @description 当选中状态发生变化时触发
   * @param checked - 新的选中状态
   * @param e - 鼠标事件对象
   */
  onCheckedChange?: (checked: boolean, e: React.MouseEvent<HTMLDivElement>) => void;

  /** 
   * 点击事件
   * @description 单选框被点击时触发（无论状态是否改变）
   * @param e - 鼠标事件对象
   * @deprecated 建议使用 onCheckedChange 代替
   */
  onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
}

// ============================================================================
// SECTION: 组合类型
// ============================================================================

/**
 * Radio 组件完整属性类型
 * @description 合并所有属性接口的完整类型定义
 */
export type RadioProps = RadioBaseProps &
  RadioAnimationProps &
  RadioTipProps &
  RadioStyleProps &
  RadioEventProps;

// ============================================================================
// SECTION: 属性默认值
// ============================================================================

/**
 * Radio 组件默认属性
 * @description 组件的默认配置值
 */
export const radioDefaultProps: Partial<RadioProps> = {
  checked: false,
  defaultChecked: false,
  disabled: false,
  animated: true,
};

// ============================================================================
// SECTION: 使用说明
// ============================================================================

/**
 * 属性使用优先级说明：
 * 
 * 1. 受控 vs 非受控模式：
 *    - 受控模式：使用 checked + onCheckedChange
 *    - 非受控模式：使用 defaultChecked
 * 
 * 2. 表单集成：
 *    - value: 在 RadioGroup 中标识选项
 *    - name: 原生表单字段名
 * 
 * 3. 样式自定义：
 *    - style/className: 根容器样式
 *    - labelStyle/labelClassName: 标签文本样式
 * 
 * 4. 状态优先级：
 *    - disabled 会禁用所有交互
 *    - 当 disabled=true 时，onCheckedChange 不会触发
 * 
 * @example
 * // 受控模式
 * <Radio 
 *   label="选项1" 
 *   checked={selected} 
 *   onCheckedChange={(checked) => setSelected(checked)} 
 * />
 * 
 * @example
 * // 非受控模式
 * <Radio label="选项2" defaultChecked />
 * 
 * @example
 * // 在 RadioGroup 中使用
 * <RadioGroup value={value} onChange={setValue}>
 *   <Radio value="a" label="选项A" />
 *   <Radio value="b" label="选项B" />
 * </RadioGroup>
 */
