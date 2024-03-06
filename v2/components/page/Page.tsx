import React, { ReactNode, createContext, useContext, useMemo, useState } from 'react'
import { ThemeProvider, createTheme } from '@mui/material'

import { Header } from '../header/Header'
import { Body } from './Body'

interface PageProps {
  children: ReactNode
}

type Theme = 'light' | 'dark'

const ThemeContext = createContext<Theme>(undefined as unknown as Theme)

export const useTheme = (): Theme => {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error('Must be used within provider')
  }

  return context
}

/**
 * The wrapper component for the entire application.
 * This should be wrapped around each page.
 * @prop children - The content of the page.
 */
export const Page: React.FC<PageProps> = props => {
  const [theme, setTheme] = useState(detectColorScheme())

  const updateTheme = (theme: Theme): void => {
    document.documentElement.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
    setTheme(theme)
  }

  const muiTheme = useMemo(() =>
      createTheme({
        palette: {
          mode: theme,
        },
      }
    ), [theme])

  return (
    <ThemeContext.Provider value={theme}>
      <ThemeProvider theme={muiTheme}>
        <main className='w-full h-screen'>
          <Header theme={theme} updateTheme={updateTheme} />
          <Body>
            {props.children}
          </Body>
        </main>
      </ThemeProvider>
    </ThemeContext.Provider>
  )
}

function detectColorScheme (): Theme {
  let theme: Theme = 'dark'

  const localStorageTheme = localStorage.getItem('theme')
  // local storage is used to override OS theme settings
  if (localStorageTheme === 'dark') {
    theme = 'dark'
  } else if (localStorageTheme === 'light') {
    theme = 'light'
  } else if (!window.matchMedia) {
    // matchMedia method not supported
    return theme
  } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    // OS theme setting detected as dark
    theme = 'dark'
  } else if (window.matchMedia('(prefers-color-scheme: light)').matches) {
    // OS theme setting detected as light
    theme = 'light'
  }

  if (theme === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark')
  } else {
    document.documentElement.setAttribute('data-theme', 'light')
  }

  return theme
}
