import BackCard from './BackCard'


const BackendProjects = () => {
  return (
    <>
      <section className="portfolio-projects">
        <BackCard
          aosAnim="zoom-out-down"
          aosDuration="1500"
          aosDelay="0" 
          title="Node.js Web Server"
          img="/images/covers/node-web-server-cover.webp"
          description="This minimalist and lightweight Node.js web server was built from scratch without frameworks to ensure simplicity and efficiency. It’s a clean, flexible and scalable solution that can be adapted for APIs, web apps, or as a good and practical learning tool for beginner developers."
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
          title="Web Scraper"
          img="/images/covers/web-scraper-cover.webp"
          description="Using Node.js and Puppeteer, this web scraper automates data extraction from dynamic websites. It’s perfect for tasks like tracking prices or gathering statistics and serves as a versatile tool for simplifying repetitive or data-intensive backend workflows."
          repository={"https://github.com/MartinXCVI/node-web-scraper"}
        />
      </section>
    </>
  )
}

export default BackendProjects