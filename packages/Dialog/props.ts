import React, { CSSProperties, ReactNode } from "react";
import { CommonProps } from "../types";

/**
 * Dialog组件属性类型定义
 * 包含所有Dialog组件支持的属性及其详细说明
 */

// ==================== 基础类型定义 ====================

/** 对话框尺寸 */
export type DialogSize = "small" | "medium" | "large";

// ==================== 属性接口定义 ====================

/**
 * Dialog基础属性
 * 包含对话框的基本配置和内容属性
 */
export interface DialogBaseProps extends CommonProps {
  /** 
   * 子元素
   * 可以传入React节点作为对话框的内容
   */
  children?: ReactNode;

  /** 
   * 是否显示弹窗
   * 控制对话框的显示与隐藏
   */
  show?: boolean;
}

/**
 * Dialog布局属性
 * 用于配置对话框的布局方式
 */
export interface DialogLayoutProps {
  /** 
   * 是否需要背景遮罩
   * 设置为true时会显示背景遮罩
   */
  mask?: boolean;

  /** 
   * 弹窗大小
   * - small: 小尺寸
   * - medium: 中等尺寸（默认）
   * - large: 大尺寸
   */
  size?: DialogSize;
}

/**
 * Dialog头部属性
 * 用于配置对话框的头部内容
 */
export interface DialogHeaderProps {
  /** 
   * 弹窗标题
   * 可以传入字符串或React节点作为对话框标题
   */
  title?: string | ReactNode;

  /** 
   * 自定义头部左侧
   * 可以传入React节点作为头部左侧内容
   */
  headerLeftComponent?: ReactNode;

  /** 
   * 自定义头部右侧
   * 可以传入React节点作为头部右侧内容
   */
  headerRightComponent?: ReactNode;

  /** 
   * 自定义头部
   * 可以传入React节点完全自定义头部
   */
  headerComponent?: ReactNode;

  /** 
   * 是否隐藏头部分割线
   * 设置为true时会隐藏头部的分割线
   */
  useHeaderDivider?: boolean;
}

/**
 * Dialog尾部属性
 * 用于配置对话框的尾部内容
 */
export interface DialogFooterProps {
  /** 
   * 自定义尾部左侧
   * 可以传入React节点作为尾部左侧内容
   */
  footerLeftComponent?: ReactNode;

  /** 
   * 自定义尾部右侧
   * 可以传入React节点作为尾部右侧内容
   */
  footerRightComponent?: ReactNode;

  /** 
   * 自定义尾部
   * 可以传入React节点完全自定义尾部
   */
  footerComponent?: ReactNode;

  /** 
   * 是否隐藏尾部分割线
   * 设置为true时会隐藏尾部的分割线
   */
  useFooterDivider?: boolean;

  /** 
   * 取消按钮文案
   * 可以传入字符串或React节点作为取消按钮文本
   */
  cancelLabel?: string | ReactNode;

  /** 
   * 确定按钮文案
   * 可以传入字符串或React节点作为确定按钮文本
   */
  submitLabel?: string | ReactNode;
}

/**
 * Dialog样式属性
 * 用于配置对话框的视觉样式
 */
export interface DialogStyleProps {
  /** 
   * 外层样式
   * 对话框外层容器的样式
   */
  wrapStyle?: CSSProperties;

  /** 
   * 外层类名
   * 对话框外层容器的类名
   */
  wrapClassName?: string;

  /** 
   * 内层样式
   * 对话框内层容器的样式
   */
  contentStyle?: CSSProperties;

  /** 
   * 内层类名
   * 对话框内层容器的类名
   */
  contentClassName?: string;

  /** 
   * body层样式
   * 对话框内容区域的样式
   */
  bodyStyle?: CSSProperties;

  /** 
   * body层类名
   * 对话框内容区域的类名
   */
  bodyClassName?: string;

  /** 
   * 遮罩样式
   * 背景遮罩的样式
   */
  maskStyle?: CSSProperties;
}

/**
 * Dialog事件属性
 * 用于配置对话框的交互事件
 */
export interface DialogEventProps {
  /** 
   * 关闭弹窗事件
   * 当对话框关闭时触发
   */
  onClose?: () => void;

  /** 
   * 取消事件
   * 当取消按钮被点击时触发
   */
  onCancel?: () => void;

  /** 
   * 确定事件
   * 当确定按钮被点击时触发
   */
  onSubmit?: () => void;
}

/**
 * Dialog组件完整属性类型
 * 合并了所有属性接口
 */
export type DialogProps = DialogBaseProps &
  DialogLayoutProps &
  DialogHeaderProps &
  DialogFooterProps &
  DialogStyleProps &
  DialogEventProps;

/**
 * 属性优先级说明：
 * 1. show控制对话框的显示与隐藏
 * 2. mask控制是否显示背景遮罩
 * 3. size控制对话框的尺寸
 * 4. title、headerComponent等控制头部显示
 * 5. footerComponent、cancelLabel、submitLabel等控制尾部显示
 * 6. onClose、onCancel、onSubmit处理各种事件
 * 7. 样式优先级：具体样式 > 类名 > 默认样式
 * 8. 头部优先级：headerComponent > headerLeftComponent/headerRightComponent > title
 * 9. 尾部优先级：footerComponent > footerLeftComponent/footerRightComponent > 按钮
 * 10. 当mask为true时，点击遮罩会触发onClose
 */ 