import React, { useState } from 'react'

const NAV_ITEMS = [
  { label: 'Home', href: '/' },
  { label: 'Our Story', href: '/story' },
  { label: 'Visiting Sonoma', href: '/travel' },
  { label: 'Registry', href: 'https://www.honeyfund.com/site/way-way-07-11-2026' },
]

const MenuIcon: React.FC = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
  </svg>
)

const CloseIcon: React.FC = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>
)

export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#cbbddb]/95 backdrop-blur-sm shadow-sm">
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="/" className="text-xl font-serif text-gray-800">
          J & R
        </a>

        {/* Desktop nav */}
        <ul className="hidden md:flex">
          {NAV_ITEMS.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="text-gray-600 hover:text-gray-900 hover:bg-purple-600/15 px-6 py-4 rounded-lg transition-colors font-medium"
                target={item.href.startsWith('http') ? '_blank' : undefined}
                rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-gray-700"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </nav>

      {/* Mobile nav */}
      {isOpen && (
        <div className="md:hidden bg-[#cbbddb] border-t border-purple-200">
          <ul className="flex flex-col px-6 py-4 gap-4">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="block text-gray-700 hover:text-gray-900 hover:bg-purple-600/15 px-3 py-2 rounded-lg transition-colors font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  )
}
