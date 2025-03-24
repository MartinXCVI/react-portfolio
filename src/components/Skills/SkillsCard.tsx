import { JSX } from "react"
import { ISkillsCard } from "../../interfaces/ISkillsCard"


const SkillsCard = ({ skillName, skillIcon }: ISkillsCard): JSX.Element => {

  return (
    <div className='skills-box'>
      <h4 className='skills-name'>{skillName}</h4>
      {skillIcon}
    </div>
  )
}

export default SkillsCard
