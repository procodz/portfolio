import { motion } from "framer-motion"
import "./SkillBar.css"

const SkillBar = ({ skill, level, index }) => {
  return (
    <div className="skill-bar">
      <div className="skill-info">
        <span className="skill-name">{skill}</span>
        <span className="skill-level">{level}%</span>
      </div>
      <div className="skill-progress">
        <motion.div
          className="skill-progress-bar"
          initial={{ width: 0 }}
          animate={{ width: `${level}%` }}
          transition={{ duration: 1, delay: index * 0.1 }}
        />
      </div>
    </div>
  )
}

export default SkillBar

