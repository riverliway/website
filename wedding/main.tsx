import React from 'react'
import ReactDOM from 'react-dom/client'
import './globals.css'

import { HomePage } from './components/page/Home'
import { StoryPage } from './components/page/Story'
import { TravelPage } from './components/page/Travel'

const App: React.FC = () => {
  const page = getSection(window.location.pathname)

  switch (page) {
    case 'story': return <StoryPage />
    case 'travel': return <TravelPage />
    case 'home':
    default: return <HomePage />
  }
}

const PAGE_TYPES = ['home', 'story', 'travel'] as const
type PageType = typeof PAGE_TYPES[number]

const getSection = (pathname: string): PageType => {
  for (const section of PAGE_TYPES) {
    if (pathname.includes(section)) {
      return section
    }
  }

  return 'home'
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <App />,
)
//  