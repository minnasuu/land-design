import { CSSProperties, ReactNode, HTMLAttributes, SyntheticEvent } from 'react';
/**
 * 图片填充模式
 * - cover: 覆盖容器，可能裁切（默认）
 * - contain: 包含在容器内，可能留白
 * - fill: 拉伸填充
 * - none: 原始尺寸
 * - scale-down: 取 none 和 contain 中较小的
 */
export type ImageFit = 'cover' | 'contain' | 'fill' | 'none' | 'scale-down';
/**
 * 图片位置
 */
export type ImagePosition = 'center' | 'top' | 'bottom' | 'left' | 'right' | 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
/**
 * 加载状态
 */
export type ImageLoadingStatus = 'idle' | 'loading' | 'success' | 'error';
/**
 * Image 组件属性
 */
export interface ImageProps {
    /**
     * 图片地址
     */
    src?: string;
    /**
     * 图片描述（无障碍）
     * @default ''
     */
    alt?: string;
    /**
     * 图片宽度
     */
    width?: number | string;
    /**
     * 图片高度
     */
    height?: number | string;
    /**
     * 图片填充模式
     * @default 'cover'
     */
    fit?: ImageFit;
    /**
     * 图片位置
     * @default 'center'
     */
    position?: ImagePosition;
    /**
     * 宽高比（如 16/9、4/3、1）
     * - 设置后会根据宽度自动计算高度
     */
    ratio?: number;
    /**
     * 圆角
     */
    radius?: number | string;
    /**
     * 是否为圆形
     * @default false
     */
    round?: boolean;
    /**
     * 是否懒加载
     * @default false
     */
    lazy?: boolean;
    /**
     * 预览图地址（低质量占位图）
     */
    preview?: string;
    /**
     * 兜底图片地址（主图加载失败时使用）
     */
    fallbackSrc?: string;
    /**
     * 兜底内容（fallbackSrc 也失败时显示）
     */
    fallback?: ReactNode;
    /**
     * 加载中占位内容
     */
    placeholder?: ReactNode;
    /**
     * 是否显示加载骨架屏
     * @default true
     */
    showSkeleton?: boolean;
    /**
     * 是否显示错误状态
     * @default true
     */
    showError?: boolean;
    /**
     * 加载成功回调
     */
    onLoad?: (e: SyntheticEvent<HTMLImageElement>) => void;
    /**
     * 加载失败回调
     */
    onError?: (e: SyntheticEvent<HTMLImageElement>) => void;
    /**
     * 点击回调
     */
    onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
    /**
     * 自定义类名
     */
    className?: string;
    /**
     * 自定义样式
     */
    style?: CSSProperties;
    /**
     * 图片元素自定义类名
     */
    imgClassName?: string;
    /**
     * 图片元素自定义样式
     */
    imgStyle?: CSSProperties;
    /**
     * 原生 HTML 属性透传
     */
    htmlProps?: HTMLAttributes<HTMLDivElement>;
    /**
     * 原生 img 属性透传
     */
    imgProps?: React.ImgHTMLAttributes<HTMLImageElement>;
}
export declare const defaultImageProps: Partial<ImageProps>;
