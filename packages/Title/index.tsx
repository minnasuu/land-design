import React, { useMemo, useCallback } from 'react';
import PopOver from "../PopOver";
import Icon from '../Icon';
import './index.scss';
import { TitleProps } from "./props";

/** 类名前缀 */
const prefixCls = 'land-title';

/**
 * Title 标题组件
 * 用于展示不同层级的标题，支持前缀、角标、提示和自定义样式
 */
const Title: React.FC<TitleProps> = ({
  title,
  type = "h1",
  prefix,
  sub,
  tip,
  style,
  className = "",
  onClick,
}) => {
  // 计算根元素类名
  const rootClassName = useMemo(() => {
    return [prefixCls, className].filter(Boolean).join(' ');
  }, [className]);

  // 点击事件处理
  const handleClick = useCallback(() => {
    onClick?.();
  }, [onClick]);

  // 渲染标题内容
  const renderTitle = useMemo(() => {
    const TitleTag = type as keyof JSX.IntrinsicElements;
    return <TitleTag>{title}</TitleTag>;
  }, [type, title]);

  // 渲染角标内容
  const renderSub = useMemo(() => {
    if (!sub) return null;
    if (typeof sub === "string") {
      return <div className={`${prefixCls}__sub`}>{sub}</div>;
    }
    return <>{sub}</>;
  }, [sub]);

  return (
    <div
      className={rootClassName}
      style={style}
      onClick={handleClick}
    >
      {prefix && <span className={`${prefixCls}__prefix`}>{prefix}</span>}
      {renderTitle}
      {tip && (
        <div className={`${prefixCls}__tip hover-pop`}>
          <Icon name="info-stroke" stroke="var(--color-text-secondary)" />
          <PopOver content={tip} theme="dark" style={{ maxWidth: "200px" }} />
        </div>
      )}
      {renderSub}
    </div>
  );
};

export default Title;
