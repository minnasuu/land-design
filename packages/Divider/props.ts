import { CSSProperties, ReactNode } from 'react';

// ==================== 基础类型定义 ====================

/** 分割线方向 */
export type DividerDirection = 'horizontal' | 'vertical';

/** 分割线线型 */
export type DividerVariant = 'solid' | 'dashed';

/** 分割线内容对齐方式 */
export type DividerAlign = 'start' | 'center' | 'end';

// ==================== 属性接口定义 ====================

/** Divider 组件属性 */
export interface DividerProps {
  /**
   * 分割线方向
   * @default 'horizontal'
   */
  direction?: DividerDirection;
  /**
   * 线型
   * @default 'solid'
   */
  variant?: DividerVariant;
  /**
   * 有内容时的对齐方式
   * @default 'center'
   */
  align?: DividerAlign;
  /** 分割线中间显示的内容 */
  content?: ReactNode;
  /**
   * 分割线长度，支持 CSS 长度值
   * @default '100%'
   */
  length?: string;
  /**
   * 分割线与周围的间距（px）
   * @default 0
   */
  spacing?: number;
  /**
   * 虚线每段长度（px），仅 variant='dashed' 时生效
   * @default 10
   */
  dashLength?: number;
  /**
   * 虚线间隔（px），仅 variant='dashed' 时生效
   * @default 5
   */
  dashGap?: number;
  /** 自定义类名 */
  className?: string;
  /** 自定义样式 */
  style?: CSSProperties;
}
