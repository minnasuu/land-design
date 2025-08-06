import React, { CSSProperties } from "react";
import { CommonProps } from "../types";

/**
 * Tag组件属性类型定义
 * 包含所有Tag组件支持的属性及其详细说明
 */

// ==================== 属性接口定义 ====================

/**
 * Tag基础属性
 * 包含标签的基本配置和交互属性
 */
export interface TagBaseProps extends CommonProps {
  /** 
   * 标签内容
   * 可以传入React节点作为标签的显示内容
   */
  children?: React.ReactNode;

  /** 
   * 标签图标
   * 可以传入React节点作为标签的图标
   */
  icon?: React.ReactNode;

  /** 
   * 是否可删除
   * 设置为true时会显示删除按钮
   */
  canDelete?: boolean;
}

/**
 * Tag样式属性
 * 用于配置标签的视觉样式
 */
export interface TagStyleProps {
  /** 
   * 主题
   * 设置标签的主题
   */
  theme?: 'gray' | 'white';

  /** 
   * 自定义样式
   * 可以传入CSS样式对象来自定义标签外观
   */
  style?: CSSProperties;

  /** 
   * 自定义类名
   * 可以传入额外的CSS类名
   */
  className?: string;

  /** 
   * 标签颜色
   * 设置标签的文字颜色
   */
  color?: string;

  /** 
   * 边框颜色
   * 设置标签的边框颜色
   */
  border?: string;

  /** 
   * 背景颜色
   * 设置标签的背景颜色
   */
  background?: string;
}

/**
 * Tag事件属性
 * 用于配置标签的交互事件
 */
export interface TagEventProps {
  /** 
   * 删除事件
   * 当用户点击删除按钮时触发
   * @param e 事件对象
   */
  onDelete?: (e: React.MouseEvent) => void;
}

/**
 * Tag组件完整属性类型
 * 合并了所有属性接口
 */
export type TagProps = TagBaseProps &
  TagStyleProps &
  TagEventProps;

/**
 * 属性优先级说明：
 * 1. children是标签的主要内容，可以是文本或其他React节点
 * 2. icon会在标签内容前显示图标
 * 3. canDelete和onDelete配合使用，canDelete为true时才会显示删除按钮
 * 4. color、border、background分别控制标签的不同样式属性
 * 5. style和className会覆盖默认样式
 * 6. 当canDelete为false时，onDelete事件不会触发
 * 7. 样式属性的优先级：style > background/border/color > 默认样式
 */