import React, { CSSProperties } from 'react';
import { CommonProps } from "../types";

/**
 * Audio组件属性类型定义
 * 包含所有Audio组件支持的属性及其详细说明
 */

// ==================== 基础类型定义 ====================

/** 音频布局方向 */
export type AudioDirection = "row" | "column";

/** 音频预加载策略 */
export type AudioPreload = 'none' | 'metadata' | 'auto';

/** 音频事件类型 */
export type AudioEventType =
  | 'play'
  | 'pause'
  | 'ended'
  | 'timeupdate'
  | 'volumechange'
  | 'loadstart'
  | 'loadeddata'
  | 'canplay'
  | 'error';

// ==================== 属性接口定义 ====================

/**
 * Audio主组件基础属性
 * 包含音频的基本配置和布局属性
 */
export interface AudioBaseProps {
  /** 
   * 音频文件URL
   * 支持本地文件路径或网络音频文件地址
   * 必填属性，用于指定要播放的音频文件
   */
  audioUrl: string;


  /** 
   * 是否显示波形
   * 设置为true时会显示音频波形可视化效果
   */
  showWave?: boolean;

  /** 
   * 波形类型
   * - bar: 柱状图波形
   * - line: 折线图波形
   */
  waveType?: 'bar' | 'line';

  /** 
   * 波形采样数量
   * 波形绘制的采样点数量
   */
  waveSampleCount?: number;

  /** 
   * 波形条形宽度
   * 波形中每个条形的宽度，单位为像素
   */
  waveBarWidth?: number;

  /** 
   * 波形条形间距
   * 波形中条形之间的间距，单位为像素
   */
  waveBarGap?: number;

  /** 
   * 波形默认颜色
   * 波形条形的默认颜色
   */
  waveDefaultColor?: string;

  /** 
   * 波形激活颜色
   * 当前播放位置对应的波形条形颜色
   */
  waveActiveColor?: string;

  /** 
   * 波形是否标准化
   * 设置为true时会对音频数据进行标准化处理
   */
  waveNormalize?: boolean;

  /** 
   * 波形是否放大
   * 设置为true时会对音频数据进行放大处理
   */
  waveAmplify?: boolean;

  /** 
   * 自定义样式
   * 可以传入CSS样式对象来自定义音频组件外观
   */
  style?: CSSProperties;

  /** 
   * 自定义类名
   * 可以传入额外的CSS类名
   */
  className?: string;

  /** 
   * 子元素
   * 可以传入React节点作为音频组件内容
   */
  children?: React.ReactNode;
}

/**
 * Audio主组件完整属性类型
 * 合并了基础属性和通用属性
 */
export type AudioProps = AudioBaseProps & CommonProps;

/**
 * AudioButton组件属性
 * 用于配置音频播放/暂停按钮
 */
export interface AudioButtonProps {
  /** 
   * 播放/暂停状态
   * - true: 正在播放状态
   * - false: 暂停状态
   */
  play?: boolean;

  /** 
   * 是否显示动画
   * 设置为true时播放按钮会显示动画效果
   */
  animation?: boolean;

  /** 
   * 图标大小
   * 播放按钮图标的尺寸，单位为像素
   */
  iconSize?: number;

  /** 
   * 图标颜色
   * 播放按钮图标的颜色，支持CSS颜色值
   */
  color?: string;

  /** 
   * 点击事件回调
   * 当播放按钮被点击时触发
   */
  onClick?: (e: React.MouseEvent) => void;

  /** 
   * 自定义样式
   * 可以传入CSS样式对象来自定义按钮外观
   */
  style?: CSSProperties;

  /** 
   * 自定义类名
   * 可以传入额外的CSS类名
   */
  className?: string;

  /** 
   * 子元素
   * 可以传入React节点作为按钮内容
   */
  children?: React.ReactNode;
}

/**
 * AudioAnimationIcon组件属性
 * 用于配置音频动画图标
 */
export interface AudioAnimationProps {
  /** 
   * 动画颜色
   * 动画图标的颜色，支持CSS颜色值
   */
  color?: string;

  /** 
   * 动画大小
   * 动画图标的尺寸，单位为像素
   */
  size?: number;
}

/**
 * AudioWave组件属性
 * 用于配置音频波形可视化
 */
export interface AudioWaveProps {
  /** 
   * 音频文件URL
   * 音频文件的地址，用于生成波形数据
   */
  audioUrl: string;

  /** 
   * 播放状态
   * - true: 正在播放
   * - false: 暂停状态
   */
  play?: boolean;

  /** 
   * 播放状态变化回调
   * 当播放状态改变时触发
   */
  onPlayChange?: (play: boolean) => void;

  /** 
   * Canvas元素引用
   * 用于绘制波形的Canvas元素
   */
  canvas?: HTMLCanvasElement;

  /** 
   * 音频元素引用
   * HTML Audio元素，用于获取音频信息
   */
  audio?: HTMLAudioElement;

  /** 
   * 波形数据
   * 预生成的波形数据数组
   */
  samples?: number[];

  /** 
   * 条形宽度
   * 波形中每个条形的宽度，单位为像素
   */
  barWidth?: number;

  /** 
   * 条形间距
   * 波形中条形之间的间距，单位为像素
   */
  barGap?: number;

  /** 
   * 默认颜色
   * 波形条形的默认颜色
   */
  defaultColor?: string;

  /** 
   * 激活颜色
   * 当前播放位置对应的波形条形颜色
   */
  activeColor?: string;

  /** 
   * 是否标准化数据
   * 设置为true时会对音频数据进行标准化处理
   */
  normalize?: boolean;

