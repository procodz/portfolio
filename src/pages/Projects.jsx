import { useState } from "react"
import { motion } from "framer-motion"
import ProjectCard from "../components/ProjectCard"
import "./Projects.css"

const Projects = () => {
  const [filter, setFilter] = useState("all")

  const projects = [
    {
      id: 1,
      title: "Smart Assistant",
      description:
        "A chatbot using OpenAI GPT-4, LangChain, and ChromaDB to answer queries with Retrieval-Augmented Generation (RAG). Enables dynamic context updates via file uploads and retains conversation history.",
      image: "/images/assit.webp",
      technologies: ["OpenAI GPT-4", "LangChain", "ChromaDB", "Streamlit", "PyPDF2", "Python"],
      category: "ai",
      github: "https://github.com/",
      live: "https://example.com/",
    },
    {
      id: 2,
      title: "Nerdhive.in",
      description:
        "A full-stack social media cum project management platform with user authentication, connection requests, and real-time collaboration for projects, tasks, and team management.",
        image: "/images/nerdhive.webp",
      technologies: ["MongoDB", "Express.js", "React.js", "Node.js", "Socket.io", "AWS", "Git"],
      category: "web",
      github: "https://github.com/",
      live: "https://nerdhive.in/",
    },
    {
      id: 3,
      title: "CodeLens",
      description:
        "An automated code review system using Python and React with multiple AI agents for code analysis. Specialized AI agents for security, performance, documentation, and code style validation.",
      image: "/images/codelens.webp",
      technologies: ["Python", "React", "AI/ML", "Git", "REST"],
      category: "ai",
      github: "https://github.com/",
      live: "https://example.com/",
    },
  ]

  const filteredProjects = filter === "all" ? projects : projects.filter((project) => project.category === filter)

  return (
    <section className="projects">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        My Projects
      </motion.h2>

      <motion.p
        className="section-subtitle"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        Here are some of my recent projects that showcase my skills and experience.
      </motion.p>

      <motion.div
        className="project-filters"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        <button className={`filter-btn ${filter === "all" ? "active" : ""}`} onClick={() => setFilter("all")}>
          All
        </button>
        <button className={`filter-btn ${filter === "web" ? "active" : ""}`} onClick={() => setFilter("web")}>
          Web Development
        </button>
        <button className={`filter-btn ${filter === "ai" ? "active" : ""}`} onClick={() => setFilter("ai")}>
          AI Projects
        </button>
      </motion.div>

      <div className="projects-grid">
        {filteredProjects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </section>
  )
}

export default Projects

