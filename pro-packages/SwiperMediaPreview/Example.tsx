import React, { useState } from 'react';
import SwiperMediaPreview from '.';
import CodeOperationContainer from '../../example/components/CodeOperationContainer';
import ComponentContentLayout from '../../example/components/ComponentContentLayout';
import ComponentPropsTable from '../../example/components/ComponentPropsTable';
import ComponentSectionLayout from '../../example/components/ComponentSectionLayout';
import CodeOperationBar from '../../example/components/CodeOperationBar';
import { reactTsxCodeStr, reactScssCodeStr } from './codes';

export default function SwiperMediaPreviewExample() {
  const [activeTab, setActiveTab] = useState<string>('examples');
  const [activeGroup, setActiveGroup] = useState<string>('1');
  const [value, setValue] = useState<string>('1-1');
  const [activeGroup2, setActiveGroup2] = useState<string>('1');
  const [value2, setValue2] = useState<string>('1-1');

  const mockData = [
    ...Array(10).fill(0).map((_, index) => ({
      id: `${index + 1}`,
      mediaData: [
        ...Array(4).fill(0).map((_, idx) => ({
          id: `${index + 1}-${idx + 1}`,
          url: 'https://fastly.picsum.photos/id/293/200/200.jpg?hmac=6YL5khsW332VGbJLkqIfYLzyXyT1kj358PA64TJtKuw',
        }))
      ]
    }))
  ];

  const swiperMediaPreviewProps = [
    {
      name: "data",
      type: "{id?: any;mediaData: PreviewItemType[];}[]",
      desc: "数据",
    },
    { name: "activeGroup", type: "any", desc: "当前选中的组" },
    { name: "value", type: "any", desc: "当前选中的项" },
    {
      name: "keyboardControl",
      type: "boolean",
      desc: "是否支持键盘控制",
      default: "false",
    },
    {
      name: "onChange",
      type: "(item: PreviewItemType, parentItem: PreviewDataType) => void",
      desc: "选中项变化回调",
    },
  ];
  const swiperMediaPreviewType = [
    {
      name: "PreviewItemType",
      data: [
        { name: "id", type: "string", desc: "唯一标识" },
        { name: "url", type: "string", desc: "图片地址" },
        { name: "cover_image_url", type: "string", desc: "封面图片地址" },
        { name: "ratio", type: "string", desc: "图片比例" },
      ],
    },
  ];

  return (
    <ComponentContentLayout
      zh='轮播媒体预览'
      en='Swiper Media Preview'
      desc='LandDesign 的轮播媒体预览组件，支持图片和视频的轮播展示，提供流畅的媒体浏览体验。'
      activeTab={activeTab}
      onTabChange={setActiveTab}
    >
      <CodeOperationBar
        reactTsxCodeStr={reactTsxCodeStr}
        reactScssCodeStr={reactScssCodeStr}
      />

      {/* 标签页内容 */}
      {activeTab === 'examples' && (
        <div className='flex flex-col gap-24'>
          {/* 基础用法 */}
          <ComponentSectionLayout
            title='基础用法'
            id='basic-usage'
            description='SwiperMediaPreview 组件的基础用法，支持媒体轮播预览。'
          >
            <CodeOperationContainer style={{ height: '600px' }}>
              <SwiperMediaPreview
                data={mockData}
                activeGroup={activeGroup}
                value={value}
                onChange={(item, parentItem) => {
                  setActiveGroup(parentItem.id ?? '');
                  setValue(item.id);
                }}
              />
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 键盘控制 */}
          <ComponentSectionLayout
            title='键盘控制'
            id='keyboard-control'
            description='可以通过 keyboardControl 属性启用键盘控制功能。'
          >
            <CodeOperationContainer style={{ height: '600px' }}>
              <SwiperMediaPreview
                data={mockData}
                activeGroup={activeGroup2}
                value={value2}
                keyboardControl
                onChange={(item, parentItem) => {
                  setActiveGroup2(parentItem.id ?? '');
                  setValue2(item.id);
                }}
              />
            </CodeOperationContainer>
          </ComponentSectionLayout>
        </div>
      )}

      {activeTab === 'props' && (
        <div className='flex flex-col gap-12'>
          <ComponentPropsTable props={swiperMediaPreviewProps} />
          {swiperMediaPreviewType.map((item) => (
            <ComponentPropsTable props={item.data} />
          ))}
        </div>
      )}
    </ComponentContentLayout>
  );
}
