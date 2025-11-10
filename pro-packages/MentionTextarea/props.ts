import React, { CSSProperties } from 'react';

// 提及项类型
export interface MentionItem {
  id: string;
  name: string;
  displayName: string; // 显示用的名称（可能被截断）
  type: 'product';
  startIndex: number; // 在显示值中的起始位置
  endIndex: number;   // 在显示值中的结束位置
}

// Mention变化类型
export type MentionChangeType = 'add' | 'replace' | 'delete' | 'input';

// Mention变化详情
export interface MentionChangeDetail {
  type: MentionChangeType;
  newMention?: MentionItem;
  oldMention?: MentionItem;
  cursorPos?: number;
}

/**
 * MentionTextarea组件属性类型定义
 */
export interface MentionTextareaProps {
  /** 
   * 自定义类名
   * 可以传入额外的CSS类名
   */
  className?: string;

  /** 
   * 自定义样式
   * 可以传入CSS样式对象来自定义组件外观
   */
  style?: CSSProperties;

  /** 外部传入的显示值 */
  value?: string;

  /** 外部传入的mentions */
  mentions?: MentionItem[];

  /** 是否自动聚焦 */
  autoFocus?: boolean;

  /** 文本或mentions变化（统一的变化事件） */
  onChange?: (displayValue: string, realValue: string, mentions: MentionItem[], detail?: MentionChangeDetail) => void;

  /** 聚焦事件 */
  onFocus?: () => void;

  /** 失焦事件 */
  onBlur?: () => void;

  /** @符号相关交互（输入@或点击mention时触发，用于控制弹窗显示） */
  onAtTrigger?: (params: {
    /** @符号的水平像素位置，-1表示关闭 */
    left: number;
    /** @符号的垂直像素位置，-1表示关闭 */
    top: number;
    /** textarea的宽度 */
    textareaWidth: number;
    /** @符号在文本中的索引位置，-1表示关闭 */
    startIndex: number;
    /** 触发方式：click表示点击mention，input表示输入@ */
    trigger: 'click' | 'input' | 'close';
    /** 被点击的mention（仅在trigger为click时有值） */
    mention?: MentionItem;
  }) => void;

  /** 占位符文本 */
  placeholder?: string;

  /** 是否禁用 */
  disabled?: boolean;

  /** 最大字符长度 */
  maxLength?: number;

  /** 最多允许的 mention 数量 */
  maxMentions?: number;

  /** 
   * 子元素
   * 可以传入React节点作为组件内容
   */
  children?: React.ReactNode;
}
