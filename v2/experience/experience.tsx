import React from 'react'
import ReactDOM from 'react-dom/client'
import { Page } from '../components/page/Page'
import '../globals.css'

const Experience: React.FC = () => {
  return (
    <Page>
      <h1>experience</h1>
    </Page>
  )
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Experience />,
)
