import React, { CSSProperties } from "react";
import { CommonProps } from "../types";

/**
 * Swiper组件属性类型定义
 * 包含所有Swiper组件支持的属性及其详细说明
 */

// ==================== 基础类型定义 ====================

/** 轮播方向 */
export type SwiperDirection = "horizontal" | "vertical";

/** 轮播效果 */
export type SwiperEffect = "slide" | "fade" | "cube" | "coverflow" | "flip";

/** 自动播放方向 */
export type SwiperAutoplayDirection = "forward" | "backward";

// ==================== 属性接口定义 ====================

/**
 * Swiper基础属性
 * 包含轮播组件的基本配置和内容属性
 */
export interface SwiperBaseProps extends CommonProps {
  /** 
   * 子元素
   * 可以传入React节点作为轮播的内容
   */
  children?: React.ReactNode;

  /** 
   * 轮播方向
   * - horizontal: 水平轮播（默认）
   * - vertical: 垂直轮播
   */
  direction?: SwiperDirection;

  /** 
   * 轮播效果
   * - slide: 滑动效果（默认）
   * - fade: 淡入淡出效果
   * - cube: 立方体效果
   * - coverflow: 覆盖流效果
   * - flip: 翻转效果
   */
  effect?: SwiperEffect;
}

/**
 * Swiper控制属性
 * 用于配置轮播的控制行为
 */
export interface SwiperControlProps {
  /** 
   * 当前激活的轮播项索引
   * 控制当前显示的轮播项
   */
  activeIndex?: number;

  /** 
   * 是否显示指示器
   * 设置为true时会显示轮播指示器
   */
  showIndicators?: boolean;

  /** 
   * 是否显示导航按钮
   * 设置为true时会显示上一页/下一页按钮
   */
  showNavigation?: boolean;

  /** 
   * 是否循环播放
   * 设置为true时轮播会无限循环
   */
  loop?: boolean;

  /** 
   * 是否自动播放
   * 设置为true时会自动轮播
   */
  autoplay?: boolean;

  /** 
   * 自动播放间隔时间
   * 设置自动播放的时间间隔，单位为毫秒
   */
  autoplayDelay?: number;

  /** 
   * 自动播放方向
   * - forward: 向前播放（默认）
   * - backward: 向后播放
   */
  autoplayDirection?: SwiperAutoplayDirection;
}

/**
 * Swiper样式属性
 * 用于配置轮播的视觉样式
 */
export interface SwiperStyleProps {
  /** 
   * 自定义样式
   * 可以传入CSS样式对象来自定义轮播外观
   */
  style?: CSSProperties;

  /** 
   * 自定义类名
   * 可以传入额外的CSS类名
   */
  className?: string;

  /** 
   * 轮播容器高度
   * 设置轮播容器的高度
   */
  height?: number | string;

  /** 
   * 轮播容器宽度
   * 设置轮播容器的宽度
   */
  width?: number | string;
}

/**
 * Swiper事件属性
 * 用于配置轮播的交互事件
 */
export interface SwiperEventProps {
  /** 
   * 轮播切换事件
   * 当轮播项切换时触发
   * @param index 当前激活的索引
   */
  onChange?: (index: number) => void;

  /** 
   * 轮播开始事件
   * 当轮播开始时触发
   */
  onStart?: () => void;

  /** 
   * 轮播结束事件
   * 当轮播结束时触发
   */
  onEnd?: () => void;
}

/**
 * Swiper组件完整属性类型
 * 合并了所有属性接口
 */
export type SwiperProps = SwiperBaseProps &
  SwiperControlProps &
  SwiperStyleProps &
  SwiperEventProps;

/**
 * 属性优先级说明：
 * 1. children是轮播的主要内容，每个子元素代表一个轮播项
 * 2. direction控制轮播的方向，影响动画效果
 * 3. effect控制轮播的切换效果
 * 4. activeIndex控制当前显示的轮播项
 * 5. showIndicators和showNavigation控制UI元素的显示
 * 6. loop控制是否循环播放
 * 7. autoplay和autoplayDelay控制自动播放行为
 * 8. autoplayDirection控制自动播放的方向
 * 9. height和width设置轮播容器的尺寸
 * 10. onChange、onStart、onEnd处理轮播的各种事件
 * 11. style和className会覆盖默认样式
 * 12. 当autoplay为true时，autoplayDelay必须大于0
 */