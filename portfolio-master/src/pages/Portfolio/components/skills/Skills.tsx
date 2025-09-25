
import { SkillBars, TimeLine } from './components';
import { SkillsSection , SkillsHeader} from './styled-components';
import 'animate.css';
import { Grid } from '@mui/material';

export default function Skills() {
  return (
    <>
    <SkillsHeader> 
      <div className='animate__animated animate__backInDown' >
        <h1> my<span>Ex</span>perience </h1>
        <br></br>
        <p>Software Developer and Team Lead with practical, results-driven experience in full-stack development, team coordination, and process optimization on international projects.</p>
        <p>As a result, I have gained expertise in a variety of areas, including Agile methodologies, Scrum framework, iOS, Android, web development, Windows development, IT, Genexus, design (Adobe Products), and architecture (Autocad, SketchUp)and the ability to learn quickly and independently, which has allowed me to consistently deliver tangible accomplishments and gain expertise across diverse technical landscapes.</p>
      </div>




    </SkillsHeader>

    <SkillsSection >
      <Grid container direction="row" justifyContent="space-around" alignItems="flex-start"  >
            <Grid item xs={11.5} md= {5.5} lg={5.5}>
              <SkillBars /> 
            </Grid>
            <Grid item xs={11.5} md= {5.5} lg={5.5}>

              <div className='animate__animated animate__backInUp' >
                <TimeLine/>
              </div>
            </Grid>
      </Grid>
    </SkillsSection>

    </>
  )
}