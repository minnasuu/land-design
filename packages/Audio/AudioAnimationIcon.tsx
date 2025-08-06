import React from "react";
import { AudioAnimationProps } from "./props";

const AudioAnimation: React.FC<AudioAnimationProps> = ({
  color,
  size = 12,
}) => (
  <div
    className="land-audio-animation-icon"
    style={{ width: `${size}px`, height: `${size}px` }}
  >
    {Array.from({ length: 4 }).map((_itme, index) => (
      <div
        className="land-audio-animation-icon-bar"
        key={index}
        style={{
          background: color,
        }}
      ></div>
    ))}
  </div>
);

export default AudioAnimation;
