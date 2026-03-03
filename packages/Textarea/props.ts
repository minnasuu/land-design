import { CSSProperties, ReactNode, TextareaHTMLAttributes, ChangeEvent, KeyboardEvent, FocusEvent } from 'react';

// ==================== 基础类型定义 ====================

/**
 * 文本域外观变体
 * - outline: 描边样式，有边框无背景（默认）
 * - filled: 填充样式，有背景色无边框
 * - transparent: 透明样式，无边框无背景
 */
export type TextareaVariant = 'outline' | 'filled' | 'transparent';

/**
 * 文本域语义状态
 * - default: 默认状态
 * - primary: 主色调
 * - warning: 警告
 * - danger: 危险/错误
 * - success: 成功
 */
export type TextareaStatus = 'default' | 'primary' | 'warning' | 'danger' | 'success';

/** 文字对齐方式 */
export type TextareaAlign = 'left' | 'center' | 'right';

/** 调整大小方式 */
export type TextareaResize = 'none' | 'both' | 'horizontal' | 'vertical';

// ==================== 属性接口定义 ====================

/**
 * Textarea 组件属性
 */
export interface TextareaProps {
  // ─── 外观属性 ───
  /**
   * 文本域外观变体
   * @default 'outline'
   */
  variant?: TextareaVariant;
  
  /**
   * 文本域语义状态
   * @default 'default'
   */
  status?: TextareaStatus;
  
  /**
   * 文字对齐方式
   * @default 'left'
   */
  textAlign?: TextareaAlign;

  // ─── 基础属性 ───
  /**
   * 输入值（受控）
   */
  value?: string;
  
  /**
   * 默认值（非受控）
   */
  defaultValue?: string;
  
  /**
   * 占位符
   * @default '请输入'
   */
  placeholder?: string;
  
  /**
   * 是否禁用
   * @default false
   */
  disabled?: boolean;
  
  /**
   * 是否只读
   * @default false
   */
  readOnly?: boolean;
  
  /**
   * 最大字符数
   */
  maxLength?: number;
  
  /**
   * 是否显示字数统计
   * @default false
   */
  showCount?: boolean;
  
  /**
   * 自定义字数统计显示格式
   * @param count 当前字数
   * @param maxLength 最大字数
   * @returns 显示内容
   */
  countFormatter?: (count: number, maxLength?: number) => string;

  // ─── 尺寸属性 ───
  /**
   * 文本域行数
   * @default 4
   */
  rows?: number;
  
  /**
   * 最小行数（配合 autoSize 使用）
   */
  minRows?: number;
  
  /**
   * 最大行数（配合 autoSize 使用）
   */
  maxRows?: number;
  
  /**
   * 是否自动调整高度
   * @default false
   */
  autoSize?: boolean | { minRows?: number; maxRows?: number };
  
  /**
   * 调整大小方式
   * @default 'none'
   */
  resize?: TextareaResize;
  
  /**
   * 是否为块级元素，占满父容器宽度
   * @default false
   */
  block?: boolean;
  
  /**
   * 自定义宽度
   */
  width?: number | string;
  
  /**
   * 自定义高度
   */
  height?: number | string;

  // ─── 内容插槽 ───
  /**
   * 结构前缀（文本域外部上方）
   */
  beforeContent?: ReactNode;
  
  /**
   * 结构后缀（文本域外部下方）
   */
  afterContent?: ReactNode;

  // ─── 事件属性 ───
  /**
   * 值变化回调
   * @param value 当前值
   * @param e 原生事件对象
   */
  onChange?: (value: string, e?: ChangeEvent<HTMLTextAreaElement>) => void;
  
  /**
   * 聚焦回调
   * @param e 原生事件对象
   */
  onFocus?: (e: FocusEvent<HTMLTextAreaElement>) => void;
  
  /**
   * 失焦回调
   * @param e 原生事件对象
   */
  onBlur?: (e: FocusEvent<HTMLTextAreaElement>) => void;
  
  /**
   * 键盘按下回调
   * @param e 原生事件对象
   */
  onKeyDown?: (e: KeyboardEvent<HTMLTextAreaElement>) => void;
  
  /**
   * 回车回调（不包含 Shift+Enter）
   * @param value 当前值
   * @param e 原生事件对象
   */
  onEnter?: (value: string, e?: KeyboardEvent<HTMLTextAreaElement>) => void;
  
  /**
   * 清除回调（传入即显示清除按钮）
   */
  onClear?: () => void;

  // ─── 样式属性 ───
  /**
   * 自定义类名
   */
  className?: string;
  
  /**
   * 自定义样式
   */
  style?: CSSProperties;
  
  /**
   * 原生 textarea HTML 属性透传
   */
  htmlProps?: TextareaHTMLAttributes<HTMLTextAreaElement>;
}

// ==================== 默认属性 ====================

export const defaultTextareaProps: Partial<TextareaProps> = {
  variant: 'outline',
  status: 'default',
  textAlign: 'left',
  placeholder: '请输入',
  disabled: false,
  readOnly: false,
  showCount: false,
  rows: 4,
  autoSize: false,
  resize: 'none',
  block: false,
};
