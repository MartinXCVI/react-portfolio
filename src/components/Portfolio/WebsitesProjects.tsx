import ProjectCard from './ProjectCard'
import { JSX } from "react"

const WebsitesProjects = (): JSX.Element => {

  return (
    <section className="portfolio-projects">
      <ProjectCard
        aosAnim="zoom-out-up" 
        aosDuration="1500"
        aosDelay="0"
        title="Bakery"
        img="/images/covers/bakery-cover.webp"
        description="Delicate and beautiful website for a bakery. Developed with the Astro Framework, fast loading,  'Tiny slider' library for images eye-catching display, 'Leaflet' library for localization, and a bit yet enough amount of JavaScript."
        page={"https://bakery-rd.vercel.app/"}
        repository={"https://github.com/MartinXCVI/bakery"}
      />
      <ProjectCard 
        aosAnim="zoom-out-up" 
        aosDuration="1500"
        aosDelay="150"
        title="PelículasCAC"
        img="/images/covers/peliculas-cac-cover.webp"
        description="Frontend project based on a films & cartoons streaming platform for the 'Codo a Codo' bootcamp. Developed in a group of 4 under the scrum modality. Responsive, 'AOS' scroll library, forms validation, and APIs consumption."
        page={"https://martinxcvi.github.io/PeliculasCAC/"}
        repository={"https://github.com/MartinXCVI/PeliculasCAC"}
      />
      <ProjectCard
        aosAnim="zoom-out-up" 
        aosDuration="1500"
        aosDelay="300"
        title="CV Website"
        img="/images/covers/cv-website-cover.webp"
        description="Minimalist yet elegant website template for a curriculum vitae. Developed with the Astro Framework, JavaScript DOM manipulation, clean design, Web3Forms emails, PDF download button, and 'AOS' animations library."
        page={"https://cv-website-rd.vercel.app/"}
        repository={"https://github.com/MartinXCVI/cv-website"}
      />
      <ProjectCard 
        aosAnim="zoom-out-down" 
        aosDuration="1500"
        aosDelay="450"
        title="Landscapist"
        img="/images/covers/landscapist-cover.webp"
        description="Clean and beautiful design for a landscapist/landscaper, gardener, or arborist website alternatively. Developed with the Astro Framework, JavaScript, AOS libraries and SCSS. Contact form functionality with Web3Forms."
        page={"https://landscapist.vercel.app/"}
        repository={"https://github.com/MartinXCVI/landscapist"}
      />
      <ProjectCard
        aosAnim="zoom-out-down" 
        aosDuration="1500" 
        aosDelay="600"
        title="Dark Ambient Form"
        img="/images/covers/dark-ambient-form-cover.webp"
        description="A lovecraftian subscription form with dark tonalities and interestingly entertaining moving green spheres. Small yet curiously complex project in its programmatically sense. Developed with React, Vite and SASS preprocessor."
        page={"https://dark-ambient-formulary.vercel.app/"}
        repository={"https://github.com/MartinXCVI/Dark-Ambient-Formulary"}
      />
      <ProjectCard
        aosAnim="zoom-out-down" 
        aosDuration="1500" 
        aosDelay="750"
        title="Coporate Site"
        img="/images/covers/corporate-cover.webp"
        description="Formal and grayish yet elegantly catching corporate website. Developed with React libraries and React Bootstrap. General purpose driven for most kinds of companies as a simple but attractive landing page solution."
        page={"https://react-corporate-rd.vercel.app/"}
        repository={"https://github.com/MartinXCVI/react-corporate"}
      />
    </section>
  )
}

export default WebsitesProjects