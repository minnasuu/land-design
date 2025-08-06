
import React, { useEffect, useRef, useState } from "react";
import './index.scss'
import { AutoWidthHeightTextareaProps } from "./props";

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
    <div className='land-auto-width-height-textarea' style={{ maxHeight: `${maxHeight}px` }}>
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
