import { ExperienceContainer, ExperienceItem, ExperienceList } from './styled-components';

interface Role {
  company: string;
  role: string;
  /** Omitted when the dates are not being published. */
  period?: string;
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
    company: 'Kawatek',
    role: 'Software Development Intern',
    location: 'Internship',
    stack: ['Game development', 'Rehabilitation tech'],
    highlights: [
      'Developed games designed for patient rehabilitation, turning clinical exercises into guided, interactive sessions.',
      'Worked on the interaction and feedback loop so patients could follow their own progress through each exercise.',
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
              {[item.period, item.location].filter(Boolean).join(' · ')}
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
