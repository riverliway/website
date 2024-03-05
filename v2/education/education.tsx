import React from 'react'
import ReactDOM from 'react-dom/client'
import { Page } from '../components/page/Page'
import '../globals.css'

const Education: React.FC = () => {
  return (
    <Page>
      <h1>education</h1>
    </Page>
  )
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Education />,
)
