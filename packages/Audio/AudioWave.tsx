import { AudioWaveProps } from "./props";
import React from "react";
import { useAudioWave } from "./hooks/useAudioWave";
import './index.scss';

const AudioWave: React.FC<AudioWaveProps> = ({
  audioUrl,
  play = false,
  onPlayChange,
  canvas,
  audio,
  samples,
  barWidth = 2,
  barGap = 1,
  defaultColor = "var(--color-gray-12)",
  activeColor = "var(--color-primary-6)",
  normalize = true,
  amplify = false,
  type = 'bar',
  sampleCount = 100,
  style,
  className = "",
  children
}) => {
  const {
    canvasRef,
    audioRef,
    waveData,
    isLoading,
    error,
    isPlaying,
    drawWaveform
  } = useAudioWave({
    audioUrl,
    play,
    onPlayChange,
    sampleCount,
    barWidth,
    barGap,
    defaultColor,
    activeColor,
    normalize,
    amplify,
    type
  });

  // 如果传入了外部canvas和audio，使用外部的
  const finalCanvasRef = canvas ? { current: canvas } : canvasRef;
  const finalAudioRef = audio ? { current: audio } : audioRef;

  // 如果传入了预生成的samples数据，使用传入的数据
  const finalWaveData = samples || waveData;

  // 手动触发一次绘制
  React.useEffect(() => {
    if (finalWaveData.length > 0) {
      // 延迟一点确保canvas已经渲染
      setTimeout(() => {
        drawWaveform();
      }, 100);
    }
  }, [finalWaveData, drawWaveform]);

  // 监听canvas尺寸变化
  React.useEffect(() => {
    const canvas = finalCanvasRef.current;
    if (!canvas) return;

    const resizeObserver = new ResizeObserver(() => {
      if (finalWaveData.length > 0) {
        drawWaveform();
      }
    });

    resizeObserver.observe(canvas);
    return () => resizeObserver.disconnect();
  }, [finalWaveData, drawWaveform, finalCanvasRef]);

  if (error) {
    return (
      <div className={`land-audio-wave error ${className}`} style={style}>
        <div className="error-message">Failed to load audio: {error}</div>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className={`land-audio-wave loading ${className}`} style={style}>
        <div className="loading-spinner">Loading waveform...</div>
      </div>
    );
  }

  return (
    <div
      className={`land-audio-wave ${type} ${className}`}
      style={{
        position: 'relative',
        width: '100%',
        height: '60px',
        ...style
      }}
    >
      <canvas
        ref={finalCanvasRef}
        style={{
          width: '100%',
          height: '100%',
          display: 'block'
        }}
      />
      {children}
    </div>
  );
};

export default AudioWave;
