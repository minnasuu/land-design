import { default as React, CSSProperties } from 'react';
import { CommonProps } from '../types';
/**
 * ColorPicker组件属性类型定义
 * 包含所有ColorPicker组件支持的属性及其详细说明
 */
/**
 * ColorPicker基础属性
 * 包含颜色选择器的基本配置和内容属性
 */
export interface ColorPickerBaseProps extends CommonProps {
    /**
     * 子元素
     * 可以传入React节点作为颜色选择器的内容
     */
    children?: React.ReactNode;
    /**
     * 外部回传的value值
     * 当前选中的颜色值
     */
    color?: string;
}
/**
 * ColorPicker显示属性
 * 用于配置颜色选择器的显示方式
 */
export interface ColorPickerDisplayProps {
    /**
     * 是否禁用
     * 设置为true时颜色选择器不可用
     */
    disabled?: boolean;
}
/**
 * ColorPicker样式属性
 * 用于配置颜色选择器的视觉样式
 */
export interface ColorPickerStyleProps {
    /**
     * 自定义样式
     * 可以传入CSS样式对象来自定义颜色选择器外观
     */
    style?: CSSProperties;
    /**
     * 自定义类名
     * 可以传入额外的CSS类名
     */
    className?: string;
}
/**
 * ColorPicker事件属性
 * 用于配置颜色选择器的交互事件
 */
export interface ColorPickerEventProps {
    /**
     * 颜色变化事件
     * 当颜色发生变化时触发
     * @param color 新的颜色值 对应colorMode
     * @param hexColor 新的hex颜色值
     * @param rgbColor 新的rgb颜色值
     */
    onChange?: (color: string, hexColor: string, rgbColor: string) => void;
    /**
     * 卡片点击事件
     * 当颜色卡片被点击时触发
     */
    onCardClick?: () => void;
}
/**
 * ColorPicker组件完整属性类型
 * 合并了所有属性接口
 */
export type ColorPickerProps = ColorPickerBaseProps & ColorPickerDisplayProps & ColorPickerStyleProps & ColorPickerEventProps;
/**
 * 属性优先级说明：
 * 1. value控制当前选中的颜色值
 * 2. size设置颜色选择器的尺寸
 * 3. border控制是否显示边框
 * 4. useSelect控制是否允许选择颜色
 * 5. onChange处理颜色变化事件
 * 6. onClick处理整体点击事件
 * 7. onCardClick处理颜色卡片的点击事件
 * 8. style和className会覆盖默认样式
 * 9. 当useSelect为false时，选择功能被禁用
 * 10. 事件触发顺序：onCardClick > onClick > onChange
 */ 
