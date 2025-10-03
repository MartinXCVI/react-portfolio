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
        description="Delicate and beautiful website for a bakery. Developed with the Astro Framework, GSAP animations, 'Tiny slider' library for images eye-catching display, 'Leaflet' library for localization, and a bit yet enough amount of TypeScript."
        page={"https://bakery-rd.vercel.app/"}
        repository={"https://github.com/MartinXCVI/bakery"}
      />
      <ProjectCard 
        aosAnim="zoom-out-down" 
        aosDuration="1500"
        aosDelay="450"
        title="Landscapist"
        img="/images/covers/landscapist-cover.webp"
        description="Clean and beautiful design for a landscapist/landscaper, gardener, or arborist website alternatively. Developed with the Astro Framework, TypeScript, AOS libraries and SCSS. Contact form functionality with Web3Forms."
        page={"https://landscapist.vercel.app/"}
        repository={"https://github.com/MartinXCVI/landscapist"}
      />
      <ProjectCard
        aosAnim="zoom-out-down" 
        aosDuration="1500" 
        aosDelay="750"
        title="Psychotherapist Site"
        img="/images/covers/psychotherapist-site-cover.webp"
        description="Clean and beautiful design for a psychotherapist, mental health professional, or life coach website alternatively. Developed with Astro, Bootstrap components and SCSS. Contact form functionality with Web3Forms."
        page={"https://psychotherapist-site.vercel.app/"}
        repository={"https://github.com/MartinXCVI/psychotherapist-site"}
      />
    </section>
  )
}

export default WebsitesProjects