import { useCallback } from 'react';
import type { MentionItem } from './props';

/** 可被 mention 的数据源项 */
export interface MentionDataItem {
  id: string;
  name: string;
  [key: string]: unknown;
}

const DEFAULT_LEFT_SPACE = '    ';
const DEFAULT_RIGHT_SPACE = '    ';

interface UseMentionInsertParams {
  /** 当前文本值 */
  textValue: string;
  /** 当前 mentions 列表 */
  mentions: MentionItem[];
  /** 正在编辑的 mention 索引，-1 表示新增模式 */
  editingMentionIndex: number;
  /** 触发符号，默认 '@' */
  triggerChar?: string;
  /** mention 两侧的空格 */
  mentionSpace?: { left: string; right: string };
  /** 截断显示名称的最大长度，默认 20 */
  maxDisplayLength?: number;
  /** mention 的类型标识 */
  type?: string;
}

interface InsertResult {
  newTextValue: string;
  newMentions: MentionItem[];
}

/**
 * 通用 mention 插入 Hook
 */
export const useMentionInsert = ({
  textValue,
  mentions,
  editingMentionIndex,
  triggerChar = '@',
  mentionSpace,
  maxDisplayLength = 20,
  type = 'default',
}: UseMentionInsertParams) => {
  const leftSpace = mentionSpace?.left ?? DEFAULT_LEFT_SPACE;
  const rightSpace = mentionSpace?.right ?? DEFAULT_RIGHT_SPACE;

  const truncateName = useCallback(
    (name: string) => {
      return name.length <= maxDisplayLength ? name : name.slice(0, maxDisplayLength) + '...';
    },
    [maxDisplayLength],
  );

  /**
   * 插入一个 mention
   * @param item - 要插入的数据项
   * @returns 新的文本值和 mentions 列表，失败返回 null
   */
  const insertMention = useCallback(
    (item: MentionDataItem): InsertResult | null => {
      const displayName = truncateName(item.name);

      let newTextValue: string;
      let newMentions: MentionItem[];

      if (editingMentionIndex >= 0 && mentions[editingMentionIndex]) {
        // 替换模式
        const editingMention = mentions[editingMentionIndex];
        const before = textValue.slice(0, editingMention.startIndex);
        const after = textValue.slice(editingMention.endIndex);
        const needLeft = editingMention.startIndex > 0;
        const mentionStr = (needLeft ? leftSpace : '') + `${triggerChar}${displayName}` + rightSpace;

        newTextValue = before + mentionStr + after;

        const newMention: MentionItem = {
          id: item.id,
          name: item.name,
          displayName,
          type,
          startIndex: editingMention.startIndex,
          endIndex: editingMention.startIndex + mentionStr.length,
        };

        const lengthDiff = mentionStr.length - (editingMention.endIndex - editingMention.startIndex);
        newMentions = mentions
          .filter((_, idx) => idx !== editingMentionIndex)
          .map((m) =>
            m.startIndex > editingMention.endIndex
              ? { ...m, startIndex: m.startIndex + lengthDiff, endIndex: m.endIndex + lengthDiff }
              : m,
          )
          .concat(newMention)
          .sort((a, b) => a.startIndex - b.startIndex);
      } else {
        // 新增模式：查找最后一个触发符号
        const triggerPos = textValue.lastIndexOf(triggerChar);
        if (triggerPos < 0) return null;

        const before = textValue.slice(0, triggerPos);
        const after = textValue.slice(triggerPos + triggerChar.length);
        // 清除触发符后面的搜索关键词（非空白字符）
        const keywordMatch = after.match(/^[^\s]*/);
        const keywordLen = keywordMatch ? keywordMatch[0].length : 0;
        const afterClean = after.slice(keywordLen);

        const needLeft = triggerPos > 0;
        const mentionStr = (needLeft ? leftSpace : '') + `${triggerChar}${displayName}` + rightSpace;

        newTextValue = before + mentionStr + afterClean;

        const newMention: MentionItem = {
          id: item.id,
          name: item.name,
          displayName,
          type,
          startIndex: triggerPos,
          endIndex: triggerPos + mentionStr.length,
        };

        const offset = mentionStr.length - triggerChar.length - keywordLen;
        newMentions = mentions
          .map((m) =>
            m.startIndex > triggerPos
              ? { ...m, startIndex: m.startIndex + offset, endIndex: m.endIndex + offset }
              : m,
          )
          .concat(newMention)
          .sort((a, b) => a.startIndex - b.startIndex);
      }

      return { newTextValue, newMentions };
    },
    [textValue, mentions, editingMentionIndex, truncateName, triggerChar, leftSpace, rightSpace, type],
  );

  return { insertMention };
};
