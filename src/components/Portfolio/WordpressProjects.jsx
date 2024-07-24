import WPCard from './WPCard'

const WordpressProjects = () => {
  return (
    <>
      <section className="portfolio-projects">
        <WPCard 
          title="Personal Website"
          img="/images/project-image.jpg"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          page={"https://personal-website.free.nf/"}
        />
        <WPCard 
          title="Wordpress Blog"
          img="/images/project-image.jpg"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          page={"https://wordpress-blog.free.nf/"}
        />
        <WPCard 
          title="Wordpress Site?"
          img="/images/project-image.jpg"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          page={"https://personal-website.free.nf/"}
        />
      </section>
    </>
  )
}

export default WordpressProjects