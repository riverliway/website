import React, { ReactNode, useState } from 'react'
import { motion } from 'framer-motion'

import { NewTabIcon } from '../drawnIcons/NewTabIcon'

interface SectionProps {
  children: ReactNode
  icon?: ReactNode
  title?: ReactNode
  titleLink?: string
  subtitles?: ReactNode[][]
}

export const Section: React.FC<SectionProps> = props => {
  const [isIconHover, setIsIconHover] = useState(false)
  const [isTitleHover, setIsTitleHover] = useState(false)

  return (
    <motion.div
      className='flex gap-8'
    >
      <a
        href={props.titleLink}
        target='_blank'
        rel='noreferrer nofollow'
        className='w-96'
        onMouseEnter={() => setIsIconHover(true)}
        onMouseLeave={() => setIsIconHover(false)}
      >
        {props.icon}
      </a>
      <div className='flex flex-col gap-2'>
        <a
          className='text-3xl flex items-center gap-2'
          href={props.titleLink}
          target='_blank'
          rel='noreferrer nofollow'
          onMouseEnter={() => setIsTitleHover(true)}
          onMouseLeave={() => setIsTitleHover(false)}
        >
          <div>{props.title}</div>
          <NewTabIcon isHover={isIconHover || isTitleHover} />
        </a>
        {props.subtitles?.map((subtitleRow, j) => (
          <div key={j} className='flex gap-2 text-purple-400'>
            {subtitleRow.map((subtitle, i) => {
              if (i !== 0) {
                return (
                  <React.Fragment key={i}>
                    <div>&middot;</div>
                    <div>{subtitle}</div>
                    </React.Fragment>
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
