import { useState, useEffect } from "react"
import headerImg from "./assets/img/escritorio.webp"
import 'animate.css'
import TrackVisibility from 'react-on-screen';
import { AboutMeSection, AboutMeDivJustifyCenter, AboutMeH1, AboutMeP, AboutMeImg, AboutMeSpanTxtRotate, AboutMeButtonsDiv } from "./styled-components/aboutMe.styled";
import { AboutMeBG, AboutMeSocialButtons } from "./componets";

const TYPING_SPEED = 120
const DELETING_SPEED = 60
const PAUSE_AFTER_WORD = 2000
// Module scope, so the typing effect does not get a new array identity each render.
const TO_ROTATE = ["Full Stack Developer", "Team Lead", "Systems Engineer"]

export const AboutMe = () => {
  const [loopNum, setLoopNum] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [text, setText] = useState('')
  const [delta, setDelta] = useState(TYPING_SPEED)

  useEffect(() => {
    const fullText = TO_ROTATE[loopNum % TO_ROTATE.length]

    const ticker = setTimeout(() => {
      if (!isDeleting) {
        const next = fullText.substring(0, text.length + 1)
        setText(next)
        // Hold the finished word on screen before erasing it.
        setDelta(next === fullText ? PAUSE_AFTER_WORD : TYPING_SPEED)
        if (next === fullText) setIsDeleting(true)
      } else {
        const next = fullText.substring(0, text.length - 1)
        setText(next)
        setDelta(DELETING_SPEED)
        if (next === '') {
          setIsDeleting(false)
          setLoopNum((prev) => prev + 1)
          setDelta(TYPING_SPEED)
        }
      }
    }, delta)

    return () => clearTimeout(ticker)
  }, [text, isDeleting, loopNum, delta])

  const start = '<'
  const end = '/>'

  return (
    <AboutMeSection id="home">
      <AboutMeBG />
      <AboutMeDivJustifyCenter>
        <div>
          <TrackVisibility>
            {() =>
              <div className={"animate__animated animate__zoomIn"}>
                <AboutMeH1>{`Hi! I'm Oreana, `}</AboutMeH1>
                <AboutMeH1>
                  <AboutMeSpanTxtRotate aria-live="polite">{text}</AboutMeSpanTxtRotate>
                </AboutMeH1>
                <AboutMeP>
                  Systems Engineer and web developer working across front end and back end
                  with React, Node.js and Genexus. 4 years building software for
                  international projects, coordinating remote teams and turning manual
                  workflows into automated ones.
                </AboutMeP>
                <AboutMeP>
                  Currently studying a Master&apos;s in Biomedical Engineering.
                </AboutMeP>
                <AboutMeP>
                  Available remotely &middot; Spanish (native), English (C2), French (A2)
                </AboutMeP>
                <a href="/OreanaAndradeCV.pdf" download="OreanaAndradeCV.pdf" className='resume'>
                  {start}<span>resume</span>{end}
                </a>

                <AboutMeButtonsDiv>
                  <AboutMeSocialButtons />
                </AboutMeButtonsDiv>
              </div>}
          </TrackVisibility>
        </div>
        <div>
          <TrackVisibility>
            {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                <AboutMeImg src={headerImg} alt="" aria-hidden="true" />
              </div>}
          </TrackVisibility>
        </div>
      </AboutMeDivJustifyCenter>
    </AboutMeSection>
  )
}

export default AboutMe
