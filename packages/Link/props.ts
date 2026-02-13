import React, { MouseEvent, CSSProperties } from 'react';
import { PopOverProps } from '../PopOver/props';

// ==================== 基础类型定义 ====================

/** 链接状态 */
export type LinkStatus = 'default' | 'primary' | 'success' | 'danger' | 'warning';

/** 链接目标 */
export type LinkTarget = '_self' | '_blank' | '_parent' | '_top';

/** 链接尺寸 */
export type LinkSize =  'small' | 'default' | 'large';

/** 下划线模式 */
export type LinkUnderline = 'none' | 'always' | 'hover';

// ==================== 属性接口定义 ====================

/**
 * Link 基础属性
 */
export interface LinkBaseProps {
  /** 链接地址 */
  href?: string;
  /**
   * 链接打开方式
   * @default '_self'
   */
  target?: LinkTarget;
  /** 锚点 ID，点击后平滑滚动到对应元素 */
  anchor?: string;
  /** 是否禁用 */
  disabled?: boolean;
  /** 子元素 */
  children?: React.ReactNode;
}

/**
 * Link 样式属性
 */
export interface LinkStyleProps {
  /**
   * 链接状态
   * @default 'default'
   */
  status?: LinkStatus;
  /**
   * 链接尺寸
   * @default 'default'
   */
  size?: LinkSize;
  /**
   * 下划线模式
   * - 'none': 不显示下划线
   * - 'always': 始终显示下划线
   * - 'hover': 悬停时显示下划线
   * @default 'hover'
   */
  underline?: LinkUnderline;
  /** 自定义样式 */
  style?: CSSProperties;
  /** 自定义类名 */
  className?: string;
}

/**
 * Link 图标属性
 */
export interface LinkIconProps {
  /**
   * 前缀图标
   * true 时根据 target 自动显示内/外链图标，或传入自定义 ReactNode
   */
  prefixIcon?: boolean | React.ReactNode;
  /**
   * 后缀图标
   * true 时根据 target 自动显示内/外链图标，或传入自定义 ReactNode
   */
  suffixIcon?: boolean | React.ReactNode;
}

/**
 * Link 气泡属性
 */
export interface LinkTipProps {
  /** 气泡内容 */
  tip?: React.ReactNode | string;
  /** 气泡配置，透传 PopOver 属性 */
  tipProps?: PopOverProps;
}

/**
 * Link 事件属性
 */
export interface LinkEventProps {
  /** 点击事件 */
  onClick?: (e: MouseEvent<HTMLAnchorElement>) => void;
}

/**
 * Link 组件完整属性
 */
export type LinkProps = LinkBaseProps &
  LinkStyleProps &
  LinkIconProps &
  LinkTipProps &
  LinkEventProps;

/**
 * LinkWave 组件属性
 */
export interface LinkWaveProps extends LinkProps {
  /** 是否启用波浪动画 */
  animation?: boolean;
  /** 是否启用 hover 直线→波浪变换效果 */
  transform?: boolean;
}
