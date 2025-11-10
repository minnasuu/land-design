import { useCallback } from 'react';
import type { MentionItem } from './props';

// 定义商品类型
export interface Product {
  id: string;
  name: string;
}

const leftMentionSpaceStr = '    ';
const rightMentionSpaceStr = '    ';

interface UseMentionInsertParams {
  /** 当前文本值 */
  textValue: string;
  /** 当前mentions列表 */
  mentions: MentionItem[];
  /** 正在编辑的mention索引，-1表示新增模式 */
  editingMentionIndex: number;
}

interface InsertResult {
  newTextValue: string;
  newMentions: MentionItem[];
}

/**
 * 用于在文本中插入或替换mention的Hook
 * @returns insertProduct - 插入商品的函数
 */
export const useMentionInsert = ({ textValue, mentions, editingMentionIndex }: UseMentionInsertParams) => {
  // 截断商品名称
  const truncateProductName = useCallback((name: string, maxLen: number = 20) => {
    return name.length <= maxLen ? name : name.slice(0, maxLen) + '...';
  }, []);

  /**
   * 插入商品mention
   * @param product - 要插入的商品
   * @returns 新的文本值和mentions列表，如果插入失败则返回null
   */
  const insertProduct = useCallback((product: Product): InsertResult | null => {
    const displayName = truncateProductName(product.name);
    
    let newTextValue: string;
    let newMentions: MentionItem[];
    
    if (editingMentionIndex >= 0 && mentions[editingMentionIndex]) {
      // 替换模式：点击了现有的mention
      const editingMention = mentions[editingMentionIndex];
      const beforeMention = textValue.slice(0, editingMention.startIndex);
      const afterMention = textValue.slice(editingMention.endIndex);
      const needLeftSpace = editingMention.startIndex > 0;
      const leftSpace = needLeftSpace ? leftMentionSpaceStr : '';
      const rightSpace = rightMentionSpaceStr;
      const productMention = leftSpace + `@${displayName}` + rightSpace;
      
      newTextValue = beforeMention + productMention + afterMention;
      
      const newMention: MentionItem = {
        id: product.id,
        name: product.name,
        displayName: displayName,
        type: 'product',
        startIndex: editingMention.startIndex,
        endIndex: editingMention.startIndex + productMention.length
      };
      
      const lengthDiff = productMention.length - (editingMention.endIndex - editingMention.startIndex);
      newMentions = mentions
        .filter((_, idx) => idx !== editingMentionIndex)
        .map(m => {
          if (m.startIndex > editingMention.endIndex) {
            return {
              ...m,
              startIndex: m.startIndex + lengthDiff,
              endIndex: m.endIndex + lengthDiff
            };
          }
          return m;
        })
        .concat(newMention)
        .sort((a, b) => a.startIndex - b.startIndex);
    } else {
      // 新增模式：输入@符号
      const atPos = textValue.lastIndexOf('@');
      
      // 如果没有找到@符号，无法插入
      if (atPos < 0) {
        return null;
      }
      
      const insertPos = atPos;
      const beforeAt = textValue.slice(0, insertPos);
      const afterAt = textValue.slice(insertPos + 1);
      
      const needLeftSpace = insertPos > 0;
      const leftSpace = needLeftSpace ? leftMentionSpaceStr : '';
      const rightSpace = rightMentionSpaceStr;
      const productMention = leftSpace + `@${displayName}` + rightSpace;
      
      newTextValue = beforeAt + productMention + afterAt;
      
      const newMention: MentionItem = {
        id: product.id,
        name: product.name,
        displayName: displayName,
        type: 'product',
        startIndex: insertPos,
        endIndex: insertPos + productMention.length
      };
      
      const offset = productMention.length - 1; // -1 因为替换掉了@符号
      newMentions = mentions
        .map(m => {
          if (m.startIndex > insertPos) {
            return {
              ...m,
              startIndex: m.startIndex + offset,
              endIndex: m.endIndex + offset
            };
          }
          return m;
        })
        .concat(newMention)
        .sort((a, b) => a.startIndex - b.startIndex);
    }
    
    return {
      newTextValue,
      newMentions
    };
  }, [textValue, mentions, editingMentionIndex, truncateProductName]);

  return {
    insertProduct
  };
};