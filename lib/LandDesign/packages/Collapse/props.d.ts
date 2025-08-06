import { default as React, CSSProperties } from 'react';
import { CommonProps } from '../types';
/**
 * Collapse组件属性类型定义
 * 包含所有Collapse组件支持的属性及其详细说明
 */
/**
 * Collapse基础属性
 * 包含折叠面板的基本配置和内容属性
 */
export interface CollapseBaseProps extends CommonProps {
    /**
     * 子元素
     * 可以传入React节点作为折叠面板的内容
     */
    children?: React.ReactNode;
    /**
     * 是否展开
     * 控制折叠面板的展开状态
     */
    open?: boolean;
}
/**
 * Collapse内容属性
 * 用于配置折叠面板的显示内容
 */
export interface CollapseContentProps {
    /**
     * 标题
     * 可以传入字符串或React节点作为折叠面板的标题
     */
    title?: string | React.ReactNode;
    /**
     * 内容
     * 可以传入字符串或React节点作为折叠面板的内容
     */
    content?: string | React.ReactNode;
}
/**
 * Collapse显示属性
 * 用于配置折叠面板的显示方式
 */
export interface CollapseDisplayProps {
    /**
     * 是否隐藏图标
     * 设置为true时会隐藏展开/收起的图标
     */
    hideIcon?: boolean;
}
/**
 * Collapse样式属性
 * 用于配置折叠面板的视觉样式
 */
export interface CollapseStyleProps {
    /**
     * 自定义样式
     * 可以传入CSS样式对象来自定义折叠面板外观
     */
    style?: CSSProperties;
    /**
     * 自定义类名
     * 可以传入额外的CSS类名
     */
    className?: string;
}
/**
 * Collapse组件完整属性类型
 * 合并了所有属性接口
 */
export type CollapseProps = CollapseBaseProps & CollapseContentProps & CollapseDisplayProps & CollapseStyleProps;
/**
 * 属性优先级说明：
 * 1. open控制折叠面板的展开/收起状态
 * 2. title显示在折叠面板的标题区域
 * 3. content显示在折叠面板的内容区域
 * 4. hideIcon控制是否显示展开/收起图标
 * 5. style和className会覆盖默认样式
 * 6. 当open为true时，内容区域展开显示
 * 7. 当open为false时，内容区域收起隐藏
 * 8. 当hideIcon为true时，不显示展开/收起图标
 * 9. title和content都支持字符串和React节点
 * 10. 组件支持点击标题切换展开状态
 */ 
