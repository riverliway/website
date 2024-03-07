import React from 'react'
import { SVGMotionProps, motion } from 'framer-motion'

interface DrawnIconProps {
  d: string
  delay: number
}

/**
 * An animated icon
 */
export const DrawnIcon: React.FC<DrawnIconProps> = props => {
  const pathProps: SVGMotionProps<SVGPathElement> = {
    strokeLinecap: 'square',
    stroke: '#8a0699'
  }

  return (
    <motion.div
      initial={{ strokeWidth: 0 }}
      animate={{ strokeWidth: [null, 0.5] }}
      transition={{
        duration: 2.3,
        times: [0.1, 1],
        delay: props.delay,
        ease: 'linear'
      }}
    >
      <motion.svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox='0 0 24 24'
        width='35'
        height='35'
        className='fill-fuchsia-800 hover:fill-fuchsia-950'
        initial={{ fillOpacity: 0 }}
        animate={{ fillOpacity: 1 }}
        transition={{
          duration: 1,
          ease: 'linear',
          delay: props.delay + 1.5
        }}
      >
        <motion.path
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{
            duration: 1.5,
            ease: 'linear',
            delay: props.delay + 0.5
          }}
          d={props.d}
          {...pathProps}
        />
      </motion.svg>
    </motion.div>
  )
}
