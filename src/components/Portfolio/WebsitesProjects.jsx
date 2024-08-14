import './Project.scss'
import ProjectCard from './ProjectCard'

const WebsitesProjects = () => {

  return (
    <>
      <section className="portfolio-projects">
        <ProjectCard
          title="Bakery"
          img="/images/covers/bakery-cover.webp"
          description="Delicate and beautiful website for a bakery. Developed with the Astro Framework, fast loading,  'Tiny slider' library for images eye-catching display, 'Leaflet' library for localization, and a bit yet enough amount of JavaScript."
          page={"https://bakery-rd.vercel.app/"}
          repository={"https://github.com/MartinXCVI/bakery"}
        />
        <ProjectCard 
          title="PelículasCAC"
          img="/images/covers/peliculascac-cover.webp"
          description="Frontend project based on a films & cartoons streaming platform for the 'Codo a Codo' bootcamp. Developed in a group of 4 under the scrum modality. Responsive, 'AOS' scroll library, forms validation, and APIs consumption."
          page={"https://martinxcvi.github.io/PeliculasCAC/"}
          repository={"https://github.com/MartinXCVI/PeliculasCAC"}
        />
        <ProjectCard 
          title="CV Website"
          img="/images/covers/cv-website-cover.webp"
          description="Minimalist yet elegant website template for a curriculum vitae. Developed with the Astro Framework, JavaScript DOM manipulation, clean design, Web3Forms emails, PDF download button, and 'AOS' animations library."
          page={"https://cv-website-rd.vercel.app/"}
          repository={"https://github.com/MartinXCVI/cv-website"}
        />
        <ProjectCard 
          title="Psychotherapist"
          img="/images/covers/psychotherapist-cover.png"
          description="Clean and beautiful design for a psychotherapist, mental health professional, or life coach website alternatively. Developed with PHP, Bootstrap components and SCSS. Contact form functionality with Web3Forms."
          page={"https://psychotherapist.zeabur.app/"}
          repository={"https://github.com/MartinXCVI/psychotherapist-site"}
        />
        <ProjectCard 
          title="Coporate Site"
          img="/images/covers/corporate-cover.png"
          description="Formal and grayish yet elegantly catching corporate website. Developed with React libraries and React Bootstrap. General purpose driven for most kinds of companies as a simple but attractive landing page solution."
          page={"https://react-corporate-rd.vercel.app/"}
          repository={"https://github.com/MartinXCVI/react-corporate"}
        />
      </section>
    </>
  )
}

export default WebsitesProjects