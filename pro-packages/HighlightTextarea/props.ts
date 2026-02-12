import { TextareaHTMLAttributes } from 'react';
import { ReactNode } from 'react';

export type HighlightTextareaProps = {
  /** 当前值 */
  value?: string;
  /** textarea 引用 */
  textAreaRef?: React.RefObject<HTMLTextAreaElement>;
  /** 高亮文案 */
  highlightString?: string[];
  /** 是否自动调整高度 */
  autoResize?: boolean;
  /** 自定义高亮格式化函数 */
  formatHighlightString?: (val: string) => ReactNode;
  className?: string;
  style?: React.CSSProperties;
} & Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, 'value'>;
