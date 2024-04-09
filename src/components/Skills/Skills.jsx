import './Skills.css'

//---- techicons.dev icons imports
// Fronted icons
import HTMLicon from './Skills-Icons/Frontend-Icons/HTMLicon';
import CSSicon from './Skills-Icons/Frontend-Icons/CSSicon';
import JavaScripticon from './Skills-Icons/Frontend-Icons/JavaScripticon';
import Bootstrapicon from './Skills-Icons/Frontend-Icons/Bootstrapicon';
import Sassicon from './Skills-Icons/Frontend-Icons/Sassicon';
import Reacticon from './Skills-Icons/Frontend-Icons/Reacticon';
import Nexticon from './Skills-Icons/Frontend-Icons/Nexticon';
import Tailwindicon from './Skills-Icons/Frontend-Icons/Tailwindicon';

// Backend icons
import Javaicon from './Skills-Icons/Backend-Icons/Javaicon';
import Springicon from './Skills-Icons/Backend-Icons/Springicon';
import MongoDBicon from './Skills-Icons/Backend-Icons/MongoDBicon';
import Nodeicon from './Skills-Icons/Backend-Icons/Nodeicon';
import PHPicon from './Skills-Icons/Backend-Icons/PHPicon';
import MySQLicon from './Skills-Icons/Backend-Icons/MySQLicon';
import Pythonicon from './Skills-Icons/Backend-Icons/Pythonicon';
import Firebaseicon from './Skills-Icons/Backend-Icons/Firebaseicon';

// Devtools icons
import Viteicon from './Skills-Icons/Devtools-Icons/Viteicon';
import Postmanicon from './Skills-Icons/Devtools-Icons/Postmanicon';
import Giticon from './Skills-Icons/Devtools-Icons/Giticon';
import Webpackicon from './Skills-Icons/Devtools-Icons/Webpackicon';
import Wordpressicon from './Skills-Icons/Devtools-Icons/Wordpressicon';
import Nodemonicon from './Skills-Icons/Devtools-Icons/Nodemonicon';
import Ubuntuicon from './Skills-Icons/Devtools-Icons/Ubuntuicon';
import Githubicon from './Skills-Icons/Devtools-Icons/Githubicon';

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
            <h4 className='skills-name'>Next.js</h4>
            <Nexticon />
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
            <h4 className='skills-name'>Spring Boot</h4>
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
            <h4 className='skills-name'>PHP</h4>
            <PHPicon />
          </div>
          <div className='skills-box'>
            <h4 className='skills-name'>MySQL</h4>
            <MySQLicon />
          </div>
          <div className='skills-box'>
            <h4 className='skills-name'>Firebase</h4>
            <Firebaseicon />
          </div>
          <div className='skills-box'>
            <h4 className='skills-name'>Python</h4>
            <Pythonicon />
          </div>
        </section>
        <h3>Preferred Development Tools</h3>
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
            <h4 className='skills-name'>Nodemon</h4>
            <Nodemonicon />
          </div>
          <div className='skills-box'>
            <h4 className='skills-name'>Ubuntu</h4>
            <Ubuntuicon />
          </div>
          <div className='skills-box'>
            <h4 className='skills-name'>GitHub</h4>
            <Githubicon />
          </div>
        </section>
      </section>
    </section>
  )
}

export default Skills