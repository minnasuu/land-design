import { default as AudioButton } from './AudioButton';
import { default as AudioAnimationIcon } from './AudioAnimationIcon';
import { default as AudioWave } from './AudioWave';
import { AudioProps } from './props';
import { default as React } from 'react';
declare const Audio: React.FC<AudioProps> & {
    AudioButton: typeof AudioButton;
    AudioAnimationIcon: typeof AudioAnimationIcon;
    AudioWave: typeof AudioWave;
};
export * from './props';
export { default as AudioWave } from './AudioWave';
export { default as AudioButton } from './AudioButton';
export { default as AudioAnimationIcon } from './AudioAnimationIcon';
export default Audio;
