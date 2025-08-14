import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import Icon from '../Icon';
import Slider from '../Slider';
import VideoProgressBar from './VideoProgressBar';
import AffixContainer from "../AffixContainer";
import Loading from "../Loading";
import useClickOutside from "../hooks/useClickOutside";
import PopOver from "../PopOver";
import VideoSetting from "./VideoSetting";
import useFormateTime from "../hooks/useFormateTime";
import Dropdown from "../Dropdown";
import { VideoProps } from './props';
import './index.scss'
import Alert from '../Alert';
import { safeCanvasOperation } from '../utils/react-compatibility';

const Video: React.FC<VideoProps> = ({
  src,
  ratio,
  radius = "0px",
  forwardSecond = 5,
  useKeyImg,
  onFullWidthChange,
  useKeyControls,
  autoPlay,
  className = "",
  style,
  videoClassName = "",
  videoStyle,
  showControls,
  usePrevEpisode,
  useNextEpisode,
  onPrevEpisodeClick,
  onNextEpisodeClick,
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const previewVideoRef = useRef<HTMLVideoElement>(null);
  const controlsContainerRef = useRef<HTMLDivElement>(null);
  const [videoRatio, setVideoRatio] = useState<number>(1);
  const [duration, setDuration] = useState<number>(0);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [buffered, setBuffered] = useState<number>(0);
  const [isInitialLoad, setIsInitialLoad] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);
  /** 是否卡顿 */
  const [loss, setLoss] = useState<boolean>(false);
  /** 是否正在拖拽进度条 */
  const [isDragging, setIsDragging] = useState<boolean>(false);
  /** 是否正在播放 */
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  /** 是否需要收起右侧控件 */
  const [shouldCollapseControls, setShouldCollapseControls] = useState<boolean>(false);
  /** 预览帧更新定时器 */
  const previewTimerRef = useRef<NodeJS.Timeout | null>(null);

  const handleTimeUpdate = useCallback(() => {
    if (videoRef.current && !isDragging) {
      const video = videoRef.current;
      setCurrentTime(video.currentTime);
      if (video.buffered.length > 0) {
        const bufferedEnd = video.buffered.end(video.buffered.length - 1);
        setBuffered(bufferedEnd);
      }
      if (videoRef.current.currentTime === 0) {
        setIsInitialLoad(true);
      }
    }
  }, [isDragging]);

  /** 视频播放 & 暂停 */
  const handlePlay = useCallback(async () => {
    if (!videoRef.current) return;

    try {
      if (videoRef.current.paused) {
        await videoRef.current.play();
        setIsPlaying(true);
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    } catch (error) {
      console.error('播放失败:', error);
      setIsPlaying(false);
    }
  }, []);

  /** 视频进度条移动 */
  const KeyImgPreviewCanvasRef = useRef<HTMLCanvasElement>(null);
  const [left, setLeft] = useState<number>(0);
  /** 展示关键帧图片 */
  const [showKeyImg, setShowKeyImg] = useState<boolean>(false);
  const keyImgWidth = useMemo(() => {
    const currentRatio = videoRatio || Number(ratio) || 16 / 9;
    return currentRatio < 1 ? 100 : 200;
  }, [videoRatio, ratio]);

  const handleProgressMove = useCallback((val, left, width) => {
    // 只有在启用关键帧预览时才执行相关逻辑
    if (!useKeyImg) return;

    // 计算预览图片的位置
    if (left < keyImgWidth / 2) {
      setLeft(0);
    } else {
      if (left < width - keyImgWidth / 2) {
        setLeft(left - keyImgWidth / 2);
      } else {
        setLeft(width - keyImgWidth);
      }
    }

    // 清除之前的定时器
    if (previewTimerRef.current) {
      clearTimeout(previewTimerRef.current);
    }

    // 使用防抖机制，避免频繁更新预览帧
    previewTimerRef.current = setTimeout(() => {
      // 根据进度条位置计算对应的视频时间
      if (!videoRef.current || !duration || !previewVideoRef.current) return;

      const targetTime = val * duration;
      const previewVideo = previewVideoRef.current;
      const previewCanvas = KeyImgPreviewCanvasRef.current;

      if (!previewCanvas) return;

      // 使用隐藏的预览视频元素来获取对应帧
      previewVideo.currentTime = targetTime;

      // 等待预览视频加载到指定时间点
      const loadFrame = () => {
        if (previewVideo.readyState >= 2) { // HAVE_CURRENT_DATA
          // 使用安全的Canvas操作
          safeCanvasOperation(previewCanvas, (ctx) => {
            ctx.drawImage(
              previewVideo,
              0,
              0,
              previewCanvas.width,
              previewCanvas.height
            );
          });
        } else {
          // 如果还没准备好，继续等待
          requestAnimationFrame(loadFrame);
        }
      };

      loadFrame();
    }, 50); // 50ms 防抖延迟
  }, [useKeyImg, keyImgWidth, videoRatio, ratio, duration]);

  /** 进度条拖拽开始 */
  const handleProgressDragStart = useCallback(() => {
    setIsDragging(true);
  }, []);

  /** 进度条拖拽结束 */
  const handleProgressDragEnd = useCallback(() => {
    setIsDragging(false);
  }, []);

  /** 进度条点击/拖拽 */
  const handleProgressChange = useCallback((val: number) => {
    if (!videoRef.current || !duration) return;

    const newTime = val * duration;
    videoRef.current.currentTime = newTime;
    setCurrentTime(newTime);

    // 如果视频暂停状态，点击进度条后自动播放
    if (videoRef.current.paused && isInitialLoad) {
      handlePlay();
    }
  }, [duration, isInitialLoad, handlePlay]);

  /** 音量控制 */
  const [volume, setVolume] = useState<number>(100);
  const [lastVolume, setLastVolume] = useState<number>(100);
  const [muted, setMuted] = useState<boolean>(true);
  const volumeSliderRef = useRef<HTMLDivElement>(null);
  const [showVolumeSlider, setShowVolumeSlider] = useState<boolean>(false);

  const handleVolumeChange = useCallback((val: number) => {
    if (!videoRef.current) return;
    setVolume(val);
    videoRef.current.volume = val / 100;

    // 如果音量大于0，取消静音状态
    if (val > 0 && muted) {
      setMuted(false);
    }
  }, [muted]);

  useEffect(() => {
    if (volume !== 0) {
      setLastVolume(volume);
      setMuted(false);
      setShowVolumeSlider(volume < 100);
    }
    if (volume === 0) {
      setMuted(true);
    }
  }, [volume]);

  const handleMuteChange = useCallback(() => {
    if (!videoRef.current) return;

    if (muted) {
      if (lastVolume > 0) {
        videoRef.current.volume = lastVolume / 100;
        setVolume(lastVolume);
      } else {
        videoRef.current.volume = 1;
        setVolume(100);
      }
    } else {
      videoRef.current.volume = 0;
      setVolume(0);
    }
    setMuted(!muted);
  }, [muted, lastVolume]);

  // 视频源改变时的处理
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.pause();
      setIsPlaying(false);

      // 重置视频相关状态
      setCurrentTime(0);
      setBuffered(0);
      setDuration(0);
      setIsInitialLoad(true);
      setError(false);
      setLoss(false);

      // 重置控件状态
      setShowBack(false);
      setShowFront(false);
      setShowCenterPlay(false);
      setShowKeyImg(false);
    }

    // 重置预览视频
    if (previewVideoRef.current) {
      previewVideoRef.current.currentTime = 0;
    }
  }, [src]);

  useClickOutside(volumeSliderRef, () => {
    if (showVolumeSlider) {
      setShowVolumeSlider(false);
    }
  });

  /** 倍数 */
  const [rate, setRate] = useState<number>(1);
  const handleRateChange = useCallback((val, item) => {
    setRate(item.value);
    if (!videoRef.current) return;
    console.log(val, videoRef.current.playbackRate);

    videoRef.current.playbackRate = val;
  }, []);

  /** 循环 */
  const [loop, setLoop] = useState<boolean>(false);

  /** 画中画播放 */
  const handleSmallScreen = async () => {
    if (!videoRef.current) return;
    const video = videoRef.current;
    try {
      if (video !== document.pictureInPictureElement) {
        await video.requestPictureInPicture();
      } else {
        await document.exitPictureInPicture();
      }
    } catch (error) {
      console.error("Error with Picture-in-Picture:", error);
    }
  };

  /** 网页宽屏屏 */
  const [fullWidth, setFullWidth] = useState<boolean>(false);

  /** 网页全屏 */
  const [fullView, setFullView] = useState<boolean>(false);

  /** 全屏播放 */
  const handleFullScreen = useCallback(() => {
    if (!videoRef.current) return;
    const video = videoRef.current;
    if (video.requestFullscreen) {
      video.requestFullscreen();
    }
  }, []);

  /** 监听键盘左右箭头、空格播放 */
  const [showBack, setShowBack] = useState<boolean>(false);
  const [showFront, setShowFront] = useState<boolean>(false);
  const [showCenterPlay, setShowCenterPlay] = useState<boolean>(false);

  useEffect(() => {
    if (showBack) {
      const timer = setTimeout(() => {
        setShowBack(false);
      }, 800);
      return () => clearTimeout(timer);
    }
  }, [showBack]);

  useEffect(() => {
    if (showFront) {
      const timer = setTimeout(() => {
        setShowFront(false);
      }, 800);
      return () => clearTimeout(timer);
    }
  }, [showFront]);

  useEffect(() => {
    if (showCenterPlay) {
      const timer = setTimeout(() => {
        setShowCenterPlay(false);
      }, 800);
      return () => clearTimeout(timer);
    }
  }, [showCenterPlay]);

  // 键盘事件处理函数
  const handleKeyDown = useCallback((event: KeyboardEvent) => {
    if (!videoRef.current || !useKeyControls) return;

    const video = videoRef.current;

    // 只在视频元素获得焦点或全屏时响应键盘事件
    if (document.activeElement !== video && !document.fullscreenElement) {
      return;
    }

    event.preventDefault();

    switch (event.code) {
      case "ArrowLeft":
        if (video.paused) return;
        const newTimeBack = Math.max(0, video.currentTime - forwardSecond);
        video.currentTime = newTimeBack;
        setCurrentTime(newTimeBack);
        setShowBack(true);
        break;

      case "ArrowRight":
        if (video.paused) return;
        const newTimeFront = Math.min(video.duration, video.currentTime + forwardSecond);
        video.currentTime = newTimeFront;
        setCurrentTime(newTimeFront);
        setShowFront(true);
        break;

      case "Space":
        event.preventDefault();
        handlePlay();
        setShowCenterPlay(true);
        break;

      case "KeyM":
        event.preventDefault();
        handleMuteChange();
        break;

      case "KeyF":
        event.preventDefault();
        handleFullScreen();
        break;

      default:
        break;
    }
  }, [useKeyControls, forwardSecond, handlePlay, handleMuteChange, handleFullScreen]);

  // 键盘事件监听
  useEffect(() => {
    if (!useKeyControls) return;

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [useKeyControls, handleKeyDown]);

  // 监听视频播放状态变化
  useEffect(() => {
    if (!videoRef.current) return;

    const video = videoRef.current;

    const handlePlayEvent = () => {
      setIsPlaying(true);
      setIsInitialLoad(false);
    };

    const handlePauseEvent = () => {
      setIsPlaying(false);
    };

    const handleEndedEvent = () => {
      setIsPlaying(false);
      setIsInitialLoad(true);
    };

    video.addEventListener('play', handlePlayEvent);
    video.addEventListener('pause', handlePauseEvent);
    video.addEventListener('ended', handleEndedEvent);

    return () => {
      video.removeEventListener('play', handlePlayEvent);
      video.removeEventListener('pause', handlePauseEvent);
      video.removeEventListener('ended', handleEndedEvent);
    };
  }, []);

  const handleLoadedMetadata = useCallback((e: React.SyntheticEvent<HTMLVideoElement>) => {
    const target = e.target as HTMLVideoElement;
    // 重新计算视频比例
    const newRatio = target.clientWidth / target.clientHeight;
    setVideoRatio(newRatio);
    setDuration(target.duration);

    // 重置相关状态
    setCurrentTime(0);
    setBuffered(0);
    setIsInitialLoad(true);
    setError(false);
    setLoss(false);
  }, []);

  // 检测控件容器宽度，决定是否需要收起右侧控件
  const checkControlsWidth = useCallback(() => {
    if (!controlsContainerRef.current) return;

    const container = controlsContainerRef.current;
    const containerWidth = container.offsetWidth;

    // 根据是否有分集按钮动态计算左侧控件所需的最小宽度
    const baseLeftWidth = 120; // 播放按钮、时间
    const volumeWidth = 60; // 音量控件
    const episodeWidth = usePrevEpisode || useNextEpisode ? 80 : 0; // 分集按钮
    const leftControlsMinWidth = baseLeftWidth + volumeWidth + episodeWidth;

    // 右侧控件宽度（设置、画中画、全屏等）
    const rightControlsWidth = 240; // 增加一些宽度，因为设置按钮有hover面板

    // 如果容器宽度不足以容纳所有控件，则收起右侧控件
    const needsCollapse = containerWidth < (leftControlsMinWidth + rightControlsWidth + 30); // 30px 缓冲空间
    setShouldCollapseControls(needsCollapse);
  }, [usePrevEpisode, useNextEpisode]);

  // 监听容器宽度变化
  useEffect(() => {
    checkControlsWidth();

    const resizeObserver = new ResizeObserver(() => {
      checkControlsWidth();
    });

    if (controlsContainerRef.current) {
      resizeObserver.observe(controlsContainerRef.current);
    }

    return () => {
      resizeObserver.disconnect();
    };
  }, [checkControlsWidth]);

  // 调试信息（开发环境）
  useEffect(() => {
    if (process.env.NODE_ENV === 'development') {
      console.log('Video controls collapsed:', shouldCollapseControls);
    }
  }, [shouldCollapseControls]);

  // 组件卸载时清理定时器
  useEffect(() => {
    return () => {
      if (previewTimerRef.current) {
        clearTimeout(previewTimerRef.current);
      }
    };
  }, []);

  // 计算最终的视频比例
  const finalRatio = useMemo(() => {
    if (ratio) return ratio;
    if (videoRatio && videoRatio > 0) return videoRatio.toString();
    return "auto";
  }, [ratio, videoRatio]);

  return (
    <div
      className={`land-video ${error ? "error" : ""} ${fullView ? "fullView" : ""
        } ${className}`}
      style={{ aspectRatio: finalRatio, ...style }}
    >
      {error ? (
        <Alert type="error" title="视频错误" direction="column" noBg />
      ) : (
        <>
          <video
            ref={videoRef}
            src={src}
            loop={loop}
            autoPlay={autoPlay}
            muted={muted}
            onTimeUpdate={handleTimeUpdate}
            onWaiting={() => setLoss(true)}
            onCanPlay={() => setLoss(false)}
            onError={() => setError(true)}
            onLoadedMetadata={handleLoadedMetadata}
            style={{ borderRadius: radius, aspectRatio: ratio || 'auto', objectFit: ratio ? 'cover' : 'contain', ...videoStyle }}
            className={`land-video ${videoClassName}`}
          />
          {/* 隐藏的预览视频元素，用于关键帧预览 */}
          {useKeyImg && (
            <video
              ref={previewVideoRef}
              src={src}
              muted={true}
              style={{ display: 'none' }}
              preload="metadata"
              onLoadedMetadata={() => {
                // 预览视频加载完成后，确保它与主视频同步
                if (previewVideoRef.current && videoRef.current) {
                  previewVideoRef.current.currentTime = videoRef.current.currentTime;
                }
              }}
            />
          )}
        </>
      )}

      {!error && (
        <AffixContainer
          onClick={handlePlay}
          className="land-video-affix-container"
          bcOption={showControls ? {
            content: (
              <div
                className={`land-video-controls ${showControls ? "show" : ""
                  }`}
                style={{ borderRadius: radius }}
              >
                {/* 进度条 */}
                <>
                  <VideoProgressBar
                    curPercentage={currentTime / duration}
                    bufferPercentage={buffered / duration}
                    onClick={handleProgressChange}
                    onMouseEnter={useKeyImg ? (val, left, width) => {setShowKeyImg(true);handleProgressMove(val, left, width)} : undefined}
                    onMove={useKeyImg ? (val, left, width) =>
                      handleProgressMove?.(val, left, width)
                      : undefined}
                    onMouseLeave={useKeyImg ? () => setShowKeyImg(false) : undefined}
                    onDragStart={handleProgressDragStart}
                    onDragEnd={handleProgressDragEnd}
                  />
                  {useKeyImg && (
                    <div
                      className="land-video-controls-keyImg-container"
                      style={{ transform: `translateX(${left}px)`, opacity: showKeyImg ? 1 : 0 }}
                    >
                      <canvas
                        ref={KeyImgPreviewCanvasRef}
                        width={keyImgWidth}
                        height={keyImgWidth / (videoRatio || Number(ratio) || 16 / 9)}
                      />
                    </div>
                  )}
                </>

                {/* 控制按钮 */}
                <div className="land-video-controls-container" ref={controlsContainerRef}>
                  <div className="land-video-controls-left">
                    {usePrevEpisode && (
                      <a
                        className="land-video-controls-button prev"
                        role="button"
                        onClick={onPrevEpisodeClick}
                      >
                        <Icon name="arrow-nav" size={20} />
                      </a>
                    )}
                    <button
                      className="land-video-controls-button play"
                      aria-keyshortcuts="k"
                      data-title-no-tooltip="播放"
                      aria-label="播放 键盘快捷键 (space)"
                      title="播放 (space)"
                      onClick={handlePlay}
                    >
                      {!isPlaying ? (
                        <Icon name="video-pause" size={32} />
                      ) : (
                        <Icon name="video-play" size={20} />
                      )}
                    </button>
                    {useNextEpisode && (
                      <a
                        className="land-video-controls-button next"
                        role="button"
                        onClick={onNextEpisodeClick}
                        title="下一个"
                      >
                        <Icon name="arrow-nav" size={20} />
                      </a>
                    )}
                    <div className="land-video-controls-time">
                      {useFormateTime(currentTime)} /{" "}
                      {useFormateTime(duration)}
                    </div>
                    <div className="land-video-controls-volume-container"
                    >
                      <button
                        className="land-video-controls-button volume"
                        onClick={handleMuteChange}
                        title={`${muted ? '取消静音' : '静音'} (M)`}
                      >
                        {muted ? (
                          <Icon
                            name="volume-muted"
                            size={20}

                          />
                        ) : (
                          <Icon
                            name="volume"
                            className={`${volume < 50 ? "small" : ""}`}
                            size={20}

                          />
                        )}
                      </button>
                      <div
                        ref={volumeSliderRef}
                        className={`land-video-volume-slider ${showVolumeSlider ? "show" : ""
                          }`}
                      >
                        <Slider
                          height={4}
                          value={volume}
                          max={100}
                          step={1}
                          onChange={(val: number) => handleVolumeChange(val)}
                          defaultBg="rgba(255,255,255,0.68)"
                          activeBg="rgba(255,255,255,1)"
                          thumbSize={12}
                        />
                      </div>
                    </div>
                  </div>

                  {shouldCollapseControls ? (
                    <div className="land-video-controls-right">
                      <Dropdown
                        trigger="click"
                        placement="top"
                        alignment="left"
                        dropContent={
                          <div className="land-video-controls-dropdown">
                            {/* 倍速设置 */}
                            <div className="land-video-controls-dropdown-section">
                              <div className="land-video-controls-dropdown-section-title">播放速度</div>
                              <div className="land-video-controls-dropdown-section-content">
                                {[0.5, 0.75, 1, 1.25, 1.5, 2].map((speed) => (
                                  <button
                                    key={speed}
                                    className={`land-video-controls-dropdown-speed-btn ${rate === speed ? 'active' : ''}`}
                                    onClick={() => handleRateChange(speed, { value: speed })}
                                  >
                                    {speed}x
                                  </button>
                                ))}
                              </div>
                            </div>

                            {/* 循环设置 */}
                            <div className="land-video-controls-dropdown-section">
                              <button
                                className={`land-video-controls-dropdown-toggle-btn ${loop ? 'active' : ''}`}
                                onClick={() => setLoop(!loop)}
                              >
                                <Icon name="loop" size={16} />
                                <span>循环播放</span>
                                <div className={`land-video-controls-dropdown-toggle ${loop ? 'active' : ''}`}></div>
                              </button>
                            </div>

                            <div className="land-video-controls-dropdown-divider"></div>

                            <div className='land-video-controls-dropdown-buttons'>
                              {/* 其他控件 */}
                              <button
                                className="land-video-controls-button small-screen"
                                onClick={handleSmallScreen}
                              >
                                <Icon name="video-small-screen" size={20} />
                                <span>画中画</span>
                              </button>
                              {onFullWidthChange && (
                                <button
                                  className="land-video-controls-button full-width"
                                  onClick={() => {
                                    setFullWidth(!fullWidth);
                                    onFullWidthChange?.(!fullWidth);
                                  }}
                                >
                                  <Icon
                                    name="video-full-width"
                                    size={20}
                                    reverse={fullWidth}
                                  />
                                  <span>宽屏模式</span>
                                </button>
                              )}
                              <button
                                className="land-video-controls-button full-view"
                                onClick={() => setFullView(!fullView)}
                              >
                                {fullView ? (
                                  <Icon name="zoom-out" size={20} />
                                ) : (
                                  <Icon name="zoom-in" size={20} />
                                )}
                                <span>{fullView ? "退出网页全屏" : "网页全屏"}</span>
                              </button>
                              <button
                                className="land-video-controls-button full-screen"
                                onClick={handleFullScreen}
                              >
                                <Icon name="zoom-in-arrow" size={20} />
                                <span>全屏模式</span>
                              </button>
                            </div>
                          </div>
                        }
                      >
                        <button className="land-video-controls-button more">
                          <Icon name="more" size={20} />
                        </button>
                      </Dropdown>
                    </div>
                  ) : (
                    <div className="land-video-controls-right">
                      <button className="land-video-controls-button setting hover-pop">
                        <Icon name="setting" size={20} />
                        <div className="land-video-setting-panel">
                          <div className="land-video-setting-content">
                            <VideoSetting
                              rateValue={rate}
                              onRateChange={(val, item) =>
                                handleRateChange?.(val, item)
                              }
                              loop={loop}
                              onLoopChange={() => setLoop(!loop)}
                            />
                          </div>
                        </div>
                      </button>
                      <button
                        className="land-video-controls-button small-screen hover-pop"
                        onClick={handleSmallScreen}
                      >
                        <Icon
                          name="video-small-screen"
                          size={20}
                        />
                        <PopOver content="画中画模式" theme="dark" />
                      </button>
                      {onFullWidthChange && (
                        <button
                          className="land-video-controls-button full-width hover-pop"
                          onClick={() => {
                            setFullWidth(!fullWidth);
                            onFullWidthChange?.(!fullWidth);
                          }}
                        >
                          <Icon
                            name="video-full-width"
                            size={20}

                            reverse={fullWidth}
                          />
                          <PopOver content="宽屏模式" theme="dark" />
                        </button>
                      )}
                      <button
                        className="land-video-controls-button full-view hover-pop"
                        onClick={() => setFullView(!fullView)}
                      >
                        {fullView ? (
                          <Icon name="zoom-out" size={20} />
                        ) : (
                          <Icon name="zoom-in" size={20} />
                        )}
                        <PopOver
                          content={
                            fullView ? "退出网页全屏模式" : "网页全屏模式"
                          }
                          theme="dark"
                        />
                      </button>
                      <button
                        className="land-video-controls-button full-screen hover-pop"
                        onClick={handleFullScreen}
                        title="全屏模式 (F)"
                      >
                        <Icon name="zoom-in-arrow" size={20} />
                        <PopOver content="全屏模式" theme="dark" />
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ),
            gap: 0,
            hoverShow: true,
          } : null}
          centerOption={{
            content:
              loss && !isInitialLoad ? (
                <Loading size={32} color="white" strokeSize={4} />
              ) : (
                <div className="land-video-tags-container">
                  {!isPlaying ? (
                    <Icon name="video-pause" size={32} />
                  ) : (
                    <Icon name="video-play" size={20} />
                  )}
                </div>
              ),
            style: {
              opacity:
                showCenterPlay || loss || !isPlaying ? 1 : 0,
              pointerEvents: "none",
            },
          }}
          lcOption={{
            content: (
              <div className="land-video-tags-container">
                <Icon name="arrow-double" className="back" size={28} />
                {forwardSecond}秒
              </div>
            ),
            style: { opacity: showBack ? 1 : 0 },
          }}
          rcOption={{
            content: (
              <div className="land-video-tags-container">
                <Icon name="arrow-double" className="front" size={28} />
                {forwardSecond}秒
              </div>
            ),
            style: { opacity: showFront ? 1 : 0 },
          }}
        ></AffixContainer>
      )}
    </div>
  );
};


export default Video;
