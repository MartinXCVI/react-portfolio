import './Skills.css'

//---- techicons.dev icons imports
// Fronted icons
import HTMLicon from './Skills-Icons/Frontend-Icons/HTMLicon';
import CSSicon from './Skills-Icons/Frontend-Icons/CSSicon';
import JavaScripticon from './Skills-Icons/Frontend-Icons/JavaScripticon';
import Bootstrapicon from './Skills-Icons/Frontend-Icons/Bootstrapicon';
import Sassicon from './Skills-Icons/Frontend-Icons/Sassicon';
import Reacticon from './Skills-Icons/Frontend-Icons/Reacticon';
import Tailwindicon from './Skills-Icons/Frontend-Icons/Tailwindicon';

// Backend icons
import Javaicon from './Skills-Icons/Backend-Icons/Javaicon';
import Springicon from './Skills-Icons/Backend-Icons/Springicon';
import MongoDBicon from './Skills-Icons/Backend-Icons/MongoDBicon';
import Nodeicon from './Skills-Icons/Backend-Icons/Nodeicon';
import Expressicon from './Skills-Icons/Backend-Icons/Expressicon';
import PHPicon from './Skills-Icons/Backend-Icons/PHPicon';
import MySQLicon from './Skills-Icons/Backend-Icons/MySQLicon';

// Additional icons
import Viteicon from './Skills-Icons/Additional-Icons/Viteicon';
import Postmanicon from './Skills-Icons/Additional-Icons/Postmanicon';
import Giticon from './Skills-Icons/Additional-Icons/Giticon';
import Webpackicon from './Skills-Icons/Additional-Icons/Webpackicon';
import Wordpressicon from './Skills-Icons/Additional-Icons/Wordpressicon';
import Firebaseicon from './Skills-Icons/Additional-Icons/Firebaseicon';
import Reactbootstrapicon from './Skills-Icons/Frontend-Icons/Reactbootstrapicon';
import Astroicon from './Skills-Icons/Additional-Icons/Astroicon';

// Learning icons
import Pythonicon from './Skills-Icons/Learning-icons/Pythonicon';
import Postgreicon from './Skills-Icons/Learning-icons/Postgreicon'
import Cicon from './Skills-Icons/Learning-icons/Cicon';



function Skills() {
  return (
    <section className='skills-wrapper'>
      <h2 className='subtitle'>Skills</h2>
      <section className='skills-section'>
        <h3>Frontend Development</h3>
        <section className='skills-container'>
          <div className='skills-box'>
            <h4 className='skills-name'>HTML</h4>
            <HTMLicon />
          </div>
          <div className='skills-box'>
            <h4 className='skills-name'>CSS</h4>
            <CSSicon />
          </div>
          <div className='skills-box'>
            <h4 className='skills-name'>JavaScript</h4>
            <JavaScripticon />
          </div>
          <div className='skills-box'>
            <h4 className='skills-name'>Bootstrap</h4>
            <Bootstrapicon />
          </div>
          <div className='skills-box'>
            <h4 className='skills-name'>Sass</h4>
            <Sassicon />
          </div>
          <div className='skills-box'>
            <h4 className='skills-name'>React</h4>
            <Reacticon />
          </div>
          <div className='skills-box'>
            <h4 className='skills-name'>Tailwind CSS</h4>
            <Tailwindicon />
          </div>
        </section>
        
        <h3>Backend Development</h3>
        <section className='skills-container'>
          <div className='skills-box'>
            <h4 className='skills-name'>Java</h4>
            <Javaicon />
          </div>
          <div className='skills-box'>
            <h4 className='skills-name'>Spring</h4>
            <Springicon />
          </div>
          <div className='skills-box'>
            <h4 className='skills-name'>MongoDB</h4>
            <MongoDBicon />
          </div>
          <div className='skills-box'>
            <h4 className='skills-name'>Node.js</h4>
            <Nodeicon />
          </div>
          <div className='skills-box'>
            <h4 className='skills-name'>Express</h4>
            <Expressicon />
          </div>
          <div className='skills-box'>
            <h4 className='skills-name'>PHP</h4>
            <PHPicon />
          </div>
          <div className='skills-box'>
            <h4 className='skills-name'>MySQL</h4>
            <MySQLicon />
          </div>

        </section>

        <h3>Additional Knowledge</h3>
        <section className='skills-container'>
          <div className='skills-box'>
            <h4 className='skills-name'>Vite</h4>
            <Viteicon />
          </div>
          <div className='skills-box'>
            <h4 className='skills-name'>Postman</h4>
            <Postmanicon />
          </div>
          <div className='skills-box'>
            <h4 className='skills-name'>Git</h4>
            <Giticon />
          </div>
          <div className='skills-box'>
            <h4 className='skills-name'>Webpack</h4>
            <Webpackicon />
          </div>
          <div className='skills-box'>
            <h4 className='skills-name'>Wordpress</h4>
            <Wordpressicon />
          </div>
          <div className='skills-box'>
            <h4 className='skills-name'>Firebase</h4>
            <Firebaseicon />
          </div>
          <div className='skills-box'>
            <h4 className='skills-name'>React Bootstrap</h4>
            <Reactbootstrapicon />
          </div>
          <div className='skills-box'>
            <h4 className='skills-name'>Astro</h4>
            <Astroicon />
          </div>
        </section>

        <h3>Learning or Improving</h3>
        <section className='skills-container'>
          <div className='skills-box'>
            <h4 className='skills-name'>Python</h4>
            <Pythonicon />
          </div>
          <div className='skills-box'>
            <h4 className='skills-name'>PostgreSQL</h4>
            <Postgreicon />
          </div>
          <div className='skills-box'>
            <h4 className='skills-name'>C</h4>
            <Cicon />
          </div>
        </section>
      </section>
    </section>
  )
}

export default Skills