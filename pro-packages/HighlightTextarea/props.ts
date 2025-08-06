import { CSSProperties, ReactNode } from "react";
import { TextareaHTMLAttributes } from "react";
import { CommonProps } from "../../packages/types";

export type HighlightTextareaProps = {
  /** 当前值 */
  value?: string;
  /**  */
  textAreaRef?: React.RefObject<HTMLTextAreaElement>;
  /** 高亮文案 */
  highlightString?: string[];
  highlightBg?: string;
  highlightColor?: string;
  /** 禁止输入 */
  disabled?: boolean;
  autoResize?: boolean
  /**
   * 格式化高亮文案
   * @description 可以自定义添加标签包裹，增加文案事件颜色等，但是请不要使用 margin、padding 等影响布局的样式
   */
  contentClassName?: string;
  contentStyle?: CSSProperties;
  inputClassName?: string;
  inputStyle?: CSSProperties;
  formatHighlightString?: (val: string) => ReactNode;
} & CommonProps & Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, 'value'>;