import './Portfolio.css'
import Project from './Project'


function Portfolio() {
  return (
    <section className='portfolio-wrapper'>
      <h2 className='portfolio-title'>Portfolio</h2>
      <section className="portfolio-section">
        <h3 className='projects-title'>Projects</h3>
        <section className="portfolio-projects">
          <Project 
            title="Web App"
            img="/images/project-image.jpg"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          />
          <Project 
            title="Web App"
            img="/images/project-image.jpg"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          />
          <Project 
            title="Web App"
            img="/images/project-image.jpg"
            description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          />
          
        </section>
      </section>

    </section>
  )
}

export default Portfolio