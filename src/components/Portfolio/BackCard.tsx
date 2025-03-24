import { RiGitRepositoryLine } from "react-icons/ri";
import { IBackCardProps } from "../../interfaces/IBackCardProps";
import { JSX } from "react"


const BackCard = (
  { aosAnim, aosDuration, aosDelay, title, img, description, repository }: IBackCardProps
): JSX.Element => {

  return (
    <div className='project-div' data-aos={aosAnim} data-aos-duration={aosDuration} data-aos-delay={aosDelay} data-aos-once="true">
      <h4 className='project-name'>{title}</h4>
      <figure className='project-fig'>
        <a
          className="project-cover-link"
          href={repository}
          target='_blank'
          rel="noopener noreferrer"
        >
          <img src={img} className='project-img' alt={title} />
        </a>
      </figure>
      <p className='project-description'>{description}</p>
      <div className="project-links-div">
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

export default BackCard