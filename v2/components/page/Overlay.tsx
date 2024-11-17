import React from 'react'
import { useMediaQuery } from 'react-responsive'
import { useTheme } from './Page'

export const Overlay: React.FC = () => {
  const theme = useTheme()
  const isPhone = useMediaQuery({ screen: true, maxWidth: 530 })

  if (isPhone) {
    return <></>
  }

  if (theme === 'light') {
    return (
      <div className='fixed h-2/6 top-2/3 w-full bg-gradient-to-t from-white to-transparent pointer-events-none' />
    )
  }

  return (
    <div className='fixed h-2/6 top-2/3 w-full bg-gradient-to-t from-black to-transparent pointer-events-none' />
  )
}
