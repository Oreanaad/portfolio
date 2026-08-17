import { ExperienceContainer, ExperienceItem, ExperienceList } from './styled-components';

interface Role {
  company: string;
  role: string;
  period: string;
  location: string;
  stack: string[];
  highlights: string[];
}

const ROLES: Role[] = [
  {
    company: 'EME Solutions',
    role: 'Full Stack Developer',
    period: '2025 — Present',
    location: 'Remote',
    stack: ['Genexus', 'React', 'Node.js'],
    highlights: [
      'Design and build web applications with Genexus and React, keeping the UI responsive and the experience consistent across platforms.',
      'Own the full software development lifecycle, from requirements gathering and architecture design through to deployment and maintenance.',
      'Integrated third-party APIs and optimised back-end processes, improving application performance and response times by 20%.',
      'Work with cross-functional teams in Agile sprints, contributing to code reviews, documentation and continuous improvement practices.',
    ],
  },
  {
    company: 'Lotus Interworks — Simplia',
    role: 'Team Lead & Meeting Conductor',
    period: '2023 — 2024',
    location: 'Remote',
    stack: ['JavaScript', 'Google Apps Script', 'Agile'],
    highlights: [
      'Led and facilitated international meetings with over 50 participants, ensuring structured agendas, clear objectives and actionable outcomes.',
      'Automated workflows by developing and debugging JavaScript for Google Sheets and Forms, cutting manual reporting time by 30%.',
      'Coordinated schedules, assigned responsibilities and tracked progress across a distributed team, improving communication and alignment.',
      'Acted as liaison between management and technical teams, keeping information flow and project tracking smooth.',
    ],
  },
];

export default function Experience() {
  return (
    <ExperienceContainer>
      <h4>
        <span>.</span>EXPERIENCE
      </h4>
      <ExperienceList>
        {ROLES.map((item) => (
          <ExperienceItem key={`${item.company}-${item.period}`}>
            <h3 className="role">
              {item.role} <span className="company">· {item.company}</span>
            </h3>
            <p className="meta">
              {item.period} · {item.location}
            </p>
            <div className="stack">
              {item.stack.map((tech) => (
                <span key={tech}>{tech}</span>
              ))}
            </div>
            <ul>
              {item.highlights.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>
          </ExperienceItem>
        ))}
      </ExperienceList>
    </ExperienceContainer>
  );
}
