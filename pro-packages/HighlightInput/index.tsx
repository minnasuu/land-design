import React, { useCallback, useMemo, useRef, useState } from 'react';
import './index.scss';
import useGetHightString from '../../packages/hooks/useGetHighlightStr';
import { MsHighlightInputProps } from './props';

const MsHighlightInput: React.FC<MsHighlightInputProps> = ({
  value = '',
  showNum = true,
  maxLength = 300,
  fail,
  disabledInput = false,
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
  /** 控制高两层左右滚动 */
  const boxRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  /* 左右滚动 */
  const ScrollLabel = useCallback(() => {
    if (!boxRef.current || !inputRef.current) return;
    boxRef.current.scrollLeft = inputRef.current.scrollLeft;
  }, []);
  const handleBlur = useCallback(() => {
    if (boxRef.current) boxRef.current.scrollLeft = 0;
    onBlur?.();
  }, []);

  const [hover, setHover] = useState<boolean>(false);
  return (
    <div className={`land-highlight-input ${className}`} style={style}>
      <div
        className={`land-highlight-input-container  ${fail || Number(value?.length) > maxLength ? 'error' : ''
          } ${hover ? 'hover' : ''}`}
        onMouseOver={() => setHover(true)}
        onMouseOut={() => setHover(false)}
      >
        <div className="land-highlight-input-content">
          {value ? (
            <div
              ref={boxRef}
              className={`land-highlight-input-hight-string ${disabledInput ? 'disabled' : ''
                }`}
            >
              {highStringList.map((item, idx) => {
                if (item.type === 'default') return item.msg;
                if (formatHighlightString) return formatHighlightString(item.msg);
                return (
                  <span className='land-highlight-input-hight-string-item' key={item.msg + idx}>
                    {item.msg}
                  </span>
                );
              })}
            </div>
          ) : (
            <div
              className="land-highlight-input-placeholder"
            >
              {placeholder}
            </div>
          )}
          <input
            ref={inputRef}
            id='highlight-input'
            type="text"
            className="land-highlight-input-input"
            disabled={disabledInput}
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
        {(Number(value?.length) > maxLength || showNum) && (
          <div className="land-highlight-input-operation">
            <div
              className={`land-highlight-input-operation-text ${Number(value?.length) > maxLength ? 'error' : ''
                }`}
            >
              {value?.length}
            </div>
            /{maxLength}
          </div>
        )}
      </div>
      {/* 失败信息 */}
      {fail && <p className="land-highlight-input-fail">{fail}</p>}
    </div>
  );
};

export default MsHighlightInput;
