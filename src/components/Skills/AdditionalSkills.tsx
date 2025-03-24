import { JSX } from "react"
import SkillsCard from "./SkillsCard"

//---- techicons.dev icons imports
// Additional icons
import Viteicon from './Skills-Icons/Additional-Icons/Viteicon';
import Postmanicon from './Skills-Icons/Additional-Icons/Postmanicon';
import Giticon from './Skills-Icons/Additional-Icons/Giticon';
import Sassicon from './Skills-Icons/Additional-Icons/Sassicon';
import Wordpressicon from './Skills-Icons/Additional-Icons/Wordpressicon';
import Firebaseicon from './Skills-Icons/Additional-Icons/Firebaseicon';
import Reduxicon from "./Skills-Icons/Additional-Icons/Reduxicon";
import Tailwindicon from './Skills-Icons/Additional-Icons/Tailwindicon';


const AdditionalSkills = (): JSX.Element => {
  
  return (
    <>
      <h3
        className='text-white'
        data-aos="fade-right"
        data-aos-duration="1000"
      >
        Additional Knowledge
      </h3>
      <section className='skills-container' data-aos="fade-right" data-aos-duration="1100" data-aos-once="true">
        <div className="skills-subcontainer">
          <SkillsCard 
            skillName={"Vite"}
            skillIcon={<Viteicon />}
          />
          <SkillsCard 
            skillName={"Postman"}
            skillIcon={<Postmanicon />}
          />
          <SkillsCard 
            skillName={"Git"}
            skillIcon={<Giticon />}
          />
          <SkillsCard 
            skillName={"Sass"}
            skillIcon={<Sassicon />}
          />
          <SkillsCard 
            skillName={"Wordpress"}
            skillIcon={<Wordpressicon />}
          />
          <SkillsCard 
            skillName={"Firebase"}
            skillIcon={<Firebaseicon />}
          />
          <SkillsCard 
            skillName={"Redux"}
            skillIcon={<Reduxicon />}
          />
          <SkillsCard 
            skillName={"Tailwind CSS"}
            skillIcon={<Tailwindicon />}
          />
        </div>
      </section>
    </>
  )
}

export default AdditionalSkills