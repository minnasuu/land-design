import { CSSProperties, MouseEvent, ReactNode, ButtonHTMLAttributes } from 'react';
import { PopOverProps } from '../PopOver/props';

// ==================== 基础类型定义 ====================

/**
 * 按钮外观变体
 * - text: 文字按钮，无背景和边框
 * - fill: 填充按钮，有背景色
 * - background: 背景按钮，有背景色和边框
 * - outline: 描边按钮，有边框无背景（默认）
 * - dashed: 虚线按钮，虚线边框
 * - transparent: 透明按钮，完全透明
 */
export type ButtonVariant = 'text' | 'fill' | 'background' | 'outline' | 'dashed' | 'transparent';

/** 按钮语义状态 */
export type ButtonStatus = 'default' | 'primary' | 'warning' | 'danger' | 'success';

/** 按钮尺寸 */
export type ButtonSize = 'small' | 'default' | 'large';

/** 按钮文字对齐方式 */
export type ButtonJustify = 'center' | 'start' | 'end';

// ==================== 属性接口定义 ====================

/** Button 组件属性 */
export interface ButtonProps {
  /**
   * 按钮外观变体
   * @default 'outline'
   */
  variant?: ButtonVariant;
  /**
   * 按钮语义状态
   * @default 'default'
   */
  status?: ButtonStatus;
  /**
   * 按钮尺寸
   * @default 'default'
   */
  size?: ButtonSize;
  /** 是否禁用 */
  disabled?: boolean;
  /**
   * 按钮文字对齐方式
   * @default 'center'
   */
  justify?: ButtonJustify;
  /** 是否为块级按钮，占满父容器宽度 */
  block?: boolean;
  /** 按钮主要文案 */
  text?: string;
  /** 按钮次要文案，显示在主文案右侧 */
  subText?: string;
  /** 按钮图标，当仅有 icon 时呈纯图标按钮 */
  icon?: ReactNode;
  /** 是否加粗文字 */
  bold?: boolean;
  /** 悬停时是否加粗文字 */
  hoverBold?: boolean;
  /** 是否为胶囊形状（圆角较大） */
  capsule?: boolean;
  /** 是否启用悬停缩放动画 */
  hoverAnimation?: boolean;
  /** 是否启用点击缩放动画 */
  activeAnimation?: boolean;
  /** 气泡提示内容 */
  tip?: ReactNode | string;
  /** 气泡提示配置，透传 PopOver 属性 */
  popoverProps?: PopOverProps;
  /** 点击事件 */
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
  /** 子元素 */
  children?: ReactNode;
  /** 自定义类名 */
  className?: string;
  /** 自定义样式 */
  style?: CSSProperties;
  /** 原生 button HTML 属性透传 */
  htmlProps?: ButtonHTMLAttributes<HTMLButtonElement>;
}
