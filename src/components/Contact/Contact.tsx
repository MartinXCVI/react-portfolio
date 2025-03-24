import { JSX } from 'react'
import ContactForm from './ContactForm'
import ContactCard from './ContactCard'

const Contact = (): JSX.Element => {

  return (
    <section className="contact-section wrapper" id='contact-wrapper'>
      <ContactCard />
      <ContactForm />
    </section>
  )
}

export default Contact