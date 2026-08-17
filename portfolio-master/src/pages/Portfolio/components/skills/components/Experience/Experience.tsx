import { useI18n } from '@/i18n';
import { ExperienceContainer, ExperienceItem, ExperienceList } from './styled-components';

export default function Experience() {
  const { t } = useI18n();

  return (
    <ExperienceContainer>
      <h4>
        <span>.</span>{t.skills.labelExperience}
      </h4>
      <ExperienceList>
        {t.experience.map((item) => (
          <ExperienceItem key={item.company}>
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
