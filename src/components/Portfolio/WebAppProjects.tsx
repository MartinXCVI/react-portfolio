import WebAppCard from './WebAppCard'
import { JSX } from "react"

const AppProjects = (): JSX.Element => {
  
  return (
    <section className="portfolio-projects">
      <WebAppCard
        aosAnim="zoom-out-down"
        aosDuration="1500"
        aosDelay="300"
        title="WorkNotes"
        img="/images/covers/worknotes-cover.webp"
        description="WorkNotes is a full-stack app built with MERN and Redux that helps professionals stay organized. It’s designed for creating, editing, and managing notes effortlessly, combining different features with a clean, user-friendly interface"
        repository="https://github.com/MartinXCVI/worknotes-api"
      />
      <WebAppCard
        aosAnim="zoom-out-down"
        aosDuration="1500"
        aosDelay="300"
        title="Chat App"
        img="/images/covers/chat-app-cover.webp"
        description="This MERN Chat App lets users connect in real-time with ease. Built with Socket.IO, TailwindCSS, and DaisyUI, it combines a modern, responsive design with smooth messaging features for an enjoyable and intuitive chatting experience"
        repository="https://github.com/MartinXCVI/mern-chat-app"
      />
      <WebAppCard
        aosAnim="zoom-out-down"
        aosDuration="1500"
        aosDelay="300"
        title="Markdown Blog"
        img="/images/covers/markdown-blog-cover.webp"
        description="This markdown-powered blog, built with Astro, SASS, and JavaScript, keeps things simple and fast by using markdown files for posts. It’s sleek, responsive, and perfect for sharing ideas without the complexity of a database"
        repository="https://github.com/MartinXCVI/astro-blog"
      />
    </section>
  )
}

export default AppProjects