export interface HighlightInputProps {
  /** 输入值 */
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus?: () => void;
  onBlur?: () => void;
  placeholder?: string;
  /** 高亮文案 */
  highlightString?: string[];
  formatHighlightString?: (val: string) => React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
};