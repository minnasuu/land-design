import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import AudioButton from './AudioButton';
import AudioAnimationIcon from './AudioAnimationIcon';
import AudioWave from './AudioWave';
import AudioProgress from './AudioProgress';
import useFormateTime from '../hooks/useFormateTime';
import {
  AudioProps,
  AudioStatus,
  AudioEventData,
  DEFAULT_WAVE_SAMPLE_COUNT,
  DEFAULT_WAVE_BAR_WIDTH,
  DEFAULT_WAVE_BAR_GAP,
  DEFAULT_WAVE_HEIGHT,
  DEFAULT_VOLUME,
} from './props';
import './index.scss';

const Audio: React.FC<AudioProps> & {
  Button: typeof AudioButton;
  AnimationIcon: typeof AudioAnimationIcon;
  Wave: typeof AudioWave;
  Progress: typeof AudioProgress;
} = ({
  // 基础属性
  src,
  title,
  cover,

  // 播放控制
  autoPlay = false,
  loop = false,
  muted: mutedProp = false,
  volume: volumeProp = DEFAULT_VOLUME,
  playbackRate = 1,
  preload = 'metadata',

  // 控件配置
  showPlayButton = true,
  showProgress = true,
  showTime = true,
  showVolume = false,

  // 波形配置
  showWave = false,
  waveType = 'bar',
  waveSampleCount = DEFAULT_WAVE_SAMPLE_COUNT,
  waveBarWidth = DEFAULT_WAVE_BAR_WIDTH,
  waveBarGap = DEFAULT_WAVE_BAR_GAP,
  waveDefaultColor = 'var(--color-border-2)',
  waveActiveColor = 'var(--color-primary-6)',
  waveNormalize = true,
  waveAmplify = false,
  waveHeight = DEFAULT_WAVE_HEIGHT,

  // 事件回调
  onPlay,
  onPause,
  onEnded,
  onTimeUpdate,
  onVolumeChange,
  onSeek,
  onLoaded,
  onError,
  onStatusChange,

  // 样式定制
  className = '',
  style,
  progressColor = 'var(--color-primary-6)',
  children,
}) => {
  // ─── Refs ───
  const audioRef = useRef<HTMLAudioElement>(null);

  // ─── 状态 ───
  const [status, setStatus] = useState<AudioStatus>('idle');
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [buffered, setBuffered] = useState(0);
  const [volume, setVolume] = useState(volumeProp);
  const [muted, setMuted] = useState(mutedProp);
  const [isDragging, setIsDragging] = useState(false);

  // ─── 事件数据生成 ───
  const getEventData = useCallback((): AudioEventData => ({
    currentTime,
    duration,
    progress: duration > 0 ? currentTime / duration : 0,
    volume,
    muted,
    playbackRate,
    status,
  }), [currentTime, duration, volume, muted, playbackRate, status]);

  // ─── 状态更新 ───
  const updateStatus = useCallback((newStatus: AudioStatus) => {
    setStatus(newStatus);
    onStatusChange?.(newStatus);
  }, [onStatusChange]);

  // ─── 播放控制 ───
  const handlePlayToggle = useCallback(async () => {
    if (!audioRef.current) return;

    try {
      if (audioRef.current.paused) {
        await audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
    } catch (error) {
      console.error('播放失败:', error);
      updateStatus('error');
      onError?.(error as Error);
    }
  }, [updateStatus, onError]);

  // ─── 进度跳转 ───
  const handleSeek = useCallback((progress: number) => {
    if (!audioRef.current || !duration) return;

    const newTime = progress * duration;
    audioRef.current.currentTime = newTime;
    setCurrentTime(newTime);
    onSeek?.(newTime);
  }, [duration, onSeek]);

  // ─── 音量控制 ───
  const handleVolumeChange = useCallback((val: number) => {
    if (!audioRef.current) return;

    const newVolume = Math.max(0, Math.min(100, val));
    setVolume(newVolume);
    audioRef.current.volume = newVolume / 100;

    if (newVolume > 0 && muted) {
      setMuted(false);
      audioRef.current.muted = false;
    }

    onVolumeChange?.(newVolume, newVolume === 0);
  }, [muted, onVolumeChange]);

  // ─── 音频事件处理 ───
  const handleTimeUpdate = useCallback(() => {
    if (!audioRef.current || isDragging) return;

    const audio = audioRef.current;
    setCurrentTime(audio.currentTime);

    if (audio.buffered.length > 0) {
      setBuffered(audio.buffered.end(audio.buffered.length - 1));
    }

    onTimeUpdate?.(getEventData());
  }, [isDragging, getEventData, onTimeUpdate]);

  const handleLoadedMetadata = useCallback(() => {
    if (!audioRef.current) return;

    const audio = audioRef.current;
    setDuration(audio.duration);
    updateStatus('idle');
    onLoaded?.(getEventData());
  }, [getEventData, updateStatus, onLoaded]);

  const handleAudioPlay = useCallback(() => {
    setIsPlaying(true);
    updateStatus('playing');
    onPlay?.(getEventData());
  }, [getEventData, updateStatus, onPlay]);

  const handleAudioPause = useCallback(() => {
    setIsPlaying(false);
    updateStatus('paused');
    onPause?.(getEventData());
  }, [getEventData, updateStatus, onPause]);

  const handleAudioEnded = useCallback(() => {
    setIsPlaying(false);
    updateStatus('ended');
    onEnded?.(getEventData());
  }, [getEventData, updateStatus, onEnded]);

  const handleAudioError = useCallback(() => {
    updateStatus('error');
    onError?.(new Error('音频加载失败'));
  }, [updateStatus, onError]);

  // ─── 初始化 ───
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume / 100;
      audioRef.current.muted = muted;
      audioRef.current.playbackRate = playbackRate;
    }
  }, []);

  // ─── 类名计算 ───
  const containerClassName = useMemo(() => {
    const classes = ['land-audio'];
    if (status === 'error') classes.push('land-audio--error');
    if (showWave) classes.push('land-audio--with-wave');
    if (className) classes.push(className);
    return classes.join(' ');
  }, [status, showWave, className]);

  // ─── 渲染进度/波形 ───
  const renderProgressArea = () => {
    if (showWave) {
      return (
        <AudioWave
          src={src}
          audioRef={audioRef}
          playing={isPlaying}
          currentTime={currentTime}
          duration={duration}
          type={waveType}
          sampleCount={waveSampleCount}
          barWidth={waveBarWidth}
          barGap={waveBarGap}
          defaultColor={waveDefaultColor}
          activeColor={waveActiveColor}
          normalize={waveNormalize}
          amplify={waveAmplify}
          height={waveHeight}
          onSeek={handleSeek}
        />
      );
    }

    if (showProgress) {
      return (
        <AudioProgress
          progress={duration > 0 ? currentTime / duration : 0}
          buffered={duration > 0 ? buffered / duration : 0}
          activeColor={progressColor}
          onChange={handleSeek}
          onDragStart={() => setIsDragging(true)}
          onDragEnd={() => setIsDragging(false)}
        />
      );
    }

    return null;
  };

  return (
    <div className={containerClassName} style={style}>
      {/* 隐藏的音频元素 */}
      <audio
        ref={audioRef}
        src={src}
        autoPlay={autoPlay}
        loop={loop}
        muted={muted}
        preload={preload}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        onPlay={handleAudioPlay}
        onPause={handleAudioPause}
        onEnded={handleAudioEnded}
        onError={handleAudioError}
        className="land-audio__element"
      />

      {/* 封面图 */}
      {cover && (
        <div className="land-audio__cover">
          <img src={cover} alt={title || 'audio cover'} />
        </div>
      )}

      {/* 主要内容区 */}
      <div className="land-audio__content">
        {/* 标题 */}
        {title && <div className="land-audio__title">{title}</div>}

        {/* 控制区 */}
        <div className="land-audio__controls">
          {/* 播放按钮 */}
          {showPlayButton && (
            <AudioButton
              playing={isPlaying}
              loading={status === 'loading'}
              onClick={handlePlayToggle}
            />
          )}

          {/* 进度区域 (进度条或波形) */}
          <div className="land-audio__progress-area">
            {renderProgressArea()}
          </div>

          {/* 时间显示 */}
          {showTime && (
            <div className="land-audio__time">
              <span className="land-audio__time-current">{useFormateTime(currentTime)}</span>
              <span className="land-audio__time-separator">/</span>
              <span className="land-audio__time-duration">{useFormateTime(duration)}</span>
            </div>
          )}
        </div>
      </div>

      {/* 自定义内容 */}
      {children}
    </div>
  );
};

// 子组件挂载
Audio.Button = AudioButton;
Audio.AnimationIcon = AudioAnimationIcon;
Audio.Wave = AudioWave;
Audio.Progress = AudioProgress;

// 导出类型定义
export * from './props';

// 导出子组件
export { default as AudioWave } from './AudioWave';
export { default as AudioButton } from './AudioButton';
export { default as AudioAnimationIcon } from './AudioAnimationIcon';
export { default as AudioProgress } from './AudioProgress';

export default Audio;
