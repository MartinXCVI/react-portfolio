import AboutCard from './AboutCard'
import { JSX } from "react"

const About = (): JSX.Element => {
  return (
    <section className="about-wrapper wrapper" id='about-wrapper'>
      <AboutCard />
    </section>
  )
}

export default About