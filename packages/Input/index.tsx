import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import Icon from '../Icon';
import { InputProps } from './props';
import InputHighlight from './InputHighlight';
import './index.scss';

const prefixCls = 'land-input';

const Input: React.FC<InputProps> & {
  InputHighlight: typeof InputHighlight;
} = ({
  variant = 'outline',
  status = 'default',
  size = 'default',
  textAlign = 'left',
  inputType = 'text',
  value,
  placeholder = '请输入',
  disabled = false,
  maxLength,
  block = false,
  autoWidth = false,
  beforeContent,
  afterContent,
  prefix,
  suffix,
  onChange,
  onEnter,
  onFocus,
  onBlur,
  onClear,
  className = '',
  style,
  htmlProps,
}) => {
  const ghostRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const [innerValue, setInnerValue] = useState(value ?? '');
  const isComposing = useRef(false);

  useEffect(() => {
    if (!isComposing.current) {
      setInnerValue(value ?? '');
    }
  }, [value]);

  const rootClassName = useMemo(() => {
    return [
      prefixCls,
      `${prefixCls}--${variant}`,
      `${prefixCls}--${status}`,
      `${prefixCls}--${size}`,
      `${prefixCls}--align-${textAlign}`,
      disabled && `${prefixCls}--disabled`,
      block && `${prefixCls}--block`,
      autoWidth && `${prefixCls}--auto-width`,
      onClear && `${prefixCls}--clearable`,
      className,
    ]
      .filter(Boolean)
      .join(' ');
  }, [variant, status, size, textAlign, disabled, block, autoWidth, onClear, className]);

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
    const newVal = (e.target as HTMLInputElement).value;
    setInnerValue(newVal);
    onChange?.(newVal);
  }, [onChange]);

  const nativeInputProps = {
    ref: inputRef,
    type: inputType,
    placeholder,
    value: innerValue,
    maxLength,
    disabled,
    onKeyDown: handleKeyDown,
    onClick: (e: React.MouseEvent<HTMLInputElement>) => e.stopPropagation(),
    onFocus,
    onBlur: handleBlur,
    onChange: handleChange,
    onScroll: syncScroll,
    onCompositionStart: handleCompositionStart,
    onCompositionEnd: handleCompositionEnd,
    ...htmlProps,
  };

  const renderPrefix = () => {
    if (!prefix) return null;
    return (
      <>
        <div className={`${prefixCls}__prefix-ghost`}>
          <span className={`${prefixCls}__affix-label`}>{prefix}</span>
          <span className={`${prefixCls}__affix-value`}>{innerValue || placeholder}</span>
        </div>
        <span className={`${prefixCls}__affix-spacer`}>{prefix}</span>
      </>
    );
  };

  const renderSuffix = () => {
    if (!suffix || !innerValue) return null;
    return (
      <div className={`${prefixCls}__suffix-ghost`}>
        {prefix && <span className={`${prefixCls}__affix-spacer`}>{prefix}</span>}
        <span className={`${prefixCls}__affix-value`}>{innerValue}</span>
        <span className={`${prefixCls}__affix-label ${prefixCls}__affix-label--suffix`}>{suffix}</span>
      </div>
    );
  };

  const renderClear = () => {
    if (!onClear) return null;
    return (
      <div
        className={`${prefixCls}__clear ${innerValue ? `${prefixCls}__clear--active` : ''}`}
        onClick={onClear}
      >
        <Icon name="error-fill" />
      </div>
    );
  };

  return (
    <div className={rootClassName} style={style}>
      <div className={`${prefixCls}__content`}>
        {beforeContent && <div className={`${prefixCls}__before`}>{beforeContent}</div>}

      <div className={`${prefixCls}__body`}>
        {renderPrefix()}
        <input {...nativeInputProps} />
        {autoWidth && (
          <span className={`${prefixCls}__mirror`} aria-hidden>
            {innerValue || placeholder}
          </span>
        )}
        {renderSuffix()}
      </div>

      {suffix && innerValue && (
        <span className={`${prefixCls}__affix-spacer ${prefixCls}__affix-spacer--suffix`}>{suffix}</span>
      )}
      {afterContent && <div className={`${prefixCls}__after`}>{afterContent}</div>}
      {renderClear()}
      </div>
    </div>
  );
};

Input.InputHighlight = InputHighlight;

export default Input;
