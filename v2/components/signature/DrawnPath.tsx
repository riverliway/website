import React from 'react'
import { SVGMotionProps, motion } from 'framer-motion'

type DrawnPathProps = SVGMotionProps<SVGPathElement> & {
  duration: number
  delay: number
}

/**
 * Draws a path using the `framer-motion` library.
 * @prop duration - The duration of the animation.
 * @prop delay - The delay before the animation starts.
 */
export const DrawnPath: React.FC<DrawnPathProps> = props => {
  return (
    
  )
}
