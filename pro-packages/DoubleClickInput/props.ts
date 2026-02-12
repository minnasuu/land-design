export interface DoubleClickInputProps {
  /** 输入框类型 */
  type?: 'input' | 'textarea';
  /** 输入值 */
  value?: string;
  /** 值变化时的回调（失焦或回车时触发） */
  onChange?: (value: string) => void;
  /** 高度，仅 textarea 有效 */
  height?: number | 'auto';
  /** 最大高度，仅 textarea 有效 */
  maxHeight?: number;
  /** 占位符 */
  placeholder?: string;
  className?: string;
  style?: React.CSSProperties;
}
