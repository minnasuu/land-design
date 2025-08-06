import { default as React } from 'react';
import { default as LinkWave } from './LinkWave';
import { LinkProps } from './props';
declare const Link: React.FC<LinkProps> & {
    LinkWave: typeof LinkWave;
};
export default Link;
export * from './props';
