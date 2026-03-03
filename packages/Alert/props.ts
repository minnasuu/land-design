import React, { CSSProperties } from "react";
import { CommonProps } from "../types";

/**
 * Alert组件属性类型定义
 * 包含所有Alert组件支持的属性及其详细说明
 */

// ==================== 基础类型定义 ====================

/** Alert类型 */
export type AlertType = "info" | "success" | "warning" | "error" | "loading";

/** Alert变体 */
export type AlertVariant = "filled" | "outlined" | "light" | "text";

/** Alert布局方向 */
export type AlertDirection = "horizontal" | "vertical";

/** Alert尺寸 */
export type AlertSize = "small" | "medium" | "large";

// ==================== 旧版类型定义（向后兼容）====================

/** @deprecated 使用 AlertType 代替 */
export type LegacyAlertType = "default" | "error" | "fail" | "success" | "warn" | "loading";

/** @deprecated 使用 AlertDirection 代替 */
export type LegacyAlertDirection = "row" | "column";

// ==================== 属性接口定义 ====================

/**
 * Alert基础属性
 * 包含Alert的基本配置和显示属性
 */
export interface AlertBaseProps {
  /** 
   * Alert类型
   * - info: 信息提示（默认）
   * - success: 成功类型
   * - warning: 警告类型
   * - error: 错误类型
   * - loading: 加载类型
   * 
   * 向后兼容值：default, fail, warn
   */
  type?: AlertType;

  /** 
   * Alert变体样式
   * - filled: 填充样式（有背景色）
   * - outlined: 边框样式
   * - light: 浅色背景
   * - text: 纯文本无背景
   * @default 'light'
   */
  variant?: AlertVariant;

  /** 
   * Alert布局方向
   * - horizontal: 水平布局，图标和文字在同一行（默认）
   * - vertical: 垂直布局，图标和文字在不同行
   * 
   * 向后兼容值：row, column
   */
  direction?: AlertDirection | LegacyAlertDirection;

  /**
   * Alert尺寸
   * - small: 小尺寸
   * - medium: 中等尺寸（默认）
   * - large: 大尺寸
   * @default 'medium'
   */
  size?: AlertSize;

  /** 
   * Alert标题内容
   * 主要显示内容
   */
  title?: React.ReactNode;

  /**
   * Alert描述内容
   * 标题下方的详细描述
   */
  description?: React.ReactNode;

  /**
   * 自定义图标
   * 传入 false 时隐藏图标
   */
  icon?: React.ReactNode | false;

  /**
   * 是否显示关闭按钮
   * @default false
   */
  closable?: boolean;

  /**
   * 自定义关闭按钮
   */
  closeIcon?: React.ReactNode;

  /**
   * 是否显示边框
   * @default true
   */
  bordered?: boolean;

  /**
   * 是否显示动画
   * @default true
   */
  animated?: boolean;
}

/**
 * Alert链接属性
 * 用于配置Alert中的链接和操作功能
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

  /**
   * 操作区域
   * 可以放置按钮等操作元素
   */
  action?: React.ReactNode;
}

/**
 * Alert样式属性
 * 用于配置Alert的视觉样式
 */
export interface AlertStyleProps {
  /**
   * 是否显示背景
   * 默认显示背景
   * @deprecated 使用 variant="text" 代替
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

  /**
   * 图标样式
   */
  iconStyle?: CSSProperties;

  /**
   * 内容区域样式
   */
  contentStyle?: CSSProperties;
}

/**
 * Alert事件属性
 */
export interface AlertEventProps {
  /**
   * 关闭回调
   * 点击关闭按钮或关闭动画结束后触发
   */
  onClose?: (e: React.MouseEvent) => void;

  /**
   * 关闭动画结束后回调
   */
  afterClose?: () => void;
}

/**
 * 旧版Alert属性（向后兼容）
 * @deprecated 
 * 注意：type 和 direction 已在 AlertBaseProps 中定义，此处不重复定义以避免类型冲突
 * 组件内部通过 typeMap 和 directionMap 处理旧版值的兼容
 */
export interface LegacyAlertProps {
  /** @deprecated 使用 variant="text" 代替 */
  noBg?: boolean;
}

/**
 * Alert组件完整属性类型
 * 合并了所有属性接口和通用属性
 */
export type AlertProps = AlertBaseProps &
  AlertLinkProps &
  AlertStyleProps &
  AlertEventProps &
  LegacyAlertProps &
  CommonProps;

/**
 * 属性优先级说明：
 * 1. title是主要内容，description是详细描述
 * 2. type属性会影响图标显示和主题色彩
 * 3. variant属性控制整体样式变体
 * 4. direction属性会影响图标尺寸和布局方式
 * 5. link和onLinkClick需要配合使用，link存在时才会显示链接
 * 6. closable为true时显示关闭按钮
 * 7. style和className会覆盖默认样式
 * 8. 新版属性会自动覆盖旧版同名属性
 */
