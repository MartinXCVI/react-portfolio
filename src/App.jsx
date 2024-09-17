// Hooks
import { useEffect } from 'react';

// CSS files
import './css/styles.css'

// AOS library imports
import AOS from "aos";
import "aos/dist/aos.css";

// Components
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import Skills from './components/Skills/Skills'
import Portfolio from './components/Portfolio/Portfolio'
import Services from './components/Services/Services';
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'

function App() {

  useEffect(()=> {
    AOS.init({})
  }, [])

  return (
    <>
     <Header />
      <main>
        <Home />
        <Portfolio />
        <Skills />
        <Services />
        <About />
        <Contact/>
      </main>
      <Footer />
    </>
  )
}

export default App
