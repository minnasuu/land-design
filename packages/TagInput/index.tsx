// ============================================================================
// TagInput 组件
// @description 标签输入框组件，支持动态添加和删除标签
// @author Land Design System
// ============================================================================

import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import Icon from '../Icon';
import Tag from '../Tag';
import { TagInputProps, TagItem } from './props';
import './index.scss';

const prefixCls = 'land-tag-input';

// ─────────────────────────────────────────────────────────────────────────────
// SECTION: 工具函数
// ─────────────────────────────────────────────────────────────────────────────

/** 获取标签文本 */
const getTagLabel = (tag: string | TagItem): string => {
  return typeof tag === 'string' ? tag : tag.label;
};

/** 获取标签 key */
const getTagKey = (tag: string | TagItem, index: number): string => {
  if (typeof tag === 'string') return `${tag}-${index}`;
  return tag.key ?? `${tag.label}-${index}`;
};

/** 检查标签是否可删除 */
const isTagClosable = (tag: string | TagItem): boolean => {
  if (typeof tag === 'string') return true;
  return tag.closable !== false;
};

// ─────────────────────────────────────────────────────────────────────────────
// SECTION: 组件实现
// ─────────────────────────────────────────────────────────────────────────────

const TagInput: React.FC<TagInputProps> = ({
  // 核心属性
  value,
  tagData,
  defaultValue,
  placeholder = '按下回车以输入标签',

  // 限制属性
  maxCount,
  maxLength = 10,
  maxTagLength,
  allowDuplicate = false,

  // 外观属性
  variant = 'fill',
  size = 'default',
  disabled = false,
  readOnly = false,
  showClear = true,

  // 样式属性
  className = '',
  style,
  width = '100%',
  tagClassName = '',
  tagStyle,

  // 自定义渲染
  renderTag,
  prefix,
  suffix,

  // 事件属性
  onChange,
  onAdd,
  onRemove,
  onClear,
  onEnter,
  onInputChange,
  onFocus,
  onBlur,

  // 废弃属性兼容
  onDelete,
}) => {
  // ─── 状态 ───
  const [inputValue, setInputValue] = useState('');
  const [internalTags, setInternalTags] = useState<(string | TagItem)[]>(
    value ?? tagData ?? defaultValue ?? []
  );
  const [isFocused, setIsFocused] = useState(false);

  // ─── Refs ───
  const containerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // ─── 计算属性 ───
  const isControlled = value !== undefined;
  const tags = isControlled ? value : internalTags;
  const effectiveMaxCount = maxCount ?? maxLength;
  const isMaxReached = tags.length >= effectiveMaxCount;
  const canShowClear = showClear && tags.length > 0 && !disabled && !readOnly;

  // ─── 同步受控值 ───
  useEffect(() => {
    if (isControlled) {
      setInternalTags(value);
    }
  }, [isControlled, value]);

  // ─── 更新标签 ───
  const updateTags = useCallback(
    (newTags: (string | TagItem)[], trigger: 'add' | 'remove' | 'clear') => {
      if (!isControlled) {
        setInternalTags(newTags);
      }
      onChange?.(newTags, trigger);
    },
    [isControlled, onChange]
  );

  // ─── 添加标签 ───
  const handleAddTag = useCallback(
    (text: string) => {
      const trimmedText = text.trim();

      // 验证
      if (!trimmedText) return;
      if (isMaxReached) return;
      if (maxTagLength && trimmedText.length > maxTagLength) return;

      // 检查重复
      if (!allowDuplicate) {
        const isDuplicate = tags.some((tag) => getTagLabel(tag) === trimmedText);
        if (isDuplicate) return;
      }

      const newTags = [...tags, trimmedText];
      updateTags(newTags, 'add');
      onAdd?.(trimmedText);
      setInputValue('');
    },
    [tags, isMaxReached, maxTagLength, allowDuplicate, updateTags, onAdd]
  );

  // ─── 删除标签 ───
  const handleRemoveTag = useCallback(
    (index: number) => {
      if (disabled || readOnly) return;

      const removedTag = tags[index];
      const newTags = tags.filter((_, i) => i !== index);
      updateTags(newTags, 'remove');
      onRemove?.(removedTag, index);
      onDelete?.(getTagLabel(removedTag)); // 兼容旧 API
    },
    [tags, disabled, readOnly, updateTags, onRemove, onDelete]
  );

  // ─── 清空标签 ───
  const handleClear = useCallback(() => {
    if (disabled || readOnly) return;

    updateTags([], 'clear');
    onClear?.();
    inputRef.current?.focus();
  }, [disabled, readOnly, updateTags, onClear]);

  // ─── 键盘事件 ───
  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      // 回车添加标签
      if (e.key === 'Enter') {
        e.preventDefault();
        handleAddTag(inputValue);
        onEnter?.(inputValue, e);
        return;
      }

      // 删除键删除最后一个标签
      if (e.key === 'Backspace' && !inputValue && tags.length > 0) {
        handleRemoveTag(tags.length - 1);
      }
    },
    [inputValue, tags.length, handleAddTag, handleRemoveTag, onEnter]
  );

  // ─── 输入变化 ───
  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const newValue = e.target.value;
      setInputValue(newValue);
      onInputChange?.(newValue, e);
    },
    [onInputChange]
  );

  // ─── 聚焦/失焦 ───
  const handleFocus = useCallback(
    (e: React.FocusEvent<HTMLInputElement>) => {
      setIsFocused(true);
      onFocus?.(e);
    },
    [onFocus]
  );

  const handleBlur = useCallback(
    (e: React.FocusEvent<HTMLInputElement>) => {
      setIsFocused(false);
      // 失焦时添加标签
      if (inputValue.trim()) {
        handleAddTag(inputValue);
      }
      onBlur?.(e);
    },
    [inputValue, handleAddTag, onBlur]
  );

  // ─── 点击容器聚焦输入框 ───
  const handleContainerClick = useCallback(() => {
    if (!disabled && !readOnly) {
      inputRef.current?.focus();
    }
  }, [disabled, readOnly]);

  // ─── 根容器类名 ───
  const rootClassName = useMemo(() => {
    return [
      prefixCls,
      `${prefixCls}--${variant}`,
      `${prefixCls}--${size}`,
      isFocused && `${prefixCls}--focused`,
      disabled && `${prefixCls}--disabled`,
      readOnly && `${prefixCls}--readonly`,
      className,
    ]
      .filter(Boolean)
      .join(' ');
  }, [variant, size, isFocused, disabled, readOnly, className]);

  // ─── 根容器样式 ───
  const rootStyle = useMemo<React.CSSProperties>(() => {
    return {
      width: typeof width === 'number' ? `${width}px` : width,
      ...style,
    };
  }, [width, style]);

  // ─── 渲染单个标签 ───
  const renderSingleTag = useCallback(
    (tag: string | TagItem, index: number) => {
      const label = getTagLabel(tag);
      const key = getTagKey(tag, index);
      const closable = isTagClosable(tag) && !disabled && !readOnly;
      const itemStyle = typeof tag === 'object' ? { ...tagStyle, ...tag.style } : tagStyle;
      const itemClassName = typeof tag === 'object' 
        ? `${prefixCls}__tag ${tagClassName} ${tag.className ?? ''}` 
        : `${prefixCls}__tag ${tagClassName}`;

      // 自定义渲染
      if (renderTag) {
        return (
          <React.Fragment key={key}>
            {renderTag(tag, index, () => handleRemoveTag(index))}
          </React.Fragment>
        );
      }

      return (
        <Tag
          key={key}
          className={itemClassName}
          style={itemStyle}
          canDelete={closable}
          onDelete={() => handleRemoveTag(index)}
        >
          {label}
        </Tag>
      );
    },
    [tagStyle, tagClassName, disabled, readOnly, renderTag, handleRemoveTag]
  );

  // ─── 渲染 ───
  return (
    <div
      ref={containerRef}
      className={rootClassName}
      style={rootStyle}
      onClick={handleContainerClick}
    >
      {/* 前置内容 */}
      {prefix && <div className={`${prefixCls}__prefix`}>{prefix}</div>}

      {/* 内容区域 */}
      <div className={`${prefixCls}__content`}>
        {/* 标签列表 */}
        {tags.map(renderSingleTag)}

        {/* 输入框 */}
        {!readOnly && (
          <input
            ref={inputRef}
            type="text"
            className={`${prefixCls}__input`}
            value={inputValue}
            placeholder={tags.length === 0 ? placeholder : ''}
            disabled={disabled}
            readOnly={readOnly}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown}
            onFocus={handleFocus}
            onBlur={handleBlur}
          />
        )}
      </div>

      {/* 清空按钮 */}
      {canShowClear && (
        <div
          className={`${prefixCls}__clear`}
          onClick={(e) => {
            e.stopPropagation();
            handleClear();
          }}
        >
          <Icon name="error-fill" />
        </div>
      )}

      {/* 后置内容 */}
      {suffix && <div className={`${prefixCls}__suffix`}>{suffix}</div>}
    </div>
  );
};

export default TagInput;
