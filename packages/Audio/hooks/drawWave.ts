import { mapToNewRange } from "./mapToNewRange";

export function drawWave(
  data: number[],
  canvas: HTMLCanvasElement,
  audio: HTMLAudioElement,
  samples: number,
  barWidth: number = 2,
  barGap: number = 2,
  defaultColor: string = "#999",
  activeColor: string = "#FF0000",
  normalize?: boolean,
  amplify?: boolean
) {
  console.log('drawWave', data, 'canvas size:', canvas.width, 'x', canvas.height);

  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  let newData = data;

  // 确保数据不为空
  if (newData.length === 0) {
    console.warn('No wave data to draw');
    return;
  }

  if (normalize) {
    const max = Math.max(...data);
    if (max > 0) {
      newData = mapToNewRange(data, 0, max);
    }
  }

  if (amplify) {
    const min = Math.min(...data);
    const max = Math.max(...data);
    const newMin = Math.min(...data.filter((i) => i !== min));
    newData = mapToNewRange(
      data.filter((i) => i !== min),
      newMin,
      max
    );
  }

  const width = canvas.width;
  const height = canvas.height;

  // 确保canvas有尺寸
  if (width === 0 || height === 0) {
    console.warn('Canvas has no size');
    return;
  }

  const currentTime = audio.currentTime || 0;
  const duration = audio.duration || 1;
  const playedSamples = Math.floor((currentTime / duration) * samples);

  ctx.clearRect(0, 0, width, height);

  // 计算总宽度和缩放比例
  const totalBarWidth = barWidth + barGap;
  const maxBars = Math.floor(width / totalBarWidth);
  const actualBars = Math.min(newData.length, maxBars);

  // 计算数据缩放比例，确保条形有最小高度
  const maxValue = Math.max(...newData);
  const minBarHeight = 2; // 最小条形高度
  const scale = maxValue > 0 ? Math.max(height * 0.8 / maxValue, minBarHeight / maxValue) : 1;

  console.log('Drawing bars:', actualBars, 'maxValue:', maxValue, 'scale:', scale);

  for (let i = 0; i < actualBars; i++) {
    const value = newData[i] || 0;
    const x = i * totalBarWidth;
    const barHeight = Math.max(value * scale, minBarHeight);
    const y = height - barHeight;

    ctx.fillStyle = i < playedSamples ? activeColor : defaultColor;
    ctx.fillRect(x, y, barWidth, barHeight);
  }
}