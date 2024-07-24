import './Portfolio.css'
import WebsitesProjects from './WebsitesProjects'
import WordpressProjects from './WordpressProjects'

function Portfolio() {
  return (
    <section className='portfolio-wrapper'>
      <h2 className='portfolio-title'>Portfolio</h2>
      <section className="portfolio-section">
        <h3 className='projects-title'>Website Projects</h3>
        <WebsitesProjects />
      </section>
      <section className="portfolio-section">
        <h3 className='projects-title'>Wordpress Projects</h3>
        <WordpressProjects />
      </section>
      

    </section>
  )
}

export default Portfolio