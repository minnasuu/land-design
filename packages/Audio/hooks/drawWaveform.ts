/**
 * 生成波形数据
 * @param buffer 音频缓冲区
 * @param samples 采样数量
 * @returns 波形数据数组
 */
export function generateWaveformData(buffer: AudioBuffer, samples: number): number[] {
  const rawData = buffer.getChannelData(0);
  const blockSize = Math.floor(rawData.length / samples);
  const filteredData: number[] = [];

  for (let i = 0; i < samples; i++) {
    const blockStart = blockSize * i;
    let sum = 0;

    for (let j = 0; j < blockSize; j++) {
      sum += Math.abs(rawData[blockStart + j]);
    }

    const value = sum / blockSize;
    if (!Number.isNaN(value)) {
      filteredData.push(value);
    }
  }

  return filteredData;
}

// 保留原有导出名称以保持兼容性
export const drawWaveform = generateWaveformData;
