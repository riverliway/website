import React from 'react'
import { SVGMotionProps, motion } from 'framer-motion'
import { DrawnPath } from './DrawnPath'
import { createDurationDelays } from './createDurationDelays'

export const Signature: React.FC = () => {
  const durationDelays = createDurationDelays([0.2, 1.5, 0.7, 0.3, 0.3])
  const pathProps: SVGMotionProps<SVGPathElement> = {
    strokeLinecap: 'round',
    stroke: '#8a0699'
  }

  const paths = [
    'm 0 35 q 5.6 -5.6 8.4 -13.3 T 14.7 8.4 T 24.5 4.2 T 28.7 14 T 17 23 T 5 22 T 6 19 T 12 20 T 15 24 T 18 29 T 25 33 T 33 32 T 39 25 Q 42 34 43 33 Q 44 34 47 25 Q 51 28 54 28 T 58 27 T 57 24 T 52 25 T 51 31 T 59 33 Q 63 33 63 31 T 64 25 T 70 23',
    'M 74 35 Q 77 34 79 30 T 83 18 T 83 8 T 80 8 T 78 15 T 78 24 T 81 31 T 86 29 T 89 22 Q 89 26 91 29 T 95 31',
    'M 37.642 16.336 q -0.501 0.385 -0.758 1.654 t 0.482 1.931 t 2 0.414 t 1.448 -1.035 t 0.256 -1.324 t -0.67 -1.847',
    'M 88.174 15.888 q -0.469 0.427 -0.939 1.153 t 0.128 1.836 t 1.836 0.684 t 1.41 -0.897 t 0.256 -1.324 t -0.811 -1.538'
  ]

  return (
    <motion.svg
      width='110'
      height='35'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      whileHover={{
        scale: 1.08,
        transition: { duration: 0.05 },
      }}
    >
      {paths.map((d, i) => (
        <DrawnPath
          key={i}
          duration={durationDelays[i].duration}
          delay={durationDelays[i].delay}
          d={d}
          {...pathProps}
        />
      ))}
    </motion.svg>
  )
}
