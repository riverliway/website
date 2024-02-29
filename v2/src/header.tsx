import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub'
import { motion } from 'framer-motion'
import { ThemeSwitch } from './themeSwitch'

interface HeaderProps {
  theme: 'dark' | 'light'
  updateTheme: (theme: 'dark' | 'light') => void
}

export const Header: React.FC<HeaderProps> = props => {
  return (
    <nav className='absolute w-full flex flex-row justify-between align-center p-2'>
      <div className='flex flex-row justify-center align-center'>
        logo
      </div>
      <ul className='flex flex-row justify-center align-center gap-2'>
        <motion.li whileHover={{
          scale: 1.05,
          transition: { duration: 0.05 },
        }}>
          <ThemeSwitch theme={props.theme} updateTheme={props.updateTheme} />
        </motion.li>
        <motion.li whileHover={{
          scale: 1.05,
          transition: { duration: 0.05 },
        }}>
          <a href='https://github.com/riverliway'><GitHubIcon fontSize='large' /></a>
        </motion.li>
      </ul>
    </nav>
  )
}
