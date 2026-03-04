import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import Icon from '../Icon';
import { TextareaProps, defaultTextareaProps } from './props';
import './index.scss';

const prefixCls = 'land-textarea';

const Textarea: React.FC<TextareaProps> = ({
  variant = defaultTextareaProps.variant!,
  status = defaultTextareaProps.status!,
  textAlign = defaultTextareaProps.textAlign!,
  value,
  defaultValue,
  placeholder = defaultTextareaProps.placeholder!,
  disabled = defaultTextareaProps.disabled!,
  readOnly = defaultTextareaProps.readOnly!,
  maxLength,
  showCount = defaultTextareaProps.showCount!,
  countFormatter,
  rows = defaultTextareaProps.rows!,
  minRows,
  maxRows,
  autoSize = defaultTextareaProps.autoSize!,
  resize = defaultTextareaProps.resize!,
  block = defaultTextareaProps.block!,
  width,
  height,
  beforeContent,
  afterContent,
  onChange,
  onFocus,
  onBlur,
  onKeyDown,
  onEnter,
  onClear,
  className = '',
  style,
  htmlProps,
  ...restProps
}) => {
  // ─── 状态管理 ───
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [innerValue, setInnerValue] = useState(value ?? defaultValue ?? '');
  const [isFocused, setIsFocused] = useState(false);
  const isComposing = useRef(false);

  // ─── 同步受控值 ───
  useEffect(() => {
    if (value !== undefined && !isComposing.current) {
      setInnerValue(value);
    }
  }, [value]);

  // ─── 自动调整高度 ───
  const adjustHeight = useCallback(() => {
    if (!autoSize || !textareaRef.current) return;

    const textarea = textareaRef.current;
    // 重置高度以获取准确的 scrollHeight
    textarea.style.height = 'auto';
    
    const computedStyle = window.getComputedStyle(textarea);
    const lineHeight = parseFloat(computedStyle.lineHeight) || 22;
    const paddingTop = parseFloat(computedStyle.paddingTop) || 0;
    const paddingBottom = parseFloat(computedStyle.paddingBottom) || 0;
    const borderTop = parseFloat(computedStyle.borderTopWidth) || 0;
    const borderBottom = parseFloat(computedStyle.borderBottomWidth) || 0;

    let minHeight = 0;
    let maxHeight = Infinity;

    if (typeof autoSize === 'object') {
      const autoMinRows = autoSize.minRows ?? minRows;
      const autoMaxRows = autoSize.maxRows ?? maxRows;
      if (autoMinRows) {
        minHeight = autoMinRows * lineHeight + paddingTop + paddingBottom + borderTop + borderBottom;
      }
      if (autoMaxRows) {
        maxHeight = autoMaxRows * lineHeight + paddingTop + paddingBottom + borderTop + borderBottom;
      }
    } else {
      if (minRows) {
        minHeight = minRows * lineHeight + paddingTop + paddingBottom + borderTop + borderBottom;
      }
      if (maxRows) {
        maxHeight = maxRows * lineHeight + paddingTop + paddingBottom + borderTop + borderBottom;
      }
    }

    const scrollHeight = textarea.scrollHeight;
    const newHeight = Math.min(Math.max(scrollHeight, minHeight), maxHeight);
    textarea.style.height = `${newHeight}px`;
  }, [autoSize, minRows, maxRows]);

  useEffect(() => {
    adjustHeight();
  }, [innerValue, adjustHeight]);

  // ─── 事件处理 ───
  const handleChange = useCallback((e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newValue = e.target.value;
    if (value === undefined) {
      setInnerValue(newValue);
    }
    onChange?.(newValue, e);
  }, [value, onChange]);

  const handleFocus = useCallback((e: React.FocusEvent<HTMLTextAreaElement>) => {
    setIsFocused(true);
    onFocus?.(e);
  }, [onFocus]);

  const handleBlur = useCallback((e: React.FocusEvent<HTMLTextAreaElement>) => {
    setIsFocused(false);
    onBlur?.(e);
  }, [onBlur]);

  const handleKeyDown = useCallback((e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    onKeyDown?.(e);
    if (e.key === 'Enter' && !e.shiftKey) {
      onEnter?.(innerValue, e);
    }
  }, [onKeyDown, onEnter, innerValue]);

  const handleCompositionStart = useCallback(() => {
    isComposing.current = true;
  }, []);

  const handleCompositionEnd = useCallback((e: React.CompositionEvent<HTMLTextAreaElement>) => {
    isComposing.current = false;
    const newValue = (e.target as HTMLTextAreaElement).value;
    // 只在非受控模式下更新内部状态
    if (value === undefined) {
      setInnerValue(newValue);
    }
    onChange?.(newValue);
  }, [value, onChange]);

  const handleClear = useCallback(() => {
    if (value === undefined) {
      setInnerValue('');
    }
    onClear?.();
  }, [value, onClear]);

  // ─── 计算值 ───
  const currentLength = innerValue.length;
  const isOverLimit = maxLength !== undefined && currentLength > maxLength;

  const countContent = useMemo(() => {
    if (!showCount) return null;
    if (countFormatter) {
      return countFormatter(currentLength, maxLength);
    }
    if (maxLength !== undefined) {
      return `${currentLength}/${maxLength}`;
    }
    return `${currentLength}`;
  }, [showCount, countFormatter, currentLength, maxLength]);

  // ─── 样式计算 ───
  const rootClassName = useMemo(() => {
    return [
      prefixCls,
      `${prefixCls}--${variant}`,
      `${prefixCls}--${status}`,
      `${prefixCls}--align-${textAlign}`,
      disabled && `${prefixCls}--disabled`,
      readOnly && `${prefixCls}--readonly`,
      block && `${prefixCls}--block`,
      isFocused && `${prefixCls}--focused`,
      onClear && `${prefixCls}--clearable`,
      isOverLimit && `${prefixCls}--over-limit`,
      className,
    ]
      .filter(Boolean)
      .join(' ');
  }, [variant, status, textAlign, disabled, readOnly, block, isFocused, onClear, isOverLimit, className]);

  // 是否允许调整大小
  const isResizable = !autoSize && resize !== 'none';

  const rootStyle = useMemo<React.CSSProperties>(() => ({
    ...style,
    ...(width !== undefined ? { width: typeof width === 'number' ? `${width}px` : width } : {}),
    // 允许 resize 时不设置固定高度，避免限制拖动
    ...(!isResizable && height !== undefined ? { height: typeof height === 'number' ? `${height}px` : height } : {}),
  }), [style, width, height, isResizable]);

  const textareaStyle = useMemo<React.CSSProperties>(() => ({
    resize: autoSize ? 'none' : resize,
  }), [autoSize, resize]);

  // ─── 原生属性 ───
  const nativeProps = {
    ref: textareaRef,
    value: innerValue,
    placeholder,
    disabled,
    readOnly,
    maxLength,
    rows: autoSize ? undefined : rows,
    style: textareaStyle,
    onFocus: handleFocus,
    onBlur: handleBlur,
    onChange: handleChange,
    onKeyDown: handleKeyDown,
    onCompositionStart: handleCompositionStart,
    onCompositionEnd: handleCompositionEnd,
    ...htmlProps,
    ...restProps,
  };

  // ─── 渲染 ───
  return (
    <div className={rootClassName} style={rootStyle}>
      {/* 前置内容 */}
      {beforeContent && (
        <div className={`${prefixCls}__before`}>{beforeContent}</div>
      )}

      {/* 主体内容 */}
      <div className={`${prefixCls}__body`}>
        <div className={`${prefixCls}__wrapper`}>
          <textarea {...nativeProps} />
          
          {/* 清除按钮 */}
          {onClear && (
            <div
              className={`${prefixCls}__clear ${innerValue ? `${prefixCls}__clear--visible` : ''}`}
              onClick={handleClear}
            >
              <Icon name="error-fill" />
            </div>
          )}
        </div>

        {/* 字数统计 */}
        {showCount && (
          <div className={`${prefixCls}__count ${isOverLimit ? `${prefixCls}__count--error` : ''}`}>
            {countContent}
          </div>
        )}
      </div>

      {/* 后置内容 */}
      {afterContent && (
        <div className={`${prefixCls}__after`}>{afterContent}</div>
      )}
    </div>
  );
};

export default Textarea;
