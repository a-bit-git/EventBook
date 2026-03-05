import React from "react";
import {
  FiInstagram,
  FiYoutube,
  FiLinkedin
} from "react-icons/fi";
import { FaXTwitter, FaWhatsapp } from "react-icons/fa6";

import logo from "../../utilities/Logo.png";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">

      {/* ================= TOP SECTION ================= */}
      <div className="footer-top">

        {/* LEFT : LOGO */}
        <div className="logo">
          <img src={logo} alt="Event Loop Logo" className="logo-img" />
          <h2 className="logo-text">
            <span className="logo-event">Event </span>
            <span className="logo-loop">LOOP</span>
          </h2>
        </div>

        {/* CENTER : NAV LINKS */}
        <div className="footer-center">
          <ul className="footer-links">
            <li>Terms & Conditions</li>
            <li>Privacy Policy</li>
            <li>Career</li>
            <li>Contact Us</li>
          </ul>
        </div>

        {/* RIGHT : QR DOWNLOAD */}
        <div className="footer-right">
          <div className="qr-box"></div>
          <p className="qr-text">Scan to download the app</p>
        </div>

      </div>

      {/* ================= DIVIDER ================= */}
      <div className="footer-divider"></div>

      {/* ================= BOTTOM SECTION ================= */}
      <div className="footer-bottom">

        <div className="footer-legal">
          <p>
            By accessing this page, you confirm that you have read,
            understood, and agreed to our Terms of Service, Cookie Policy,
            Privacy Policy, and Content Guidelines. All rights reserved.
          </p>

          <span className="copyright">
            © {new Date().getFullYear()} Event Loop Technologies Pvt. Ltd.
            All Rights Reserved.
          </span>
        </div>

        <div className="footer-social">
          <FiInstagram />
          <FaXTwitter />
          <FiYoutube />
          <FaWhatsapp />
          <FiLinkedin />
        </div>

      </div>

    </footer>
  );
}

export default Footer;