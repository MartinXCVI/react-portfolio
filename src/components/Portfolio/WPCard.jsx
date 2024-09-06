import PropTypes from 'prop-types'
import { FaRegEye } from "react-icons/fa";

function Project({ aosAnim, aosDuration, aosDelay, title, img, description, page }) {

  return (
    <div className='project-div' data-aos={aosAnim} data-aos-duration={aosDuration} data-aos-delay={aosDelay}>
      <h4 className='project-name'>{title}</h4>
      <figure className='project-fig'>
        <a className="project-cover-link" href={page} target='_blank'>
          <img src={img} className='project-img' alt={title} />
        </a>
      </figure>
      <p className='project-description'>{description}</p>
      <div className="project-links-div">
        <a
          className='project-link' 
          href={page}
          rel='noopener noreferrer' 
          target='_blank'
        >
          Preview <FaRegEye className='project-link-icon' />
        </a>
      </div>
    </div>
  )
}

Project.propTypes = {
  aosAnim: PropTypes.string,
  aosDuration: PropTypes.string,
  aosDelay: PropTypes.string,
  title: PropTypes.string,
  img: PropTypes.string,
  description: PropTypes.string,
  page: PropTypes.string,
}

export default Project