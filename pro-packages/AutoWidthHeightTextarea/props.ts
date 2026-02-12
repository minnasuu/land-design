export interface AutoWidthHeightTextareaProps {
  /** 占位符 */
  placeholder?: string;
  /** 输入值 */
  value?: string;
  /** 最大高度 */
  maxHeight?: number;
  /** 值变化时的回调 */
  onChange?: (value: string, e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  className?: string;
  style?: React.CSSProperties;
}
