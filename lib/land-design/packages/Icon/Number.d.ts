import { default as React } from 'react';
import { IconProps } from './props';
/**
 * 数字图标组件属性
 */
export interface IconNumberProps extends IconProps {
    /**
     * 显示的数字
     * @default 1
     */
    value?: number;
}
/**
 * 圆形数字图标 - 空心样式（描边）
 * 显示一个圆圈内的数字
 */
export declare const IconNumberStroke: React.FC<IconNumberProps>;
/**
 * 圆形数字图标 - 实心样式（填充）
 * 显示一个填充圆圈内的白色数字
 */
export declare const IconNumberFill: React.FC<IconNumberProps>;
/**
 * 默认数字图标（使用描边样式）
 * 这是 single-number 的主要组件
 */
export declare const IconNumber: React.FC<IconNumberProps>;
