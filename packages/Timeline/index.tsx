import React from "react";
import Divider from "../Divider";
import './index.scss';
import { TimelineProps } from "./props";


const Timeline: React.FC<TimelineProps> = ({ data, direction = "column", icon }) => {
  return (
    <div className={`land-timeline ${direction === 'row' ? 'row' : ''}`}>
      {
        data?.map((item, index) => <div key={index} className={`land-timeline-item ${direction === 'row' ? 'row' : ''}`}>
          <div className="land-timeline-indicator-wrapper">
            {item.icon || icon || <div className="land-timeline-indicator"></div>}
            {index !== data?.length - 1 && <Divider direction={direction} />}
          </div>
          <div className="land-timeline-content">
            {item.title && <div className="land-timeline-title">{item.title}</div>}
            {item.subTitle && <div className="land-timeline-subTitle">{item.subTitle}</div>}
            {item.desc && <div className="land-timeline-desc">{item.desc}</div>}
          </div>
        </div>)
      }
    </div>
  );
};


export default Timeline;
