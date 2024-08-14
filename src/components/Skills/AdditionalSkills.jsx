import SkillsCard from "./SkillsCard"

//---- techicons.dev icons imports
// Additional icons
import Viteicon from './Skills-Icons/Additional-Icons/Viteicon';
import Postmanicon from './Skills-Icons/Additional-Icons/Postmanicon';
import Giticon from './Skills-Icons/Additional-Icons/Giticon';
import Sassicon from './Skills-Icons/Additional-Icons/Sassicon';
import Wordpressicon from './Skills-Icons/Additional-Icons/Wordpressicon';
import Firebaseicon from './Skills-Icons/Additional-Icons/Firebaseicon';
import Reactbootstrapicon from './Skills-Icons/Additional-Icons/Reactbootstrapicon';
import Tailwindicon from './Skills-Icons/Additional-Icons/Tailwindicon';


const AdditionalSkills = () => {
  return (
    <>
      <h3>Additional Knowledge</h3>
      <section className='skills-container'>
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
          skillName={"React Bootstrap"}
          skillIcon={<Reactbootstrapicon />}
        />
        <SkillsCard 
          skillName={"Tailwind CSS"}
          skillIcon={<Tailwindicon />}
        />
      </section>
    </>
  )
}

export default AdditionalSkills