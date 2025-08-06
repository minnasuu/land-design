import React, { CSSProperties } from "react";
import { CommonProps } from "../types";

/**
 * Grid组件属性类型定义
 * 包含所有Grid组件支持的属性及其详细说明
 */

// ==================== 基础类型定义 ====================

/** 网格布局类型 */
export enum GridType {
  /** 列适应模式，列数固定，列宽自适应 */
  ColumnFit = 'column-fit',
  /** 列填充模式，列宽固定，列数自适应 */
  ColumnFill = 'column-fill',
  /** 行适应模式，行数固定，行高自适应 */
  RowFit = 'row-fit',
  /** 行填充模式，行高固定，行数自适应 */
  RowFill = 'row-fill',
  /** 列重复模式，按列重复固定数量 */
  ColumnRepeat = 'column-repeat',
  /** 行重复模式，按行重复固定数量 */
  RowRepeat = 'row-repeat',
  /** 默认模式 */
  Default = 'default',
}

// ==================== 属性接口定义 ====================

/**
 * Grid基础属性
 * 包含网格布局的基本配置和内容属性
 */
export interface GridBaseProps extends CommonProps {
  /** 
   * 网格布局类型
   * 定义网格的布局方式和行为
   * - column-fit: 列适应模式，列数固定，列宽自适应
   * - column-fill: 列填充模式，列宽固定，列数自适应
   * - row-fit: 行适应模式，行数固定，行高自适应
   * - row-fill: 行填充模式，行高固定，行数自适应
   * - column-repeat: 列重复模式，按列重复固定数量
   * - row-repeat: 行重复模式，按行重复固定数量
   * - default: 默认模式
   */
  type?: GridType;

  /** 
   * 子元素
   * 可以传入React节点作为网格的内容
   */
  children?: React.ReactNode;
}

/**
 * Grid尺寸属性
 * 用于配置网格的尺寸和间距
 */
export interface GridSizeProps {
  /** 
   * 自动填充模式下的最小宽度/高度
   * 在column-fill或row-fill模式下，设置元素的最小尺寸
   */
  autoSize?: number;

  /** 
   * 按行或按列重复时的重复数量
   * 在column-repeat或row-repeat模式下，设置重复的次数
   */
  repeatNum?: number;

  /** 
   * 行列间隙
   * 设置网格元素之间的统一间距
   */
  gap?: number;

  /** 
   * 列间隙
   * 设置网格列之间的间距
   */
  columnGap?: number;

  /** 
   * 行间隙
   * 设置网格行之间的间距
   */
  rowGap?: number;
}

/**
 * Grid样式属性
 * 用于配置网格的视觉样式
 */
export interface GridStyleProps {
  /** 
   * 自定义样式
   * 可以传入CSS样式对象来自定义网格外观
   */
  style?: CSSProperties;

  /** 
   * 自定义类名
   * 可以传入额外的CSS类名
   */
  className?: string;
}

/**
 * Grid组件完整属性类型
 * 合并了所有属性接口
 */
export type GridProps = GridBaseProps &
  GridSizeProps &
  GridStyleProps;

/**
 * 属性优先级说明：
 * 1. type属性决定网格的布局方式和行为
 * 2. autoSize在column-fill或row-fill模式下生效
 * 3. repeatNum在column-repeat或row-repeat模式下生效
 * 4. gap设置统一间距，columnGap和rowGap可以分别设置
 * 5. 间距优先级：columnGap/rowGap > gap > 默认间距
 * 6. children是网格的主要内容
 * 7. style和className会覆盖默认样式
 * 8. 不同的type会影响autoSize和repeatNum的行为
 */ 