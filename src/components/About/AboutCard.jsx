import './AboutCard.scss'
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { GoMail } from "react-icons/go";


const AboutCard = ()=> {
  return (
    <>
      <section className="about-card">
        <h2 className='about-card-title'>More about me</h2>
        <article className="about-article">
          <p>I&apos;m just a young man from Argentina that is interested in information technology, physical activity, family life, friends, and constant overall improvements.</p>
          <p>As I noted above, I mainly keen on frontend development with a good understanding and practicality in backend. My next near goal as a developer is to reach a solid state of proficiency in both areas.</p>
          <p>As for the technical approach of my work, I focus on making responsive sites with the implementation of the general best practices, semantic structuring, clean design, and considering your brand&apos;s uniqueness.
          </p>
          <p>I can be both effective in self-managing for independent projects, as well as in collaborative opportunities as part of a team. Additionally, working with me is easy; I&apos;m willing to give the best of myself in order to make understanding and cooperation to be the primal cornerstones of a project&apos;s development.</p>
          <p>My mid to long term goal is to become a Java developer in the future. As for now, I will just keep working on my frontend-oriented skills in the full stack web development world as I dive deep in the previous technology I stated.</p>
          <p>I&apos;m always open to freelancing opportunities. <a href='mailto:mdzg96@gmail.com'>Simply email me</a> if you consider it.</p>
        </article>
        <div className="about-btns-div">
          <a className='about-btn' href="https://github.com/MartinXCVI/" target="_blank">Github <FaGithub className='react-icon' /></a>
          <a className='about-btn' href="https://www.linkedin.com/in/martinxcvi/" target="_blank">LinkedIn <FaLinkedin className='react-icon' /></a>
          <a className='about-btn' href="mailto:mdzg96@gmail.com">Email <GoMail className='react-icon' /></a>
        </div>
      </section>
    </>
  )
}

export default AboutCard