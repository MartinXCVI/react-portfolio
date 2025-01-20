import WebAppProjects from './WebAppProjects'
import WebsitesProjects from './WebsitesProjects'
import BackendProjects from './BackendProjects'
import WordpressProjects from './WordpressProjects'

function Portfolio() {
  return (
    <section className='portfolio-wrapper wrapper' id='portfolio-wrapper'>
      <h2 className='portfolio-title' data-aos="fade-down" data-aos-duration="1000">Portfolio</h2>
      <hr className='breakline' data-aos="zoom-in" data-aos-duration="1500" />
      <section className="portfolio-section">
        <h3 className='projects-title' data-aos="fade-right" data-aos-duration="1000">Web App Projects</h3>
        <WebAppProjects />
      </section>
      <section className="portfolio-section">
        <h3 className='projects-title' data-aos="fade-right" data-aos-duration="1000">Frontend Projects</h3>
        <WebsitesProjects />
      </section>
      <section className="portfolio-section">
        <h3 className='projects-title' data-aos="fade-right" data-aos-duration="1000">Backend Projects</h3>
        <BackendProjects />
      </section>
      <section className="portfolio-section">
        <h3 className='projects-title' data-aos="fade-right" data-aos-duration="1000">Wordpress Projects</h3>
        <WordpressProjects />
      </section>
    </section>
  )
}

export default Portfolio