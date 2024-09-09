import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { GoMail } from "react-icons/go";

const AboutCard = ()=> {
  return (
    <>
      <section className="about-card" data-aos="fade-left" data-aos-duration="1500">
        <h2 className='about-card-title'>More about me</h2>
        <article className="about-article">
          <p className='about-article-para'>I&apos;m just a <strong>young man from Argentina</strong> that is interested in information technology, physical activity, family life, friends, and constant overall improvements.</p>
          <p className='about-article-para'>As I noted above, I mainly keen on <strong>frontend development</strong> with a good understanding and practicality in <strong>backend</strong>. My next near goal as a developer is to reach a solid state of proficiency in <em>both</em> areas.</p>
          <p className='about-article-para'>As for the <em>technical</em> approach of my work, I focus on making responsive sites with the implementation of the <em>general best practices, semantic structuring, clean design,</em> and embracing an effective approach in simplicity for problems solving. I typically work and develop under the <strong>Regular Dev</strong> alias.
          </p>
          <p className='about-article-para'>I can be both effective in self-managing for <strong>independent projects</strong>, as well as in collaborative opportunities as part of a <strong>team</strong>. Additionally, working with me is easy; I&apos;m willing to give the best of myself in order to make <em>understanding</em> and <em>cooperation</em> to be the <strong>primal cornerstones</strong> of a project&apos;s development.</p>
          <p className='about-article-para'>My mid to long term goal is to become a <em>Java developer</em> in the future. As for now, I will just keep working on my <strong>frontend-oriented</strong> skills in the <em>full stack</em> web development world as I dive deep in the previous technology I stated.</p>
          <p className='about-article-para'>I&apos;m <strong>always</strong> open to <strong>freelancing opportunities</strong>. <a href='mailto:mdzg96@gmail.com'>Simply email me</a> if you consider it.</p>
        </article>
        <div className="about-btns-div">
          <a className='about-btn' href="https://github.com/MartinXCVI/" target="_blank">Github <FaGithub className='react-icon' /></a>
          <a className='about-btn' href="https://www.linkedin.com/in/martinxcvi/" target="_blank">LinkedIn <FaLinkedin className='react-icon' /></a>
          <a className='about-btn' href="mailto:martin96rd@gmail.com">Email <GoMail className='react-icon' /></a>
        </div>
      </section>
    </>
  )
}

export default AboutCard