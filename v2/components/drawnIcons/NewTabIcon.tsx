import React from 'react'
import { motion } from 'framer-motion'

interface NewTabIconProps {
  isHover: boolean
}

/**
 * An animated icon for the new tab icon
 */
export const NewTabIcon: React.FC<NewTabIconProps> = ({ isHover }) => {
  return (
    <motion.svg
      initial='initial'
      className='stroke-fuchsia-800'
      animate={isHover ? 'revealed' : 'initial'}
      width='50'
      height='35'
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <motion.path
        variants={{
          initial: {
            pathLength: 0,
            strokeWidth: 0,
            x: 10,
            transition: {
              delay: 0,
              duration: 0.3,
              ease: 'easeIn'
            }
          },
          revealed: {
            pathLength: 1,
            strokeWidth: 2,
            x: 0,
            transition: {
              delay: 0,
              duration: 0.6,
              ease: 'easeOut'
            }
          }
        }}
        d='M 14 9 V 5 l 7 7 l -7 7 v -4.1 c -5 0 -8.5 1.6 -11 5.1 c 1 -5 4 -10 11 -11 z'
        strokeLinecap='round'
      />
    </motion.svg>
  )
}
