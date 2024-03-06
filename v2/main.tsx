import React from 'react'
import ReactDOM from 'react-dom/client'

import { Page } from './components/page/Page'
import { Sections } from './components/page/Sections'
import { Section } from './components/page/Section'
import { DisplayIcon } from './components/common/DisplayIcon'

import './globals.css'

const Main: React.FC = () => {
  return (
    <Page>
      <Sections>
        <Section
          icon={<DisplayIcon src='./qc.svg' />}
          title='Quantum Computing Survival Guide'
          titleLink='https://riverway.li/qcsg'
          subtitles={[['April 2020 - Present'], ['P5.js', 'LaTeX']]}
        >
          <p>
            The quantum computing survival guide is a freely available, interactive online textbook which serves an introduction to quantum computing.
            I found a lot of available resources for quantum computing are either too simple or too complex.
            Many articles written for the general public explain qubits and superposition, but fail to explain how
            those concepts extend to useful computation for solving actual problems.
            Papers in academic journals assume the reader is already an expert in quantum computation and use advanced ideas without explaining them.
            I felt there weren't enough resources that bridged that gap for intermediate level readers.
            The QCSG is still a work in development, but the first several chapters provide a fresh perspective on
            quantum computing by leveraging interactive applets and 3D graphics.
          </p>
          <p>
            The textbook was written in Typora using LaTeX and the interactive applets were made with the p5.js library.
          </p>
        </Section>
        <Section>
          section2
        </Section>
        <Section>
          section3
        </Section>
        <Section>
          section4
        </Section>
      </Sections>
    </Page>
  )
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <Main />,
)
