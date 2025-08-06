// @ts-nocheck
import React, { useState } from 'react';
import Video from './index';
import Select from '../Select';
import CodeOperationContainer from '../../example/components/CodeOperationContainer';
import ComponentContentLayout from '../../example/components/ComponentContentLayout';
import ComponentPropsTable from '../../example/components/ComponentPropsTable';
import ComponentSectionLayout from '../../example/components/ComponentSectionLayout';

const VideoExample: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('examples');
  const [currentVideo, setCurrentVideo] = useState<string>('Big Buck Bunny');

  const videoOptions = [
    { key: 'Big Buck Bunny', label: 'Big Buck Bunny', url: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4' },
    { key: 'Elephant Dream', label: 'Elephant Dream', url: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4' },
    { key: 'Sintel', label: 'Sintel', url: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4' },
  ];

  const videoProps = [
    { name: "src", type: "string", desc: "视频地址" },
    {
      name: "forwardSecond",
      type: "number",
      desc: "后退或快进的秒数",
      default: "5",
    },
    {
      name: "useKeyImg",
      type: "boolean",
      desc: "是否显示实时帧",
      default: "false",
    },
    {
      name: "useKeyControls",
      type: "boolean",
      desc: "是否开启键盘控制",
      default: "false",
    },
    { name: "className", type: "string", desc: "自定义类名" },
    { name: "videoClassName", type: "string", desc: "视频类名" },
    { name: "videoStyle", type: "CSSProperties", desc: "视频样式" },
    {
      name: "showControls",
      type: "boolean",
      desc: "是否显示底部控件",
      default: "false",
    },
    {
      name: "onFullWidthChange",
      type: "(fullWidth: boolean) => void",
      desc: "网页宽屏变化事件",
    },
    {
      name: "usePrevEpisode",
      type: "boolean",
      desc: "是否显示上集切换按钮",
      default: "false",
    },
    {
      name: "useNextEpisode",
      type: "boolean",
      desc: "是否显示下集切换按钮",
      default: "false",
    },
    { name: "prevEpisodeHref", type: "string", desc: "上集链接" },
  ];

  return (
    <ComponentContentLayout
      zh='视频'
      en='Video'
      desc='LandDesign 的视频组件，支持播放控制、键盘快捷键、剧集切换、关键帧预览等功能。'
      activeTab={activeTab}
      onTabChange={setActiveTab}
    >

      {/* 标签页内容 */}
      {activeTab === 'examples' && (
        <>
          {/* 基础用法 */}
          <ComponentSectionLayout
            title='基础用法'
            id='video-normal'
            description='Video 组件的基础用法，支持基本的视频播放功能。'
          >
            <div className="flex flex-col gap-8 mb-24 fs-14">
              <label>选择视频：</label>
              <Select
                selected={currentVideo}
                onChange={(item) => setCurrentVideo(item.key)}
                data={videoOptions}
                style={{ "--land-select-width": "200px" } as React.CSSProperties}
              />
              <ul className="color-text-secondary flex flex-col gap-4 fs-14">
                <li><strong>空格键</strong> - 播放/暂停</li>
                <li><strong>左右箭头</strong> - 快退/快进 5 秒</li>
                <li><strong>M 键</strong> - 静音/取消静音</li>
                <li><strong>F 键</strong> - 全屏模式</li>
              </ul>
            </div>
            <CodeOperationContainer>
              <Video
                src={videoOptions.find((item) => item.key === currentVideo)?.url}
                radius="8px"
                forwardSecond={5}
                useKeyControls={true}
                showControls={true}
                autoPlay={false}
              />
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 分集视频 */}
          <ComponentSectionLayout
            title='分集视频'
            id='video-episode'
            description='通过 usePrevEpisode 和 useNextEpisode 属性可以启用剧集切换功能。'
          >
            <CodeOperationContainer>
              <Video
                src={videoOptions.find((item) => item.key === currentVideo)?.url}
                radius="8px"
                forwardSecond={5}
                useKeyControls={true}
                showControls={true}
                autoPlay={false}
                usePrevEpisode={true}
                useNextEpisode={true}
                onPrevEpisodeClick={() => {
                  const curIndex = videoOptions.findIndex(
                    (item) => item.key === currentVideo
                  );
                  if (curIndex > 0) {
                    setCurrentVideo(videoOptions[curIndex - 1].key);
                  }
                }}
                onNextEpisodeClick={() => {
                  const curIndex = videoOptions.findIndex(
                    (item) => item.key === currentVideo
                  );
                  if (curIndex < videoOptions.length - 1) {
                    setCurrentVideo(videoOptions[curIndex + 1].key);
                  }
                }}
              />
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 关键帧预览 */}
          <ComponentSectionLayout
            title='实时帧预览'
            id='video-use-key-img'
            description='通过 useKeyImg 属性可以启用关键帧预览功能。'
          >
            <CodeOperationContainer>
              <Video
                src={videoOptions.find((item) => item.key === currentVideo)?.url}
                radius="8px"
                forwardSecond={5}
                useKeyControls={true}
                showControls={true}
                autoPlay={false}
                useKeyImg={true}
              />
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 响应式控件 */}
          <ComponentSectionLayout
            title='响应式控件'
            id='video-responsive'
            description='调整浏览器窗口宽度，当控件空间不足时，右侧控件会自动收起到下拉菜单中。'
          >
            <div className="color-text-secondary fs-14 mb-8">
              调整浏览器窗口宽度，当控件空间不足时，右侧控件会自动收起到下拉菜单中，包含倍速和循环设置
            </div>
            <CodeOperationContainer>
              <div style={{ maxWidth: "350px" }}>
                <Video
                  src={videoOptions.find((item) => item.key === currentVideo)?.url}
                  radius="8px"
                  forwardSecond={5}
                  useKeyControls={true}
                  showControls={true}
                  autoPlay={false}
                  usePrevEpisode={true}
                  useNextEpisode={true}
                  onPrevEpisodeClick={() => {
                    const curIndex = videoOptions.findIndex(
                      (item) => item.key === currentVideo
                    );
                    if (curIndex > 0) {
                      setCurrentVideo(videoOptions[curIndex - 1].key);
                    }
                  }}
                  onNextEpisodeClick={() => {
                    const curIndex = videoOptions.findIndex(
                      (item) => item.key === currentVideo
                    );
                    if (curIndex < videoOptions.length - 1) {
                      setCurrentVideo(videoOptions[curIndex + 1].key);
                    }
                  }}
                />
              </div>
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 不同比例 */}
          <ComponentSectionLayout
            title='不同比例'
            id='video-ratio'
            description='通过 ratio 属性可以设置不同的视频比例。'
          >
            <CodeOperationContainer>
              <div>
                <div className="fs-12 color-gray-4 mb-8">16:9 比例</div>
                <Video
                  src={videoOptions.find((item) => item.key === currentVideo)?.url}
                  ratio="16/9"
                  radius="8px"
                  showControls={true}
                  autoPlay={false}
                />
              </div>
              <div>
                <div className="fs-12 color-gray-4 mb-8">4:3 比例</div>
                <Video
                  src={videoOptions.find((item) => item.key === currentVideo)?.url}
                  ratio="4/3"
                  radius="8px"
                  showControls={true}
                  autoPlay={false}
                />
              </div>
            </CodeOperationContainer>
          </ComponentSectionLayout>
        </>
      )}

      {activeTab === 'props' && (
        <div className='flex flex-col gap-12'>
          <ComponentPropsTable props={videoProps} />
        </div>
      )}
    </ComponentContentLayout>
  );
};

export default VideoExample;
