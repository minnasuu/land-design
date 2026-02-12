import React, { useState, useRef, useEffect } from 'react';
import './index.scss';
import { DoubleClickInputProps } from './props';

const prefixCls = 'land-double-click-input';

const DoubleClickInput: React.FC<DoubleClickInputProps> = ({
  type = 'input',
  value = '',
  onChange,
  height = 'auto',
  maxHeight,
  placeholder,
  className = '',
  style,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [inputValue, setInputValue] = useState(value);
  const inputRef = useRef<HTMLInputElement | HTMLTextAreaElement>(null);

  useEffect(() => {
    setInputValue(value);
  }, [value]);

  const handleDoubleClick = () => {
    setIsEditing(true);
    setTimeout(() => {
      if (inputRef.current) {
        inputRef.current.focus();
        const length = inputRef.current.value.length;
        inputRef.current.setSelectionRange(length, length);
        inputRef.current.scrollTop = inputRef.current.scrollHeight;
      }
    }, 0);
  };

  const handleBlur = () => {
    setIsEditing(false);
    if (onChange && inputValue !== value) {
      onChange(inputValue);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleBlur();
    }
    if (e.key === 'Escape') {
      setInputValue(value);
      setIsEditing(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setInputValue(e.target.value);
  };

  const getTextareaStyle = () => {
    const s: React.CSSProperties = {};
    if (height !== 'auto') {
      s.height = `${height}px`;
    }
    if (maxHeight) {
      s.maxHeight = `${maxHeight}px`;
    }
    return s;
  };

  return (
    <div
      className={`${prefixCls} ${className}`}
      onDoubleClick={handleDoubleClick}
      style={style}
    >
      {isEditing ? (
        type === 'input' ? (
          <input
            ref={inputRef as React.RefObject<HTMLInputElement>}
            type="text"
            className={`${prefixCls}__input`}
            value={inputValue}
            onChange={handleChange}
            onBlur={handleBlur}
            onKeyDown={handleKeyDown}
            placeholder={placeholder}
          />
        ) : (
          <textarea
            ref={inputRef as React.RefObject<HTMLTextAreaElement>}
            className={`${prefixCls}__textarea`}
            value={inputValue}
            onChange={handleChange}
            onBlur={handleBlur}
            onKeyDown={handleKeyDown}
            placeholder={placeholder}
            style={getTextareaStyle()}
          />
        )
      ) : (
        <div
          className={`${prefixCls}__display ${type === 'input' ? `${prefixCls}__display--input` : `${prefixCls}__display--textarea`} ${inputValue ? '' : `${prefixCls}__display--placeholder`}`}
          style={type === 'textarea' ? getTextareaStyle() : {}}
        >
          {inputValue || placeholder}
        </div>
      )}
    </div>
  );
};

export default DoubleClickInput;
