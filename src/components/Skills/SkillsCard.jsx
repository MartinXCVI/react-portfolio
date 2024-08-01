import './Skills.scss'
import PropTypes from 'prop-types'

const SkillsCard = ({ skillName, skillIcon })=> {
  return (
    <div className='skills-box'>
      <h4 className='skills-name'>{skillName}</h4>
      {skillIcon}
    </div>
  )
}

SkillsCard.propTypes = {
  skillName: PropTypes.string,
  skillIcon: PropTypes.object
}

export default SkillsCard
