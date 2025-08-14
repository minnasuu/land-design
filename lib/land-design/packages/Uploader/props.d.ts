import { default as React, CSSProperties } from 'react';
import { CommonProps } from '../types';
/**
 * Uploader组件属性类型定义
 * 包含所有Uploader组件支持的属性及其详细说明
 */
/**
 * Uploader基础属性
 * 包含上传组件的基本配置和内容属性
 */
export interface UploaderBaseProps extends CommonProps {
    /**
     * 子元素
     * 可以传入React节点作为上传组件的内容
     */
    children?: React.ReactNode;
    /**
     * 上传文件描述
     * 显示在上传区域的描述文本
     */
    desc?: string;
}
/**
 * Uploader功能属性
 * 用于配置上传组件的功能特性
 */
export interface UploaderFeatureProps {
    /**
     * 文件类型
     * 限制上传文件的类型，如"image/*"、"application/pdf"等
     */
    fileType?: string;
}
/**
 * Uploader尺寸属性
 * 用于配置上传组件的尺寸
 */
export interface UploaderSizeProps {
    /**
     * 宽度
     * 设置上传组件的宽度
     */
    width?: string;
    /**
     * 高度
     * 设置上传组件的高度
     */
    height?: string;
}
/**
 * Uploader样式属性
 * 用于配置上传组件的视觉样式
 */
export interface UploaderStyleProps {
    /**
     * 自定义样式
     * 可以传入CSS样式对象来自定义上传组件外观
     */
    style?: CSSProperties;
    /**
     * 自定义类名
     * 可以传入额外的CSS类名
     */
    className?: string;
    /**
     * 内部类名
     * 为上传组件的内部元素添加自定义类名
     */
    innerClassName?: string;
}
/**
 * Uploader事件属性
 * 用于配置上传组件的交互事件
 */
export interface UploaderEventProps {
    /**
     * 上传事件
     * 当文件上传完成时触发
     * @param url 上传后的文件URL
     * @param file 上传的文件信息
     */
    onUpload?: (url: any, file: string) => void;
}
/**
 * Uploader组件完整属性类型
 * 合并了所有属性接口
 */
export type UploaderProps = UploaderBaseProps & UploaderFeatureProps & UploaderSizeProps & UploaderStyleProps & UploaderEventProps;
/**
 * 属性优先级说明：
 * 1. desc显示在上传区域的描述文本
 * 2. fileType限制上传文件的类型
 * 3. width和height控制上传组件的尺寸
 * 4. onUpload处理文件上传完成事件
 * 5. style和className会覆盖默认样式
 * 6. innerClassName为内部元素添加样式
 * 7. 当fileType为空时，允许所有类型的文件
 * 8. 组件支持拖拽和点击上传
 * 9. 上传成功后会自动调用onUpload回调
 * 10. 样式优先级：style > className > 默认样式
 */ 
