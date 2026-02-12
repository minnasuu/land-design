import React, { CSSProperties } from 'react';

/** 可排序项的基础数据结构 */
export interface SortableItemData {
  /** 唯一标识 */
  id: string;
  /** 业务扩展字段 */
  [key: string]: unknown;
}

/** 拖拽状态信息，传递给 renderItem */
export interface SortableItemState {
  /** 该项在列表中的索引 */
  index: number;
  /** 该项是否正在被拖拽（原始位占位项） */
  isDragging: boolean;
  /** 容器中是否有任何项正在被拖拽 */
  isAnySorting: boolean;
}

/** 排序结束回调参数 */
export interface SortEndEvent {
  /** 拖拽起始索引 */
  fromIndex: number;
  /** 拖拽结束索引 */
  toIndex: number;
}

/** 拖拽手柄 props，需要透传给自定义项内的拖拽手柄元素 */
export interface DragHandleProps {
  onMouseDown: (e: React.MouseEvent) => void;
  /** 标识此元素为拖拽手柄 */
  'data-sortable-handle': boolean;
  style: CSSProperties;
}

/** 排列方向 */
export type SortableDirection = 'vertical' | 'horizontal';

/** SortableContainer 组件属性 */
export interface SortableContainerProps<T extends SortableItemData = SortableItemData> {
  /** 数据源 */
  items: T[];
  /**
   * 自定义每项的渲染
   * @param item - 当前数据项
   * @param state - 拖拽状态（index、isDragging、isAnySorting）
   * @param dragHandleProps - 透传给拖拽手柄元素的 props
   */
  renderItem: (item: T, state: SortableItemState, dragHandleProps: DragHandleProps) => React.ReactNode;
  /** 排序结束回调 */
  onSortEnd?: (event: SortEndEvent) => void;
  /** 排列方向，默认 'vertical' */
  direction?: SortableDirection;
  /** 每项的高度（px），vertical 方向用于计算位移，默认 40 */
  itemHeight?: number;
  /** 每项的宽度（px），horizontal 方向用于计算位移，默认 120 */
  itemWidth?: number;
  /** 项之间的间距（px），默认 8 */
  gap?: number;
  /** 拖拽到容器边缘时的自动滚动速度（px），默认 10 */
  scrollSpeed?: number;
  /** 触发自动滚动的边缘阈值（px），默认 32 */
  scrollThreshold?: number;
  /**
   * 向下/右拖时 ghost 层级低于其他项（从后面经过），向上/左拖时层级高于其他项（从前面经过）
   * 默认 false（ghost 始终在最上层）
   */
  ghostAutoZIndex?: boolean;
  /** 是否禁用拖拽 */
  disabled?: boolean;
  /** 自定义类名 */
  className?: string;
  /** 自定义样式 */
  style?: CSSProperties;
}
