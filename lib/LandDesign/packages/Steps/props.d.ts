import { default as React, CSSProperties } from 'react';
import { CommonProps } from '../types';
/**
 * Steps组件属性类型定义
 * 包含所有Steps组件支持的属性及其详细说明
 */
/** 步骤方向 */
export type StepsDirection = "horizontal" | "vertical";
/**
 * StepsItem步骤项类型
 * 定义单个步骤的配置信息
 */
export type StepsItemType = {
    /**
     * 唯一标识
     * 步骤的唯一标识符，可以是数字或字符串
     */
    key: number | string;
    /**
     * 标题
     * 步骤的标题文本
     */
    title?: string;
    /**
     * 描述文字
     * 步骤的详细描述信息
     */
    desc?: string;
    /**
     * 是否已完成
     * 控制单个步骤的完成状态，优先级高于全局finished数组
     */
    finished?: boolean;
};
/**
 * Steps基础属性
 * 包含步骤组件的基本配置和内容属性
 */
export interface StepsBaseProps extends CommonProps {
    /**
     * 子元素
     * 可以传入React节点作为步骤组件的内容
     */
    children?: React.ReactNode;
    /**
     * 数据
     * 包含所有步骤的配置信息
     */
    data?: StepsItemType[];
    /**
     * 当前进度
     * 当前激活的步骤，可以是数字或字符串
     */
    current?: number | string;
    /**
     * 已完成步骤
     * 已完成的步骤列表，可以是数字或字符串数组
     * 注意：如果data中的步骤项有finished字段，则以data中的finished为准
     */
    finished?: (number | string)[];
}
/**
 * Steps布局属性
 * 用于配置步骤组件的布局方式
 */
export interface StepsLayoutProps {
    /**
     * 方向
     * - horizontal: 水平布局（默认）
     * - vertical: 垂直布局
     */
    direction?: StepsDirection;
    /**
     * 是否显示分割线
     * 设置为true时会在步骤之间显示分割线
     */
    useDivider?: boolean;
    /**
     * 分割线宽度
     * 设置分割线的宽度
     */
    dividerWidth?: string;
}
/**
 * Steps样式属性
 * 用于配置步骤组件的视觉样式
 */
export interface StepsStyleProps {
    /**
     * 自定义样式
     * 可以传入CSS样式对象来自定义步骤组件外观
     */
    style?: CSSProperties;
    /**
     * 自定义类名
     * 可以传入额外的CSS类名
     */
    className?: string;
}
/**
 * Steps事件属性
 * 用于配置步骤组件的交互事件
 */
export interface StepsEventProps {
    /**
     * 点击事件
     * 当步骤被点击时触发
     * @param item 被点击的步骤项
     */
    onClick?: (item: StepsItemType) => void;
}
/**
 * Steps组件完整属性类型
 * 合并了所有属性接口
 */
export type StepsProps = StepsBaseProps & StepsLayoutProps & StepsStyleProps & StepsEventProps;
/**
 * 属性优先级说明：
 * 1. data包含所有步骤的配置信息
 * 2. current控制当前激活的步骤
 * 3. finished标记已完成的步骤
 * 4. direction控制步骤的布局方向
 * 5. useDivider和dividerWidth控制分割线的显示
 * 6. onClick处理步骤的点击事件
 * 7. style和className会覆盖默认样式
 * 8. 步骤状态优先级：finished > current > 默认状态
 * 9. 当direction为vertical时，布局会垂直排列
 * 10. 分割线只在useDivider为true时显示
 */ 
