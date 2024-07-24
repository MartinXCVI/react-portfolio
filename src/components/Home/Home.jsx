import './Home.css'

function Home() {
  return (
    <section className='home-wrapper'>
      <section className='home-section'>
        <article className='dev-description'>
          <h2 className='dev-name'>Martín Daniel Aguirre</h2>
          <h2 className='dev-job'>Full Stack Developer</h2>
          <br />
          <p className='dev-para'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cumque tempora obcaecati in magnam architecto ratione?</p>
          <p className='dev-para'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tenetur, sapiente.</p>
          <p className='dev-para'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquam magni alias a molestiae maiores voluptates autem repudiandae quibusdam quae impedit.</p>
          <section className='dev-buttons-section'>
            <button>GitHub</button>
            <button>LinkedIn</button>
          </section>
        </article>
        <figure className='profile-fig'>
          <img src="/images/dev-profile-pic.png" className='profile-img' alt="Profile picture of Martín" />
        </figure>
      </section>
    </section>
  )
}

export default Home