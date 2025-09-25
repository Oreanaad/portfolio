import { SkillBarsGeneralDiv } from "./styled-components"
export default function SkillBars() {
  return (
    <SkillBarsGeneralDiv className="skill">
        
        <h4><span>.</span>Skills</h4>
        <li>
            <h3>Agile Methodologies</h3>
            <span className="bar"><span className="agile"></span></span>
        </li>
        <li>
            <h3>JavaScript</h3>
            <span className="bar"><span className="scrum"></span></span>
        </li>
        <li>
            <h3>HTML</h3>
            <span className="bar"><span className="html"></span></span>
        </li>
        <li>
            <h3>CSS/BOOSTRAP/TAILWIND</h3>
            <span className="bar"><span className="css"></span></span>
        </li>
        <li>
            <h3>Node.js</h3>
            <span className="bar"><span className="js"></span></span>
        </li>
        <li>
            <h3>React.js</h3>
            <span className="bar"><span className="react"></span></span>
        </li>
        <li>
            <h3>TypeScript</h3>
            <span className="bar"><span className="ts"></span></span>
        </li>
        <li>
            <h3>GitHub</h3>
            <span className="bar"><span className="poo"></span></span>
        </li>
        <li>
            <h3>SQL</h3>
            <span className="bar"><span className="sql"></span></span>
        </li>
        <li>
            <h3>Genexus</h3>
        
            <span className="bar"><span className="genexus"></span></span>
        </li>
    </SkillBarsGeneralDiv>
    
  )
}