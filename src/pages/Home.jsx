import { motion } from "framer-motion"
import { Link } from "react-router-dom"
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa"
import "./Home.css"

const Home = () => {
  return (
    <section className="home">
      <div className="home-content">
        <div className="home-text">
          <motion.h1 initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            Hi, I'm <span className="highlight">Raghvendra</span>
          </motion.h1>

          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Full Stack Developer
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Specializing in web development and AI solutions. Passionate about creating secure, scalable AI-driven
            applications with expertise in MERN stack and Python.
          </motion.p>

          <motion.div
            className="home-buttons"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Link to="/projects" className="btn primary">
              View Projects
            </Link>
            <Link to="/contact" className="btn secondary">
              Contact Me
            </Link>
          </motion.div>

          <motion.div
            className="home-social"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <a href="https://github.com/" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FaGithub />
            </a>
            <a href="https://linkedin.com/in/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedin />
            </a>
            <a href="mailto:techbite88@gmail.com" aria-label="Email">
              <FaEnvelope />
            </a>
          </motion.div>
        </div>

        <motion.div
          className="home-image"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="image-container">
            <img src="/images/enhanced.webp" alt="Raghvendra Kumar" />
          </div>
        </motion.div>
      </div>

      {/* <motion.div
        className="scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
      >
        <div className="mouse">
          <div className="wheel"></div>
        </div>
        <div className="arrow">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </motion.div> */}
    </section>
  )
}

export default Home

