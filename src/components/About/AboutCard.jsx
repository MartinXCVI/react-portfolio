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
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat assumenda nisi, praesentium inventore nesciunt repellendus fuga reiciendis autem eius optio quasi commodi voluptate ex harum.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium molestiae delectus dolore aut ad nobis.</p>
          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quaerat aut atque ipsum dignissimos, impedit perferendis fugiat. Culpa minima animi nam iste tempore perferendis reprehenderit autem, quo laudantium, quos aut quidem!</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi, ratione. Ullam itaque incidunt labore sint, amet at unde!</p>
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