import { useState, useEffect, useRef } from "react";
import "../css/Navbar.css";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  
  // State to hold the exact position and width of the sliding animation
  const [indicatorStyle, setIndicatorStyle] = useState({ opacity: 0 });
  
  // Refs to measure our <li> elements
  const linksRef = useRef([]);

  // Our list of sections
  const navLinks = ["about", "portfolio", "skills", "services", "contact"];

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

 // 1. Scroll Spy Logic
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      let currentSection = "";
      navLinks.forEach((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            currentSection = section;
          }
        }
      });

      // CHANGE HERE: Remove the 'if' statement so it resets to "" when outside of sections
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Trigger once on load

    return () => window.removeEventListener("scroll", handleScroll);
  }, []); // Run once on mount

  // 2. Sliding Indicator Logic
  useEffect(() => {
    const activeIndex = navLinks.indexOf(activeSection);
    
    // If we have an active section, move the indicator to it
    if (activeIndex !== -1 && linksRef.current[activeIndex]) {
      const el = linksRef.current[activeIndex];
      setIndicatorStyle({
        left: `${el.offsetLeft}px`,
        width: `${el.offsetWidth}px`,
        opacity: 1,
      });
    } else {
      // Hide indicator if nothing is active (e.g., at the very top of the page)
      setIndicatorStyle({ opacity: 0 });
    }
  }, [activeSection]); // Run this whenever the activeSection changes

  return (
    <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
      <div className="navbar-logo">
        <h1>
          <a href="#home">R a u l <span className="dot"></span></a>
        </h1>
      </div>

      {/* Desktop Links */}
      <ul className="desktop-links">
        {/* The Sliding Background Indicator */}
        <div className="nav-indicator" style={indicatorStyle}></div>

        {navLinks.map((link, index) => (
          <li
            key={`desktop-${link}`}
            ref={(el) => (linksRef.current[index] = el)}
            className={activeSection === link ? "text-active" : ""}
          >
            <a href={`#${link}`}>
              {link.charAt(0).toUpperCase() + link.slice(1)}
            </a>
          </li>
        ))}
      </ul>

      {/* Hamburger Icon */}
      <div
        className={`hamburger ${isOpen ? "active" : ""}`}
        onClick={toggleMenu}
      >
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>

      {/* Mobile Menu */}
      <ul className={`mobile-menu ${isOpen ? "active" : ""}`}>
        {navLinks.map((link) => (
          <li
            key={`mobile-${link}`}
            className={activeSection === link ? "mobile-active-link" : ""}
          >
            <a href={`#${link}`} onClick={closeMenu}>
              {link.charAt(0).toUpperCase() + link.slice(1)}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;