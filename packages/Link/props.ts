import { CSSProperties, MouseEvent, ReactNode } from 'react';
import { PopOverProps } from '../PopOver/props';

// ==================== 基础类型定义 ====================

/** 链接状态 */
export type LinkStatus = 'default' | 'primary' | 'success' | 'danger' | 'warning';

/** 链接打开方式 */
export type LinkTarget = '_self' | '_blank' | '_parent' | '_top';

/** 链接尺寸 */
export type LinkSize = 'small' | 'default' | 'large';

/** 下划线模式 */
export type LinkUnderline = 'none' | 'always' | 'hover';

// ==================== 属性接口定义 ====================

/** Link 组件属性 */
export interface LinkProps {
  /** 链接地址 */
  href?: string;
  /**
   * 链接打开方式
   * @default '_self'
   */
  target?: LinkTarget;
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
   * @default 'hover'
   */
  underline?: LinkUnderline;
  /** 锚点 ID，点击后平滑滚动到对应元素 */
  anchor?: string;
  /** 是否禁用 */
  disabled?: boolean;
  /**
   * 起始图标，true 时根据 target 自动显示内/外链图标
   */
  startIcon?: boolean | ReactNode;
  /**
   * 末尾图标，true 时根据 target 自动显示内/外链图标
   */
  endIcon?: boolean | ReactNode;
  /** 气泡提示内容 */
  tip?: ReactNode | string;
  /** 气泡提示配置，透传 PopOver 属性 */
  popoverProps?: PopOverProps;
  /** 点击事件 */
  onClick?: (e: MouseEvent<HTMLAnchorElement>) => void;
  /** 子元素 */
  children?: ReactNode;
  /** 自定义类名 */
  className?: string;
  /** 自定义样式 */
  style?: CSSProperties;
}

/** LinkWave 组件属性 */
export interface LinkWaveProps extends LinkProps {
  /**
   * 是否启用波浪动画
   * @default true
   */
  animation?: boolean;
  /** 是否启用 hover 直线→波浪变换效果 */
  transform?: boolean;
}
