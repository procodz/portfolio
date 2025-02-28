
import { useState, useEffect } from "react"
import { Link, useLocation } from "react-router-dom"
import { motion } from "framer-motion"
import "./Navbar.css"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    setIsOpen(false)
  }, [])

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Skills", path: "/skills" },
    { name: "Experience", path: "/experience" },
    { name: "Contact", path: "/contact" },
  ]

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar-container">
        <Link to="/" className="logo">
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
            RK
          </motion.div>
        </Link>

        <div className={`menu-toggle ${isOpen ? "active" : ""}`} onClick={() => setIsOpen(!isOpen)}>
          <div className="hamburger"></div>
        </div>

        <ul className={`nav-links ${isOpen ? "active" : ""}`}>
          {navItems.map((item, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <Link to={item.path} className={location.pathname === item.path ? "active" : ""}>
                {item.name}
                {location.pathname === item.path && (
                  <motion.div className="active-indicator" layoutId="activeIndicator" />
                )}
              </Link>
            </motion.li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar

