import { Experience, SkillBars, TimeLine } from './components';
import { SkillsSection, SkillsHeader } from './styled-components';
import 'animate.css';
import { Grid } from '@mui/material';
import { useI18n } from '@/i18n';

export default function Skills() {
  const { t } = useI18n();

  return (
    <>
      <SkillsHeader>
        <div className='animate__animated animate__backInDown'>
          <h1>
            {t.skills.titlePre}<span>{t.skills.titleMid}</span>{t.skills.titlePost}
          </h1>
          <br />
          <p>{t.skills.intro1}</p>
          <p>{t.skills.intro2}</p>
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
