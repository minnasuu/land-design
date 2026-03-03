import React, { CSSProperties } from 'react';
import { CommonProps } from '../types';

/**
 * Message组件属性类型定义
 * 包含所有Message组件及插件支持的属性及其详细说明
 */

// ==================== 基础类型定义 ====================

/** 消息类型 */
export type MessageType = "info" | "success" | "warning" | "error" | "loading";

/** 消息位置 */
export type MessagePlacement =
  | "top"
  | "top-left"
  | "top-right"
  | "bottom"
  | "bottom-left"
  | "bottom-right"
  | "center";

/** 消息变体 */
export type MessageVariant = "filled" | "light" | "outlined";

// ==================== 旧版类型定义（向后兼容）====================

/** @deprecated 使用 MessageType 代替 */
export type LegacyMessageType = "info" | "success" | "fail" | "warn" | "error" | "warning";

// ==================== 属性接口定义 ====================

/**
 * Message基础属性
 * 包含消息组件的基本配置和内容属性
 */
export interface MessageBaseProps extends CommonProps {
  /** 
   * 消息类型
   * - info: 信息（默认）
   * - success: 成功
   * - warning: 警告
   * - error: 错误
   * - loading: 加载中
   */
  type?: MessageType;

  /** 
   * 消息内容
   * 可以传入字符串或React节点作为消息内容
   */
  content?: React.ReactNode;

  /**
   * @deprecated 使用 content 代替
   */
  text?: string | React.ReactNode;

  /**
   * 消息变体样式
   * - filled: 填充样式
   * - light: 浅色样式（默认）
   * - outlined: 边框样式
   * @default 'light'
   */
  variant?: MessageVariant;

  /** 
   * 是否简洁版
   * 设置为true时显示为简洁样式（无图标）
   * @default false
   */
  simple?: boolean;

  /**
   * 自定义图标
   * 传入 false 时隐藏图标
   */
  icon?: React.ReactNode | false;

  /**
   * 是否显示关闭按钮
   * @default false
   */
  closable?: boolean;

  /**
   * 自定义关闭图标
   */
  closeIcon?: React.ReactNode;
}

/**
 * Message样式属性
 * 用于配置消息组件的视觉样式
 */
export interface MessageStyleProps {
  /** 
   * 自定义样式
   * 可以传入CSS样式对象来自定义消息组件外观
   */
  style?: CSSProperties;

  /** 
   * 自定义类名
   * 可以传入额外的CSS类名
   */
  className?: string;
}

/**
 * Message组件完整属性类型
 * 合并了所有属性接口
 */
export type MessageProps = MessageBaseProps & MessageStyleProps;

/**
 * MessagePlugin选项
 * 用于插件式调用消息组件时的配置
 */
export interface MessagePluginOptions {
  /** 
   * 消息内容
   * 插件调用时的消息文本内容
   */
  content: React.ReactNode;

  /** 
   * 消息类型
   * 参考MessageType
   */
  type?: MessageType;

  /** 
   * 显示时长（毫秒），0表示不自动关闭
   * @default 3000
   */
  duration?: number;

  /**
   * 消息变体
   */
  variant?: MessageVariant;

  /** 
   * 自定义样式类名
   */
  className?: string;

  /** 
   * 自定义样式
   */
  style?: CSSProperties;

  /** 
   * 关闭回调
   * 当消息关闭时触发
   */
  onClose?: () => void;

  /** 
   * 是否显示关闭按钮
   * @default false
   */
  closable?: boolean;

  /**
   * 自定义关闭图标
   */
  closeIcon?: React.ReactNode;

  /** 
   * 消息位置
   * @default 'top'
   */
  placement?: MessagePlacement;

  /** 
   * 是否简洁版（无图标）
   * @default false
   */
  simple?: boolean;

  /**
   * 自定义图标
   */
  icon?: React.ReactNode | false;

  /**
   * 唯一标识，用于更新或关闭指定消息
   */
  key?: string | number;

  /**
   * 距离顶部/底部的偏移量
   * @default 24
   */
  offset?: number;

  /**
   * 最大显示数量，超过时最早的消息会被关闭
   * @default 5
   */
  maxCount?: number;
}

/**
 * Message实例接口
 * 用于操作消息实例的方法
 */
export interface MessageInstance {
  /** 
   * 关闭消息
   */
  close: () => void;

  /** 
   * 更新消息内容
   * @param options 部分MessagePluginOptions
   */
  update: (options: Partial<MessagePluginOptions>) => void;
}

/**
 * MessageApi接口
 * 提供静态方法调用
 */
export interface MessageApi {
  info: (content: React.ReactNode, options?: Partial<MessagePluginOptions>) => MessageInstance;
  success: (content: React.ReactNode, options?: Partial<MessagePluginOptions>) => MessageInstance;
  warning: (content: React.ReactNode, options?: Partial<MessagePluginOptions>) => MessageInstance;
  error: (content: React.ReactNode, options?: Partial<MessagePluginOptions>) => MessageInstance;
  loading: (content: React.ReactNode, options?: Partial<MessagePluginOptions>) => MessageInstance;
  open: (options: MessagePluginOptions) => MessageInstance;
  destroy: (key?: string | number) => void;
  config: (options: { maxCount?: number; duration?: number; placement?: MessagePlacement; offset?: number }) => void;
}

/**
 * 属性优先级说明：
 * 1. content/text 是消息的主要内容，content 优先
 * 2. type 控制消息的主题色和图标
 * 3. variant 控制消息的视觉变体
 * 4. simple 为true时隐藏图标
 * 5. style 和 className 会覆盖默认样式
 * 6. duration 仅在插件调用时生效，控制自动关闭时间
 * 7. closable、placement 等仅在插件调用时生效
 * 8. onClose 用于处理消息关闭后的回调
 * 9. key 用于唯一标识消息，可用于更新或关闭
 */
