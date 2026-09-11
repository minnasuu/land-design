// ============================================================================
// Cascader 组件属性定义
// @description 级联选择器（多列树形选择器）组件的完整类型定义
// @author Land Design System
// ============================================================================

import { CSSProperties, ReactNode } from "react";
import { CommonProps } from "../types";
import { DropdownProps } from "../Dropdown/props";
import { TooltipProps } from "../Tooltip/props";

// ─────────────────────────────────────────────────────────────────────────────
// SECTION: 基础类型定义
// ─────────────────────────────────────────────────────────────────────────────

/**
 * 级联选择器外观变体
 * - outline: 描边样式（默认）
 * - fill: 填充样式
 * - text: 文本样式
 * - transparent: 透明样式
 */
export type CascaderVariant = 'outline' | 'fill' | 'text' | 'transparent';

/**
 * @deprecated 使用 CascaderVariant 代替
 */
export type CascaderType = "border" | "background" | "transparent" | "text";

/**
 * 级联选择器尺寸
 * - small: 小尺寸
 * - default: 默认尺寸
 * - large: 大尺寸
 */
export type CascaderSize = 'small' | 'default' | 'large';

/**
 * 级联选项数据项类型
 * @description 定义单个级联选项的完整配置
 */
export interface CascaderOption {
  /** 
   * 选项唯一标识
   * @description 用于标识选项的唯一值
   */
  key: string;

  /** 
   * 选项显示文本
   * @description 选项的显示内容
   */
  label: string;

  /** 
   * 选项提示内容
   * @description 悬停选项时显示的提示信息
   */
  tip?: ReactNode;

  /** 
   * 是否禁用
   * @description 设置为 true 时该选项不可选择
   * @default false
   */
  disabled?: boolean;

  /** 
   * 子选项
   * @description 当前选项的子选项列表，形成树形结构
   */
  children?: CascaderOption[];
}

/**
 * @deprecated 使用 CascaderOption 代替
 */
export type CascaderItemType = CascaderOption;

/**
 * 自定义显示回调参数
 * @description customValueDisplay 回调的参数类型
 */
export interface CascaderCustomDisplayParams {
  /** 选中的 key 数组 */
  values: string[];
  /** 选中的选项数组 */
  items: CascaderOption[];
  /** 是否为多选模式 */
  isMultiple: boolean;
  /** 占位符文本 */
  placeholder: string;
}

// ─────────────────────────────────────────────────────────────────────────────
// SECTION: 组件属性接口
// ─────────────────────────────────────────────────────────────────────────────

export interface CascaderProps extends CommonProps, Omit<DropdownProps, 'content' | 'children' | 'onChange'> {
  // ─── 核心属性 ───

  /**
   * 选项数据
   * @description 树形选项的完整数据
   */
  options?: CascaderOption[];

  /**
   * @deprecated 使用 options 代替
   */
  data?: CascaderOption[];

  /**
   * 当前选中值（单选）
   * @description 受控模式下的选中值
   */
  value?: string;

  /**
   * @deprecated 使用 value 代替
   */
  selected?: CascaderOption;

  /**
   * 当前选中值数组（多选）
   * @description 多选模式下的选中值数组
   */
  values?: string[];

  /**
   * @deprecated 使用 values 代替
   */
  selectedValues?: CascaderOption[];

  /**
   * 默认选中值（单选，非受控）
   */
  defaultValue?: string;

  /**
   * 默认选中值数组（多选，非受控）
   */
  defaultValues?: string[];

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
  variant?: CascaderVariant;

  /**
   * @deprecated 使用 variant 代替
   */
  type?: CascaderType;

  /**
   * 尺寸
   * @default 'default'
   */
  size?: CascaderSize;

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
   * 多选时的分隔符
   * @default '，'
   */
  separator?: string;

  /**
   * 多选时最大显示数量
   * @description 超出显示"等N个选项"
   * @default 3
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
  tipProps?: TooltipProps;

  // ─── 自定义渲染 ───

  /**
   * 自定义选中内容显示
   * @param params 显示参数
   * @returns 自定义渲染内容
   */
  customValueDisplay?: (params: CascaderCustomDisplayParams) => ReactNode;

  /**
   * 自定义选项渲染
   * @param option 选项数据
   * @param state 选项状态
   * @returns 自定义渲染内容
   */
  renderOption?: (
    option: CascaderOption,
    state: {
      selected: boolean;
      expanded: boolean;
      indeterminate: boolean;
      level: number;
    }
  ) => ReactNode;

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
   * @param value 当前选中值（单选为字符串，多选为数组）
   * @param option 当前操作的选项
   * @param selectedOptions 所有选中的选项
   */
  onChange?: (
    value: string | string[],
    option: CascaderOption,
    selectedOptions?: CascaderOption[]
  ) => void;

  /**
   * 展开/收起回调
   * @param expandedKeys 当前展开的 key 数组
   */
  onExpand?: (expandedKeys: string[]) => void;
}

// ─────────────────────────────────────────────────────────────────────────────
// SECTION: 默认值
// ─────────────────────────────────────────────────────────────────────────────

/**
 * Cascader 组件默认属性
 */
export const cascaderDefaultProps: Partial<CascaderProps> = {
  variant: 'outline',
  size: 'default',
  placeholder: '请选择',
  separator: '，',
  maxDisplayCount: 3,
  multiple: false,
  disabled: false,
  emptyContent: '暂无数据',
};

// ─────────────────────────────────────────────────────────────────────────────
// SECTION: 类型映射（兼容旧属性）
// ─────────────────────────────────────────────────────────────────────────────

/**
 * 旧 type 到新 variant 的映射
 * @internal
 */
export const typeToVariantMap: Record<CascaderType, CascaderVariant> = {
  border: 'outline',
  background: 'fill',
  transparent: 'transparent',
  text: 'text',
};

// ─────────────────────────────────────────────────────────────────────────────
// SECTION: 使用说明
// ─────────────────────────────────────────────────────────────────────────────

/**
 * Cascader 属性使用说明
 * 
 * 1. 数据源：
 *    - 推荐使用 options（新）而非 data（旧）
 *    - 树形数据通过 children 字段嵌套
 * 
 * 2. 受控 vs 非受控：
 *    - 受控模式：使用 value/values + onChange
 *    - 非受控模式：使用 defaultValue/defaultValues
 * 
 * 3. 单选 vs 多选：
 *    - 单选：value（字符串）
 *    - 多选：multiple=true + values（字符串数组）
 * 
 * 4. 外观定制：
 *    - variant：outline/fill/text/transparent
 *    - size：small/default/large
 * 
 * @example
 * // 单选模式
 * <Cascader
 *   options={treeData}
 *   value={selectedKey}
 *   onChange={(value, option) => setSelectedKey(value)}
 *   placeholder="请选择分类"
 * />
 * 
 * @example
 * // 多选模式
 * <Cascader
 *   options={treeData}
 *   multiple
 *   values={selectedKeys}
 *   onChange={(values, option, allSelected) => setSelectedKeys(values)}
 *   maxDisplayCount={2}
 * />
 */
