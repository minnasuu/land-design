import { CSSProperties } from 'react';
import { CommonProps } from '../types';
/**
 * Tabs组件属性类型定义
 * 包含所有Tabs组件支持的属性及其详细说明
 */
/** 标签页项类型 */
export type TabsItemType = {
    /**
     * 标签页的值
     * 用于标识当前选中的标签页
     */
    key: string;
    /**
     * 标签页显示文本
     * 可以是字符串或React节点
     */
    label: string;
    /**
     * 是否禁用
     * 设置为true时标签页不可点击
     */
    disabled?: boolean;
    /**
     * 提示内容
     * 可以传入字符串或React节点作为提示
     */
    tip?: string;
    /**
     * 图标提示内容
     * 可以传入字符串或React节点作为图标提示
     */
    iconTip?: string;
    /**
     * 是否显示图标
     * 设置为true时会显示图标
     */
    showIcon?: boolean;
};
/**
 * Tabs基础属性
 * 包含标签页的基本配置和交互属性
 */
export interface TabsBaseProps extends CommonProps {
    /**
     * 当前选中的标签页
     * 可以是单个值或数组（多选模式）
     */
    checked?: string;
    /**
     * 标签页数据
     * 包含所有标签页的配置信息
     */
    data?: TabsItemType[];
    /**
     * 是否禁用切换
     * 设置为true时标签页不可切换
     */
    switchDisabled?: boolean;
}
/**
 * Tabs样式属性
 * 用于配置标签页的视觉样式
 */
export interface TabsStyleProps {
    /**
     * 标签页容器宽度
     * 设置整个标签页容器的宽度
     */
    width?: string;
    /**
     * 自定义样式
     * 可以传入CSS样式对象来自定义标签页外观
     */
    style?: CSSProperties;
    /**
     * 自定义类名
     * 可以传入额外的CSS类名
     */
    className?: string;
    /**
     * 激活状态的类名
     * 为激活的标签页添加额外的CSS类名
     */
    activeClassName?: string;
}
/**
 * Tabs布局属性
 * 用于配置标签页的布局方式
 */
export interface TabsLayoutProps {
    /**
     * 是否使用分割线
     * 设置为true时标签页之间会显示分割线
     */
    useDivider?: boolean;
}
/**
 * Tabs事件属性
 * 用于配置标签页的交互事件
 */
export interface TabsEventProps {
    /**
     * 标签页切换事件
     * 当用户点击标签页时触发
     * @param value 选中的标签页值
     * @param item 选中的标签页项
     */
    onChange?: (key: string, item?: TabsItemType) => void;
}
/**
 * Tabs组件完整属性类型
 * 合并了所有属性接口
 */
export type TabsProps = TabsBaseProps & TabsStyleProps & TabsLayoutProps & TabsEventProps;
/**
 * 属性优先级说明：
 * 1. value和onChange配合使用实现受控组件
 * 2. data是必需属性，包含所有标签页的配置信息
 * 3. switchDisabled属性会禁用所有标签页的切换功能
 * 4. disabled属性在TabsItemType中，用于禁用单个标签页
 * 5. useDivider属性会影响标签页之间的视觉分隔
 * 6. activeClassName会为激活的标签页添加额外的样式类
 * 7. style和className会覆盖默认样式
 * 8. width属性会设置整个标签页容器的宽度
 */ 
