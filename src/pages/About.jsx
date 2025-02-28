import { motion } from "framer-motion"
import { FaDownload } from "react-icons/fa"
import "./About.css"


const About = () => {
  return (
    <section className="about">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        About Me
      </motion.h2>

      <div className="about-content">
        <motion.div
          className="about-image"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {/* <img src="/placeholder.svg?height=400&width=400" alt="Raghvendra Kumar" />
           */}
          <img src="/images/enhanced.webp" alt="Raghvendra Kumar" />
        </motion.div>

        <motion.div
          className="about-text"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h3>Full Stack Developer & AI Enthusiast</h3>

          <p>
            I'm a passionate Full Stack Developer specializing in web development and AI solutions. With expertise in
            the MERN stack and Python, I build secure, scalable applications that solve real-world problems.
          </p>

          <p>
            My journey in software development began during my B.Tech in Information Technology, where I developed a
            strong foundation in programming fundamentals. Since then, I've worked on various projects ranging from
            social media platforms to AI-powered tools.
          </p>

          <p>
            Currently, I'm working with the AI-Security-Research-Group, helping build AI-driven security solutions and
            proof of concepts. I'm particularly interested in the intersection of AI and web development, creating
            intelligent applications that enhance user experiences.
          </p>

          <div className="about-details">
            <div className="detail-item">
              <span className="detail-label">Name:</span>
              <span className="detail-value">Raghvendra Kumar</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Email:</span>
              <span className="detail-value">techbite88@gmail.com</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Phone:</span>
              <span className="detail-value">+91 8601356769</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Location:</span>
              <span className="detail-value">India</span>
            </div>
          </div>

          <a href="/Raghvendra_Kumar_software_developer.pdf" download className="btn primary">
            <FaDownload /> Download Resume
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default About

