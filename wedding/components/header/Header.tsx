import React from 'react'

const NAV_ITEMS = [
  { label: 'Home', href: '/' },
  { label: 'Our Story', href: '/story' },
  { label: 'Travel', href: '/travel' },
  { label: 'RSVP', href: '/rsvp' },
]

export const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-[#cbbddb]/95 backdrop-blur-sm shadow-sm">
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="/home" className="text-xl font-serif text-gray-800">
          J & R
        </a>
        <ul className="flex gap-8">
          {NAV_ITEMS.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="text-gray-600 hover:text-gray-900 transition-colors font-medium"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  )
}
