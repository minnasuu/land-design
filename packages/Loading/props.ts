import React, { CSSProperties } from "react";
import { CommonProps } from "../types";

/**
 * Loading组件属性类型定义
 * 包含所有Loading组件支持的属性及其详细说明
 */

// ==================== 属性接口定义 ====================

/**
 * Loading基础属性
 * 包含加载组件的基本配置和内容属性
 */
export interface LoadingBaseProps extends CommonProps {
  /** 
   * 子元素
   * 可以传入React节点作为加载组件的内容
   */
  children?: React.ReactNode;
}

/**
 * Loading样式属性
 * 用于配置加载组件的视觉样式
 */
export interface LoadingStyleProps {
  /** 
   * 自定义样式
   * 可以传入CSS样式对象来自定义加载组件外观
   */
  style?: CSSProperties;

  /** 
   * 自定义类名
   * 可以传入额外的CSS类名
   */
  className?: string;

  /** 
   * 加载图标尺寸
   * 设置加载图标的大小，单位为像素
   */
  size?: number | string;

  /** 
   * 描边宽度
   * 设置加载图标的描边宽度
   */
  strokeSize?: number | string;

  /** 
   * 加载图标颜色
   * 设置加载图标的颜色
   */
  color?: string;
}

/**
 * Loading组件完整属性类型
 * 合并了所有属性接口
 */
export type LoadingProps = LoadingBaseProps &
  LoadingStyleProps;

/**
 * 属性优先级说明：
 * 1. children是加载组件的主要内容
 * 2. size设置加载图标的大小
 * 3. strokeSize设置加载图标的描边宽度
 * 4. color设置加载图标的颜色
 * 5. style和className会覆盖默认样式
 * 6. 样式优先级：style > color/size/strokeSize > 默认样式
 * 7. 加载组件通常用于显示加载状态
 * 8. 当children存在时，加载图标会覆盖在内容上方
 * 9. 组件支持自定义加载动画效果
 * 10. 所有尺寸相关的属性都使用像素作为单位
 */ 