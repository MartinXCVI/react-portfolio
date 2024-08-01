import './Project.scss'
import PropTypes from 'prop-types'

function Project({ title, img, description, page }) {

  return (
    <div className='project-div'>
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
          Preview
        </a>
      </div>
      
    </div>
  )
}

Project.propTypes = {
  title: PropTypes.string,
  img: PropTypes.string,
  description: PropTypes.string,
  page: PropTypes.string,
}

export default Project