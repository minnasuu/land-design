// ============================================================================
// Select 组件属性定义
// @description 选择器组件的完整类型定义
// @author Land Design System
// ============================================================================

import { CSSProperties, ReactNode } from 'react';
import { DropdownProps } from '../Dropdown/props';
import { PopOverProps } from '../PopOver/props';

// ─────────────────────────────────────────────────────────────────────────────
// SECTION: 基础类型定义
// ─────────────────────────────────────────────────────────────────────────────

/**
 * 选择器外观变体
 * - outline: 描边样式（默认）
 * - fill: 填充样式
 * - text: 文本样式
 * - transparent: 透明样式
 */
export type SelectVariant = 'outline' | 'fill' | 'text' | 'transparent';

/**
 * @deprecated 使用 SelectVariant 代替
 */
export type SelectType = 'border' | 'background' | 'transparent' | 'text';

/**
 * 选择器尺寸
 * - small: 小尺寸
 * - default: 默认尺寸
 * - large: 大尺寸
 */
export type SelectSize = 'small' | 'default' | 'large';

/**
 * 选项数据项类型
 */
export interface SelectOption {
  /** 选项唯一标识 */
  key: string | number;
  /** 选项显示文本 */
  label: ReactNode;
  /** 选项提示内容（悬停整个选项显示） */
  tip?: ReactNode;
  /** 选项图标提示（悬停图标显示） */
  iconTip?: ReactNode;
  /** 是否禁用 */
  disabled?: boolean;
  /** 自定义样式 */
  style?: CSSProperties;
  /** 自定义类名 */
  className?: string;
}

/**
 * @deprecated 使用 SelectOption 代替
 */
export type SelectItemType = SelectOption;

/**
 * 自定义显示回调参数
 */
export interface CustomDisplayParams {
  /** 选中的值数组 */
  values: (string | number)[];
  /** 选中的选项数组 */
  items: SelectOption[];
  /** 是否为多选模式 */
  isMultiple: boolean;
  /** 占位符文本 */
  placeholder: string;
}

// ─────────────────────────────────────────────────────────────────────────────
// SECTION: 组件属性接口
// ─────────────────────────────────────────────────────────────────────────────

export interface SelectProps extends Omit<DropdownProps, 'content' | 'children' | 'onChange'> {
  // ─── 核心属性 ───

  /**
   * 选项数据
   */
  options?: SelectOption[];

  /**
   * @deprecated 使用 options 代替
   */
  data?: SelectOption[];

  /**
   * 当前选中值（单选）
   */
  value?: string | number;

  /**
   * @deprecated 使用 value 代替
   */
  selected?: string | number;

  /**
   * 当前选中值数组（多选）
   */
  values?: (string | number)[];

  /**
   * @deprecated 使用 values 代替
   */
  selectedValues?: (string | number)[];

  /**
   * 是否多选模式
   * @default false
   */
  multiple?: boolean;

  /**
   * 占位符
   * @default '请选择'
   */
  placeholder?: string;

  // ─── 外观属性 ───

  /**
   * 外观变体
   * @default 'outline'
   */
  variant?: SelectVariant;

  /**
   * @deprecated 使用 variant 代替
   */
  type?: SelectType;

  /**
   * 尺寸
   * @default 'default'
   */
  size?: SelectSize;

  /**
   * 是否禁用
   * @default false
   */
  disabled?: boolean;

  /**
   * 宽度
   */
  width?: number | string;

  // ─── 多选属性 ───

  /**
   * 多选时是否显示复选框
   * @default false
   */
  showCheckbox?: boolean;

  /**
   * 多选时的分隔符
   * @default '，'
   */
  separator?: string;

  /**
   * 多选时最大显示数量，超出显示"等N个选项"
   */
  maxDisplayCount?: number;

  // ─── 提示属性 ───

  /**
   * 选择框提示内容
   */
  tip?: ReactNode;

  /**
   * 选择框提示配置
   */
  tipProps?: PopOverProps;

  // ─── 自定义渲染 ───

  /**
   * 自定义选中内容显示
   */
  customValueDisplay?: (params: CustomDisplayParams) => ReactNode;

  /**
   * 自定义选项渲染
   */
  renderOption?: (option: SelectOption, isSelected: boolean) => ReactNode;

  /**
   * 空数据时的显示内容
   * @default '暂无数据'
   */
  emptyContent?: ReactNode;

  // ─── 样式属性 ───

  /** 自定义类名 */
  className?: string;

  /** 自定义样式 */
  style?: CSSProperties;

  /** 下拉面板类名 */
  dropdownClassName?: string;

  /** 下拉面板样式 */
  dropdownStyle?: CSSProperties;

  // ─── 事件属性 ───

  /**
   * 选中变化回调
   * @param value 当前选中值（单选为单个值，多选为数组）
   * @param option 当前操作的选项
   * @param selectedOptions 所有选中的选项（多选时）
   */
  onChange?: (
    value: string | number | (string | number)[],
    option: SelectOption,
    selectedOptions?: SelectOption[]
  ) => void;

  // ─── 废弃属性（兼容）───

  /**
   * @deprecated 使用 Dropdown 的 open 属性代替
   */
  open?: boolean;
}
