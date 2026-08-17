import Grid from '@mui/material/Grid';
import { ProjectCard } from './components/ProjectCard';
import { ProjectsDiv } from './styled-components';
import { PROJECT_IDS, ProjectId, useI18n } from '@/i18n';

/** Everything language-independent: names, screenshots, URLs, platforms. */
const PROJECT_META: Record<ProjectId, {
  logo: string;
  title: string;
  img: string;
  href: string;
  domain: string;
  web: boolean;
  mobile: boolean;
}> = {
  limplus: {
    logo: 'LP', title: 'Limplus', img: '/assets/img/limplus.webp',
    href: 'https://limplus.com.ar/', domain: 'limplus.com.ar', web: true, mobile: true,
  },
  denticlick: {
    logo: 'DC', title: 'Denticlick', img: '/assets/img/denticlick.webp',
    href: 'https://www.denticlick.app/', domain: 'denticlick.app', web: true, mobile: true,
  },
  elpasajedental: {
    logo: 'PD', title: 'El Pasaje Dental', img: '/assets/img/elpasajedental.webp',
    href: 'https://elpasajedental.com/', domain: 'elpasajedental.com', web: true, mobile: true,
  },
  clientespasaje: {
    logo: 'CP', title: 'Clientes Pasaje', img: '/assets/img/clientespasaje.webp',
    href: 'https://clientespasaje.netlify.app/', domain: 'clientespasaje.netlify.app',
    web: true, mobile: false,
  },
  copiloto: {
    logo: 'CA', title: 'Copiloto Asistente Aviación', img: '/assets/img/copiloto.webp',
    href: 'https://copiloto-asistente-aviacion.netlify.app/',
    domain: 'copiloto-asistente-aviacion.netlify.app', web: true, mobile: true,
  },
  libreria: {
    logo: 'LO', title: 'Librería Online', img: '/assets/img/libreria.webp',
    href: 'https://libreria.oreanaad.com/', domain: 'libreria.oreanaad.com',
    web: true, mobile: true,
  },
};

export default function Projects() {
  const { t } = useI18n();

  return (
    <ProjectsDiv>
      <Grid
        container
        direction="row"
        justifyContent="space-around"
        alignItems="stretch"
        spacing={2}
      >
        {PROJECT_IDS.map((id) => (
          <Grid item xs={10} md={5.5} lg={3.5} key={id}>
            <ProjectCard {...PROJECT_META[id]} {...t.projects[id]} />
          </Grid>
        ))}
      </Grid>
    </ProjectsDiv>
  );
}
