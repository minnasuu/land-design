import { CSSProperties, ReactNode, HTMLAttributes, MouseEvent } from 'react';
/**
 * 徽标外观变体
 * - standard: 标准样式，实心背景（默认）
 * - outline: 描边样式，透明背景有边框
 * - light: 浅色样式，浅色背景深色文字
 */
export type BadgeVariant = 'standard' | 'outline' | 'light';
/**
 * 徽标语义状态/颜色
 * - default: 默认红色
 * - primary: 主色调蓝色
 * - success: 成功绿色
 * - warning: 警告橙色
 * - danger: 危险红色
 * - info: 信息灰色
 */
export type BadgeStatus = 'default' | 'primary' | 'success' | 'warning' | 'danger' | 'info';
/**
 * 徽标位置（相对于子元素）
 * - top-right: 右上角（默认）
 * - top-left: 左上角
 * - bottom-right: 右下角
 * - bottom-left: 左下角
 */
export type BadgePlacement = 'top-right' | 'top-left' | 'bottom-right' | 'bottom-left';
/**
 * Badge 组件属性
 */
export interface BadgeProps {
    /**
     * 徽标外观变体
     * @default 'standard'
     */
    variant?: BadgeVariant;
    /**
     * 徽标语义状态/颜色
     * @default 'default'
     */
    status?: BadgeStatus;
    /**
     * 徽标位置（相对于子元素）
     * @default 'top-right'
     */
    placement?: BadgePlacement;
    /**
     * 徽标数值
     * - 当为 0 时默认隐藏，可通过 showZero 显示
     */
    count?: number;
    /**
     * 封顶数值，超过后显示 `{max}+`
     * @default 99
     */
    max?: number;
    /**
     * 是否显示为小圆点
     * @default false
     */
    dot?: boolean;
    /**
     * 自定义徽标内容（优先级高于 count）
     */
    content?: ReactNode;
    /**
     * 当 count 为 0 时是否显示徽标
     * @default false
     */
    showZero?: boolean;
    /**
     * 包裹的子元素
     */
    children?: ReactNode;
    /**
     * 是否隐藏徽标
     * @default false
     */
    hidden?: boolean;
    /**
     * 徽标相对于子元素的偏移量 [x, y]
     * - 正值向内偏移，负值向外偏移
     */
    offset?: [number, number];
    /**
     * 徽标点击回调
     */
    onClick?: (e: MouseEvent<HTMLSpanElement>) => void;
    /**
     * 自定义类名
     */
    className?: string;
    /**
     * 自定义样式
     */
    style?: CSSProperties;
    /**
     * 徽标自定义类名
     */
    badgeClassName?: string;
    /**
     * 徽标自定义样式
     */
    badgeStyle?: CSSProperties;
    /**
     * 原生 HTML 属性透传
     */
    htmlProps?: HTMLAttributes<HTMLSpanElement>;
}
export declare const defaultBadgeProps: Partial<BadgeProps>;
