import { default as React, CSSProperties } from 'react';
import { CommonProps } from '../types';
import { MenuProps } from '../Menu/props';
/**
 * Header组件属性类型定义
 * 包含所有Header组件支持的属性及其详细说明
 */
/** 导航项对齐方式 */
export type HeaderAlign = "start" | "center" | "end";
/**
 * Header基础属性
 * 包含头部组件的基本配置和布局属性
 */
export interface HeaderBaseProps extends CommonProps {
    /**
     * Header高度
     * 设置头部组件的高度
     */
    height?: string;
    /**
     * 是否固定头部
     * 设置为true时头部会固定在页面顶部
     */
    fixed?: boolean;
    /**
     * 背景透明效果数值
     * 设置背景的透明度，范围0-1
     */
    filter?: number;
    /**
     * 是否需要底部边框
     * 设置为true时会显示底部边框线
     */
    borderBottom?: boolean;
    /**
     * 导航项位置
     * - start: 左对齐
     * - center: 居中对齐
     * - end: 右对齐
     */
    align?: HeaderAlign;
    /**
     * 到移动端的尺寸
     * 设置响应式断点，小于此尺寸时切换到移动端样式
     */
    mobileSize?: number;
}
/**
 * Header内容属性
 * 用于配置头部组件的内容元素
 */
export interface HeaderContentProps {
    /**
     * 全局导航
     * 可以传入React节点作为全局导航内容
     */
    applications?: React.ReactNode;
    /**
     * Logo
     * 可以传入字符串（图片URL）或React节点作为Logo
     */
    logo?: string | React.ReactNode;
    /**
     * 网站名称
     * 可以传入字符串或React节点作为网站名称
     */
    name?: string | React.ReactNode;
    /**
     * Logo与网站名称之间的分割线
     * 设置为true时会在Logo和网站名称之间显示分割线
     */
    divider?: boolean;
    /**
     * 导航项配置
     * 可以传入MenuProps来配置导航菜单
     */
    menuProps?: MenuProps;
    /**
     * 右侧元素
     * 可以传入React节点作为右侧内容
     */
    rightComponent?: React.ReactNode;
}
/**
 * Header样式属性
 * 用于配置头部组件的视觉样式
 */
export interface HeaderStyleProps {
    /**
     * 自定义样式
     * 可以传入CSS样式对象来自定义头部外观
     */
    style?: CSSProperties;
    /**
     * 自定义类名
     * 可以传入额外的CSS类名
     */
    className?: string;
}
/**
 * Header事件属性
 * 用于配置头部组件的交互事件
 */
export interface HeaderEventProps {
    /**
     * Logo点击事件
     * 当Logo被点击时触发
     */
    onLogoClick?: () => void;
}
/**
 * Header组件完整属性类型
 * 合并了所有属性接口
 */
export type HeaderProps = HeaderBaseProps & HeaderContentProps & HeaderStyleProps & HeaderEventProps;
/**
 * 属性优先级说明：
 * 1. height设置头部的高度，可以是CSS长度值
 * 2. fixed属性控制头部是否固定在页面顶部
 * 3. filter设置背景透明度，影响视觉效果
 * 4. borderBottom控制是否显示底部边框
 * 5. align控制导航项的对齐方式
 * 6. logo和name分别控制Logo和网站名称的显示
 * 7. divider在logo和name都存在时生效
 * 8. menuProps用于配置导航菜单的行为
 * 9. rightComponent显示在头部右侧
 * 10. mobileSize设置响应式断点
 * 11. style和className会覆盖默认样式
 * 12. onLogoClick处理Logo的点击事件
 */ 
