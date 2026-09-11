import { CSSProperties, ReactNode } from 'react';
import { CommonProps } from '../types';

// ==================== 基础类型定义 ====================

/** 导航项点击类型 */
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

/** 导航项 */
export interface NavItem {
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
  /** 外部链接地址 */
  href?: string;
  /** 点击行为类型 */
  clickType?: ClickType;
  /** 下拉导航是否展开（内嵌模式） */
  open?: boolean;
  /** 标题作为副级显示 */
  titleDeputy?: boolean;
  /** 子导航数据 */
  children?: NavItem[];
  /** 是否禁用 */
  disabled?: boolean;
  /** 扩展属性 */
  [key: string]: any;
}

// ==================== 属性接口定义 ====================

/** Nav 组件属性 */
export interface NavProps extends CommonProps {
  /** 导航数据 */
  items?: NavItem[];
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
  /**
   * 子导航展开方式
   * - dropdown：悬浮时以浮层（absolute）显示，横向导航向下展开、纵向导航向右展开
   * - inline：平铺展开，占据实际位置，点击父项展开/收起（适合侧边栏树形导航）
   * @default 'dropdown'
   */
  expandType?: 'dropdown' | 'inline';
  /** 导航项自定义样式 */
  itemStyle?: CSSProperties;
  /** 导航项自定义类名 */
  itemClassName?: string;
  /** 导航项点击回调 */
  onChange?: (item: NavItem) => void;
  /** 下拉导航项点击回调 */
  onDropChange?: (item: NavItem, parentItem: NavItem) => void;
  /** 子导航透传属性 */
  dropProps?: NavProps;
}
