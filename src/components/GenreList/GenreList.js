import React from "react";
import genres from "../../utilities/genres";
import "./GenreList.css";

/* ===== IMPORT ICONS ===== */
import comedy from "../../utilities/GenreIcons/Comedy.avif";
import conference from "../../utilities/GenreIcons/Conference.avif";
import exhibition from "../../utilities/GenreIcons/Exhibition.avif";
import expos from "../../utilities/GenreIcons/Expos.avif";
import fairfest from "../../utilities/GenreIcons/Fest&Fairs.avif";
import music from "../../utilities/GenreIcons/Music.avif";
import nightlife from "../../utilities/GenreIcons/NightLife.avif";
import openmics from "../../utilities/GenreIcons/OpenMics.avif";
import performance from "../../utilities/GenreIcons/Performance.avif";
import sports from "../../utilities/GenreIcons/Sports.avif";

/* ===== ICON MAPPING ===== */
const genreIcons = {
  Music: music,
  NightLife: nightlife,
  Comedy: comedy,
  Sports: sports,
  Performance: performance,
  "Fest & Fairs": fairfest,
  Exhibition: exhibition,
  Conference: conference,
  Expos: expos,
  "Open Mic": openmics,
};

function GenreList({ darkMode }) {
  return (
    <section
      className={`genre-section ${
        darkMode ? "dark-mode" : "light-mode"
      }`}
    >
      {/* ===== HEADING ===== */}
      <div className="genre-header">
        <h2>Choose Your Genre</h2>
      </div>

      {/* ===== IMAGE GRID ===== */}
      <div className="genre-container">
        {genres.map((genre, index) => (
          <div className="genre-item" key={index}>
            <img
              src={genreIcons[genre]}
              alt={genre}
              className="genre-image"
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default GenreList;