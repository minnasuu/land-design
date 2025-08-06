export type AutoWidthHeightTextareaProps = {
  placeholder?: string;
  value?: string;
  maxHeight?: number;
  onChange?: (value: string, e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}