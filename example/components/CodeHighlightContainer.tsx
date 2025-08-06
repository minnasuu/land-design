//@ts-nocheck
import { Icon, LandButton, LandMessage } from "@suminhan/land-design";
import React, { CSSProperties, useMemo, useEffect, useState, useCallback } from "react";
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark, oneLight } from 'react-syntax-highlighter/dist/esm/styles/prism';

type Props = {
  language?: string;
  codeStr?: string;
  style?: CSSProperties;
  className?: string;
  showLineNumbers?: boolean;
  wrapLongLines?: boolean;
}

const CodeHighlightContainer: React.FC<Props> = ({
  language = 'text',
  codeStr = '',
  style,
  className = '',
  showLineNumbers = true,
  wrapLongLines = false,
}) => {
  // 实时检测暗黑模式
  const [isDark, setIsDark] = useState(() => {
    return document.documentElement.getAttribute('data-theme') === 'dark';
  });

  // 检查主题的函数
  const checkTheme = useCallback(() => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newIsDark = currentTheme === 'dark';
    setIsDark(newIsDark);
  }, []);

  // 监听主题变化
  useEffect(() => {
    // 初始检查
    checkTheme();

    // 创建MutationObserver监听data-theme属性变化
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'attributes' && mutation.attributeName === 'data-theme') {
          checkTheme();
        }
      });
    });

    // 监听documentElement的属性变化
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme']
    });

    // 监听CSS变量变化（备用方案）
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handleMediaChange = () => {
      checkTheme();
    };
    mediaQuery.addEventListener('change', handleMediaChange);

    // 清理函数
    return () => {
      observer.disconnect();
      mediaQuery.removeEventListener('change', handleMediaChange);
    };
  }, [checkTheme]);

  // 根据语言选择合适的主题
  const theme = useMemo(() => {
    return isDark ? oneDark : oneLight;
  }, [isDark]);

  // 自定义滚动条样式
  const customStyle: CSSProperties = useMemo(() => ({
    borderRadius: '8px',
    backgroundColor: 'transparent',
    border: 'none',
    padding: '0px',
    fontSize: '14px',
    lineHeight: '1.6',
    fontFamily: 'Monaco, Menlo, "Ubuntu Mono", "Consolas", "Liberation Mono", monospace',
    margin: 0,
    maxHeight: '480px',
    overflowY: 'auto',
    overflowX: 'auto',
    // 自定义滚动条样式
    scrollbarWidth: 'thin',
    scrollbarColor: 'var(--color-border-primary) transparent',
    ...style
  }), [style]);

  // 添加CSS样式到head中
  useEffect(() => {
    const styleId = 'code-highlight-scrollbar';
    if (!document.getElementById(styleId)) {
      const styleElement = document.createElement('style');
      styleElement.id = styleId;
      styleElement.textContent = `
        .code-highlight-container::-webkit-scrollbar {
          width: 6px;
          height: 6px;
        }
        .code-highlight-container::-webkit-scrollbar-track {
          background: transparent;
        }
        .code-highlight-container::-webkit-scrollbar-thumb {
          background-color: var(--color-border-primary);
          border-radius: 3px;
        }
        .code-highlight-container::-webkit-scrollbar-thumb:hover {
          background-color: var(--color-border-secondary);
        }
        .code-highlight-container::-webkit-scrollbar-corner {
          background: transparent;
        }
      `;
      document.head.appendChild(styleElement);
    }
  }, []);

  return (
    <div className={`code-highlight-container ${className}`} style={customStyle}>
      <SyntaxHighlighter
        key={`${language}-${isDark ? 'dark' : 'light'}`}
        language={language}
        wrapLongLines={wrapLongLines}
        showLineNumbers={showLineNumbers}
        style={theme}
        customStyle={{
          backgroundColor: 'transparent',
          background: 'transparent',
          border: 'none',
          padding: '0px',
          fontSize: '14px',
          lineHeight: '1.6',
          fontFamily: 'Monaco, Menlo, "Ubuntu Mono", "Consolas", "Liberation Mono", monospace',
          margin: 0,
        }}
        lineNumberStyle={{
          color: 'var(--color-text-tertiary)',
          fontSize: '12px',
          paddingRight: '16px',
          minWidth: '40px',
        }}
        codeTagProps={{
          style: {
            fontSize: '14px',
            lineHeight: '1.6',
          }
        }}
      >
        {codeStr.trim()}
      </SyntaxHighlighter>
    </div>
  );
};

export default CodeHighlightContainer;