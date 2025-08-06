import React, { CSSProperties, MouseEvent } from "react";
import { CommonProps } from "../types";

/**
 * RadioGroup组件属性类型定义
 * 包含所有RadioGroup组件支持的属性及其详细说明
 */

// ==================== 基础类型定义 ====================

/**
 * RadioItem单选框项类型
 * 定义单个单选框项的配置信息
 */
export type RadioItemType = {
  /** 
   * 值
   * 单选框项的值，可以是数字或字符串
   */
  key: string;

  /** 
   * 标签
   * 单选框项的显示文本
   */
  label: string;

  /** 
   * 提示
   * 可以传入React节点作为单选框项的提示信息
   */
  tip?: React.ReactNode;

  /** 
   * 是否禁用
   * 设置为true时该单选框项不可选择
   */
  disabled?: boolean;

  /** 
   * 图标提示
   * 可以传入React节点作为单选框项的图标提示
   */
  iconTip?: React.ReactNode;
};

// ==================== 属性接口定义 ====================

/**
 * RadioGroup基础属性
 * 包含单选框组的基本配置和内容属性
 */
export interface RadioGroupBaseProps extends CommonProps {
  /** 
   * 子元素
   * 可以传入React节点作为单选框组的内容
   */
  children?: React.ReactNode;

  /** 
   * 数据
   * 包含所有单选框项的配置信息
   */
  data?: RadioItemType[];
}

/**
 * RadioGroup状态属性
 * 用于配置单选框组的状态
 */
export interface RadioGroupStateProps {
  /** 
   * 选中项
   * 当前选中的单选框项的值
   */
  checked?: string;
}

/**
 * RadioGroup样式属性
 * 用于配置单选框组的视觉样式
 */
export interface RadioGroupStyleProps {
  /** 
   * 是否启用动画效果
   * 控制选中时的动画效果，默认为true
   */
  animated?: boolean;
  /** 
   * 自定义样式
   * 可以传入CSS样式对象来自定义单选框组外观
   */
  style?: CSSProperties;

  /** 
   * 自定义类名
   * 可以传入额外的CSS类名
   */
  className?: string;
}

/**
 * RadioGroup事件属性
 * 用于配置单选框组的交互事件
 */
export interface RadioGroupEventProps {
  /** 
   * 选择变化事件
   * 当单选框选择发生变化时触发
   * @param value 被选择的值
   * @param item 被选择的单选框项
   * @param e 事件对象
   */
  onChange?: (value: string, item: RadioItemType, e: MouseEvent<HTMLDivElement>) => void;
}

/**
 * RadioGroup组件完整属性类型
 * 合并了所有属性接口
 */
export type RadioGroupProps = RadioGroupBaseProps &
  RadioGroupStateProps &
  RadioGroupStyleProps &
  RadioGroupEventProps;

/**
 * 属性优先级说明：
 * 1. data包含所有可选择的单选框项
 * 2. checked控制当前选中的单选框项
 * 3. onChange处理单选框选择变化事件
 * 4. style和className会覆盖默认样式
 * 5. 每个RadioItemType支持自定义提示和图标
 * 6. 支持单选功能，只能选择一个选项
 * 7. 组件支持禁用状态
 * 8. 样式优先级：style > className > 默认样式
 * 9. 当checked为undefined时，表示没有选中项
 * 10. 组件支持键盘导航和辅助功能
 */ 