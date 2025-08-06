import React, { useState, useEffect, useMemo } from 'react'
// import Menu from '../../packages/Menu'
import Flex from '../../packages/Flex';
import CodeHighlightContainer from './CodeHighlightContainer';
import { reactToHtml } from '../utils/reactToHtml';
import Button from '../../packages/Button';
import Icon from '../../packages/Icon';
import Divider from '../../packages/Divider';
import State from '../../packages/State';

const codeTransformData = [
  {
    label: 'React',
    key: 'react',
  },
  {
    label: 'HTML',
    key: 'html',
  },
]

type Props = {
  active: string;
  reactTsxCodeStr?: string;
  reactScssCodeStr?: string;
}

const CodeTransform: React.FC<Props> = ({
  active = 'react',
  reactTsxCodeStr,
  reactScssCodeStr,
}) => {
  const [htmlCodeStr, setHtmlCodeStr] = useState<string>('');
  const [htmlCssCodeStr, setHtmlCssCodeStr] = useState<string>('');
  const [htmlJsCodeStr, setHtmlJsCodeStr] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  // 使用useMemo缓存转换结果，避免重复转换
  const htmlResult = useMemo(async () => {
    if (!reactTsxCodeStr || active !== 'html') return null;

    setIsLoading(true);
    setError('');

    try {
      const result = await reactToHtml(reactTsxCodeStr);
      return result;
    } catch (err) {
      const errorMessage = err instanceof Error ? err.message : '转换失败';
      setError(errorMessage);
      return null;
    } finally {
      setIsLoading(false);
    }
  }, [reactTsxCodeStr, active]);

  // 转换React代码为HTML
  useEffect(() => {
    const convertToHtml = async () => {
      if (!reactTsxCodeStr || active !== 'html') return;

      setIsLoading(true);
      setError('');

      try {
        let result = null;
        if (htmlResult) {
          result = await htmlResult.then(res => res);
        } else {
          result = await reactToHtml(reactTsxCodeStr, reactScssCodeStr);
        }

        setHtmlCodeStr(result.html);
        setHtmlCssCodeStr(result.css);
        setHtmlJsCodeStr(result.js);
      } catch (err) {
        const errorMessage = err instanceof Error ? err.message : '转换失败';
        console.error('转换失败:', err);
        setError(errorMessage);
        setHtmlCodeStr(`<!-- 转换失败: ${errorMessage} -->`);
        setHtmlCssCodeStr(`/* 转换失败: ${errorMessage} */`);
        setHtmlJsCodeStr(`// 转换失败: ${errorMessage}`);
      } finally {
        setIsLoading(false);
      }
    };

    convertToHtml();
  }, [reactTsxCodeStr, reactScssCodeStr, active]);

  // 复制代码到剪贴板
  const copyToClipboard = async (text: string, type: string) => {
    try {
      await navigator.clipboard.writeText(text);
      // 这里可以添加成功提示，如果有Message组件的话
      console.log(`${type}代码已复制到剪贴板`);
    } catch (err) {
      console.error('复制失败:', err);
    }
  };

  // 复制完整HTML代码
  const copyFullHtml = async () => {
    if (!htmlCodeStr || !htmlCssCodeStr || !htmlJsCodeStr) return;

    const fullHtml = htmlCodeStr.replace('</head>', `<style>${htmlCssCodeStr}</style></head>`)
      .replace('</body>', `<script>${htmlJsCodeStr}</script></body>`);

    await copyToClipboard(fullHtml, '完整HTML');
  };

  const renderContent = () => {
    if (active === 'react') {
      return <Flex className='w-full bg-bg-secondary' gap={8} style={{ maxHeight: '720px' }}>
        <div className='flex-1 flex flex-col' style={{ width: '1%' }}>
          <Flex justify='space-between' align='center' className='pl-16 text-12 text-text-tertiary bg-bg-secondary border-b border-border-primary' style={{ height: '40px' }}>
            <div>TSX</div>
            <Button icon={<Icon name="copy" size={12} />} type='transparent' size='small' onClick={() => copyToClipboard(reactTsxCodeStr || '', 'TSX')} />
          </Flex>
          <CodeHighlightContainer className='border-r border-border-primary' language='tsx' codeStr={reactTsxCodeStr} style={{ padding: '16px 12px 16px 0px' }} />
        </div>
        <Divider direction='column' style={{ height: '100%', width: '1px' }} className='flex-shrink-0' />
        <div className='flex-1' style={{ width: '1%' }}>
          <Flex justify='space-between' align='center' className='pl-16 text-12 text-text-tertiary bg-bg-secondary border-b border-border-primary' style={{ height: '40px' }}>
            <div>SCSS</div>
            <Button icon={<Icon name="copy" size={12} />} type='transparent' size='small' onClick={() => copyToClipboard(reactScssCodeStr || '', 'SCSS')} />
          </Flex>
          <CodeHighlightContainer language='scss' codeStr={reactScssCodeStr} style={{ padding: '16px 12px 16px 0px' }} />
        </div>
      </Flex>
    }

    if (active === 'html') {
      // if (isLoading) {
      //   return (
      //     <div className='w-full h-64 flex items-center justify-center'>
      //       <div className='flex flex-col items-center gap-4'>
      //         <div className='animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500'></div>
      //         <p className='text-gray-600'>正在转换React代码为HTML...</p>
      //       </div>
      //     </div>
      //   );
      // }

      // if (error) {
      //   return (
      //     <div className='w-full h-64 flex items-center justify-center'>
      //       <div className='flex flex-col items-center gap-4 text-red-500'>
      //         <Icon name="error" size={24} />
      //         <p className='text-center'>转换失败: {error}</p>
      //       </div>
      //     </div>
      //   );
      // }

      // return (
      //   <div className='w-full bg-bg-secondary' style={{ maxHeight: '720px' }}>
      //     {/* HTML代码块 */}
      //     <div className='flex-1 flex flex-col' style={{ width: '100%' }}>
      //       <Flex justify='space-between' align='center' className='pl-16 pr-12 text-12 text-text-tertiary bg-bg-primary border-b border-border-primary' style={{ height: '40px' }}>
      //         <div>HTML</div>
      //         <Flex gap={4} width='fit-content'>
      //           <Button icon={<Icon name="copy" size={12} />} type='transparent' size='small' onClick={() => copyToClipboard(htmlCodeStr, 'HTML')} />
      //           <Button icon={<Icon name="download" size={12} />} type='transparent' size='small' onClick={copyFullHtml} />
      //         </Flex>
      //       </Flex>
      //       <CodeHighlightContainer language='html' codeStr={htmlCodeStr} style={{ padding: '16px 12px 16px 0px' }} />
      //     </div>

      //     <Divider direction='row' style={{ width: '100%', height: '1px' }} className='flex-shrink-0' />

      //     {/* CSS和JS代码块 */}
      //     <Flex className='w-full' gap={0}>
      //       <div className='flex-1 flex flex-col' style={{ width: '1%' }}>
      //         <Flex justify='space-between' align='center' className='pl-16 pr-8 text-12 text-text-tertiary bg-bg-primary border-b border-border-primary' style={{ height: '40px' }}>
      //           <div>CSS</div>
      //           <Button icon={<Icon name="copy" size={12} />} type='transparent' size='small' onClick={() => copyToClipboard(htmlCssCodeStr, 'CSS')} />
      //         </Flex>
      //         <CodeHighlightContainer className='border-r border-border-primary' language='css' codeStr={htmlCssCodeStr} style={{ padding: '16px 12px 16px 0px' }} />
      //       </div>
      //       <Divider direction='column' style={{ height: '100%', width: '1px' }} className='flex-shrink-0' />
      //       <div className='flex-1' style={{ width: '1%' }}>
      //         <Flex justify='space-between' align='center' className='pl-16 pr-8 text-12 text-text-tertiary bg-bg-primary border-b border-border-primary' style={{ height: '40px' }}>
      //           <div>JavaScript</div>
      //           <Button icon={<Icon name="copy" size={12} />} type='transparent' size='small' onClick={() => copyToClipboard(htmlJsCodeStr, 'JavaScript')} />
      //         </Flex>
      //         <CodeHighlightContainer language='javascript' codeStr={htmlJsCodeStr} style={{ padding: '16px 12px 16px 0px' }} />
      //       </div>
      //     </Flex>
      //   </div>
      // );
      return <Flex bothCenter className='w-full p-24'>
        <State title='建设中，敬请期待' />
      </Flex>
    }
  }

  return (
    <div>
      {renderContent()}
    </div>
  )
}

export default CodeTransform;