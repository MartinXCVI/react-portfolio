import './Header.css'

// React icons imports
import { IoHome } from "react-icons/io5"; // <IoHome />
import { BsTools } from "react-icons/bs"; // <BsTools />
import { PiToolboxFill } from "react-icons/pi"; // <PiToolboxFill />
import { FaIdCard } from "react-icons/fa"; // <FaIdCard />
import { RiMailSendFill } from "react-icons/ri"; // <RiMailSendFill />

function Header() {

  return (
    <header className='heading'>
      <section className='hero-section'>
        <h1 className='hero-title'>Regular_Dev</h1>
      </section>
      <nav className='navigation'>
        <ul className='nav-list'>
          <li className='nav-item'>
            <a href='#home-wrapper'><IoHome /> Home</a>
          </li>
          <li className='nav-item'>
            <a href='#skills-wrapper'><BsTools /> Skills</a>
            </li>
          <li className='nav-item'>
            <a href='#portfolio-wrapper'><PiToolboxFill className='nav-icon' /> Portfolio</a>
            </li>
          <li className='nav-item'>
            <a href='#about-wrapper'><FaIdCard className='nav-icon' /> About</a>
          </li>
          <li className='nav-item'>
            <a href='#contact-wrapper'><RiMailSendFill className='nav-icon' /> Contact</a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
