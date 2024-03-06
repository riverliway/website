import React from 'react'
import { motion } from 'framer-motion'
import { OverridableComponent } from '@mui/material/OverridableComponent'
import { SvgIconTypeMap } from '@mui/material'

interface ButtonIconProps {
  children: OverridableComponent<SvgIconTypeMap<{}, "svg">>
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
      <props.children
        fontSize='large'
        sx={[{
          color: '#8a0699'
        }, {
          '&:hover': {
            color: '#650470',
          }
        }]}
      />
    </motion.a>
  )
}
