import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { createDurationDelays } from './createDurationDelays'
import { useTheme } from '../page/Page'

interface SignatureProps {
  shouldInitialAnimate?: boolean
}

export const Signature: React.FC<SignatureProps> = props => {
  const theme = useTheme()
  const animate = props.shouldInitialAnimate ?? true
  const [canShow, setCanShow] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const durationDelays = createDurationDelays([0.2, 1.5, 0.7, 0.3, 0.3])

  const paths = [
    'm 0 35 q 5.6 -5.6 8.4 -13.3 T 14.7 8.4 T 24.5 4.2 T 28.7 14 T 17 23 T 5 22 T 6 19 T 12 20 T 15 24 T 18 29 T 25 33 T 33 32 T 39 25 Q 42 34 43 33 Q 44 34 47 25 Q 51 28 54 28 T 58 27 T 57 24 T 52 25 T 51 31 T 59 33 Q 63 33 63 31 T 64 25 T 70 23',
    'M 74 35 Q 77 34 79 30 T 83 18 T 83 8 T 80 8 T 78 15 T 78 24 T 81 31 T 86 29 T 89 22 Q 89 26 91 29 T 95 31',
    'M 37.642 16.336 q -0.501 0.385 -0.758 1.654 t 0.482 1.931 t 2 0.414 t 1.448 -1.035 t 0.256 -1.324 t -0.67 -1.847',
    'M 88.174 15.888 q -0.469 0.427 -0.939 1.153 t 0.128 1.836 t 1.836 0.684 t 1.41 -0.897 t 0.256 -1.324 t -0.811 -1.538'
  ]

  // I have no idea why this is necessary, but it is
  // The highlight hover animation gets stuck in the revealed state without it
  useEffect(() => setCanShow(true), [])

  return (
    <motion.svg
      width='110'
      height='35'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      whileHover={{
        scale: 1.08,
        transition: { duration: 0.15 },
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {paths.map((d, i) => (
        <React.Fragment key={i}>
          <motion.path
            initial={{ pathLength: 0, strokeWidth: 0 }}
            animate={{ pathLength: 1, strokeWidth: 2 }}
            d={d}
            transition={{
              duration: animate ? durationDelays[i].duration : 0,
              ease: 'linear',
              delay: animate ? durationDelays[i].delay : 0
            }}
            strokeLinecap='round'
            stroke={theme === 'dark' ? '#8a0699' : '#9f74cf'}
          />
          {canShow && (
            <motion.path
              animate={isHovered ? 'revealed' : 'initial'}
              variants={{
                initial: {
                  pathLength: 0,
                  strokeWidth: 0,
                  transition: {
                    duration: durationDelays[i].duration * 0.25,
                    ease: 'linear',
                    delay: durationDelays[durationDelays.length - i - 1].delay * 0.125
                  }
                },
                revealed: {
                  pathLength: 1,
                  strokeWidth: 2,
                  transition: {
                    duration: durationDelays[i].duration * 0.25,
                    ease: 'linear',
                    delay: durationDelays[i].delay * 0.25
                  }
                }
              }}
              d={d}
              strokeLinecap='round'
              stroke={theme === 'dark' ? '#e9d5ff' : '#61036b'}
            />
          )}
        </React.Fragment>
      ))}
    </motion.svg>
  )
}
