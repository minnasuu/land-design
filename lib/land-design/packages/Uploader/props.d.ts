import { default as React, CSSProperties } from 'react';
import { CommonProps } from '../types';
/**
 * 上传文件信息接口
 */
export interface UploadFile {
    /** 文件唯一标识 */
    uid: string;
    /** 文件名 */
    name: string;
    /** 文件大小（字节） */
    size: number;
    /** 文件类型 */
    type: string;
    /** 文件状态 */
    status: "uploading" | "done" | "error" | "removed";
    /** 上传进度（0-100） */
    percent?: number;
    /** 文件预览 URL */
    url?: string;
    /** 缩略图 URL */
    thumbUrl?: string;
    /** 原始文件对象 */
    originFile?: File;
    /** 错误信息 */
    error?: string;
    /** 服务器响应 */
    response?: any;
}
/**
 * 上传区域变体类型
 * - dragger: 拖拽区域（默认）
 * - button: 按钮样式
 * - picture: 图片墙样式
 * - avatar: 头像上传样式
 */
export type UploaderVariant = "dragger" | "button" | "picture" | "avatar";
/**
 * 文件列表显示类型
 * - text: 文本列表
 * - picture: 图片列表
 * - picture-card: 卡片式图片列表
 */
export type FileListType = "text" | "picture" | "picture-card";
/**
 * Uploader 基础属性
 */
export interface UploaderBaseProps extends CommonProps {
    /**
     * 子元素（自定义上传区域内容）
     */
    children?: React.ReactNode;
    /**
     * 上传区域变体
     * @default "dragger"
     */
    variant?: UploaderVariant;
    /**
     * 是否禁用
     * @default false
     */
    disabled?: boolean;
    /**
     * 是否只读（显示文件但不可操作）
     * @default false
     */
    readOnly?: boolean;
    /**
     * 表单字段名
     */
    name?: string;
}
/**
 * Uploader 上传配置属性
 */
export interface UploaderConfigProps {
    /**
     * 接受的文件类型（MIME 类型或文件扩展名）
     * @example "image/*" | ".jpg,.png" | "image/png,image/jpeg"
     */
    accept?: string;
    /**
     * 是否支持多文件上传
     * @default false
     */
    multiple?: boolean;
    /**
     * 是否支持目录上传
     * @default false
     */
    directory?: boolean;
    /**
     * 最大文件数量（multiple 为 true 时有效）
     */
    maxCount?: number;
    /**
     * 单文件最大大小（字节）
     */
    maxSize?: number;
    /**
     * 上传地址（不传则使用本地预览模式）
     */
    action?: string;
    /**
     * 上传请求的 HTTP 方法
     * @default "POST"
     */
    method?: "POST" | "PUT" | "PATCH";
    /**
     * 上传请求的额外 headers
     */
    headers?: Record<string, string>;
    /**
     * 上传请求的额外参数
     */
    data?: Record<string, any> | ((file: UploadFile) => Record<string, any>);
    /**
     * 上传请求是否携带 cookie
     * @default false
     */
    withCredentials?: boolean;
    /**
     * 是否开启拖拽上传
     * @default true
     */
    draggable?: boolean;
}
/**
 * Uploader 显示配置属性
 */
export interface UploaderDisplayProps {
    /**
     * 上传区域标题/描述
     */
    title?: React.ReactNode;
    /**
     * 上传提示文案
     */
    hint?: React.ReactNode;
    /**
     * 拖拽时的提示文案
     * @default "释放文件即可上传"
     */
    dropHint?: React.ReactNode;
    /**
     * 上传中的提示文案
     * @default "上传中..."
     */
    uploadingHint?: React.ReactNode;
    /**
     * 上传区域图标
     */
    icon?: React.ReactNode;
    /**
     * 是否显示文件列表
     * @default true
     */
    showFileList?: boolean;
    /**
     * 文件列表显示类型
     * @default "text"
     */
    listType?: FileListType;
    /**
     * 是否显示上传进度
     * @default true
     */
    showProgress?: boolean;
    /**
     * 是否显示删除按钮
     * @default true
     */
    showRemoveButton?: boolean;
    /**
     * 是否显示预览按钮（图片类型）
     * @default true
     */
    showPreviewButton?: boolean;
}
/**
 * Uploader 样式属性
 */
