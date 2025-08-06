import React, { CSSProperties, ReactNode } from "react";
import { CommonProps } from "../types";

/**
 * Image组件属性类型定义
 * 包含所有Image组件支持的属性及其详细说明
 */

// ==================== 属性接口定义 ====================

/**
 * Image基础属性
 * 包含图片的基本配置和内容属性
 */
export interface ImageBaseProps extends CommonProps {
  /** 
   * 图片地址
   * 图片的URL地址，支持本地路径或网络地址
   */
  url?: string;

  /** 
   * 图片描述
   * 图片的描述信息，用于屏幕阅读器等辅助技术
   */
  alt?: string;

  /** 
   * 兜底内容
   * 当主图片加载失败时显示的内容，可以是图片URL或React节点
   */
  fallbackUrl?: string;

  fallback?: ReactNode;
}

/**
 * Image样式属性
 * 用于配置图片的视觉样式
 */
export interface ImageStyleProps {
  /** 
   * 组件级样式
   * 可以传入CSS样式对象来自定义图片组件外观
   */
  style?: CSSProperties;

  /** 
   * 组件级类名
   * 可以传入额外的CSS类名
   */
  className?: string;

  /** 
   * 图片样式
   * 可以传入CSS样式对象来自定义图片元素外观
   */
  imgStyle?: CSSProperties;

  /** 
   * 图片类名
   * 可以传入额外的CSS类名给图片元素
   */
  imgClassName?: string;
}

/**
 * Image尺寸属性
 * 用于配置图片的尺寸和比例
 */
export interface ImageSizeProps {
  /** 
   * 图片比例
   * 设置图片的宽高比，如16/9表示16:9的比例
   */
  ratio?: number;
}

/**
 * Image组件完整属性类型
 * 合并了所有属性接口
 */
export type ImageProps = ImageBaseProps &
  ImageStyleProps &
  ImageSizeProps;

/**
 * 属性优先级说明：
 * 1. url是图片的源地址，可以是本地路径或网络地址
 * 2. fallback是兜底内容，当主图片加载失败时显示，可以是图片URL或React节点
 * 3. showError控制是否显示错误提示，默认为true
 * 4. style和className分别控制组件容器和图片元素的样式
 * 5. imgStyle和imgClassName专门用于图片元素的样式定制
 * 6. ratio属性设置图片的宽高比例，如果不设置则自动获取
 * 7. onLoadStart、onLoadSuccess、onLoadError提供加载状态的回调
 * 8. 样式优先级：imgStyle > style > 默认样式
 * 9. 当url为空时，组件可能显示占位符或错误状态
 * 10. 兜底内容优先级：fallback > 默认错误态 > 空状态
 */ 