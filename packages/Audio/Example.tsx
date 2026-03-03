import React, { useState } from 'react';
import Audio from '.';
import CodeOperationContainer from '../../example/components/CodeOperationContainer';
import ComponentContentLayout from '../../example/components/ComponentContentLayout';
import ComponentPropsTable from '../../example/components/ComponentPropsTable';
import ComponentSectionLayout from '../../example/components/ComponentSectionLayout';

export default function AudioExample() {
  const [activeTab, setActiveTab] = useState<string>('examples');

  const audioUrl = 'https://suminhan.cn/land-design/dapxiang.mp3';

  const audioProps = [
    { name: 'src', type: 'string', desc: '音频文件地址', required: true },
    { name: 'title', type: 'string', desc: '音频标题' },
    { name: 'cover', type: 'string', desc: '封面图地址' },
    { name: 'autoPlay', type: 'boolean', desc: '是否自动播放', default: 'false' },
    { name: 'loop', type: 'boolean', desc: '是否循环播放', default: 'false' },
    { name: 'muted', type: 'boolean', desc: '是否静音', default: 'false' },
    { name: 'volume', type: 'number', desc: '初始音量 (0-100)', default: '100' },
    { name: 'playbackRate', type: 'number', desc: '播放速率', default: '1' },
    { name: 'preload', type: "'none' | 'metadata' | 'auto'", desc: '预加载策略', default: "'metadata'" },
    { name: 'showPlayButton', type: 'boolean', desc: '显示播放按钮', default: 'true' },
    { name: 'showProgress', type: 'boolean', desc: '显示进度条', default: 'true' },
    { name: 'showTime', type: 'boolean', desc: '显示时间', default: 'true' },
    { name: 'showVolume', type: 'boolean', desc: '显示音量控制', default: 'false' },
    { name: 'showWave', type: 'boolean', desc: '显示波形', default: 'false' },
    { name: 'waveType', type: "'bar' | 'line'", desc: '波形类型', default: "'bar'" },
    { name: 'waveSampleCount', type: 'number', desc: '波形采样数量', default: '100' },
    { name: 'waveBarWidth', type: 'number', desc: '波形条形宽度', default: '2' },
    { name: 'waveBarGap', type: 'number', desc: '波形条形间距', default: '1' },
    { name: 'waveDefaultColor', type: 'string', desc: '波形默认颜色' },
    { name: 'waveActiveColor', type: 'string', desc: '波形激活颜色' },
    { name: 'waveNormalize', type: 'boolean', desc: '是否标准化波形', default: 'true' },
    { name: 'waveAmplify', type: 'boolean', desc: '是否放大波形', default: 'false' },
    { name: 'waveHeight', type: 'number', desc: '波形高度', default: '48' },
    { name: 'progressColor', type: 'string', desc: '进度条颜色' },
    { name: 'onPlay', type: '(data: AudioEventData) => void', desc: '播放事件' },
    { name: 'onPause', type: '(data: AudioEventData) => void', desc: '暂停事件' },
    { name: 'onEnded', type: '(data: AudioEventData) => void', desc: '播放结束事件' },
    { name: 'onTimeUpdate', type: '(data: AudioEventData) => void', desc: '时间更新事件' },
    { name: 'onSeek', type: '(time: number) => void', desc: '进度跳转事件' },
    { name: 'onError', type: '(error: Error) => void', desc: '错误事件' },
    { name: 'className', type: 'string', desc: '自定义类名' },
    { name: 'style', type: 'CSSProperties', desc: '自定义样式' },
  ];

  const buttonProps = [
    { name: 'playing', type: 'boolean', desc: '是否正在播放', default: 'false' },
    { name: 'size', type: "number | 'small' | 'medium' | 'large'", desc: '按钮尺寸', default: "'medium'" },
    { name: 'color', type: 'string', desc: '按钮颜色' },
    { name: 'disabled', type: 'boolean', desc: '是否禁用', default: 'false' },
    { name: 'animated', type: 'boolean', desc: '是否显示动画图标', default: 'true' },
    { name: 'loading', type: 'boolean', desc: '是否加载中', default: 'false' },
    { name: 'onClick', type: '(e: MouseEvent) => void', desc: '点击事件' },
  ];

  const waveProps = [
    { name: 'src', type: 'string', desc: '音频文件地址', required: true },
    { name: 'audioRef', type: 'RefObject<HTMLAudioElement>', desc: '外部音频元素引用' },
    { name: 'playing', type: 'boolean', desc: '是否正在播放', default: 'false' },
    { name: 'currentTime', type: 'number', desc: '当前播放时间' },
    { name: 'duration', type: 'number', desc: '总时长' },
    { name: 'type', type: "'bar' | 'line'", desc: '波形类型', default: "'bar'" },
    { name: 'sampleCount', type: 'number', desc: '采样数量', default: '100' },
    { name: 'barWidth', type: 'number', desc: '条形宽度', default: '2' },
    { name: 'barGap', type: 'number', desc: '条形间距', default: '1' },
    { name: 'defaultColor', type: 'string', desc: '默认颜色' },
    { name: 'activeColor', type: 'string', desc: '激活颜色' },
    { name: 'normalize', type: 'boolean', desc: '是否标准化', default: 'true' },
    { name: 'amplify', type: 'boolean', desc: '是否放大', default: 'false' },
    { name: 'height', type: 'number', desc: '波形高度', default: '48' },
    { name: 'onPlayChange', type: '(playing: boolean) => void', desc: '播放状态变化回调' },
    { name: 'onSeek', type: '(progress: number) => void', desc: '进度点击回调' },
  ];

  const animationProps = [
    { name: 'color', type: 'string', desc: '动画颜色', default: "'currentColor'" },
    { name: 'size', type: 'number', desc: '动画大小', default: '16' },
    { name: 'playing', type: 'boolean', desc: '是否播放动画', default: 'true' },
    { name: 'barCount', type: 'number', desc: '条形数量', default: '4' },
    { name: 'speed', type: 'number', desc: '动画速度 (秒)', default: '1' },
  ];

  return (
    <ComponentContentLayout
      zh="音频播放器"
      en="Audio"
      desc="音频播放器组件，支持播放控制、进度条、波形可视化等功能。"
      activeTab={activeTab}
      onTabChange={setActiveTab}
    >
      {activeTab === 'examples' && (
        <div className="flex flex-col gap-24">
          {/* 基础用法 */}
          <ComponentSectionLayout
            title="基础用法"
            id="basic"
            description="最简单的音频播放器，包含播放按钮、进度条和时间显示。"
          >
            <CodeOperationContainer>
              <Audio src={audioUrl} />
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 带标题和封面 */}
          <ComponentSectionLayout
            title="带标题和封面"
            id="with-cover"
            description="可以添加音频标题和封面图。"
          >
            <CodeOperationContainer>
              <Audio
                src={audioUrl}
                title="大象 - 李志"
                cover="https://picsum.photos/100/100"
              />
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 波形显示 */}
          <ComponentSectionLayout
            title="波形显示"
            id="wave"
            description="通过 showWave 显示音频波形可视化效果，可点击波形跳转进度。"
          >
            <CodeOperationContainer>
              <div className="flex flex-col gap-16">
                <div>
                  <h4 className="mb-8 text-sm">柱状图波形</h4>
                  <Audio src={audioUrl} showWave waveType="bar" />
                </div>
                <div>
                  <h4 className="mb-8 text-sm">折线图波形</h4>
                  <Audio src={audioUrl} showWave waveType="line" />
                </div>
              </div>
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 波形配置 */}
          <ComponentSectionLayout
            title="波形配置"
            id="wave-config"
            description="可以自定义波形的颜色、尺寸、采样数量等参数。"
          >
            <CodeOperationContainer>
              <div className="flex flex-col gap-16">
                <div>
                  <h4 className="mb-8 text-sm">自定义颜色</h4>
                  <Audio
                    src={audioUrl}
                    showWave
                    waveDefaultColor="var(--color-fill-3)"
                    waveActiveColor="var(--color-success-6)"
                  />
                </div>
                <div>
                  <h4 className="mb-8 text-sm">自定义尺寸</h4>
                  <Audio
                    src={audioUrl}
                    showWave
                    waveBarWidth={4}
                    waveBarGap={2}
                    waveHeight={64}
                  />
                </div>
                <div>
                  <h4 className="mb-8 text-sm">高采样</h4>
                  <Audio
                    src={audioUrl}
                    showWave
                    waveSampleCount={200}
                  />
                </div>
              </div>
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 子组件独立使用 */}
          <ComponentSectionLayout
            title="子组件"
            id="sub-components"
            description="可以单独使用子组件进行自定义组合。"
          >
            <CodeOperationContainer>
              <div className="flex flex-col gap-16">
                <div>
                  <h4 className="mb-8 text-sm">播放按钮</h4>
                  <div className="flex items-center gap-12">
                    <Audio.Button size="small" />
                    <Audio.Button size="medium" />
                    <Audio.Button size="large" />
                    <Audio.Button playing size="medium" />
                    <Audio.Button playing animated={false} size="medium" />
                  </div>
                </div>
                <div>
                  <h4 className="mb-8 text-sm">动画图标</h4>
                  <div className="flex items-center gap-12">
                    <Audio.AnimationIcon size={16} color="var(--color-primary-6)" />
                    <Audio.AnimationIcon size={20} color="var(--color-success-6)" />
                    <Audio.AnimationIcon size={24} color="var(--color-warning-6)" />
                    <Audio.AnimationIcon size={24} color="var(--color-danger-6)" playing={false} />
                  </div>
                </div>
              </div>
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 自定义样式 */}
          <ComponentSectionLayout
            title="自定义样式"
            id="custom-style"
            description="通过 style 和 className 自定义外观。"
          >
            <CodeOperationContainer>
              <Audio
                src={audioUrl}
                showWave
                style={{
                  padding: '16px',
                  borderRadius: '8px',
                  backgroundColor: 'var(--color-fill-2)',
                  border: '1px solid var(--color-border-2)',
                }}
              />
            </CodeOperationContainer>
          </ComponentSectionLayout>

          {/* 事件监听 */}
          <ComponentSectionLayout
            title="事件监听"
            id="events"
            description="监听播放、暂停、进度更新等事件。"
          >
            <CodeOperationContainer>
              <Audio
                src={audioUrl}
                onPlay={(data) => console.log('播放', data)}
                onPause={(data) => console.log('暂停', data)}
                onTimeUpdate={(data) => console.log('进度更新', data.currentTime)}
                onSeek={(time) => console.log('跳转到', time)}
                onEnded={(data) => console.log('播放结束', data)}
              />
            </CodeOperationContainer>
          </ComponentSectionLayout>
        </div>
      )}

      {activeTab === 'props' && (
        <div className="flex flex-col gap-24">
          <div>
            <h3 className="text-base font-semibold mb-12">Audio 属性</h3>
            <ComponentPropsTable props={audioProps} />
          </div>

          <div>
            <h3 className="text-base font-semibold mb-12">Audio.Button 属性</h3>
            <ComponentPropsTable props={buttonProps} />
          </div>

          <div>
            <h3 className="text-base font-semibold mb-12">Audio.Wave 属性</h3>
            <ComponentPropsTable props={waveProps} />
          </div>

          <div>
            <h3 className="text-base font-semibold mb-12">Audio.AnimationIcon 属性</h3>
            <ComponentPropsTable props={animationProps} />
          </div>
        </div>
      )}
    </ComponentContentLayout>
  );
}
