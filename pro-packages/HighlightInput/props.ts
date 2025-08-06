import { CommonProps } from "../../packages/types";

export type MsHighlightInputProps = {
  /** 输入值 */
  value?: string;
  /** 是否展示字数 */
  showNum?: boolean;
  /** 最大输入数 */
  maxLength?: number;
  /** 失败信息 */
  fail?: string;
  /** 是否禁用 */
  disabledInput?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onFocus?: () => void;
  onBlur?: () => void;
  placeholder?: string;
  /** 高亮文案 */
  highlightString?: string[];
  formatHighlightString?: (val: string) => React.ReactNode;
  [key: string]: any;
} & CommonProps;