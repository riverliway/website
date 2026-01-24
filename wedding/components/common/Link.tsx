import React from 'react'

type LinkProps = React.AnchorHTMLAttributes<HTMLAnchorElement>

export const Link: React.FC<LinkProps> = ({ className = '', ...props }) => (
  <a
    className={`text-purple-700 hover:text-purple-900 transition-colors ${className}`}
    {...props}
  />
)
