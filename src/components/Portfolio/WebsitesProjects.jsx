import './Project.scss'
import ProjectCard from './ProjectCard'

const WebsitesProjects = () => {

  return (
    <>
      <section className="portfolio-projects">
        <ProjectCard
          title="Bakery"
          img="/images/covers/bakery-cover.webp"
          description="Delicate and beautiful website for a bakery. Developed with the Astro Framework, fast loading,  'Tiny slider' library for images eye-catching display, 'Leaflet' library for geolocalization, and a bit yet enough amount of JavaScript."
          page={"https://bakery-rd.vercel.app/"}
          repository={"https://github.com/MartinXCVI/bakery"}
        />
        <ProjectCard 
          title="PelículasCAC"
          img="/images/covers/peliculascac-cover.webp"
          description="Prototype frontend project based on a films, cartoons and streaming platform for the 'Codo a Codo' bootcamp. Developed in a group of 4 under the scrum modality. Responsive, 'AOS' scroll library, forms validation, and APIs consumption."
          page={"https://martinxcvi.github.io/PeliculasCAC/"}
          repository={"https://github.com/MartinXCVI/PeliculasCAC"}
        />
        <ProjectCard 
          title="CV Website"
          img="/images/covers/cv-website-cover.webp"
          description="Minimalist yet elegant website template for a curriculum vitae. Developed with the Astro Framework, JavaScript DOM manipulation and functionalities, clean design, Web3Forms emails system, PDF download button, and 'AOS' scroll library."
          page={"https://cv-website-rd.vercel.app/"}
          repository={"https://github.com/MartinXCVI/cv-website"}
        />
      </section>
    </>
  )
}

export default WebsitesProjects