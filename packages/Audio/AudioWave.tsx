import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { AudioWaveProps, DEFAULT_WAVE_HEIGHT, DEFAULT_WAVE_SAMPLE_COUNT, DEFAULT_WAVE_BAR_WIDTH, DEFAULT_WAVE_BAR_GAP } from './props';
import { generateWaveformData } from './hooks/drawWaveform';
import { drawBarWave, drawLineWave } from './hooks/drawWave';
import Loading from '../Loading';

const AudioWave: React.FC<AudioWaveProps> = ({
  src,
  audioRef: externalAudioRef,
  playing = false,
  currentTime: externalCurrentTime,
  duration: externalDuration,
  type = 'bar',
  sampleCount = DEFAULT_WAVE_SAMPLE_COUNT,
  barWidth = DEFAULT_WAVE_BAR_WIDTH,
  barGap = DEFAULT_WAVE_BAR_GAP,
  defaultColor = 'var(--color-border-2)',
  activeColor = 'var(--color-primary-6)',
  normalize = true,
  amplify = false,
  height = DEFAULT_WAVE_HEIGHT,
  onPlayChange,
  onSeek,
  className = '',
  style,
}) => {
  // ─── Refs ───
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const internalAudioRef = useRef<HTMLAudioElement>(null);
  const animationRef = useRef<number>();
  const containerRef = useRef<HTMLDivElement>(null);

  // ─── 状态 ───
  const [waveData, setWaveData] = useState<number[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [internalCurrentTime, setInternalCurrentTime] = useState(0);
  const [internalDuration, setInternalDuration] = useState(0);

  // 使用外部或内部的音频引用
  const audioRef = externalAudioRef || internalAudioRef;
  const currentTime = externalCurrentTime ?? internalCurrentTime;
  const duration = externalDuration ?? internalDuration;

  // ─── 生成波形数据 ───
  useEffect(() => {
    if (!src) return;

    const generateData = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
        const response = await fetch(src);
        const arrayBuffer = await response.arrayBuffer();
        const audioBuffer = await audioContext.decodeAudioData(arrayBuffer);

        const data = generateWaveformData(audioBuffer, sampleCount);
        setWaveData(data);

        audioContext.close();
      } catch (err) {
        setError(err instanceof Error ? err.message : '波形加载失败');
        console.error('波形生成失败:', err);
      } finally {
        setIsLoading(false);
      }
    };

    generateData();
  }, [src, sampleCount]);

  // ─── 绘制波形 ───
  const drawWaveform = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas || waveData.length === 0) return;

    const container = containerRef.current;
    if (container) {
      const rect = container.getBoundingClientRect();
      if (canvas.width !== rect.width || canvas.height !== rect.height) {
        canvas.width = rect.width;
        canvas.height = rect.height;
      }
    }

    const progress = duration > 0 ? currentTime / duration : 0;

    if (type === 'bar') {
      drawBarWave({
        data: waveData,
        canvas,
        progress,
        barWidth,
        barGap,
        defaultColor,
        activeColor,
        normalize,
        amplify,
      });
    } else {
      drawLineWave({
        data: waveData,
        canvas,
        progress,
        defaultColor,
        activeColor,
      });
    }
  }, [waveData, currentTime, duration, type, barWidth, barGap, defaultColor, activeColor, normalize, amplify]);

  // ─── 动画循环 ───
  const startAnimation = useCallback(() => {
    const animate = () => {
      drawWaveform();
      animationRef.current = requestAnimationFrame(animate);
    };
    animate();
  }, [drawWaveform]);

  const stopAnimation = useCallback(() => {
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
      animationRef.current = undefined;
    }
  }, []);

  // ─── 播放状态控制动画 ───
  useEffect(() => {
    if (playing) {
      startAnimation();
    } else {
      stopAnimation();
      drawWaveform(); // 停止时绘制当前状态
    }

    return () => stopAnimation();
  }, [playing, startAnimation, stopAnimation, drawWaveform]);

  // ─── 内部音频事件处理 ───
  useEffect(() => {
    const audio = internalAudioRef.current;
    if (!audio || externalAudioRef) return;

    const handleTimeUpdate = () => {
      setInternalCurrentTime(audio.currentTime);
    };

    const handleLoadedMetadata = () => {
      setInternalDuration(audio.duration);
    };

    const handlePlay = () => {
      onPlayChange?.(true);
    };

    const handlePause = () => {
      onPlayChange?.(false);
    };

    audio.addEventListener('timeupdate', handleTimeUpdate);
    audio.addEventListener('loadedmetadata', handleLoadedMetadata);
    audio.addEventListener('play', handlePlay);
    audio.addEventListener('pause', handlePause);

    return () => {
      audio.removeEventListener('timeupdate', handleTimeUpdate);
      audio.removeEventListener('loadedmetadata', handleLoadedMetadata);
      audio.removeEventListener('play', handlePlay);
      audio.removeEventListener('pause', handlePause);
    };
  }, [externalAudioRef, onPlayChange]);

  // ─── 初始绘制 ───
  useEffect(() => {
    if (waveData.length > 0) {
      setTimeout(() => drawWaveform(), 50);
    }
  }, [waveData, drawWaveform]);

  // ─── 监听尺寸变化 ───
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const observer = new ResizeObserver(() => {
      if (waveData.length > 0) {
        drawWaveform();
      }
    });

    observer.observe(container);
    return () => observer.disconnect();
  }, [waveData, drawWaveform]);

  // ─── 点击跳转 ───
  const handleClick = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!onSeek || !containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const progress = Math.max(0, Math.min(1, x / rect.width));
    onSeek(progress);
  }, [onSeek]);

  // ─── 类名计算 ───
  const waveClassName = useMemo(() => {
    const classes = ['land-audio-wave'];
    if (type) classes.push(`land-audio-wave--${type}`);
    if (isLoading) classes.push('land-audio-wave--loading');
    if (error) classes.push('land-audio-wave--error');
    if (className) classes.push(className);
    return classes.join(' ');
  }, [type, isLoading, error, className]);

  // ─── 错误状态 ───
  if (error) {
    return (
      <div className={waveClassName} style={{ height, ...style }}>
        <div className="land-audio-wave__error">{error}</div>
      </div>
    );
  }

  // ─── 加载状态 ───
  if (isLoading) {
    return (
      <div className={waveClassName} style={{ height, ...style }}>
        <Loading size={20} color="var(--color-text-3)" strokeSize={2} />
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className={waveClassName}
      style={{ height, ...style }}
      onClick={handleClick}
    >
      {/* 内部音频元素 (仅在没有外部引用时使用) */}
      {!externalAudioRef && (
        <audio
          ref={internalAudioRef}
          src={src}
          preload="metadata"
          className="land-audio-wave__audio"
        />
      )}

      {/* Canvas 波形 */}
      <canvas
        ref={canvasRef}
        className="land-audio-wave__canvas"
      />
    </div>
  );
};

export default AudioWave;
