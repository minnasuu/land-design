import { CSSProperties, ReactNode } from "react";
import { CommonProps } from "../types";

/** 下拉项 */
export interface DropdownItem {
  /** 唯一标识 */
  key: string;
  /** 显示内容 */
  label: string | ReactNode;
}

/** Dropdown 组件属性 */
export interface DropdownProps extends CommonProps {
  /** 下拉选项数据 */
  items?: DropdownItem[];
  /** 自定义下拉内容（优先级高于 items） */
  content?: ReactNode;
  /**
   * 触发方式
   * @default 'hover'
   */
  trigger?: "hover" | "click";
  /**
   * 展开方向
   * @default 'bottom'
   */
  placement?: "top" | "bottom";
  /**
   * 对齐方式
   * @default 'left'
   */
  alignment?: "left" | "right" | "center";
  /**
   * 面板挂载节点
   * - 传入 CSS 选择器字符串（如 'body'、'#container'）或 HTMLElement 节点
   * - 不传则面板在触发元素内部渲染（相对定位）
   */
  attach?: string | HTMLElement;
  /**
   * 是否禁用
   * @default false
   */
  disabled?: boolean;
  /**
   * 受控展开状态
   * @default false
   */
  open?: boolean;
  /** 触发元素类名 */
  toggleClassName?: string;
  /** 触发元素样式 */
  toggleStyle?: CSSProperties;
  /** 下拉面板类名 */
  contentClassName?: string;
  /** 下拉面板样式 */
  contentStyle?: CSSProperties;
  /** 选中下拉项时触发 */
  onChange?: (item: DropdownItem) => void;
  /** 面板展开时触发 */
  onOpen?: () => void;
  /** 面板关闭时触发 */
  onClose?: () => void;
}
