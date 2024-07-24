import './Skills.css'

import FrontendSkills from './FrontendSkills';
import BackendSkills from './BackendSkills';
import AdditionalSkills from './AdditionalSkills';
import LearningSkills from './LearningSkills';

function Skills() {
  return (
    <section className='skills-wrapper'>
      <h2 className='subtitle'>Skills</h2>
      <section className='skills-section'>
        <FrontendSkills />
        <BackendSkills />
        <AdditionalSkills />
        <LearningSkills />
      </section>
    </section>
  )
}

export default Skills