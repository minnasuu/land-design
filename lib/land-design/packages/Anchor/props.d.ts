import { CSSProperties } from 'react';
import { CommonProps } from '../types';
/**
 * Anchor组件属性类型定义
 * 包含所有Anchor组件支持的属性及其详细说明
 * 支持新的样式变量系统和深色模式
 */
/** 锚点项类型 */
export type AnchorItemType = {
    /**
     * 唯一标识
     * 用于标识锚点项，必须唯一，对应页面中目标元素的id
     */
    key: string;
    /**
     * 锚点文字内容
     * 显示在锚点导航中的文本
     */
    title: string;
    /**
     * 子项
     * 支持嵌套的锚点结构，用于创建层级导航
     */
    children?: AnchorItemType[];
};
/**
 * 锚点基础属性
 * 包含锚点组件的基本配置
 */
export interface AnchorBaseProps {
    /**
     * 锚点数据
     * 包含锚点项的结构化数据，支持嵌套结构
     * 每个项必须包含唯一的key和title
     */
    data?: AnchorItemType[];
    /**
     * 锚点项间距
     * 锚点项之间的间距，默认为 4px
     */
    gap?: number;
}
/**
 * 锚点交互属性
 * 用于配置锚点的交互行为
 */
export interface AnchorInteractionProps {
    /**
     * 点击锚点时的回调
     * 当用户点击锚点项时触发，参数为锚点项的key
     * 支持键盘导航（Enter/Space键）
     */
    onChange?: (key: string) => void;
}
/**
 * 锚点滚动属性
 * 用于配置锚点的滚动行为
 */
export interface AnchorScrollProps {
    /**
     * 滚动偏移量
     * 滚动到目标位置时的偏移距离，通常用于固定头部的情况
     * 默认为0，表示无偏移
     */
    offsetTop?: number;
    /**
     * 滚动容器选择器
     * 返回滚动容器元素，默认为window
     * 支持自定义滚动容器，如模态框内的滚动区域
     */
    getContainer?: () => HTMLElement | Window;
}
/**
 * 锚点指示器属性
 * 用于配置锚点的视觉指示器
 */
export interface AnchorIndicatorProps {
    /**
     * 是否显示指示器
     * 设置为true时会显示当前激活锚点的指示器
     * 默认为true
     */
    showIndicator?: boolean;
    /**
     * 自定义指示器样式
     * 可以传入CSS样式对象来自定义指示器外观
     * 支持新的样式变量系统
     */
    indicatorStyle?: CSSProperties;
}
/**
 * Anchor组件完整属性类型
 * 合并了所有属性接口
 */
export type AnchorProps = AnchorBaseProps & AnchorInteractionProps & AnchorScrollProps & AnchorIndicatorProps & CommonProps;
/**
 * 样式变量说明
 *
 * 组件使用新的样式变量系统，支持深色模式自动切换：
 *
 * 颜色变量：
 * - --color-text-primary: 主要文本颜色
 * - --color-text-secondary: 次要文本颜色
 * - --color-primary: 主色调
 * - --color-primary-lighter: 主色调浅色
 * - --color-bg-tertiary: 三级背景色
 * - --color-border-secondary: 次要边框色
 * - --color-border-focus: 焦点边框色
 *
 * 间距变量：
 * - --padding-s: 小间距
 * - --padding-m: 中等间距
 * - --gap-xs: 极小间距
 * - --gap-m: 中等间距
 *
 * 字体变量：
 * - --font-content-s: 小号正文字体
 * - --font-content-m: 中等正文字体
 *
 * 动画变量：
 * - --transition-normal: 标准过渡时间
 * - --ease-out: 缓出动画函数
 *
 * 圆角变量：
 * - --radius-s: 小圆角
 * - --radius-full: 全圆角
 */
/**
 * 深色模式支持
 *
 * 组件自动支持深色模式：
 * 1. 自动检测系统主题偏好
 * 2. 支持手动切换主题（data-theme="dark"）
 * 3. 所有颜色变量自动适配深色模式
 * 4. 保持良好的对比度和可读性
 */
/**
 * 可访问性支持
 *
 * 组件提供完整的可访问性支持：
 * 1. 键盘导航：支持Tab键和Enter/Space键
 * 2. 语义化标签：使用nav和button角色
 * 3. ARIA属性：aria-current和aria-label
 * 4. 焦点管理：清晰的焦点指示器
 */
/**
 * 属性优先级说明：
 * 1. data属性是必需的，如果为空则组件不会渲染任何内容
 * 2. showIndicator为false时，indicatorStyle属性无效
 * 3. getContainer返回的元素必须支持scrollTo或scrollIntoView方法
 * 4. offsetTop通常用于有固定头部的情况，建议设置为头部高度
 * 5. onChange回调在锚点点击和自动滚动时都会触发
 * 6. 嵌套的children锚点项会继承父级的滚动行为配置
 * 7. 样式变量优先级：style > className > 默认样式
 * 8. 深色模式优先级：手动主题 > 系统主题 > 默认主题
 */ 
