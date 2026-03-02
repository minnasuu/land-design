import { CSSProperties, ReactNode } from "react";
import { CommonProps } from "../types";

/**
 * NumberInput 数字输入框组件
 * 
 * 用于数值输入的专用输入框，支持步进调整、范围限制、滚轮控制等功能。
 * 
 * @example
 * ```tsx
 * // 基础用法
 * <NumberInput value={count} onChange={setCount} />
 * 
 * // 设置范围和步长
 * <NumberInput min={0} max={100} step={5} />
 * 
 * // 带前后缀
 * <NumberInput prefix="¥" suffix="元" />
 * 
 * // 不同变体
 * <NumberInput variant="outline" />
 * <NumberInput variant="filled" />
 * ```
 */

// ==================== 类型定义 ====================

/**
 * 数字输入框外观变体
 * - outline: 描边样式，有边框无背景（默认）
 * - fill: 填充样式，有背景色无边框
 * - transparent: 透明样式，无边框无背景
 */
export type NumberInputVariant = "outline" | "fill" | "transparent";

/**
 * 数字输入框尺寸
 * - small: 小尺寸
 * - default: 默认尺寸
 * - large: 大尺寸
 */
export type NumberInputSize = "small" | "default" | "large";

/**
 * 步进按钮位置
 * - right: 右侧垂直排列（默认）
 * - both: 两侧对称排列
 * - none: 隐藏按钮
 */
export type NumberInputStepperPosition = "right" | "both" | "none";

/**
 * 文本对齐方式
 */
export type NumberInputTextAlign = "left" | "center" | "right";

// ==================== 属性接口定义 ====================

/**
 * NumberInput 基础属性
 */
export interface NumberInputBaseProps extends CommonProps {
  /**
   * 当前值
   * @description 受控模式的当前数值
   */
  value?: number;

  /**
   * 默认值
   * @description 非受控模式的初始值
   * @default 0
   */
  defaultValue?: number;

  /**
   * 表单字段名
   * @description 用于表单提交
   */
  name?: string;

  /**
   * 占位文本
   * @description 输入框为空时显示的提示文字
   */
  placeholder?: string;
}

/**
 * NumberInput 外观属性
 */
export interface NumberInputAppearanceProps {
  /**
   * 外观变体
   * @description 输入框的视觉样式
   * @default "outline"
   */
  variant?: NumberInputVariant;

  /**
   * 尺寸
   * @description 输入框的大小
   * @default "default"
   */
  size?: NumberInputSize;

  /**
   * 步进按钮位置
   * @description 控制增减按钮的显示位置
   * @default "right"
   */
  stepperPosition?: NumberInputStepperPosition;

  /**
   * 文本对齐
   * @description 输入框内文字的对齐方式
   * @default "left"
   */
  textAlign?: NumberInputTextAlign;
}

/**
 * NumberInput 数值属性
 */
export interface NumberInputValueProps {
  /**
   * 步长
   * @description 每次增减的数值
   * @default 1
   */
  step?: number;

  /**
   * 最小值
   * @description 允许输入的最小数值
   * @default -Infinity
   */
  min?: number;

  /**
   * 最大值
   * @description 允许输入的最大数值
   * @default Infinity
   */
  max?: number;

  /**
   * 精度
   * @description 数值精度（小数位数）
   * @description 设置后会对输入值进行四舍五入
   */
  precision?: number;

  /**
   * 严格步进
   * @description 是否强制值必须是步长的倍数
   * @default false
   */
  strictStep?: boolean;
}

/**
 * NumberInput 内容属性
 */
export interface NumberInputContentProps {
  /**
   * 前缀内容
   * @description 显示在输入框左侧的内容
   */
  prefix?: ReactNode;

  /**
   * 后缀内容
   * @description 显示在输入框右侧的内容
   */
  suffix?: ReactNode;

  /**
   * 自定义格式化显示
   * @description 自定义数值的显示格式
   * @param value 当前数值
   * @returns 格式化后的显示字符串
   */
  formatter?: (value: number | undefined) => string;

  /**
   * 解析输入值
   * @description 将格式化的字符串解析回数值
   * @param displayValue 显示的字符串
   * @returns 解析后的数值
   */
  parser?: (displayValue: string) => number;
}

/**
 * NumberInput 交互属性
 */
export interface NumberInputInteractionProps {
  /**
   * 是否禁用
   * @description 禁用后不可输入和调整
   * @default false
   */
  disabled?: boolean;

  /**
   * 是否只读
   * @description 只读模式下只能通过按钮调整
   * @default false
   */
  readOnly?: boolean;

  /**
   * 启用滚轮控制
   * @description 允许通过鼠标滚轮调整数值
   * @default false
   */
  wheelable?: boolean;

  /**
   * 启用键盘控制
   * @description 允许通过上下箭头键调整数值
   * @default true
   */
  keyboard?: boolean;
}

/**
 * NumberInput 样式属性
 */
export interface NumberInputStyleProps {
  /**
   * 自定义类名
   */
  className?: string;

  /**
   * 宽度自适应
   * @description 宽度随内容自动调整
   * @default false
   */
  autoWidth?: boolean;

  /**
   * 自定义样式
   */
  style?: CSSProperties;

  /**
   * 宽度
   * @description 输入框宽度
   */
  width?: number | string;

  /**
   * 输入框类名
   * @description 内部 input 元素的类名
   */
  inputClassName?: string;

  /**
   * 输入框样式
   * @description 内部 input 元素的样式
   */
  inputStyle?: CSSProperties;
}

/**
 * NumberInput 事件属性
 */
export interface NumberInputEventProps {
  /**
   * 值变化回调
   * @description 数值变化时触发
   * @param value 新的数值，可能为 undefined（清空时）
   * @param info 变化信息
   */
  onChange?: (
    value: number | undefined,
    info: NumberInputChangeInfo
  ) => void;

  /**
   * 步进回调
   * @description 点击增减按钮时触发
   * @param value 新的数值
   * @param direction 步进方向
   */
  onStep?: (value: number, direction: "up" | "down") => void;

  /**
   * 获得焦点回调
   */
  onFocus?: (event: React.FocusEvent<HTMLInputElement>) => void;

  /**
   * 失去焦点回调
   */
  onBlur?: (event: React.FocusEvent<HTMLInputElement>) => void;

  /**
   * 按下回车回调
   */
  onPressEnter?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
}

/**
 * 值变化信息
 */
export interface NumberInputChangeInfo {
  /** 触发来源 */
  source: "input" | "step" | "wheel" | "keyboard";
  /** 原始事件 */
  event?: React.SyntheticEvent;
}

// ==================== 组合类型 ====================

/**
 * NumberInput 组件完整属性
 */
export type NumberInputProps = NumberInputBaseProps &
  NumberInputAppearanceProps &
  NumberInputValueProps &
  NumberInputContentProps &
  NumberInputInteractionProps &
  NumberInputStyleProps &
  NumberInputEventProps;

// ==================== 默认值 ====================

/**
 * NumberInput 默认属性值
 */
export const numberInputDefaultProps: Partial<NumberInputProps> = {
  defaultValue: 0,
  variant: "outline",
  size: "default",
  stepperPosition: "right",
  textAlign: "left",
  step: 1,
  min: -Infinity,
  max: Infinity,
  disabled: false,
  readOnly: false,
  wheelable: false,
  keyboard: true,
  autoWidth: false,
};
