export const reactTsxCodeStr = `import React, { useState, useRef, useEffect } from 'react'
import './index.scss'

export type DoubleClickInputProps = {
  type?: 'input' | 'textarea';
  value?: string;
  onChange?: (value: string) => void;
  height?: number | 'auto';
  maxHeight?: number;
  placeholder?: string;
  className?: string;
  style?: React.CSSProperties;
};

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
      style.height = \`\${height}px\`;
    }
    if (maxHeight) {
      style.maxHeight = \`\${maxHeight}px\`;
    }
    return style;
  };

  return (
    <div
      className={\`double-click-input \${className}\`}
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
        <div className={\`display-text \${type} \${inputValue ? '' : 'placeholder'}\`} style={type === 'textarea' ? getTextareaStyle() : {}}>
          {inputValue || placeholder}
        </div>
      )}
    </div>
  )
}

export default DoubleClickInput;`

export const reactScssCodeStr = `.double-click-input {
  position: relative;
  width: 100%;
  display: flex;
  color: var(--color-text-primary);
  
  .display-text {
    width: 100%;
    border-radius: 4px;
    font-size: var(--font-content-m);
    line-height: 22px;
    letter-spacing: normal;
    cursor: text;
    word-break: break-all;
    user-select: none;
    
    &.placeholder{
      color: var(--color-text-tertiary);
    }
    &.input{
      height: 100%;
      white-space: nowrap;
      overflow: auto;
      &::-webkit-scrollbar {
        display: none;
      }
    }
    &.textarea{
      overflow: auto;
      &::-webkit-scrollbar {
        display: none;
      }
    }
  }

  input{
    height: 22px;
    width: 100%;
  }
  input, textarea {
    appearance: none;
    margin: 0;
    width: 100%;
    padding: 0px;
    font-size: var(--font-content-m);
    word-break: break-all;
    border: none;
    outline: none;
    background: transparent;
    line-height: 22px;
    letter-spacing: normal;
    font-family: inherit;
    
    &:focus,
    &:focus-within,
    &:focus-visible,
    &:active {
      border: none;
      outline: none;
    }
  }

  textarea {
    resize: vertical;
    min-height: 32px;
    line-height: 22px;
    border: none;
    outline: none;
    background: transparent;
    resize: none;
    &::-webkit-scrollbar {
      display: none;
    }
  }
}
`