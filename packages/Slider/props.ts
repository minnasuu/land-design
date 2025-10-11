import React, { CSSProperties } from 'react';

/**
 * Slider组件属性类型定义
 */

export interface SliderProps {
  /** 
   * 输入值
   * 支持单个值或范围值 [min, max]
   */
  value?: number | [number, number];

  /** 
   * 自定义类名
   * 可以传入额外的CSS类名
   */
  className?: string;

  /** 
   * 自定义样式
   * 可以传入CSS样式对象来自定义组件外观
   */
  style?: CSSProperties;

  /** 
   * 子元素
   * 可以传入React节点作为组件内容
   */
  children?: React.ReactNode;

  /** 
   * 最小值
   * 设置滑块的最小值
   */
  min?: number;

  /** 
   * 最大值
   * 设置滑块的最大值
   */
  max?: number;

  /** 
   * 调节步数
   * 滑块移动的步长
   */
  step?: number;

  /** 
   * 是否为范围选择器
   * 设置为true时支持选择范围值
   */
  range?: boolean;

  /** 
   * 是否使用分割线
   * 设置为true时显示分割线
   */
  useDivider?: boolean;

  /** 
   * 前缀
   * 设置滑块的前缀
   */
  prefix?: React.ReactNode;

  /** 
   * 后缀
   * 设置滑块的后缀
   */
  suffix?: React.ReactNode;

  /** 
   * 是否显示提示
   * 设置为true时显示提示
   */
  showTooltip?: boolean;

  /** 
   * 提示位置
   * 设置提示的位置
   */
  tooltipPlacement?: 'top' | 'bottom' | 'left' | 'right';

  /** 
   * 提示格式化
   * 设置提示的格式化
   */
  tooltipFormatter?: (value: number) => string;

  /** 
   * 高度
   * 设置滑块的高度
   */
  height?: number;

  /** 
   * 滑块大小
   * 设置滑块的大小
   */
  thumbSize?: number;

  /** 
   * 默认背景色
   * 设置滑块的默认背景色
   */
  defaultBg?: string;

  /** 
   * 激活背景色
   * 设置滑块的激活背景色
   */
  activeBg?: string;

  /** 
   * 滑块样式
   * 设置滑块的样式
   */
  thumbStyle?: CSSProperties;

  /** 
   * 滑块类名
   * 设置滑块的类名
   */
  thumbClassName?: string;  

  /** 
   * 滑块内容
   * 设置滑块的内容
   */
  thumbContent?: React.ReactNode;

  /** 
   * 滑块内容样式
   * 设置滑块内容的样式
   */
  thumbContentStyle?: CSSProperties;

  /** 
   * 滑块内容类名
   * 设置滑块内容的类名
   */
  thumbContentClassName?: string;
}
