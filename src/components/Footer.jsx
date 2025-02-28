import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <motion.div
          className="footer-logo"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h2>Raghvendra Kumar</h2>
          <p>Software Developer</p>
        </motion.div>

        <div className="footer-links">
          <motion.div
            className="social-links"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <a
              href="https://github.com/procodz"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/raghvendra88/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=techbite88@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Gmail"
            >
              <FaEnvelope />
            </a>
            <a href="tel:+918299486619" aria-label="Phone">
              <FaPhone />
            </a>
          </motion.div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>
          &copy; {new Date().getFullYear()} Raghvendra Kumar. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
