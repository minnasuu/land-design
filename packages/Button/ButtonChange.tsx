import React, { useState } from 'react'
import Button from '.'
import { motion } from 'motion/react';
import { ButtonProps } from './props'

const ButtonChange: React.FC<{ defaultSide: string | React.ReactNode; hoverSide: string | React.ReactNode } & Omit<ButtonProps, 'children'>> = ({
  defaultSide,
  hoverSide,
  ...restProps
}) => {
  const [isHover, setIsHover] = useState(false);
  return (
    <Button
      {...restProps}
      htmlProps={{
        onMouseEnter: () => setIsHover(true),
        onMouseLeave: () => setIsHover(false),
      }}
    >
      <motion.div animate={{ opacity: isHover ? 1 : 0, scaleY: isHover ? 1 : -1 }} transition={{ duration: 0.6, type: 'spring' }} className='land-button-change-hover'>
        {hoverSide}
      </motion.div>
      <motion.div animate={{ opacity: isHover ? 0 : 1 }} transition={{ duration: 0.6, type: 'spring' }} className='land-button-change-default'>{defaultSide}</motion.div>
    </Button>
  )
}

export default ButtonChange;