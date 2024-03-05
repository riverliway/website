import React, { useMemo, useState } from 'react'
import { ThemeProvider, createTheme } from '@mui/material'

import { Header } from '../header/Header'

export const Page: React.FC = () => {
  const [theme, setTheme] = useState(detectColorScheme())

  const updateTheme = (theme: 'dark' | 'light'): void => {
    console.log(theme)
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
    <ThemeProvider theme={muiTheme}>
      <main className='w-full h-screen'>
        <Header theme={theme} updateTheme={updateTheme} />
        <div className='pt-8'>
          hiasdfsadf
        </div>
      </main>
    </ThemeProvider>
  )
}

function detectColorScheme (): 'dark' | 'light' {
  let theme: 'dark' | 'light' = 'dark'

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
