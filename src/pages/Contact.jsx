import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { FaMapMarkerAlt, FaEnvelope, FaPhone, FaPaperPlane } from "react-icons/fa"
import "./Contact.css"
import emailjs from '@emailjs/browser';


const Contact = () => {
  useEffect(() => {
    emailjs.init("XXXXXXXX");
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    message: "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    
    emailjs.send(
      'service_rdo6mcp',
      'YOUR_TEMPLATE_ID', // Replace with your template ID from EmailJS
      {
        from_name: formData.name,
        to_name: 'Raghvendra',
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
      },
      'YOUR_PUBLIC_KEY' // Replace with your public key from EmailJS
    )
    .then((response) => {
      setFormStatus({
        submitted: true,
        success: true,
        message: "Message sent successfully!",
      });
      // Reset form
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    })
    .catch((error) => {
      setFormStatus({
        submitted: true,
        success: false,
        message: "Failed to send message. Please try again.",
      });
    });
  };

  return (
    <section className="contact">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Get In Touch
      </motion.h2>

      <motion.p
        className="section-subtitle"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Feel free to contact me for any work or suggestions.
      </motion.p>

      <div className="contact-container">
        <motion.div
          className="contact-info"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="info-item">
            <FaMapMarkerAlt className="info-icon" />
            <div>
              <h3>Location</h3>
              <p>India</p>
            </div>
          </div>

          <div className="info-item">
            <FaEnvelope className="info-icon" />
            <div>
              <h3>Email</h3>
              <p>techbite88@gmail.com</p>
            </div>
          </div>

          <div className="info-item">
            <FaPhone className="info-icon" />
            <div>
              <h3>Phone</h3>
              <p>+91 8601356769</p>
            </div>
          </div>

          <div className="contact-map">
            <img src="/images/enhanced.webp" alt="Map" />
          </div>
        </motion.div>

        <motion.div
          className="contact-form"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <button type="submit" className="btn primary">
              <FaPaperPlane /> Send Message
            </button>

            {formStatus.submitted && (
              <div className={`form-status ${formStatus.success ? "success" : "error"}`}>{formStatus.message}</div>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact

