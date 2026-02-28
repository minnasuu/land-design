import { CSSProperties, ReactNode, InputHTMLAttributes, ChangeEvent, KeyboardEvent, FocusEvent } from 'react';

// ==================== 基础类型定义 ====================

/**
 * 输入框外观变体
 * - outline: 描边样式，有边框无背景（默认）
 * - fill: 填充样式，有背景色无边框
 * - transparent: 透明样式，无边框无背景
 */
export type InputVariant = 'outline' | 'fill' | 'transparent';

/**
 * 输入框语义状态
 * - default: 默认状态
 * - primary: 主色调
 * - warning: 警告
 * - danger: 危险/错误
 * - success: 成功
 */
export type InputStatus = 'default' | 'primary' | 'warning' | 'danger' | 'success';

/** 输入框尺寸 */
export type InputSize = 'small' | 'default' | 'large';

/** 文字对齐方式 */
export type InputAlign = 'left' | 'center' | 'right';

/** HTML 原生输入类型 */
export type InputHtmlType = 'text' | 'password' | 'email' | 'number' | 'tel' | 'url' | 'search';

// ==================== 高亮项配置 ====================

/**
 * 高亮项配置
 * 用于 InputHighlight 组件的高亮文本配置
 */
export interface HighlightItem {
  /** 需要高亮的文本 */
  text: string;
  /** 高亮文本颜色 */
  color?: string;
  /** 高亮背景颜色 */
  backgroundColor?: string;
  /** 自定义类名 */
  className?: string;
}

// ==================== 属性接口定义 ====================

/** Input 组件属性 */
export interface InputProps {
  /**
   * 输入框外观变体
   * @default 'outline'
   */
  variant?: InputVariant;
  /**
   * 输入框语义状态
   * @default 'default'
   */
  status?: InputStatus;
  /**
   * 输入框尺寸
   * @default 'default'
   */
  size?: InputSize;
  /**
   * 文字对齐方式
   * @default 'left'
   */
  textAlign?: InputAlign;
  /**
   * HTML 原生输入类型
   * @default 'text'
   */
  inputType?: InputHtmlType;
  /** 输入值（受控） */
  value?: string;
  /**
   * 占位符
   * @default '请输入'
   */
  placeholder?: string;
  /** 是否禁用 */
  disabled?: boolean;
  /** 最大字符数 */
  maxLength?: number;
  /** 是否为块级输入框，占满父容器宽度 */
  block?: boolean;
  /**
   * 宽度随内容自适应
   * @default false
   */
  autoWidth?: boolean;
  /** 结构前缀（输入框外部左侧） */
  beforeContent?: ReactNode;
  /** 结构后缀（输入框外部右侧） */
  afterContent?: ReactNode;
  /** 内容前缀（输入框内部左侧，跟随文字） */
  prefix?: ReactNode;
  /** 内容后缀（输入框内部右侧，跟随文字） */
  suffix?: ReactNode;
  /** 值变化回调 */
  onChange?: (val: string, e?: ChangeEvent<HTMLInputElement>) => void;
  /** 回车回调 */
  onEnter?: (val: string, e?: KeyboardEvent<HTMLInputElement>) => void;
  /** 聚焦回调 */
  onFocus?: (e: FocusEvent<HTMLInputElement>) => void;
  /** 失焦回调 */
  onBlur?: (e: FocusEvent<HTMLInputElement>) => void;
  /** 清除回调（传入即显示清除按钮） */
  onClear?: () => void;
  /** 自定义类名 */
  className?: string;
  /** 自定义样式 */
  style?: CSSProperties;
  /** 原生 input HTML 属性透传 */
  htmlProps?: InputHTMLAttributes<HTMLInputElement>;
}

// ==================== InputHighlight 属性定义 ====================

/**
 * InputHighlight 组件属性
 * 继承自 InputProps，移除不兼容的 prefix/suffix/autoWidth 属性
 */
export interface InputHighlightProps extends Omit<InputProps, 'prefix' | 'suffix' | 'autoWidth'> {
  /**
   * 高亮文本数组
   * - 可以是字符串数组（使用默认样式）
   * - 或 HighlightItem 数组（自定义每项样式）
   */
  highlights?: (string | HighlightItem)[];
  /**
   * 自定义高亮文本渲染
   * @param text 高亮文本
   * @param item 高亮配置项（如果是字符串则为 undefined）
   * @returns 自定义渲染节点
   */
  renderHighlight?: (text: string, item?: HighlightItem) => ReactNode;
}
