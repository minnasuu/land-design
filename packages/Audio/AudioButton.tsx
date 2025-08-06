import { AudioButtonProps } from "./props";
import Icon from "../Icon";
import React from "react";
import AudioAnimation from "./AudioAnimationIcon";

const AudioButton: React.FC<AudioButtonProps> = ({
  play,
  animation = false,
  iconSize = 24,
  color = "var(--color-text-primary)",
  style,
  className = "",
  onClick,
}) => {
  return (
    <div
      className={`land-audio-play-icon ${className}`}
      style={{
        width: `${iconSize}px`,
        height: `${iconSize}px`,
        ...style,
      }}
      onClick={onClick}
    >
      {play ? (
        animation ? (
          <Icon name="video-play" size={iconSize / 1.8} color={color} />
        ) : (
          <AudioAnimation size={iconSize / 1.8} color={color} />
        )
      ) : (
        <Icon name="video-pause" size={24} color={color} />
      )}
    </div>
  );
};

export default AudioButton;
