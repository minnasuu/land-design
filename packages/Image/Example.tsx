import React, { useState } from 'react';
import Image from ".";
import Icon from "../Icon";
import CodeOperationContainer from '../../example/components/CodeOperationContainer';
import ComponentContentLayout from '../../example/components/ComponentContentLayout';
import ComponentPropsTable from '../../example/components/ComponentPropsTable';
import ComponentSectionLayout from '../../example/components/ComponentSectionLayout';

export default function ImageExample() {
  const [activeTab, setActiveTab] = useState<string>('examples');

  // 自定义兜底内容
  const customFallback = (
    <div className="flex column items-center justify-center gap-8 fs-14" style={{ height: '100%', color: '#999' }}>
      <Icon name="image" size={32} />
      <span>图片加载失败</span>
    </div>
  );

  const imageProps = [
    { name: 'url', type: 'string', desc: '图片地址' },
    { name: 'alt', type: 'string', desc: '图片描述' },
    { name: 'fallbackUrl', type: 'string', desc: '兜底图片地址' },
    { name: 'fallback', type: 'ReactNode', desc: '兜底内容' },
    { name: 'ratio', type: 'number', desc: '图片比例' },
    { name: 'style', type: 'CSSProperties', desc: '组件样式' },
    { name: 'className', type: 'string', desc: '组件类名' },
    { name: 'imgStyle', type: 'CSSProperties', desc: '图片样式' },
    { name: 'imgClassName', type: 'string', desc: '图片类名' },
  ];

  return (
    <ComponentContentLayout
      zh='图片'
      en='Image'
      desc='LandDesign 的图片组件，支持自动比例、加载状态、兜底内容、错误处理等功能。'
      activeTab={activeTab}
      onTabChange={setActiveTab}
    >

      {/* 标签页内容 */}
      {activeTab === 'examples' && (
        <>
          {/* 基础用法 */}
          <ComponentSectionLayout
            title='基础用法'
            id='image-normal'
            description='Image 组件的基础用法，支持自动获取比例和设置比例。'
          >
            <CodeOperationContainer>
              <div className="flex flex-col items-center justify-center gap-8">
                <Image
                  url="https://cdn-bastani.stunning.kr/prod/portfolios/2184d516-dbcc-47d2-b015-2b50be43e3da/contents/h2JHxgM98gfQG6NT.%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202025-06-23%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%2010.11.00.png"
                  style={{ width: '200px' }}
                />
                <p className='fs-12 text-center'>自动获取比例</p>
              </div>
              <div className="flex flex-col items-center justify-center gap-8">
                <Image
                  url="https://cdn-bastani.stunning.kr/prod/portfolios/2184d516-dbcc-47d2-b015-2b50be43e3da/contents/h2JHxgM98gfQG6NT.%E1%84%89%E1%85%B3%E1%84%8F%E1%85%B3%E1%84%85%E1%85%B5%E1%86%AB%E1%84%89%E1%85%A3%E1%86%BA%202025-06-23%20%E1%84%8B%E1%85%A9%E1%84%92%E1%85%AE%2010.11.00.png"
                  ratio={625 / 1048}
                  style={{ width: '200px' }}
                />
                <p className='fs-12 text-center'>设置比例</p>
              </div>
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 加载失败 */}
          <ComponentSectionLayout
            title='加载失败'
            id='image-error'
            description='当图片地址错误或加载失败时的处理。'
          >
            <CodeOperationContainer>
              <div className="flex flex-col items-center justify-center gap-8">
                <Image
                  url="https://invalid-url-that-will-fail.com/image.jpg"
                  style={{ width: '200px' }}
                />
                <p className='fs-12 text-center'>默认错误状态</p>
              </div>
              <div className="flex flex-col items-center justify-center gap-8">
                <Image
                  url="https://invalid-url-that-will-fail.com/image.jpg"
                  style={{ width: '200px' }}
                  ratio={625 / 1048}
                />
                <p className='fs-12 text-center'>设置比例的错误状态</p>
              </div>
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 兜底图 */}
          <ComponentSectionLayout
            title='兜底图'
            id='image-fallback'
            description='通过 fallbackUrl 和 fallback 属性可以设置兜底内容。'
          >
            <CodeOperationContainer style={{ gap: 24, flexWrap: 'wrap' }}>
              <div className="flex flex-col items-center justify-center gap-8">
                <Image
                  url="https://invalid-url-that-will-fail.com/image.jpg"
                  fallbackUrl="https://qzonestyle.gdtimg.com/gdt_ui_proj/imghub/dist/icon-game-default.svg?max_age=31536000"
                  style={{ width: '120px' }}
                />
                <p className='fs-12 text-center'>主图失败，兜底图成功</p>
              </div>
              <div className="flex flex-col items-center justify-center gap-8">
                <Image
                  url="https://invalid-url-that-will-fail.com/image.jpg"
                  fallbackUrl="https://another-invalid-url.com/fallback.jpg"
                  style={{ width: '120px' }}
                />
                <p className='fs-12 text-center'>主图和兜底图都失败</p>
              </div>
              <div className="flex flex-col items-center justify-center gap-8">
                <Image
                  url="https://invalid-url-that-will-fail.com/image.jpg"
                  fallbackUrl="https://another-invalid-url.com/fallback.jpg"
                  fallback={customFallback}
                  style={{ width: '120px' }}
                />
                <p className='fs-12 text-center'>fallbackUrl失败，自定义节点</p>
              </div>
              <div className="flex flex-col items-center justify-center gap-8">
                <Image
                  url="https://invalid-url-that-will-fail.com/image.jpg"
                  fallback={customFallback}
                  style={{ width: '120px' }}
                />
                <p className='fs-12 text-center'>只有fallback，直接显示</p>
              </div>
              <div className="flex flex-col items-center justify-center gap-8">
                <Image
                  url="https://invalid-url-that-will-fail.com/image.jpg"
                  fallbackUrl="https://qzonestyle.gdtimg.com/gdt_ui_proj/imghub/dist/icon-game-default.svg?max_age=31536000"
                  fallback={customFallback}
                  style={{ width: '120px' }}
                />
                <p className='fs-12 text-center'>fallbackUrl成功，不显示fallback</p>
              </div>
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 不同比例 */}
          <ComponentSectionLayout
            title='不同比例'
            id='image-ratio'
            description='通过 ratio 属性可以设置不同的图片比例。'
          >
            <CodeOperationContainer>
              <div className="flex flex-col items-center justify-center gap-8">
                <Image
                  url="https://picsum.photos/300/200"
                  ratio={3 / 2}
                  style={{ width: '150px' }}
                />
                <p className='fs-12 text-center'>3:2 比例</p>
              </div>
              <div className="flex flex-col items-center justify-center gap-8">
                <Image
                  url="https://picsum.photos/300/300"
                  ratio={1}
                  style={{ width: '150px' }}
                />
                <p className='fs-12 text-center'>1:1 比例</p>
              </div>
              <div className="flex flex-col items-center justify-center gap-8">
                <Image
                  url="https://picsum.photos/300/400"
                  ratio={3 / 4}
                  style={{ width: '150px' }}
                />
                <p className='fs-12 text-center'>3:4 比例</p>
              </div>
            </CodeOperationContainer>
          </ComponentSectionLayout>
        </>
      )}

      {activeTab === 'props' && (
        <div className='flex flex-col gap-12'>
          <ComponentPropsTable props={imageProps} />
        </div>
      )}
    </ComponentContentLayout>
  );
}
