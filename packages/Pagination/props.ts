import { CommonProps } from '../types';

// ==================== 属性接口定义 ====================

/** Pagination 组件属性 */
export interface PaginationProps extends CommonProps {
  /**
   * 当前页码
   * @default 1
   */
  current?: number;
  /**
   * 总页数
   * @default 1
   */
  total?: number;
  /**
   * 每次可见的页码数量
   * @default 5
   */
  pageSize?: number;
  /**
   * 是否显示总页数
   * @default false
   */
  showTotal?: boolean;
  /**
   * 是否显示页码输入框
   * @default false
   */
  showInput?: boolean;
  /** 页码变化回调 */
  onChange?: (current: number) => void;
}
