import BackCard from './BackCard'
import { JSX } from "react"

const BackendProjects = (): JSX.Element => {
  
  return (
    <section className="portfolio-projects">
      <BackCard
        aosAnim="zoom-out-down"
        aosDuration="1500"
        aosDelay="0" 
        title="Node.js Web Server"
        img="/images/covers/node-web-server-cover.webp"
        description="This minimalist and lightweight Node.js web server was built from scratch without frameworks to ensure simplicity and efficiency. It’s a clean, flexible and scalable solution that can be adapted for APIs, web apps, or as a practical learning tool for beginner developers."
        repository={"https://github.com/MartinXCVI/node-web-server"}
      />
      <BackCard
        aosAnim="zoom-out-down"
        aosDuration="1500"
        aosDelay="0" 
        title="Ecommerce API"
        img="/images/covers/ecommerce-api-cover.webp"
        description="An ecommerce API, built with Node.js, Express and MongoDB, handles products, users, and orders with secure CRUD operations. It’s designed to be flexible and modular, making it a strong foundation for creating scalable, customizable online shopping platforms."
        repository={"https://github.com/MartinXCVI/node-ecommerce-api"}
      />
      <BackCard
        aosAnim="zoom-out-down"
        aosDuration="1500"
        aosDelay="0" 
        title="Password Manager"
        img="/images/covers/password-manager-cover.webp"
        description="A secure command-line password manager built with Python, featuring AES encryption, SHA-256 hashing, and a local database for safe credential storage. It provides password generation, retrieval, and management through a CLI industry-standard cryptographic practices."
        repository={"https://github.com/MartinXCVI/password-manager"}
      />
    </section>
  )
}

export default BackendProjects