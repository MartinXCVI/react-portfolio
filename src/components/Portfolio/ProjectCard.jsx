import PropTypes from 'prop-types'
import { FaRegEye } from "react-icons/fa";
import { RiGitRepositoryLine } from "react-icons/ri";

function Project({ title, img, description, page, repository }) {

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
          Preview <FaRegEye className='project-link-icon' />
        </a>
        <a
          className='project-link'  
          href={repository}
          rel='noopener noreferrer' 
          target='_blank'
        >
          Repository <RiGitRepositoryLine className='project-link-icon' />
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
  repository: PropTypes.string
}

export default Project