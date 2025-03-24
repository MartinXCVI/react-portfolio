import { JSX } from "react";
import { myInfo } from "../../data/myInfo";
import { FaGithub } from "react-icons/fa";
import { getCurrentYear } from "../../utils/getCurrentYear";


const DevSignature = (): JSX.Element => {

  const { myGithub } = myInfo
 
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