import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Navbar from "./components/Navbar/Navbar";
import BuyPlans from "./components/BuyPlans/BuyPlans";
import ArtistList from "./components/ArtistList/ArtistList";
import GenreList from "./components/GenreList/GenreList";
import AllEvents from "./components/AllEvents/AllEvents";
import EventsList from "./components/EventsList/EventsList";
import EventDetails from "./components/EventDetails/EventDetails";
import SeatSelection from "./components/SeatSelection/SeatSelection";
import Payment from "./components/Payment/Payment";
import Footer from "./components/Footer/Footer";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";

import "./App.css";

function App() {

  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <Router>
      
      <ScrollToTop />
      {/* THEME ONLY FOR HEADER SECTION */}
      <div className={darkMode ? "dark" : "light"}>
        <Header darkMode={darkMode} toggleTheme={toggleTheme}/>
        <Navbar darkMode={darkMode}/>
      </div>

      <Routes>

        {/* HOME PAGE */}
        <Route
          path="/"
          element={
            <>
              <BuyPlans/>
              <ArtistList darkMode={darkMode}/>
              <GenreList darkMode={darkMode}/>
              <AllEvents darkMode={darkMode}/>
              <EventsList darkMode={darkMode}/>
            </>
          }
        />

        {/* EVENT DETAILS */}
        <Route
          path="/about"
          element={<About darkMode={darkMode}/>}
        />
        <Route
          path="/contact"
          element={<Contact darkMode={darkMode}/>}
        />
        <Route
          path="/event/:id"
          element={<EventDetails darkMode={darkMode}/>}
        />
        <Route
          path="/seats/:id"
          element={<SeatSelection darkMode={darkMode}/>}
        />
        <Route 
          path="/payment/:id" 
          element={<Payment darkMode={darkMode} />} 
        />

      </Routes>

      <Footer darkMode={darkMode}/>

    </Router>
  );
}

export default App;