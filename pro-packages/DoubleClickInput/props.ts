import { CommonProps } from "../../packages/types";

export type DoubleClickInputProps = {
  type?: 'input' | 'textarea';
  value?: string;
  onChange?: (value: string) => void;
  height?: number | 'auto';
  maxHeight?: number;
  placeholder?: string;
} & CommonProps;