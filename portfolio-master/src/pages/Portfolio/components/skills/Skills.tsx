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
            Systems Engineer and web developer with over 2 years building front-end and
            back-end software with React, Node.js and Genexus. I have worked on
            international projects, coordinated remote teams and led multinational
            meetings, and I like turning slow manual processes into automated ones.
          </p>
          <p>
            Along the way I have picked up Agile and Scrum practices, design work with
            the Adobe suite, and architectural drafting with AutoCAD — a mix that helps
            me move comfortably between the technical and the visual side of a product.
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
