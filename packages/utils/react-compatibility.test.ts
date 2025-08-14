import { describe, it, expect } from 'vitest';
import { 
  getReactVersion, 
  supportsReact19Features, 
  IS_REACT_19,
  REACT_VERSION,
  getCanvasContext,
  safeCanvasOperation
} from './react-compatibility';

describe('React Compatibility Utils', () => {
  it('should get React version', () => {
    const version = getReactVersion();
    expect(version).toMatch(/^(18|19)$/);
  });

  it('should check React 19 features support', () => {
    const supports = supportsReact19Features();
    expect(typeof supports).toBe('boolean');
  });

  it('should export version constants', () => {
    expect(REACT_VERSION).toMatch(/^(18|19)$/);
    expect(typeof IS_REACT_19).toBe('boolean');
  });

  it('should handle canvas context safely', () => {
    // Mock canvas element
    const mockCanvas = {
      getContext: () => null,
      width: 100,
      height: 100
    } as unknown as HTMLCanvasElement;

    const ctx = getCanvasContext(mockCanvas, '2d');
    expect(ctx).toBeNull();
  });

  it('should handle safe canvas operations', () => {
    // Mock canvas element
    const mockCanvas = {
      getContext: () => null,
      width: 100,
      height: 100
    } as unknown as HTMLCanvasElement;

    const result = safeCanvasOperation(mockCanvas, (ctx) => 'test', 'fallback');
    expect(result).toBe('fallback');
  });
});
