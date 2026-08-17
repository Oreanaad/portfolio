import Grid from '@mui/material/Grid';
import { ProjectCard } from './components/ProjectCard';
import { ProjectsDiv } from './styled-components';

interface Project {
  logo: string;
  title: string;
  category: string;
  sector: string;
  short: string;
  img: string;
  alt: string;
  detail: string;
  href: string;
  domain: string;
  web: boolean;
  mobile: boolean;
}

const PROJECTS: Project[] = [
  {
    logo: 'LP',
    title: 'Limplus',
    category: 'Professional website',
    sector: 'Cleaning services',
    short: 'Website for a wholesale cleaning products supplier.',
    img: '/assets/img/limplus.webp',
    alt: 'Limplus cleaning products website home page',
    detail:
      'Professional website for a cleaning services and supplies company. Modern design, contact form and a service catalogue laid out to turn visits into enquiries.',
    href: 'https://limplus.com.ar/',
    domain: 'limplus.com.ar',
    web: true,
    mobile: true,
  },
  {
    logo: 'DC',
    title: 'Denticlick',
    category: 'Web platform',
    sector: 'Dental care',
    short: 'Practice management platform for a dental clinic.',
    img: '/assets/img/denticlick.webp',
    alt: 'Denticlick dental clinic platform home page',
    detail:
      'Web platform for a dental clinic covering online appointments, clinical history, services and the medical team. Designed to build trust and increase consultations.',
    href: 'https://www.denticlick.app/',
    domain: 'denticlick.app',
    web: true,
    mobile: true,
  },
  {
    logo: 'PD',
    title: 'El Pasaje Dental',
    category: 'Professional website',
    sector: 'Dental care',
    short: 'Website and appointment system for a dental supplier.',
    img: '/assets/img/elpasajedental.webp',
    alt: 'El Pasaje Dental website home page',
    detail:
      'Professional website for a dental clinic and supplier in Tucumán. Modern design, appointment system and a product catalogue built to attract new patients.',
    href: 'https://elpasajedental.com/',
    domain: 'elpasajedental.com',
    web: true,
    mobile: true,
  },
  {
    logo: 'CP',
    title: 'Clientes Pasaje',
    category: 'CRM',
    sector: 'Client management',
    short: 'Real-time CRM dashboard for a client portfolio.',
    img: '/assets/img/clientespasaje.webp',
    alt: 'Clientes Pasaje CRM dashboard showing aggregate metrics',
    detail:
      'Real-time client management system. View, filter and organise an entire portfolio from one centralised panel, with live metrics on reach and contactability.',
    href: 'https://clientespasaje.netlify.app/',
    domain: 'clientespasaje.netlify.app',
    web: true,
    mobile: false,
  },
  {
    logo: 'CA',
    title: 'Copiloto Asistente Aviación',
    category: 'AI & automation',
    sector: 'Aviation',
    short: 'AI assistant for pilots and aviation students.',
    img: '/assets/img/copiloto.webp',
    alt: 'Copiloto aviation AI assistant interface',
    detail:
      'Intelligent assistant specialised in aviation. Answers technical questions on flight concepts, meteorology, navigation and procedures, plus sector regulations, in real time.',
    href: 'https://copiloto-asistente-aviacion.netlify.app/',
    domain: 'copiloto-asistente-aviacion.netlify.app',
    web: true,
    mobile: true,
  },
  {
    logo: 'LO',
    title: 'Librería Online',
    category: 'Ecommerce',
    sector: 'Online bookstore',
    short: 'Online bookstore template with catalogue and cart.',
    img: '/assets/img/libreria.webp',
    alt: 'Online bookstore ecommerce home page',
    detail:
      'Online store template for a bookstore. Product catalogue, shopping cart and a layout optimised to drive sales from day one.',
    href: 'https://libreria.oreanaad.com/',
    domain: 'libreria.oreanaad.com',
    web: true,
    mobile: true,
  },
];

export default function Projects() {
  return (
    <ProjectsDiv>
      <Grid
        container
        direction="row"
        justifyContent="space-around"
        alignItems="stretch"
        spacing={2}
      >
        {PROJECTS.map((project) => (
          <Grid item xs={10} md={5.5} lg={3.5} key={project.title}>
            <ProjectCard {...project} />
          </Grid>
        ))}
      </Grid>
    </ProjectsDiv>
  );
}
