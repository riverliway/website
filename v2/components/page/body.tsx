import React, { ReactNode, useState } from 'react'
import { chunk } from 'lodash'
import { FanceUnderline } from '../signature/FancyUnderline'
import { useMediaQuery } from 'react-responsive'
import { useTheme } from './Page'

interface BodyProps {
  children: ReactNode
}

/**
 * The wrapper around the body content of the page.
 * @prop children - The content of the body.
 */
export const Body: React.FC<BodyProps> = props => {
  const theme = useTheme()
  const isPhone = useMediaQuery({ maxWidth: 530 })
  const isTablet = useMediaQuery({ maxWidth: 900 })

  const tabSize = isPhone ? 1 : (isTablet ? 4 : 8)

  const tabs = chunk([
    { href: '/?self=1', text: 'Projects' },
    { href: '/publications?self=1', text: 'Publications' },
    { href: '/packages?self=1', text: 'Packages' },
    { href: '/experience?self=1', text: 'Experience' },
    { href: '/education?self=1', text: 'Education' },
    { href: '/awards?self=1', text: 'Awards' },
    { href: '/competitions?self=1', text: 'Competitions' }
  ], tabSize)

  return (
    <div className={`pt-20 pb-96 w-full ${theme === 'dark' ? 'text-purple-200' : 'text-purple-800'}`}>
      <div className={`flex flex-col items-center max-w-screen-lg m-auto ${isPhone ? 'px-2' : 'px-8'} gap-24`}>
        <div className='w-11/12 flex flex-col gap-1 text-center items-center text-xl'>
          {tabs.map((tabRow, i) => (
            <div key={i} className='w-full flex flex-row justify-around'>
              {tabRow.map((tab, j) => (
                <Nava key={j} href={tab.href}>{tab.text}</Nava>
              ))}
            </div>
          ))}
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
  const theme = useTheme()
  const alreadyAt = window.location.pathname.replaceAll('/', '').trim() === props.href.split('?')[0].replaceAll('/', '').trim()
  const [isHover, setIsHover] = useState(alreadyAt)

  const textColor = theme === 'dark'
    ? (alreadyAt ? 'text-purple-400' : 'text-purple-200')
    : (alreadyAt ? 'text-purple-400' : 'text-purple-800')

  const className = `w-fit flex flex-col items-center ${textColor}`

  if (alreadyAt) {
    return (
      <div className={className}>
        <div>{props.children}</div>
        <FanceUnderline isHover={false} />
      </div>
    )
  }

  return (
    <a
      href={props.href}
      className={className}
      onMouseEnter={() => setIsHover(true)}
      onMouseLeave={() => setIsHover(false)}
    >
      <div>{props.children}</div>
      <FanceUnderline isHover={isHover} />
    </a>
  )
}
