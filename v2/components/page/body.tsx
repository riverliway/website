import React, { ReactNode, useState } from 'react'
import { useMediaQuery } from '@mui/material'
import { FanceUnderline } from '../signature/FancyUnderline'

interface BodyProps {
  children: ReactNode
}

/**
 * The wrapper around the body content of the page.
 * @prop children - The content of the body.
 */
export const Body: React.FC<BodyProps> = props => {
  const isPhone = useMediaQuery('(max-width: 530px)')

  return (
    <div className='pt-20 pb-96 w-full text-purple-200'>
      <div className='flex flex-col items-center max-w-screen-lg m-auto px-8 gap-24'>
        <div className={`w-9/12 flex ${isPhone ? 'flex-col gap-8 text-center' : 'flex-row justify-around'} items-center text-xl`}>
          <Nava href='/?self=1'>Projects</Nava>
          <Nava href='/experience?self=1'>Experience</Nava>
          <Nava href='/education?self=1'>Education</Nava>
        </div>
        {props.children}
      </div>
    </div>
  )
}

interface NavaProps {
  href: string
  children: ReactNode
}

const Nava: React.FC<NavaProps> = props => {
  const [isHover, setIsHover] = useState(false)

  return (
    <a href={props.href} className='w-fit flex flex-col items-center' onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)}>
      <div>{props.children}</div>
      <FanceUnderline isHover={isHover} />
    </a>
  )
}
