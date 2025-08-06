import React, { CSSProperties } from "react";
import { CommonProps } from "../types";

/**
 * BreadCrumb组件属性类型定义
 * 包含所有BreadCrumb组件支持的属性及其详细说明
 */

// ==================== 基础类型定义 ====================

/**
 * BreadCrumbItem面包屑项类型
 * 定义单个面包屑项的配置信息
 */
export type BreadCrumbItemType = {
  /** 
   * 项目值
   * 面包屑项的唯一标识
   */
  value: string;

  /** 
   * 项目标签
   * 可以传入React节点作为面包屑项的显示内容
   */
  label: React.ReactNode;

  /** 
   * 提示信息
   * 面包屑项的提示文本
   */
  tip?: string;

  /** 
   * 最大宽度
   * 面包屑项的最大宽度限制
   */
  maxWidth?: number;
};

// ==================== 属性接口定义 ====================

/**
 * BreadCrumb基础属性
 * 包含面包屑的基本配置和内容属性
 */
export interface BreadCrumbBaseProps extends CommonProps {
  /** 
   * 子元素
   * 可以传入React节点作为面包屑的内容
   */
  children?: React.ReactNode;

  /** 
   * 面包屑数据
   * 包含所有面包屑项的配置信息
   */
  data?: BreadCrumbItemType[];

  /** 
   * 当前激活项
   * 当前激活的面包屑项的值
   */
  current?: string;
}

/**
 * BreadCrumb显示属性
 * 用于配置面包屑的显示方式
 */
export interface BreadCrumbDisplayProps {
  /** 
   * 是否显示遮罩
   * 设置为true时会显示遮罩效果
   */
  showMask?: boolean;

  /** 
   * 省略时hover显示全部内容
   * 设置为true时鼠标悬停会显示完整内容
   */
  hoverPreview?: boolean;
}

/**
 * BreadCrumb样式属性
 * 用于配置面包屑的视觉样式
 */
export interface BreadCrumbStyleProps {
  /** 
   * 自定义样式
   * 可以传入CSS样式对象来自定义面包屑外观
   */
  style?: CSSProperties;

  /** 
   * 自定义类名
   * 可以传入额外的CSS类名
   */
  className?: string;
}

/**
 * BreadCrumb事件属性
 * 用于配置面包屑的交互事件
 */
export interface BreadCrumbEventProps {
  /** 
   * 变化回调
   * 当面包屑项被点击时触发
   * @param item 被点击的面包屑项
   */
  onChange?: (item: BreadCrumbItemType) => void;
}

/**
 * BreadCrumb组件完整属性类型
 * 合并了所有属性接口
 */
export type BreadCrumbProps = BreadCrumbBaseProps &
  BreadCrumbDisplayProps &
  BreadCrumbStyleProps &
  BreadCrumbEventProps;

/**
 * BreadCrumbItem组件属性接口
 * 用于面包屑项的内部组件
 */
export interface BreadCrumbItemProps {
  /** 
   * 是否激活
   * 控制面包屑项的激活状态
   */
  active: boolean;

  /** 
   * 变化回调
   * 当面包屑项被点击时触发
   */
  onChange: () => void;

  /** 
   * 项目数据
   * 面包屑项的数据
   */
  item: BreadCrumbItemType;

  /** 
   * 项目索引
   * 面包屑项在数组中的索引
   */
  index: number;

  /** 
   * 省略时hover显示全部内容
   * 设置为true时鼠标悬停会显示完整内容
   */
  hoverPreview?: boolean;
}

/**
 * 属性优先级说明：
 * 1. data包含所有面包屑项的配置信息
 * 2. current控制当前激活的面包屑项
 * 3. showMask控制是否显示遮罩效果
 * 4. hoverPreview控制悬停预览功能
 * 5. onChange处理面包屑项的点击事件
 * 6. style和className会覆盖默认样式
 * 7. 面包屑项支持自定义图标和样式
 * 8. 组件支持响应式布局
 * 9. 当内容过长时会自动省略
 * 10. 支持键盘导航和辅助功能
 */ 