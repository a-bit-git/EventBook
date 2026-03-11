import React from "react";
import "./ArtistList.css";

/* ===== IMPORT ARTIST IMAGES ===== */
import Aditi from "../../utilities/ChooseYourArtist/ArtistPic/Aditi Mangaldas.jpg";
import AnubhavBassi from "../../utilities/ChooseYourArtist/ArtistPic/Anubhav Singh Bassi.jpg";
import ArijitSingh from "../../utilities/ChooseYourArtist/ArtistPic/Arijit Singh.jpg";
import DJChetas from "../../utilities/ChooseYourArtist/ArtistPic/DJ Chetas.jpg";
import Nucleya from "../../utilities/ChooseYourArtist/ArtistPic/Nucleya.jpg";

import SamayRaina from "../../utilities/ChooseYourArtist/ArtistPic/Samay Raina.jpg";
import ShreyaGhoshal from "../../utilities/ChooseYourArtist/ArtistPic/Shreya Ghoshal.jpg";
import SonuNigam from "../../utilities/ChooseYourArtist/ArtistPic/Sonu Nigam.jpg";
import SunidhiChauhan from "../../utilities/ChooseYourArtist/ArtistPic/Sunidhi Chauhan.jpg";
import ZakirKhan from "../../utilities/ChooseYourArtist/ArtistPic/Zakir khan.jpg";

function ArtistList({ darkMode }) {

  /* ===== TOP ROW ARTISTS ===== */
  const topArtists = [
    { name: "Aditi Mangaldas", img: Aditi },
    { name: "Anubhav Bassi", img: AnubhavBassi },
    { name: "Arijit Singh", img: ArijitSingh },
    { name: "DJ Chetas", img: DJChetas },
    { name: "Nucleya", img: Nucleya }
  ];

  /* ===== BOTTOM ROW ARTISTS ===== */
  const bottomArtists = [
    { name: "Samay Raina", img: SamayRaina },
    { name: "Shreya Ghoshal", img: ShreyaGhoshal },
    { name: "Sonu Nigam", img: SonuNigam },
    { name: "Sunidhi Chauhan", img: SunidhiChauhan },
    { name: "Zakir Khan", img: ZakirKhan }
  ];

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
          {[...topArtists, ...topArtists].map((artist, i) => (
            <div className="artist-card" key={`top-${i}`}>

              <div className="artist-img">
                <img src={artist.img} alt={artist.name} />
              </div>

              <div className="artist-info">
                <div className="artist-name">{artist.name}</div>
              </div>

            </div>
          ))}
        </div>

        {/* BOTTOM ROW (RIGHT → LEFT) */}
        <div className="artist-row move-left">
          {[...bottomArtists, ...bottomArtists].map((artist, i) => (
            <div className="artist-card" key={`bottom-${i}`}>

              <div className="artist-img">
                <img src={artist.img} alt={artist.name} />
              </div>

              <div className="artist-info">
                <div className="artist-name">{artist.name}</div>
              </div>

            </div>
          ))}
        </div>

      </div>

    </section>
  );
}

export default ArtistList;