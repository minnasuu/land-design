import { CSSProperties, ReactNode, HTMLAttributes, MouseEvent, KeyboardEvent } from 'react';

// ==================== 基础类型定义 ====================

/**
 * 折叠面板外观变体
 * - default: 默认样式，无边框
 * - bordered: 带边框样式
 * - card: 卡片样式，有背景和阴影
 */
export type CollapseVariant = 'default' | 'bordered' | 'card';

/**
 * 箭头图标位置
 * - start: 标题前方（默认）
 * - end: 标题后方
 */
export type CollapseArrowPosition = 'start' | 'end';

// ==================== 属性接口定义 ====================

/**
 * Collapse 组件属性
 */
export interface CollapseProps {
  // ─── 外观属性 ───
  /**
   * 折叠面板外观变体
   * @default 'default'
   */
  variant?: CollapseVariant;

  /**
   * 箭头图标位置
   * @default 'start'
   */
  arrowPosition?: CollapseArrowPosition;

  // ─── 内容属性 ───
  /**
   * 折叠面板标题
   */
  title?: ReactNode;

  /**
   * 折叠面板内容（与 children 二选一）
   */
  content?: ReactNode;

  /**
   * 折叠面板内容（优先级高于 content）
   */
  children?: ReactNode;

  /**
   * 标题右侧额外内容
   */
  extra?: ReactNode;

  /**
   * 自定义箭头图标
   * @param expanded 当前是否展开
   */
  arrow?: ReactNode | ((expanded: boolean) => ReactNode);

  // ─── 状态属性 ───
  /**
   * 是否展开（受控）
   */
  expanded?: boolean;

  /**
   * 默认是否展开（非受控）
   * @default false
   */
  defaultExpanded?: boolean;

  /**
   * 是否禁用
   * @default false
   */
  disabled?: boolean;

  /**
   * 是否隐藏箭头图标
   * @default false
   */
  hideArrow?: boolean;

  /**
   * 展开时是否销毁内容 DOM
   * @default false
   */
  destroyOnCollapse?: boolean;

  // ─── 动画属性 ───
  /**
   * 是否启用动画
   * @default true
   */
  animated?: boolean;

  /**
   * 动画持续时间（毫秒）
   * @default 200
   */
  duration?: number;

  // ─── 事件属性 ───
  /**
   * 展开/收起状态变化回调
   * @param expanded 当前是否展开
   */
  onChange?: (expanded: boolean) => void;

  /**
   * 标题点击回调
   */
  onHeaderClick?: (e: MouseEvent<HTMLDivElement>) => void;

  /**
   * 键盘事件回调
   */
  onKeyDown?: (e: KeyboardEvent<HTMLDivElement>) => void;

  // ─── 样式属性 ───
  /**
   * 自定义类名
   */
  className?: string;

  /**
   * 自定义样式
   */
  style?: CSSProperties;

  /**
   * 标题区域自定义类名
   */
  headerClassName?: string;

  /**
   * 标题区域自定义样式
   */
  headerStyle?: CSSProperties;

  /**
   * 内容区域自定义类名
   */
  contentClassName?: string;

  /**
   * 内容区域自定义样式
   */
  contentStyle?: CSSProperties;

  /**
   * 原生 HTML 属性透传
   */
  htmlProps?: HTMLAttributes<HTMLDivElement>;
}

// ==================== 默认属性 ====================

export const defaultCollapseProps: Partial<CollapseProps> = {
  variant: 'default',
  arrowPosition: 'start',
  defaultExpanded: false,
  disabled: false,
  hideArrow: false,
  destroyOnCollapse: false,
  animated: true,
  duration: 200,
};
