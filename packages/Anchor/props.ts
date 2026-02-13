import { ReactNode } from 'react';
import { CommonProps } from '../types';

// ==================== 基础类型定义 ====================

/** 锚点项 */
export interface AnchorItem {
  /** 唯一标识，对应页面中目标元素的 id */
  key: string;
  /** 锚点文字内容 */
  title: string;
  /** 子项，支持嵌套层级导航 */
  children?: AnchorItem[];
}

// ==================== 属性接口定义 ====================

/** Anchor 组件属性 */
export interface AnchorProps extends CommonProps {
  /**
   * 锚点数据，支持嵌套结构
   * 每个项必须包含唯一的 key 和 title
   */
  items?: AnchorItem[];
  /**
   * 锚点项之间的间距（px）
   * @default 4
   */
  gap?: number;
  /**
   * 锚点变化时的回调，参数为锚点项的 key
   * 点击或滚动触发自动选中时都会调用
   */
  onChange?: (key: string) => void;
  /**
   * 滚动偏移量（px），用于固定头部场景
   * @default 0
   */
  offsetTop?: number;
  /**
   * 滚动容器选择器
   * @default () => window
   */
  getContainer?: () => HTMLElement | Window;
  /**
   * 自定义锚点项渲染
   * @param item 当前锚点项数据
   * @param index 当前项索引
   * @param active 当前项是否激活
   * @param defaultNode 默认渲染内容
   * @returns 自定义渲染内容
   */
  renderItem?: (item: AnchorItem, index: number, active: boolean, defaultNode: ReactNode) => ReactNode;
}
