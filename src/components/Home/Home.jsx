import { myInfo } from "../../data/myInfo";

import { GrPersonalComputer } from "react-icons/gr";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { GoMail } from "react-icons/go";

function Home() {

  const { myEmail, myLinkedin, myGithub } = myInfo

  return (
    <section className='home-wrapper wrapper' id='home-wrapper'>
      <section className='home-section'>
        <article className='dev-description'>
          <h2 className='dev-name' data-aos="fade-down" data-aos-duration="1500" data-aos-once="true">Martín Daniel Aguirre</h2>
          <h2 className='dev-job' data-aos="zoom-out" data-aos-duration="2500" data-aos-once="true">Full Stack Web Developer</h2>
          <section className='dev-buttons-section' data-aos="fade-up" data-aos-duration="1500" data-aos-once="true">
            <a className='about-btn' href={myGithub} target="_blank" title='Github'>Github <FaGithub className='react-dev-icon' /></a>
            <a className='about-btn' href={myLinkedin} target="_blank" title='LinkedIn'>LinkedIn <FaLinkedin className='react-dev-icon' /></a>
            <a className='about-btn' href={`mailto:${myEmail}`} title='Email'>Email <GoMail className='react-dev-icon' /></a>
            <a className='about-btn' href="#portfolio-wrapper" title='Projects'>Projects <GrPersonalComputer className='react-dev-icon' /></a>
          </section>
        </article>
      </section>
    </section>
  )
}

export default Home