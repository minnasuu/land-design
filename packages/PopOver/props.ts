import React, { CSSProperties } from "react";
import { CommonProps } from "../types";

/**
 * PopOver组件属性类型定义
 * 包含所有PopOver组件支持的属性及其详细说明
 */

// ==================== 基础类型定义 ====================

/** 气泡类型 */
export enum PopType {
  /** 背景样式 */
  BG = "background",
  /** 边框样式 */
  BORDER = "border",
}

/** 气泡位置 */
export type PopOverPlacement = "top" | "bottom" | "left" | "right";

/** 颜色主题 */
export type PopOverTheme = "light" | "dark";

/** 触发方式 */
export type PopOverTrigger = "hover" | "click";

// ==================== 属性接口定义 ====================

/**
 * PopOver基础属性
 * 包含气泡的基本配置和内容属性
 */
export interface PopOverBaseProps extends CommonProps {
  /** 
   * 子元素
   * 气泡的触发元素
   */
  children?: React.ReactNode;

  /** 
   * 是否直接显示
   * 控制气泡的显示状态
   */
  show?: boolean;

  /** 
   * 触发方式
   * - hover: 悬停触发（默认）
   * - click: 点击触发
   */
  trigger?: PopOverTrigger;

  /** 
   * 显示状态变化回调
   * 当气泡显示状态改变时触发
   */
  onVisibleChange?: (visible: boolean) => void;
}

/**
 * PopOver显示属性
 * 用于配置气泡的显示方式
 */
export interface PopOverDisplayProps {
  /** 
   * 样式
   * 气泡的视觉样式
   */
  type?: PopType;

  /** 
   * 颜色模式
   * - light: 浅色主题（默认）
   * - dark: 深色主题
   */
  theme?: PopOverTheme;

  /** 
   * 气泡内容
   * 可以传入React节点作为气泡的显示内容
   */
  content?: React.ReactNode;

  /** 
   * 气泡位置
   * - top: 上方显示
   * - bottom: 下方显示
   * - left: 左侧显示
   * - right: 右侧显示
   */
  placement?: PopOverPlacement;

  /** 
   * 是否隐藏气泡箭头
   * 设置为true时会隐藏气泡的箭头指示器
   */
  hideArrow?: boolean;

  /** 
   * 是否全局定位
   * 设置为true时气泡会挂载到body元素，使用fixed定位
   */
  targetBody?: boolean;
}

/**
 * PopOver样式属性
 * 用于配置气泡的视觉样式
 */
export interface PopOverStyleProps {
  popoverStyle?: CSSProperties;
  popoverClassName?: string;
  /** 
   * 自定义样式
   * 可以传入CSS样式对象来自定义气泡外观
   */
  style?: CSSProperties;

  /** 
   * 自定义类名
   * 可以传入额外的CSS类名
   */
  className?: string;
}

/**
 * PopOver组件完整属性类型
 * 合并了所有属性接口
 */
export type PopOverProps = PopOverBaseProps &
  PopOverDisplayProps &
  PopOverStyleProps;

/**
 * 属性优先级说明：
 * 1. show控制气泡的显示与隐藏（受控模式）
 * 2. trigger控制触发方式（hover/click）
 * 3. onVisibleChange监听显示状态变化
 * 4. type控制气泡的视觉样式
 * 5. theme控制颜色主题
 * 6. content设置气泡的显示内容
 * 7. placement控制气泡的显示位置
 * 8. hideArrow控制是否显示箭头
 * 9. targetBody控制气泡的挂载位置（absolute/fixed）
 * 10. style和className会覆盖默认样式
 * 11. 当targetBody为true时，气泡会脱离父容器使用fixed定位
 * 12. 组件支持自动定位和边界检测
 */ 