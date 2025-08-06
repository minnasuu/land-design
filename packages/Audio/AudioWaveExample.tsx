import React, { useState } from 'react';
import Title from "../Title";
import AudioWave from "./AudioWave";
import Button from "../Button";

export default function AudioWaveExample() {
  const [play1, setPlay1] = useState(false);
  const [play2, setPlay2] = useState(false);
  const [play3, setPlay3] = useState(false);
  const [play4, setPlay4] = useState(false);
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-3">
        <Title title="AudioWave 组件 - 柱状图波形" type="h3" />
        <div className="flex justify-center gap-6 border p-8">
          <div className="flex flex-col gap-3 items-center">
            <AudioWave
              audioUrl="./heiye.mp3"
              play={play1}
              onPlayChange={setPlay1}
              type="bar"
              sampleCount={100}
              barWidth={3}
              barGap={1}
              defaultColor="var(--color-gray-6)"
              activeColor="var(--color-primary-6)"
              normalize={true}
              amplify={false}
              style={{ width: '400px', height: '80px' }}
            />
            <Button onClick={() => setPlay1(!play1)}>
              {play1 ? '暂停' : '播放'}
            </Button>
          </div>
        </div>
      </div>

      <div className="flex column gap-12">
        <Title title="AudioWave 组件 - 折线图波形" type="h3" />
        <div className="flex justify-center gap-24 border p-32">
          <div className="flex column gap-12 align-center">
            <AudioWave
              audioUrl="./heiye.mp3"
              play={play2}
              onPlayChange={setPlay2}
              type="line"
              sampleCount={200}
              defaultColor="var(--color-gray-6)"
              activeColor="var(--color-primary-6)"
              style={{ width: '400px', height: '80px' }}
            />
            <Button onClick={() => setPlay2(!play2)}>
              {play2 ? '暂停' : '播放'}
            </Button>
          </div>
        </div>
      </div>

      <div className="flex column gap-12">
        <Title title="AudioWave 组件 - 自定义样式" type="h3" />
        <div className="flex justify-center gap-24 border p-32">
          <div className="flex column gap-12 align-center">
            <AudioWave
              audioUrl="./heiye.mp3"
              play={play3}
              onPlayChange={setPlay3}
              type="bar"
              sampleCount={60}
              barWidth={5}
              barGap={2}
              defaultColor="var(--color-blue-6)"
              activeColor="var(--color-orange-6)"
              style={{
                width: '500px',
                height: '100px',
                borderRadius: '12px',
                border: '2px solid var(--color-blue-3)'
              }}
            />
            <Button onClick={() => setPlay3(!play3)}>
              {play3 ? '暂停' : '播放'}
            </Button>
          </div>
        </div>
      </div>

      <div className="flex column gap-12">
        <Title title="AudioWave 组件 - 高采样率" type="h3" />
        <div className="flex justify-center gap-24 border p-32">
          <div className="flex column gap-12 align-center">
            <AudioWave
              audioUrl="./heiye.mp3"
              play={play4}
              onPlayChange={setPlay4}
              type="line"
              sampleCount={500}
              defaultColor="var(--color-green-6)"
              activeColor="var(--color-purple-6)"
              style={{ width: '600px', height: '120px' }}
            />
            <Button onClick={() => setPlay4(!play4)}>
              {play4 ? '暂停' : '播放'}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
} 