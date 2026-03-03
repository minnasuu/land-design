import React, { CSSProperties } from "react";
import { CommonProps } from "../types";

// ==================== 基础类型定义 ====================

/**
 * 标签尺寸
 */
export type TagSize = 'small' | 'medium' | 'large';

/**
 * 标签类型/变体
 */
export type TagVariant = 'filled' | 'outlined' | 'light';

/**
 * 预设颜色
 */
export type TagColor =
  | 'default'
  | 'primary'
  | 'success'
  | 'warning'
  | 'error'
  | 'info'
  | string; // 支持自定义颜色

/**
 * 标签形状
 */
export type TagShape = 'square' | 'rounded' | 'pill';

// ==================== 组件属性定义 ====================

/**
 * Tag 基础属性
 */
export interface TagBaseProps extends CommonProps {
  /**
   * 标签内容
   */
  children?: React.ReactNode;

  /**
   * 前置图标
   */
  icon?: React.ReactNode;

  /**
   * 后置图标 (不包括关闭图标)
   */
  suffixIcon?: React.ReactNode;

  /**
   * 是否可见 (受控)
   * @default true
   */
  visible?: boolean;

  /**
   * 默认是否可见 (非受控)
   * @default true
   */
  defaultVisible?: boolean;
}

/**
 * Tag 样式属性
 */
export interface TagStyleProps {
  /**
   * 标签尺寸
   * @default 'medium'
   */
  size?: TagSize;

  /**
   * 标签变体
   * - filled: 填充背景
   * - outlined: 边框样式
   * - light: 浅色背景
   * @default 'light'
   */
  variant?: TagVariant;

  /**
   * 预设颜色或自定义颜色
   * @default 'default'
   */
  color?: TagColor;

  /**
   * 标签形状
   * @default 'rounded'
   */
  shape?: TagShape;

  /**
   * 是否加粗
   * @default false
   */
  bold?: boolean;

  /**
   * 自定义背景色 (优先级高于 color)
   */
  backgroundColor?: string;

  /**
   * 自定义文字色 (优先级高于 color)
   */
  textColor?: string;

  /**
   * 自定义边框色 (优先级高于 color)
   */
  borderColor?: string;

  /**
   * 自定义边框样式
   * @example '1px solid #ccc'
   * @example '2px dashed #1890ff'
   */
  border?: string;

  /**
   * 自定义样式
   */
  style?: CSSProperties;

  /**
   * 自定义类名
   */
  className?: string;
}

/**
 * Tag 交互属性
 */
export interface TagInteractiveProps {
  /**
   * 是否可关闭/删除
   * @default false
   */
  closable?: boolean;

  /**
   * 是否可点击 (显示 hover 效果和 cursor: pointer)
   * @default false
   */
  clickable?: boolean;

  /**
   * 是否可选中 (显示选中样式)
   * @default false
   */
  checkable?: boolean;

  /**
   * 是否选中 (受控)
   */
  checked?: boolean;

  /**
   * 默认是否选中 (非受控)
   * @default false
   */
  defaultChecked?: boolean;

  /**
   * 是否禁用
   * @default false
   */
  disabled?: boolean;

  /**
   * 自定义关闭图标
   */
  closeIcon?: React.ReactNode;
}

/**
 * Tag 事件属性
 */
export interface TagEventProps {
  /**
   * 点击事件
   */
  onClick?: (e: React.MouseEvent<HTMLSpanElement>) => void;

  /**
   * 关闭/删除事件
   * @param e 事件对象
   */
  onClose?: (e: React.MouseEvent<HTMLSpanElement>) => void;

  /**
   * 可见性变化事件
   * @param visible 是否可见
   */
  onVisibleChange?: (visible: boolean) => void;

  /**
   * 选中状态变化事件 (checkable 模式)
   * @param checked 是否选中
   */
  onCheck?: (checked: boolean) => void;
}

/**
 * Tag 组件完整属性
 */
export type TagProps =
  & TagBaseProps
  & TagStyleProps
  & TagInteractiveProps
  & TagEventProps;

// ==================== CheckableTag 属性 ====================

/**
 * 可选中标签属性
 */
export interface CheckableTagProps extends Omit<TagProps, 'checkable' | 'closable'> {
  /**
   * 是否选中 (受控)
   */
  checked?: boolean;

  /**
   * 默认是否选中 (非受控)
   * @default false
   */
  defaultChecked?: boolean;

  /**
   * 选中状态变化事件
   */
  onChange?: (checked: boolean) => void;
}

// ==================== TagGroup 属性 ====================

/**
 * 标签组属性
 */
export interface TagGroupProps extends CommonProps {
  /**
   * 子元素
   */
  children?: React.ReactNode;

  /**
   * 标签间距
   * @default 8
   */
  gap?: number | string;

  /**
   * 是否换行
   * @default true
   */
  wrap?: boolean;

  /**
   * 对齐方式
   * @default 'flex-start'
   */
  align?: 'flex-start' | 'center' | 'flex-end';

  /**
   * 最大显示数量，超出显示 +N
   */
  maxCount?: number;

  /**
   * 超出数量的渲染
   */
  maxCountRender?: (count: number) => React.ReactNode;

  /**
   * 自定义样式
   */
  style?: CSSProperties;

  /**
   * 自定义类名
   */
  className?: string;
}

// ==================== 兼容旧版属性 ====================

/**
 * @deprecated 请使用 'default' | 'primary' 等预设颜色
 */
export type TagTheme = 'gray' | 'white';

/**
 * 旧版属性兼容
 */
export interface LegacyTagProps {
  /**
   * @deprecated 请使用 closable
   */
  canDelete?: boolean;

  /**
   * @deprecated 请使用 onClose
   */
  onDelete?: (e: React.MouseEvent) => void;

  /**
   * @deprecated 请使用 color + variant
   */
  theme?: TagTheme;

  /**
   * @deprecated 请使用 backgroundColor
   */
  background?: string;
}
