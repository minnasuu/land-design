import React, { useState } from 'react';
import Image from '.';
import Icon from '../Icon';
import CodeOperationContainer from '../../example/components/CodeOperationContainer';
import ComponentContentLayout from '../../example/components/ComponentContentLayout';
import ComponentPropsTable from '../../example/components/ComponentPropsTable';
import ComponentSectionLayout from '../../example/components/ComponentSectionLayout';

export default function ImageExample() {
  const [activeTab, setActiveTab] = useState<string>('examples');

  // 自定义兜底内容
  const customFallback = (
    <div
      className="flex flex-col items-center justify-center gap-8"
      style={{ height: '100%', color: 'var(--color-text-quaternary)' }}
    >
      <Icon name="image" size={32} />
      <span style={{ fontSize: 12 }}>图片加载失败</span>
    </div>
  );

  const imageProps = [
    { name: 'src', type: 'string', desc: '图片地址' },
    { name: 'alt', type: 'string', default: '""', desc: '图片描述（无障碍）' },
    { name: 'width', type: 'number | string', desc: '图片宽度' },
    { name: 'height', type: 'number | string', desc: '图片高度' },
    { name: 'fit', type: '"cover" | "contain" | "fill" | "none" | "scale-down"', default: '"cover"', desc: '图片填充模式' },
    { name: 'position', type: '"center" | "top" | "bottom" | "left" | "right" | ...', default: '"center"', desc: '图片位置' },
    { name: 'ratio', type: 'number', desc: '宽高比' },
    { name: 'radius', type: 'number | string', desc: '圆角' },
    { name: 'round', type: 'boolean', default: 'false', desc: '是否为圆形' },
    { name: 'lazy', type: 'boolean', default: 'false', desc: '是否懒加载' },
    { name: 'preview', type: 'string', desc: '预览图地址' },
    { name: 'fallbackSrc', type: 'string', desc: '兜底图片地址' },
    { name: 'fallback', type: 'ReactNode', desc: '兜底内容' },
    { name: 'placeholder', type: 'ReactNode', desc: '加载中占位内容' },
    { name: 'showSkeleton', type: 'boolean', default: 'true', desc: '是否显示骨架屏' },
    { name: 'showError', type: 'boolean', default: 'true', desc: '是否显示错误状态' },
    { name: 'onLoad', type: '(e: SyntheticEvent) => void', desc: '加载成功回调' },
    { name: 'onError', type: '(e: SyntheticEvent) => void', desc: '加载失败回调' },
    { name: 'onClick', type: '(e: MouseEvent) => void', desc: '点击回调' },
    { name: 'className', type: 'string', desc: '自定义类名' },
    { name: 'style', type: 'CSSProperties', desc: '自定义样式' },
    { name: 'imgClassName', type: 'string', desc: '图片元素类名' },
    { name: 'imgStyle', type: 'CSSProperties', desc: '图片元素样式' },
    { name: 'htmlProps', type: 'HTMLAttributes', desc: '原生属性透传' },
    { name: 'imgProps', type: 'ImgHTMLAttributes', desc: '原生 img 属性透传' },
  ];

  const sampleImage = 'https://picsum.photos/400/300';
  const sampleImage2 = 'https://picsum.photos/300/400';

  return (
    <ComponentContentLayout
      zh="图片"
      en="Image"
      desc="LandDesign 的图片组件，支持自动比例、加载状态、兜底内容、错误处理等功能。"
      activeTab={activeTab}
      onTabChange={setActiveTab}
    >
      {activeTab === 'examples' && (
        <>
          {/* 基础用法 */}
          <ComponentSectionLayout
            title="基础用法"
            id="image-basic"
            description="Image 组件的基础用法。"
          >
            <CodeOperationContainer>
              <Image src={sampleImage} width={200} ratio={4 / 3} />
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 填充模式 */}
          <ComponentSectionLayout
            title="填充模式"
            id="image-fit"
            description="通过 fit 属性设置图片填充模式。"
          >
            <CodeOperationContainer style={{ flexWrap: 'wrap', gap: 16 }}>
              <div className="flex flex-col items-center gap-8">
                <Image src={sampleImage2} width={120} height={120} fit="cover" />
                <span className="fs-12">cover</span>
              </div>
              <div className="flex flex-col items-center gap-8">
                <Image src={sampleImage2} width={120} height={120} fit="contain" />
                <span className="fs-12">contain</span>
              </div>
              <div className="flex flex-col items-center gap-8">
                <Image src={sampleImage2} width={120} height={120} fit="fill" />
                <span className="fs-12">fill</span>
              </div>
              <div className="flex flex-col items-center gap-8">
                <Image src={sampleImage2} width={120} height={120} fit="none" />
                <span className="fs-12">none</span>
              </div>
              <div className="flex flex-col items-center gap-8">
                <Image src={sampleImage2} width={120} height={120} fit="scale-down" />
                <span className="fs-12">scale-down</span>
              </div>
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 图片位置 */}
          <ComponentSectionLayout
            title="图片位置"
            id="image-position"
            description="通过 position 属性设置 fit=cover 时的图片位置。"
          >
            <CodeOperationContainer style={{ flexWrap: 'wrap', gap: 16 }}>
              <div className="flex flex-col items-center gap-8">
                <Image src={sampleImage2} width={100} height={100} position="top" />
                <span className="fs-12">top</span>
              </div>
              <div className="flex flex-col items-center gap-8">
                <Image src={sampleImage2} width={100} height={100} position="center" />
                <span className="fs-12">center</span>
              </div>
              <div className="flex flex-col items-center gap-8">
                <Image src={sampleImage2} width={100} height={100} position="bottom" />
                <span className="fs-12">bottom</span>
              </div>
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 宽高比 */}
          <ComponentSectionLayout
            title="宽高比"
            id="image-ratio"
            description="通过 ratio 属性设置固定宽高比。"
          >
            <CodeOperationContainer>
              <div className="flex flex-col items-center gap-8">
                <Image src={sampleImage} width={150} ratio={16 / 9} />
                <span className="fs-12">16:9</span>
              </div>
              <div className="flex flex-col items-center gap-8">
                <Image src={sampleImage} width={150} ratio={4 / 3} />
                <span className="fs-12">4:3</span>
              </div>
              <div className="flex flex-col items-center gap-8">
                <Image src={sampleImage} width={150} ratio={1} />
                <span className="fs-12">1:1</span>
              </div>
              <div className="flex flex-col items-center gap-8">
                <Image src={sampleImage} width={150} ratio={3 / 4} />
                <span className="fs-12">3:4</span>
              </div>
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 圆角与圆形 */}
          <ComponentSectionLayout
            title="圆角与圆形"
            id="image-radius"
            description="通过 radius 和 round 属性设置圆角。"
          >
            <CodeOperationContainer>
              <div className="flex flex-col items-center gap-8">
                <Image src={sampleImage} width={100} height={100} radius={0} />
                <span className="fs-12">无圆角</span>
              </div>
              <div className="flex flex-col items-center gap-8">
                <Image src={sampleImage} width={100} height={100} radius={8} />
                <span className="fs-12">小圆角</span>
              </div>
              <div className="flex flex-col items-center gap-8">
                <Image src={sampleImage} width={100} height={100} radius={16} />
                <span className="fs-12">大圆角</span>
              </div>
              <div className="flex flex-col items-center gap-8">
                <Image src={sampleImage} width={100} height={100} round />
                <span className="fs-12">圆形</span>
              </div>
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 加载失败 */}
          <ComponentSectionLayout
            title="加载失败"
            id="image-error"
            description="图片加载失败时显示错误状态。"
          >
            <CodeOperationContainer>
              <div className="flex flex-col items-center gap-8">
                <Image src="https://invalid-url.com/image.jpg" width={150} height={100} />
                <span className="fs-12">默认错误状态</span>
              </div>
              <div className="flex flex-col items-center gap-8">
                <Image src="https://invalid-url.com/image.jpg" width={150} height={100} showError={false} />
                <span className="fs-12">隐藏错误状态</span>
              </div>
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 兜底图片 */}
          <ComponentSectionLayout
            title="兜底图片"
            id="image-fallback-src"
            description="通过 fallbackSrc 设置兜底图片。"
          >
            <CodeOperationContainer>
              <div className="flex flex-col items-center gap-8">
                <Image
                  src="https://invalid-url.com/image.jpg"
                  fallbackSrc={sampleImage}
                  width={150}
                  height={100}
                />
                <span className="fs-12">主图失败，显示兜底图</span>
              </div>
              <div className="flex flex-col items-center gap-8">
                <Image
                  src="https://invalid-url.com/image.jpg"
                  fallbackSrc="https://another-invalid.com/image.jpg"
                  width={150}
                  height={100}
                />
                <span className="fs-12">兜底图也失败</span>
              </div>
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 自定义兜底 */}
          <ComponentSectionLayout
            title="自定义兜底"
            id="image-fallback"
            description="通过 fallback 属性自定义兜底内容。"
          >
            <CodeOperationContainer>
              <div className="flex flex-col items-center gap-8">
                <Image
                  src="https://invalid-url.com/image.jpg"
                  fallback={customFallback}
                  width={150}
                  height={100}
                />
                <span className="fs-12">自定义兜底内容</span>
              </div>
              <div className="flex flex-col items-center gap-8">
                <Image
                  src="https://invalid-url.com/image.jpg"
                  fallbackSrc="https://also-invalid.com/image.jpg"
                  fallback={customFallback}
                  width={150}
                  height={100}
                />
                <span className="fs-12">fallbackSrc 失败后显示 fallback</span>
              </div>
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 懒加载 */}
          <ComponentSectionLayout
            title="懒加载"
            id="image-lazy"
            description="通过 lazy 属性开启懒加载。"
          >
            <CodeOperationContainer>
              <Image src={sampleImage} width={200} ratio={4 / 3} lazy />
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 点击事件 */}
          <ComponentSectionLayout
            title="点击事件"
            id="image-click"
            description="通过 onClick 属性处理点击事件。"
          >
            <CodeOperationContainer>
              <Image
                src={sampleImage}
                width={200}
                ratio={4 / 3}
                onClick={() => alert('图片被点击')}
              />
            </CodeOperationContainer>
          </ComponentSectionLayout>
        </>
      )}

      {activeTab === 'props' && (
        <div className="flex flex-col gap-12">
          <ComponentPropsTable props={imageProps} />
        </div>
      )}
    </ComponentContentLayout>
  );
}
