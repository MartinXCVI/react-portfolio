import './Project.scss'
import WPCard from './WPCard'

const WordpressProjects = () => {
  return (
    <>
      <section className="portfolio-projects">
        <WPCard 
          title="Personal Website"
          img="/images/covers/personal-website-cover.webp"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          page={"https://personal-website.free.nf/"}
        />
        <WPCard 
          title="Travel Blog"
          img="/images/covers/wordpress-blog-cover.webp"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          page={"https://wordpress-blog.free.nf/"}
        />
        <WPCard 
          title="Clothing Store"
          img="/images/covers/online-store-cover.webp"
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
          page={"https://clothing-store.free.nf/"}
        />
      </section>
    </>
  )
}

export default WordpressProjects