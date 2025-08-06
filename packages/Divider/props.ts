import React, { CSSProperties } from "react";
import { CommonProps } from "../types";

/**
 * Divider组件属性类型定义
 * 包含所有Divider组件支持的属性及其详细说明
 */

// ==================== 基础类型定义 ====================

/** 分割线方向 */
export type DividerDirection = "row" | "column";

/** 分割线类型 */
export type DividerType = "solid" | "dashed";

/** 分割线对齐方式 */
export type DividerAlign = "left" | "center" | "right";

// ==================== 属性接口定义 ====================

/**
 * Divider基础属性
 * 包含分割线的基本配置和内容属性
 */
export interface DividerBaseProps extends CommonProps {
  /** 
   * 分割线方向
   * - row: 水平分割线（默认）
   * - column: 垂直分割线
   */
  direction?: DividerDirection;

  /** 
   * 分割线包含的内容
   * 可以传入React节点或字符串作为分割线的内容
   */
  content?: React.ReactNode | string;
}

/**
 * Divider样式属性
 * 用于配置分割线的视觉样式
 */
export interface DividerStyleProps {
  /** 
   * 自定义样式
   * 可以传入CSS样式对象来自定义分割线外观
   */
  style?: CSSProperties;

  /** 
   * 自定义类名
   * 可以传入额外的CSS类名
   */
  className?: string;

  /** 
   * 分割线宽度和高度
   * 设置分割线的尺寸，可以是CSS长度值
   */
  lineLength?: string;

  /** 
   * 分割线上下或左右边距
   * 设置分割线与周围内容的间距
   */
  gap?: number;

  /** 
   * 分割线类型
   * - solid: 实线（默认）
   * - dashed: 虚线
   */
  type?: DividerType;

  /** 
   * 虚线分割线间距
   * 设置虚线分割线间距
   */
  dashedGap?: number;

  /**   
   * 虚线分割线长度
   * 设置虚线分割线长度
   */
  dashedLength?: number;
}

/**
 * Divider布局属性
 * 用于配置分割线的布局方式
 */
export interface DividerLayoutProps {
  /** 
   * 分割线包含内容时的对齐方式
   * - left: 左对齐
   * - center: 居中对齐（默认）
   * - right: 右对齐
   */
  align?: DividerAlign;
}

/**
 * Divider组件完整属性类型
 * 合并了所有属性接口
 */
export type DividerProps = DividerBaseProps &
  DividerStyleProps &
  DividerLayoutProps;

/**
 * 属性优先级说明：
 * 1. direction控制分割线的方向，影响布局方式
 * 2. content可以在分割线中间显示内容
 * 3. lineWidth和lineLength控制分割线的尺寸
 * 4. gap设置分割线与周围内容的间距
 * 5. type控制分割线的样式（实线或虚线）
 * 6. color设置分割线的颜色
 * 7. align只在有content时生效，控制内容的对齐方式
 * 8. style和className会覆盖默认样式
 * 9. 样式优先级：style > color/lineWidth/lineLength > 默认样式
 */ 