export interface UploaderStyleProps {
    /**
     * 自定义样式
     */
    style?: CSSProperties;
    /**
     * 自定义类名
     */
    className?: string;
    /**
     * 上传区域宽度
     */
    width?: string | number;
    /**
     * 上传区域高度
     */
    height?: string | number;
    /**
     * 上传区域样式
     */
    dropzoneStyle?: CSSProperties;
    /**
     * 上传区域类名
     */
    dropzoneClassName?: string;
    /**
     * 文件列表样式
     */
    fileListStyle?: CSSProperties;
    /**
     * 文件列表类名
     */
    fileListClassName?: string;
}
/**
 * Uploader 事件属性
 */
export interface UploaderEventProps {
    /**
     * 文件状态变化回调（核心回调）
     * @param file 当前变化的文件
     * @param fileList 所有文件列表
     */
    onChange?: (file: UploadFile, fileList: UploadFile[]) => void;
    /**
     * 文件选择前回调（返回 false 或 Promise.reject 阻止上传）
     * @param file 待上传的文件
     * @param fileList 已有文件列表
     * @returns 返回 false 阻止上传，返回新 File 替换原文件
     */
    beforeUpload?: (file: File, fileList: File[]) => boolean | File | Promise<boolean | File>;
    /**
     * 上传进度回调
     * @param percent 上传百分比
     * @param file 当前上传的文件
     */
    onProgress?: (percent: number, file: UploadFile) => void;
    /**
     * 上传成功回调
     * @param response 服务器响应
     * @param file 上传的文件
     */
    onSuccess?: (response: any, file: UploadFile) => void;
    /**
     * 上传失败回调
     * @param error 错误信息
     * @param file 上传的文件
     */
    onError?: (error: Error, file: UploadFile) => void;
    /**
     * 文件删除回调
     * @param file 被删除的文件
     */
    onRemove?: (file: UploadFile) => void | boolean | Promise<boolean>;
    /**
     * 文件预览回调
     * @param file 要预览的文件
     */
    onPreview?: (file: UploadFile) => void;
    /**
     * 拖拽进入回调
     */
    onDragEnter?: (e: React.DragEvent<HTMLDivElement>) => void;
    /**
     * 拖拽离开回调
     */
    onDragLeave?: (e: React.DragEvent<HTMLDivElement>) => void;
    /**
     * 文件放置回调
     */
    onDrop?: (e: React.DragEvent<HTMLDivElement>) => void;
    /**
     * 超出最大数量回调
     * @param files 被拒绝的文件列表
     */
    onExceed?: (files: File[]) => void;
}
/**
 * Uploader 文件列表控制属性
 */
export interface UploaderFileListProps {
    /**
     * 文件列表（受控）
     */
    fileList?: UploadFile[];
    /**
     * 默认文件列表（非受控）
     */
    defaultFileList?: UploadFile[];
}
/**
 * Uploader 组件完整属性类型
 */
export type UploaderProps = UploaderBaseProps & UploaderConfigProps & UploaderDisplayProps & UploaderStyleProps & UploaderEventProps & UploaderFileListProps;
export declare const defaultUploaderProps: {
    variant: UploaderVariant;
    disabled: boolean;
    readOnly: boolean;
    multiple: boolean;
    directory: boolean;
    method: "POST";
    withCredentials: boolean;
    draggable: boolean;
    dropHint: string;
    uploadingHint: string;
    showFileList: boolean;
    listType: FileListType;
    showProgress: boolean;
    showRemoveButton: boolean;
    showPreviewButton: boolean;
};
/**
 * 生成文件唯一 ID
 */
export declare function generateUid(): string;
/**
 * 将 File 对象转换为 UploadFile
 */
export declare function fileToUploadFile(file: File): UploadFile;
/**
 * 格式化文件大小
 */
export declare function formatFileSize(bytes: number): string;
/**
 * 检查文件类型是否符合 accept
 */
export declare function isAcceptFile(file: File, accept?: string): boolean;
/**
 * 判断文件是否为图片
 */
export declare function isImageFile(file: UploadFile | File): boolean;
/**
 * 属性优先级说明：
 *
 * 1. fileList 和 onChange 配合使用实现受控模式
 * 2. defaultFileList 用于非受控模式的初始值
 * 3. beforeUpload 返回 false 可阻止上传
 * 4. action 不传则使用本地预览模式（不实际上传）
 * 5. accept 支持 MIME 类型和文件扩展名
 * 6. maxCount 配合 multiple 使用限制文件数量
 * 7. maxSize 用于单文件大小限制
 * 8. variant 决定组件的展示形态
 * 9. listType 决定文件列表的展示方式
 */
