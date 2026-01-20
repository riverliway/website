import React from 'react'
import { FloralAccent } from './FloralAccent'
import { ButterflyAccent } from './ButterflyAccent'

interface PersonFloralsProps {
  name: string
}

export const PersonFlorals: React.FC<PersonFloralsProps> = ({ name }) => {
  switch (name) {
    case 'James':
      return (
        <>
          <FloralAccent className="absolute -top-6 left-[10%] w-20 h-20 z-10 rotate-12" variant="purple" />
          <FloralAccent className="absolute bottom-[15%] -right-4 w-16 h-16 z-10 -rotate-45" variant="lavender" />
        </>
      )
    case 'River':
      return (
        <>
          <FloralAccent className="absolute -bottom-6 -left-8 w-[4.5rem] h-[4.5rem] z-10 -rotate-12" variant="pink" />
          <ButterflyAccent className="absolute top-[30%] -right-6 w-14 h-12 z-10 rotate-[25deg]" />
        </>
      )
    case 'Casey':
      return (
        <>
          <FloralAccent className="absolute -top-8 -right-4 w-16 h-16 z-10 -rotate-[20deg]" variant="sky" />
          <FloralAccent className="absolute -bottom-4 -left-6 w-[5.5rem] h-[5.5rem] z-10 rotate-[60deg]" variant="teal" />
        </>
      )
    case 'Nick':
      return (
        <>
          <FloralAccent className="absolute -top-6 -left-8 w-[4.5rem] h-[4.5rem] z-10 rotate-[45deg]" variant="teal" />
          <FloralAccent className="absolute -bottom-6 -right-6 w-24 h-24 z-10 -rotate-[30deg]" variant="sky" />
        </>
      )
    default:
      return null
  }
}
