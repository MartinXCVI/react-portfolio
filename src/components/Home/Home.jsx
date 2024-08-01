import './Home.scss'

import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { GoMail } from "react-icons/go";

function Home() {
  return (
    <section className='home-wrapper' id='home-wrapper'>
      <section className='home-section'>
        <article className='dev-description'>
          <h2 className='dev-name'>Martín Daniel Aguirre</h2>
          <h2 className='dev-job'>Web Developer</h2>
          <figure className='profile-fig mobile-profile-fig'>
            <img src="/images/dev-profile.webp" className='profile-img' alt="Profile picture of Martín" />
          </figure>
          <br />
          <p className='dev-para'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque tempora obcaecati in magnam architecto ratione?</p>
          <p className='dev-para'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur, sapiente.</p>
          <p className='dev-para'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam magni alias a molestiae maiores voluptates autem repudiandae quibusdam quae impedit.</p>
          <section className='dev-buttons-section'>
            <a className='dev-btn' href="https://github.com/MartinXCVI/" target="_blank" title='Github'><FaGithub className='react-dev-icon' /></a>
            <a className='dev-btn' href="https://www.linkedin.com/in/martinxcvi/" target="_blank" title='LinkedIn'><FaLinkedin className='react-dev-icon' /></a>
            <a className='dev-btn' href="mailto:mdzg96@gmail.com" title='Email'><GoMail className='react-dev-icon' /></a>
          </section>
        </article>
        <figure className='profile-fig desktop-profile-fig'>
          <img src="/images/dev-profile.webp" className='profile-img' alt="Profile picture of Martín" />
        </figure>
      </section>
    </section>
  )
}

export default Home