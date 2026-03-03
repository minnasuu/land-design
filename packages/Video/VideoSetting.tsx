import React from 'react';
import Switch from '../Switch';
import { VideoSettingProps, DEFAULT_RATE_OPTIONS } from './props';
import './index.scss';

const VideoSetting: React.FC<VideoSettingProps> = ({
  rateOptions = DEFAULT_RATE_OPTIONS,
  currentRate = 1,
  onRateChange,
  loop = false,
  onLoopChange,
}) => {
  return (
    <div className="land-video-setting">
      {/* 播放速率 */}
      <div className="land-video-setting__section">
        <div className="land-video-setting__label">播放速度</div>
        <div className="land-video-setting__rates">
          {rateOptions.map((option) => (
            <button
              key={option.value}
              className={`land-video-setting__rate ${currentRate === option.value ? 'land-video-setting__rate--active' : ''}`}
              onClick={() => onRateChange?.(option.value)}
            >
              {option.label}
            </button>
          ))}
        </div>
      </div>

      {/* 循环播放 */}
      <div className="land-video-setting__section">
        <div className="land-video-setting__row">
          <span className="land-video-setting__text">自动循环</span>
          <Switch
            checked={loop}
            onChange={() => onLoopChange?.(!loop)}
          />
        </div>
      </div>
    </div>
  );
};

export default VideoSetting;
