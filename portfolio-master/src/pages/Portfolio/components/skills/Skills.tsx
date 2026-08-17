import { Experience, SkillBars, TimeLine } from './components';
import { SkillsSection, SkillsHeader } from './styled-components';
import 'animate.css';
import { Grid } from '@mui/material';

export default function Skills() {
  return (
    <>
      <SkillsHeader>
        <div className='animate__animated animate__backInDown'>
          <h1> my<span>Ex</span>perience </h1>
          <br />
          <p>
            Systems Engineer and web developer with 4 years building front-end and
            back-end software with React, Node.js and Genexus. I have worked on
            international projects, coordinated remote teams and led multinational
            meetings, and I like turning slow manual processes into automated ones.
          </p>
          <p>
            I am currently studying a Master&apos;s in Biomedical Engineering, which pairs
            with the rehabilitation games I built during my internship at Kawatek. Along
            the way I have also picked up Agile and Scrum practices, design work with the
            Adobe suite, and architectural drafting with AutoCAD.
          </p>
        </div>
      </SkillsHeader>

      <SkillsSection>
        <Grid container direction="row" justifyContent="space-around" alignItems="flex-start">
          <Grid item xs={11.5} md={11} lg={11}>
            <div className='animate__animated animate__fadeIn'>
              <Experience />
            </div>
          </Grid>
          <Grid item xs={11.5} md={5.5} lg={5.5}>
            <SkillBars />
          </Grid>
          <Grid item xs={11.5} md={5.5} lg={5.5}>
            <div className='animate__animated animate__backInUp'>
              <TimeLine />
            </div>
          </Grid>
        </Grid>
      </SkillsSection>
    </>
  )
}
