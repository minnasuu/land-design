import { ReactNode } from 'react';
import { CommonProps } from '../types';

export interface InputProps extends CommonProps {
  /**
   * 输入框外观类型
   * - border: 边框样式
   * - background: 背景样式
   * - transparent: 透明样式
   * @default 'border'
   */
  type?: 'border' | 'background' | 'transparent';

  /** 输入值（受控） */
  value?: string;

  /**
   * HTML input type
   * @default 'text'
   */
  inputType?: 'text' | 'password' | 'email' | 'number' | 'tel' | 'url' | 'search';

  /** 占位符 */
  placeholder?: string;

  /** 是否禁用 */
  disabled?: boolean;

  /** 最大字符数 */
  maxLength?: number;

  /**
   * 文字对齐方式
   * @default 'left'
   */
  textAlign?: 'left' | 'center' | 'right';

  /** 结构前缀（输入框外部左侧） */
  beforeContent?: ReactNode;

  /** 结构后缀（输入框外部右侧） */
  afterContent?: ReactNode;

  /** 内容前缀（输入框内部左侧，跟随文字） */
  prefix?: ReactNode;

  /** 内容后缀（输入框内部右侧，跟随文字） */
  suffix?: ReactNode;

  /** 值变化回调 */
  onChange?: (val: string, e?: React.ChangeEvent<HTMLInputElement>) => void;

  /** 回车回调 */
  onEnter?: (val: string, e?: React.KeyboardEvent<HTMLInputElement>) => void;

  /** 聚焦回调 */
  onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;

  /** 失焦回调 */
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;

  /** 清除回调（传入即显示清除按钮） */
  onClear?: () => void;

  /**
   * 宽度随内容自适应
   * @default false
   */
  autoWidth?: boolean;
}
