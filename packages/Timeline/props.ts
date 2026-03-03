import React, { CSSProperties } from "react";
import { CommonProps } from "../types";

// ==================== 基础类型定义 ====================

/**
 * 时间线方向
 */
export type TimelineDirection = 'vertical' | 'horizontal';

/**
 * 时间线模式
 * - left: 内容在左侧（垂直时在左，水平时在上）
 * - right: 内容在右侧（垂直时在右，水平时在下）
 * - alternate: 内容交替显示
 */
export type TimelineMode = 'left' | 'right' | 'alternate';

/**
 * 节点状态/颜色
 */
export type TimelineItemStatus = 'default' | 'primary' | 'success' | 'warning' | 'error' | 'info';

/**
 * 连接线类型
 */
export type TimelineLineType = 'solid' | 'dashed' | 'dotted';

// ==================== Item 属性定义 ====================

/**
 * 时间线项配置
 */
export interface TimelineItem {
  /**
   * 唯一标识
   */
  key?: React.Key;

  /**
   * 标题
   */
  title?: React.ReactNode;

  /**
   * 副标题（通常用于显示时间）
   */
  subTitle?: React.ReactNode;

  /**
   * 描述内容
   */
  desc?: React.ReactNode;

  /**
   * 额外内容（显示在描述下方）
   */
  extra?: React.ReactNode;

  /**
   * 自定义节点图标
   * 优先级高于全局 icon
   */
  icon?: React.ReactNode;

  /**
   * 节点颜色/状态
   * @default 'default'
   */
  color?: TimelineItemStatus | string;

  /**
   * 是否为当前激活项
   */
  active?: boolean;

  /**
   * 是否禁用
   */
  disabled?: boolean;

  /**
   * 自定义节点样式
   */
  dotStyle?: CSSProperties;

  /**
   * 自定义内容样式
   */
  contentStyle?: CSSProperties;

  /**
   * 自定义类名
   */
  className?: string;

  /**
   * 点击回调
   */
  onClick?: (e: React.MouseEvent) => void;
}

// ==================== 组件属性定义 ====================

/**
 * Timeline 基础属性
 */
export interface TimelineBaseProps extends CommonProps {
  /**
   * 子元素（支持 Timeline.Item）
   */
  children?: React.ReactNode;

  /**
   * 数据源（与 children 二选一）
   */
  items?: TimelineItem[];

  /**
   * 全局默认图标
   */
  icon?: React.ReactNode;

  /**
   * 是否显示待完成项（最后一项显示为 pending 状态）
   */
  pending?: boolean | React.ReactNode;

  /**
   * pending 项的图标
   */
  pendingIcon?: React.ReactNode;

  /**
   * 是否倒序显示
   * @default false
   */
  reverse?: boolean;
}

/**
 * Timeline 布局属性
 */
export interface TimelineLayoutProps {
  /**
   * 方向
   * @default 'vertical'
   */
  direction?: TimelineDirection;

  /**
   * 内容位置模式
   * @default 'right'
   */
  mode?: TimelineMode;

  /**
   * 节点间距
   */
  gap?: number | string;
}

/**
 * Timeline 样式属性
 */
export interface TimelineStyleProps {
  /**
   * 自定义样式
   */
  style?: CSSProperties;

  /**
   * 自定义类名
   */
  className?: string;

  /**
   * 连接线类型
   * @default 'solid'
   */
  lineType?: TimelineLineType;

  /**
   * 连接线颜色
   */
  lineColor?: string;

  /**
   * 连接线宽度
   */
  lineWidth?: number;

  /**
   * 节点大小
   */
  dotSize?: number;

  /**
   * 默认节点颜色
   */
  dotColor?: string;

  /**
   * 是否显示连接线
   * @default true
   */
  showLine?: boolean;
}

/**
 * Timeline 事件属性
 */
export interface TimelineEventProps {
  /**
   * 点击项回调
   */
  onItemClick?: (item: TimelineItem, index: number, e: React.MouseEvent) => void;
}

/**
 * Timeline 组件完整属性
 */
export type TimelineProps =
  & TimelineBaseProps
  & TimelineLayoutProps
  & TimelineStyleProps
  & TimelineEventProps;

// ==================== Timeline.Item 属性 ====================

/**
 * Timeline.Item 组件属性
 */
export interface TimelineItemProps extends Omit<TimelineItem, 'key'> {
  /**
   * 子元素（作为内容）
   */
  children?: React.ReactNode;
}

// ==================== 兼容旧版属性 ====================

/**
 * 旧版 TimelineItemType
 * @deprecated 请使用 TimelineItem
 */
export type TimelineItemType = TimelineItem;

/**
 * 旧版属性兼容
 */
export interface LegacyTimelineProps {
  /**
   * @deprecated 请使用 items
   */
  data?: TimelineItem[];
}
