import React, { ReactNode } from 'react'
import { motion } from 'framer-motion'

interface ButtonIconProps {
  children: ReactNode
  href?: string
  newTab?: boolean
}

export const ButtonIcon: React.FC<ButtonIconProps> = props => {
  return (
    <motion.a
      href={props.href}
      target={props.newTab ? '_blank' : ''}
      rel={props.newTab ? 'noreferrer nofollow' : ''}
      whileHover={{
        scale: 1.08,
        transition: { duration: 0.05 },
      }}
    >
      {props.children}
    </motion.a>
  )
}
