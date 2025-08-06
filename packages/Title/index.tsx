import React from 'react'
import PopOver from "../PopOver";
import Icon from '../Icon';
import './index.scss';
import { TitleProps } from "./props";

const Title: React.FC<TitleProps> = ({
  title,
  type = "h1",
  prefix,
  sub,
  tip,
  style,
  className = "",
  onClick,
}) => (
  <div
    className={`land-title ${className}`}
    style={style}
    onClick={() => onClick?.()}
  >
    {prefix && <span className="land-title-prefix">{prefix}</span>}
    {type === "h1" && <h1>{title}</h1>}
    {type === "h2" && <h2>{title}</h2>}
    {type === "h3" && <h3>{title}</h3>}
    {type === "h4" && <h4>{title}</h4>}
    {tip && (
      <div className="land-title-tip hover-pop">
        <Icon name="info-stroke" stroke="var(--color-text-secondary)" />
        <PopOver content={tip} theme="dark" style={{ maxWidth: "200px" }} />
      </div>
    )}
    {sub && typeof sub === "string" ? (
      <div className="land-title-sub">{sub}</div>
    ) : (
      <>{sub}</>
    )}
  </div>
);

export default Title;