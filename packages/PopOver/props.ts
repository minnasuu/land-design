import { CSSProperties, ReactNode } from 'react';

// ==================== 基础类型定义 ====================

/**
 * 气泡位置
 * - top: 上方显示
 * - bottom: 下方显示
 * - left: 左侧显示
 * - right: 右侧显示
 */
export type PopOverPlacement = 'top' | 'bottom' | 'left' | 'right';

/**
 * 颜色主题
 * - light: 浅色主题（默认）
 * - dark: 深色主题
 */
export type PopOverTheme = 'light' | 'dark';

/**
 * 触发方式
 * - hover: 悬停触发（默认）
 * - click: 点击触发
 */
export type PopOverTrigger = 'hover' | 'click';

/**
 * 挂载层级
 * - parent: 挂载到父容器（默认），使用 absolute 定位
 * - body: 挂载到 body 元素，使用 fixed 定位，适用于需要突破父容器 overflow 限制的场景
 */
export type PopOverAttach = 'parent' | 'body';

// ==================== 属性接口定义 ====================

/** PopOver 组件属性 */
export interface PopOverProps {
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
  trigger?: PopOverTrigger;
  /**
   * 显示状态变化回调
   */
  onVisibleChange?: (visible: boolean) => void;

  // ─── 外观属性 ───

  /**
   * 颜色主题
   * @default 'light'
   */
  theme?: PopOverTheme;
  /**
   * 气泡位置
   * @default 'top'
   */
  placement?: PopOverPlacement;
  /**
   * 是否隐藏箭头
   * @default false
   */
  hideArrow?: boolean;

  // ─── 定位属性 ───

  /**
   * 气泡挂载层级
   * - parent: 挂载到父容器，使用 absolute 定位（默认）
   * - body: 挂载到 body，使用 fixed 定位
   * @default 'parent'
   */
  attach?: PopOverAttach;

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
  popoverClassName?: string;
  /**
   * 气泡自定义样式
   */
  popoverStyle?: CSSProperties;
}
