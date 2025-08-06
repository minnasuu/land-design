import React, { CSSProperties } from 'react'
import { PopOverProps } from '../PopOver/props';

/**
 * Button组件属性类型定义
 * 包含所有Button组件支持的属性及其详细说明
 */

// ==================== 基础类型定义 ====================

/** 按钮类型 */
export type ButtonType = "text" | "fill" | "background" | "outline" | "dashed" | 'transparent';

/** 按钮状态 */
export type ButtonStatus = "default" | "primary" | "warning" | "danger" | "success";

/** 按钮尺寸 */
export type ButtonSize = 'mini' | 'small' | 'default' | 'large';

/** 按钮文字对齐方式 */
export type ButtonJustify = "center" | "start" | "end";

/** 按钮链接目标 */
export type ButtonTarget = "_self" | "_blank" | "_top" | "_parent";

// ==================== 属性接口定义 ====================

/**
 * 按钮基础属性
 * 包含按钮的基本配置和交互属性
 */
export interface ButtonBaseProps {
  /** 
   * 按钮类型
   * - text: 文字按钮，无背景和边框
   * - fill: 填充按钮，有背景色
   * - background: 背景按钮，有背景色和边框
   * - outline: 描边按钮，有边框无背景（默认）
   * - dashed: 虚线按钮，虚线边框
   * - transparent: 透明按钮，完全透明
   */
  type?: ButtonType;

  /** 
   * 按钮状态
   * - default: 默认状态
   * - primary: 主要状态
   * - warning: 警告状态
   * - danger: 危险状态
   * - success: 成功状态
   */
  status?: ButtonStatus;

  /** 
   * 按钮尺寸
   * - mini: 迷你尺寸
   * - small: 小尺寸
   * - default: 默认尺寸
   * - large: 大尺寸
   */
  size?: ButtonSize;

  /** 
   * 是否禁用按钮
   * 禁用后按钮不可点击，样式会变灰
   */
  disabled?: boolean;

  /** 
   * 按钮文字对齐方式
   * - center: 居中对齐（默认）
   * - start: 左对齐
   * - end: 右对齐
   */
  justify?: ButtonJustify;

  /** 
   * 是否为块级按钮
   * 设置为true时按钮会占满父容器的宽度
   */
  block?: boolean;

  /** 
   * 自定义样式
   * 可以传入CSS样式对象来自定义按钮外观
   */
  style?: CSSProperties;

  /** 
   * 自定义类名
   * 可以传入额外的CSS类名
   */
  className?: string;

  /** 
   * 点击事件回调
   * 当按钮被点击时触发
   */
  onClick?: (e: React.MouseEvent) => void;

  /** 
   * 子元素
   * 可以传入React节点作为按钮内容
   */
  children?: React.ReactNode;

  /** 
   * 按钮原生事件
   * 可以传入HTML button元素的原生属性
   */
  nativeEvent?: React.ButtonHTMLAttributes<HTMLButtonElement>;
}

/**
 * 按钮内容属性
 * 用于配置按钮的文本、图标等内容
 */
export interface ButtonContentProps {
  /** 
   * 按钮主要文案
   * 按钮的主要显示文本
   */
  text?: string;

  /** 
   * 按钮次要文案
   * 按钮的次要显示文本，通常显示在主文案下方
   */
      subText?: string;

  /** 
   * 按钮图标
   * 可以传入React节点作为按钮图标
   */
  icon?: React.ReactNode;

  /** 
   * 子元素
   * 可以传入React节点作为按钮内容
   */
  children?: React.ReactNode;
}

/**
 * 按钮样式属性
 * 用于配置按钮的视觉样式
 */
export interface ButtonStyleProps {
  /** 
   * 是否加粗文字
   * 设置为true时按钮文字会加粗显示
   */
  bold?: boolean;

  /** 
   * 悬停时是否加粗文字
   * 设置为true时鼠标悬停时文字会加粗
   */
  hoverBold?: boolean;

  /** 
   * 是否为胶囊按钮
   * 设置为true时按钮会呈现胶囊形状（圆角较大）
   */
  capsule?: boolean;
}

/**
 * 按钮交互属性
 * 用于配置按钮的动画和交互效果
 */
export interface ButtonUXProps {
  /** 
   * 是否启用悬停动画
   * 设置为true时鼠标悬停会有动画效果
   */
  hoverAnimation?: boolean;

  /** 
   * 是否启用点击动画
   * 设置为true时点击会有动画效果
   */
  activeAnimation?: boolean;
}

/**
 * 按钮气泡属性
 * 用于配置按钮的提示气泡
 */
export interface ButtonPopProps {
  /** 
   * 气泡内容
   * 可以传入字符串或React节点作为气泡显示内容
   */
  tip?: React.ReactNode | string;

  /** 
   * 气泡配置
   * 可以传入PopOver组件的配置属性
   */
  tipProps?: PopOverProps;
}

/**
 * Button组件完整属性类型
 * 合并了所有属性接口
 */
export type ButtonProps = ButtonBaseProps &
  ButtonContentProps &
  ButtonStyleProps &
  ButtonUXProps &
  ButtonPopProps;

/**
 * 属性优先级说明：
 * 1. children > text + subText + icon（如果同时存在children和其他内容属性，优先显示children）
 * 2. 当只有icon时，按钮会变成纯图标按钮
 * 3. disabled属性会覆盖所有交互相关的属性
 * 4. nativeEvent中的属性会覆盖组件内部定义的相同属性
 */ 