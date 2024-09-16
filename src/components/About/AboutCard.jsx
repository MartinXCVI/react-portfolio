import { myInfo } from "../../data/myInfo";

import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { GoMail } from "react-icons/go";

const AboutCard = ()=> {

  const { myEmail, myLinkedin, myGithub } = myInfo

  return (
    <>
      <section className="about-card" data-aos="fade-left" data-aos-duration="1500">
        <h2 className='about-card-title'>More about me</h2>
        <article className="about-article">
          <p className='about-article-para'>I&apos;m just a <strong>young man from Argentina</strong> that is interested in information technology, physical activity, family life, friends, and constant overall improvements.</p>
          <p className='about-article-para'>As for the <em>technical</em> approach of my work, I focus on making responsive sites with the implementation of the <em>general best practices, semantic structuring, clean design,</em> and embracing an effective approach in simplicity for problems solving.
          </p>
          <p className='about-article-para'>I can be both effective in self-managing for <strong>independent projects</strong>, as well as in collaborative opportunities as part of a <strong>team</strong>. I&apos;m <strong>always</strong> open to <strong>freelancing opportunities</strong>. <a href={`mailto:${myEmail}`}>Simply email me</a> if you consider it.</p>
          <p className='about-article-para'></p>
        </article>
        <div className="about-btns-div">
          <a className='about-btn' href={myGithub} target="_blank">Github <FaGithub className='react-icon' /></a>
          <a className='about-btn' href={myLinkedin} target="_blank">LinkedIn <FaLinkedin className='react-icon' /></a>
          <a className='about-btn' href={`mailto:${myEmail}`}>Email <GoMail className='react-icon' /></a>
        </div>
      </section>
    </>
  )
}

export default AboutCard