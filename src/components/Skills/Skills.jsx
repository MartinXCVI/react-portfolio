import FrontendSkills from './FrontendSkills';
import BackendSkills from './BackendSkills';
import AdditionalSkills from './AdditionalSkills';

function Skills() {
  return (
    <section className='skills-wrapper wrapper over-x' id='skills-wrapper'>
      <h2 className='subtitle' data-aos="fade-down" data-aos-duration="1000">Skills</h2>
      <hr className='breakline' data-aos="zoom-in" data-aos-duration="1500" />
      <section className='skills-section'>
        <FrontendSkills />
        <BackendSkills />
        <AdditionalSkills />
      </section>
    </section>
  )
}

export default Skills