import { myInfo } from "../../data/myInfo";
import { FaGithub } from "react-icons/fa";

const DevSignature = () => {

  const { myGithub } = myInfo
  const getCurrentYear = ()=> { return ( new Date().getFullYear() ) }

  return (
    <div className='dev-signature-div'>
      <p className='dev-signature'>
        <span>© { getCurrentYear() } </span>
        <a
          className='dev-github'
          href={myGithub}
          target='_blank'
          rel='noopener noreferrer'
        >
         MartinXCVI <FaGithub />
        </a> | All rights reserved
      </p>
    </div>
  )
}

export default DevSignature