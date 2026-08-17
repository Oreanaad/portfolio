import { SkillBarsGeneralDiv } from "./styled-components"

interface Skill {
  name: string
  /** Self-assessed proficiency, rendered as the bar width. */
  level: number
}

const SKILLS: Skill[] = [
  { name: 'React.js', level: 75 },
  { name: 'JavaScript', level: 60 },
  { name: 'TypeScript', level: 40 },
  { name: 'Node.js', level: 50 },
  { name: 'Next.js', level: 70 },
  { name: 'Genexus', level: 80 },
  { name: 'HTML', level: 100 },
  { name: 'CSS / Bootstrap / Tailwind', level: 80 },
  { name: 'Python', level: 55 },
  { name: 'SQL / PostgreSQL / SQL Server', level: 80 },
  { name: 'Git & GitHub', level: 90 },
  { name: 'Agile methodologies', level: 100 },
]

export default function SkillBars() {
  return (
    <SkillBarsGeneralDiv className="skill">
      <h4><span>.</span>Skills</h4>
      <ul>
        {SKILLS.map(({ name, level }) => (
          <li key={name}>
            <h3>{name}</h3>
            <span
              className="bar"
              role="meter"
              aria-label={name}
              aria-valuenow={level}
              aria-valuemin={0}
              aria-valuemax={100}
            >
              {/* The width is handed to CSS as a custom property so every bar
                  shares one animation instead of a hand-written keyframe each. */}
              <span className="fill" style={{ ['--level' as string]: `${level}%` }} />
            </span>
          </li>
        ))}
      </ul>
    </SkillBarsGeneralDiv>
  )
}
