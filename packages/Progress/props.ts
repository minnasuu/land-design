import React, { CSSProperties } from "react";
import { CommonProps } from "../types";

/**
 * Progress组件属性类型定义
 * 包含所有Progress组件支持的属性及其详细说明
 */

// ==================== 属性接口定义 ====================

/**
 * Progress基础属性
 * 包含进度条的基本配置和内容属性
 */
export interface ProgressBaseProps extends CommonProps {
  /** 
   * 子元素
   * 可以传入React节点作为进度条的内容
   */
  children?: React.ReactNode;

  /** 
   * 当前进度百分比
   * 进度条的当前值，范围0-100
   */
  value?: number;

  /** 
   * 状态
   * 进度条的状态，可选值为success、warning、error
   */
  status?: 'success' | 'fail' | 'default';

  /** 
   * 类型
   * 进度条的类型，可选值为line、circle
   */
  type?: 'line' | 'circle';

  /** 
   * 线条宽度
   * 进度条的线条宽度
   */
  strokeWidth?: number;
}

/**
 * Progress显示属性
 * 用于配置进度条的显示方式
 */
export interface ProgressDisplayProps {
  /** 
   * 隐藏进度条数值
   * 设置为true时会隐藏进度条上的数值显示
   */
  hideLabel?: boolean;
}

/**
 * Progress样式属性
 * 用于配置进度条的视觉样式
 */
export interface ProgressStyleProps {
  /** 
   * 自定义样式
   * 可以传入CSS样式对象来自定义进度条外观
   */
  style?: CSSProperties;

  /** 
   * 自定义类名
   * 可以传入额外的CSS类名
   */
  className?: string;
}

/**
 * Progress组件完整属性类型
 * 合并了所有属性接口
 */
export type ProgressProps = ProgressBaseProps &
  ProgressDisplayProps &
  ProgressStyleProps;

/**
 * 属性优先级说明：
 * 1. value控制进度条的当前进度值
 * 2. hideLabel控制是否显示进度数值
 * 3. style和className会覆盖默认样式
 * 4. 当value为undefined时，进度条显示为0%
 * 5. 当value超出0-100范围时会被限制
 * 6. 组件支持动画效果显示进度变化
 * 7. 样式优先级：style > className > 默认样式
 * 8. 进度条支持自定义颜色和尺寸
 * 9. 当hideLabel为true时，只显示进度条不显示数值
 * 10. 组件会自动处理进度值的格式化显示
 */ 