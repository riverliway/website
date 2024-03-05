import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub'
import { motion } from 'framer-motion'
import { ThemeSwitch } from './ThemeSwitch'
import { LinkedIn, Twitter } from '@mui/icons-material'
import { ButtonIcon } from '../common/ButtonIcon'
import { useMediaQuery } from '@mui/material'

interface HeaderProps {
  theme: 'dark' | 'light'
  updateTheme: (theme: 'dark' | 'light') => void
}

export const Header: React.FC<HeaderProps> = props => {
  const isSmallPhone = useMediaQuery('(max-width: 320px)')

  return (
    <nav className='absolute w-full flex justify-center'>
      <div className='w-full md:w-9/12 flex flex-row justify-between align-center p-2'>
        {!isSmallPhone && (
          <div className='flex flex-row justify-center align-center'>
            logo
          </div>
        )}
        <div className={`flex flex-row align-center gap-2 ${isSmallPhone ? 'justify-around w-full' : 'justify-center'}`}>
          <motion.div whileHover={{
            scale: 1.05,
            transition: { duration: 0.05 },
          }}>
            <ThemeSwitch theme={props.theme} updateTheme={props.updateTheme} />
          </motion.div>
          <ButtonIcon href='https://www.linkedin.com/in/river-schieberl/' children={LinkedIn} />
          <ButtonIcon href='https://twitter.com/riverliway' children={Twitter} />
          <ButtonIcon href='https://github.com/riverliway' children={GitHubIcon} />
        </div>
      </div>
    </nav>
  )
}
