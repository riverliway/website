import React from 'react'

interface DisplayIconProps {
  src: string
}

export const DisplayIcon: React.FC<DisplayIconProps> = props => {
  return (
    <img src={props.src} className='w-44' />
  )
}
