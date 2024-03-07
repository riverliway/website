import React, { ReactNode } from 'react'
import { motion } from 'framer-motion'

interface SectionsProps {
  children: ReactNode
}

export const Sections: React.FC<SectionsProps> = props => {
  return (
    <motion.div
      className='w-full flex flex-col gap-20'
    >
      {props.children}
    </motion.div>
  )
}
