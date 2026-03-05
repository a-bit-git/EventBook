import React from "react";
import "./EventsList.css";

/* ===== IMPORT POSTERS ===== */
import arijit from "../../utilities/EventPosters/Music/ArijitSingh.jpg";
import sonu from "../../utilities/EventPosters/Music/SonuNigam.jpg";
import shreya from "../../utilities/EventPosters/Music/ShreyaGhoshal.jpg";

function EventsList({ darkMode }) {

  // 30 placeholder cards
  const events = Array.from({ length: 30 });

  /* first 3 posters */
  const posters = [arijit, sonu, shreya];

  return (
    <section
      className={`eventslist-section ${
        darkMode ? "dark-mode" : "light-mode"
      }`}
    >
      {/* ===== GRID ===== */}
      <div className="events-grid">
        {events.map((_, index) => (
          <div className="event-card" key={index}>

            {/* IMAGE AREA */}
            <div className="event-image">
              {posters[index] && (
                <img
                  src={posters[index]}
                  alt="event poster"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover"
                  }}
                />
              )}
            </div>

            {/* CONTENT PLACEHOLDER */}
            <div className="event-info">
              <div className="event-title"></div>
              <div className="event-meta"></div>
              <div className="event-price"></div>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}

export default EventsList;