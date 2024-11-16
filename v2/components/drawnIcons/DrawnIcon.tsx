import React from 'react'
import { SVGMotionProps, motion } from 'framer-motion'

interface DrawnIconProps {
  width: number
  height: number
  viewWidth: number
  viewHeight: number
  d: string
  delay: number
  animate?: boolean
  fill?: boolean
  fillRule?: 'evenodd'
}

/**
 * An animated icon
 */
export const DrawnIcon: React.FC<DrawnIconProps> = props => {
  const fill = props.fill ?? true
  const animate = props.animate ?? true
  const pathProps: SVGMotionProps<SVGPathElement> = {
    strokeLinecap: 'square',
    stroke: '#8a0699'
  }

  return (
    <motion.div
      initial={{ strokeWidth: 0 }}
      animate={{ strokeWidth: [null, 0.5] }}
      transition={{
        duration: animate ? 2.3 : 0,
        times: [0.1, 1],
        delay: animate ? props.delay : 0,
        ease: 'linear'
      }}
    >
      <motion.svg
        xmlns='http://www.w3.org/2000/svg'
        viewBox={`0 0 ${props.viewWidth} ${props.viewHeight}`}
        width={props.width}
        height={props.height}
        fillRule={props.fillRule}
        className={`fill-fuchsia-800 hover:fill-fuchsia-950 ${!props.height && !props.width ? 'w-full' : ''}`}
        initial={{ fillOpacity: 0 }}
        animate={{ fillOpacity: fill ? 1 : 0 }}
        transition={{
          duration: animate ? 1 : 0,
          ease: 'linear',
          delay: animate ? props.delay + 1.5 : 0
        }}
      >
        <motion.path
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{
            duration: animate ? 1.5 : 0,
            ease: 'linear',
            delay: animate ? props.delay + 0.5 : 0
          }}
          d={props.d}
          {...pathProps}
        />
      </motion.svg>
    </motion.div>
  )
}
