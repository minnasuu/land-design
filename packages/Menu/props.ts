import { CSSProperties, ReactNode } from 'react';
import { CommonProps } from '../types';

// ==================== 基础类型定义 ====================

/** 菜单项点击类型 */
export enum ClickType {
  /** 当前页面切换 */
  SELF = 'self',
  /** 外部跳转 */
  OTHERS = 'others',
  /** 不可点击（仅作为下拉整合项） */
  SIMPLE = 'simple',
  /** 禁用 */
  DISABLED = 'disabled',
}

/** 菜单项 */
export interface MenuItem {
  /** 唯一标识 */
  key: string;
  /** 标题文本 */
  label: string;
  /** 路由路径 */
  path?: string;
  /** 副标题 */
  subText?: string;
  /** 前置图标，字符串为图片 URL */
  icon?: string | ReactNode;
  /** 角标内容，true 时显示 "NEW" */
  isNew?: string | ReactNode | boolean;
  /** 外部链接地址 */
  href?: string;
  /** 点击行为类型 */
  clickType?: ClickType;
  /** 下拉菜单是否展开（内嵌模式） */
  open?: boolean;
  /** 标题作为副级显示 */
  titleDeputy?: boolean;
  /** 子菜单数据 */
  children?: MenuItem[];
  /** 是否禁用 */
  disabled?: boolean;
  /** 扩展属性 */
  [key: string]: any;
}

// ==================== 属性接口定义 ====================

/** Menu 组件属性 */
export interface MenuProps extends CommonProps {
  /** 菜单数据 */
  items?: MenuItem[];
  /** 当前激活项的 key */
  active?: string;
  /**
   * 排列方向
   * @default 'row'
   */
  direction?: 'row' | 'column';
  /**
   * 标题排列方向
   * @default 'row'
   */
  titleDirection?: 'row' | 'column';
  /**
   * 是否显示边框
   * @default true
   */
  border?: boolean;
  /** 所有标题作为副级显示 */
  titleDeputy?: boolean;
  /**
   * 选中项切换时是否滚动到视区
   * @default false
   */
  scrollToView?: boolean;
  /** 菜单项自定义样式 */
  itemStyle?: CSSProperties;
  /** 菜单项自定义类名 */
  itemClassName?: string;
  /** 菜单项点击回调 */
  onChange?: (item: MenuItem) => void;
  /** 下拉菜单项点击回调 */
  onDropChange?: (item: MenuItem, parentItem: MenuItem) => void;
  /** 子菜单透传属性 */
  dropProps?: MenuProps;
}
