import { useEffect, useRef, useCallback } from 'react';

const useClickOutside = (ref: React.RefObject<HTMLElement>, callback: (event: Event) => void) => {
  const callbackRef = useRef(callback); // 使用 useRef 存储回调函数

  useEffect(() => {
    callbackRef.current = callback; // 更新回调函数
  }, [callback]);

  const handleClickOutside = useCallback((event: Event) => {
    if (ref.current && !ref.current.contains(event.target as Node)) {
      callbackRef.current(event);
    }
  }, [ref]);

  useEffect(() => {
    document.body.addEventListener('mousedown', handleClickOutside);
    document.body.addEventListener('touchstart', handleClickOutside);

    return () => {
      document.body.removeEventListener('mousedown', handleClickOutside);
      document.body.removeEventListener('touchstart', handleClickOutside);
    };
  }, [handleClickOutside]);
};

export default useClickOutside;
