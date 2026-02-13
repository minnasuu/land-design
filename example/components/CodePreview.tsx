import React, { useState, useEffect } from 'react';
import Flex from '../../packages/Flex';
import Button from '../../packages/Button';
import Icon from '../../packages/Icon';
import Divider from '../../packages/Divider';
import CodeHighlightContainer from './CodeHighlightContainer';
import { reactToHtml } from '../utils/reactToHtml';

interface CodePreviewProps {
  tsxCode: string;
  scssCode?: string;
  title?: string;
  description?: string;
}

const CodePreview: React.FC<CodePreviewProps> = ({
  tsxCode,
  scssCode = '',
  title = '代码预览',
  description = '查看转换后的HTML代码'
}) => {
  const [activeTab, setActiveTab] = useState<'preview' | 'code'>('preview');
  const [htmlResult, setHtmlResult] = useState<{
    html: string;
    css: string;
    js: string;
    full: string;
  } | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string>('');
  const [previewUrl, setPreviewUrl] = useState<string>('');

  // 转换代码
  useEffect(() => {
    if (!tsxCode) return;

    const convertCode = async () => {
      setIsLoading(true);
      setError('');

      try {
        const result = await reactToHtml(tsxCode, scssCode, {
          pretty: true,
          includeErrorHandling: true,
          includeResetStyles: true
        });

        setHtmlResult(result);

        // 创建预览URL
        const blob = new Blob([result.full], { type: 'text/html' });
        const url = URL.createObjectURL(blob);
        setPreviewUrl(url);
      } catch (err) {
        const errorMessage = err instanceof Error ? err.message : '转换失败';
        setError(errorMessage);
        console.error('代码转换失败:', err);
      } finally {
        setIsLoading(false);
      }
    };

    convertCode();
  }, [tsxCode, scssCode]);

  // 清理URL
  useEffect(() => {
    return () => {
      if (previewUrl) {
        URL.revokeObjectURL(previewUrl);
      }
    };
  }, [previewUrl]);

  // 复制代码
  const copyCode = async (code: string, type: string) => {
    try {
      await navigator.clipboard.writeText(code);
      console.log(`${type}代码已复制`);
    } catch (err) {
      console.error('复制失败:', err);
    }
  };

  const tabs = [
    { key: 'preview', label: '预览', icon: 'eye' },
    { key: 'code', label: '代码', icon: 'code' }
  ];

  const renderPreview = () => {
    if (isLoading) {
      return (
        <div className="w-full h-64 flex items-center justify-center">
          <div className="flex flex-col items-center gap-4">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
            <p className="text-gray-600">正在生成预览...</p>
          </div>
        </div>
      );
    }

    if (error) {
      return (
        <div className="w-full h-64 flex items-center justify-center">
          <div className="flex flex-col items-center gap-4 text-red-500">
            <Icon name="error" size={24} />
            <p className="text-center">预览生成失败: {error}</p>
          </div>
        </div>
      );
    }

    if (!htmlResult) {
      return (
        <div className="w-full h-64 flex items-center justify-center">
          <p className="text-gray-500">暂无预览内容</p>
        </div>
      );
    }

    return (
      <div className="w-full h-64 border border-border-primary rounded-lg overflow-hidden">
        <iframe
          src={previewUrl}
          className="w-full h-full"
          title="代码预览"
          sandbox="allow-scripts allow-same-origin"
        />
      </div>
    );
  };

  const renderCode = () => {
    if (!htmlResult) {
      return (
        <div className="w-full h-64 flex items-center justify-center">
          <p className="text-gray-500">暂无代码内容</p>
        </div>
      );
    }

    return (
      <div className="w-full bg-bg-secondary" style={{ maxHeight: '480px' }}>
        {/* HTML代码 */}
        <div className="flex-1 flex flex-col">
          <Flex justify="space-between" align="center" className="pl-16 text-12 text-text-tertiary bg-bg-primary border-b border-border-primary" style={{ height: '40px' }}>
            <div>HTML</div>
            <Button
              icon={<Icon name="copy" size={12} />}
              variant="transparent"
              size="small"
              onClick={() => copyCode(htmlResult.html, 'HTML')}
            />
          </Flex>
          <CodeHighlightContainer
            language="html"
            codeStr={htmlResult.html}
            style={{ padding: '16px 12px 16px 0px' }}
          />
        </div>

        <Divider direction="horizontal" style={{ width: '100%', height: '1px' }} className="flex-shrink-0" />

        {/* CSS和JS代码 */}
        <Flex className="w-full" gap={0}>
          <div className="flex-1 flex flex-col" style={{ width: '1%' }}>
            <Flex justify="space-between" align="center" className="pl-16 text-12 text-text-tertiary bg-bg-primary border-b border-border-primary" style={{ height: '40px' }}>
              <div>CSS</div>
              <Button
                icon={<Icon name="copy" size={12} />}
                variant="transparent"
                size="small"
                onClick={() => copyCode(htmlResult.css, 'CSS')}
              />
            </Flex>
            <CodeHighlightContainer
              className="border-r border-border-primary"
              language="css"
              codeStr={htmlResult.css}
              style={{ padding: '16px 12px 16px 0px' }}
            />
          </div>
          <Divider direction="vertical" style={{ height: '100%', width: '1px' }} className="flex-shrink-0" />
          <div className="flex-1" style={{ width: '1%' }}>
            <Flex justify="space-between" align="center" className="pl-16 text-12 text-text-tertiary bg-bg-primary border-b border-border-primary" style={{ height: '40px' }}>
              <div>JavaScript</div>
              <Button
                icon={<Icon name="copy" size={12} />}
                variant="transparent"
                size="small"
                onClick={() => copyCode(htmlResult.js, 'JavaScript')}
              />
            </Flex>
            <CodeHighlightContainer
              language="javascript"
              codeStr={htmlResult.js}
              style={{ padding: '16px 12px 16px 0px' }}
            />
          </div>
        </Flex>
      </div>
    );
  };

  return (
    <div className="w-full">
      {/* 标题和描述 */}
      <div className="mb-4">
        <h3 className="text-lg font-semibold text-text-primary">{title}</h3>
        {description && (
          <p className="text-sm text-text-secondary mt-1">{description}</p>
        )}
      </div>

      {/* 标签页 */}
      <Flex className="w-full bg-bg-primary border-b border-border-primary" style={{ height: '48px' }}>
        <Flex className="h-full" gap={0}>
          {tabs.map((tab) => (
            <Button
              key={tab.key}
              variant={activeTab === tab.key ? 'background' : 'text'}
              size="small"
              onClick={() => setActiveTab(tab.key as 'preview' | 'code')}
              style={{
                borderRadius: 0,
                borderRight: '1px solid var(--color-border-primary)',
                height: '100%',
                minWidth: '80px'
              }}
            >
              <Flex align="center" gap={4}>
                <Icon name={tab.icon} size={14} />
                {tab.label}
              </Flex>
            </Button>
          ))}
        </Flex>
      </Flex>

      {/* 内容区域 */}
      <div className="mt-4">
        {activeTab === 'preview' ? renderPreview() : renderCode()}
      </div>
    </div>
  );
};

export default CodePreview; 