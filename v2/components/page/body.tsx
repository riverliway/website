import React, { ReactNode } from 'react'

interface BodyProps {
  children: ReactNode
}

/**
 * The wrapper around the body content of the page.
 * @prop children - The content of the body.
 */
export const Body: React.FC<BodyProps> = props => {
  return (
    <div className='pt-16'>
      {props.children}
    </div>
  )
}
