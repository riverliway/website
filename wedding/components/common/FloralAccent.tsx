import React from 'react'

type ColorVariant = 'purple' | 'pink' | 'lavender' | 'mauve' | 'sky' | 'teal'

interface FloralAccentProps {
  className?: string
  variant?: ColorVariant
}

const COLOR_SCHEMES: Record<ColorVariant, { outer: string; diagonal: string; inner: string; innerDiag: string; centerOuter: string; centerInner: string; centerDots: string }> = {
  purple: {
    outer: '#d8b4e2',
    diagonal: '#c9a4d9',
    inner: '#e4c8ed',
    innerDiag: '#dfc4e8',
    centerOuter: '#b794c7',
    centerInner: '#9b7aa8',
    centerDots: '#8a6997',
  },
  pink: {
    outer: '#f0b8c8',
    diagonal: '#e8a4b8',
    inner: '#f5d0dc',
    innerDiag: '#f2c4d2',
    centerOuter: '#d98aa4',
    centerInner: '#c77088',
    centerDots: '#b55c76',
  },
  lavender: {
    outer: '#b8c4e8',
    diagonal: '#a4b4dc',
    inner: '#d0d8f0',
    innerDiag: '#c4cce8',
    centerOuter: '#8a9cc7',
    centerInner: '#7080a8',
    centerDots: '#5c6a97',
  },
  mauve: {
    outer: '#d4b8c4',
    diagonal: '#c8a8b8',
    inner: '#e4d0d8',
    innerDiag: '#dcc4cc',
    centerOuter: '#b8909c',
    centerInner: '#a07888',
    centerDots: '#886474',
  },
  sky: {
    outer: '#a8d4e8',
    diagonal: '#94c8e0',
    inner: '#c8e4f0',
    innerDiag: '#b8dcea',
    centerOuter: '#70b0cc',
    centerInner: '#5898b8',
    centerDots: '#4080a0',
  },
  teal: {
    outer: '#a8c4e0',
    diagonal: '#94b4d4',
    inner: '#c8d8ec',
    innerDiag: '#b8cce4',
    centerOuter: '#6090b8',
    centerInner: '#4878a0',
    centerDots: '#305080',
  },
}

export const FloralAccent: React.FC<FloralAccentProps> = ({ className = '', variant = 'purple' }) => {
  const colors = COLOR_SCHEMES[variant]
  
  return (
    <svg
      viewBox="-5 -5 110 110"
      className={className}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Outer petals */}
      <ellipse cx="50" cy="20" rx="12" ry="22" fill={colors.outer} />
      <ellipse cx="50" cy="80" rx="12" ry="22" fill={colors.outer} />
      <ellipse cx="20" cy="50" rx="22" ry="12" fill={colors.outer} />
      <ellipse cx="80" cy="50" rx="22" ry="12" fill={colors.outer} />
      
      {/* Diagonal petals */}
      <ellipse cx="26" cy="26" rx="10" ry="20" fill={colors.diagonal} transform="rotate(-45 26 26)" />
      <ellipse cx="74" cy="26" rx="10" ry="20" fill={colors.diagonal} transform="rotate(45 74 26)" />
      <ellipse cx="26" cy="74" rx="10" ry="20" fill={colors.diagonal} transform="rotate(45 26 74)" />
      <ellipse cx="74" cy="74" rx="10" ry="20" fill={colors.diagonal} transform="rotate(-45 74 74)" />
      
      {/* Inner petals */}
      <ellipse cx="50" cy="30" rx="9" ry="16" fill={colors.inner} />
      <ellipse cx="50" cy="70" rx="9" ry="16" fill={colors.inner} />
      <ellipse cx="30" cy="50" rx="16" ry="9" fill={colors.inner} />
      <ellipse cx="70" cy="50" rx="16" ry="9" fill={colors.inner} />
      
      {/* Inner diagonal petals */}
      <ellipse cx="35" cy="35" rx="7" ry="14" fill={colors.innerDiag} transform="rotate(-45 35 35)" />
      <ellipse cx="65" cy="35" rx="7" ry="14" fill={colors.innerDiag} transform="rotate(45 65 35)" />
      <ellipse cx="35" cy="65" rx="7" ry="14" fill={colors.innerDiag} transform="rotate(45 35 65)" />
      <ellipse cx="65" cy="65" rx="7" ry="14" fill={colors.innerDiag} transform="rotate(-45 65 65)" />
      
      {/* Center */}
      <circle cx="50" cy="50" r="12" fill={colors.centerOuter} />
      <circle cx="50" cy="50" r="7" fill={colors.centerInner} />
      
      {/* Center details */}
      <circle cx="48" cy="48" r="2" fill={colors.centerDots} />
      <circle cx="53" cy="47" r="1.5" fill={colors.centerDots} />
      <circle cx="51" cy="53" r="1.5" fill={colors.centerDots} />
    </svg>
  )
}
