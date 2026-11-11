import { useEffect, useState, useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import "../css/Home.css";

function Home() {
  const typewriterVariants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.08 } }, };
  const name = "R a u l .";
  const letterVariants = { hidden: { opacity: 0 }, visible: { opacity: 1 }, };
  
  const [init, setInit] = useState(false);
  const [showParticles, setShowParticles] = useState(false);

  const targetRef = useRef(null);

  // Detect mobile (disable heavy effects)
  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

  // Scroll animation (lighter)
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start start", "end start"],
  });

  const contentY = useTransform(scrollYProgress, [0, 1], [0, -40]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  // Lazy init particles
  useEffect(() => {
    const initParticles = async () => {
      await initParticlesEngine(async (engine) => {
        await loadSlim(engine);
      });
      setInit(true);
    };

    // Run when browser is idle (better UX)
    if ("requestIdleCallback" in window) {
      requestIdleCallback(initParticles);
    } else {
      setTimeout(initParticles, 500);
    }

    // Delay showing particles
    const timer = setTimeout(() => setShowParticles(true), 800);
    return () => clearTimeout(timer);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.12, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <div className="home-wrapper" ref={targetRef}>
      {/* ✅ Optimized particles */}
      {init && showParticles && !isMobile && (
        <Particles
          className="particles-bg"
          options={{
            background: { color: { value: "transparent" } },
            fpsLimit: 60,
            particles: {
              number: { value: 30 }, // reduced
              color: { value: "#6a3ce8" },
              links: { enable: false }, // removed heavy links
              move: { enable: true, speed: 1 },
              opacity: { value: 0.3 },
              size: { value: { min: 1, max: 2 } },
            },
            interactivity: {
              events: {
                onHover: { enable: true, mode: "repulse" },
              },
              modes: {
                repulse: { distance: 80, duration: 0.3 },
              },
            },
          }}
        />
      )}

      <motion.main
        id="home"
        className="home"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        style={
          isMobile ? {} : { y: contentY, opacity: contentOpacity }
        }
      >
        {/* ✅ Fixed structure */}
        <motion.p className="greeting" variants={itemVariants}>
          Hey, I'm
        </motion.p>

        <motion.h1 className="marketing" variants={itemVariants}>
          Raul Prahoveanu
        </motion.h1>

        {/* ✅ Simple smooth name animation */}
        <motion.h1 className="name" variants={typewriterVariants}> {name.split("").map((char, index) => ( <motion.span key={index} variants={letterVariants} style={{ color: char === "." ? "#e83c9d" : "inherit" }} > {char === " " ? "\u00A0" : char} </motion.span> ))} </motion.h1>

        <motion.span className="role-badge" variants={itemVariants}>
          Front End Developer
        </motion.span>

        <motion.p className="description" variants={itemVariants}>
          I build modern, responsive{" "}
          <span className="highlight">digital products</span> with clean,
          efficient and interactive designs that convert visitors into customers
        </motion.p>

        <motion.div className="cta-container" variants={itemVariants}>
          <motion.button
            className="connect-btn"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
          >
            <a href="#contact">&lt; Hire Me /&gt;</a>
          </motion.button>
        </motion.div>
      </motion.main>
    </div>
  );
}

export default Home;