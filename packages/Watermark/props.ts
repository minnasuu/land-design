import React, { CSSProperties } from "react";
import { CommonProps } from "../types";

/**
 * Watermark组件属性类型定义
 * 包含所有Watermark组件支持的属性及其详细说明
 */

// ==================== 属性接口定义 ====================

/**
 * Watermark基础属性
 * 包含水印组件的基本配置和内容属性
 */
export interface WatermarkBaseProps extends CommonProps {
  /** 
   * 子元素
   * 可以传入React节点作为水印组件的内容
   */
  children?: React.ReactNode;
}

/**
 * Watermark内容属性
 * 用于配置水印的显示内容
 */
export interface WatermarkContentProps {
  /** 
   * 水印内容
   * 可以传入字符串或React节点作为水印文本
   */
  content?: React.ReactNode | string;

  /** 
   * 图片水印内容
   * 图片水印的URL地址
   */
  url?: string;

  /** 
   * 水印宽度
   * 单个水印的宽度，默认为120
   */
  width?: number;

  /** 
   * 水印高度
   * 单个水印的高度，默认为64
   */
  height?: number;

  /** 
   * 水印间距
   * 水印之间的间距，默认为212
   */
  gap?: [number, number];

  /** 
   * 水印偏移量
   * 水印的偏移量，默认为[212, 212]
   */
  offset?: [number, number];

  /** 
   * 水印旋转角度
   * 水印的旋转角度，默认为-22
   */
  rotate?: number;

  /** 
   * 水印字体大小
   * 文本水印的字体大小，默认为16
   */
  fontSize?: number;

  /** 
   * 水印字体颜色
   * 文本水印的字体颜色，默认为rgba(0, 0, 0, 0.15)
   */
  fontColor?: string;

  /** 
   * 水印字体粗细
   * 文本水印的字体粗细，默认为normal
   */
  fontWeight?: string | number;

  /** 
   * 水印字体族
   * 文本水印的字体族，默认为sans-serif
   */
  fontFamily?: string;

  /** 
   * 水印层级
   * 水印的z-index值，默认为9
   */
  zIndex?: number;
}

/**
 * Watermark样式属性
 * 用于配置水印的视觉样式
 */
export interface WatermarkStyleProps {
  /** 
   * 自定义样式
   * 可以传入CSS样式对象来自定义水印外观
   */
  style?: CSSProperties;

  /** 
   * 自定义类名
   * 可以传入额外的CSS类名
   */
  className?: string;
}

/**
 * Watermark组件完整属性类型
 * 合并了所有属性接口
 */
export type WatermarkProps = WatermarkBaseProps &
  WatermarkContentProps &
  WatermarkStyleProps;

/**
 * 属性优先级说明：
 * 1. content设置水印的文本内容
 * 2. url设置图片水印的地址
 * 3. children是水印覆盖的内容
 * 4. style和className会覆盖默认样式
 * 5. 当content和url都存在时，优先显示图片水印
 * 6. 水印会覆盖在children内容之上
 * 7. 组件支持文本水印和图片水印两种模式
 * 8. 水印通常用于版权保护或品牌展示
 * 9. 样式优先级：style > className > 默认样式
 * 10. 水印会重复显示以覆盖整个区域
 * 11. 支持自定义水印大小、间距、旋转角度等
 * 12. 支持不同的水印重复模式
 * 13. 水印在容器内均匀分布，确保完整覆盖
 */