import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import Icon from '../Icon';
import VideoProgressBar from './VideoProgressBar';
import VideoSetting from './VideoSetting';
import Loading from '../Loading';
import PopOver from '../PopOver';
import Dropdown from '../Dropdown';
import Alert from '../Alert';
import useFormateTime from '../hooks/useFormateTime';
import useClickOutside from '../hooks/useClickOutside';
import {
  VideoProps,
  VideoStatus,
  VideoEventData,
  DEFAULT_RATE_OPTIONS,
  DEFAULT_SEEK_STEP,
  DEFAULT_VOLUME_STEP,
  DEFAULT_PREVIEW_WIDTH,
} from './props';
import './index.scss';

const Video: React.FC<VideoProps> = ({
  // 基础属性
  children,
  src,
  poster,
  type,

  // 尺寸与样式
  width,
  height,
  ratio,
  radius = 0,
  fit = 'contain',

  // 播放控制
  autoPlay = false,
  loop: loopProp = false,
  muted: mutedProp = true,
  volume: volumeProp = 100,
  playbackRate: playbackRateProp = 1,
  preload = 'metadata',
  rateOptions = DEFAULT_RATE_OPTIONS,

  // 控制栏配置
  controls = true,
  showPlayButton = true,
  showProgress = true,
  showTime = true,
  showVolume = true,
  showRate = true,
  showPip = true,
  showWebFullscreen = true,
  showFullscreen = true,
  showLoop = true,
  showSettings = true,

  // 关键帧预览
  previewEnabled = false,
  previewWidth = DEFAULT_PREVIEW_WIDTH,

  // 键盘控制
  keyboard = true,
  seekStep = DEFAULT_SEEK_STEP,
  volumeStep = DEFAULT_VOLUME_STEP,

  // 剧集导航
  showPrev = false,
  showNext = false,
  prevDisabled = false,
  nextDisabled = false,

  // 事件回调
  onPlay,
  onPause,
  onEnded,
  onTimeUpdate,
  onVolumeChange,
  onRateChange,
  onFullscreenEnter,
  onFullscreenExit,
  onWebFullscreenChange,
  onLoaded,
  onError,
  onWaiting,
  onCanPlay,
  onSeek,
  onPrevClick,
  onNextClick,
  onPipEnter,
  onPipExit,

  // 样式定制
  className = '',
  style,
  videoClassName = '',
  videoStyle,
  controlsClassName = '',
  controlsStyle,
  progressColor,

  videoProps,
}) => {
  // ─── Refs ───
  const videoRef = useRef<HTMLVideoElement>(null);
  const previewVideoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const controlsContainerRef = useRef<HTMLDivElement>(null);
  const volumeSliderRef = useRef<HTMLDivElement>(null);

  // ─── 视频状态 ───
  const [status, setStatus] = useState<VideoStatus>('idle');
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const [buffered, setBuffered] = useState(0);
  const [videoRatio, setVideoRatio] = useState(16 / 9);

  // ─── 控制状态 ───
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(volumeProp);
  const [lastVolume, setLastVolume] = useState(volumeProp);
  const [muted, setMuted] = useState(mutedProp);
  const [loop, setLoop] = useState(loopProp);
  const [playbackRate, setPlaybackRate] = useState(playbackRateProp);

  // ─── UI 状态 ───
  const [showVolumeSlider, setShowVolumeSlider] = useState(false);
  const [isDragging, setIsDragging] = useState(false);
  const [isWebFullscreen, setIsWebFullscreen] = useState(false);
  const [shouldCollapseControls, setShouldCollapseControls] = useState(false);

  // ─── 进度条拖动状态 (用于热区扩展) ───
  const [isProgressDragging, setIsProgressDragging] = useState(false);
  const progressBarRef = useRef<HTMLDivElement>(null);

  // ─── 预览状态 ───
  const [showPreview, setShowPreview] = useState(false);
  const [previewLeft, setPreviewLeft] = useState(0);

  // ─── 快捷键反馈 ───
  const [showBackward, setShowBackward] = useState(false);
  const [showForward, setShowForward] = useState(false);
  const [showCenterIcon, setShowCenterIcon] = useState(false);

  // ─── 计算属性 ───
  const finalRadius = useMemo(() => {
    if (typeof radius === 'number') return `${radius}px`;
    return radius;
  }, [radius]);

  const finalRatio = useMemo(() => {
    if (ratio) return typeof ratio === 'number' ? ratio : ratio;
    return videoRatio;
  }, [ratio, videoRatio]);

  const previewHeight = useMemo(() => {
    const r = videoRatio || 16 / 9;
    return previewWidth / r;
  }, [previewWidth, videoRatio]);

  // ─── 事件数据生成 ───
  const getEventData = useCallback((): VideoEventData => ({
    currentTime,
    duration,
    buffered: duration > 0 ? buffered / duration : 0,
    volume,
    muted,
    playbackRate,
    status,
  }), [currentTime, duration, buffered, volume, muted, playbackRate, status]);

  // ─── 播放控制 ───
  const handlePlay = useCallback(async () => {
    if (!videoRef.current) return;

    try {
      if (videoRef.current.paused) {
        await videoRef.current.play();
      } else {
        videoRef.current.pause();
      }
    } catch (error) {
      console.error('播放失败:', error);
    }
  }, []);

  // ─── 音量控制 ───
  const handleVolumeChange = useCallback((val: number) => {
    if (!videoRef.current) return;

    const newVolume = Math.max(0, Math.min(100, val));
    setVolume(newVolume);
    videoRef.current.volume = newVolume / 100;

    if (newVolume > 0 && muted) {
      setMuted(false);
      videoRef.current.muted = false;
    }

    onVolumeChange?.(newVolume, newVolume === 0);
  }, [muted, onVolumeChange]);

  const handleMuteToggle = useCallback(() => {
    if (!videoRef.current) return;

    if (muted) {
      const newVolume = lastVolume > 0 ? lastVolume : 100;
      videoRef.current.volume = newVolume / 100;
      videoRef.current.muted = false;
      setVolume(newVolume);
      setMuted(false);
      onVolumeChange?.(newVolume, false);
    } else {
      setLastVolume(volume);
      videoRef.current.volume = 0;
      videoRef.current.muted = true;
      setVolume(0);
      setMuted(true);
      onVolumeChange?.(0, true);
    }
  }, [muted, lastVolume, volume, onVolumeChange]);

  // ─── 播放速率控制 ───
  const handleRateChange = useCallback((rate: number) => {
    if (!videoRef.current) return;

    videoRef.current.playbackRate = rate;
    setPlaybackRate(rate);
    onRateChange?.(rate);
  }, [onRateChange]);

  // ─── 循环控制 ───
  const handleLoopChange = useCallback((newLoop: boolean) => {
    setLoop(newLoop);
    if (videoRef.current) {
      videoRef.current.loop = newLoop;
    }
  }, []);

  // ─── 进度跳转 ───
  const handleSeek = useCallback((progress: number) => {
    if (!videoRef.current || !duration) return;

    const newTime = progress * duration;
    videoRef.current.currentTime = newTime;
    setCurrentTime(newTime);
    onSeek?.(newTime);
  }, [duration, onSeek]);

  // ─── 画中画 ───
  const handlePip = useCallback(async () => {
    if (!videoRef.current) return;

    try {
      if (document.pictureInPictureElement === videoRef.current) {
        await document.exitPictureInPicture();
        onPipExit?.();
      } else {
        await videoRef.current.requestPictureInPicture();
        onPipEnter?.();
      }
    } catch (error) {
      console.error('画中画操作失败:', error);
    }
  }, [onPipEnter, onPipExit]);

  // ─── 网页全屏 ───
  const handleWebFullscreen = useCallback(() => {
    const newState = !isWebFullscreen;
    setIsWebFullscreen(newState);
    onWebFullscreenChange?.(newState);
  }, [isWebFullscreen, onWebFullscreenChange]);

  // ─── 系统全屏 ───
  const handleFullscreen = useCallback(() => {
    if (!containerRef.current) return;

    if (document.fullscreenElement) {
      document.exitFullscreen();
      onFullscreenExit?.();
    } else {
      containerRef.current.requestFullscreen();
      onFullscreenEnter?.();
    }
  }, [onFullscreenEnter, onFullscreenExit]);

  // ─── 预览控制 ───
  const handlePreviewMove = useCallback((progress: number, clientX: number, containerWidth: number) => {
    if (!previewEnabled || !previewVideoRef.current) return;

    previewVideoRef.current.currentTime = progress * duration;

    // 计算预览图位置
    const halfWidth = previewWidth / 2;
    let left = clientX - halfWidth;
    if (left < 0) left = 0;
    if (left > containerWidth - previewWidth) left = containerWidth - previewWidth;
    setPreviewLeft(left);
  }, [previewEnabled, duration, previewWidth]);

  // ─── 视频事件处理 ───
  const handleTimeUpdate = useCallback(() => {
    if (!videoRef.current || isDragging) return;

    const video = videoRef.current;
    setCurrentTime(video.currentTime);

    if (video.buffered.length > 0) {
      setBuffered(video.buffered.end(video.buffered.length - 1));
    }

    onTimeUpdate?.(getEventData());
  }, [isDragging, getEventData, onTimeUpdate]);

  const handleLoadedMetadata = useCallback(() => {
    if (!videoRef.current) return;

    const video = videoRef.current;
    setDuration(video.duration);
    setVideoRatio(video.videoWidth / video.videoHeight || 16 / 9);
    setStatus('idle');

    onLoaded?.(getEventData());
  }, [getEventData, onLoaded]);

  const handleVideoPlay = useCallback(() => {
    setIsPlaying(true);
    setStatus('playing');
    onPlay?.(getEventData());
  }, [getEventData, onPlay]);

  const handleVideoPause = useCallback(() => {
    setIsPlaying(false);
    setStatus('paused');
    onPause?.(getEventData());
  }, [getEventData, onPause]);

  const handleVideoEnded = useCallback(() => {
    setIsPlaying(false);
    setStatus('ended');
    onEnded?.(getEventData());
  }, [getEventData, onEnded]);

  const handleVideoWaiting = useCallback(() => {
    setStatus('buffering');
    onWaiting?.();
  }, [onWaiting]);

  const handleVideoCanPlay = useCallback(() => {
    if (status === 'buffering') {
      setStatus(isPlaying ? 'playing' : 'paused');
    }
    onCanPlay?.();
  }, [status, isPlaying, onCanPlay]);

  const handleVideoError = useCallback(() => {
    setStatus('error');
    onError?.(new Error('视频加载失败'));
  }, [onError]);

  // ─── 键盘控制 ───
  const handleKeyDown = useCallback((event: KeyboardEvent) => {
    if (!keyboard || !videoRef.current) return;

    const video = videoRef.current;
    const isVideoFocused = document.activeElement === video || 
                          containerRef.current?.contains(document.activeElement) ||
                          document.fullscreenElement;

    if (!isVideoFocused) return;

    switch (event.code) {
      case 'Space':
        event.preventDefault();
        handlePlay();
        setShowCenterIcon(true);
        break;

      case 'ArrowLeft':
        event.preventDefault();
        if (!video.paused) {
          const newTime = Math.max(0, video.currentTime - seekStep);
          video.currentTime = newTime;
          setCurrentTime(newTime);
          setShowBackward(true);
        }
        break;

      case 'ArrowRight':
        event.preventDefault();
        if (!video.paused) {
          const newTime = Math.min(video.duration, video.currentTime + seekStep);
          video.currentTime = newTime;
          setCurrentTime(newTime);
          setShowForward(true);
        }
        break;

      case 'ArrowUp':
        event.preventDefault();
        handleVolumeChange(volume + volumeStep);
        break;

      case 'ArrowDown':
        event.preventDefault();
        handleVolumeChange(volume - volumeStep);
        break;

      case 'KeyM':
        event.preventDefault();
        handleMuteToggle();
        break;

      case 'KeyF':
        event.preventDefault();
        handleFullscreen();
        break;

      default:
        break;
    }
  }, [keyboard, handlePlay, seekStep, handleVolumeChange, volume, volumeStep, handleMuteToggle, handleFullscreen]);

  // ─── 键盘事件监听 ───
  useEffect(() => {
    if (!keyboard) return;

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [keyboard, handleKeyDown]);

  // ─── 快捷键反馈自动隐藏 ───
  useEffect(() => {
    if (showBackward) {
      const timer = setTimeout(() => setShowBackward(false), 800);
      return () => clearTimeout(timer);
    }
  }, [showBackward]);

  useEffect(() => {
    if (showForward) {
      const timer = setTimeout(() => setShowForward(false), 800);
      return () => clearTimeout(timer);
    }
  }, [showForward]);

  useEffect(() => {
    if (showCenterIcon) {
      const timer = setTimeout(() => setShowCenterIcon(false), 800);
      return () => clearTimeout(timer);
    }
  }, [showCenterIcon]);

  // ─── 视频源变化重置 ───
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.pause();
      setIsPlaying(false);
      setCurrentTime(0);
      setBuffered(0);
      setDuration(0);
      setStatus('idle');
    }
  }, [src]);

  // ─── 音量滑块点击外部关闭 ───
  useClickOutside(volumeSliderRef, () => {
    if (showVolumeSlider) setShowVolumeSlider(false);
  });

  // ─── 响应式控制栏 ───
  useEffect(() => {
    const checkWidth = () => {
      if (!controlsContainerRef.current) return;

      const containerWidth = controlsContainerRef.current.offsetWidth;
      const leftWidth = 150 + (showPrev || showNext ? 80 : 0);
      const rightWidth = 280;

      setShouldCollapseControls(containerWidth < leftWidth + rightWidth + 30);
    };

    checkWidth();
    const observer = new ResizeObserver(checkWidth);
    if (controlsContainerRef.current) {
      observer.observe(controlsContainerRef.current);
    }

    return () => observer.disconnect();
  }, [showPrev, showNext]);

  // ─── 进度条拖动热区扩展处理 ───
  const handleContainerMouseMove = useCallback((e: React.MouseEvent) => {
    if (!isProgressDragging || !progressBarRef.current) return;

    const rect = progressBarRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const newProgress = Math.max(0, Math.min(1, x / rect.width));
    handleSeek(newProgress);
  }, [isProgressDragging, handleSeek]);

  const handleContainerMouseUp = useCallback(() => {
    if (isProgressDragging) {
      setIsProgressDragging(false);
      setIsDragging(false);
    }
  }, [isProgressDragging]);

  const handleContainerMouseLeave = useCallback(() => {
    if (isProgressDragging) {
      setIsProgressDragging(false);
      setIsDragging(false);
    }
  }, [isProgressDragging]);

  // ─── 点击视频区域播放/暂停 ───
  const handleVideoAreaClick = useCallback((e: React.MouseEvent) => {
    // 如果正在拖动进度条，不触发播放暂停
    if (isProgressDragging || isDragging) return;

    // 确保点击的是视频区域，而不是控制栏等其他元素
    const target = e.target as HTMLElement;
    const isControlsArea = target.closest('.land-video__controls');
    const isButtonArea = target.closest('.land-video__button');
    const isCenterIcon = target.closest('.land-video__center-icon');

    if (isControlsArea || isButtonArea || isCenterIcon) return;

    handlePlay();
  }, [isProgressDragging, isDragging, handlePlay]);

  // ─── 类名计算 ───
  const containerClassName = useMemo(() => {
    const classes = ['land-video'];
    if (status === 'error') classes.push('land-video--error');
    if (isWebFullscreen) classes.push('land-video--web-fullscreen');
    if (className) classes.push(className);
    return classes.join(' ');
  }, [status, isWebFullscreen, className]);

  const videoElementClassName = useMemo(() => {
    const classes = ['land-video__player'];
    if (videoClassName) classes.push(videoClassName);
    return classes.join(' ');
  }, [videoClassName]);

  // ─── 渲染错误状态 ───
  if (status === 'error') {
    return (
      <div
        ref={containerRef}
        className={containerClassName}
        style={{
          width,
          height,
          aspectRatio: String(finalRatio),
          borderRadius: finalRadius,
          ...style,
        }}
      >
        <Alert type="error" title="视频加载失败" direction="vertical" variant="text" />
      </div>
    );
  }

  // ─── 渲染控制按钮 ───
  const renderControlButtons = () => {
    if (shouldCollapseControls) {
      // 折叠模式：右侧只显示一个更多按钮
      return (
        <div className="land-video__controls-right">
          <Dropdown
            trigger="click"
            placement="top"
            alignment="left"
            content={
              <div className="land-video__dropdown">
                {/* 播放速率 */}
                {showRate && (
                  <div className="land-video__dropdown-section">
                    <div className="land-video__dropdown-title">播放速度</div>
                    <div className="land-video__dropdown-rates">
                      {rateOptions.map((option) => (
                        <button
                          key={option.value}
                          className={`land-video__dropdown-rate ${playbackRate === option.value ? 'land-video__dropdown-rate--active' : ''}`}
                          onClick={() => handleRateChange(option.value)}
                        >
                          {option.label}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* 循环播放 */}
                {showLoop && (
                  <div className="land-video__dropdown-section">
                    <button
                      className={`land-video__dropdown-toggle ${loop ? 'land-video__dropdown-toggle--active' : ''}`}
                      onClick={() => handleLoopChange(!loop)}
                    >
                      <Icon name="loop" size={16} />
                      <span>循环播放</span>
                      <div className={`land-video__dropdown-switch ${loop ? 'land-video__dropdown-switch--active' : ''}`} />
                    </button>
                  </div>
                )}

                <div className="land-video__dropdown-divider" />

                <div className="land-video__dropdown-actions">
                  {showPip && (
                    <button className="land-video__dropdown-action" onClick={handlePip}>
                      <Icon name="video-small-screen" size={20} />
                      <span>画中画</span>
                    </button>
                  )}
                  {showWebFullscreen && (
                    <button className="land-video__dropdown-action" onClick={handleWebFullscreen}>
                      <Icon name={isWebFullscreen ? 'zoom-out' : 'zoom-in'} size={20} />
                      <span>{isWebFullscreen ? '退出网页全屏' : '网页全屏'}</span>
                    </button>
                  )}
                  {showFullscreen && (
                    <button className="land-video__dropdown-action" onClick={handleFullscreen}>
                      <Icon name="zoom-in-arrow" size={20} />
                      <span>全屏模式</span>
                    </button>
                  )}
                </div>
              </div>
            }
          >
            <button className="land-video__button land-video__button--more">
              <Icon name="more" size={20} />
            </button>
          </Dropdown>
        </div>
      );
    }

    // 展开模式
    return (
      <div className="land-video__controls-right">
        {showSettings && (
          <button className="land-video__button land-video__button--settings">
            <Icon name="setting" size={20} />
            <div className="land-video__settings-panel">
              <VideoSetting
                rateOptions={rateOptions}
                currentRate={playbackRate}
                onRateChange={handleRateChange}
                loop={loop}
                onLoopChange={handleLoopChange}
              />
            </div>
          </button>
        )}

        {showPip && (
          <button className="land-video__button" onClick={handlePip}>
            <Icon name="video-small-screen" size={20} />
            <PopOver content="画中画模式" theme="dark" />
          </button>
        )}

        {showWebFullscreen && (
          <button className="land-video__button" onClick={handleWebFullscreen}>
            <Icon name={isWebFullscreen ? 'zoom-out' : 'zoom-in'} size={20} />
            <PopOver content={isWebFullscreen ? '退出网页全屏' : '网页全屏'} theme="dark" />
          </button>
        )}

        {showFullscreen && (
          <button className="land-video__button" onClick={handleFullscreen}>
            <Icon name="zoom-in-arrow" size={20} />
            <PopOver content="全屏模式" theme="dark" />
          </button>
        )}
      </div>
    );
  };

  return (
    <div
      ref={containerRef}
      className={containerClassName}
      style={{
        width,
        height,
        aspectRatio: String(finalRatio),
        borderRadius: finalRadius,
        ...style,
      }}
      tabIndex={0}
      onClick={handleVideoAreaClick}
      onMouseMove={handleContainerMouseMove}
      onMouseUp={handleContainerMouseUp}
      onMouseLeave={handleContainerMouseLeave}
    >
      {/* 视频元素 */}
      <video
        ref={videoRef}
        className={videoElementClassName}
        src={src}
        poster={poster}
        loop={loop}
        muted={muted}
        autoPlay={autoPlay}
        preload={preload}
        playsInline
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        onPlay={handleVideoPlay}
        onPause={handleVideoPause}
        onEnded={handleVideoEnded}
        onWaiting={handleVideoWaiting}
        onCanPlay={handleVideoCanPlay}
        onError={handleVideoError}
        style={{
          borderRadius: finalRadius,
          objectFit: fit,
          ...videoStyle,
        }}
        {...videoProps}
      >
        {type && <source src={src} type={type} />}
      </video>

      {/* 控制栏 */}
      {controls && (
        <div
          className={`land-video__controls ${controlsClassName}`}
          style={{ borderRadius: finalRadius, ...controlsStyle }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* 进度条 */}
          {showProgress && (
            <div className="land-video__progress-wrapper" ref={progressBarRef}>
              <VideoProgressBar
                progress={duration > 0 ? currentTime / duration : 0}
                buffered={duration > 0 ? buffered / duration : 0}
                activeColor={progressColor}
                onChange={handleSeek}
                onMouseEnter={previewEnabled ? (p, x, w) => { setShowPreview(true); handlePreviewMove(p, x, w); } : undefined}
                onMouseMove={previewEnabled ? handlePreviewMove : undefined}
                onMouseLeave={previewEnabled ? () => setShowPreview(false) : undefined}
                onDragStart={() => { setIsDragging(true); setIsProgressDragging(true); }}
                onDragEnd={() => { setIsDragging(false); setIsProgressDragging(false); }}
                isExternalDragging={isProgressDragging}
              />

              {/* 关键帧预览 */}
              {previewEnabled && (
                <div
                  className="land-video__preview"
                  style={{
                    transform: `translateX(${previewLeft}px)`,
                    opacity: showPreview ? 1 : 0,
                  }}
                >
                  <video
                    ref={previewVideoRef}
                    src={src}
                    muted
                    preload="metadata"
                    style={{
                      width: previewWidth,
                      height: previewHeight,
                      objectFit: 'cover',
                      borderRadius: 4,
                    }}
                  />
                </div>
              )}
            </div>
          )}

          {/* 控制按钮容器 */}
          <div className="land-video__controls-bar" ref={controlsContainerRef}>
            {/* 左侧控制 */}
            <div className="land-video__controls-left">
              {/* 上一集 */}
              {showPrev && (
                <button
                  className={`land-video__button land-video__button--prev ${prevDisabled ? 'land-video__button--disabled' : ''}`}
                  onClick={onPrevClick}
                  disabled={prevDisabled}
                >
                  <Icon name="arrow-nav" size={20} />
                </button>
              )}

              {/* 播放/暂停 */}
              {showPlayButton && (
                <button className="land-video__button land-video__button--play" onClick={handlePlay}>
                  {isPlaying ? (
                    <Icon name="video-play" size={20} />
                  ) : (
                    <Icon name="video-pause" size={32} />
                  )}
                </button>
              )}

              {/* 下一集 */}
              {showNext && (
                <button
                  className={`land-video__button land-video__button--next ${nextDisabled ? 'land-video__button--disabled' : ''}`}
                  onClick={onNextClick}
                  disabled={nextDisabled}
                >
                  <Icon name="arrow-nav" size={20} />
                </button>
              )}

              {/* 时间显示 */}
              {showTime && (
                <div className="land-video__time">
                  {useFormateTime(currentTime)} / {useFormateTime(duration)}
                </div>
              )}

              {/* 音量控制 */}
              {showVolume && (
                <div className="land-video__volume">
                  <button className="land-video__button" onClick={handleMuteToggle}>
                    {muted || volume === 0 ? (
                      <Icon name="volume-muted" size={20} />
                    ) : (
                      <Icon name="volume" size={20} className={volume < 50 ? 'land-video__volume-icon--low' : ''} />
                    )}
                  </button>
                  <div
                    ref={volumeSliderRef}
                    className={`land-video__volume-slider ${showVolumeSlider || volume < 100 ? 'land-video__volume-slider--show' : ''}`}
                  >
                    <div
                      className="land-video__volume-track"
                      onClick={(e) => {
                        e.stopPropagation();
                        const rect = e.currentTarget.getBoundingClientRect();
                        const percent = (e.clientX - rect.left) / rect.width;
                        handleVolumeChange(Math.round(percent * 100));
                      }}
                    >
                      <div className="land-video__volume-bg" />
                      <div
                        className="land-video__volume-fill"
                        style={{ transform: `scaleX(${volume / 100})` }}
                      />
                      <div
                        className="land-video__volume-thumb"
                        style={{ left: `${volume}%` }}
                      />
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* 右侧控制 */}
            {renderControlButtons()}
          </div>
        </div>
      )}

      {/* 中心图标提示 */}
      <div
        className="land-video__center-icon"
        style={{ opacity: showCenterIcon || status === 'buffering' || !isPlaying ? 1 : 0 }}
        onClick={handlePlay}
      >
        {status === 'buffering' ? (
          <Loading size={32} color="white" strokeSize={4} />
        ) : (
          <div className="land-video__center-badge">
            {isPlaying ? (
              <Icon name="video-play" size={20} />
            ) : (
              <Icon name="video-pause" size={32} />
            )}
          </div>
        )}
      </div>

      {/* 快退提示 */}
      <div className="land-video__feedback land-video__feedback--left" style={{ opacity: showBackward ? 1 : 0 }}>
        <div className="land-video__feedback-badge">
          <Icon name="arrow-double" size={28} className="land-video__feedback-icon--backward" />
          {seekStep}秒
        </div>
      </div>

      {/* 快进提示 */}
      <div className="land-video__feedback land-video__feedback--right" style={{ opacity: showForward ? 1 : 0 }}>
        <div className="land-video__feedback-badge">
          <Icon name="arrow-double" size={28} className="land-video__feedback-icon--forward" />
          {seekStep}秒
        </div>
      </div>

      {/* 自定义叠加内容 */}
      {children}
    </div>
  );
};

export default Video;
