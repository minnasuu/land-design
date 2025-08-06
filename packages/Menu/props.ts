import React, { CSSProperties } from "react";
import { CommonProps } from "../types";

/**
 * Menu组件属性类型定义
 * 包含所有Menu组件支持的属性及其详细说明
 */

// ==================== 基础类型定义 ====================

/** 菜单项点击类型 */
export enum ClickType {
  /** 当前页面切换 */
  SELF = "self",
  /** 外部跳转 */
  OTHERS = "others",
  /** 不可点击项（仅作为下拉框导航项的整合，通过下拉框子项切换，鼠标悬浮样式为 default） */
  SIMPLE = 'simple',
  /** 禁用 */
  DISABLED = 'disabled',
}

/** 菜单项类型 */
export type MenuItemType = {
  /** 
   * 菜单项的唯一标识
   * 用于标识当前选中的菜单项
   */
  key: string;

  /** 
   * 菜单项标题
   * 显示的主要文本内容
   */
  label: string;

  /** 
   * 菜单项路径
   * 用于路由跳转的路径
   */
  path?: string;

  /** 
   * 菜单项副标题
   * 显示在标题下方的次要文本
   */
  subText?: string;

  /** 
   * 菜单项图标
   * 可以传入字符串（图标名称）或React节点
   */
  icon?: string | React.ReactNode;

  /** 
   * 新功能标识
   * 可以传入字符串、React节点或布尔值来标识新功能
   */
  isNew?: string | React.ReactNode | boolean;

  /** 
   * 外部链接地址
   * 用于外部跳转的URL
   */
  href?: string;

  /** 
   * 点击类型
   * 定义菜单项的点击行为
   */
  clickType?: ClickType;

  /** 
   * 下拉菜单是否展开
   * 控制下拉菜单的展开状态
   */
  open?: boolean;

  /** 
   * 标题是否作为副级
   * 设置为true时标题会显示为副级样式
   */
  titleDeputy?: boolean;

  /** 
   * 下拉菜单数据
   * 包含子菜单项的配置信息
   */
  dropData?: MenuItemType[];

  /** 
   * 是否禁用
   * 设置为true时菜单项会禁用
   */
  disabled?: boolean;

  /** 
   * 其他属性
   * 允许传入其他任意属性
   */
  [key: string]: any;
};

// ==================== 属性接口定义 ====================

/**
 * Menu基础属性
 * 包含菜单的基本配置和交互属性
 */
export interface MenuBaseProps extends CommonProps {
  /** 
   * 当前选中项
   * 指定当前激活的菜单项
   */
  active?: string;

  /** 
   * 菜单数据
   * 包含所有菜单项的配置信息
   */
  data?: MenuItemType[];

  /** 
   * 导航排列方向
   * - row: 水平排列
   * - column: 垂直排列
   */
  direction?: "row" | "column";

  /** 
   * 标题排列方向
   * - row: 水平排列
   * - column: 垂直排列
   */
  titleDirection?: "row" | "column";

  /** 
   * 是否显示边框
   * 设置为true时会显示菜单项的边框
   */
  border?: boolean;

  /** 
   * 标题作为副级
   * 设置为true时所有标题都会显示为副级样式
   */
  titleDeputy?: boolean;

  /** 
   * 是否在选中项切换时滚动到视区
   * 设置为true时选中项会自动滚动到可见区域
   */
  scrollToView?: boolean;
}

/**
 * Menu样式属性
 * 用于配置菜单的视觉样式
 */
export interface MenuStyleProps {
  /** 
   * 自定义样式
   * 可以传入CSS样式对象来自定义菜单外观
   */
  style?: CSSProperties;

  /** 
   * 自定义类名
   * 可以传入额外的CSS类名
   */
  className?: string;

  /** 
   * 一级导航选项对应的样式
   * 为一级菜单项添加自定义样式
   */
  itemStyle?: CSSProperties;

  /** 
   * 一级导航选项对应的类名
   * 为一级菜单项添加自定义类名
   */
  itemClassName?: string;
}

/**
 * Menu事件属性
 * 用于配置菜单的交互事件
 */
export interface MenuEventProps {
  /** 
   * 菜单项切换事件
   * 当用户点击菜单项时触发
   * @param item 被点击的菜单项
   */
  onChange?: (item: MenuItemType) => void;

  /** 
   * 下拉菜单切换事件
   * 当下拉菜单项被点击时触发
   * @param item 被点击的下拉菜单项
   * @param parentItem 父级菜单项
   */
  onDropChange?: (item: MenuItemType, parentItem: MenuItemType) => void;
}

/**
 * Menu下拉菜单属性
 * 用于配置下拉菜单的行为
 */
export interface MenuDropProps {
  /** 
   * 二级菜单相关属性
   * 可以传入MenuProps来配置下拉菜单的行为
   */
  dropProps?: MenuProps;
}

/**
 * Menu组件完整属性类型
 * 合并了所有属性接口
 */
export type MenuProps = MenuBaseProps &
  MenuStyleProps &
  MenuEventProps &
  MenuDropProps;

/**
 * 属性优先级说明：
 * 1. active和onChange配合使用实现受控组件
 * 2. data是必需属性，包含所有菜单项的配置信息
 * 3. direction和titleDirection分别控制整体布局和标题布局
 * 4. border属性会影响所有菜单项的边框显示
 * 5. titleDeputy属性在MenuItemType和MenuProps中都有，MenuItemType中的优先级更高
 * 6. itemStyle和itemClassName只影响一级菜单项
 * 7. dropProps用于配置下拉菜单的行为
 * 8. scrollToView属性会在选中项变化时自动滚动到可见区域
 * 9. style和className会覆盖默认样式
 */ 