import './Skills.scss'
import SkillsCard from './SkillsCard';

//---- techicons.dev icons imports
// Fronted icons
import HTMLicon from './Skills-Icons/Frontend-Icons/HTMLicon';
import CSSicon from './Skills-Icons/Frontend-Icons/CSSicon';
import JavaScripticon from './Skills-Icons/Frontend-Icons/JavaScripticon';
import Bootstrapicon from './Skills-Icons/Frontend-Icons/Bootstrapicon';
import Reacticon from './Skills-Icons/Frontend-Icons/Reacticon';
import Astroicon from './Skills-Icons/Additional-Icons/Astroicon';

const FrontendSkills = () => {
  return (
    <>
      <h3>Frontend Development</h3>
      <section className='skills-container'>
        <SkillsCard 
          skillName={"HTML"}
          skillIcon={<HTMLicon />}
        />
        <SkillsCard 
          skillName={"CSS"}
          skillIcon={<CSSicon />}
        />
        <SkillsCard 
          skillName={"JavaScript"}
          skillIcon={<JavaScripticon />}
        />
        <SkillsCard 
          skillName={"Bootstrap"}
          skillIcon={<Bootstrapicon />}
        />

        <SkillsCard 
          skillName={"React"}
          skillIcon={<Reacticon />}
        />
        <SkillsCard 
          skillName={"Astro"}
          skillIcon={<Astroicon />}
        />
      </section>
    </>
  )
}

export default FrontendSkills