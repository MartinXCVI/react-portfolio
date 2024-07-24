import SkillsCard from "./SkillsCard"

//---- techicons.dev icons imports
// Learning icons
import Pythonicon from './Skills-Icons/Learning-icons/Pythonicon';
import Springicon from './Skills-Icons/Backend-Icons/Springicon';
import Laravelicon from './Skills-Icons/Learning-icons/Laravelicon';

const LearningSkills = () => {
  return (
    <>
      <h3>Learning or Improving</h3>
      <section className='skills-container'>
        <SkillsCard 
          skillName={"Spring"}
          skillIcon={<Springicon />}
        />
        <SkillsCard 
          skillName={"Python"}
          skillIcon={<Pythonicon />}
        />
        <SkillsCard 
          skillName={"Laravel"}
          skillIcon={<Laravelicon />}
        />
      </section>
    </>
  )
}

export default LearningSkills