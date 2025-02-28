import { motion } from "framer-motion"
import SkillBar from "../components/SkillBar"
import { FaCode, FaServer, FaDatabase, FaTools, FaRobot } from "react-icons/fa"
import "./Skills.css"

const Skills = () => {
  const frontendSkills = [
    { name: "HTML/CSS", level: 90 },
    { name: "JavaScript", level: 85 },
    { name: "React.js", level: 80 },
    { name: "Redux", level: 75 },
  ]

  const backendSkills = [
    { name: "Node.js", level: 85 },
    { name: "Express.js", level: 80 },
    { name: "Python", level: 75 },
    { name: "C/C++", level: 70 },
  ]

  const databaseSkills = [
    { name: "MongoDB", level: 85 },
    { name: "SQL", level: 70 },
  ]

  const aiSkills = [
    { name: "LangChain", level: 80 },
    { name: "Hugging Face", level: 75 },
    { name: "RAG", level: 85 },
    { name: "CrewAI", level: 70 },
    { name: "Prompt Engineering", level: 80 },
  ]

  const toolsSkills = [
    { name: "Git", level: 85 },
    { name: "AWS", level: 75 },
    { name: "NGINX", level: 70 },
    { name: "PM2", level: 75 },
    { name: "Postman", level: 80 },
  ]

  return (
    <section className="skills">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        My Skills
      </motion.h2>

      <motion.p
        className="section-subtitle"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Here are my technical skills and proficiency levels.
      </motion.p>

      <div className="skills-container">
        <motion.div
          className="skill-category"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="category-header">
            <FaCode className="category-icon" />
            <h3>Frontend</h3>
          </div>
          <div className="skill-list">
            {frontendSkills.map((skill, index) => (
              <SkillBar key={index} skill={skill.name} level={skill.level} index={index} />
            ))}
          </div>
        </motion.div>

        <motion.div
          className="skill-category"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <div className="category-header">
            <FaServer className="category-icon" />
            <h3>Backend</h3>
          </div>
          <div className="skill-list">
            {backendSkills.map((skill, index) => (
              <SkillBar key={index} skill={skill.name} level={skill.level} index={index} />
            ))}
          </div>
        </motion.div>

        <motion.div
          className="skill-category"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <div className="category-header">
            <FaDatabase className="category-icon" />
            <h3>Database</h3>
          </div>
          <div className="skill-list">
            {databaseSkills.map((skill, index) => (
              <SkillBar key={index} skill={skill.name} level={skill.level} index={index} />
            ))}
          </div>
        </motion.div>

        <motion.div
          className="skill-category"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <div className="category-header">
            <FaRobot className="category-icon" />
            <h3>AI & ML</h3>
          </div>
          <div className="skill-list">
            {aiSkills.map((skill, index) => (
              <SkillBar key={index} skill={skill.name} level={skill.level} index={index} />
            ))}
          </div>
        </motion.div>

        <motion.div
          className="skill-category"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          <div className="category-header">
            <FaTools className="category-icon" />
            <h3>Tools & Deployment</h3>
          </div>
          <div className="skill-list">
            {toolsSkills.map((skill, index) => (
              <SkillBar key={index} skill={skill.name} level={skill.level} index={index} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills

