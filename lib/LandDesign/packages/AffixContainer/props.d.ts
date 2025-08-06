import { default as React, CSSProperties, ReactNode } from 'react';
/**
 * AffixContainer组件属性类型定义
 * 包含所有AffixContainer组件支持的属性及其详细说明
 */
/** 图钉显示模式 */
export type AffixDisplayMode = "always" | "hoverShow" | "hoverHide";
/**
 * 图钉项基础属性
 * 包含单个图钉的基本配置和交互属性
 */
export interface AffixItemBaseProps {
    /**
     * 图钉内容
     * 可以传入React节点作为图钉显示内容
     */
    content?: ReactNode;
    /**
     * 图钉距离容器边距
     * 设置图钉到容器边缘的距离，支持数字（像素）
     * 默认值：8
     */
    gap?: number;
    /**
     * 图钉层级
     * 设置图钉的z-index值，控制显示层级
     * 默认值：2
     */
    zIndex?: number;
    /**
     * 自定义样式
     * 可以传入CSS样式对象来自定义图钉外观
     */
    style?: CSSProperties;
    /**
     * 自定义类名
     * 可以传入额外的CSS类名
     */
    className?: string;
    /**
     * 点击事件回调
     * 当图钉被点击时触发
     */
    onClick?: (e: React.MouseEvent) => void;
}
/**
 * 图钉位置属性
 * 用于配置图钉的自定义位置
 */
export interface AffixItemPositionProps {
    /**
     * 图钉左侧位置
     * 当使用customOption时，可以自定义图钉的左侧位置
     * 支持数字（像素）或字符串（CSS值）
     */
    left?: number | string;
    /**
     * 图钉顶部位置
     * 当使用customOption时，可以自定义图钉的顶部位置
     * 支持数字（像素）或字符串（CSS值）
     */
    top?: number | string;
    /**
     * 图钉右侧位置
     * 当使用customOption时，可以自定义图钉的右侧位置
     * 支持数字（像素）或字符串（CSS值）
     */
    right?: number | string;
    /**
     * 图钉底部位置
     * 当使用customOption时，可以自定义图钉的底部位置
     * 支持数字（像素）或字符串（CSS值）
     */
    bottom?: number | string;
}
/**
 * 图钉交互属性
 * 用于配置图钉的显示和隐藏行为
 */
export interface AffixItemInteractionProps {
    /**
     * 悬停时显示
     * 设置为true时，鼠标悬停在容器上时图钉才会显示
     */
    hoverShow?: boolean;
    /**
     * 悬停时隐藏
     * 设置为true时，鼠标悬停在容器上时图钉会隐藏
     */
    hoverHide?: boolean;
    /**
     * 显示动画
     * 当hoverShow为true时，可以设置图钉显示的动画效果
     * 支持CSS动画字符串
     */
    showAnimation?: string;
}
/**
 * 图钉项完整属性类型
 * 合并了所有图钉项属性接口
 */
export type AffixContainerItemProps = AffixItemBaseProps & AffixItemPositionProps & AffixItemInteractionProps;
/**
 * 容器基础属性
 * 包含AffixContainer的基本配置和交互属性
 */
export interface AffixContainerBaseProps {
    /**
     * 是否禁用容器
     * 禁用后容器及其图钉不可交互
     */
    disabled?: boolean;
    /**
     * 容器点击事件回调
     * 当容器被点击时触发
     */
    onClick?: (e: React.MouseEvent) => void;
    /**
     * 子元素
     * 可以传入React节点作为容器内容
     */
    children?: ReactNode;
    /**
     * 自定义样式
     * 可以传入CSS样式对象来自定义容器外观
     */
    style?: CSSProperties;
    /**
     * 自定义类名
     * 可以传入额外的CSS类名
     */
    className?: string;
}
/**
 * 图钉位置配置属性
 * 用于配置不同位置的图钉
 */
export interface AffixContainerPositionProps {
    /**
     * 左上角图钉配置
     * 配置容器左上角的图钉
     */
    ltOption?: AffixContainerItemProps;
    /**
     * 右上角图钉配置
     * 配置容器右上角的图钉
     */
    rtOption?: AffixContainerItemProps;
    /**
     * 右上角第二个图钉配置
     * 配置容器右上角的第二个图钉（用于多个图钉的场景）
     */
    rtOption2?: AffixContainerItemProps;
    /**
     * 左下角图钉配置
     * 配置容器左下角的图钉
     */
    lbOption?: AffixContainerItemProps;
    /**
     * 右下角图钉配置
     * 配置容器右下角的图钉
     */
    rbOption?: AffixContainerItemProps;
    /**
     * 左边中间图钉配置
     * 配置容器左边中间的图钉
     */
    lcOption?: AffixContainerItemProps;
    /**
     * 右边中间图钉配置
     * 配置容器右边中间的图钉
     */
    rcOption?: AffixContainerItemProps;
    /**
     * 顶部中间图钉配置
     * 配置容器顶部中间的图钉
     */
    tcOption?: AffixContainerItemProps;
    /**
     * 底部中间图钉配置
     * 配置容器底部中间的图钉
     */
    bcOption?: AffixContainerItemProps;
    /**
     * 中心图钉配置
     * 配置容器中心的图钉
     */
    centerOption?: AffixContainerItemProps;
    /**
     * 自定义位置图钉配置
     * 配置自定义位置的图钉，需要配合left、top等位置属性使用
     */
    customOption?: AffixContainerItemProps;
}
/**
 * AffixContainer组件完整属性类型
 * 合并了所有属性接口
 */
export type AffixContainerProps = AffixContainerBaseProps & AffixContainerPositionProps & {
    /**
     * 扩展属性
     * 支持传入其他HTML div元素的属性
     */
    [key: string]: any;
};
