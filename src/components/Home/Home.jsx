import './Home.scss'

import { GrPersonalComputer } from "react-icons/gr";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { GoMail } from "react-icons/go";

function Home() {
  return (
    <section className='home-wrapper' id='home-wrapper'>
      <section className='home-section'>
        <article className='dev-description'>
          <h2 className='dev-name'>Hello 👋🏻 I&apos;m Martín Daniel Aguirre</h2>
          <h2 className='dev-job'>Web Developer <GrPersonalComputer className='dev-job-icon' /></h2>
          <h3 className='dev-country'>from Argentina 🇦🇷🌲</h3>
          <figure className='profile-fig mobile-profile-fig'>
            <img src="/images/dev-profile.webp" className='profile-img' alt="Profile picture of Martín" />
          </figure>
          <br />
          <p className='dev-para'>My main interest lies in <strong>frontend development</strong>, though I can also perform tasks and duties in the <em>backend</em> field.  My next goal as a developer is to reach a solid state of proficiency in both areas.</p>
          <p className="dev-para">My <strong>professional and educational background</strong> comes from a varied combination of university studies, courses, bootcamps and self-education.</p>
          <p className='dev-para'>Currently, I am <em>open to work</em> and to <em>freelancing</em> opportunities. If you are interested in <strong>working together</strong>, feel free to <a className='email-me' href='mailto:mdzg96@gmail.com'>email me</a> and we will make it happen. I generally like to develop under the &quot;Regular Dev&quot; alias.</p>
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