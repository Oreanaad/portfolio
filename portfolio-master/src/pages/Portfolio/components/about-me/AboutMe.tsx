import { useState, useEffect } from "react"
import headerImg from "./assets/img/escritorio.webp"
import 'animate.css'
import TrackVisibility from 'react-on-screen';
import { AboutMeSection, AboutMeDivJustifyCenter, AboutMeH1, AboutMeP, AboutMeImg, AboutMeSpanTxtRotate, AboutMeButtonsDiv } from "./styled-components/aboutMe.styled";
import { AboutMeBG, AboutMeSocialButtons } from "./componets";
import { useI18n } from "@/i18n";

const TYPING_SPEED = 120
const DELETING_SPEED = 60
const PAUSE_AFTER_WORD = 2000

export const AboutMe = () => {
  const { t, lang } = useI18n()
  const toRotate = t.about.roles
  const [loopNum, setLoopNum] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [text, setText] = useState('')
  const [delta, setDelta] = useState(TYPING_SPEED)

  // Restart the typing effect when the language changes, so a half-typed
  // English role is not left on screen mid-word.
  useEffect(() => {
    setText('')
    setIsDeleting(false)
    setLoopNum(0)
    setDelta(TYPING_SPEED)
  }, [lang])

  useEffect(() => {
    const fullText = toRotate[loopNum % toRotate.length]

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
  }, [text, isDeleting, loopNum, delta, toRotate])

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
                <AboutMeH1>{t.about.greeting}</AboutMeH1>
                <AboutMeH1>
                  <AboutMeSpanTxtRotate aria-live="polite">{text}</AboutMeSpanTxtRotate>
                </AboutMeH1>
                <AboutMeP>{t.about.intro}</AboutMeP>
                <AboutMeP>{t.about.masters}</AboutMeP>
                <AboutMeP>{t.about.availability}</AboutMeP>
                <a href="/OreanaAndradeCV.pdf" download="OreanaAndradeCV.pdf" className='resume'>
                  {start}<span>{t.about.resume}</span>{end}
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
