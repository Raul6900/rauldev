import { motion } from "framer-motion";
import "../css/About.css";
import RaulPhoto from "../assets/me.jpg";

function About() {
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, delay: 0.2 },
    },
  };

  return (
    <motion.main
      id="about"
      className="about"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.15 }}
      variants={containerVariants}
    >
      {/* ✅ Removed heavy infinite animation on mobile */}
      {!isMobile && (
        <motion.div
          className="about-glow"
          animate={{
            opacity: [0.15, 0.25, 0.15],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      )}

      <motion.div
        className="about-card"
        variants={cardVariants}
        whileHover={{ y: -4 }}
      >
        <div className="about-content-grid">
          
          {/* TEXT */}
          <div className="about-text-side">
            <motion.h1 className="about-title" variants={textVariants}>
              About me <span className="dot"></span>
            </motion.h1>

            <div className="about-text-wrapper">
              <motion.p variants={textVariants} className="highlight-text">
                Hi, I am <i>Raul Prahoveanu</i>, a 22-year-old Frontend Developer from Romania.
              </motion.p>

              <motion.p variants={textVariants}>
                I specialize in <strong>React</strong> and build fast, responsive websites that not only look good but also help businesses create a strong online presence.
              </motion.p>

              <motion.p variants={textVariants}>
                I’m constantly learning, improving, and following best practices to write scalable, maintainable code.
              </motion.p>

              {/* ✅ Removed infinite animation */}
              <motion.p variants={textVariants} className="cta-text">
                If you need a fast, clean, and professional website, I’d be happy to help.
              </motion.p>
            </div>
          </div>

          {/* IMAGE */}
          <motion.div
            className="about-image-side"
            variants={imageVariants}
          >
            <div className="img-wrapper">
              <img
                src={RaulPhoto}
                alt="Raul Prahoveanu Frontend Developer"
                loading="lazy" 
                width="400"
                height="500"
              />
              <div className="image-overlay"></div>
            </div>
          </motion.div>

        </div>
      </motion.div>
    </motion.main>
  );
}

export default About;