import { WaveDrawParams } from '../props';
/**
 * 绘制柱状图波形
 */
export declare function drawBarWave({ data, canvas, progress, barWidth, barGap, defaultColor, activeColor, normalize, amplify, }: WaveDrawParams): void;
/**
 * 绘制折线图波形
 */
export declare function drawLineWave({ data, canvas, progress, defaultColor, activeColor, }: Pick<WaveDrawParams, 'data' | 'canvas' | 'progress' | 'defaultColor' | 'activeColor'>): void;
export declare function drawWave(data: number[], canvas: HTMLCanvasElement, audio: HTMLAudioElement, samples: number, barWidth?: number, barGap?: number, defaultColor?: string, activeColor?: string, normalize?: boolean, amplify?: boolean): void;
