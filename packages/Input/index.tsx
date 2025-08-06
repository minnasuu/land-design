import React, { useCallback, useRef } from "react";
import './index.scss';
import Icon from "../Icon";
import { InputProps } from './props';
const Input: React.FC<InputProps> = ({
  type = 'border',
  value,
  inputType = 'text',
  placeholder = '请输入',
  beforeContent,
  afterContent,
  prefix,
  suffix,
  width,
  maxLength,
  disabled,
  textAlign = 'left',
  onChange,
  onEnter,
  onFocus,
  onBlur,
  onClear,
  className = '',
  style,
  ...restProps
}) => {
  const InputLabelRef = useRef<HTMLDivElement>(null);
  /** 控制高两层左右滚动 */
  const inputRef = useRef<HTMLInputElement>(null);
  /* 左右滚动 */
  const ScrollLabel = useCallback(() => {
    if (!InputLabelRef.current || !inputRef.current) return;
    InputLabelRef.current.scrollLeft = inputRef.current.scrollLeft;
  }, []);
  const handleBlur = useCallback((e) => {
    if (InputLabelRef.current) InputLabelRef.current.scrollLeft = 0;
    onBlur?.(e);
  }, []);
  return (
    <div
      className={`land-input ${disabled ? "disabled" : ""} ${onClear ? "clear" : ""
        } ${type} text-${textAlign} ${className}`}
      style={{
        width: typeof width === "number" ? `${width}px` : width,
        ...style,
      }}
    >
      {beforeContent && (
        <div className="input-beforeContent">{beforeContent}</div>
      )}
      <div className="land-input-content">
        {prefix && (
          <div className={"input-prefix-content"}>
            <p className="input-prefix">{prefix}</p>
            <div className={"prefix-value"}>{value || placeholder}</div>
          </div>
        )}
        {prefix && <p className="input-prefix-empty">{prefix}</p>}
        <input
          ref={inputRef}
          placeholder={placeholder}
          type={inputType}
          value={value}
          max={maxLength}
          onKeyDown={(e) => {
            if (e.code === "Enter") {
              onEnter?.(value, e);
            }
          }}
          onClick={(e) => e.stopPropagation()}
          onFocus={onFocus}
          onBlur={handleBlur}
          onChange={(e) => {
            ScrollLabel?.();
            onChange?.(e.target.value, e);
          }}
          onScroll={ScrollLabel}
          {...restProps}
        />
        {suffix && value && (
          <div className={"input-suffix-content"}>
            {prefix && <p className="input-prefix-empty">{prefix}</p>}
            <div className={"suffix-value"}>{value}</div>
            <p className="input-suffix">{suffix}</p>
          </div>
        )}
      </div>
      {suffix && value && <p className="input-suffix-empty">{suffix}</p>}
      {afterContent && <div>{afterContent}</div>}
      {onClear && (
        <div
          className={`land-input-clear-icon ${value ? "" : "hide"}`}
          onClick={onClear}
        >
          <Icon name="error-fill" />
        </div>
      )}
    </div>
  );
};

export default Input;
