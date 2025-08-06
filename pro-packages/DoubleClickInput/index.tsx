import React, { useState, useRef, useEffect } from 'react'
import './index.scss'
import { DoubleClickInputProps } from './props';


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
    const style: React.CSSProperties = {};
    if (height !== 'auto') {
      style.height = `${height}px`;
    }
    if (maxHeight) {
      style.maxHeight = `${maxHeight}px`;
    }
    return style;
  };

  return (
    <div
      className={`double-click-input ${className}`}
      onDoubleClick={handleDoubleClick}
      style={style}
    >
      {isEditing ? (
        type === 'input' ? (
          <input
            ref={inputRef as React.RefObject<HTMLInputElement>}
            type="text"
            value={inputValue}
            onChange={handleChange}
            onBlur={handleBlur}
            onKeyDown={handleKeyDown}
            placeholder={placeholder}
          />
        ) : (
          <textarea
            ref={inputRef as React.RefObject<HTMLTextAreaElement>}
            value={inputValue}
            onChange={handleChange}
            onBlur={handleBlur}
            onKeyDown={handleKeyDown}
            placeholder={placeholder}
            style={getTextareaStyle()}
          />
        )
      ) : (
        <div className={`display-text ${type} ${inputValue ? '' : 'placeholder'}`} style={type === 'textarea' ? getTextareaStyle() : {}}>
          {inputValue || placeholder}
        </div>
      )}
    </div>
  )
}

export default DoubleClickInput;