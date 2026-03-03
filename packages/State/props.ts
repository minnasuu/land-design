import { CSSProperties, ReactNode, HTMLAttributes, MouseEvent } from 'react';

// ==================== 基础类型定义 ====================

/**
 * 状态类型（预设图标）
 * - empty: 空状态（默认）
 * - error: 错误状态
 * - offline: 离线/断网状态
 * - forbidden: 无权限状态
 * - notFound: 404 未找到
 * - success: 成功状态
 * - warning: 警告状态
 */
export type StateType = 'empty' | 'error' | 'offline' | 'forbidden' | 'notFound' | 'success' | 'warning';

/**
 * 状态组件尺寸
 * - small: 小尺寸
 * - default: 默认尺寸
 * - large: 大尺寸
 */
export type StateSize = 'small' | 'default' | 'large';

// ==================== 属性接口定义 ====================

/**
 * State 组件属性
 */
export interface StateProps {
  // ─── 外观属性 ───
  /**
   * 状态类型（预设图标）
   * @default 'empty'
   */
  type?: StateType;

  /**
   * 尺寸
   * @default 'default'
   */
  size?: StateSize;

  // ─── 内容属性 ───
  /**
   * 自定义图标/图片（优先级高于 type 预设）
   */
  icon?: ReactNode;

  /**
   * 图片地址（便捷属性）
   */
  image?: string;

  /**
   * 图片宽度
   */
  imageWidth?: number | string;

  /**
   * 图片高度
   */
  imageHeight?: number | string;

  /**
   * 主标题
   */
  title?: ReactNode;

  /**
   * 描述文字
   */
  description?: ReactNode;

  /**
   * 操作区域（如按钮、链接等）
   */
  actions?: ReactNode;

  /**
   * 子元素（放在最下方的额外内容）
   */
  children?: ReactNode;

  // ─── 事件属性 ───
  /**
   * 点击回调
   */
  onClick?: (e: MouseEvent<HTMLDivElement>) => void;

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
   * 图标/图片区域自定义类名
   */
  iconClassName?: string;

  /**
   * 图标/图片区域自定义样式
   */
  iconStyle?: CSSProperties;

  /**
   * 标题区域自定义类名
   */
  titleClassName?: string;

  /**
   * 标题区域自定义样式
   */
  titleStyle?: CSSProperties;

  /**
   * 描述区域自定义类名
   */
  descriptionClassName?: string;

  /**
   * 描述区域自定义样式
   */
  descriptionStyle?: CSSProperties;

  /**
   * 原生 HTML 属性透传
   */
  htmlProps?: HTMLAttributes<HTMLDivElement>;
}

// ==================== 默认属性 ====================

export const defaultStateProps: Partial<StateProps> = {
  type: 'empty',
  size: 'default',
};
