import React, { CSSProperties, MouseEvent } from "react";
import { CommonProps } from "../types";

/**
 * Icon组件属性类型定义
 * 包含所有Icon组件支持的属性及其详细说明
 */

// ==================== 属性接口定义 ====================

/**
 * Icon基础属性
 * 包含图标的基本配置和内容属性
 */
export interface IconBaseProps extends CommonProps {
  /** 
   * 子元素
   * 可以传入React节点作为图标的内容
   */
  children?: React.ReactNode;

  /** 
   * 其他属性
   * 允许传入其他任意属性
   */
  [key: string]: any;
}

/**
 * Icon样式属性
 * 用于配置图标的视觉样式
 */
export interface IconStyleProps {
  /** 
   * 自定义样式
   * 可以传入CSS样式对象来自定义图标外观
   */
  style?: CSSProperties;

  /** 
   * 自定义类名
   * 可以传入额外的CSS类名
   */
  className?: string;

  /** 
   * 图标颜色
   * 设置图标的颜色
   */
  color?: string;

  /** 
   * 图标尺寸
   * 设置图标的大小，单位为像素
   *  默认值为16
   */
  size?: number;

  /** 
   * 描边宽度
   * 设置图标的描边宽度
   */
  strokeWidth?: number;
}

/**
 * Icon事件属性
 * 用于配置图标的交互事件
 */
export interface IconEventProps {
  /** 
   * 点击事件
   * 当图标被点击时触发
   * @param e 鼠标事件对象
   */
  onClick?: (e: MouseEvent) => void;
}

/**
 * Icon组件完整属性类型
 * 合并了所有属性接口
 */
export type IconProps = IconBaseProps &
  IconStyleProps &
  IconEventProps;

/**
 * IconDefault组件属性
 * 扩展了Icon组件的默认图标功能
 */
export interface IconDefaultProps extends IconProps {
  /** 
   * 图标名称
   * 指定要显示的默认图标名称
   */
  name: string;
}

/**
 * 属性优先级说明：
 * 1. name指定要显示的默认图标名称
 * 2. color设置图标的颜色
 * 3. size设置图标的尺寸
 * 4. strokeWidth设置图标的描边宽度
 * 5. onClick处理图标的点击事件
 * 6. style和className会覆盖默认样式
 * 7. 样式优先级：style > color/size/strokeWidth > 默认样式
 * 8. 当name为空时，组件可能显示占位符或错误状态
 * 9. 组件支持传入任意其他属性
 * 10. IconDefaultProps专门用于显示预设的默认图标
 */ 