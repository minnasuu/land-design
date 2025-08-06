import React, { CSSProperties } from "react";
import { CommonProps } from "../types";
import { DropdownProps } from "../Dropdown/props";
import { PopOverProps } from "../PopOver/props";

/**
 * SelectTree组件属性类型定义
 * 包含所有SelectTree组件支持的属性及其详细说明
 */

// ==================== 基础类型定义 ====================

/** 树形选择器类型 */
export type SelectTreeType = "border" | "background" | "transparent" | "text";

/**
 * SelectTreeItem树形选择项类型
 * 定义单个树形选择项的配置信息
 */
export type SelectTreeItemType = {
  /** 
   * 唯一标识
   * 选择项的值，可以是字符串或数字
   */
  key: string;

  /** 
   * 标签
   * 可以传入React节点作为选择项的显示内容
   */
  label: string;

  /** 
   * 选项提示内容
   * 可以传入React节点作为选择项的提示信息
   */
  tip?: React.ReactNode;

  /** 
   * 选项图标类型提示
   * 可以传入React节点作为选择项的图标
   */
  iconTip?: React.ReactNode;

  /** 
   * 是否禁用
   * 设置为true时该选项不可选择
   */
  disabled?: boolean;

  /** 
   * 子选项
   * 当前选项的子选项列表
   */
  children?: SelectTreeItemType[];
};

// ==================== 属性接口定义 ====================

/**
 * SelectTree基础属性
 * 包含树形选择器的基本配置和内容属性
 */
export interface SelectTreeBaseProps extends CommonProps {
  /** 
   * 子元素
   * 可以传入React节点作为树形选择器的内容
   */
  children?: React.ReactNode;

  /** 
   * 数据
   * 包含所有树形选择项的配置信息
   */
  data?: SelectTreeItemType[];

  /** 
   * 当前选中项
   * 当前选中的选项值（单选模式）
   */
  selected?: SelectTreeItemType;

  /** 
   * 是否支持多选
   * 设置为true时支持多选功能
   */
  multiple?: boolean;

  /** 
   * 当前选中的多个值
   * 多选模式下的选中值数组
   */
  selectedValues?: SelectTreeItemType[];

  /** 
   * 分隔符
   * 多选模式下显示选中项时使用的分隔符，默认为逗号
   */
  separator?: string;

  /** 
   * 最大显示个数
   * 多选模式下最多显示的选中项个数，超过则显示为"n个"
   */
  maxDisplayCount?: number;

  /** 
   * 自定义显示内容
   * 自定义选择结果的展示内容
   * @param props.values 选中的值数组
   * @param props.items 选中的完整选项数组
   * @param props.isMultiple 是否为多选模式
   * @param props.placeholder 占位符文本
   */
  customValueDisplay?: (
    props: {
      values: (string | number)[],
      items: SelectTreeItemType[],
      isMultiple: boolean,
      placeholder: string
    }
  ) => React.ReactNode;
}

/**
 * SelectTree显示属性
 * 用于配置树形选择器的显示方式
 */
export interface SelectTreeDisplayProps {
  /** 
   * 占位符
   * 当没有选中项时显示的提示文本
   */
  placeholder?: string;

  /** 
   * 选框提示内容
   * 可以传入React节点作为选择框的提示信息
   */
  tip?: React.ReactNode;

  /** 
   * 选框提示内容配置
   * 提示框的配置属性
   */
  tipProps?: PopOverProps;

  /** 
   * 是否禁用
   * 设置为true时树形选择器不可用
   */
  disabled?: boolean;

  /** 
   * 类型
   * - border: 边框样式
   * - background: 背景样式
   * - transparent: 透明样式
   * - text: 文本样式
   */
  type?: SelectTreeType;
}

/**
 * SelectTree样式属性
 * 用于配置树形选择器的视觉样式
 */
export interface SelectTreeStyleProps {
  /** 
   * 自定义样式
   * 可以传入CSS样式对象来自定义树形选择器外观
   */
  style?: CSSProperties;

  /** 
   * 自定义类名
   * 可以传入额外的CSS类名
   */
  className?: string;
}

/**
 * SelectTree事件属性
 * 用于配置树形选择器的交互事件
 */
export interface SelectTreeEventProps {
  /** 
   * 选择变化事件
   * 当选择项发生变化时触发
   * @param item 被选择的选项（单选模式）
   * @param items 被选择的选项数组（多选模式）
   */
  onChange?: (selectedValue: SelectTreeItemType | SelectTreeItemType[], item: SelectTreeItemType) => void;
}

/**
 * SelectTree组件完整属性类型
 * 合并了所有属性接口
 */
export type SelectTreeProps = SelectTreeBaseProps &
  SelectTreeDisplayProps &
  SelectTreeStyleProps &
  SelectTreeEventProps &
  Omit<DropdownProps, 'onChange'>;

/**
 * 属性优先级说明：
 * 1. data包含所有可选择的树形选项
 * 2. selected控制当前选中的选项（单选模式）
 * 3. selectedValues控制当前选中的多个选项（多选模式）
 * 4. multiple控制是否为多选模式
 * 5. placeholder显示在没有选中项时的提示
 * 6. disabled控制树形选择器是否可用
 * 7. open控制下拉选项的展开状态
 * 8. type控制选择器的样式类型
 * 9. showCheckbox控制多选时是否显示复选框
 * 10. separator和maxDisplayCount控制多选时的显示方式
 * 11. customValueDisplay支持自定义显示内容
 * 12. onChange处理选项变化事件
 * 13. style和className会覆盖默认样式
 * 14. 树形结构支持多层级选择
 * 15. 选项优先级：selected/selectedValues > placeholder > 默认显示
 */ 