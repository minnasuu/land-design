import React, { CSSProperties } from "react";
import { CommonProps } from "../types";
import { PopOverProps } from "../PopOver/props";

/**
 * Ellipsis组件属性类型定义
 * 包含所有Ellipsis组件支持的属性及其详细说明
 */

// ==================== 属性接口定义 ====================

/**
 * Ellipsis基础属性
 * 包含省略号组件的基本配置和内容属性
 */
export interface EllipsisBaseProps extends CommonProps {
  /** 
   * 子元素
   * 可以传入React节点作为省略号组件的内容
   */
  children?: React.ReactNode;

  /** 
   * 文本内容
   * 可以传入React节点作为要处理的文本内容
   */
  text?: React.ReactNode;
}

/**
 * Ellipsis显示属性
 * 用于配置省略号的显示方式
 */
export interface EllipsisDisplayProps {
  /** 
   * 显示行数
   * 设置文本显示的最大行数，超过时显示省略号
   */
  line?: number;

  /** 
   * 是否启用hover提示
   * 设置为true时，当文本被省略时hover会显示完整内容
   */
  open?: boolean;
}

/**
 * Ellipsis样式属性
 * 用于配置省略号组件的视觉样式
 */
export interface EllipsisStyleProps {
  /** 
   * 自定义样式
   * 可以传入CSS样式对象来自定义省略号组件外观
   */
  style?: CSSProperties;

  /** 
   * 自定义类名
   * 可以传入额外的CSS类名
   */
  className?: string;
}

export interface EllipsisPopoverProps {
  /** 
   * PopOver组件属性
   * 用于自定义hover提示的显示方式
   */
  popoverProps?: PopOverProps;

  /** 
   * 设置maxWidth的回调函数
   * 接收contentWidth作为参数，返回自定义的maxWidth值
   * 默认为contentWidth，可以通过此函数进行自定义处理
   */
  setMaxWidth?: (contentWidth: number) => number;
}

/**
 * Ellipsis组件完整属性类型
 * 合并了所有属性接口
 */
export type EllipsisProps = EllipsisBaseProps &
  EllipsisDisplayProps &
  EllipsisStyleProps &
  EllipsisPopoverProps;

/**
 * 属性优先级说明：
 * 1. children和text都可以作为文本内容，text优先级更高
 * 2. line设置文本显示的最大行数，默认为1行
 * 4. 当line为1时，文本超出宽度会显示省略号
 * 5. 当line大于1时，文本超出指定行数会显示省略号
 * 7. 组件会自动监听容器大小变化，动态判断是否需要省略
 * 8. 使用ResizeObserver监听容器变化，性能更优
 * 9. 支持窗口大小变化时的重新计算
 * 10. 当text和children同时存在时，优先使用text
 * 11. 增强的监听机制：
 *    - 监听当前容器大小变化
 *    - 监听所有父级容器大小变化
 *    - 监听DOM结构变化（如父级容器被动态添加/删除）
 *    - 监听样式属性变化（style、class）
 *    - 使用防抖机制优化性能，避免频繁计算
 * 12. 自动适应各种布局变化场景，确保省略号状态始终正确
 * 13. maxWidth扩展性：
 *    - 默认使用contentWidth作为PopOver的最大宽度
 *    - 通过setMaxWidth回调函数透传contentWidth到外部
 *    - 支持自定义maxWidth处理逻辑，如限制最大宽度、按比例缩放等
 */ 