import React, { useRef, useState, useCallback, useImperativeHandle, forwardRef, useMemo } from 'react';
import './index.scss';
import type { MentionTextareaProps, MentionItem, MentionChangeDetail, TriggerParams, MentionTextareaRef } from './props';

const prefixCls = 'land-mention-textarea';

const DEFAULT_MENTION_SPACE = { left: '    ', right: '    ' };

const closeTriggerParams: TriggerParams = {
  left: -1,
  top: -1,
  textareaWidth: 0,
  startIndex: -1,
  trigger: 'close',
  keyword: '',
};

/** 将 trigger prop 归一化为数组 */
const normalizeTriggers = (trigger?: string | string[]): string[] => {
  if (!trigger) return ['@'];
  return Array.isArray(trigger) ? trigger : [trigger];
};

/**
 * 构造匹配触发符号的正则：
 * 匹配行首或非空白字符后的触发符号 + 后续关键词（非空白、非触发符）
 */
const buildTriggerRegex = (triggers: string[]): RegExp => {
  const escaped = triggers.map((t) => t.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
  // 匹配任一触发符号，后面跟非空白非触发符的字符
  const triggerGroup = escaped.join('|');
  const excludeChars = escaped.join('');
  return new RegExp(`(${triggerGroup})([^\\s${excludeChars}]*)$`);
};

const MentionTextarea = forwardRef<MentionTextareaRef, MentionTextareaProps>(
  (
    {
      className = '',
      style,
      value = '',
      mentions = [],
      autoFocus = false,
      onChange,
      onFocus,
      onBlur,
      onKeyDown,
      onTrigger,
      placeholder,
      disabled = false,
      readOnly = false,
      maxMentions = 10,
      trigger,
      mentionSpace = DEFAULT_MENTION_SPACE,
      renderMention,
      children,
    },
    ref,
  ) => {
    const textareaRef = useRef<HTMLTextAreaElement>(null);
    const displayLayerRef = useRef<HTMLDivElement>(null);
    const measureRef = useRef<HTMLDivElement>(null);
    const [isComposing, setIsComposing] = useState(false);
    const [editingMention, setEditingMention] = useState<MentionItem | null>(null);

    const triggers = useMemo(() => normalizeTriggers(trigger), [trigger]);
    const triggerRegex = useMemo(() => buildTriggerRegex(triggers), [triggers]);

    // ref 转发
    useImperativeHandle(ref, () => ({
      getTextarea: () => textareaRef.current,
      focus: () => textareaRef.current?.focus(),
      blur: () => textareaRef.current?.blur(),
    }));

    /** 从 mention 的 displayValue 中推断它使用的触发符号 */
    const getTriggerCharForMention = useCallback(
      (mention: MentionItem): string => {
        // 查看 mention 占据的文本片段，提取触发符
        const mentionText = value.slice(mention.startIndex, mention.endIndex);
        // 跳过左侧空格找到触发符
        const trimmed = mentionText.trimStart();
        for (const t of triggers) {
          if (trimmed.startsWith(t)) return t;
        }
        return triggers[0];
      },
      [value, triggers],
    );

    /** 将显示值转换为真实值 */
    const convertToRealValue = useCallback(
      (displayValue: string, mentionsList: MentionItem[]) => {
        if (mentionsList.length === 0) return displayValue;
        let result = '';
        let lastIndex = 0;
        mentionsList.forEach((mention) => {
          result += displayValue.slice(lastIndex, mention.startIndex);
          const triggerChar = getTriggerCharForMention(mention);
          result += `${triggerChar}${mention.name}`;
          lastIndex = mention.endIndex;
        });
        result += displayValue.slice(lastIndex);
        return result;
      },
      [getTriggerCharForMention],
    );

    /** 触发 onChange */
    const notifyChange = useCallback(
      (newDisplayValue: string, newMentions: MentionItem[], detail?: MentionChangeDetail) => {
        const realValue = convertToRealValue(newDisplayValue, newMentions);
        onChange?.(newDisplayValue, realValue, newMentions, detail);
      },
      [onChange, convertToRealValue],
    );

    /** 计算触发符号的像素位置 (left, top) */
    const calculateTriggerPosition = useCallback(
      (triggerIndex: number): { left: number; top: number } => {
        if (!measureRef.current || !textareaRef.current) return { left: 0, top: 0 };

        const textBefore = value.substring(0, triggerIndex);
        const lines = textBefore.split('\n');
        const lastLine = lines[lines.length - 1];
        const lineIndex = lines.length - 1;

        // 计算 left
        measureRef.current.textContent = lastLine;
        const left = measureRef.current.offsetWidth;

        // 计算 top：行数 * 行高
        const computedStyle = window.getComputedStyle(textareaRef.current);
        const lineHeight = parseFloat(computedStyle.lineHeight) || 22;
        const top = lineIndex * lineHeight;

        return { left, top };
      },
      [value],
    );

    /** 发送关闭触发 */
    const closeTrigger = useCallback(() => {
      setEditingMention(null);
      if (textareaRef.current) {
        onTrigger?.({ ...closeTriggerParams, textareaWidth: textareaRef.current.clientWidth });
      } else {
        onTrigger?.(closeTriggerParams);
      }
    }, [onTrigger]);

    /** 发送打开/输入触发 */
    const fireTrigger = useCallback(
      (triggerIndex: number, keyword: string, type: 'input' | 'click', mention?: MentionItem) => {
        setTimeout(() => {
          const pos = calculateTriggerPosition(triggerIndex);
          if (textareaRef.current) {
            onTrigger?.({
              left: pos.left,
              top: pos.top,
              textareaWidth: textareaRef.current.clientWidth,
              startIndex: triggerIndex,
              trigger: type,
              keyword,
              mention,
            });
          }
        }, 0);
      },
      [calculateTriggerPosition, onTrigger],
    );

    /** 处理 textarea 点击 - 检测是否点击了 mention */
    const handleTextareaClick = useCallback(() => {
      if (!textareaRef.current) return;
      const cursorPos = textareaRef.current.selectionStart;

      const clickedMention = mentions.find((m) => cursorPos > m.startIndex && cursorPos <= m.endIndex);

      if (clickedMention) {
        setEditingMention(clickedMention);
        fireTrigger(clickedMention.startIndex, '', 'click', clickedMention);
      } else if (editingMention) {
        closeTrigger();
      }
    }, [mentions, editingMention, fireTrigger, closeTrigger]);

    /** 在 beforeCursor 文本中匹配触发符 + 关键词 */
    const matchTrigger = useCallback(
      (beforeCursor: string): { triggerChar: string; keyword: string; atPos: number } | null => {
        const match = beforeCursor.match(triggerRegex);
        if (!match) return null;
        const triggerChar = match[1];
        const keyword = match[2];
        const atPos = beforeCursor.length - match[0].length;
        return { triggerChar, keyword, atPos };
      },
      [triggerRegex],
    );

    /** 处理输入变化 */
    const handleInputChange = useCallback(
      (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const newValue = e.target.value;
        const cursorPos = e.target.selectionStart;
        const oldValue = value;

        if (newValue === '') {
          notifyChange('', [], { type: 'input' });
          closeTrigger();
          return;
        }

        if (editingMention) {
          closeTrigger();
        }

        // 更新 mentions 位置
        const lengthDiff = newValue.length - oldValue.length;
        const changeStartPos = lengthDiff < 0 ? cursorPos : cursorPos - lengthDiff;

        const updatedMentions = mentions
          .map((m) => {
            if (m.endIndex <= changeStartPos) return m;
            if (m.startIndex >= changeStartPos + Math.abs(Math.min(0, lengthDiff))) {
              return { ...m, startIndex: m.startIndex + lengthDiff, endIndex: m.endIndex + lengthDiff };
            }
            return null;
          })
          .filter((m): m is MentionItem => m !== null);

        const deletedMentions = mentions.filter((m) => !updatedMentions.find((um) => um.id === m.id));
        const changeDetail: MentionChangeDetail =
          deletedMentions.length > 0 ? { type: 'delete', oldMention: deletedMentions[0] } : { type: 'input' };

        notifyChange(newValue, updatedMentions, changeDetail);

        if (isComposing) return;

        // 检查触发符号
        const beforeCursor = newValue.slice(0, cursorPos);
        const triggerMatch = matchTrigger(beforeCursor);

        if (triggerMatch) {
          if (maxMentions !== undefined && updatedMentions.length >= maxMentions) return;
          fireTrigger(triggerMatch.atPos, triggerMatch.keyword, 'input');
        } else if (!editingMention) {
          onTrigger?.(closeTriggerParams);
        }
      },
      [notifyChange, value, mentions, isComposing, maxMentions, matchTrigger, editingMention, onTrigger, closeTrigger, fireTrigger],
    );

    /** 处理键盘事件 */
    const handleKeyDown = useCallback(
      (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.key === 'Backspace' || e.key === 'Delete') {
          const cursorPos = textareaRef.current?.selectionStart || 0;
          const selectionEnd = textareaRef.current?.selectionEnd || 0;

          if (cursorPos === selectionEnd) {
            let mentionToDelete: MentionItem | null = null;
            if (e.key === 'Backspace') {
              mentionToDelete = mentions.find((m) => cursorPos > m.startIndex && cursorPos <= m.endIndex) || null;
            } else {
              mentionToDelete = mentions.find((m) => cursorPos >= m.startIndex && cursorPos < m.endIndex) || null;
            }

            if (mentionToDelete) {
              e.preventDefault();

              const beforeMention = value.slice(0, mentionToDelete.startIndex);
              const afterMention = value.slice(mentionToDelete.endIndex);
              const newValue = beforeMention + afterMention;
              const newCursorPos = mentionToDelete.startIndex;
              const offset = mentionToDelete.endIndex - mentionToDelete.startIndex;

              const newMentions = mentions
                .filter((m) => m.startIndex !== mentionToDelete!.startIndex)
                .map((m) =>
                  m.startIndex > mentionToDelete!.endIndex
                    ? { ...m, startIndex: m.startIndex - offset, endIndex: m.endIndex - offset }
                    : m,
                );

              notifyChange(newValue, newMentions, {
                type: 'delete',
                oldMention: mentionToDelete,
                cursorPos: newCursorPos,
              });

              setTimeout(() => {
                textareaRef.current?.setSelectionRange(newCursorPos, newCursorPos);
              }, 0);
            }
          }
        }

        onKeyDown?.(e);
      },
      [mentions, value, notifyChange, onKeyDown],
    );

    /** 渲染显示层内容 */
    const renderContent = useCallback(() => {
      if (!value) return null;
      const parts: React.ReactNode[] = [];
      let lastIndex = 0;

      mentions.forEach((mention, index) => {
        if (mention.startIndex > lastIndex) {
          parts.push(<span key={`text-${index}`}>{value.slice(lastIndex, mention.startIndex)}</span>);
        }

        const needLeftSpace = mention.startIndex > 0;
        const triggerChar = getTriggerCharForMention(mention);

        parts.push(
          <span key={`mention-${mention.id}`}>
            {needLeftSpace && <span>{mentionSpace.left}</span>}
            {renderMention ? (
              renderMention(mention, triggerChar)
            ) : (
              <span className={`${prefixCls}__mention`}>
                {triggerChar}
                {mention.displayName}
              </span>
            )}
            <span>{mentionSpace.right}</span>
          </span>,
        );
        lastIndex = mention.endIndex;
      });

      if (lastIndex < value.length) {
        parts.push(<span key="text-end">{value.slice(lastIndex)}</span>);
      }
      return parts;
    }, [value, mentions, mentionSpace, renderMention, getTriggerCharForMention]);

    const handleCompositionStart = useCallback(() => setIsComposing(true), []);

    const handleCompositionEnd = useCallback(
      (e: React.CompositionEvent<HTMLTextAreaElement>) => {
        setIsComposing(false);
        const target = e.target as HTMLTextAreaElement;
        const cursorPos = target.selectionStart;
        const newValue = target.value;
        const beforeCursor = newValue.slice(0, cursorPos);
        const triggerMatch = matchTrigger(beforeCursor);

        if (triggerMatch) {
          if (maxMentions !== undefined && mentions.length >= maxMentions) return;
          fireTrigger(triggerMatch.atPos, triggerMatch.keyword, 'input');
        }
      },
      [maxMentions, mentions, matchTrigger, fireTrigger],
    );

    /** 滚动同步 */
    const handleScroll = useCallback(() => {
      if (displayLayerRef.current && textareaRef.current) {
        displayLayerRef.current.scrollTop = textareaRef.current.scrollTop;
        displayLayerRef.current.scrollLeft = textareaRef.current.scrollLeft;
      }
    }, []);

    return (
      <div className={`${prefixCls} ${className}`} style={style}>
        <div className={`${prefixCls}__container`}>
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
            readOnly={readOnly}
            className={`${prefixCls}__input`}
            placeholder={placeholder}
          />
          <div ref={displayLayerRef} className={`${prefixCls}__display`}>
            {renderContent()}
          </div>
          <div ref={measureRef} className={`${prefixCls}__measure`} />
        </div>
        {children}
      </div>
    );
  },
);

MentionTextarea.displayName = 'MentionTextarea';

export default MentionTextarea;
