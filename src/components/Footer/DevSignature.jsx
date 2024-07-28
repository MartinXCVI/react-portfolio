import './DevSignature.css'
import { FaGithub } from "react-icons/fa";

const DevSignature = () => {
  return (
    <div className='dev-signature-div'>
      <p className='dev-signature'>
        <a
          className='dev-github'
          href='https://github.com/MartinXCVI/'
          target='_blank'
        >
          MartinXCVI <FaGithub />
        </a> | All rights reserved
      </p>
    </div>
  )
}

export default DevSignature