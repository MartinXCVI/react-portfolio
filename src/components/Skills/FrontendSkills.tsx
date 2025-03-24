import { JSX } from "react"
import SkillsCard from './SkillsCard';

//---- techicons.dev icons imports
// Fronted icons
import HTMLicon from './Skills-Icons/Frontend-Icons/HTMLicon';
import CSSicon from './Skills-Icons/Frontend-Icons/CSSicon';
import JavaScripticon from './Skills-Icons/Frontend-Icons/JavaScripticon';
import Bootstrapicon from './Skills-Icons/Frontend-Icons/Bootstrapicon';
import Reacticon from './Skills-Icons/Frontend-Icons/Reacticon';
import Astroicon from './Skills-Icons/Frontend-Icons/Astroicon';


const FrontendSkills = (): JSX.Element => {

  return (
    <>
      <h3
        className='text-white'
        data-aos="fade-right"
        data-aos-duration="1000"
      >
        Frontend Development
      </h3>
      <section className='skills-container' data-aos="fade-right" data-aos-duration="1000" data-aos-once="true">
        <div className="skills-subcontainer">
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
        </div>
      </section>
    </>
  )
}

export default FrontendSkills