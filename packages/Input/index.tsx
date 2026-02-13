import { useCallback, useEffect, useRef, useState } from 'react';
import Icon from '../Icon';
import { InputProps } from './props';
import './index.scss';

const Input: React.FC<InputProps> = ({
  type = 'border',
  value,
  inputType = 'text',
  placeholder = '请输入',
  beforeContent,
  afterContent,
  prefix,
  suffix,
  maxLength,
  disabled,
  textAlign = 'left',
  autoWidth,
  onChange,
  onEnter,
  onFocus,
  onBlur,
  onClear,
  className,
  style,
  ...restProps
}) => {
  const ghostRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  // 内部 state 消除受控模式下父组件渲染延迟导致的输入卡顿
  const [innerValue, setInnerValue] = useState(value ?? '');
  const isComposing = useRef(false);

  // 外部 value 变化时同步到内部（非输入法合成期间）
  useEffect(() => {
    if (!isComposing.current) {
      setInnerValue(value ?? '');
    }
  }, [value]);

  const syncScroll = useCallback(() => {
    if (!ghostRef.current || !inputRef.current) return;
    ghostRef.current.scrollLeft = inputRef.current.scrollLeft;
  }, []);

  const handleBlur = useCallback((e: React.FocusEvent<HTMLInputElement>) => {
    if (ghostRef.current) ghostRef.current.scrollLeft = 0;
    onBlur?.(e);
  }, [onBlur]);

  const handleKeyDown = useCallback((e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      onEnter?.(innerValue, e);
    }
  }, [onEnter, innerValue]);

  const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const newVal = e.target.value;
    setInnerValue(newVal);
    syncScroll();
    onChange?.(newVal, e);
  }, [syncScroll, onChange]);

  const handleCompositionStart = useCallback(() => {
    isComposing.current = true;
  }, []);

  const handleCompositionEnd = useCallback((e: React.CompositionEvent<HTMLInputElement>) => {
    isComposing.current = false;
    // 某些浏览器 compositionEnd 在 onChange 之后触发，需手动同步
    const newVal = (e.target as HTMLInputElement).value;
    setInnerValue(newVal);
    onChange?.(newVal);
  }, [onChange]);

  const rootCls = [
    'land-input',
    `land-input--${type}`,
    `land-input--align-${textAlign}`,
    disabled && 'land-input--disabled',
    onClear && 'land-input--clearable',
    autoWidth && 'land-input--auto-width',
    className,
  ].filter(Boolean).join(' ');

  return (
    <div className={rootCls} style={style}>
      {beforeContent && <div className="land-input__before">{beforeContent}</div>}

      <div className="land-input__body">
        {prefix && (
          <div className="land-input__prefix-ghost">
            <span className="land-input__affix-label">{prefix}</span>
            <span className="land-input__affix-value">{innerValue || placeholder}</span>
          </div>
        )}
        {prefix && <span className="land-input__affix-spacer">{prefix}</span>}

        <input
          ref={inputRef}
          type={inputType}
          placeholder={placeholder}
          value={innerValue}
          maxLength={maxLength}
          disabled={disabled}
          onKeyDown={handleKeyDown}
          onClick={(e) => e.stopPropagation()}
          onFocus={onFocus}
          onBlur={handleBlur}
          onChange={handleChange}
          onScroll={syncScroll}
          onCompositionStart={handleCompositionStart}
          onCompositionEnd={handleCompositionEnd}
          {...restProps}
        />

        {autoWidth && (
          <span className="land-input__mirror" aria-hidden>
            {innerValue || placeholder}
          </span>
        )}

        {suffix && innerValue && (
          <div className="land-input__suffix-ghost">
            {prefix && <span className="land-input__affix-spacer">{prefix}</span>}
            <span className="land-input__affix-value">{innerValue}</span>
            <span className="land-input__affix-label land-input__affix-label--suffix">{suffix}</span>
          </div>
        )}
      </div>

      {suffix && innerValue && <span className="land-input__affix-spacer land-input__affix-spacer--suffix">{suffix}</span>}
      {afterContent && <div className="land-input__after">{afterContent}</div>}

      {onClear && (
        <div
          className={`land-input__clear ${innerValue ? 'land-input__clear--active' : ''}`}
          onClick={onClear}
        >
          <Icon name="error-fill" />
        </div>
      )}
    </div>
  );
};

export default Input;
