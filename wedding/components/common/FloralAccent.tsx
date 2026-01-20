import React from 'react'

interface FloralAccentProps {
  className?: string
}

export const FloralAccent: React.FC<FloralAccentProps> = ({ className = '' }) => (
  <svg
    viewBox="-5 -5 110 110"
    className={className}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Outer petals */}
    <ellipse cx="50" cy="20" rx="12" ry="22" fill="#d8b4e2" />
    <ellipse cx="50" cy="80" rx="12" ry="22" fill="#d8b4e2" />
    <ellipse cx="20" cy="50" rx="22" ry="12" fill="#d8b4e2" />
    <ellipse cx="80" cy="50" rx="22" ry="12" fill="#d8b4e2" />
    
    {/* Diagonal petals */}
    <ellipse cx="26" cy="26" rx="10" ry="20" fill="#c9a4d9" transform="rotate(-45 26 26)" />
    <ellipse cx="74" cy="26" rx="10" ry="20" fill="#c9a4d9" transform="rotate(45 74 26)" />
    <ellipse cx="26" cy="74" rx="10" ry="20" fill="#c9a4d9" transform="rotate(45 26 74)" />
    <ellipse cx="74" cy="74" rx="10" ry="20" fill="#c9a4d9" transform="rotate(-45 74 74)" />
    
    {/* Inner petals */}
    <ellipse cx="50" cy="30" rx="9" ry="16" fill="#e4c8ed" />
    <ellipse cx="50" cy="70" rx="9" ry="16" fill="#e4c8ed" />
    <ellipse cx="30" cy="50" rx="16" ry="9" fill="#e4c8ed" />
    <ellipse cx="70" cy="50" rx="16" ry="9" fill="#e4c8ed" />
    
    {/* Inner diagonal petals */}
    <ellipse cx="35" cy="35" rx="7" ry="14" fill="#dfc4e8" transform="rotate(-45 35 35)" />
    <ellipse cx="65" cy="35" rx="7" ry="14" fill="#dfc4e8" transform="rotate(45 65 35)" />
    <ellipse cx="35" cy="65" rx="7" ry="14" fill="#dfc4e8" transform="rotate(45 35 65)" />
    <ellipse cx="65" cy="65" rx="7" ry="14" fill="#dfc4e8" transform="rotate(-45 65 65)" />
    
    {/* Center */}
    <circle cx="50" cy="50" r="12" fill="#b794c7" />
    <circle cx="50" cy="50" r="7" fill="#9b7aa8" />
    
    {/* Center details */}
    <circle cx="48" cy="48" r="2" fill="#8a6997" />
    <circle cx="53" cy="47" r="1.5" fill="#8a6997" />
    <circle cx="51" cy="53" r="1.5" fill="#8a6997" />
  </svg>
)
