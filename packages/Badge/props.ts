import React, { CSSProperties } from 'react';
import { CommonProps } from '../types';

/**
 * Badge组件属性类型定义
 * 包含所有Badge组件支持的属性及其详细说明
 */

// ==================== 属性接口定义 ====================

/**
 * Badge基础属性
 * 包含徽标的基本配置和内容属性
 */
export interface BadgeBaseProps extends CommonProps {
  /** 
   * 子元素
   * 可以传入React节点作为徽标的内容
   */
  children?: React.ReactNode;

  /** 
   * 其他内容徽标
   * 可以传入React节点作为徽标的显示内容
   */
  content?: React.ReactNode;
}

/**
 * Badge显示属性
 * 用于配置徽标的显示方式
 */
export interface BadgeDisplayProps {
  /** 
   * 是否为点
   * 设置为true时显示为圆点，false时显示为数字或内容
   */
  isDot?: boolean;

  /** 
   * 徽标数值
   * 显示的数字，当isDot为false时生效
   */
  count?: number;

  /** 
   * 显示的最大数
   * 超过此数值时会缩略显示，如99+
   */
  exceedCount?: number;
}

/**
 * Badge样式属性
 * 用于配置徽标的视觉样式
 */
export interface BadgeStyleProps {
  /** 
   * 自定义样式
   * 可以传入CSS样式对象来自定义徽标外观
   */
  style?: CSSProperties;

  /** 
   * 自定义类名
   * 可以传入额外的CSS类名
   */
  className?: string;
}

/**
 * Badge组件完整属性类型
 * 合并了所有属性接口
 */
export type BadgeProps = BadgeBaseProps &
  BadgeDisplayProps &
  BadgeStyleProps;

/**
 * 属性优先级说明：
 * 1. children是徽标的主要内容，徽标会显示在children的右上角
 * 2. isDot控制徽标的显示方式（圆点或数字/内容）
 * 3. count设置徽标显示的数字
 * 4. exceedCount控制数字的最大显示值
 * 5. content可以传入自定义内容替代数字显示
 * 6. 显示优先级：content > count > isDot
 * 7. 当isDot为true时，count和content会被忽略
 * 8. 当count超过exceedCount时，会显示为"exceedCount+"
 * 9. style和className会覆盖默认样式
 * 10. 徽标通常用于显示通知数量、状态标识等
 */ 