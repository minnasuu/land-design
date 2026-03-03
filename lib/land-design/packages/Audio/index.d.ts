import { default as React } from 'react';
import { default as AudioButton } from './AudioButton';
import { default as AudioAnimationIcon } from './AudioAnimationIcon';
import { default as AudioWave } from './AudioWave';
import { default as AudioProgress } from './AudioProgress';
import { AudioProps } from './props';
declare const Audio: React.FC<AudioProps> & {
    Button: typeof AudioButton;
    AnimationIcon: typeof AudioAnimationIcon;
    Wave: typeof AudioWave;
    Progress: typeof AudioProgress;
};
export * from './props';
export { default as AudioWave } from './AudioWave';
export { default as AudioButton } from './AudioButton';
export { default as AudioAnimationIcon } from './AudioAnimationIcon';
export { default as AudioProgress } from './AudioProgress';
export default Audio;
