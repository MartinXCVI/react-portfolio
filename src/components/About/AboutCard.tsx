import { myInfo } from "../../data/myInfo";
import { JSX } from "react"
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { GoMail } from "react-icons/go";


const AboutCard = (): JSX.Element => {

  const { myEmail, myLinkedin, myGithub } = myInfo

  return (
    <section className="about-card" data-aos="fade-left" data-aos-duration="1500" data-aos-once="true">
      <h2 className='about-card-title'>More about me</h2>
      <article className="about-article">
        <p className='about-article-para'>
          I&apos;m just a <strong>young man from Argentina</strong> that is interested in computer science, coding, web development, and building practical digital solutions.
        </p>
        <p className='about-article-para'>
          From <em>front to back</em>, I develop full-stack applications with a focus on clean architecture, performance, and usability. I create responsive, maintainable software, following best practices and structuring code semantically for clarity and efficiency. 
        </p>
        <p className='about-article-para'>
          I thrive in both <strong>independent projects</strong>, as well as in <strong>collaborative environments</strong>. I&apos;m <strong>always</strong> open to <strong>freelancing opportunities</strong>. <br/><a href={`mailto:${myEmail}`}>Simply email me</a> if you are interested in working together.
        </p>
      </article>
      <div className="about-btns-div">
        {/* Github button */}
        <a
          className='about-btn'
          href={myGithub}
          target="_blank"
        >
          Github <FaGithub className='react-icon' />
        </a>
        {/* LinkedIn button */}
        <a
          className='about-btn'
          href={myLinkedin}
          target="_blank"
        >
          LinkedIn <FaLinkedin className='react-icon' />
        </a>
        {/* Email button */}
        <a
          className='about-btn'
          href={`mailto:${myEmail}`}
        >
          Email <GoMail className='react-icon' />
        </a>
      </div>
    </section>
  )
}

export default AboutCard