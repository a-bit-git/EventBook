import React from "react";
import "./EventsList.css";
import { useNavigate } from "react-router-dom";

/* ===== IMPORT EVENT DATA ===== */

import eventsData from "../../utilities/AllEvents/EventData/AllEventData";

/* ===== IMPORT POSTERS ===== */

import AI from "../../utilities/AllEvents/EventPosters/AI.jpg";
import AnubhavSinghBassi from "../../utilities/AllEvents/EventPosters/AnubhavSinghBassi.jpg";
import ArijitSingh from "../../utilities/AllEvents/EventPosters/ArijitSingh.jpg";
import ArtExpo from "../../utilities/AllEvents/EventPosters/ArtExpo.jpg";
import AutoTech from "../../utilities/AllEvents/EventPosters/AutoTech.jpg";
import Contemporary from "../../utilities/AllEvents/EventPosters/Contemporary.jpg";
import Delhi from "../../utilities/AllEvents/EventPosters/Delhi.jpg";
import DigitalMarketing from "../../utilities/AllEvents/EventPosters/DigitalMarketing.jpg";
import DJChetas from "../../utilities/AllEvents/EventPosters/DJChetas.jpg";
import EducationAbroad from "../../utilities/AllEvents/EventPosters/EducationAbroad.jpg";
import FootBall from "../../utilities/AllEvents/EventPosters/FootBall.jpg";
import Goa from "../../utilities/AllEvents/EventPosters/Goa.jpg";
import Handicraft from "../../utilities/AllEvents/EventPosters/Handicraft.jpg";
import IndieArtists from "../../utilities/AllEvents/EventPosters/IndieArtists.jpg";
import Jam from "../../utilities/AllEvents/EventPosters/Jam.jpg";
import Kabaddi from "../../utilities/AllEvents/EventPosters/Kabaddi.jpg";
import Kathak from "../../utilities/AllEvents/EventPosters/Kathak.jpg";
import Kolkata from "../../utilities/AllEvents/EventPosters/Kolkata.jpg";
import MarathonRun from "../../utilities/AllEvents/EventPosters/MarathonRun.jpg";
import Nucleya from "../../utilities/AllEvents/EventPosters/Nucleya.jpg";
import Photography from "../../utilities/AllEvents/EventPosters/Photography.jpg";
import PoetryStory from "../../utilities/AllEvents/EventPosters/Poetry&Story.jpg";
import RajsthaniFolk from "../../utilities/AllEvents/EventPosters/RajsthaniFolk.jpg";
import RealEstate from "../../utilities/AllEvents/EventPosters/RealEstate.jpg";
import SamayRaina from "../../utilities/AllEvents/EventPosters/SamayRaina.jpg";
import ShreyaGhoshal from "../../utilities/AllEvents/EventPosters/ShreyaGhoshal.jpg";
import SonuNigam from "../../utilities/AllEvents/EventPosters/SonuNigam.jpg";
import StartUp from "../../utilities/AllEvents/EventPosters/StartUp.jpg";
import SunidhiChauhan from "../../utilities/AllEvents/EventPosters/SunidhiChauhan.jpg";
import ZakirKhan from "../../utilities/AllEvents/EventPosters/ZakirKhan.jpg";

function EventsList({ darkMode }) {

  const posters = [
    AI,
    AnubhavSinghBassi,
    ArijitSingh,
    ArtExpo,
    AutoTech,
    Contemporary,
    Delhi,
    DigitalMarketing,
    DJChetas,
    EducationAbroad,
    FootBall,
    Goa,
    Handicraft,
    IndieArtists,
    Jam,
    Kabaddi,
    Kathak,
    Kolkata,
    MarathonRun,
    Nucleya,
    Photography,
    PoetryStory,
    RajsthaniFolk,
    RealEstate,
    SamayRaina,
    ShreyaGhoshal,
    SonuNigam,
    StartUp,
    SunidhiChauhan,
    ZakirKhan
  ];
  const navigate = useNavigate();

  return (
    <section
      className={`eventslist-section ${
        darkMode ? "dark-mode" : "light-mode"
      }`}
    >

      <div className="events-grid">

        {eventsData.map((event, index) => {

          const poster = posters[index];

          return (
            <div className="event-card" key={event.id}>

              {/* IMAGE */}
              <div className="event-image">
                <img
                  src={poster}
                  alt={event.name}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover"
                  }}
                />
              </div>

              {/* EVENT INFO */}
              <div className="event-info">

                <div className="eventdetails-title">
                  {event.name}
                </div>

                <div className="event-performer">
                  {event.performer || event.organizer}
                </div>

                <div className="event-datetime">
                  {event.date} • {event.time}
                </div>

                {/* LOCATION + BUTTON ROW */}
                <div className="event-bottom-row">

                  <div className="event-location">
                    {event.location}
                  </div>

                  <button className="view-details-btn"
                    onClick={() => navigate(`/event/${event.id}`)}> View Details
                  </button>

                </div>

              </div>

            </div>
          );

        })}

      </div>

    </section>
  );
}

export default EventsList;