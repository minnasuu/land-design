import React, { useEffect, useState } from "react";
import Icon from "../Icon";
import Input from "../Input";
import './index.scss';
import { TagInputProps } from "./props";
import Tag from "../Tag";



const TagInput: React.FC<TagInputProps> = ({
  tagData = [],
  placeholder = '按下回车以输入标签',
  width = '100%',
  maxLength = 5,
  highlightStr = [],
  highlightStyle = { background: 'var(--color-primary-2)', color: 'var(--color-primary-6)' },
  showClear = true,
  onChange,
  onEnter,
  onFocus,
  onBlur,
  onClear,
  onDelete,
  tagStyle,
  tagClassName = '',
  className = '',
  style,
}) => {
  const [newValue, setNewValue] = useState<string>('');
  const [tags, setTags] = useState<string[]>(tagData);
  const addTag = (val: string) => {
    if (tags.length === maxLength || !val) return;
    setTags([...tags, val]);
    setNewValue('');
  };
  /** 监听键盘删除事件 */
  useEffect(() => {
    const handleKeyDelete = (e: any) => {
      if (e.code === 'Backspace' && tags?.length > 0 && !newValue) {
        setTags(tags => tags.slice(0, -1));
        console.log(e.code);
      }
    }
    document.body.addEventListener("keydown", handleKeyDelete);
    return () => document.body.removeEventListener("keydown", handleKeyDelete);
  }, [newValue, tags]);


  return (
    <div
      className={`land-tag-input ${showClear ? 'widthClear' : ''} ${className}`}
      style={{ width: typeof width === "number" ? `${width}px` : width, paddingLeft: tags?.length > 0 ? '4px' : '12px', ...style }}
    >
      <div className="land-tag-input-container">
        {tags?.map((item, index) => <Tag key={index} className={`land-tag-input-tag ${tagClassName}`} canDelete onDelete={() => { setTags(tags.filter(itm => itm !== item)); onDelete?.(item) }} style={tagStyle}>{item}</Tag>)}
        <Input
          type="transparent"
          value={newValue}
          placeholder={placeholder}
          onEnter={(val, e) => { addTag?.(val); onEnter?.(tags, e); }}
          onBlur={e => { addTag?.(newValue); onBlur?.(tags, e) }}
          onChange={(val, e) => { setNewValue(val); onChange?.(tags, e) }}
          className="land-tag-input-input"
          onFocus={onFocus}
          highlightStr={highlightStr}
          highlightStyle={highlightStyle}
        />
      </div>
      {showClear && tags?.length > 0 && <div className='land-input-clear-icon' onClick={() => { setTags([]); onClear?.() }}><Icon name="error-fill" /></div>}
    </div>
  );
};


export default TagInput;
