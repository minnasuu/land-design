import React, { useState } from 'react';
import Title from "../Title";
import Audio from ".";
import AudioWave from "./AudioWave";

export default function AudioWithWaveExample() {
  const [play, setPlay] = useState(false);

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-3">
        <Title title="Audio + AudioWave 组合使用" type="h3" />
        <div className="flex justify-center gap-6 border p-8">
          <div className="flex flex-col gap-4 items-center">
            <Audio audioUrl="./heiye.mp3" />
            <AudioWave
              audioUrl="./heiye.mp3"
              play={play}
              onPlayChange={setPlay}
              type="bar"
              sampleCount={80}
              barWidth={3}
              barGap={1}
              defaultColor="var(--color-gray-6)"
              activeColor="var(--color-primary-6)"
              style={{ width: '400px', height: '80px' }}
            />
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <Title title="Audio + AudioWave 垂直布局" type="h3" />
        <div className="flex justify-center gap-6 border p-8">
          <div className="flex flex-col gap-4 items-center">
            <Audio audioUrl="./heiye.mp3" />
            <AudioWave
              audioUrl="./heiye.mp3"
              play={play}
              onPlayChange={setPlay}
              type="line"
              sampleCount={150}
              defaultColor="var(--color-blue-6)"
              activeColor="var(--color-orange-6)"
              style={{ width: '300px', height: '100px' }}
            />
          </div>
        </div>
      </div>
    </div>
  );
} 