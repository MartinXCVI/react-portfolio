import './Project.css'
import PropTypes from 'prop-types'

function Project({ title, img, description }) {

  return (
    <div className='project-div'>
      <h4 className='project-name'>{title}</h4>
      <figure className='project-fig'>
      <img src={img} className='project-img' alt={title} />
      </figure>
      <p className='project-description'>{description}</p>
    </div>
  )
}

Project.propTypes = {
  title: PropTypes.string,
  img: PropTypes.string,
  description: PropTypes.string
}

export default Project