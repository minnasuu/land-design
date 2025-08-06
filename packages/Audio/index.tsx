import AudioButton from "./AudioButton";
import AudioAnimationIcon from "./AudioAnimationIcon";
import AudioWave from "./AudioWave";
import { AudioProps } from "./props";
import React, { useEffect, useRef, useState } from "react";
import './index.scss'

const Audio: React.FC<AudioProps> & {
  AudioButton: typeof AudioButton;
  AudioAnimationIcon: typeof AudioAnimationIcon;
  AudioWave: typeof AudioWave;
} = ({
  audioUrl,
  showWave = false,
  waveType = 'bar',
  waveSampleCount = 100,
  waveBarWidth = 2,
  waveBarGap = 1,
  waveDefaultColor = "var(--color-gray-12)",
  waveActiveColor = "var(--color-primary-12)",
  waveNormalize = true,
  waveAmplify = false,
  style,
  className = ""
}) => {
    const audioRef = useRef<HTMLAudioElement>(null);
    const [play, setPlay] = useState<boolean>(false);

    useEffect(() => {
      if (!audioRef.current) return;
      const audio = audioRef.current;
      if (play) {
        audio.play();
      } else {
        audio.pause();
      }
    }, [play]);

    return (
      <div className={`land-audio ${className}`} style={style}>
        <AudioButton
          play={play}
          onClick={(e) => {
            e.stopPropagation();
            setPlay(!play);
          }}
        />
        {showWave && (
          <AudioWave
            audioUrl={audioUrl}
            audio={audioRef.current}
            type={waveType}
            sampleCount={waveSampleCount}
            barWidth={waveBarWidth}
            barGap={waveBarGap}
            defaultColor={waveDefaultColor}
            activeColor={waveActiveColor}
            normalize={waveNormalize}
            amplify={waveAmplify}
          />
        )}
        <audio ref={audioRef} src={audioUrl} />
      </div>
    );
  };

Audio.AudioButton = AudioButton;
Audio.AudioAnimationIcon = AudioAnimationIcon;
Audio.AudioWave = AudioWave;

// 导出所有类型定义
export * from "./props";

// 导出子组件
export { default as AudioWave } from "./AudioWave";
export { default as AudioButton } from "./AudioButton";
export { default as AudioAnimationIcon } from "./AudioAnimationIcon";

export default Audio;
