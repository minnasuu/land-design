import { CommonProps } from '../types';

// ==================== 基础类型定义 ====================

/** 步骤项 */
export interface StepItem {
  /** 唯一标识 */
  key: number | string;
  /** 标题 */
  title?: string;
  /** 描述文字 */
  desc?: string;
  /** 是否已完成，优先级高于全局 finished 数组 */
  finished?: boolean;
}

// ==================== 属性接口定义 ====================

/** Steps 组件属性 */
export interface StepsProps extends CommonProps {
  /** 步骤数据 */
  items?: StepItem[];
  /** 当前步骤的 key */
  current?: number | string;
  /**
   * 已完成步骤的 key 数组
   * 注意：StepItem 的 finished 字段优先级更高
   */
  finished?: (number | string)[];
  /**
   * 排列方向
   * @default 'horizontal'
   */
  direction?: 'horizontal' | 'vertical';
  /**
   * 是否显示分割线
   * @default true
   */
  useDivider?: boolean;
  /** 分割线宽度 */
  dividerWidth?: string;
  /** 步骤点击回调 */
  onClick?: (item: StepItem) => void;
}
