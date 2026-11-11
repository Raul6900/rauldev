import { motion } from "framer-motion";
import "../css/Portfolio.css";
import projectScreenshot from "../assets/taxe.ro.png"; 
import projectScreenshot1 from "../assets/atom.png"; 
import muzbook from "../assets/muzbook.png";
import garagehub from "../assets/garagehub.png";

const projectsData = [
  {
    id: "atom",
    title: "Atom Services",
    link: "https://atomservices.ro/",
    image: projectScreenshot1,
    description: "Co-Founder of Atom Services, a freelance company dedicated to providing top-notch web development and design solutions for clients.",
    techStack: ["React", "Node.js", "Next.js", "CSS", "Framer Motion", "Tailwind"]
  },
  {
    id: "muzbook",
    title: "MuzBoard",
    link: "https://muzboard.atomservices.ro/",
    image: muzbook,
    description: "Founder & CEO of MuzBoard, a music booking platform that helps users find new artists and tracks based on their listening habits and preferences.",
    techStack: ["React", "Next.js", "Tailwind", "Framer Motion"]
  },
  {
    id: "taxero",
    title: "Taxe.ro",
    link: "https://taxe-ro-prototype.netlify.app/",
    image: projectScreenshot,
    description: "I redesigned a tax return platform that allows Romanians to recover income taxes and manage financial data easily.",
    techStack: ["UI/UX Design", "Framer Motion", "React", "CSS"]
  },
  {
   id: "garagehub",
   title: "GarageHub",
   link: "https://garagehub.ro",
   image: garagehub,
   description: "Designed and developed the complete front-end architecture for GarageHub. Leveraging React and Framer Motion, I transformed complex user flows into a seamless, highly interactive web experience tailored for automotive management.",
   techStack: ["UI/UX Design", "Framer Motion", "React", "CSS"]
  }
];

function Portfolio() {
  return (
    <main id="portfolio" className="portfolio">
      <motion.h1 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        className="my-title" 
      >
        My Work<span className="dot"> </span>
      </motion.h1>
      
      <div className="layout">
        {/* 2. Map through the data array to generate cards dynamically */}
        {projectsData.map((project) => (
          <motion.div 
            key={project.id}
            className="project-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            whileHover={{ 
              y: -10, 
              scale: 1.02,
              transition: { duration: 0.2 } 
            }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="project-image">
              <motion.img 
                src={project.image} 
                alt={`${project.title} Preview`} 
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.4 }}
                loading="lazy"
              />
            </div>

            <div className="project-info"> {/* Grouped info for better padding/spacing in CSS */}
              <div className="project-header">
                <h2>{project.title}</h2>
                <motion.a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  whileHover={{ rotate: 15, scale: 1.2 }}
                >
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    width="24" height="24" viewBox="0 0 24 24" 
                    fill="none" stroke="currentColor" strokeWidth="2" 
                    strokeLinecap="round" strokeLinejoin="round" 
                    className="external-icon"
                  >
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    <polyline points="15 3 21 3 21 9"></polyline>
                    <line x1="10" y1="14" x2="21" y2="3"></line>
                  </svg>
                </motion.a>
              </div>

              <p className="description">
                {project.description}
              </p>

              {/* 3. The new Tech Stack section */}
              <div className="tech-stack">
                {project.techStack.map((tech, index) => (
                  <span key={index} className="tech-badge">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </main>
  );
}

export default Portfolio;