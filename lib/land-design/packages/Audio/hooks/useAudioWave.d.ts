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
export declare function useAudioWave({ audioUrl, play, onPlayChange, sampleCount, barWidth, barGap, defaultColor, activeColor, normalize, amplify, type }: UseAudioWaveOptions): {
    canvasRef: import('react').MutableRefObject<HTMLCanvasElement>;
    audioRef: import('react').MutableRefObject<HTMLAudioElement>;
    waveData: number[];
    isLoading: boolean;
    error: string;
    isPlaying: boolean;
    drawWaveform: () => void;
    startAnimation: () => void;
    stopAnimation: () => void;
};
export {};
