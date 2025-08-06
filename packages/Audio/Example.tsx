import React, { useState } from 'react';
import Audio from '.';
import CodeOperationContainer from '../../example/components/CodeOperationContainer';
import ComponentContentLayout from '../../example/components/ComponentContentLayout';
import ComponentPropsTable from '../../example/components/ComponentPropsTable';
import ComponentSectionLayout from '../../example/components/ComponentSectionLayout';

export default function AudioExample() {
  const [activeTab, setActiveTab] = useState<string>('examples');

  const audioProps = [
    { name: "audioUrl", type: "string", desc: "音频地址" },
    {
      name: "direction",
      type: "'row' | 'column'",
      desc: "音频方向",
      default: "row",
    },
    {
      name: "showWave",
      type: "boolean",
      desc: "是否显示波形",
      default: "false",
    },
    { name: "className", type: "string", desc: "自定义类名" },
    { name: "style", type: "CSSProperties", desc: "自定义样式" },
  ];
  const AudioTypes = [
    {
      name: "AudioButtonType",
      data: [
        {
          name: "play",
          desc: "播放",
        },
        {
          name: "pause",
          desc: "暂停",
        },
      ],
    },
    {
      name: "AudioAnimationProps",
      data: [
        { name: "color", type: "string", desc: "颜色" },
        { name: "size", type: "number", desc: "大小" },
      ],
    },
    {
      name: "AudioWaveType",
      data: [
        { name: "audioUrl", type: "string", desc: "音频地址" },
        { name: "play", type: "boolean", desc: "是否播放" },
        {
          name: "onPlayChange",
          type: "(play: boolean) => void",
          desc: "播放状态变化事件",
        },
        { name: "canvas", type: "HTMLCanvasElement", desc: "canvas元素" },
        { name: "audio", type: "HTMLAudioElement", desc: "音频元素" },
        { name: "samples", type: "number[]", desc: "音频采样数据" },
        { name: "barWidth", type: "number", desc: "柱状图宽度" },
        { name: "barGap", type: "number", desc: "柱状图间距" },
        { name: "defaultColor", type: "string", desc: "默认颜色" },
        { name: "activeColor", type: "string", desc: "激活颜色" },
        { name: "normalize", type: "boolean", desc: "是否归一化" },
        { name: "amplify", type: "boolean", desc: "是否放大" },
        {
          name: "type",
          type: "'bar' | 'line'",
          desc: "波形类型",
          default: "bar",
        },
        {
          name: "sampleCount",
          type: "number",
          desc: "采样点数",
          default: 100,
        },
      ],
    },
  ]

  return (
    <ComponentContentLayout
      zh='音频播放器'
      en='Audio'
      desc='LandDesign 的音频播放器组件，提供音频播放功能和波形可视化效果。支持多种波形类型、自定义样式和交互效果。'
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
            description='Audio 组件的基础用法，支持音频播放功能。'
          >
            <CodeOperationContainer>
              <Audio audioUrl="https://suminhan.cn/land-design/dapxiang.mp3" />
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 波形显示 */}
          <ComponentSectionLayout
            title='波形显示'
            id='wave-display'
            description='通过 showWave 属性可以显示音频波形可视化效果。'
          >
            <CodeOperationContainer>
              <Audio
                audioUrl="https://suminhan.cn/land-design/dapxiang.mp3"
                showWave={true}
              />
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 波形类型 */}
          <ComponentSectionLayout
            title='波形类型'
            id='wave-type'
            description='支持柱状图和折线图两种波形类型。'
          >
            <CodeOperationContainer>
              <div className="flex flex-col gap-16">
                <div>
                  <h4 className="mb-8">柱状图波形</h4>
                  <Audio
                    audioUrl="https://suminhan.cn/land-design/dapxiang.mp3"
                    showWave={true}
                    waveType="bar"
                  />
                </div>
                <div>
                  <h4 className="mb-8">折线图波形</h4>
                  <Audio
                    audioUrl="https://suminhan.cn/land-design/dapxiang.mp3"
                    showWave={true}
                    waveType="line"
                  />
                </div>
              </div>
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 波形配置 */}
          <ComponentSectionLayout
            title='波形配置'
            id='wave-config'
            description='可以自定义波形的各种参数，包括颜色、尺寸、采样等。'
          >
            <CodeOperationContainer>
              <div className="flex flex-col gap-16">
                <div>
                  <h4 className="mb-8">自定义颜色</h4>
                  <Audio
                    audioUrl="https://suminhan.cn/land-design/dapxiang.mp3"
                    showWave={true}
                    waveDefaultColor="#f0f0f0"
                    waveActiveColor="#52c41a"
                  />
                </div>
                <div>
                  <h4 className="mb-8">自定义尺寸</h4>
                  <Audio
                    audioUrl="https://suminhan.cn/land-design/dapxiang.mp3"
                    showWave={true}
                    waveBarWidth={4}
                    waveBarGap={2}
                  />
                </div>
                <div>
                  <h4 className="mb-8">高采样</h4>
                  <Audio
                    audioUrl="https://suminhan.cn/land-design/dapxiang.mp3"
                    showWave={true}
                    waveSampleCount={200}
                  />
                </div>
              </div>
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 波形处理 */}
          <ComponentSectionLayout
            title='波形处理'
            id='wave-processing'
            description='支持波形数据的标准化和放大处理。'
          >
            <CodeOperationContainer>
              <div className="flex flex-col gap-16">
                <div>
                  <h4 className="mb-8">标准化波形</h4>
                  <Audio
                    audioUrl="https://suminhan.cn/land-design/dapxiang.mp3"
                    showWave={true}
                    waveNormalize={true}
                  />
                </div>
                <div>
                  <h4 className="mb-8">放大波形</h4>
                  <Audio
                    audioUrl="https://suminhan.cn/land-design/dapxiang.mp3"
                    showWave={true}
                    waveAmplify={true}
                  />
                </div>
              </div>
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 自定义样式 */}
          <ComponentSectionLayout
            title='自定义样式'
            id='custom-style'
            description='可以通过 style 和 className 属性自定义音频组件的外观。'
          >
            <CodeOperationContainer>
              <Audio
                audioUrl="https://suminhan.cn/land-design/dapxiang.mp3"
                showWave={true}
                style={{
                  padding: '16px',
                  borderRadius: '8px',
                  backgroundColor: '#f5f5f5',
                  border: '1px solid #d9d9d9'
                }}
              />
            </CodeOperationContainer>
          </ComponentSectionLayout>
        </div>
      )}

      {activeTab === 'props' && (
        <div className='flex flex-col gap-12'>
          <ComponentPropsTable props={audioProps} />
          {AudioTypes.map((type) => (
            <ComponentPropsTable key={type.name} props={type.data as any} />
          ))}
        </div>
      )}
    </ComponentContentLayout>
  );
}
