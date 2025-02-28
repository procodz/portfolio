import { motion } from "framer-motion"
import { FaBriefcase, FaGraduationCap } from "react-icons/fa"
import "./Experience.css"

const Experience = () => {
  const workExperience = [
    {
      id: 1,
      title: "Full Stack Developer",
      company: "AI-Security-Research-Group",
      location: "Bangalore, India",
      period: "July 2024 - Present",
      description: "Currently helping the group building AI driven security solutions and PoCs.",
    },
  ]

  const education = [
    {
      id: 1,
      degree: "B.Tech (Information Technology)",
      institution: "Axis Institute of Technology",
      location: "Kanpur, India",
      period: "June 2018 - June 2022",
      description:
        "Led the team in the final year major project AI based mock-interview system in college resulting in timely execution of the project.",
    },
  ]

  return (
    <section className="experience">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Experience & Education
      </motion.h2>

      <motion.p
        className="section-subtitle"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        My professional journey and educational background.
      </motion.p>

      <div className="timeline">
        <div className="timeline-section">
          <div className="timeline-header">
            <FaBriefcase className="timeline-icon" />
            <h3>Work Experience</h3>
          </div>

          {workExperience.map((job, index) => (
            <motion.div
              key={job.id}
              className="timeline-item"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
            >
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h4>{job.title}</h4>
                <h5>{job.company}</h5>
                <p className="timeline-location">{job.location}</p>
                <p className="timeline-period">{job.period}</p>
                <p className="timeline-description">{job.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="timeline-section">
          <div className="timeline-header">
            <FaGraduationCap className="timeline-icon" />
            <h3>Education</h3>
          </div>

          {education.map((edu, index) => (
            <motion.div
              key={edu.id}
              className="timeline-item"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
            >
              <div className="timeline-dot"></div>
              <div className="timeline-content">
                <h4>{edu.degree}</h4>
                <h5>{edu.institution}</h5>
                <p className="timeline-location">{edu.location}</p>
                <p className="timeline-period">{edu.period}</p>
                <p className="timeline-description">{edu.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Experience

