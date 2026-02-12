import React, { CSSProperties } from 'react';

/** 提及项 */
export interface MentionItem<T = Record<string, unknown>> {
  id: string;
  /** 完整名称（用于生成 realValue） */
  name: string;
  /** 显示名称（展示层渲染用，可截断） */
  displayName: string;
  /** 类型标识 */
  type: string;
  /** 在显示值中的起始位置 */
  startIndex: number;
  /** 在显示值中的结束位置 */
  endIndex: number;
  /** 业务自定义扩展数据 */
  data?: T;
}

/** Mention 变化类型 */
export type MentionChangeType = 'add' | 'replace' | 'delete' | 'input';

/** Mention 变化详情 */
export interface MentionChangeDetail {
  type: MentionChangeType;
  newMention?: MentionItem;
  oldMention?: MentionItem;
  cursorPos?: number;
}

/** 触发事件参数 */
export interface TriggerParams {
  /** 触发符号的水平像素位置，-1 表示关闭 */
  left: number;
  /** 触发符号的垂直像素位置（多行场景），-1 表示关闭 */
  top: number;
  /** textarea 的宽度 */
  textareaWidth: number;
  /** 触发符号在文本中的索引位置，-1 表示关闭 */
  startIndex: number;
  /** 触发方式 */
  trigger: 'click' | 'input' | 'close';
  /** 当前搜索关键词（触发符号后的文字） */
  keyword: string;
  /** 被点击的 mention（仅在 trigger 为 click 时有值） */
  mention?: MentionItem;
}

/** 暴露给外部的 ref 方法 */
export interface MentionTextareaRef {
  /** 获取原生 textarea 元素 */
  getTextarea: () => HTMLTextAreaElement | null;
  /** 聚焦 */
  focus: () => void;
  /** 失焦 */
  blur: () => void;
}

/** MentionTextarea 组件属性 */
export interface MentionTextareaProps {
  className?: string;
  style?: CSSProperties;
  /** 显示值（受控） */
  value?: string;
  /** 提及项列表（受控） */
  mentions?: MentionItem[];
  /** 自动聚焦 */
  autoFocus?: boolean;
  /** 值变化回调 */
  onChange?: (displayValue: string, realValue: string, mentions: MentionItem[], detail?: MentionChangeDetail) => void;
  /** 聚焦事件 */
  onFocus?: (e: React.FocusEvent<HTMLTextAreaElement>) => void;
  /** 失焦事件 */
  onBlur?: (e: React.FocusEvent<HTMLTextAreaElement>) => void;
  /** 键盘事件（在内部 handleKeyDown 之后调用） */
  onKeyDown?: (e: React.KeyboardEvent<HTMLTextAreaElement>) => void;
  /** 触发符号回调（输入触发符号、点击 mention、关闭时调用） */
  onTrigger?: (params: TriggerParams) => void;
  /** 占位符 */
  placeholder?: string;
  /** 是否禁用 */
  disabled?: boolean;
  /** 是否只读 */
  readOnly?: boolean;
  /** 最多允许的 mention 数量 */
  maxMentions?: number;
  /**
   * 触发符号，默认 '@'
   * 支持单个字符串或字符串数组（多触发符场景）
   */
  trigger?: string | string[];
  /**
   * mention 左右填充的空白字符串
   * 默认 4 个空格，用于在 textarea 中撑开 mention 的视觉宽度
   */
  mentionSpace?: { left: string; right: string };
  /**
   * 自定义 mention 显示层渲染
   * 不传则使用默认的 `<trigger><displayName>` 文本渲染
   */
  renderMention?: (mention: MentionItem, triggerChar: string) => React.ReactNode;
  /** 子元素（通常用于渲染弹窗等） */
  children?: React.ReactNode;
}
