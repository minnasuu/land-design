import { default as React, CSSProperties } from 'react';
import { CommonProps } from '../types';
/**
 * Rate 尺寸类型
 * - small: 小尺寸 (16px)
 * - default: 默认尺寸 (24px)
 * - large: 大尺寸 (32px)
 */
export type RateSize = "small" | "default" | "large";
/**
 * Rate 基础属性
 * 包含评分组件的基本配置
 */
export interface RateBaseProps extends CommonProps {
    /**
     * 当前评分值（受控）
     * 范围：0 到 count（支持半星时为 0 到 count * 2 的半值）
     */
    value?: number;
    /**
     * 默认评分值（非受控）
     * 组件首次渲染时的初始值
     */
    defaultValue?: number;
    /**
     * 评分总数
     * @default 5
     */
    count?: number;
    /**
     * 是否允许半选
     * @default true
     */
    allowHalf?: boolean;
    /**
     * 是否允许清除（再次点击同一值时重置为0）
     * @default true
     */
    allowClear?: boolean;
    /**
     * 组件尺寸
     * @default "default"
     */
    size?: RateSize;
    /**
     * 是否禁用
     * @default false
     */
    disabled?: boolean;
    /**
     * 是否只读
     * @default false
     */
    readOnly?: boolean;
    /**
     * 自动聚焦
     * @default false
     */
    autoFocus?: boolean;
    /**
     * 表单字段名
     */
    name?: string;
    /**
     * 悬停时是否显示提示文案
     * @default false
     */
    showTooltip?: boolean;
    /**
     * 各等级的提示文案
     * 数组长度应与 count 相同
     * @example ["很差", "较差", "一般", "良好", "优秀"]
     */
    tooltips?: string[];
}
/**
 * Rate 样式属性
 * 用于配置评分组件的视觉样式
 */
export interface RateStyleProps {
    /**
     * 自定义样式
     */
    style?: CSSProperties;
    /**
     * 自定义类名
     */
    className?: string;
    /**
     * 图标间距
     * @default 8
     */
    gap?: number;
    /**
     * 未选中时的颜色
     * @default "var(--color-fill-tertiary)"
     */
    inactiveColor?: string;
    /**
     * 选中时的颜色
     * @default "var(--color-warning)"
     */
    activeColor?: string;
    /**
     * 悬停时的颜色（不传则使用 activeColor）
     */
    hoverColor?: string;
    /**
     * 单个图标的样式
     */
    characterStyle?: CSSProperties;
    /**
     * 单个图标的类名
     */
    characterClassName?: string;
}
/**
 * Rate 自定义属性
 * 用于配置评分组件的自定义内容
 */
export interface RateCustomProps {
    /**
     * 自定义图标
     * 可以传入 React 节点作为自定义的评分图标
     * 支持传入函数，根据索引返回不同图标
     */
    character?: React.ReactNode | ((index: number) => React.ReactNode);
    /**
     * 自定义选中状态的图标（可选）
     * 如不传，选中和未选中使用同一图标
     */
    activeCharacter?: React.ReactNode | ((index: number) => React.ReactNode);
}
/**
 * Rate 事件属性
 * 用于配置评分组件的交互事件
 */
export interface RateEventProps {
    /**
     * 评分变化事件
     * @param value 新的评分值
     */
    onChange?: (value: number) => void;
    /**
     * 悬停值变化事件
     * @param value 当前悬停的值，离开时为 undefined
     */
    onHoverChange?: (value: number | undefined) => void;
    /**
     * 聚焦事件
     */
    onFocus?: (e: React.FocusEvent<HTMLDivElement>) => void;
    /**
     * 失焦事件
     */
    onBlur?: (e: React.FocusEvent<HTMLDivElement>) => void;
    /**
     * 键盘事件
     */
    onKeyDown?: (e: React.KeyboardEvent<HTMLDivElement>) => void;
}
/**
 * Rate 组件完整属性类型
 */
export type RateProps = RateBaseProps & RateStyleProps & RateCustomProps & RateEventProps;
export declare const defaultRateProps: {
    count: number;
    allowHalf: boolean;
    allowClear: boolean;
    size: RateSize;
    disabled: boolean;
    readOnly: boolean;
    autoFocus: boolean;
    showTooltip: boolean;
    gap: number;
    inactiveColor: string;
    activeColor: string;
};
/**
 * 检查 character 是否为函数
 */
export declare function isCharacterFunction(character: React.ReactNode | ((index: number) => React.ReactNode)): character is (index: number) => React.ReactNode;
/**
 * 属性优先级说明：
 *
 * 1. value 和 onChange 配合使用实现受控组件
 * 2. defaultValue 用于非受控组件的初始值
 * 3. allowHalf 控制是否支持半星评分
 * 4. allowClear 控制是否可以清除评分
 * 5. character 支持 ReactNode 或函数，用于自定义图标
 * 6. activeCharacter 可选，用于选中状态的不同图标
 * 7. size 使用预设尺寸，也可通过 characterStyle 自定义
 * 8. disabled 禁用所有交互，readOnly 仅禁止编辑但保留视觉
 * 9. tooltips 数组与 count 对应，提供每个等级的提示
 */
