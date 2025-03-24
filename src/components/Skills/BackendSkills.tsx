import { JSX } from "react"
import SkillsCard from "./SkillsCard"

//---- techicons.dev icons imports
// Backend icons
import Javaicon from './Skills-Icons/Backend-Icons/Javaicon';
import MongoDBicon from './Skills-Icons/Backend-Icons/MongoDBicon';
import Nodeicon from './Skills-Icons/Backend-Icons/Nodeicon';
import Expressicon from './Skills-Icons/Backend-Icons/Expressicon';
import PHPicon from './Skills-Icons/Backend-Icons/PHPicon';
import MySQLicon from './Skills-Icons/Backend-Icons/MySQLicon';


const BackendSkills = (): JSX.Element => {

  return (
    <>
      <h3
        className='text-white'
        data-aos="fade-right"
        data-aos-duration="1000"
      >
        Backend Development
      </h3>
      <section className='skills-container' data-aos="fade-left" data-aos-duration="1050" data-aos-once="true">
        <div className="skills-subcontainer">
          <SkillsCard 
            skillName={"Java"}
            skillIcon={<Javaicon />}
          />
          <SkillsCard 
            skillName={"MongoDB"}
            skillIcon={<MongoDBicon />}
          />
          <SkillsCard 
            skillName={"Node.js"}
            skillIcon={<Nodeicon />}
          />
          <SkillsCard 
            skillName={"Express"}
            skillIcon={<Expressicon />}
          />
          <SkillsCard 
            skillName={"PHP"}
            skillIcon={<PHPicon />}
          />
          <SkillsCard 
            skillName={"MySQL"}
            skillIcon={<MySQLicon />}
          />
        </div>
      </section>
    </>
  )
}

export default BackendSkills