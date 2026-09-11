// ============================================================================
// Tree 组件属性定义
// @description 内联缩进树（基础树）组件的完整类型定义
// @author Land Design System
// ============================================================================

import { CSSProperties, ReactNode } from "react";
import { CommonProps } from "../types";

// ─────────────────────────────────────────────────────────────────────────────
// SECTION: 基础类型定义
// ─────────────────────────────────────────────────────────────────────────────

/**
 * 树选项数据项类型
 * @description 定义单个树节点的完整配置
 */
export interface TreeOption {
  /** 节点唯一标识 */
  key: string;
  /** 节点显示内容 */
  label: ReactNode;
  /** 是否禁用该节点（不可选择，但仍可展开） */
  disabled?: boolean;
  /** 子节点 */
  children?: TreeOption[];
}

/**
 * 树外观变体
 * - outline: 描边样式（默认）
 * - fill: 填充样式
 * - text: 文本样式
 * - transparent: 透明样式
 */
export type TreeVariant = 'outline' | 'fill' | 'text' | 'transparent';

/**
 * 树尺寸
 * - small: 小尺寸
 * - default: 默认尺寸
 * - large: 大尺寸
 */
export type TreeSize = 'small' | 'default' | 'large';

/**
 * 自定义节点渲染回调参数
 */
export interface TreeNodeState {
  /** 是否已选中 */
  selected: boolean;
  /** 是否半选（多选父节点部分子节点被选中） */
  indeterminate: boolean;
  /** 是否已展开 */
  expanded: boolean;
  /** 当前层级（0 为根层） */
  level: number;
}

// ─────────────────────────────────────────────────────────────────────────────
// SECTION: 组件属性接口
// ─────────────────────────────────────────────────────────────────────────────

export interface TreeProps extends CommonProps {
  /** 树形数据 */
  treeData?: TreeOption[];

  /** 是否多选模式 @default false */
  multiple?: boolean;

  /** 当前选中值（单选，受控） */
  value?: string;
  /** 当前选中值数组（多选，受控） */
  values?: string[];
  /** 默认选中值（单选，非受控） */
  defaultValue?: string;
  /** 默认选中值数组（多选，非受控） */
  defaultValues?: string[];

  /** 展开的节点 key 数组（受控） */
  expandedKeys?: string[];
  /** 默认展开的节点 key 数组（非受控） */
  defaultExpandedKeys?: string[];

  /** 外观变体 @default 'outline' */
  variant?: TreeVariant;
  /** 尺寸 @default 'default' */
  size?: TreeSize;

  /** 是否显示复选框（默认多选时显示） */
  checkable?: boolean;
  /** 是否允许点击节点选中（默认 true） */
  selectable?: boolean;

  /**
   * 节点展开/收起的触发方式
   * - false：仅点击展开箭头生效（默认，与 antd 一致）
   * - 'click'：点击节点任意区域即展开/收起
   * - 'doubleClick'：双击节点展开/收起
   * @default false
   */
  expandAction?: false | 'click' | 'doubleClick';

  /** 是否整体禁用 @default false */
  disabled?: boolean;

  /** 缩进像素值 @default 16 */
  indent?: number;

  /** 空数据时的显示内容 @default '暂无数据' */
  emptyContent?: ReactNode;

  /** 自定义节点渲染 */
  renderNode?: (option: TreeOption, state: TreeNodeState) => ReactNode;

  /** 自定义类名 */
  className?: string;
  /** 自定义样式 */
  style?: CSSProperties;

  /** 展开/收起回调 */
  onExpand?: (expandedKeys: string[]) => void;
  /** 选中变化回调 */
  onChange?: (
    value: string | string[],
    option: TreeOption,
    selectedOptions?: TreeOption[]
  ) => void;
}

// ─────────────────────────────────────────────────────────────────────────────
// SECTION: 默认值
// ─────────────────────────────────────────────────────────────────────────────

export const treeDefaultProps: Partial<TreeProps> = {
  variant: 'outline',
  size: 'default',
  multiple: false,
  selectable: true,
  expandAction: false,
  disabled: false,
  indent: 16,
  emptyContent: '暂无数据',
};
