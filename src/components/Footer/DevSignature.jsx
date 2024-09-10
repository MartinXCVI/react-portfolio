import { myInfo } from "../../data/myInfo";

import { FaGithub } from "react-icons/fa";

const DevSignature = () => {

  const { myGithub } = myInfo

  return (
    <div className='dev-signature-div'>
      <p className='dev-signature'>
        <a
          className='dev-github'
          href={myGithub}
          target='_blank'
        >
          MartinXCVI <FaGithub />
        </a> | All rights reserved
      </p>
    </div>
  )
}

export default DevSignature