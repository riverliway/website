import React from 'react'

import { Page } from '../components/page/Page'
import { Sections } from '../components/page/Sections'
import { Section } from '../components/page/Section'
import { DisplayIcon } from '../components/common/DisplayIcon'

export const Experience: React.FC = () => {
  return (
    <Page>
      <Sections>
        <Section
          icon={<DisplayIcon src='./3b1b_color.svg' />}
          title='Mathematics Web Development Intern'
          titleLink='https://3blue1brown.com'
          subtitles={[['June 2021 - August 2021'], ['3Blue1Brown', 'Remote']]}
        >
          <p>
            3Blue1Brown by Grant Sanderson is a YouTube channel that produces educational videos on mathematics.
          </p>
          <p>
            I was part of an intern team responsible for producing articles, designing informative graphics, creating interactive web applets, and general upkeep of the website.
            Articles were generally about linear algebra, fourier transforms, prime numbers, etc.
          </p>
        </Section>
        <Section
          icon={<DisplayIcon src='./stevens.svg' />}
          title='Quantum Computing Teaching Assistant'
          titleLink='https://stevens.edu'
          subtitles={[['January 2021 - May 2021'], ['Stevens Institute of Technology', 'Hoboken, NJ']]}
        >
          <p>
            Lead teaching assistant for Introduction to Quantum Computing.
            Responsible for grading assignments and hosting office hours to help students understand the material.
            Taught linear algebra, spherical coordinates, and Python refreshers to the class.
          </p>
        </Section>
        <Section
          icon={<DisplayIcon src='./srjc.svg' />}
          title='Data Structures Teaching Assistant'
          titleLink='https://santarosa.edu/'
          subtitles={[['August 2018 - May 2019'], ['Santa Rosa Junior College', 'Santa Rosa, CA']]}
        >
          <p>
            Course assistant for Introduction to Programming and Data Structures.
            Responsible for grading assignments and answering questions about runtime of algorithms, pointers, and memory management.
          </p>
        </Section>
      </Sections>
    </Page>
  )
}