  /** 
   * 是否放大数据
   * 设置为true时会对音频数据进行放大处理
   */
  amplify?: boolean;

  /** 
   * 波形类型
   * - bar: 柱状图波形
   * - line: 折线图波形
   */
  type?: 'bar' | 'line';

  /** 
   * 采样数量
   * 波形绘制的采样点数量
   */
  sampleCount?: number;

  /** 
   * 自定义样式
   * 可以传入CSS样式对象来自定义波形外观
   */
  style?: CSSProperties;

  /** 
   * 自定义类名
   * 可以传入额外的CSS类名
   */
  className?: string;

  /** 
   * 子元素
   * 可以传入React节点作为波形内容
   */
  children?: React.ReactNode;
}

// ==================== 工具函数参数类型 ====================

/**
 * drawWave函数参数类型
 * 用于配置音频波形绘制
 */
export interface DrawWaveParams {
  /** 
   * 音频数据
   * 音频的原始数据数组，用于生成波形
   */
  data: number[];

  /** 
   * Canvas元素
   * 用于绘制波形的HTML Canvas元素
   */
  canvas: HTMLCanvasElement;

  /** 
   * 音频元素
   * HTML Audio元素，用于获取音频信息
   */
  audio: HTMLAudioElement;

  /** 
   * 采样数量
   * 波形绘制的采样点数量
   */
  samples: number;

  /** 
   * 条形宽度
   * 波形中每个条形的宽度，单位为像素
   */
  barWidth?: number;

  /** 
   * 条形间距
   * 波形中条形之间的间距，单位为像素
   */
  barGap?: number;

  /** 
   * 默认颜色
   * 波形条形的默认颜色
   */
  defaultColor?: string;

  /** 
   * 激活颜色
   * 当前播放位置对应的波形条形颜色
   */
  activeColor?: string;

  /** 
   * 是否标准化数据
   * 设置为true时会对音频数据进行标准化处理
   */
  normalize?: boolean;

  /** 
   * 是否放大数据
   * 设置为true时会对音频数据进行放大处理
   */
  amplify?: boolean;
}

/**
 * drawWaveform函数参数类型
 * 用于配置音频波形生成
 */
export interface DrawWaveformParams {
  /** 
   * 音频缓冲区
   * Web Audio API的AudioBuffer对象
   */
  buffer: AudioBuffer;

  /** 
   * 采样数量
   * 波形生成的采样点数量
   */
  samples: number;
}

/**
 * mapToNewRange函数参数类型
 * 用于数据范围映射
 */
export interface MapToNewRangeParams {
  /** 
   * 原数组
   * 需要进行范围映射的数值数组
   */
  arr: number[];

  /** 
   * 最小值
   * 映射后的最小值
   */
  min: number;

  /** 
   * 最大值
   * 映射后的最大值
   */
  max: number;
}

// ==================== 状态和配置类型 ====================

/**
 * 音频状态类型
 * 描述音频播放的当前状态
 */
export interface AudioState {
  /** 
   * 是否正在播放
   * 表示音频是否处于播放状态
   */
  isPlaying: boolean;

  /** 
   * 当前播放时间
   * 音频当前播放位置，单位为秒
   */
  currentTime: number;

  /** 
   * 总时长
   * 音频文件的总时长，单位为秒
   */
  duration: number;

  /** 
   * 音量
   * 音频播放音量，范围0-1
   */
  volume: number;

  /** 
   * 是否静音
   * 表示音频是否处于静音状态
   */
  muted: boolean;
}

/**
 * 音频配置选项
 * 用于配置音频播放的行为
 */
export interface AudioConfig {
  /** 
   * 是否自动播放
   * 设置为true时音频加载完成后会自动开始播放
   */
  autoplay?: boolean;

  /** 
   * 是否循环播放
   * 设置为true时音频播放结束后会自动重新开始
   */
  loop?: boolean;

  /** 
   * 初始音量
   * 音频的初始播放音量，范围0-1
   */
  volume?: number;

  /** 
   * 是否预加载
   * - none: 不预加载
   * - metadata: 只预加载元数据
   * - auto: 自动预加载
   */
  preload?: AudioPreload;

  /** 
   * 播放速率
   * 音频播放速度，1.0为正常速度
   */
  playbackRate?: number;
}

/**
 * 波形配置选项
 * 用于配置音频波形的显示效果
 */
export interface WaveformConfig {
  /** 
   * 波形颜色
   * 波形条形的默认颜色
   */
  color?: string;

  /** 
   * 激活颜色
   * 当前播放位置对应的波形条形颜色
   */
  activeColor?: string;

  /** 
   * 条形宽度
   * 波形中每个条形的宽度，单位为像素
   */
  barWidth?: number;

  /** 
   * 条形间距
   * 波形中条形之间的间距，单位为像素
   */
  barGap?: number;

  /** 
   * 采样数量
   * 波形绘制的采样点数量
   */
  samples?: number;

  /** 
   * 是否标准化
   * 设置为true时会对音频数据进行标准化处理
   */
  normalize?: boolean;

  /** 
   * 是否放大
   * 设置为true时会对音频数据进行放大处理
   */
  amplify?: boolean;
}

/**
 * 属性优先级说明：
 * 1. audioUrl为必填属性，其他属性均为可选
 * 2. direction默认为"row"，showWave默认为false
 * 3. AudioButton的play属性控制播放状态，animation控制动画效果
 * 4. 样式属性优先级：style > className > 默认样式
 * 5. 事件回调会覆盖默认的音频控制行为
 */
