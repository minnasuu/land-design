import React, { useCallback, useMemo, useRef } from 'react';
import './index.scss';
import useGetHightString from '../../packages/hooks/useGetHighlightStr';
import { HighlightInputProps } from './props';

const prefixCls = 'land-highlight-input';

const HighlightInput: React.FC<HighlightInputProps> = ({
  value = '',
  onChange,
  onFocus,
  onBlur,
  placeholder,
  highlightString = [],
  formatHighlightString,
  className = '',
  style,
  ...restProps
}) => {
  const highStringList = useMemo(() => useGetHightString(value, highlightString), [value, highlightString]);
  const boxRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const ScrollLabel = useCallback(() => {
    if (!boxRef.current || !inputRef.current) return;
    boxRef.current.scrollLeft = inputRef.current.scrollLeft;
  }, []);

  const handleBlur = useCallback(() => {
    if (boxRef.current) boxRef.current.scrollLeft = 0;
    onBlur?.();
  }, []);

  return (
    <div className={`${prefixCls} ${className}`} style={style}>
          {value ? (
            <div
              ref={boxRef}
              className={`${prefixCls}__highlight-string`}
            >
              {highStringList.map((item, idx) => {
                if (item.type === 'default') return item.msg;
                if (formatHighlightString) return formatHighlightString(item.msg);
                return (
                  <span className={`${prefixCls}__highlight-item`} key={item.msg + idx}>
                    {item.msg}
                  </span>
                );
              })}
            </div>
          ) : (
            <div className={`${prefixCls}__placeholder`}>
              {placeholder}
            </div>
          )}
          <input
            ref={inputRef}
            type="text"
            className={`${prefixCls}__input`}
            value={value}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              ScrollLabel?.();
              onChange?.(e);
            }}
            onScroll={() => ScrollLabel()}
            onFocus={() => onFocus?.()}
            onBlur={handleBlur}
            {...restProps}
          />
    </div>
  );
};

export default HighlightInput;
