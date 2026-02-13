import { ReactNode } from 'react';
import { CommonProps } from '../types';

// ==================== 基础类型定义 ====================

/** 面包屑项 */
export interface BreadCrumbItem {
  /** 唯一标识 */
  value: string;
  /** 显示内容 */
  label: ReactNode;
  /** 提示信息 */
  tip?: string;
  /** 最大宽度（px） */
  maxWidth?: number;
}

// ==================== 属性接口定义 ====================

/** BreadCrumb 组件属性 */
export interface BreadCrumbProps extends CommonProps {
  /** 面包屑数据 */
  items?: BreadCrumbItem[];
  /** 当前激活项的 value */
  current?: string;
  /**
   * 是否显示溢出遮罩
   * @default false
   */
  showMask?: boolean;
  /**
   * 省略时 hover 显示完整内容
   * @default false
   */
  hoverPreview?: boolean;
  /**
   * 面包屑项点击回调
   * @param item 被点击的面包屑项
   */
  onChange?: (item: BreadCrumbItem) => void;
}

// ==================== 内部组件属性 ====================

/** BreadCrumbItem 内部组件属性（不导出） */
export interface BreadCrumbItemProps {
  /** 是否激活 */
  active: boolean;
  /** 点击回调 */
  onChange: () => void;
  /** 面包屑项数据 */
  item: BreadCrumbItem;
  /** 当前项索引 */
  index: number;
  /** 省略时 hover 显示完整内容 */
  hoverPreview?: boolean;
}
