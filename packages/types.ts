import React from "react";

export type CommonProps = {
  style?: React.CSSProperties;
  className?: string;
  children?: React.ReactNode;
};

export enum ClickType {
  /* 当前页面切换 */
  SELF = "self",
  /* 外部跳转 */
  OTHERS = "others",
  /* 不可点击项（仅作为下拉框导航项的整合，通过下拉框子项切换，鼠标悬浮样式为 default） */
  SIMPLE = 'simple',
  /* 禁用 */
  DISABLED = 'disabled',
}

export type ThemeType = {
  hoverColor?: string,
  hoverBg?: string,
  activeColor?: string,
  activeBg?: string,
  lineColor?: string,
};

export type MenuItemType = {
  key: string;
  title: string;
  path?: string;
  subTitle?: string;
  icon?: string | React.ReactNode;
  isNew?: string | React.ReactNode | boolean;
  href?: string;
  clickType?: ClickType;
  /** 下拉菜单是否展开 */
  open?: boolean;
  titleDeputy?: boolean;
  dropData?: MenuItemType[];
  [key: string]: any;
};

export type MenuProps = {
  /* 当前选中项 */
  active?: string;
  /* 数据 */
  data?: MenuItemType[];
  /* 导航排列方向 */
  direction?: "row" | "column";
  /* 导航主题 */
  theme?: ThemeType;
  /** 边框 */
  border?: boolean;
  /* 标题作为副级 */
  titleDeputy?: boolean;
  /** 切换导航项 */
  onChange?: (item: MenuItemType) => void;
  onDropChange?: (item: MenuItemType, parentItem: MenuItemType) => void;
  /* 一级导航选项对应的 style */
  itemStyle?: React.CSSProperties;
  /* 一级导航选项对应的 className */
  itemClassName?: string;
  /* 导航 wrap 对应的 style */
  style?: React.CSSProperties;
  /* 导航 wrap 对应的 className */
  className?: string;
  /** 二级菜单相关props */
  dropProps?: MenuProps;
};
