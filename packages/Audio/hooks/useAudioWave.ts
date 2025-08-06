import { useEffect, useRef, useState, useCallback } from 'react';
import { drawWave } from './drawWave';
import { drawWaveform } from './drawWaveform';

interface UseAudioWaveOptions {
  audioUrl: string;
  play?: boolean;
  onPlayChange?: (play: boolean) => void;
  sampleCount?: number;
  barWidth?: number;
  barGap?: number;
  defaultColor?: string;
  activeColor?: string;
  normalize?: boolean;
  amplify?: boolean;
  type?: 'bar' | 'line';
}

export function useAudioWave({
  audioUrl,
  play = false,
  onPlayChange,
  sampleCount = 100,
  barWidth = 2,
  barGap = 1,
  defaultColor = "var(--color-gray-12)",
  activeColor = "var(--color-primary-6)",
  normalize = true,
  amplify = false,
  type = 'bar'
}: UseAudioWaveOptions) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const audioRef = useRef<HTMLAudioElement>(null);
  const animationRef = useRef<number>();
  const [waveData, setWaveData] = useState<number[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isPlaying, setIsPlaying] = useState(play);

  // 生成波形数据
  const generateWaveData = useCallback(async () => {
    if (!audioUrl) return;

    setIsLoading(true);
    setError(null);

    try {
      // 创建音频上下文
      const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();

      // 获取音频数据
      const response = await fetch(audioUrl);
      const arrayBuffer = await response.arrayBuffer();
      const audioBuffer = await audioContext.decodeAudioData(arrayBuffer);

      // 生成波形数据
      const data = drawWaveform(audioBuffer, sampleCount);
      setWaveData(data || []);

      // 关闭音频上下文
      audioContext.close();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to generate wave data');
      console.error('Error generating wave data:', err);
    } finally {
      setIsLoading(false);
    }
  }, [audioUrl, sampleCount]);

  // 绘制波形
  const renderWaveform = useCallback(() => {
    if (!canvasRef.current || waveData.length === 0) return;

    const canvas = canvasRef.current;

    // 设置canvas尺寸
    const container = canvas.parentElement;
    if (container) {
      const rect = container.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;
    }

    // 如果没有音频元素，创建一个临时的来获取播放进度
    const audio = audioRef.current || new Audio(audioUrl);

    if (type === 'bar') {
      // 绘制柱状图波形
      drawWave(
        waveData,
        canvas,
        audio,
        sampleCount,
        barWidth,
        barGap,
        defaultColor,
        activeColor,
        normalize,
        amplify
      );
    } else {
      // 绘制折线图波形
      drawLineWaveform(
        waveData,
        canvas,
        audio,
        defaultColor,
        activeColor
      );
    }
  }, [waveData, sampleCount, barWidth, barGap, defaultColor, activeColor, normalize, amplify, type, audioUrl]);

  // 绘制折线图波形
  const drawLineWaveform = useCallback((
    data: number[],
    canvas: HTMLCanvasElement,
    audio: HTMLAudioElement,
    defaultColor: string,
    activeColor: string
  ) => {
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const width = canvas.width;
    const height = canvas.height;

    // 确保canvas有尺寸
    if (width === 0 || height === 0) {
      console.warn('Canvas has no size for line waveform');
      return;
    }

    const currentTime = audio.currentTime || 0;
    const duration = audio.duration || 1;
    const playedSamples = Math.floor((currentTime / duration) * data.length);

    ctx.clearRect(0, 0, width, height);

    // 确保数据不为空
    if (data.length === 0) {
      console.warn('No data for line waveform');
      return;
    }

    // 计算缩放比例
    const maxValue = Math.max(...data);
    const scaleY = maxValue > 0 ? height * 0.6 / maxValue : 1;
    const stepX = width / (data.length - 1);

    // 绘制背景线
    ctx.beginPath();
    ctx.strokeStyle = defaultColor;
    ctx.lineWidth = 1;
    ctx.setLineDash([2, 2]);
    ctx.moveTo(0, height / 2);
    ctx.lineTo(width, height / 2);
    ctx.stroke();
    ctx.setLineDash([]);

    // 绘制波形线
    ctx.beginPath();
    ctx.strokeStyle = defaultColor;
    ctx.lineWidth = 2;

    data.forEach((value, index) => {
      const x = index * stepX;
      const y = height / 2 - (value * scaleY);

      if (index === 0) {
        ctx.moveTo(x, y);
      } else {
        ctx.lineTo(x, y);
      }
    });

    ctx.stroke();

    // 绘制播放进度
    if (playedSamples > 0) {
      ctx.beginPath();
      ctx.strokeStyle = activeColor;
      ctx.lineWidth = 3;

      for (let i = 0; i < Math.min(playedSamples, data.length); i++) {
        const x = i * stepX;
        const y = height / 2 - (data[i] * scaleY);

        if (i === 0) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }
      }

      ctx.stroke();
    }
  }, []);

  // 动画循环
  const animate = useCallback(() => {
    renderWaveform();
    animationRef.current = requestAnimationFrame(animate);
  }, [renderWaveform]);

  // 开始动画
  const startAnimation = useCallback(() => {
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
    }
    animate();
  }, [animate]);

  // 停止动画
  const stopAnimation = useCallback(() => {
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
      animationRef.current = undefined;
    }
  }, []);

  // 初始化
  useEffect(() => {
    generateWaveData();
  }, [generateWaveData]);

  // 控制播放状态
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    if (play) {
      audio.play().catch(err => {
        console.error('Failed to play audio:', err);
        setIsPlaying(false);
        onPlayChange?.(false);
      });
    } else {
      audio.pause();
    }
  }, [play, onPlayChange]);

  // 监听音频播放状态
  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handlePlay = () => {
      setIsPlaying(true);
      onPlayChange?.(true);
      startAnimation();
    };

    const handlePause = () => {
      setIsPlaying(false);
      onPlayChange?.(false);
      stopAnimation();
    };

    const handleEnded = () => {
      setIsPlaying(false);
      onPlayChange?.(false);
      stopAnimation();
    };

    audio.addEventListener('play', handlePlay);
    audio.addEventListener('pause', handlePause);
    audio.addEventListener('ended', handleEnded);

    return () => {
      audio.removeEventListener('play', handlePlay);
      audio.removeEventListener('pause', handlePause);
      audio.removeEventListener('ended', handleEnded);
      stopAnimation();
    };
  }, [startAnimation, stopAnimation, onPlayChange]);

  // 组件卸载时清理
  useEffect(() => {
    return () => {
      stopAnimation();
    };
  }, [stopAnimation]);

  return {
    canvasRef,
    audioRef,
    waveData,
    isLoading,
    error,
    isPlaying,
    drawWaveform: renderWaveform,
    startAnimation,
    stopAnimation
  };
} 