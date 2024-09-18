import ServiceCard from "./ServiceCard"


const Services = () => {
  

  return (
    <section className="services-wrapper" id="services-wrapper">
      <h2 className="subtitle" data-aos="fade-down" data-aos-duration="1000">Services</h2>
      <hr className='breakline' data-aos="zoom-in" data-aos-duration="1500" />
      <section className="services-section">
        <ServiceCard 
          img={'/icons/responsive.png'}
          alt={'alt'}
          title={'responsive & adaptive'}
          text={'Your site will display correctly in any device, be it desktop, phones or tablets. Making it adaptive and accessible is a must in today\'s web standards for enhancing users\' experience'}
        />
        <ServiceCard 
          img={'/icons/clean-design.png'}
          alt={'alt'}
          title={'clean design'}
          text={'Your website is your presentation card; it should be catching, attractive and intuitive. Simple and clean designs are a proven methodology for attracting potential clients'}
        />
        <ServiceCard 
          img={'/icons/fast.png'}
          alt={'alt'}
          title={'fast & optimized'}
          text={'Latest technologies, general best practices, proper structuring and resources handling for reaching a decent performance. Faster websites rank better in search engines'}
        />
        <ServiceCard 
          img={'/icons/hosting.png'}
          alt={'alt'}
          title={'secure hosting'}
          text={'Safe hosting for your tranquility and its selection based on the best alternative depending on your area. Fees included in the monthly payment of the website\'s maintenance plan'}
        />
        <ServiceCard 
          img={'/icons/domain.png'}
          alt={'alt'}
          title={'custom domain'}
          text={'A good and easy to remember domain name is essential for your business online presence success, credibility and professionalism. Having a domain will set you apart from the competition'}
        />
        <ServiceCard 
          img={'/icons/maintenance.png'}
          alt={'alt'}
          title={'maintenance & support'}
          text={'Unlimited modifications and editing of design details in your existing project. Your site will be maintained, updated and will remain functional. All included in the monthly pay plan'}
        />
      </section>
    </section>
  )
}

export default Services