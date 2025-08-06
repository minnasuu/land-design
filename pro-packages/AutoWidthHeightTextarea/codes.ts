export const reactTsxCodeStr = `
import React, { useEffect, useRef, useState } from "react";
import './index.scss'

export type AutoWidthHeightTextareaProps = {
  placeholder?: string;
  value?: string;
  maxHeight?: number;
  onChange?: (value: string, e: React.ChangeEvent<HTMLTextAreaElement>) => void;
}

const AutoWidthHeightTextarea: React.FC<AutoWidthHeightTextareaProps> = ({
  placeholder = '请输入',
  value,
  onChange,
  maxHeight = 80,
}) => {
  const [width, setWidth] = useState(40);
  const [height, setHeight] = useState(32);
  const textContainerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (textContainerRef.current) {
      setWidth(textContainerRef.current.offsetWidth + 2);
      if (textContainerRef.current.offsetHeight <= maxHeight) setHeight(textContainerRef.current.offsetHeight);
    }
  }, [placeholder, value]);
  return (
    <div className='land-auto-width-height-textarea' style={{ maxHeight: \`\${maxHeight}px\` }}>
      <div ref={textContainerRef} className='land-auto-width-height-textarea-holder'>{value?.trimEnd() || placeholder?.trimEnd()}</div>
      <textarea
        style={{ width, height }}
        className='land-auto-width-height-textarea-input'
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange?.(e.target.value, e)}
      />
    </div>
  );
};
export default AutoWidthHeightTextarea;
`

export const reactScssCodeStr = `.land-auto-width-height-textarea{
  position: relative;
  display: inline-flex;
  padding: var(--padding-s) var(--padding-l);
  margin: var(--padding-xs);
  transition: background-color 0.3s ease;
  overflow: hidden;
  flex-shrink: 0;
  width: fit-content;
  background-color: var(--color-bg-secondary);
  border-radius: var(--radius-8);
  &:hover{
    background-color: var(--color-bg-tertiary);
  }
}
.land-auto-width-height-textarea-input{
  position: absolute;
  appearance: none;
  padding: 0;
  left: 12px;
  top: 5px;
  resize: none;
  border: none;
  background-color: transparent;
  font-size: var(--font-content-m);
  color: var(--color-text-primary);
  line-height: 22px;
  overflow: auto;
  max-height: 80px;
  font-family: inherit;
  caret-color: var(--color-primary);
  &:focus,
  &:focus-visible{
    border: none;
    outline: none;
  }
  &::placeholder{
    color: var(--color-text-tertiary);
    line-height: 22px;
  }
  &::-webkit-scrollbar{
    display: none;
  }
}

.land-auto-width-height-textarea-holder {
  font-size: var(--font-content-m);
  line-height: 22px;
  letter-spacing: normal;
  color: var(--color-text-quaternary);
  opacity: 0;
  width: fit-content;
  word-spacing: normal;
  text-rendering: auto;
  text-transform: none;
  overflow-wrap: break-word;
  white-space: pre-wrap;
}
`  