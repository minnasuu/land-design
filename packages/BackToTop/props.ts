import React, { CSSProperties } from 'react';
import { CommonProps } from '../types';

/**
 * BackToTop组件属性类型定义
 * 包含所有BackToTop组件支持的属性及其详细说明
 */

// ==================== 基础类型定义 ====================

/** 定位方式 */
export type BackToTopPosition = "fixed" | "absolute";

/** 显示动画类型 */
export type BackToTopAnimation = "fade" | "slide" | "scale" | "none";

/** 图标方向 */
export type BackToTopIconDirection = "up" | "down" | "left" | "right";

// ==================== 属性接口定义 ====================

/**
 * BackToTop基础属性
 * 包含组件的基本配置和定位属性
 */
export interface BackToTopBaseProps extends CommonProps {
  /** 
   * 是否固定定位
   * - true: 相对于视口固定定位（默认）
   * - false: 相对于父容器绝对定位
   */
  fixed?: boolean;

  /** 
   * 滚动容器元素
   * 指定要监听滚动的容器元素，默认为document.body
   * 当fixed为false时，如果未指定target，会使用父容器作为滚动容器
   */
  target?: Element;

  /** 
   * 滚动到指定高度才显示
   * 当滚动距离超过此高度时，组件才会显示
   * 默认值：600px
   */
  visibleHeight?: number;

  /** 
   * 距离右侧的偏移量
   * 组件距离容器右侧的距离
   * 默认值：24px
   */
  offsetRight?: number;

  /** 
   * 距离底部的偏移量
   * 组件距离容器底部的距离
   * 默认值：24px
   */
  offsetBottom?: number;
}

/**
 * BackToTop样式属性
 * 用于配置组件的视觉样式
 */
export interface BackToTopStyleProps {
  /** 
   * 自定义样式
   * 可以传入CSS样式对象来自定义组件外观
   */
  style?: CSSProperties;

  /** 
   * 自定义类名
   * 可以传入额外的CSS类名
   */
  className?: string;

  /** 
   * 组件宽度
   * 设置组件的宽度，默认为40px
   */
  width?: number | string;

  /** 
   * 组件高度
   * 设置组件的高度，默认为40px
   */
  height?: number | string;

  /** 
   * 背景颜色
   * 设置组件的背景颜色
   */
  backgroundColor?: string;

  /** 
   * 图标颜色
   * 设置图标的颜色
   */
  iconColor?: string;

  /** 
   * 边框圆角
   * 设置组件的边框圆角
   */
  borderRadius?: number | string;

  /** 
   * 阴影效果
   * 设置组件的阴影效果
   */
  boxShadow?: string;
}

/**
 * BackToTop交互属性
 * 用于配置组件的交互行为
 */
export interface BackToTopInteractionProps {
  /** 
   * 点击事件回调
   * 当组件被点击时触发，在默认滚动行为之前执行
   */
  onClick?: (e: React.MouseEvent) => void;

  /** 
   * 滚动完成回调
   * 当滚动到顶部完成时触发
   */
  onScrollComplete?: () => void;

  /** 
   * 显示状态变化回调
   * 当组件的显示/隐藏状态发生变化时触发
   */
  onVisibilityChange?: (visible: boolean) => void;

  /** 
   * 是否禁用
   * 设置为true时组件不可点击
   */
  disabled?: boolean;
}

/**
 * BackToTop动画属性
 * 用于配置组件的动画效果
 */
export interface BackToTopAnimationProps {
  /** 
   * 显示动画类型
   * - fade: 淡入淡出动画
   * - slide: 滑动动画
   * - scale: 缩放动画
   * - none: 无动画
   */
  animation?: BackToTopAnimation;

  /** 
   * 动画持续时间
   * 设置动画的持续时间，单位为毫秒
   */
  animationDuration?: number;

  /** 
   * 是否启用悬停动画
   * 设置为true时鼠标悬停会有动画效果
   */
  hoverAnimation?: boolean;
}

/**
 * BackToTop图标属性
 * 用于配置组件的图标
 */
export interface BackToTopIconProps {
  /** 
   * 自定义图标
   * 可以传入React节点作为自定义图标
   * 如果不传入，将使用默认的向上箭头图标
   */
  icon?: React.ReactNode;

  /** 
   * 图标大小
   * 设置图标的大小，默认为18px
   */
  iconSize?: number;

  /** 
   * 图标方向
   * 设置图标的方向，默认为up
   */
  iconDirection?: BackToTopIconDirection;

  /** 
   * 图标描边宽度
   * 设置图标的描边宽度，默认为3px
   */
  iconStrokeWidth?: number;
}

/**
 * BackToTop滚动属性
 * 用于配置滚动行为
 */
export interface BackToTopScrollProps {
  /** 
   * 滚动行为
   * 设置滚动到顶部的行为方式
   * - smooth: 平滑滚动（默认）
   * - instant: 瞬间跳转
   */
  scrollBehavior?: ScrollBehavior;

  /** 
   * 滚动目标位置
   * 设置滚动到的目标位置，默认为0（顶部）
   */
  scrollTarget?: number;

  /** 
   * 滚动偏移量
   * 在滚动目标位置基础上增加的偏移量
   */
  scrollOffset?: number;
}

/**
 * BackToTop组件完整属性类型
 * 合并了所有属性接口
 */
export type BackToTopProps = BackToTopBaseProps &
  BackToTopStyleProps &
  BackToTopInteractionProps &
  BackToTopAnimationProps &
  BackToTopIconProps &
  BackToTopScrollProps;

/**
 * 属性优先级说明：
 * 1. style属性会覆盖width、height、backgroundColor等样式属性
 * 2. icon属性会覆盖iconSize、iconDirection、iconStrokeWidth等图标属性
 * 3. disabled属性会禁用所有交互功能
 * 4. onClick回调会在默认滚动行为之前执行
 * 5. 当fixed为false且未指定target时，会自动使用父容器作为滚动容器
 */ 