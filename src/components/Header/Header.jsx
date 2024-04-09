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
          <li className='nav-item'><IoHome /> Home</li>
          <li className='nav-item'><BsTools /> Skills</li>
          <li className='nav-item'><PiToolboxFill className='nav-icon' /> Portfolio</li>
          <li className='nav-item'><FaIdCard className='nav-icon' /> About</li>
          <li className='nav-item'><RiMailSendFill className='nav-icon' /> Contact</li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
