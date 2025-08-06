import { default as React } from 'react';
/**
 * React 18/19 兼容性工具
 * 用于处理不同React版本之间的差异
 */
export declare const getReactVersion: () => "18" | "19";
export declare const supportsReact19Features: () => boolean;
export type SafeReactNode = React.ReactElement | string | number | boolean | null | undefined | React.ReactFragment | React.ReactPortal;
export declare const createCompatibleComponent: <P extends Record<string, any>>(Component: React.ComponentType<P>) => React.MemoExoticComponent<React.ComponentType<P>>;
export declare const conditionalRender: <T>(react18Value: T, react19Value: T) => T;
export declare const createSafeState: <T>(initialValue: T) => [T, React.Dispatch<React.SetStateAction<T>>];
export declare const createSafeEffect: (effect: React.EffectCallback, deps?: React.DependencyList) => void;
export declare const createSafeCallback: <T extends (...args: any[]) => any>(callback: T, deps: React.DependencyList) => T;
export declare const createSafeMemo: <T>(factory: () => T, deps: React.DependencyList) => T;
export declare const createSafeRef: <T>(initialValue: T) => React.MutableRefObject<T>;
export declare const REACT_VERSION: "18" | "19";
export declare const IS_REACT_19: boolean;
