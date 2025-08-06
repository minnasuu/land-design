import React, { CSSProperties } from 'react';
import { CommonProps } from '../types';

/**
 * AutoContainer组件属性类型定义
 * 用于自动调整容器宽高比的响应式容器组件
 */

// ==================== 基础类型定义 ====================

/** 容器宽高比类型 */
export type ContainerRatio = number;

/** 容器方向类型 */
export type ContainerDirection = 'horizontal' | 'vertical' | 'auto';

// ==================== 属性接口定义 ====================

/**
 * AutoContainer基础属性
 * 包含容器的基本配置和布局属性
 */
export interface AutoContainerBaseProps {
  /** 
   * 容器宽高比
   * 用于计算内容区域的最佳尺寸
   * - 大于1: 宽大于高，内容区域会优先适应宽度
   * - 等于1: 正方形，内容区域会适应较小的边
   * - 小于1: 高大于宽，内容区域会优先适应高度
   * @default 1
   */
  ratio?: ContainerRatio;

  /** 
   * 容器方向
   * 手动指定容器的布局方向
   * - horizontal: 强制水平布局
   * - vertical: 强制垂直布局
   * - auto: 根据ratio自动判断（默认）
   * @default 'auto'
   */
  direction?: ContainerDirection;

  /** 
   * 是否禁用响应式调整
   * 设置为true时容器不会根据尺寸变化调整布局
   * @default false
   */
  disabled?: boolean;

  /** 
   * 自定义样式
   * 可以传入CSS样式对象来自定义容器外观
   */
  style?: CSSProperties;

  /** 
   * 自定义类名
   * 可以传入额外的CSS类名
   */
  className?: string;

  /** 
   * 子元素
   * 可以传入React节点作为容器内容
   */
  children?: React.ReactNode;
}

/**
 * AutoContainer包装器属性
 * 用于配置外层包装容器的样式
 */
export interface AutoContainerWrapperProps {
  /** 
   * 包装器类名
   * 用于自定义外层包装容器的CSS类名
   * 注意：这会与组件内部的land-auto-container类名合并
   */
  className?: string;

  /** 
   * 包装器样式
   * 用于自定义外层包装容器的CSS样式
   */
  style?: CSSProperties;
}

/**
 * AutoContainer内容区域属性
 * 用于配置内容区域的样式和行为
 */
export interface AutoContainerContentProps {
  /** 
   * 内容区域类名
   * 用于自定义内容区域的CSS类名
   */
  contentClassName?: string;

  /** 
   * 内容区域样式
   * 用于自定义内容区域的CSS样式
   * 注意：这会与组件内部计算的样式合并
   */
  contentStyle?: CSSProperties;

  /** 
   * 是否保持内容比例
   * 设置为true时内容会严格按照ratio比例显示
   * 设置为false时内容会适应容器尺寸
   * @default true
   */
  preserveRatio?: boolean;

  /** 
   * 内容对齐方式
   * 控制内容在容器中的对齐方式
   * - center: 居中对齐（默认）
   * - start: 起始对齐
   * - end: 结束对齐
   * - stretch: 拉伸填充
   */
  contentAlign?: 'center' | 'start' | 'end' | 'stretch';
}

/**
 * AutoContainer响应式属性
 * 用于配置响应式行为
 */
export interface AutoContainerResponsiveProps {
  /** 
   * 最小宽度
   * 内容区域的最小宽度限制
   */
  minWidth?: number | string;

  /** 
   * 最大宽度
   * 内容区域的最大宽度限制
   */
  maxWidth?: number | string;

  /** 
   * 最小高度
   * 内容区域的最小高度限制
   */
  minHeight?: number | string;

  /** 
   * 最大高度
   * 内容区域的最大高度限制
   */
  maxHeight?: number | string;

  /** 
   * 响应式断点
   * 在不同屏幕尺寸下使用不同的ratio值
   * 格式: { [breakpoint]: ratio }
   * 例如: { '768px': 16/9, '1024px': 4/3 }
   */
  breakpoints?: Record<string, ContainerRatio>;
}

/**
 * AutoContainer事件属性
 * 用于配置容器的事件处理
 */
export interface AutoContainerEventProps {
  /** 
   * 尺寸变化回调
   * 当容器尺寸发生变化时触发
   * @param dimensions 包含width、height、ratio的对象
   */
  onResize?: (dimensions: { width: number; height: number; ratio: number }) => void;

  /** 
   * 方向变化回调
   * 当容器方向发生变化时触发
   * @param direction 新的方向值
   */
  onDirectionChange?: (direction: ContainerDirection) => void;
}

/**
 * AutoContainer组件完整属性类型
 * 合并了所有属性接口
 */
export type AutoContainerProps = AutoContainerBaseProps &
  AutoContainerWrapperProps &
  AutoContainerContentProps &
  AutoContainerResponsiveProps &
  AutoContainerEventProps &
  CommonProps;

/**
 * 属性优先级说明：
 * 1. ratio > direction（当ratio存在时，direction会被忽略）
 * 2. 手动设置的style会覆盖组件内部计算的样式
 * 3. breakpoints中的配置会覆盖默认的ratio值
 * 4. disabled为true时会禁用所有响应式行为
 * 5. CommonProps中的属性具有最高优先级
 */ 