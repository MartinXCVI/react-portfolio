import { IWPCard } from "../../interfaces/IWPCard";
import { FaRegEye } from "react-icons/fa";
import { JSX } from "react"

const WPCard = ({ aosAnim, aosDuration, aosDelay, title, img, description, page }: IWPCard): JSX.Element => {

  return (
    <div className='project-div' data-aos={aosAnim} data-aos-duration={aosDuration} data-aos-delay={aosDelay} data-aos-once="true">
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

export default WPCard