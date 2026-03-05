import React, { useState } from "react";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import BuyPlans from "./components/BuyPlans/BuyPlans";
import ArtistList from "./components/ArtistList/ArtistList";
import GenreList from "./components/GenreList/GenreList";
import AllEvents from "./components/AllEvents/AllEvents";
import EventsList from "./components/EventsList/EventsList";
import Footer from "./components/Footer/Footer";
import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  return (
    <>
      {/* ===== THEMED SECTION ===== */}
      <div className={darkMode ? "dark" : "light"}>
        <Header darkMode={darkMode} toggleTheme={toggleTheme} />
        <Navbar darkMode={darkMode} />
      </div>
      <BuyPlans />
      <ArtistList darkMode={darkMode} />
      <GenreList darkMode={darkMode} />
      <AllEvents darkMode={darkMode} />
      <EventsList darkMode={darkMode} />
      <Footer darkMode={darkMode} />
    </>
  );
}

export default App;