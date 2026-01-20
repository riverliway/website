import React from 'react'

interface ButterflyAccentProps {
  className?: string
}

export const ButterflyAccent: React.FC<ButterflyAccentProps> = ({ className = '' }) => (
  <svg
    viewBox="0 0 100 80"
    className={className}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Left wing - outer */}
    <ellipse cx="25" cy="35" rx="22" ry="28" fill="#d8b4e2" transform="rotate(-15 25 35)" />
    {/* Left wing - inner pattern */}
    <ellipse cx="22" cy="32" rx="14" ry="18" fill="#c9a4d9" transform="rotate(-15 22 32)" />
    <ellipse cx="20" cy="28" rx="8" ry="10" fill="#e4c8ed" transform="rotate(-15 20 28)" />
    <circle cx="18" cy="24" r="4" fill="#b794c7" />
    
    {/* Right wing - outer */}
    <ellipse cx="75" cy="35" rx="22" ry="28" fill="#d8b4e2" transform="rotate(15 75 35)" />
    {/* Right wing - inner pattern */}
    <ellipse cx="78" cy="32" rx="14" ry="18" fill="#c9a4d9" transform="rotate(15 78 32)" />
    <ellipse cx="80" cy="28" rx="8" ry="10" fill="#e4c8ed" transform="rotate(15 80 28)" />
    <circle cx="82" cy="24" r="4" fill="#b794c7" />
    
    {/* Lower left wing */}
    <ellipse cx="30" cy="55" rx="16" ry="20" fill="#dfc4e8" transform="rotate(-30 30 55)" />
    <ellipse cx="28" cy="52" rx="10" ry="12" fill="#c9a4d9" transform="rotate(-30 28 52)" />
    
    {/* Lower right wing */}
    <ellipse cx="70" cy="55" rx="16" ry="20" fill="#dfc4e8" transform="rotate(30 70 55)" />
    <ellipse cx="72" cy="52" rx="10" ry="12" fill="#c9a4d9" transform="rotate(30 72 52)" />
    
    {/* Body */}
    <ellipse cx="50" cy="40" rx="4" ry="22" fill="#9b7aa8" />
    <ellipse cx="50" cy="38" rx="3" ry="18" fill="#8a6997" />
    
    {/* Head */}
    <circle cx="50" cy="14" r="5" fill="#9b7aa8" />
    
    {/* Antennae */}
    <path d="M48 10 Q42 2 38 4" stroke="#8a6997" strokeWidth="1.5" fill="none" />
    <path d="M52 10 Q58 2 62 4" stroke="#8a6997" strokeWidth="1.5" fill="none" />
    <circle cx="38" cy="4" r="2" fill="#b794c7" />
    <circle cx="62" cy="4" r="2" fill="#b794c7" />
  </svg>
)
