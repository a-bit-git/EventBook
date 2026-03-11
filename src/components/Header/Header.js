import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { FiSearch, FiMapPin, FiMoon, FiSun } from "react-icons/fi";
import logo from "../../utilities/Logo.png";
import cities from "../../utilities/cities";
import "./Header.css";

function Header({ darkMode, toggleTheme }) {

  const [searchOpen, setSearchOpen] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [selectedCity, setSelectedCity] = useState("Mumbai");

  const searchRef = useRef(null);

  const handleSearchClick = () => setSearchOpen(true);

  useEffect(() => {
    function handleClickOutside(e) {
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        setSearchOpen(false);
        setSearchText("");
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header className={`header ${darkMode ? "dark-mode" : "light-mode"}`}>

      {/* LOGO */}
      <div className="logo">
        <img src={logo} alt="Event Loop Logo" className="logo-img" />
        <span className="logo-text">
          Event <span className="logo-loop">LOOP</span>
        </span>
      </div>

      {/* NAV SECTION */}
      <nav className="nav-links">

        {/* SEARCH */}
        <div
          ref={searchRef}
          className={`search-container ${searchOpen ? "active" : ""}`}
          onClick={!searchOpen ? handleSearchClick : undefined}
        >
          <FiSearch className="search-icon" />

          {!searchOpen && (
            <span className="search-text">Search</span>
          )}

          {searchOpen && (
            <input
              type="text"
              className="search-input"
              placeholder="Search events..."
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              autoFocus
            />
          )}
        </div>

        {/* NAV LIST */}
        <ul className="nav-menu">
          <li className="nav-item"> <Link to="/">Home</Link> </li>
          <li className="nav-item"> <Link to="/about">About</Link> </li>
          <li className="nav-item"> <Link to="/contact">Contact</Link> </li>
        </ul>

        {/* ACTION BUTTONS */}
        <div className="nav-actions">

          {/* ✅ MODE BUTTON (ICON BASED) */}
          <button className="mode-btn icon-mode-btn" onClick={toggleTheme} aria-label="Toggle Theme">
            {darkMode ? <FiSun /> : <FiMoon />}
          </button>

          {/* LOCATION */}
          <div className="location-select">
            <FiMapPin className="location-icon" />
            <select
              value={selectedCity}
              onChange={(e) => setSelectedCity(e.target.value)}
            >
              {cities.map((city, index) => (
                <option key={index} value={city}>
                  {city}
                </option>
              ))}
            </select>
          </div>

          {/* REGISTER */}
          <button className="register-btn">Register</button>

        </div>

      </nav>
    </header>
  );
}

export default Header;