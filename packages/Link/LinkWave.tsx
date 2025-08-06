import React from 'react'
import Link from '.'
import { LinkWaveProps } from './props'

const LinkWave: React.FC<LinkWaveProps> = ({
  animation = true,
  transform,
  children,
  underline,
  ...restProps
}) => (
  <Link underline={transform ? true : underline} className={`link-wave ${animation ? 'animation' : ''} ${transform ? 'transform' : ''}`} {...restProps} >
    {children}
    <div className='land-link-wave'></div>
  </Link>
)

export default LinkWave;