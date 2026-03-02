import { CSSProperties, ReactNode } from "react";
import { PopOverProps } from "../PopOver/props";

// ==================== 类型定义 ====================

/**
 * Switch 尺寸
 * - small: 小尺寸
 * - default: 默认尺寸
 * - large: 大尺寸
 */
export type SwitchSize = "small" | "default" | "large";

/**
 * 标签位置
 * - left: 标签在左侧
 * - right: 标签在右侧（默认）
 */
export type SwitchLabelPosition = "left" | "right";

// ==================== 属性接口定义 ====================

/**
 * Switch 基础属性
 */
export interface SwitchBaseProps {
  /**
   * 受控模式的开关状态
   * @description 使用时组件变为受控模式
   */
  checked?: boolean;

  /**
   * 非受控模式的默认状态
   * @default false
   */
  defaultChecked?: boolean;

  /**
   * 表单字段名
   */
  name?: string;

  /**
   * 开关值（用于表单）
   * @default true
   */
  value?: string | number | boolean;
}

/**
 * Switch 内容属性
 */
export interface SwitchContentProps {
  /**
   * 标签文字
   * @description 开关旁边的描述文字
   */
  label?: ReactNode;

  /**
   * 开启状态的标签文字
   * @description 如果设置，开启时显示此标签
   */
  checkedLabel?: ReactNode;

  /**
   * 关闭状态显示的内容（轨道内）
   * @description 显示在开关轨道内的内容
   */
  uncheckedContent?: ReactNode;

  /**
   * 开启状态显示的内容（轨道内）
   * @description 显示在开关轨道内的内容
   */
  checkedContent?: ReactNode;

  /**
   * 关闭状态的图标（滑块内）
   */
  icon?: ReactNode;

  /**
   * 开启状态的图标（滑块内）
   */
  checkedIcon?: ReactNode;
}

/**
 * Switch 提示属性
 */
export interface SwitchTipProps {
  /**
   * 整体提示内容
   * @description hover 时显示的提示
   */
  tip?: ReactNode;

  /**
   * 图标提示内容
   * @description 在开关旁边显示一个信息图标，hover 显示提示
   */
  iconTip?: ReactNode;

  /**
   * 整体提示的 PopOver 属性
   */
  tipProps?: Partial<PopOverProps>;

  /**
   * 图标提示的 PopOver 属性
   */
  iconTipProps?: Partial<PopOverProps>;
}

/**
 * Switch 外观属性
 */
export interface SwitchAppearanceProps {
  /**
   * 尺寸
   * @default "default"
   */
  size?: SwitchSize;

  /**
   * 标签位置
   * @default "right"
   */
  labelPosition?: SwitchLabelPosition;

  /**
   * 加载中状态
   * @default false
   */
  loading?: boolean;
}

/**
 * Switch 状态属性
 */
export interface SwitchStateProps {
  /**
   * 是否禁用
   * @default false
   */
  disabled?: boolean;

  /**
   * 只读模式
   * @default false
   */
  readOnly?: boolean;
}

/**
 * Switch 样式属性
 */
export interface SwitchStyleProps {
  /**
   * 自定义类名
   */
  className?: string;

  /**
   * 自定义样式
   */
  style?: CSSProperties;

  /**
   * 轨道自定义类名
   */
  trackClassName?: string;

  /**
   * 轨道自定义样式
   */
  trackStyle?: CSSProperties;

  /**
   * 滑块自定义类名
   */
  thumbClassName?: string;

  /**
   * 滑块自定义样式
   */
  thumbStyle?: CSSProperties;
}

/**
 * Switch 事件属性
 */
export interface SwitchEventProps {
  /**
   * 状态变化回调
   * @param checked 新的开关状态
   * @param event 触发的事件
   */
  onChange?: (checked: boolean, event: React.MouseEvent | React.KeyboardEvent) => void;

  /**
   * 点击事件
   */
  onClick?: (event: React.MouseEvent) => void;

  /**
   * 获得焦点事件
   */
  onFocus?: (event: React.FocusEvent) => void;

  /**
   * 失去焦点事件
   */
  onBlur?: (event: React.FocusEvent) => void;
}

/**
 * Switch 组件完整属性
 */
export interface SwitchProps
  extends SwitchBaseProps,
    SwitchContentProps,
    SwitchTipProps,
    SwitchAppearanceProps,
    SwitchStateProps,
    SwitchStyleProps,
    SwitchEventProps {}

// ==================== 默认属性 ====================

export const switchDefaultProps: Partial<SwitchProps> = {
  defaultChecked: false,
  size: "default",
  labelPosition: "right",
  loading: false,
  disabled: false,
  readOnly: false,
};
