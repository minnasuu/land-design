import React from 'react'
import { BadgeProps } from './props';
import './index.scss';

const Badge: React.FC<BadgeProps> = ({
  isDot,
  count,
  exceedCount = 99,
  content,
  children,
  className,
  style,
}) => {
  function isOnlyUppercase(str) {
    // 正则表达式匹配仅包含大写字母和中文字符
    const regex = /^[A-Z]+$/;
    return regex.test(str);
  }
  return (
    <div className={`land-badge ${className}`} style={style}>
      <div className={`land-badge-content ${isDot ? 'dot' : ''} ${isOnlyUppercase(`${count || content}`) ? 'large' : ''}`}>
        {isDot ? null : content ? content : count <= exceedCount ? count : `${exceedCount}+`}
      </div>
      {children}
    </div>
  )
}

export default Badge;
