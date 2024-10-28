import React from 'react'

import { Page } from '../components/page/Page'
import { Sections } from '../components/page/Sections'
import { Section } from '../components/page/Section'
import { DisplayIcon } from '../components/common/DisplayIcon'

export const Projects: React.FC = () => {
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
            I felt there weren&apos;t enough resources that bridged that gap for intermediate level readers.
            The QCSG is still a work in development, but the first several chapters provide a fresh perspective on
            quantum computing by leveraging interactive applets and 3D graphics.
          </p>
          <p>
            The textbook was written in Typora using LaTeX and the interactive applets were made with the p5.js library.
          </p>
        </Section>
        <Section
          icon={<DisplayIcon src='./qc.svg' />}
          title='pAInter'
          titleLink='https://www.youtube.com/channel/UCSrJD5Ic4ClxCpg68tVfvOg'
          subtitles={[['June 2020 - December 2020'], ['Python', 'Tensorflow', 'OpenCV', 'EbSynth']]}
        >
          <p>
            I find style transfer networks to be a fascinating field in machine learning.
            The goal of a style transfer network is to learn an artist&apos;s style from a single image and
            then &quot;paint&quot; over other images in that style.
            However, painting over video is more tricky because the small changes from one frame
            to the next can drastically change the output brush strokes.
            This produces a video with lots of flickering, and we&apos;d like a smooth video.
            We can use an optical flow library which takes a key frame and morphs it to match the nearby frames of a video.
            Combined with pre and postprocessing techniques to improve the quality of the output,
            this model produces beautiful painted videos which can be viewed on
            my <a target="_blank" href="https://www.youtube.com/channel/UCSrJD5Ic4ClxCpg68tVfvOg">YouTube</a> channel. 
          </p>
          <p>
            The style transfer network uses the Tensorflow library.
            Optical flow was done with EbSynth.
            OpenCV was used for pre and postprocessing.
          </p>
        </Section>
        <Section
          icon={<DisplayIcon src='./qc.svg' />}
          title='Project Kikai'
          titleLink='https://riverway.li/kikai'
          subtitles={[['August 2021 - December 2021'], ['Python', 'OpenGPT']]}
        >
          <p>
            The main project I worked on at the University of Bern is in the field of Natural Language Generation for producing an artificial YouTuber.
            I worked on this project before ChatGPT took the world by store and generative AI became commonplace.
            I used GPT2 to generate scripts of YouTube videos after tuning them on hundreds of hours of podcasts.
            Then I would have a voice synthesizer create an audio version of the script.
            The next step was to perform emotion analysis (an extension of sentiment analysis) to animate a figure for the video component.
            The text generated from GPT2 was never quite human enough, but this project would be much easier to do today with the generative AI tools available.
          </p>
          <p>
            OpenGPT is used for training and evaluating the text generation models.
          </p>
        </Section>
        <Section
          icon={<DisplayIcon src='./qc.svg' />}
          title='QILCOM Research Project'
          titleLink='https://riverway.li/qilcom/Qilcom_Model.pdf'
          subtitles={[['January 2020 - May 2020'], ['Java']]}
        >
          <p>
            QILCOM is the Quantum Ideas Lab Competition hosted by Stevens Institute of Technology.
            It is a research competition where teams of undergraduates are paired up with a PhD student
            to perform experiments and conduct research in the field of quantum computing.
            My team attempted to find a state estimation algorithm which could approximate the resulting
            state of certain types of quantum circuits more efficiently.
            Simulating general quantum circuits is extremely expensive in time and space complexity,
            so our algorithm could dramatically reduce that time for specific types of quantum circuits by sacrificing a bit of accuracy.
            Although it fails to efficiently simulate circuits like Grover&apos;s search or Shor&apos;s factoring algorithm,
            it can offer improvement against Google&apos;s Random Circuit Sampling problem.
          </p>
          <p>
            This project was developed in Java without any additional libraries.
          </p>
        </Section>
      </Sections>
    </Page>
  )
}
