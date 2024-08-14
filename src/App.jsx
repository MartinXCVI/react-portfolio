// CSS files
import './css/styles.css'

// Components
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import Skills from './components/Skills/Skills'
import Portfolio from './components/Portfolio/Portfolio'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'

function App() {

  return (
    <>
     <Header />
      <Home />
      <Skills />
      <Portfolio />
      <About />
      <Contact/>
      <Footer />
    </>
  )
}

export default App
