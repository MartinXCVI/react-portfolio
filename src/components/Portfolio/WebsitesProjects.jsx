import ProjectCard from './ProjectCard'

const WebsitesProjects = () => {

  return (
    <>
      <section className="portfolio-projects">
        <ProjectCard
          title="Bakery"
          img="/images/project-image.jpg"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          page={"https://bakery-rd.vercel.app/"}
          repository={"https://github.com/MartinXCVI/bakery"}
        />
        <ProjectCard 
          title="PelículasCAC"
          img="/images/project-image.jpg"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          page={"https://martinxcvi.github.io/PeliculasCAC/"}
          repository={"https://github.com/MartinXCVI/PeliculasCAC"}
        />
        <ProjectCard 
          title="CV Website"
          img="/images/project-image.jpg"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          page={"https://cv-website-rd.vercel.app/"}
          repository={"https://github.com/MartinXCVI/cv-website"}
        />
      </section>
    </>
  )
}

export default WebsitesProjects