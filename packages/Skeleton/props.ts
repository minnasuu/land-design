import React, { CSSProperties } from "react";
import { CommonProps } from "../types";

/**
 * Skeleton组件属性类型定义
 * 包含所有Skeleton组件支持的属性及其详细说明
 */

// ==================== 属性接口定义 ====================

/**
 * Skeleton基础属性
 * 包含骨架屏的基本配置和内容属性
 */
export interface SkeletonBaseProps extends CommonProps {
  /** 
   * 子元素
   * 可以传入React节点作为骨架屏的内容
   */
  children?: React.ReactNode;
}

/**
 * Skeleton尺寸属性
 * 用于配置骨架屏的尺寸
 */
export interface SkeletonSizeProps {
  /** 
   * 骨架屏宽度
   * 设置骨架屏的宽度
   */
  width?: number | string;

  /** 
   * 骨架屏高度
   * 设置骨架屏的高度
   */
  height?: number | string;

  /** 
   * 骨架屏圆角
   * 设置骨架屏的圆角半径
   */
  radius?: number | string;
}

/**
 * Skeleton颜色属性
 * 用于配置骨架屏的颜色
 */
export interface SkeletonColorProps {
  /** 
   * 骨架屏起始渐变色
   * 设置骨架屏渐变的起始颜色
   */
  start?: string;

  /** 
   * 骨架屏结束渐变色
   * 设置骨架屏渐变的结束颜色
   */
  stop?: string;
}

/**
 * Skeleton样式属性
 * 用于配置骨架屏的视觉样式
 */
export interface SkeletonStyleProps {
  /** 
   * 自定义样式
   * 可以传入CSS样式对象来自定义骨架屏外观
   */
  style?: CSSProperties;

  /** 
   * 自定义类名
   * 可以传入额外的CSS类名
   */
  className?: string;
}

/**
 * Skeleton组件完整属性类型
 * 合并了所有属性接口
 */
export type SkeletonProps = SkeletonBaseProps &
  SkeletonSizeProps &
  SkeletonColorProps &
  SkeletonStyleProps;

/**
 * 属性优先级说明：
 * 1. width和height控制骨架屏的尺寸
 * 2. radius控制骨架屏的圆角
 * 3. start和stop控制渐变色效果
 * 4. style和className会覆盖默认样式
 * 5. 当width或height未设置时，使用默认尺寸
 * 6. 渐变效果从start颜色过渡到stop颜色
 * 7. 骨架屏通常用于加载状态的占位显示
 * 8. 样式优先级：style > className > 默认样式
 * 9. 组件支持动画效果模拟加载状态
 * 10. 可以自定义骨架屏的形状和颜色
 */ 