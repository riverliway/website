import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { ThemeSwitch } from './ThemeSwitch'
import { ButtonIcon } from '../common/ButtonIcon'
import { useMediaQuery } from '@mui/material'
import { Signature } from '../signature/Signature'
import { DrawnIcon } from '../drawnIcons/DrawnIcon'

interface HeaderProps {
  theme: 'dark' | 'light'
  updateTheme: (theme: 'dark' | 'light') => void
}

export const Header: React.FC<HeaderProps> = props => {
  const [shouldAnimate, setShouldAnimate] = useState(false)
  const isSmallPhone = useMediaQuery('(max-width: 320px)')

  useEffect(() => {
    const params = new URLSearchParams(window.location.search)
  }, [])

  return (
    <nav className='fixed w-full flex justify-center border-b border-gray-600 backdrop-blur-md' style={{ backgroundColor: '#2300297f' }}>
      <div className='w-full md:w-9/12 flex flex-row justify-between align-center p-2'>
        {!isSmallPhone && (
          <a className='flex flex-row justify-center align-center cursor-pointer' href='/'>
            <Signature />
          </a>
        )}
        <div className={`flex flex-row align-center gap-2 ${isSmallPhone ? 'justify-around w-full' : 'justify-center'}`}>
          <motion.div whileHover={{
            scale: 1.05,
            transition: { duration: 0.05 },
          }}>
            <ThemeSwitch theme={props.theme} updateTheme={props.updateTheme} />
          </motion.div>
          <ButtonIcon href='https://www.linkedin.com/in/river-schieberl' newTab>
            <DrawnIcon
              delay={0}
              d='M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14 M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68 M 8.27 18.5v-8.37H5.5v8.37h2.77z M 18.5 18.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79'
            />
          </ButtonIcon>
          <ButtonIcon href='https://twitter.com/riverliway' newTab>
            <DrawnIcon
              delay={1}
              d='M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z'
            />
          </ButtonIcon>
          <ButtonIcon href='https://github.com/riverliway' newTab>
            <DrawnIcon
              delay={2}
              d='M 12 1.27 a 11 11 0 0 0 -3.48 21.46 c 0.55 0.09 0.73 -0.28 0.73 -0.55 v -1.84 c -3.03 0.64 -3.67 -1.46 -3.67 -1.46 c -0.55 -1.29 -1.28 -1.65 -1.28 -1.65 c -0.92 -0.65 0.1 -0.65 0.1 -0.65 c 1.1 0 1.73 1.1 1.73 1.1 c 0.92 1.65 2.57 1.2 3.21 0.92 a 2 2 0 0 1 0.64 -1.47 c -2.47 -0.27 -5.04 -1.19 -5.04 -5.5 c 0 -1.1 0.46 -2.1 1.2 -2.84 a 3.76 3.76 0 0 1 0 -2.93 s 0.91 -0.28 3.11 1.1 c 1.8 -0.49 3.7 -0.49 5.5 0 c 2.1 -1.38 3.02 -1.1 3.02 -1.1 a 3.76 3.76 0 0 1 0 2.93 c 0.83 0.74 1.2 1.74 1.2 2.94 c 0 4.21 -2.57 5.13 -5.04 5.4 c 0.45 0.37 0.82 0.92 0.82 2.02 v 3.03 c 0 0.27 0.1 0.64 0.73 0.55 A 11 11 0 0 0 11.531 1.286'
            />
          </ButtonIcon>
        </div>
      </div>
    </nav>
  )
}

/**
 * Determines if the header should animate based on if the user came from within the site
 */
const shouldAnimateHeader = (): boolean => {
  const params = new URLSearchParams(window.location.search)
}
