import React, { ReactNode, useEffect, useState } from 'react'
import { useMediaQuery } from 'react-responsive'

import { NewTabIcon } from '../drawnIcons/NewTabIcon'
import { useTheme } from './Page'
import { formatRemoteUrl } from '../common/formatRemoteUrl'

interface SectionProps {
  children: ReactNode
  type?: 'entry' | 'title'
  icon?: string
  title?: ReactNode
  titleLink?: string
  subtitles?: ReactNode[][]
}

export const Section: React.FC<SectionProps> = props => {
  const theme = useTheme()
  const isPhone = useMediaQuery({ screen: true, maxWidth: 530 })
  const type = props.type ?? 'entry'
  const [isIconHover, setIsIconHover] = useState(false)
  const [isTitleHover, setIsTitleHover] = useState(false)
  // We have to store this in a higher state because the hovering is making the icon flicker from mounting and unmounting
  const [icon, setIcon] = useState({ width: 100, height: 100, fillRule: 'none', path: '' })

  const TitleLink: React.FC<{ children: ReactNode, className: string, setHover: (v: boolean) => void }> = ps => {
    if (props.titleLink) {
      return (
        <a
          href={props.titleLink}
          target='_blank'
          rel='noreferrer nofollow'
          className={ps.className}
          onMouseEnter={() => ps.setHover(true)}
          onMouseLeave={() => ps.setHover(false)}
        >
          {ps.children}
        </a>
      )
    }

    return <div className={ps.className}>{ps.children}</div>
  }

  useEffect(() => {
    const fetchIcon = async () => {
      if (!props.icon || props.icon.endsWith('.svg')) {
        return
      }

      const response = await fetch(formatRemoteUrl(`${props.icon}.icon.json`))

      if (!response.ok) {
        console.error('Failed to fetch icon')
        console.error(response.statusText)

        setIcon({ width: 0, height: 0, fillRule: 'none', path: 'M 0 0 V 100 H 100 V 0 Z' })
        return
      }

      try {
        const icon = await response.json()
        setIcon(icon)
      } catch (error) {
        console.error('Failed to parse icon')
        setIcon({ width: 0, height: 0, fillRule: 'none', path: 'M 0 0 V 100 H 100 V 0 Z' })
      }
    }

    void fetchIcon()
  }, [props.icon])

  return (
    <div className={`flex ${isPhone ? 'flex-col items-center' : 'flex-row'} gap-8`}>
      <TitleLink className={`w-16 shrink-0 ${theme === 'dark' ? 'text-purple-400' : 'text-purple-800'}`} setHover={setIsIconHover}>
        <DisplayIcon src={props.icon} icon={icon} />
      </TitleLink>
      <div className={`flex flex-col gap-2 ${isPhone ? 'items-center' : ''}`}>
        {type === 'entry' && (
          <TitleLink className={`${isPhone ? 'text-2xl' : 'text-3xl'} flex items-center gap-2`} setHover={setIsTitleHover}>
            {isPhone && <div style={{ width: 50 }} />}
            <div className={isPhone ? 'text-center': ''}>{props.title}</div>
            <NewTabIcon isHover={isIconHover || isTitleHover} />
          </TitleLink>
        )}
        {type === 'title' && <div className='text-4xl'>{props.title}</div>}
        {props.subtitles?.map((subtitleRow, j) => (
          <div key={j} className={`flex flex-wrap max-[530px]:justify-center gap-x-2 ${theme === 'dark' ? 'text-purple-400' : 'text-purple-600'}`}>
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
        <div className={`${isPhone ? 'text-center' : ''} flex flex-col gap-2`}>
          {props.children}
        </div>
      </div>
    </div>
  )
}

interface DisplayIconProps {
  src?: string
  icon: {
    width: number
    height: number
    fillRule: string
    path: string
  }
}

export const DisplayIcon: React.FC<DisplayIconProps> = props => {
  const theme = useTheme()

  if (!props.src) {
    return <></>
  }

  const color = theme === 'dark' ? '#c084fc' : '#9233ea'

  return (
    <div className='w-full'>
      {props.src.endsWith('.svg')
        ? <img src={formatRemoteUrl(props.src)} />
        : (
            <svg className='w-full' viewBox={`0 0 ${props.icon.width} ${props.icon.height}`}>
              <path
                d={props.icon.path}
                fillRule={props.icon.fillRule === 'evenodd' ? 'evenodd' : undefined}
                fill={props.icon.fillRule === 'none' ? 'none' : color}
                stroke={props.icon.fillRule === 'none' ? color : undefined}
              />
            </svg>
          )
      }
    </div>
  )
}
