import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import "../css/Contact.css";

function Contact() {
  const form = useRef();
  const [status, setStatus] = useState(""); // Stores "Sending...", "Success", or "Error"

  // Configurație pentru containerul principal (form-container)
  const containerVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.5,
        when: "beforeChildren", 
        staggerChildren: 0.15,  
      },
    },
  };

  // Configurație pentru elementele din interior (input-groups și buton)
  const itemVariants = {
    hidden: { opacity: 0, x: -15 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.4, ease: "easeOut" }
    },
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("Sending...");

    // Replace these placeholders with your actual EmailJS credentials
  emailjs.sendForm(
  process.env.REACT_APP_EMAILJS_SERVICE_ID,
  process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
  form.current,
  process.env.REACT_APP_EMAILJS_USER_ID
)
      .then(
        (result) => {
          console.log(result.text);
          setStatus("Message sent successfully!");
          e.target.reset(); // Clear the form fields
          
          // Clear the success message after 3 seconds
          setTimeout(() => setStatus(""), 3000);
        },
        (error) => {
          console.log(error.text);
          setStatus("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <main id="contact" className="contact">
      <motion.div 
        className="form-container"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }} 
      >
        
        <motion.div className="contact-header" variants={itemVariants}>
          <h1 className="contact-title"><span>Let's Connect</span> <span className="dot"></span></h1>
        </motion.div>

        {/* Added ref={form} and onSubmit={sendEmail} */}
        <form ref={form} onSubmit={sendEmail} className="contact-form">
          
          <motion.div className="input-group" variants={itemVariants}>
            <label htmlFor="name">Name</label>
            {/* Added name="user_name" for EmailJS mapping */}
            <input type="text" id="name" name="user_name" placeholder="Your Name" required />
          </motion.div>
          
          <motion.div className="input-group" variants={itemVariants}>
            <label htmlFor="email">Email</label>
            {/* Added name="user_email" for EmailJS mapping */}
            <input type="email" id="email" name="user_email" placeholder="Your Email" required />
          </motion.div>
          
          <motion.div className="input-group" variants={itemVariants}>
            <label htmlFor="message">Message</label>
            {/* Added name="message" for EmailJS mapping */}
            <textarea id="message" name="message" rows="5" placeholder="How can I help you?" required></textarea>
          </motion.div>

          <motion.button 
            type="submit" 
            className="submit-btn"
            variants={itemVariants}
            disabled={status === "Sending..."}
            whileHover={{ 
              scale: status === "Sending..." ? 1 : 1.02,
              boxShadow: status === "Sending..." ? "none" : "0px 0px 15px rgba(106, 60, 232, 0.5)" 
            }}
            whileTap={{ scale: status === "Sending..." ? 1 : 0.98 }}
          >
            {status === "Sending..." ? "Sending..." : "Send Message"}
          </motion.button>
          
          {/* Optional: Display success/error message */}
          {status && status !== "Sending..." && (
            <motion.p 
               initial={{ opacity: 0 }} 
               animate={{ opacity: 1 }} 
               style={{ marginTop: "15px", textAlign: "center", fontSize: "0.9rem" }}
            >
              {status}
            </motion.p>
          )}

        </form>
      </motion.div>
    </main>
  );
}

export default Contact;