import { motion } from "framer-motion";
import { SiTailwindcss } from "react-icons/si";
import {
  FaReact,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
} from "react-icons/fa";
import { SiNextdotjs, SiFramer } from "react-icons/si";
import "../css/Skills.css";

// ✅ Move data OUTSIDE component (important)
const coreSkills = [
  { icon: <FaHtml5 />, name: "HTML5", colorClass: "hover-html" },
  { icon: <FaCss3Alt />, name: "CSS3", colorClass: "hover-css" },
  { icon: <FaJs />, name: "JavaScript", colorClass: "hover-js" },
  { icon: <FaGitAlt />, name: "Git", colorClass: "hover-git" },
];

const frameworkSkills = [
  { icon: <FaReact />, name: "React JS", colorClass: "hover-react" },
  { icon: <SiNextdotjs />, name: "Next JS", colorClass: "hover-router" },
  { icon: <SiFramer />, name: "Framer Motion", colorClass: "hover-framer" },
  { icon: <SiTailwindcss />, name: "Tailwind CSS", colorClass: "hover-css" },
];

function Skills() {
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const badgeVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.3 }, // ✅ lighter than spring
    },
  };

  return (
    <motion.section
      className="skills"
      id="skills"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={containerVariants}
    >
      <motion.h2 className="skills-title" variants={cardVariants}>
        My Skills<span className="dot"> </span>
      </motion.h2>

      <div className="skills-grid">
        
        {/* Core Skills */}
        <motion.div className="skill-card" variants={cardVariants}>
          <h3>Core Languages & Tools</h3>
          <div className="skill-items">
            {coreSkills.map((skill, index) => (
              <motion.span
                key={index}
                className={`skill-badge ${skill.colorClass}`}
                variants={badgeVariants}
                whileHover={
                  isMobile ? {} : { y: -2, scale: 1.03 }
                }
                whileTap={{ scale: 0.97 }}
              >
                {skill.icon} {skill.name}
              </motion.span>
            ))}
          </div>
        </motion.div>

        {/* Frameworks */}
        <motion.div className="skill-card" variants={cardVariants}>
          <h3>Frameworks & Libraries</h3>
          <div className="skill-items">
            {frameworkSkills.map((skill, index) => (
              <motion.span
                key={index}
                className={`skill-badge ${skill.colorClass}`}
                variants={badgeVariants}
                whileHover={
                  isMobile ? {} : { y: -2, scale: 1.03 }
                }
                whileTap={{ scale: 0.97 }}
              >
                {skill.icon} {skill.name}
              </motion.span>
            ))}
          </div>
        </motion.div>

      </div>
    </motion.section>
  );
}

export default Skills;