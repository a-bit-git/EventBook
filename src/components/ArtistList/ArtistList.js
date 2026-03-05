import React from "react";
import "./ArtistList.css";

function ArtistList({ darkMode }) {

  // 15 placeholder cards
  const artists = Array.from({ length: 5 });

  return (
    <section className={`artist-section ${darkMode ? "dark-mode" : "light-mode"}`}>

      {/* ===== HEADING ===== */}
      <div className="artist-header">
        <h2>Choose Your Artist</h2>
      </div>

      {/* ===== MOVING ROWS ===== */}
      <div className="artist-marquee-wrapper">

        {/* TOP ROW (LEFT → RIGHT) */}
        <div className="artist-row move-right">
          {[...artists, ...artists].map((_, i) => (
            <div className="artist-card" key={`top-${i}`}>
              <div className="artist-img"></div>

              <div className="artist-info">
                <div className="artist-name">Artist Name</div>
                <div className="artist-genre">Music</div>
              </div>
            </div>
          ))}
        </div>

        {/* BOTTOM ROW (RIGHT → LEFT) */}
        <div className="artist-row move-left">
          {[...artists, ...artists].map((_, i) => (
            <div className="artist-card" key={`bottom-${i}`}>
              <div className="artist-img"></div>

              <div className="artist-info">
                <div className="artist-name">Artist Name</div>
                <div className="artist-genre">Music</div>
              </div>
            </div>
          ))}
        </div>

      </div>

    </section>
  );
}

export default ArtistList;