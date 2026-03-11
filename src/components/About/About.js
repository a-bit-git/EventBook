import React from "react";
import "./About.css";

function About({ darkMode }) {

  return (

    <section className={`about-section ${darkMode ? "dark-mode" : "light-mode"}`}>

      <div className="about-container">

        <h1 className="about-title">About This Project</h1>

        <p className="about-description">

          The Event Booking Website is a frontend application developed as part of a 
          4-week internship project to simulate the user experience of modern event 
          ticketing platforms. The primary goal of this project is to understand the 
          complete frontend workflow involved in building a real-world product interface. 
          Users can explore a curated list of upcoming events, view detailed information 
          about each event, and interact with a visual seat selection interface that 
          mimics the experience of booking tickets on professional platforms. The 
          application is built using a component-based architecture where reusable UI 
          elements such as event cards, navigation bars, buttons, and seat components 
          maintain a clean and consistent interface across the entire website. The project 
          emphasizes user experience design, clear navigation flow, and responsive layouts 
          to ensure usability across different screen sizes. All event data, images, and 
          banners are managed locally using structured JavaScript data files within the 
          utilities folder, allowing the application to render dynamic content without 
          backend integration. Through this project, important frontend development 
          concepts such as React functional components, state management, routing, 
          interactive UI behavior, and structured project organization are applied to 
          create a portfolio-ready event booking interface that demonstrates real-world 
          product design thinking and modern web development practices.

        </p>

        <div className="about-features">

          <h2>Key Features</h2>

          <ul>
            <li>Browse upcoming events through an organized event listing page</li>
            <li>View detailed event information including date, venue, and pricing</li>
            <li>Interactive seat selection interface with visual seat states</li>
            <li>Dynamic ticket price calculation based on seat selection</li>
            <li>Reusable component-based React architecture</li>
            <li>Responsive design for different screen sizes</li>
            <li>Dark mode support for improved accessibility</li>
          </ul>

        </div>

      </div>

    </section>

  );

}

export default About;