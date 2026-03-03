import { WaveDrawParams } from '../props';
import { mapToNewRange } from './mapToNewRange';

/**
 * 绘制柱状图波形
 */
export function drawBarWave({
  data,
  canvas,
  progress,
  barWidth = 2,
  barGap = 1,
  defaultColor = '#999',
  activeColor = '#FF0000',
  normalize = true,
  amplify = false,
}: WaveDrawParams): void {
  const ctx = canvas.getContext('2d');
  if (!ctx || data.length === 0) return;

  let processedData = [...data];

  // 标准化处理
  if (normalize) {
    const max = Math.max(...data);
    if (max > 0) {
      processedData = mapToNewRange(data, 0, max);
    }
  }

  // 放大处理
  if (amplify) {
    const min = Math.min(...data);
    const max = Math.max(...data);
    const nonMinData = data.filter((i) => i !== min);
    if (nonMinData.length > 0) {
      const newMin = Math.min(...nonMinData);
      processedData = mapToNewRange(nonMinData, newMin, max);
    }
  }

  const { width, height } = canvas;
  if (width === 0 || height === 0) return;

  ctx.clearRect(0, 0, width, height);

  // 计算条形数量和尺寸
  const totalBarWidth = barWidth + barGap;
  const maxBars = Math.floor(width / totalBarWidth);
  const actualBars = Math.min(processedData.length, maxBars);

  // 计算缩放比例
  const maxValue = Math.max(...processedData);
  const minBarHeight = 2;
  const scale = maxValue > 0 ? Math.max((height * 0.85) / maxValue, minBarHeight / maxValue) : 1;

  // 计算已播放的条形数量
  const playedBars = Math.floor(progress * actualBars);

  // 绘制条形
  for (let i = 0; i < actualBars; i++) {
    const value = processedData[i] || 0;
    const x = i * totalBarWidth;
    const barHeight = Math.max(value * scale, minBarHeight);
    const y = (height - barHeight) / 2; // 垂直居中

    ctx.fillStyle = i < playedBars ? activeColor : defaultColor;
    ctx.beginPath();
    ctx.roundRect(x, y, barWidth, barHeight, barWidth / 2);
    ctx.fill();
  }
}

/**
 * 绘制折线图波形
 */
export function drawLineWave({
  data,
  canvas,
  progress,
  defaultColor = '#999',
  activeColor = '#FF0000',
}: Pick<WaveDrawParams, 'data' | 'canvas' | 'progress' | 'defaultColor' | 'activeColor'>): void {
  const ctx = canvas.getContext('2d');
  if (!ctx || data.length === 0) return;

  const { width, height } = canvas;
  if (width === 0 || height === 0) return;

  ctx.clearRect(0, 0, width, height);

  // 计算缩放比例
  const maxValue = Math.max(...data);
  const scaleY = maxValue > 0 ? (height * 0.7) / maxValue : 1;
  const stepX = width / (data.length - 1);

  // 计算已播放的采样数
  const playedSamples = Math.floor(progress * data.length);

  // 绘制中线
  ctx.beginPath();
  ctx.strokeStyle = defaultColor;
  ctx.lineWidth = 1;
  ctx.setLineDash([2, 2]);
  ctx.moveTo(0, height / 2);
  ctx.lineTo(width, height / 2);
  ctx.stroke();
  ctx.setLineDash([]);

  // 绘制默认波形
  ctx.beginPath();
  ctx.strokeStyle = defaultColor;
  ctx.lineWidth = 2;
  ctx.lineJoin = 'round';
  ctx.lineCap = 'round';

  data.forEach((value, index) => {
    const x = index * stepX;
    const y = height / 2 - value * scaleY;

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
      const y = height / 2 - data[i] * scaleY;

      if (i === 0) {
        ctx.moveTo(x, y);
      } else {
        ctx.lineTo(x, y);
      }
    }

    ctx.stroke();
  }
}

// 保留原有函数名称以保持兼容性
export function drawWave(
  data: number[],
  canvas: HTMLCanvasElement,
  audio: HTMLAudioElement,
  samples: number,
  barWidth: number = 2,
  barGap: number = 2,
  defaultColor: string = '#999',
  activeColor: string = '#FF0000',
  normalize?: boolean,
  amplify?: boolean
): void {
  const currentTime = audio.currentTime || 0;
  const duration = audio.duration || 1;
  const progress = currentTime / duration;

  drawBarWave({
    data,
    canvas,
    progress,
    barWidth,
    barGap,
    defaultColor,
    activeColor,
    normalize: normalize ?? false,
    amplify: amplify ?? false,
  });
}
