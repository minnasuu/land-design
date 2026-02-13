import { ReactNode } from 'react';
import { CommonProps } from '../types';

export interface BackToTopProps extends CommonProps {
  /**
   * 是否固定定位
   * - true: 相对于视口固定定位（默认）
   * - false: 相对于父容器绝对定位
   */
  fixed?: boolean;

  /**
   * 滚动容器
   * 指定要监听滚动的容器，默认为 document.body
   * 非固定定位时未指定则自动使用父容器
   */
  target?: Element;

  /**
   * 显示的滚动高度阈值（px）
   * @default 600
   */
  visibleHeight?: number;

  /**
   * 距离右侧偏移量（px）
   * @default 24
   */
  offsetRight?: number;

  /**
   * 距离底部偏移量（px）
   * @default 24
   */
  offsetBottom?: number;

  /**
   * 滚动行为
   * @default 'smooth'
   */
  scrollBehavior?: ScrollBehavior;

  /** 自定义图标 */
  icon?: ReactNode;

  /** 是否禁用 */
  disabled?: boolean;

  /** 点击回调（在默认滚动行为之前执行） */
  onClick?: (e: React.MouseEvent) => void;

  /** 显示/隐藏状态变化回调 */
  onVisibilityChange?: (visible: boolean) => void;
}
