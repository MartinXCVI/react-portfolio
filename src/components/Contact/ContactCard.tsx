import { JSX } from "react"

const ContactCard = (): JSX.Element => {
  return (
    <section className="contact-card" data-aos="fade-up" data-aos-duration="1000">
      <h2 className='contact-card-title text-white'>Contact me</h2>
      <p className="text-white">
        Let&apos;s keep in touch! I typically reply within 24 hours as the maximum range of time. If I&apos;m not busy, I&apos;ll send you an email in just a matter of minutes.
      </p>
    </section>
  )
}

export default ContactCard