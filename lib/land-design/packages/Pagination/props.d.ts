import { default as React, CSSProperties } from 'react';
import { CommonProps } from '../types';
/**
 * Pagination组件属性类型定义
 * 包含所有Pagination组件支持的属性及其详细说明
 */
/** 每页显示数量 */
export type PaginationPageSize = 1 | 5 | 10 | 15 | 20;
/**
 * Pagination基础属性
 * 包含分页组件的基本配置和内容属性
 */
export interface PaginationBaseProps extends CommonProps {
    /**
     * 子元素
     * 可以传入React节点作为分页组件的内容
     */
    children?: React.ReactNode;
    /**
     * 当前页
     * 当前激活的页码
     */
    current?: number;
    /**
     * 总页数
     * 总的分页数量
     */
    total?: number;
}
/**
 * Pagination功能属性
 * 用于配置分页组件的功能特性
 */
export interface PaginationFeatureProps {
    /**
     * 每次加载的页数
     * 每页显示的数据条数
     */
    pageSize?: PaginationPageSize;
    /**
     * 是否显示总页数
     * 设置为true时会显示总页数信息
     */
    showTotal?: boolean;
    /**
     * 是否显示输入框
     * 设置为true时会显示页码输入框
     */
    showInput?: boolean;
}
/**
 * Pagination样式属性
 * 用于配置分页组件的视觉样式
 */
export interface PaginationStyleProps {
    /**
     * 自定义样式
     * 可以传入CSS样式对象来自定义分页组件外观
     */
    style?: CSSProperties;
    /**
     * 自定义类名
     * 可以传入额外的CSS类名
     */
    className?: string;
}
/**
 * Pagination事件属性
 * 用于配置分页组件的交互事件
 */
export interface PaginationEventProps {
    /**
     * 页码变化事件
     * 当页码发生变化时触发
     * @param current 新的当前页码
     */
    onChange?: (current: number) => void;
}
/**
 * Pagination组件完整属性类型
 * 合并了所有属性接口
 */
export type PaginationProps = PaginationBaseProps & PaginationFeatureProps & PaginationStyleProps & PaginationEventProps;
/**
 * 属性优先级说明：
 * 1. current控制当前激活的页码
 * 2. total设置总的分页数量
 * 3. pageSize控制每页显示的数据条数
 * 4. showTotal控制是否显示总页数信息
 * 5. showInput控制是否显示页码输入框
 * 6. onChange处理页码变化事件
 * 7. style和className会覆盖默认样式
 * 8. 当current超出total范围时会被限制
 * 9. 组件支持点击页码、输入页码等方式切换
 * 10. 样式优先级：style > className > 默认样式
 */ 
