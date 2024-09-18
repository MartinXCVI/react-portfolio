import PropTypes from "prop-types"

const ServiceCard = ({ img, alt, title, text }) => {
  return (
    <div className="service-card" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
      <figure className="service-fig">
        <img src={img} alt={alt} />
      </figure>
      <h3 className="service-title">{title}</h3>
      <p className="service-text">
        {text}
      </p>
    </div>
  )
}

ServiceCard.propTypes = {
  img: PropTypes.string,
  alt: PropTypes.string,
  title: PropTypes.string,
  text: PropTypes.string,
}

export default ServiceCard