import { CSSProperties, ReactNode } from 'react';

// ==================== 基础类型定义 ====================

/**
 * 气泡位置
 * - top: 上方显示
 * - bottom: 下方显示
 * - left: 左侧显示
 * - right: 右侧显示
 */
export type PopupPlacement = 'top' | 'bottom' | 'left' | 'right';

/**
 * 颜色主题
 * - light: 浅色主题（默认）
 * - dark: 深色主题
 */
export type PopupTheme = 'light' | 'dark';

/**
 * 触发方式
 * - hover: 悬停触发（默认）
 * - click: 点击触发
 */
export type PopupTrigger = 'hover' | 'click';

/**
 * 挂载层级
 * - parent: 挂载到父容器（默认），使用 absolute 定位
 * - body: 挂载到 body 元素，使用 fixed 定位，适用于需要突破父容器 overflow 限制的场景
 */
export type PopupAttach = 'parent' | 'body';

/**
 * 箭头尺寸档位（只提供分级预设，不支持自定义数值）
 * - medium: 常规气泡，凸出 8px / 底宽 14px（Popup 默认）
 * - small: 紧凑提示，凸出 6px / 底宽 11px（Tooltip 默认）
 */
export type ArrowSize = 'small' | 'medium';

/**
 * 箭头圆角档位（只提供分级选项，不支持自定义数值）
 * - none: 尖角（0）
 * - small: 4px
 * - medium: 6px（默认）
 * - large: 8px
 */
export type ArrowRadiusLevel = 'none' | 'small' | 'medium' | 'large';

/** 各档位对应的箭头尖端圆角（px） */
export const ARROW_RADIUS_LEVELS: Record<ArrowRadiusLevel, number> = {
  none: 0,
  small: 4,
  medium: 6,
  large: 8,
};

// ==================== 属性接口定义 ====================

/** Popup 组件属性 */
export interface PopupProps {
  // ─── 核心属性 ───

  /**
   * 气泡内容
   * 可以是文本或 React 节点
   */
  content?: ReactNode;
  /**
   * 触发气泡的子元素
   */
  children?: ReactNode;

  // ─── 控制属性 ───

  /**
   * 受控模式：显示状态
   * 传入后组件变为受控模式
   */
  show?: boolean;
  /**
   * 触发方式
   * @default 'hover'
   */
  trigger?: PopupTrigger;
  /**
   * 显示状态变化回调
   */
  onVisibleChange?: (visible: boolean) => void;

  // ─── 外观属性 ───

  /**
   * 颜色主题
   * @default 'light'
   */
  theme?: PopupTheme;
  /**
   * 气泡位置
   * @default 'top'
   */
  placement?: PopupPlacement;
  /**
   * 是否隐藏箭头
   * @default false
   */
  hideArrow?: boolean;
  /**
   * 气泡主体圆角半径（px）
   * 用于控制 clip-path 切割时气泡四角的圆角
   * @default 12
   */
  radius?: number;
  /**
   * 箭头圆角档位
   * 只提供分级选项，不支持自定义数值，
   * 避免出现「传入数值却因几何限制不生效」的情况
   * - none: 尖角
   * - small: 4px
   * - medium: 6px
   * - large: 8px
   * @default 'medium'
   */
  arrowRadius?: ArrowRadiusLevel;
  /**
   * 箭头尺寸档位：按气泡密度选择，不支持自定义尺寸
   * - medium: 凸出 8px / 底宽 14px，常规气泡
   * - small: 凸出 6px / 底宽 11px，紧凑提示（Tooltip 内置使用）
   * @default 'medium'
   */
  arrowSize?: ArrowSize;

  // ─── 定位属性 ───

  /**
   * 气泡挂载层级
   * - parent: 挂载到父容器，使用 absolute 定位（默认）
   * - body: 挂载到 body，使用 fixed 定位
   * @default 'parent'
   */
  attach?: PopupAttach;

  // ─── 样式属性 ───

  /**
   * 根容器自定义类名
   */
  className?: string;
  /**
   * 根容器自定义样式
   */
  style?: CSSProperties;
  /**
   * 气泡自定义类名
   */
  popupClassName?: string;
  /**
   * 气泡自定义样式
   */
  popupStyle?: CSSProperties;
}
