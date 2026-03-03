import { default as React, CSSProperties } from 'react';
/**
 * 音频播放状态
 */
export type AudioStatus = 'idle' | 'loading' | 'playing' | 'paused' | 'ended' | 'error';
/**
 * 音频预加载策略
 */
export type AudioPreload = 'none' | 'metadata' | 'auto';
/**
 * 波形类型
 */
export type WaveType = 'bar' | 'line';
/**
 * 音频事件数据
 */
export interface AudioEventData {
    /** 当前播放时间 (秒) */
    currentTime: number;
    /** 总时长 (秒) */
    duration: number;
    /** 播放进度 (0-1) */
    progress: number;
    /** 音量 (0-100) */
    volume: number;
    /** 是否静音 */
    muted: boolean;
    /** 播放速率 */
    playbackRate: number;
    /** 播放状态 */
    status: AudioStatus;
}
export interface AudioProps {
    /** 音频文件地址 */
    src: string;
    /** 音频标题 */
    title?: string;
    /** 音频封面图 */
    cover?: string;
    /** 是否自动播放 */
    autoPlay?: boolean;
    /** 是否循环播放 */
    loop?: boolean;
    /** 是否静音 */
    muted?: boolean;
    /** 初始音量 (0-100) */
    volume?: number;
    /** 播放速率 */
    playbackRate?: number;
    /** 预加载策略 */
    preload?: AudioPreload;
    /** 是否显示播放按钮 */
    showPlayButton?: boolean;
    /** 是否显示进度条 */
    showProgress?: boolean;
    /** 是否显示时间 */
    showTime?: boolean;
    /** 是否显示音量控制 */
    showVolume?: boolean;
    /** 是否显示波形 */
    showWave?: boolean;
    /** 波形类型 */
    waveType?: WaveType;
    /** 波形采样数量 */
    waveSampleCount?: number;
    /** 波形条形宽度 */
    waveBarWidth?: number;
    /** 波形条形间距 */
    waveBarGap?: number;
    /** 波形默认颜色 */
    waveDefaultColor?: string;
    /** 波形激活颜色 */
    waveActiveColor?: string;
    /** 是否标准化波形 */
    waveNormalize?: boolean;
    /** 是否放大波形 */
    waveAmplify?: boolean;
    /** 波形高度 */
    waveHeight?: number;
    /** 播放事件 */
    onPlay?: (data: AudioEventData) => void;
    /** 暂停事件 */
    onPause?: (data: AudioEventData) => void;
    /** 播放结束事件 */
    onEnded?: (data: AudioEventData) => void;
    /** 时间更新事件 */
    onTimeUpdate?: (data: AudioEventData) => void;
    /** 音量变化事件 */
    onVolumeChange?: (volume: number, muted: boolean) => void;
    /** 进度条跳转事件 */
    onSeek?: (time: number) => void;
    /** 加载完成事件 */
    onLoaded?: (data: AudioEventData) => void;
    /** 加载错误事件 */
    onError?: (error: Error) => void;
    /** 状态变化事件 */
    onStatusChange?: (status: AudioStatus) => void;
    /** 自定义类名 */
    className?: string;
    /** 自定义样式 */
    style?: CSSProperties;
    /** 进度条激活颜色 */
    progressColor?: string;
    /** 子元素 */
    children?: React.ReactNode;
}
export interface AudioButtonProps {
    /** 是否正在播放 */
    playing?: boolean;
    /** 按钮尺寸 */
    size?: number | 'small' | 'medium' | 'large';
    /** 按钮颜色 */
    color?: string;
    /** 是否禁用 */
    disabled?: boolean;
    /** 是否显示动画图标 */
    animated?: boolean;
    /** 是否加载中 */
    loading?: boolean;
    /** 点击事件 */
    onClick?: (e: React.MouseEvent) => void;
    /** 自定义类名 */
    className?: string;
    /** 自定义样式 */
    style?: CSSProperties;
}
export interface AudioProgressProps {
    /** 当前进度 (0-1) */
    progress?: number;
    /** 缓冲进度 (0-1) */
    buffered?: number;
    /** 激活颜色 */
    activeColor?: string;
    /** 是否禁用 */
    disabled?: boolean;
    /** 进度变化回调 */
    onChange?: (progress: number) => void;
    /** 拖拽开始回调 */
    onDragStart?: () => void;
    /** 拖拽结束回调 */
    onDragEnd?: () => void;
    /** 自定义类名 */
    className?: string;
    /** 自定义样式 */
    style?: CSSProperties;
}
export interface AudioWaveProps {
    /** 音频文件地址 */
    src: string;
    /** 外部音频元素引用 */
    audioRef?: React.RefObject<HTMLAudioElement>;
    /** 是否正在播放 */
    playing?: boolean;
    /** 当前播放时间 */
    currentTime?: number;
    /** 总时长 */
    duration?: number;
    /** 波形类型 */
    type?: WaveType;
    /** 采样数量 */
    sampleCount?: number;
    /** 条形宽度 */
    barWidth?: number;
    /** 条形间距 */
    barGap?: number;
    /** 默认颜色 */
    defaultColor?: string;
    /** 激活颜色 */
    activeColor?: string;
    /** 是否标准化 */
    normalize?: boolean;
    /** 是否放大 */
    amplify?: boolean;
    /** 波形高度 */
    height?: number;
    /** 播放状态变化回调 */
    onPlayChange?: (playing: boolean) => void;
    /** 进度点击回调 */
    onSeek?: (progress: number) => void;
    /** 自定义类名 */
    className?: string;
    /** 自定义样式 */
    style?: CSSProperties;
}
export interface AudioAnimationIconProps {
    /** 动画颜色 */
    color?: string;
    /** 动画大小 */
    size?: number;
    /** 是否播放动画 */
    playing?: boolean;
    /** 条形数量 */
    barCount?: number;
    /** 动画速度 (秒) */
    speed?: number;
    /** 自定义类名 */
    className?: string;
    /** 自定义样式 */
    style?: CSSProperties;
}
/**
 * 波形数据生成参数
 */
export interface WaveformGeneratorParams {
    /** 音频缓冲区 */
    buffer: AudioBuffer;
    /** 采样数量 */
    samples: number;
}
/**
 * 波形绘制参数
 */
export interface WaveDrawParams {
    /** 波形数据 */
    data: number[];
    /** Canvas 元素 */
    canvas: HTMLCanvasElement;
    /** 播放进度 (0-1) */
    progress: number;
    /** 条形宽度 */
    barWidth: number;
    /** 条形间距 */
    barGap: number;
    /** 默认颜色 */
    defaultColor: string;
    /** 激活颜色 */
    activeColor: string;
    /** 是否标准化 */
    normalize: boolean;
    /** 是否放大 */
    amplify: boolean;
}
/** 默认波形采样数量 */
export declare const DEFAULT_WAVE_SAMPLE_COUNT = 100;
/** 默认波形条形宽度 */
export declare const DEFAULT_WAVE_BAR_WIDTH = 2;
/** 默认波形条形间距 */
export declare const DEFAULT_WAVE_BAR_GAP = 1;
/** 默认波形高度 */
export declare const DEFAULT_WAVE_HEIGHT = 48;
/** 默认音量 */
export declare const DEFAULT_VOLUME = 100;
/** 按钮尺寸映射 */
export declare const BUTTON_SIZE_MAP: {
    readonly small: 24;
    readonly medium: 32;
    readonly large: 40;
};
