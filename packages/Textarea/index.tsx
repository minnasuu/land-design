import React, { useCallback, useRef } from 'react';
import './index.scss';
import Icon from "../Icon";
import { TextareaProps } from './props';

const Textarea: React.FC<TextareaProps> = ({
  type = 'border',
  value,
  placeholder = '请输入',
  beforeContent,
  afterContent,
  width,
  height,
  maxLength,
  showNumber = false,
  disabled,
  textAlign = 'left',
  rows = 4,
  resize = 'vertical',
  onChange,
  onFocus,
  onBlur,
  onClear,
  onKeyDown,
  className = '',
  style,
  ...restProps
}) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleBlur = useCallback((e: React.FocusEvent<HTMLTextAreaElement>) => {
    onBlur?.(e);
  }, [onBlur]);

  const handleChange = useCallback((e: React.ChangeEvent<HTMLTextAreaElement>) => {
    onChange?.(e.target.value, e);
  }, [onChange]);

  const currentLength = value?.length || 0;
  const showCount = showNumber && maxLength;

  return (
    <div
      className={`land-textarea ${disabled ? "disabled" : ""} ${onClear ? "clear" : ""
        } ${type} text-${textAlign} ${className}`}
      style={{
        width: typeof width === "number" ? `${width}px` : width,
        height: typeof height === "number" ? `${height}px` : height,
        ...style,
      }}
    >
      {beforeContent && (
        <div className="textarea-beforeContent">{beforeContent}</div>
      )}
      
      <div className="land-textarea-content">
        <div className="textarea-input-wrapper">
          <textarea
            ref={textareaRef}
            placeholder={placeholder}
            value={value}
            maxLength={maxLength}
            rows={rows}
            disabled={disabled}
            onFocus={onFocus}
            onBlur={handleBlur}
            onChange={handleChange}
            onKeyDown={onKeyDown}
            style={{
              resize: resize,
            }}
            {...restProps}
          />
        </div>
      </div>

      {afterContent && <div className="textarea-afterContent">{afterContent}</div>}
      
      {onClear && (
        <div
          className={`land-textarea-clear-icon ${value ? "" : "hide"}`}
          onClick={onClear}
        >
          <Icon name="error-fill" />
        </div>
      )}

      {showCount && (
        <div className="land-textarea-count">
          <span className={currentLength > maxLength ? 'error' : ''}>
            {currentLength}
          </span>
          /{maxLength}
        </div>
      )}
    </div>
  );
};

export default Textarea;
