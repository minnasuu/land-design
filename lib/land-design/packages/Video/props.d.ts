import { default as React, CSSProperties } from 'react';
import { CommonProps } from '../types';
/**
 * 视频填充模式
 */
export type VideoFit = 'cover' | 'contain' | 'fill' | 'none' | 'scale-down';
/**
 * 视频预加载策略
 */
export type VideoPreload = 'auto' | 'metadata' | 'none';
/**
 * 视频播放状态
 */
export type VideoStatus = 'idle' | 'loading' | 'playing' | 'paused' | 'ended' | 'error' | 'buffering';
/**
 * 播放速率配置
 */
export interface VideoRateOption {
    /** 显示标签 */
    label: string;
    /** 播放速率值 */
    value: number;
}
/**
 * 视频事件数据
 */
export interface VideoEventData {
    /** 当前播放时间 (秒) */
    currentTime: number;
    /** 总时长 (秒) */
    duration: number;
    /** 缓冲进度 (0-1) */
    buffered: number;
    /** 音量 (0-100) */
    volume: number;
    /** 是否静音 */
    muted: boolean;
    /** 播放速率 */
    playbackRate: number;
    /** 播放状态 */
    status: VideoStatus;
}
export interface VideoProps extends CommonProps {
    /** 子元素，用于自定义叠加内容 */
    children?: React.ReactNode;
    /** 视频地址 */
    src?: string;
    /** 视频封面图 */
    poster?: string;
    /** 视频的 MIME 类型 */
    type?: string;
    /** 视频宽度 */
    width?: number | string;
    /** 视频高度 */
    height?: number | string;
    /** 宽高比 (如 16/9) */
    ratio?: number | string;
    /** 圆角 */
    radius?: number | string;
    /** 填充模式 */
    fit?: VideoFit;
    /** 是否自动播放 */
    autoPlay?: boolean;
    /** 是否循环播放 */
    loop?: boolean;
    /** 是否静音 */
    muted?: boolean;
    /** 初始音量 (0-100) */
    volume?: number;
    /** 初始播放速率 */
    playbackRate?: number;
    /** 预加载策略 */
    preload?: VideoPreload;
    /** 可选播放速率列表 */
    rateOptions?: VideoRateOption[];
    /** 是否显示控制栏 */
    controls?: boolean;
    /** 是否显示播放/暂停按钮 */
    showPlayButton?: boolean;
    /** 是否显示进度条 */
    showProgress?: boolean;
    /** 是否显示时间显示 */
    showTime?: boolean;
    /** 是否显示音量控制 */
    showVolume?: boolean;
    /** 是否显示倍速设置 */
    showRate?: boolean;
    /** 是否显示画中画按钮 */
    showPip?: boolean;
    /** 是否显示网页全屏按钮 */
    showWebFullscreen?: boolean;
    /** 是否显示全屏按钮 */
    showFullscreen?: boolean;
    /** 是否显示循环播放开关 */
    showLoop?: boolean;
    /** 是否显示设置按钮 */
    showSettings?: boolean;
    /** 是否启用关键帧预览 */
    previewEnabled?: boolean;
    /** 预览图宽度 */
    previewWidth?: number;
    /** 是否启用键盘快捷键 */
    keyboard?: boolean;
    /** 快进/快退秒数 */
    seekStep?: number;
    /** 音量调节步长 */
    volumeStep?: number;
    /** 是否显示上一集按钮 */
    showPrev?: boolean;
    /** 是否显示下一集按钮 */
    showNext?: boolean;
    /** 上一集是否禁用 */
    prevDisabled?: boolean;
    /** 下一集是否禁用 */
    nextDisabled?: boolean;
    /** 播放事件 */
    onPlay?: (data: VideoEventData) => void;
    /** 暂停事件 */
    onPause?: (data: VideoEventData) => void;
    /** 播放结束事件 */
    onEnded?: (data: VideoEventData) => void;
    /** 时间更新事件 */
    onTimeUpdate?: (data: VideoEventData) => void;
    /** 音量变化事件 */
    onVolumeChange?: (volume: number, muted: boolean) => void;
    /** 播放速率变化事件 */
    onRateChange?: (rate: number) => void;
    /** 进入全屏事件 */
    onFullscreenEnter?: () => void;
    /** 退出全屏事件 */
    onFullscreenExit?: () => void;
    /** 网页全屏变化事件 */
    onWebFullscreenChange?: (isWebFullscreen: boolean) => void;
    /** 加载完成事件 */
    onLoaded?: (data: VideoEventData) => void;
    /** 加载错误事件 */
    onError?: (error: Error) => void;
    /** 缓冲中事件 */
    onWaiting?: () => void;
    /** 可以播放事件 */
    onCanPlay?: () => void;
    /** 进度条跳转事件 */
    onSeek?: (time: number) => void;
    /** 上一集点击事件 */
    onPrevClick?: () => void;
    /** 下一集点击事件 */
    onNextClick?: () => void;
    /** 画中画进入事件 */
    onPipEnter?: () => void;
    /** 画中画退出事件 */
    onPipExit?: () => void;
    /** 视频元素自定义类名 */
    videoClassName?: string;
    /** 视频元素自定义样式 */
    videoStyle?: CSSProperties;
    /** 控制栏自定义类名 */
    controlsClassName?: string;
    /** 控制栏自定义样式 */
    controlsStyle?: CSSProperties;
    /** 进度条激活颜色 */
    progressColor?: string;
    /** 透传给 video 元素的原生属性 */
    videoProps?: React.VideoHTMLAttributes<HTMLVideoElement>;
}
export interface VideoProgressBarProps {
    /** 当前进度 (0-1) */
    progress?: number;
    /** 缓冲进度 (0-1) */
    buffered?: number;
    /** 激活颜色 */
    activeColor?: string;
    /** 缓冲颜色 */
    bufferedColor?: string;
    /** 是否禁用 */
    disabled?: boolean;
    /** 进度条点击/拖拽事件 */
    onChange?: (progress: number) => void;
    /** 鼠标进入事件 */
    onMouseEnter?: (progress: number, clientX: number, width: number) => void;
    /** 鼠标移动事件 */
    onMouseMove?: (progress: number, clientX: number, width: number) => void;
    /** 鼠标离开事件 */
    onMouseLeave?: () => void;
    /** 拖拽开始事件 */
    onDragStart?: () => void;
    /** 拖拽结束事件 */
    onDragEnd?: () => void;
    /**
     * 外部拖拽状态 (用于视频区域热区扩展)
     * 当拖动在视频区域内继续时，父组件控制此状态
     */
    isExternalDragging?: boolean;
}
export interface VideoSettingProps {
    /** 可选播放速率列表 */
    rateOptions?: VideoRateOption[];
    /** 当前播放速率 */
    currentRate?: number;
    /** 播放速率变化回调 */
    onRateChange?: (rate: number) => void;
    /** 是否循环播放 */
    loop?: boolean;
    /** 循环播放变化回调 */
    onLoopChange?: (loop: boolean) => void;
}
/** 默认播放速率选项 */
export declare const DEFAULT_RATE_OPTIONS: VideoRateOption[];
/** 默认快进/快退秒数 */
export declare const DEFAULT_SEEK_STEP = 5;
/** 默认音量调节步长 */
export declare const DEFAULT_VOLUME_STEP = 10;
/** 默认预览图宽度 */
export declare const DEFAULT_PREVIEW_WIDTH = 160;
