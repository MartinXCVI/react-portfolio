import { useState } from "react"

// React icons imports
import { IoHome } from "react-icons/io5";
import { BsTools } from "react-icons/bs";
import { PiToolboxFill } from "react-icons/pi";
import { FaIdCard } from "react-icons/fa";
import { RiMailSendFill } from "react-icons/ri";

function Header() {

  const [burgerClass, setBurgerClass] = useState('burger-span not-clicked')
  const [menuClass, setMenuClass] = useState('menu hidden')
  const [isMenuDisplayed, setIsMenuDisplayed] = useState(false)

  const updateMenu = ()=> {
    if(!isMenuDisplayed) {
      setBurgerClass("burger-span clicked")
      setMenuClass("menu visible")
    } else {
      setBurgerClass("burger-span not-clicked")
      setMenuClass("menu hidden")
    }
    setIsMenuDisplayed(!isMenuDisplayed)
  }


  return (
    <header className='heading'>
      <section className='hero-section'>
        <h1 className='hero-title'>
          <a href='#portfolio-wrapper'>{'<'}MartinXCVI {'/>'}</a>
        </h1>
      </section>
      <nav className='navigation'>
        <div className="burger-menu" onClick={updateMenu}>
          <span className={burgerClass}></span>
          <span className={burgerClass}></span>
          <span className={burgerClass}></span>
        </div>
        <ul className={`${menuClass} nav-list`}>
          <li className='nav-item'>
            <a href='#home-wrapper'><IoHome /> Home</a>
          </li>
          <li className='nav-item'>
            <a href='#portfolio-wrapper'><PiToolboxFill className='nav-icon' /> Portfolio</a>
          </li>
          <li className='nav-item'>
            <a href='#skills-wrapper'><BsTools/> Skills</a>
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
