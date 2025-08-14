import { default as React, CSSProperties, MouseEvent } from 'react';
import { CommonProps } from '../types';
/**
 * Video组件属性类型定义
 * 包含所有Video组件支持的属性及其详细说明
 */
/**
 * VideoRateData视频倍速数据类型
 * 定义视频倍速的配置信息
 */
export type VideoRateData = {
    /**
     * 键值
     * 倍速的唯一标识
     */
    key: number;
    /**
     * 值
     * 倍速的数值
     */
    value: number;
};
/**
 * Video基础属性
 * 包含视频的基本配置和内容属性
 */
export interface VideoBaseProps extends CommonProps {
    /**
     * 子元素
     * 可以传入React节点作为视频的内容
     */
    children?: React.ReactNode;
    /**
     * 视频地址
     * 视频文件的URL地址
     */
    src?: string;
}
/**
 * Video功能属性
 * 用于配置视频的功能特性
 */
export interface VideoFeatureProps {
    /**
     * 后退或快进的秒数单位
     * 设置快进快退的时间间隔
     */
    forwardSecond?: number;
    /**
     * 是否显示实时帧
     * 设置为true时会显示实时帧预览
     */
    useKeyImg?: boolean;
    /**
     * 是否开启键盘控制
     * 设置为true时支持键盘快捷键控制
     */
    useKeyControls?: boolean;
    /**
     * 是否显示底部控件
     * 设置为true时会显示视频控制栏
     */
    showControls?: boolean;
    /**
     * 是否自动播放
     * 设置为true时会自动播放
     */
    autoPlay?: boolean;
}
/**
 * Video剧集属性
 * 用于配置视频的剧集功能
 */
export interface VideoEpisodeProps {
    /**
     * 显示上集切换按钮
     * 设置为true时会显示上一集按钮
     */
    usePrevEpisode?: boolean;
    /**
     * 显示下集切换按钮
     * 设置为true时会显示下一集按钮
     */
    useNextEpisode?: boolean;
    /**
     * 上一集点击事件
     * 当上一集按钮被点击时触发
     */
    onPrevEpisodeClick?: () => void;
    /**
     * 下一集点击事件
     * 当下一集按钮被点击时触发
     */
    onNextEpisodeClick?: () => void;
}
/**
 * Video样式属性
 * 用于配置视频的视觉样式
 */
export interface VideoStyleProps {
    /**
     * 视频比例
     * 设置视频的宽高比，如16/9表示16:9的比例
     */
    ratio?: string;
    /**
     * 视频圆角
     * 设置视频的圆角
     */
    radius?: string;
    /**
     * 自定义样式
     * 可以传入CSS样式对象来自定义视频容器外观
     */
    style?: CSSProperties;
    /**
     * 自定义类名
     * 可以传入额外的CSS类名
     */
    className?: string;
    /**
     * 视频类名
     * 为视频元素添加自定义类名
     */
    videoClassName?: string;
    /**
     * 视频样式
     * 为视频元素添加自定义样式
     */
    videoStyle?: CSSProperties;
}
/**
 * Video事件属性
 * 用于配置视频的交互事件
 */
export interface VideoEventProps {
    /**
     * 网页宽屏变化事件
     * 当视频进入或退出全屏时触发
     * @param fullWidth 是否为全屏状态
     */
    onFullWidthChange?: (fullWidth: boolean) => void;
}
/**
 * Video组件完整属性类型
 * 合并了所有属性接口
 */
export type VideoProps = VideoBaseProps & VideoFeatureProps & VideoEpisodeProps & VideoStyleProps & VideoEventProps;
/**
 * VideoProgressBar进度条组件属性类型
 * 用于视频进度条的配置
 */
export interface VideoProgressBarProps {
    /**
     * 当前进度百分比
     * 视频播放的当前进度，范围0-100
     */
    curPercentage?: number;
    /**
     * 当前预加载进度
     * 视频缓冲的进度，范围0-100
     */
    bufferPercentage?: number;
    /**
     * 自定义样式
     * 进度条激活状态的背景颜色
     */
    activeBg?: string;
    /**
     * 进度条点击事件
     * 当进度条被点击时触发
     * @param value 点击位置的进度值
     * @param e 事件对象
     */
    onClick?: (value: number, e: MouseEvent) => void;
    /**
     * 进度条移动事件
     * 当鼠标在进度条上移动时触发
     * @param value 当前位置的进度值
     * @param left 鼠标距离左边的距离
     * @param width 进度条的总宽度
     * @param e 事件对象
     */
    onMove?: (value: number, left: number, width: number, e: MouseEvent) => void;
    /**
     * 鼠标进入事件
     * 当鼠标进入进度条时触发
     * @param e 事件对象
     */
    onMouseEnter?: (value: number, left: number, width: number, e: MouseEvent) => void;
    /**
     * 鼠标离开事件
     * 当鼠标离开进度条时触发
     * @param e 事件对象
     */
    onMouseLeave?: (e: MouseEvent) => void;
    /**
     * 拖拽开始事件
     * 当开始拖拽进度条时触发
     */
    onDragStart?: () => void;
    /**
     * 拖拽结束事件
     * 当结束拖拽进度条时触发
     */
    onDragEnd?: () => void;
}
/**
 * VideoSetting设置组件属性类型
 * 用于视频设置的配置
 */
export interface VideoSettingProps {
    /**
     * 倍数播放数据
     * 可选择的播放倍速选项
     */
    rateData?: VideoRateData[];
    /**
     * 倍数播放值
     * 当前选择的播放倍速
     */
    rateValue?: number;
    /**
     * 倍数播放事件
     * 当播放倍速发生变化时触发
     * @param val 新的倍速值
     * @param item 被选择的倍速选项
     * @param e 事件对象
     */
    onRateChange?: (val: number, item: VideoRateData, e: MouseEvent) => void;
    /**
     * 自动循环
     * 设置为true时视频会自动循环播放
     */
    loop?: boolean;
    /**
     * 循环变化事件
     * 当循环设置发生变化时触发
     */
    onLoopChange?: () => void;
}
/**
 * 属性优先级说明：
 * 1. src设置视频的播放地址
 * 2. forwardSecond控制快进快退的时间间隔
 * 3. useKeyImg和useKeyControls控制键盘功能
 * 4. showControls控制控制栏的显示
 * 5. usePrevEpisode和useNextEpisode控制剧集切换
 * 6. prevEpisodeHref和nextEpisodeHref设置剧集链接
 * 7. onFullWidthChange处理全屏状态变化
 * 8. style和className会覆盖默认样式
 * 9. 组件支持多种视频格式和播放控制
 * 10. 进度条和设置组件提供完整的播放体验
 */ 
