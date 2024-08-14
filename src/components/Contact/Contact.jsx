import ContactForm from './ContactForm'
import ContactCard from './ContactCard'

const Contact = () => {
  return (
    <>
      <section className="contact-section" id='contact-wrapper'>
        <ContactCard />
        <ContactForm />
      </section>
    </>
  )
}

export default Contact