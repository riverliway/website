import React, { ReactNode } from 'react'
import { motion } from 'framer-motion'

import { sectionVariant } from './sectionVariant'

interface SectionsProps {
  children: ReactNode
}

export const Sections: React.FC<SectionsProps> = props => {
  return (
    <motion.div
      className='w-full flex flex-col gap-20'
      initial='hidden'
      animate='visible'
      variants={sectionVariant}
    >
      {props.children}
    </motion.div>
  )
}
