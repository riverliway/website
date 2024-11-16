import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom/client'
import { convertHtmlToReact } from '@hedgedoc/html-to-react'
import DOMPurify from 'dompurify'
import { marked } from 'marked'
import './globals.css'

import { Page } from './components/page/Page'
import { Sections } from './components/page/Sections'
import { Section } from './components/page/Section'
import { formatRemoteUrl } from './components/common/formatRemoteUrl'

interface Section {
  type: 'entry' | 'title'
  icon: string
  title: string
  titleLink: string
  subtitles: string[][] | undefined
  description: string // markdown
}

const App: React.FC = () => {
  const [sections, setSections] = useState<Section[] | undefined>()

  useEffect(() => {
    const fetchContent = async () => {
      const sectionName = getSection(window.location.pathname)
      const url = formatRemoteUrl(`${sectionName}.json`)

      const response = await fetch(url)

      if (!response.ok) {
        console.error('Failed to fetch content')
        console.error(response.statusText)
        return
      }

      try {
        const content = await response.json()
        setSections(content)
      } catch (error) {
        console.error('Failed to parse content')
      }
    }

    void fetchContent()
  }, [])

  return (
    <Page>
      <Sections>
        {sections === undefined ? <div>Loading...</div> : sections.map((section, i) => (
          <Section
            key={i}
            type={section.type}
            icon={section.icon}
            title={section.title}
            titleLink={section.titleLink}
            subtitles={section.subtitles}
          >
            <RenderTextBlock body={section.description} />
          </Section>
        ))}
      </Sections>
    </Page>
  )
}

const RenderTextBlock: React.FC<{ body: string }> = ({ body }) => {
  const [parsedBody, setParsedBody] = useState('')

  useEffect(() => {
    const parse = async () => {
      if (!body) return
      const mbody = await marked.parse(body, { async: true })
      // Sanitize raw HTML to prevent malicious injections
      setParsedBody(DOMPurify.sanitize(mbody))
    }

    void parse()
  }, [body])

  return (
    <>
      {convertHtmlToReact(parsedBody)}
    </>
  )
}

type SectionType = 'experience' | 'education' | 'publications' | 'packages' | 'projects' | 'awards' | 'competitions'

const getSection = (pathname: string): SectionType => {
  const sections: SectionType[] = ['experience', 'education', 'publications', 'packages', 'projects', 'awards', 'competitions']
  for (const section of sections) {
    if (pathname.includes(section)) {
      return section
    }
  }

  return 'projects'
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <App />,
)
