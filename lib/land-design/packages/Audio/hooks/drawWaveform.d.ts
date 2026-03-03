/**
 * 生成波形数据
 * @param buffer 音频缓冲区
 * @param samples 采样数量
 * @returns 波形数据数组
 */
export declare function generateWaveformData(buffer: AudioBuffer, samples: number): number[];
export declare const drawWaveform: typeof generateWaveformData;
