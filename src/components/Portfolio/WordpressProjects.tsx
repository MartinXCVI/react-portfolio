import WPCard from "./WPCard"
import { JSX } from "react"

const WordpressProjects = (): JSX.Element => {
  
  return (
    <section className="portfolio-projects">
      <WPCard
        aosAnim="zoom-out-up" 
        aosDuration="1500"
        aosDelay="0" 
        title="Personal Website"
        img="/images/covers/wp-personal-cover.webp"
        description="Personal website with Wordpress. Elementor building and structuring tools, Starter Templates, WPForms Lite plugin for contact form. Adventurous charm and nature-oriented aesthetic. Easily modifiable for any kind of individual porpuse."
        page={"https://personal-website.free.nf/"}
      />
      <WPCard
        aosAnim="zoom-out-up" 
        aosDuration="1500"
        aosDelay="150" 
        title="Travel Blog"
        img="/images/covers/wp-blog-cover.webp"
        description="Timeless and classic Wordpress blog for a traveler or entrepreneur. Developed with Elementor and Unlimited Elements tools. WPForms Lite for contact form, and Instagram feed integration. Naturalistic while thought-provoking design."
        page={"https://wordpress-blog.free.nf/"}
      />
      <WPCard
        aosAnim="zoom-out-up" 
        aosDuration="1500"
        aosDelay="300" 
        title="Clothing Store"
        img="/images/covers/wp-store-cover.webp"
        description="WooCommerce website about a generic clothing store for men, women and children. Structured with Elementor, Header & Footer builder, WPForms Lite for contacting, payments via Stripe, lateral cart, easy checkout process, and custom plugins."
        page={"https://clothing-store.free.nf/"}
      />
    </section>
  )
}

export default WordpressProjects