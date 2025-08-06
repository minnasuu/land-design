import React, { CSSProperties } from "react";
import { CommonProps } from "../types";
import { CheckboxProps } from "../Checkbox/props";

/**
 * Checkbox组件属性类型定义
 * 包含所有Checkbox组件支持的属性及其详细说明
 */

// ==================== 基础类型定义 ====================

/**
 * CheckboxItem复选框项类型
 * 定义单个复选框项的配置信息
 */
export type CheckboxItemType = CheckboxProps & {
  /** 
   * 值
   * 复选框项的值
   */
  key: string;
};

// ==================== 属性接口定义 ====================

/**
 * Checkbox基础属性
 * 包含复选框的基本配置和内容属性
 */
export interface CheckboxBaseProps extends CommonProps {
  /** 
   * 子元素
   * 可以传入React节点作为复选框的内容
   */
  children?: React.ReactNode;

  /** 
   * 数据
   * 包含所有复选框项的配置信息
   */
  data?: CheckboxItemType[];
}

/**
 * Checkbox状态属性
 * 用于配置复选框的状态
 */
export interface CheckboxStateProps {
  /** 
   * 选中项
   * 当前选中的复选框项的值数组
   */
  checked?: (number | string)[];
}

/**
 * Checkbox样式属性
 * 用于配置复选框的视觉样式
 */
export interface CheckboxStyleProps {
  /** 
   * 是否启用动画效果
   * 控制选中时的动画效果，默认为true
   */
  animated?: boolean;
  /** 
   * 自定义样式
   * 可以传入CSS样式对象来自定义复选框外观
   */
  style?: CSSProperties;

  /** 
   * 自定义类名
   * 可以传入额外的CSS类名
   */
  className?: string;
}

/**
 * Checkbox事件属性
 * 用于配置复选框的交互事件
 */
export interface CheckboxEventProps {
  /** 
   * 选择变化事件
   * 当复选框选择发生变化时触发
   * @param item 被选择的复选框项
   */
  onChange?: (item: CheckboxItemType) => void;
}

/**
 * Checkbox组件完整属性类型
 * 合并了所有属性接口
 */
export type CheckboxGroupProps = CheckboxBaseProps &
  CheckboxStateProps &
  CheckboxStyleProps &
  CheckboxEventProps;

/**
 * 属性优先级说明：
 * 1. data包含所有可选择的复选框项
 * 2. checked控制当前选中的复选框项
 * 3. onChange处理复选框选择变化事件
 * 4. style和className会覆盖默认样式
 * 5. 每个CheckboxItemType继承CheckProps的所有属性
 * 6. 支持多选功能
 * 7. 组件支持自定义图标和样式
 * 8. 样式优先级：style > className > 默认样式
 * 9. 当checked为空数组时，表示没有选中项
 * 10. 组件支持键盘导航和辅助功能
 */ 