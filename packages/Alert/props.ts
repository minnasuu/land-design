import React, { CSSProperties } from "react";
import { CommonProps } from "../types";

/**
 * Alert组件属性类型定义
 * 包含所有Alert组件支持的属性及其详细说明
 */

// ==================== 基础类型定义 ====================

/** Alert类型 */
export type AlertType = "default" | "error" | "fail" | "success" | "warn" | "loading";

/** Alert布局方向 */
export type AlertDirection = "row" | "column";

// ==================== 属性接口定义 ====================

/**
 * Alert基础属性
 * 包含Alert的基本配置和显示属性
 */
export interface AlertBaseProps {
  /** 
   * Alert类型
   * - default: 默认类型，显示信息提示
   * - error: 错误类型，显示错误信息
   * - fail: 失败类型，显示失败信息
   * - success: 成功类型，显示成功信息
   * - warn: 警告类型，显示警告信息
   * - loading: 加载类型，显示加载状态
   */
  type?: AlertType;

  /** 
   * Alert布局方向
   * - row: 水平布局，图标和文字在同一行（默认）
   * - column: 垂直布局，图标和文字在不同行
   */
  direction?: AlertDirection;

  /** 
   * Alert标题内容
   * 可以传入字符串或React节点作为Alert的主要显示内容
   */
  title: React.ReactNode | string;
}

/**
 * Alert链接属性
 * 用于配置Alert中的链接功能
 */
export interface AlertLinkProps {
  /** 
   * 链接文本
   * 显示在Alert标题后的链接文字
   */
  link?: string;

  /** 
   * 链接点击事件
   * 当链接被点击时触发的回调函数
   */
  onLinkClick?: (e: React.MouseEvent) => void;
}

/**
 * Alert样式属性
 * 用于配置Alert的视觉样式
 */
export interface AlertStyleProps {
  /**
   * 是否显示背景
   * 默认显示背景
   */
  noBg?: boolean;

  /** 
   * 自定义样式
   * 可以传入CSS样式对象来自定义Alert外观
   */
  style?: CSSProperties;

  /** 
   * 自定义类名
   * 可以传入额外的CSS类名
   */
  className?: string;
}

/**
 * Alert组件完整属性类型
 * 合并了所有属性接口和通用属性
 */
export type AlertProps = AlertBaseProps &
  AlertLinkProps &
  AlertStyleProps &
  CommonProps;

/**
 * 属性优先级说明：
 * 1. title是必需属性，不能为空
 * 2. type属性会影响图标显示和主题色彩
 * 3. direction属性会影响图标尺寸和布局方式
 * 4. link和onLinkClick需要配合使用，link存在时才会显示链接
 * 5. style和className会覆盖默认样式
 * 6. CommonProps中的children属性在此组件中未使用
 */ 