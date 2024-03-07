import React from 'react'
import { SVGMotionProps, motion } from 'framer-motion'

export const FanceUnderline: React.FC<{ isHover: boolean }> = ({ isHover }) => {
  const pathProps: SVGMotionProps<SVGPathElement> = {
    strokeLinecap: 'round',
    stroke: '#8a0699'
  }

  return (
    <motion.svg
      initial='initial'
      animate={isHover ? 'revealed' : 'initial'}
      width='65'
      height='30'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <motion.path
        variants={createVariants(0.7, 0)}
        d='m 9.006 5.6673 Q 8.7365 6.8805 10.826 7.285 T 14.7355 6.712 T 14.9375 3.6452 T 8.7365 1.7917 T 2.266 4.8922 T 4.76 9.9138 T 15.679 11.127 T 32.125 6.5773 T 48.571 2.0275 T 59.31 3.2725 T 62.229 8.2815 T 55.528 11.3335 T 48.893 9.343 T 49.358 6.1255 T 53.272 5.5615 T 55.13 7.4855'
        {...pathProps}
      />
      <motion.path
        variants={createVariants(0.5, 0.25)}
        d='M 26.694 5.265 L 29.053 10.881'
        {...pathProps}
      />
      <motion.path
        variants={createVariants(0.5, 0.5)}
        d='M 35.359 2.963 L 37.947 8.138'
        {...pathProps}
      />
    </motion.svg>
  )
}

const createVariants = (duration: number, delay: number) => {
  return {
    initial: {
      pathLength: 0,
      strokeWidth: 0,
      transition: {
        delay: 0,
        duration: duration * 0.8,
        ease: 'easeOut'
      }
    },
    revealed: {
      pathLength: 1,
      strokeWidth: 2,
      transition: {
        delay,
        duration,
        ease: 'easeOut'
      }
    }
  }
}