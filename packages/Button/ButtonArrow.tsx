import React, { useState } from 'react'
import Button from '.'
import Icon from '../Icon'
import './index.scss'
import { ButtonProps } from './props'

const ButtonArrow: React.FC<ButtonProps> = ({
  style,
  ...restProps
}) => {
  const [isHover, setIsHover] = useState(false);
  return (
    <Button
      style={{
        paddingRight: '12px',
        ...style
      }}
      {...restProps}
      htmlProps={{
        onMouseEnter: () => setIsHover(true),
        onMouseLeave: () => setIsHover(false),
      }}
    >
      <Icon name="arrow-line" size={16} strokeWidth={3} className={`land-button-arrow-icon ${isHover ? 'button-hover-arrow' : ''}`} />
    </Button>
  )
}

export default ButtonArrow;