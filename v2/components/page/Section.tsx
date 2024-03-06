import React, { ReactNode } from 'react'
import { motion } from 'framer-motion'

import { sectionVariant } from './sectionVariant'

interface SectionProps {
  children: ReactNode
  icon?: ReactNode
  title?: ReactNode
  titleLink?: string
  subtitles?: ReactNode[][]
}

export const Section: React.FC<SectionProps> = props => {
  return (
    <motion.div
      className='flex gap-8'
      variants={sectionVariant}
    >
      <div className='w-96'>
        {props.icon}
      </div>
      <div className='flex flex-col gap-2'>
        <a className='text-xl' href={props.titleLink}>
          {props.title}
        </a>
        {props.subtitles?.map((subtitleRow, j) => (
          <div key={j} className='flex gap-2 text-purple-400'>
            {subtitleRow.map((subtitle, i) => {
              if (i !== 0) {
                return (
                  <>
                    <div key={-i}>&middot;</div>
                    <div key={i}>{subtitle}</div>
                  </>
                )
              }

              return <div key={i}>{subtitle}</div>
            })}
          </div>
        ))}
        {props.children}
      </div>
    </motion.div>
  )
}
