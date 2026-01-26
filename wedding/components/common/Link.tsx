import React from 'react'

interface LinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  openNewTab?: boolean
}

export const Link: React.FC<LinkProps> = ({ className = '', openNewTab = true, ...props }) => (
  <a
    className={`text-purple-700 hover:text-purple-900 transition-colors ${className}`}
    {...(openNewTab && { target: '_blank', rel: 'noopener noreferrer' })}
    {...props}
  />
)
