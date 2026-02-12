import React, { useEffect, useRef, useState } from 'react';
import './index.scss';
import { AutoWidthHeightTextareaProps } from './props';

const prefixCls = 'land-auto-textarea';

const AutoWidthHeightTextarea: React.FC<AutoWidthHeightTextareaProps> = ({
  placeholder = '请输入',
  value,
  onChange,
  maxHeight = 80,
  className = '',
  style,
}) => {
  const [width, setWidth] = useState(40);
  const [height, setHeight] = useState(32);
  const holderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (holderRef.current) {
      setWidth(holderRef.current.offsetWidth + 2);
      if (holderRef.current.offsetHeight <= maxHeight) {
        setHeight(holderRef.current.offsetHeight);
      }
    }
  }, [placeholder, value, maxHeight]);

  return (
    <div className={`${prefixCls} ${className}`} style={{ maxHeight: `${maxHeight}px`, ...style }}>
      <div ref={holderRef} className={`${prefixCls}__holder`}>
        {value?.trimEnd() || placeholder?.trimEnd()}
      </div>
      <textarea
        style={{ width, height }}
        className={`${prefixCls}__input`}
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange?.(e.target.value, e)}
      />
    </div>
  );
};

export default AutoWidthHeightTextarea;
