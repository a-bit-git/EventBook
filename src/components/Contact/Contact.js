import React from "react";
import "./Contact.css";

function Contact({ darkMode }) {

  return (

    <section className={`contact-section ${darkMode ? "dark-mode" : "light-mode"}`}>

      <div className="contact-container">

        <h1 className="contact-title">Contact Me</h1>

        <p className="contact-intro">
          If you enjoyed exploring this project or would like to collaborate on exciting ideas,
          I would love to connect with you. Let's build something amazing together.
        </p>

        <div className="contact-card">

          <h2>Abhinav Gupta</h2>

          <p className="contact-education">
            B.Tech – Institute of Engineering and Technology, Lucknow  
            <br/>
            MCA Final Year – Integral University, Lucknow
          </p>

          <div className="contact-info">

            <p>
              <strong>Phone:</strong> 
              <a href="tel:+918933800615"> +91-8933800615</a>
            </p>

            <p>
              <strong>Email:</strong> 
              <a href="mailto:abhinav.gupta.1220@gmail.com">
                abhinav.gupta.1220@gmail.com
              </a>
            </p>

            <p>
              <strong>GitHub:</strong> 
              <a href="https://github.com/a-bit-git" target="_blank" rel="noopener noreferrer">
                github.com/a-bit-git
              </a>
            </p>

            <p>
              <strong>LinkedIn:</strong> 
              <a href="https://www.linkedin.com/in/abhinav1220/" target="_blank" rel="noopener noreferrer">
                linkedin.com/in/abhinav1220
              </a>
            </p>

          </div>

        </div>

      </div>

    </section>

  );

}

export default Contact;