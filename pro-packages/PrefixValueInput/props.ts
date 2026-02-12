import { TextareaHTMLAttributes } from 'react';

export interface PrefixValueInputProps extends Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, 'value'> {
  /** 前缀文本 */
  prefix?: string;
  /** 当前值 */
  value?: string;
  /** 是否自动调整高度 */
  autoResize?: boolean;
  className?: string;
  style?: React.CSSProperties;
}
