import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import eventsData from "../../utilities/AllEvents/EventData/AllEventData";
import "./EventDetails.css";

/* IMPORT POSTERS */

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

function EventDetails({ darkMode }) {

  const { id } = useParams();
  const navigate = useNavigate();

  const posters = [
    AI, AnubhavSinghBassi, ArijitSingh, ArtExpo, AutoTech, Contemporary,
    Delhi, DigitalMarketing, DJChetas, EducationAbroad, FootBall, Goa,
    Handicraft, IndieArtists, Jam, Kabaddi, Kathak, Kolkata,
    MarathonRun, Nucleya, Photography, PoetryStory, RajsthaniFolk,
    RealEstate, SamayRaina, ShreyaGhoshal, SonuNigam, StartUp,
    SunidhiChauhan, ZakirKhan
  ];

  const event = eventsData.find((e) => e.id === Number(id));

  if (!event) return <h2>Event not found</h2>;

  const index = eventsData.findIndex(e => e.id === Number(id));
  const poster = posters[index];

  const performer = event.performer || event.organizer;

  return (

    <section className={`eventdetails-section ${darkMode ? "dark-mode" : "light-mode"}`}>

      <div className="eventdetails-container">

        <div className="event-header">
            <button className="back-btn" onClick={() => navigate(-1)}>← Back</button>
            <h1 className="event-title">{event.name}</h1>
        </div>

        <div className="event-main">

          {/* LEFT SIDE */}

          <div className="event-left">

            <button className="book-btn"
              onClick={() => navigate(`/seats/${event.id}`)}> Book Seats
            </button>

            <div className="event-details-list">

              <div>
                <strong>Performer</strong>
                <span>{performer}</span>
              </div>

              <div>
                <strong>Venue</strong>
                <span>{event.venue}</span>
              </div>

              <div>
                <strong>Location</strong>
                <span>{event.location}</span>
              </div>

              <div>
                <strong>Date</strong>
                <span>{event.date}</span>
              </div>

              <div>
                <strong>Time</strong>
                <span>{event.time}</span>
              </div>

              <div>
                <strong>Ticket Price</strong>
                <span>₹{event.ticketPrice}</span>
              </div>

              <div>
                <strong>Total Seats</strong>
                <span>{event.totalSeats}</span>
              </div>

              <div>
                <strong>Available Seats</strong>
                <span>{event.availableSeats}</span>
              </div>

            </div>

          </div>

          {/* RIGHT SIDE */}

          <div className="event-right">

            <img
              src={poster}
              alt={event.name}
              className="event-poster"
            />

          </div>

        </div>

        {/* DESCRIPTION */}

        <div className="event-description-box">

          <h2>About the Event</h2>

          <p>
            {event.description}
          </p>

        </div>

      </div>

    </section>
  );
}

export default EventDetails;