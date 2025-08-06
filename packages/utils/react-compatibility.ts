import React from 'react';

/**
 * React 18/19 兼容性工具
 * 用于处理不同React版本之间的差异
 */

// 检测React版本
export const getReactVersion = (): '18' | '19' => {
  const version = React.version;
  if (version.startsWith('19')) {
    return '19';
  }
  return '18';
};

// 检查是否支持React 19的新特性
export const supportsReact19Features = (): boolean => {
  return getReactVersion() === '19';
};

// 安全的React节点类型
export type SafeReactNode =
  | React.ReactElement
  | string
  | number
  | boolean
  | null
  | undefined
  | React.ReactFragment
  | React.ReactPortal;

// 兼容性包装器，确保组件在不同React版本中都能正常工作
export const createCompatibleComponent = <P extends Record<string, any>>(
  Component: React.ComponentType<P>
) => {
  return React.memo(Component);
};

// 条件渲染辅助函数，根据React版本选择不同的实现
export const conditionalRender = <T>(
  react18Value: T,
  react19Value: T
): T => {
  return supportsReact19Features() ? react19Value : react18Value;
};

// 安全的useState包装器
export const createSafeState = <T>(initialValue: T) => {
  return React.useState<T>(initialValue);
};

// 安全的useEffect包装器
export const createSafeEffect = (
  effect: React.EffectCallback,
  deps?: React.DependencyList
) => {
  return React.useEffect(effect, deps);
};

// 安全的useCallback包装器
export const createSafeCallback = <T extends (...args: any[]) => any>(
  callback: T,
  deps: React.DependencyList
): T => {
  return React.useCallback(callback, deps);
};

// 安全的useMemo包装器
export const createSafeMemo = <T>(
  factory: () => T,
  deps: React.DependencyList
): T => {
  return React.useMemo(factory, deps);
};

// 安全的useRef包装器
export const createSafeRef = <T>(initialValue: T): React.MutableRefObject<T> => {
  return React.useRef<T>(initialValue);
};

// 导出React版本信息
export const REACT_VERSION = getReactVersion();
export const IS_REACT_19 = REACT_VERSION === '19'; 