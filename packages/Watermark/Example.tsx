import React, { useState, useEffect, useRef } from 'react';
import Watermark from '.';
import CodeOperationContainer from '../../example/components/CodeOperationContainer';
import ComponentContentLayout from '../../example/components/ComponentContentLayout';
import ComponentPropsTable from '../../example/components/ComponentPropsTable';
import ComponentSectionLayout from '../../example/components/ComponentSectionLayout';
import NumberInput from '../NumberInput';

export default function WatermarkExample() {
  const [activeTab, setActiveTab] = useState<string>('examples');
  const [currentTime, setCurrentTime] = useState(new Date().toLocaleString());
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  // 更新当前时间 - 修复内存泄露
  useEffect(() => {
    // 清理之前的定时器
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }

    // 创建新的定时器
    timerRef.current = setInterval(() => {
      setCurrentTime(new Date().toLocaleString());
    }, 1000);

    // 清理函数
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
    };
  }, []);

  // 组件卸载时确保清理
  useEffect(() => {
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
        timerRef.current = null;
      }
    };
  }, []);

  const watermarkProps = [
    { name: 'content', type: 'string', desc: '水印文本内容' },
    { name: 'url', type: 'string', desc: '水印图片URL，与content二选一' },
    { name: 'fontSize', type: 'number', default: '16', desc: '文字水印的字体大小' },
    { name: 'fontColor', type: 'string', default: 'rgba(0, 0, 0, 0.1)', desc: '文字水印的颜色' },
    { name: 'width', type: 'number', desc: '图片水印的宽度' },
    { name: 'height', type: 'number', desc: '图片水印的高度' },
    { name: 'gap', type: '[number, number]', default: '[100, 100]', desc: '水印之间的间距，[水平间距, 垂直间距]' },
    { name: 'rotate', type: 'number', default: '-22', desc: '水印的旋转角度' },
    { name: 'zIndex', type: 'number', default: '1000', desc: '水印的层级' },
    { name: 'style', type: 'CSSProperties', desc: '自定义样式' },
    { name: 'className', type: 'string', desc: '自定义类名' },
    { name: 'children', type: 'ReactNode', desc: '需要添加水印的内容' },
  ];

  const [rotate, setRotate] = useState(45);
  return (
    <ComponentContentLayout
      zh='水印'
      en='Watermark'
      desc='LandDesign 的水印组件，用于在页面上添加文字或图片水印。支持自定义样式、动态内容和防篡改功能。'
      activeTab={activeTab}
      onTabChange={setActiveTab}
    >

      {/* 标签页内容 */}
      {activeTab === 'examples' && (
        <div className='flex flex-col gap-24'>
          {/* 基础用法 */}
          <ComponentSectionLayout
            title='基础用法'
            id='basic-usage'
            description='Watermark 组件的基础用法，展示简单的文字水印。'
          >
            <CodeOperationContainer style={{ height: '400px' }}>
              <Watermark content="Land Design" fontSize={18} />
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 自定义样式 */}
          <ComponentSectionLayout
            title='自定义样式'
            id='watermark-style'
            description='可以自定义水印的字体大小、颜色等样式。'
          >
            <CodeOperationContainer style={{ height: '300px' }}>
              <Watermark content="机密文件" fontColor="rgba(255, 0, 0, 0.2)" />
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 动态内容 */}
          <ComponentSectionLayout
            title='动态内容'
            id='watermark-dynamic'
            description='水印内容支持动态更新，如时间戳。'
          >
            <CodeOperationContainer style={{ height: '300px' }}>
              <Watermark
                content={`时间: ${currentTime}`}
                fontSize={14}
                fontColor="rgba(0, 0, 255, 0.2)"
                gap={[150, 150]}
              />

            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 图片水印 */}
          <ComponentSectionLayout
            title='图片水印'
            id='watermark-image'
            description='支持使用图片作为水印内容。'
          >
            <CodeOperationContainer style={{ height: '300px' }}>
              <Watermark
                url=""
                width={100}
                height={100}
                gap={[150, 150]}
                rotate={0}
              />
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 不同间距 */}
          <ComponentSectionLayout
            title='设置间距'
            id='watermark-gap'
            description='可以自定义水印之间的间距。'
          >
            <CodeOperationContainer style={{ height: '300px' }}>
              <Watermark content="小间距水印" gap={[30, 30]} />
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 不同旋转角度 */}
          <ComponentSectionLayout
            title='设置旋转角度'
            id='watermark-rotate'
            description='可以自定义水印的旋转角度。'
          >
            <NumberInput
              label='旋转角度'
              min={0}
              max={360}
              step={5}
              value={rotate}
              onChange={(val) => setRotate(val)}
            />
            <CodeOperationContainer style={{ height: '300px' }}>
              <Watermark content={`${rotate}度水印`} rotate={rotate} />
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 不同字体大小 */}
          <ComponentSectionLayout
            title='不同字体大小'
            id='watermark-font-size'
            description='可以自定义水印文字的字体大小。'
          >
            <CodeOperationContainer style={{ height: '300px' }}>
              <Watermark content="小字体水印" fontSize={12} />
              <Watermark content="大字体水印" fontSize={24} />
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 复杂内容 */}
          <ComponentSectionLayout
            title='复杂内容'
            id='watermark-complex'
            description='水印内容支持复杂的文本格式。'
          >
            <CodeOperationContainer style={{ height: '300px' }}>
              <Watermark
                content="机密文件 - 仅供内部使用"
                fontSize={16}
                fontColor="rgba(255, 0, 0, 0.3)"
                gap={[120, 120]}
                rotate={-22}
              />

            </CodeOperationContainer>
          </ComponentSectionLayout>
        </div>
      )}

      {activeTab === 'props' && (
        <div className='flex flex-col gap-12'>
          <ComponentPropsTable props={watermarkProps} />
        </div>
      )}
    </ComponentContentLayout>
  );
}
