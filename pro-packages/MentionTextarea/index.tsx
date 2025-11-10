import React, { useRef, useState, useCallback } from 'react';
import './index.scss';
import { MentionTextareaProps, MentionItem, MentionChangeDetail } from './props';

const leftMentionSpaceStr = '    ';
const rightMentionSpaceStr = '    ';

const MentionTextarea: React.FC<MentionTextareaProps> = ({
  className = "",
  style,
  value = '',
  mentions = [],
  autoFocus = false,
  onChange,
  onFocus,
  onBlur,
  onAtTrigger,
  placeholder,
  disabled = false,
  maxLength,
  maxMentions = 10,
  children,
}) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const displayLayerRef = useRef<HTMLDivElement>(null);
  const measureRef = useRef<HTMLDivElement>(null);
  const [isComposing, setIsComposing] = useState(false);
  const [editingMention, setEditingMention] = useState<MentionItem | null>(null);

  // 将显示值转换为真实值（去掉空格，使用完整商品名）
  const convertToRealValue = useCallback((displayValue: string, mentionsList: MentionItem[]) => {
    if (mentionsList.length === 0) {
      return displayValue;
    }
    let result = '';
    let lastIndex = 0;

    mentionsList.forEach(mention => {
      // 添加mention前的文本
      result += displayValue.slice(lastIndex, mention.startIndex);
      // 添加完整的商品名（不带空格）
      result += `@${mention.name}`;
      lastIndex = mention.endIndex;
    });

    // 添加最后剩余的文本
    result += displayValue.slice(lastIndex);
    return result;
  }, []);

  // 触发onChange通知外部
  const notifyChange = useCallback((newDisplayValue: string, newMentions: MentionItem[], detail?: MentionChangeDetail) => {
    const realValue = convertToRealValue(newDisplayValue, newMentions);
    onChange?.(newDisplayValue, realValue, newMentions, detail);
  }, [onChange, convertToRealValue]);

  // 计算@符号的像素位置
  const calculateAtPixelPosition = useCallback((atIndex: number) => {
    if (!measureRef.current) return 0;

    const textBeforeAt = value.substring(0, atIndex);
    const lines = textBeforeAt.split('\n');
    const lastLine = lines[lines.length - 1];

    measureRef.current.textContent = lastLine;
    const width = measureRef.current.offsetWidth;
    return width;
  }, [value]);

  // 处理textarea点击事件 - 检测是否点击了mention
  const handleTextareaClick = useCallback(async () => {
    if (!textareaRef.current) return;

    const cursorPos = textareaRef.current.selectionStart;

    // 检查点击位置是否在某个mention内
    const clickedMention = mentions.find(m =>
      cursorPos > m.startIndex && cursorPos <= m.endIndex
    );

    if (clickedMention) {
      // 点击了mention，进入编辑模式
      setEditingMention(clickedMention);

      // 计算mention的像素位置
      setTimeout(() => {
        const pixelPos = calculateAtPixelPosition(clickedMention.startIndex);

        if (textareaRef.current) {
          const textareaWidth = textareaRef.current.clientWidth;
          onAtTrigger?.({
            left: pixelPos,
            top: 0,
            textareaWidth,
            startIndex: clickedMention.startIndex,
            trigger: 'click',
            mention: clickedMention
          });
        }
      }, 0);
    } else {
      // 没有点击mention，清除编辑状态
      if (editingMention) {
        setEditingMention(null);

        if (textareaRef.current) {
          onAtTrigger?.({
            left: -1,
            top: -1,
            textareaWidth: textareaRef.current.clientWidth,
            startIndex: -1,
            trigger: 'close'
          });
        }
      }
    }
  }, [mentions, calculateAtPixelPosition, editingMention, onAtTrigger]);

  // 处理输入变化
  const handleInputChange = useCallback(async (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newValue = e.target.value;
    const cursorPos = e.target.selectionStart;
    const oldValue = value;

    // 如果新值为空，清空所有mentions和相关状态
    if (newValue === '') {
      notifyChange('', [], { type: 'input' });
      setEditingMention(null);

      onAtTrigger?.({
        left: -1,
        top: -1,
        textareaWidth: 0,
        startIndex: -1,
        trigger: 'close'
      });
      return;
    }

    // 如果在编辑模式下输入，清除编辑状态
    if (editingMention) {
      setEditingMention(null);

      if (textareaRef.current) {
        onAtTrigger?.({
          left: -1,
          top: -1,
          textareaWidth: textareaRef.current.clientWidth,
          startIndex: -1,
          trigger: 'close'
        });
      }
    }

    // 更新mentions位置
    const lengthDiff = newValue.length - oldValue.length;
    const changeStartPos = lengthDiff < 0 ? cursorPos : cursorPos - lengthDiff;

    const updatedMentions = mentions
      .map(m => {
        if (m.endIndex <= changeStartPos) {
          return m;
        }
        if (m.startIndex >= changeStartPos + Math.abs(Math.min(0, lengthDiff))) {
          return {
            ...m,
            startIndex: m.startIndex + lengthDiff,
            endIndex: m.endIndex + lengthDiff
          };
        }
        return null;
      })
      .filter((m): m is MentionItem => m !== null);

    // 检测是否有mention被删除
    const deletedMentions = mentions.filter(m => !updatedMentions.find(um => um.id === m.id));
    const changeDetail: MentionChangeDetail = deletedMentions.length > 0
      ? { type: 'delete', oldMention: deletedMentions[0] }
      : { type: 'input' };

    notifyChange(newValue, updatedMentions, changeDetail);

    // 如果正在使用输入法，不触发搜索
    if (isComposing) {
      return;
    }

    // 检查是否输入了@符号
    const beforeCursor = newValue.slice(0, cursorPos);
    const atMatch = beforeCursor.match(/@([^@\s]*)$/);

    if (atMatch) {
      // 检查是否达到最大 mention 数量
      if (maxMentions !== undefined && updatedMentions.length >= maxMentions) {
        return;
      }

      const keyword = atMatch[1];
      const atPos = cursorPos - keyword.length - 1;

      // 计算@符号的像素位置
      setTimeout(() => {
        const pixelPos = calculateAtPixelPosition(atPos);

        if (textareaRef.current) {
          const textareaWidth = textareaRef.current.clientWidth;
          onAtTrigger?.({
            left: pixelPos,
            top: 0,
            textareaWidth,
            startIndex: atPos,
            trigger: 'input'
          });
        }
      }, 0);
    } else {
      // 只有在非编辑模式下才清除弹窗
      if (!editingMention) {
        onAtTrigger?.({
          left: -1,
          top: -1,
          textareaWidth: 0,
          startIndex: -1,
          trigger: 'close'
        });
      }
    }
  }, [notifyChange, value, mentions, isComposing, maxMentions, calculateAtPixelPosition, editingMention, onAtTrigger]);

  // 处理键盘事件
  const handleKeyDown = useCallback((e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Backspace' || e.key === 'Delete') {
      const cursorPos = textareaRef.current?.selectionStart || 0;
      const selectionEnd = textareaRef.current?.selectionEnd || 0;

      if (cursorPos !== selectionEnd) {
        return;
      }

      let mentionToDelete: MentionItem | null = null;

      if (e.key === 'Backspace') {
        mentionToDelete = mentions.find(m =>
          cursorPos > m.startIndex && cursorPos <= m.endIndex
        ) || null;
      } else if (e.key === 'Delete') {
        mentionToDelete = mentions.find(m =>
          cursorPos >= m.startIndex && cursorPos < m.endIndex
        ) || null;
      }

      if (mentionToDelete) {
        e.preventDefault();

        const beforeMention = value.slice(0, mentionToDelete.startIndex);
        const afterMention = value.slice(mentionToDelete.endIndex);
        const newValue = beforeMention + afterMention;
        const newCursorPos = mentionToDelete.startIndex;

        const offset = mentionToDelete.endIndex - mentionToDelete.startIndex;
        const newMentions = mentions
          .filter(m => m.startIndex !== mentionToDelete.startIndex)
          .map(m => {
            if (m.startIndex > mentionToDelete.endIndex) {
              return {
                ...m,
                startIndex: m.startIndex - offset,
                endIndex: m.endIndex - offset
              };
            }
            return m;
          });

        notifyChange(newValue, newMentions, {
          type: 'delete',
          oldMention: mentionToDelete,
          cursorPos: newCursorPos
        });

        setTimeout(() => {
          if (textareaRef.current) {
            textareaRef.current.setSelectionRange(newCursorPos, newCursorPos);
          }
        }, 0);
      }
    }
  }, [mentions, value, notifyChange]);

  // 渲染富文本内容
  const renderContent = useCallback(() => {
    if (!value) return null;

    const parts = [];
    let lastIndex = 0;

    mentions.forEach((mention, index) => {
      if (mention.startIndex > lastIndex) {
        const textBeforeMention = value.slice(lastIndex, mention.startIndex);
        parts.push(
          <span key={`text-${index}`}>
            {textBeforeMention}
          </span>
        );
      }

      const needLeftSpace = mention.startIndex > 0;
      const leftSpaceInMention = needLeftSpace ? leftMentionSpaceStr : '';
      const rightSpaceInMention = rightMentionSpaceStr;

      parts.push(
        <span key={`mention-${mention.id}`}>
          <span style={{ display: 'inline' }}>{leftSpaceInMention}</span>
          <span
            className="land-mention-item"
            style={{
              userSelect: 'none',
              fontWeight: 600,
              display: 'inline',
              cursor: 'pointer',
              transition: 'opacity 0.2s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.opacity = '0.7';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.opacity = '1';
            }}
          >
            @{mention.displayName}
          </span>
          <span style={{ display: 'inline' }}>{rightSpaceInMention}</span>
        </span>
      );

      lastIndex = mention.endIndex;
    });

    if (lastIndex < value.length) {
      const textAfterMention = value.slice(lastIndex);
      parts.push(
        <span key="text-end">
          {textAfterMention}
        </span>
      );
    }

    return parts;
  }, [value, mentions]);

  // 处理输入法开始
  const handleCompositionStart = useCallback(() => {
    setIsComposing(true);
  }, []);

  // 处理输入法结束
  const handleCompositionEnd = useCallback(async (e: React.CompositionEvent<HTMLTextAreaElement>) => {
    setIsComposing(false);

    const target = e.target as HTMLTextAreaElement;
    const cursorPos = target.selectionStart;
    const newValue = target.value;

    const beforeCursor = newValue.slice(0, cursorPos);
    const atMatch = beforeCursor.match(/@([^@\s]*)$/);

    if (atMatch) {
      if (maxMentions !== undefined && mentions.length >= maxMentions) {
        return;
      }

      const keyword = atMatch[1];
      const atPos = cursorPos - keyword.length - 1;

      setTimeout(() => {
        const pixelPos = calculateAtPixelPosition(atPos);

        if (textareaRef.current) {
          const textareaWidth = textareaRef.current.clientWidth;
          onAtTrigger?.({
            left: pixelPos,
            top: 0,
            textareaWidth,
            startIndex: atPos,
            trigger: 'input'
          });
        }
      }, 0);
    }
  }, [maxMentions, mentions, calculateAtPixelPosition, onAtTrigger]);

  // 处理滚动同步
  const handleScroll = useCallback(() => {
    if (displayLayerRef.current && textareaRef.current) {
      displayLayerRef.current.scrollTop = textareaRef.current.scrollTop;
      displayLayerRef.current.scrollLeft = textareaRef.current.scrollLeft;
    }
  }, []);

  return (
    <div className={`land-mention-textarea ${className}`} style={style}>
      <div className="land-mention-textarea__container">
        {/* textarea */}
        <textarea
          ref={textareaRef}
          value={value}
          autoFocus={autoFocus}
          onChange={handleInputChange}
          onClick={handleTextareaClick}
          onKeyDown={handleKeyDown}
          onCompositionStart={handleCompositionStart}
          onCompositionEnd={handleCompositionEnd}
          onScroll={handleScroll}
          onFocus={onFocus}
          onBlur={onBlur}
          disabled={disabled}
          maxLength={maxLength}
          className="land-mention-textarea__input"
          placeholder={placeholder}
        />

        {/* 显示层 - 富文本渲染 */}
        <div
          ref={displayLayerRef}
          className="land-mention-textarea__display"
        >
          {renderContent()}
        </div>

        {/* 测量元素 - 用于计算@符号的像素位置 */}
        <div
          ref={measureRef}
          className="land-mention-textarea__measure"
        />
      </div>
      {children}
    </div>
  );
};

export default MentionTextarea;
