import { default as React, CSSProperties } from 'react';
import { CommonProps } from '../types';
/**
 * Dropdown组件属性类型定义
 * 包含所有Dropdown组件支持的属性及其详细说明
 */
/** 触发方式 */
export type DropdownTrigger = "hover" | "click";
/** 下拉位置 */
export type DropdownPlacement = "top" | "bottom";
/** 对齐方式 */
export type DropdownAlignment = "left" | "right" | "center";
/**
 * DropdownItem下拉项类型
 * 定义单个下拉项的配置信息
 */
export type DropdownItemType = {
    /**
     * 唯一标识
     * 下拉项的唯一标识符
     */
    key: string;
    /**
     * 标签
     * 可以传入字符串或React节点作为下拉项的显示内容
     */
    label: string | React.ReactNode;
};
/**
 * Dropdown基础属性
 * 包含下拉菜单的基本配置和内容属性
 */
export interface DropdownBaseProps extends CommonProps {
    /**
     * 子元素
     * 下拉菜单的触发元素
     */
    children?: React.ReactNode;
    /**
     * 是否展开
     * 控制下拉菜单的展开状态
     * 注意：在禁用状态下，此属性不会生效
     */
    open?: boolean;
    /**
     * 是否禁用
     * 设置为true时下拉菜单完全不可用：
     * - 阻止所有鼠标和键盘交互
     * - 自动关闭已展开的下拉菜单
     * - 不响应open属性的变化
     * - 不触发任何事件回调
     */
    disabled?: boolean;
}
/**
 * Dropdown内容属性
 * 用于配置下拉菜单的显示内容
 */
export interface DropdownContentProps {
    /**
     * 下拉数据
     * 包含所有下拉项的配置信息
     */
    dropData?: DropdownItemType[];
    /**
     * 下拉内容
     * 可以传入React节点作为自定义下拉内容
     */
    dropContent?: React.ReactNode;
}
/**
 * Dropdown行为属性
 * 用于配置下拉菜单的交互行为
 */
export interface DropdownBehaviorProps {
    /**
     * 触发方式
     * - hover: 鼠标悬停触发
     * - click: 点击触发
     */
    trigger?: DropdownTrigger;
    /**
     * 是否目标到body
     * 设置为true时下拉菜单会挂载到body元素
     */
    targetBody?: boolean;
}
/**
 * Dropdown布局属性
 * 用于配置下拉菜单的布局方式
 */
export interface DropdownLayoutProps {
    /**
     * 下拉位置
     * - top: 向上展开
     * - bottom: 向下展开（默认）
     */
    placement?: DropdownPlacement;
    /**
     * 对齐方式
     * - left: 左对齐
     * - right: 右对齐
     * - center: 居中对齐
     */
    alignment?: DropdownAlignment;
}
/**
 * Dropdown样式属性
 * 用于配置下拉菜单的视觉样式
 */
export interface DropdownStyleProps {
    /**
     * 自定义样式
     * 可以传入CSS样式对象来自定义下拉菜单外观
     */
    style?: CSSProperties;
    /**
     * 自定义类名
     * 可以传入额外的CSS类名
     */
    className?: string;
    /**
     * 触发元素类名
     * 为触发元素添加自定义类名
     */
    toggleClassName?: string;
    /**
     * 触发元素样式
     * 为触发元素添加自定义样式
     */
    toggleStyle?: CSSProperties;
    /**
     * 下拉菜单类名
     * 为下拉菜单添加自定义类名
     */
    dropClassName?: string;
    /**
     * 下拉菜单样式
     * 为下拉菜单添加自定义样式
     */
    dropStyle?: CSSProperties;
}
/**
 * Dropdown事件属性
 * 用于配置下拉菜单的交互事件
 */
export interface DropdownEventProps {
    /**
     * 选择变化事件
     * 当下拉项被选择时触发
     * @param data 被选择的下拉项
     */
    onChange?: (data: DropdownItemType) => void;
    /**
     * 面板打开事件
     * 当下拉面板打开时触发
     */
    onOpen?: (open: boolean) => void;
    /**
     * 面板关闭事件
     * 当下拉面板关闭时触发
     */
    onClose?: (open: boolean) => void;
}
/**
 * Dropdown组件完整属性类型
 * 合并了所有属性接口
 */
export type DropdownProps = DropdownBaseProps & DropdownContentProps & DropdownBehaviorProps & DropdownLayoutProps & DropdownStyleProps & DropdownEventProps;
/**
 * 属性优先级说明：
 * 1. children是下拉菜单的触发元素
 * 2. open控制下拉菜单的展开状态
 * 3. dropData和dropContent分别用于数据驱动和自定义内容
 * 4. trigger控制下拉菜单的触发方式
 * 5. placement和alignment控制下拉菜单的位置和对齐
 * 6. targetBody控制下拉菜单的挂载位置
 * 7. onChange处理下拉项的选择事件
 * 8. onOpen和onClose处理面板的打开和关闭事件
 * 9. 样式优先级：具体样式 > 类名 > 默认样式
 * 10. 内容优先级：dropContent > dropData > 默认内容
 * 11. 当trigger为hover时，鼠标离开会自动关闭
 */ 
