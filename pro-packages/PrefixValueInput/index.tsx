import React, { useEffect, useRef, useState, useCallback } from 'react';
import './index.scss';
import { PrefixValueInputProps } from './props';

const prefixCls = 'land-prefix-value-input';

const PrefixValueInput: React.FC<PrefixValueInputProps> = ({
  value = '',
  prefix,
  onChange,
  onScroll,
  autoResize,
  placeholder,
  className = '',
  style,
  ...restProps
}) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const mirrorRef = useRef<HTMLDivElement>(null);
  const prefixRef = useRef<HTMLSpanElement>(null);
  const [prefixWidth, setPrefixWidth] = useState(0);

  useEffect(() => {
    setPrefixWidth(prefixRef.current?.offsetWidth ?? 0);
  }, [prefix]);

  const syncScroll = useCallback(() => {
    if (mirrorRef.current && textareaRef.current) {
      mirrorRef.current.scrollTop = textareaRef.current.scrollTop;
    }
  }, []);

  const autoResizeTextarea = useCallback(() => {
    if (!textareaRef.current) return;
    textareaRef.current.style.height = 'auto';
    textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
  }, []);

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLTextAreaElement>) => {
      onChange?.(e);
      if (autoResize) {
        autoResizeTextarea();
      } else {
        syncScroll();
      }
    },
    [onChange, autoResize]
  );

  const handleScroll = useCallback(
    (e: React.UIEvent<HTMLTextAreaElement>) => {
      onScroll?.(e);
      syncScroll();
    },
    [onScroll]
  );

  return (
    <div className={`${prefixCls} ${className}`} style={style}>
      <div ref={mirrorRef} className={`${prefixCls}__mirror`}>
        {prefix && (
          <span ref={prefixRef} className={`${prefixCls}__prefix`}>
            [<span className={`${prefixCls}__prefix-text`}>{prefix}</span>]
          </span>
        )}
        <span className={`${prefixCls}__mirror-value`}>
          {value || <span className={`${prefixCls}__placeholder`}>{placeholder}</span>}
        </span>
      </div>
      <textarea
        ref={textareaRef}
        className={`${prefixCls}__textarea`}
        style={prefixWidth ? { textIndent: `${prefixWidth + 4}px` } : undefined}
        value={value}
        placeholder={placeholder}
        onChange={handleChange}
        onScroll={autoResize ? undefined : handleScroll}
        {...restProps}
      />
    </div>
  );
};

export default PrefixValueInput;
