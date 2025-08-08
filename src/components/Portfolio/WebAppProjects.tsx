import WebAppCard from './WebAppCard'
import { JSX } from "react"

const AppProjects = (): JSX.Element => {
  
  return (
    <section className="portfolio-projects">
      <WebAppCard
        aosAnim="zoom-out-down"
        aosDuration="1500"
        aosDelay="300"
        title="MERN Auth System"
        img="/images/covers/mern-auth-system-cover.webp"
        description="The MERN Auth System is a secure full-stack authentication app built with MERN and TypeScript. It enables users to sign up, log in, and verify their accounts, with an OTP-based password reset for recovering access."
        repository="https://github.com/MartinXCVI/mern-auth-system"
      />
      <WebAppCard
        aosAnim="zoom-out-down"
        aosDuration="1500"
        aosDelay="300"
        title="Chat App"
        img="/images/covers/chat-app-cover.webp"
        description="A MERN chat app to connect and share in real time. Built with Socket.IO, TailwindCSS, and DaisyUI, image uploads through Cloudinary, and secure authentication. Zustand for state management and Zod for input validation."
        repository="https://github.com/MartinXCVI/mern-chat-app"
      />
      <WebAppCard
        aosAnim="zoom-out-down"
        aosDuration="1500"
        aosDelay="300"
        title="MDX Blog"
        img="/images/covers/mdx-blog-cover.webp"
        description="This MDX-powered blog, built with Next.js and TailwindCSS, keeps things fast and flexible by using MDX files for posts. Modern, practical and responsive. A good choice for sharing ideas without relying on a database."
        repository="https://github.com/MartinXCVI/simple-next-mdx-blog"
      />
    </section>
  )
}

export default AppProjects