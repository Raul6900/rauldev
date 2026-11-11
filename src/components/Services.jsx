import { motion } from "framer-motion";
import { FaRocket, FaCode, FaMagic, FaMobileAlt } from "react-icons/fa";
import "../css/services.css";

// ✅ Move outside (important)
const services = [
  {
    icon: <FaRocket className="service-icon icon-rocket" />,
    title: "Landing Pages for Businesses",
    description:
      "I build fast, modern landing pages designed to attract visitors and turn them into customers.",
    tag: "Conversion Focus",
  },
  {
    icon: <FaCode className="service-icon icon-react-app" />,
    title: "React Web Applications",
    description:
      "Custom React apps with clean code, smooth performance, and scalable structure.",
    tag: "Scalable Code",
  },
  {
    icon: <FaMagic className="service-icon icon-redesign" />,
    title: "Website Redesigns",
    description:
      "I improve outdated websites with modern UI, better user experience, and responsive layouts.",
    tag: "Modern UI",
  },
  {
    icon: <FaMobileAlt className="service-icon icon-responsive" />,
    title: "Responsive UI Development",
    description:
      "Websites that look and work perfectly on all devices — mobile, tablet, and desktop.",
    tag: "Mobile First",
  },
];

function Services() {
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

  const iconVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.3 }, // ✅ lighter
    },
  };

  return (
    <motion.section
      className="services"
      id="services"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={containerVariants}
    >
      <motion.h2 className="services-title" variants={cardVariants}>
        How I Can Help You<span className="dot"> </span>
      </motion.h2>

      <div className="services-grid">
        {services.map((service, index) => (
          <motion.div
            className="service-card"
            variants={cardVariants}
            key={index}
            whileHover={
              isMobile
                ? {}
                : { y: -5 } // ✅ removed borderColor animation
            }
          >
            {/* HEADER */}
            <div className="service-header">
              <motion.span
                variants={iconVariants}
                className="icon-wrapper"
              >
                {service.icon}
              </motion.span>
              <span className="title-text">{service.title}</span>
            </div>

            <p className="service-description">
              {service.description}
            </p>

            <div className="service-footer">
              <span className="service-tag">{service.tag}</span>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}

export default Services;