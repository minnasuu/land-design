import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { InputHighlightProps, HighlightItem } from './props';
import Icon from '../Icon';
import './index.scss';

const prefixCls = 'land-input';

// ==================== 工具函数 ====================

interface HighlightSegment {
  type: 'default' | 'highlight';
  text: string;
  item?: HighlightItem;
}

/**
 * 将字符串拆分为普通文本和高亮文本的片段
 */
const splitHighlightSegments = (
  value: string,
  highlights: (string | HighlightItem)[]
): HighlightSegment[] => {
  if (!value || highlights.length === 0) {
    return value ? [{ type: 'default', text: value }] : [];
  }

  const result: HighlightSegment[] = [];
  let remaining = value;

  while (remaining.length > 0) {
    let earliestMatch: { index: number; text: string; item?: HighlightItem } | null = null;

    // 找到最早出现的高亮文本
    for (const highlight of highlights) {
      const text = typeof highlight === 'string' ? highlight : highlight.text;
      const index = remaining.indexOf(text);
      if (index !== -1 && (earliestMatch === null || index < earliestMatch.index)) {
        earliestMatch = {
          index,
          text,
          item: typeof highlight === 'object' ? highlight : undefined,
        };
      }
    }

    if (earliestMatch === null) {
      // 没有更多匹配，剩余文本作为普通文本
      result.push({ type: 'default', text: remaining });
      break;
    }

    // 添加匹配前的普通文本
    if (earliestMatch.index > 0) {
      result.push({ type: 'default', text: remaining.slice(0, earliestMatch.index) });
    }

    // 添加高亮文本
    result.push({
      type: 'highlight',
      text: earliestMatch.text,
      item: earliestMatch.item,
    });

    // 继续处理剩余文本
    remaining = remaining.slice(earliestMatch.index + earliestMatch.text.length);
  }

  return result;
};

// ==================== 组件实现 ====================

const InputHighlight: React.FC<InputHighlightProps> = ({
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
  beforeContent,
  afterContent,
  onChange,
  onEnter,
  onFocus,
  onBlur,
  onClear,
  className = '',
  style,
  htmlProps,
  highlights = [],
  renderHighlight,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const highlightRef = useRef<HTMLDivElement>(null);
  const [innerValue, setInnerValue] = useState(value ?? '');
  const isComposing = useRef(false);

  useEffect(() => {
    if (!isComposing.current) {
      setInnerValue(value ?? '');
    }
  }, [value]);

  // 计算高亮片段
  const highlightSegments = useMemo(
    () => splitHighlightSegments(innerValue, highlights),
    [innerValue, highlights]
  );

  const rootClassName = useMemo(() => {
    return [
      prefixCls,
      `${prefixCls}--${variant}`,
      `${prefixCls}--${status}`,
      `${prefixCls}--${size}`,
      `${prefixCls}--align-${textAlign}`,
      `${prefixCls}--highlight`,
      disabled && `${prefixCls}--disabled`,
      block && `${prefixCls}--block`,
      onClear && `${prefixCls}--clearable`,
      className,
    ]
      .filter(Boolean)
      .join(' ');
  }, [variant, status, size, textAlign, disabled, block, onClear, className]);

  // 同步滚动位置
  const syncScroll = useCallback(() => {
    if (!highlightRef.current || !inputRef.current) return;
    highlightRef.current.scrollLeft = inputRef.current.scrollLeft;
  }, []);

  const handleBlur = useCallback(
    (e: React.FocusEvent<HTMLInputElement>) => {
      if (highlightRef.current) highlightRef.current.scrollLeft = 0;
      onBlur?.(e);
    },
    [onBlur]
  );

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Enter') {
        onEnter?.(innerValue, e);
      }
    },
    [onEnter, innerValue]
  );

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const newVal = e.target.value;
      setInnerValue(newVal);
      syncScroll();
      onChange?.(newVal, e);
    },
    [syncScroll, onChange]
  );

  const handleCompositionStart = useCallback(() => {
    isComposing.current = true;
  }, []);

  const handleCompositionEnd = useCallback(
    (e: React.CompositionEvent<HTMLInputElement>) => {
      isComposing.current = false;
      const newVal = (e.target as HTMLInputElement).value;
      setInnerValue(newVal);
      onChange?.(newVal);
    },
    [onChange]
  );

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

  // 渲染高亮片段
  const renderHighlightSegment = (segment: HighlightSegment, index: number) => {
    if (segment.type === 'default') {
      return <span key={index}>{segment.text}</span>;
    }

    // 高亮文本
    if (renderHighlight) {
      return <React.Fragment key={index}>{renderHighlight(segment.text, segment.item)}</React.Fragment>;
    }

    const customStyle: React.CSSProperties = {};
    if (segment.item?.color) customStyle.color = segment.item.color;
    if (segment.item?.backgroundColor) customStyle.backgroundColor = segment.item.backgroundColor;

    return (
      <span
        key={index}
        className={`${prefixCls}__highlight-item ${segment.item?.className || ''}`}
        style={customStyle}
      >
        {segment.text}
      </span>
    );
  };

  const renderHighlightOverlay = () => {
    if (!innerValue) {
      return (
        <div className={`${prefixCls}__highlight-placeholder`}>
          {placeholder}
        </div>
      );
    }

    return (
      <div
        ref={highlightRef}
        className={`${prefixCls}__highlight-overlay ${disabled ? `${prefixCls}__highlight-overlay--disabled` : ''}`}
      >
        {highlightSegments.map((segment, index) => renderHighlightSegment(segment, index))}
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

        <div className={`${prefixCls}__body ${prefixCls}__body--highlight`}>
          {renderHighlightOverlay()}
          <input className={`${prefixCls}__input--transparent`} {...nativeInputProps} />
        </div>

        {afterContent && <div className={`${prefixCls}__after`}>{afterContent}</div>}
        {renderClear()}
      </div>
    </div>
  );
};

export default InputHighlight;
