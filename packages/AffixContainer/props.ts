import { CSSProperties, MouseEvent, ReactNode, HTMLAttributes } from 'react';

// ==================== 基础类型定义 ====================

/**
 * 图钉显示模式
 * - always: 始终显示
 * - hoverShow: 鼠标悬停时显示
 * - hoverHide: 鼠标悬停时隐藏
 */
export type AffixDisplayMode = 'always' | 'hoverShow' | 'hoverHide';

/**
 * 图钉预设位置
 * - topStart / topCenter / topEnd: 顶部左 / 中 / 右
 * - bottomStart / bottomCenter / bottomEnd: 底部左 / 中 / 右
 * - startCenter / endCenter: 左侧居中 / 右侧居中
 * - center: 正中心
 * - custom: 自定义位置，需配合 left/top/right/bottom
 */
export type AffixPlacement =
  | 'topStart'
  | 'topCenter'
  | 'topEnd'
  | 'bottomStart'
  | 'bottomCenter'
  | 'bottomEnd'
  | 'startCenter'
  | 'endCenter'
  | 'center'
  | 'custom';

// ==================== 属性接口定义 ====================

/** 图钉项属性 */
export interface AffixItemProps {
  /** 图钉内容 */
  content?: ReactNode;
  /**
   * 图钉位置
   * @default 'center'
   */
  placement?: AffixPlacement;
  /**
   * 图钉到容器边缘的偏移距离（px）
   * @default 8
   */
  offset?: number;
  /**
   * 图钉层级
   * @default 2
   */
  zIndex?: number;
  /**
   * 显示模式
   * @default 'always'
   */
  display?: AffixDisplayMode;
  /** 显示/隐藏动画，CSS animation 字符串 */
  animation?: string;
  /** 自定义位置 left，仅 placement='custom' 时生效 */
  left?: number | string;
  /** 自定义位置 top，仅 placement='custom' 时生效 */
  top?: number | string;
  /** 自定义位置 right，仅 placement='custom' 时生效 */
  right?: number | string;
  /** 自定义位置 bottom，仅 placement='custom' 时生效 */
  bottom?: number | string;
  /** 点击事件 */
  onClick?: (e: MouseEvent<HTMLDivElement>) => void;
  /** 自定义类名 */
  className?: string;
  /** 自定义样式 */
  style?: CSSProperties;
}

/** AffixContainer 组件属性 */
export interface AffixContainerProps {
  /**
   * 图钉配置，支持单个图钉或图钉数组
   * 每个图钉通过 placement 指定位置
   */
  items?: AffixItemProps | AffixItemProps[];
  /** 是否禁用 */
  disabled?: boolean;
  /** 点击事件 */
  onClick?: (e: MouseEvent<HTMLDivElement>) => void;
  /** 子元素 */
  children?: ReactNode;
  /** 自定义类名 */
  className?: string;
  /** 自定义样式 */
  style?: CSSProperties;
  /** 原生 div HTML 属性透传 */
  htmlProps?: HTMLAttributes<HTMLDivElement>;
}
