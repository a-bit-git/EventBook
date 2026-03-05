import React, { useState, useEffect, useRef } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import "./Navbar.css";

function Navbar({ darkMode }) {

  /* =========================
     TITLE ANIMATION
  ========================= */

  const lineOne = "Upcoming";
  const lineTwo = "Events";

  const [text1, setText1] = useState(lineOne);
  const [text2, setText2] = useState(lineTwo);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    let timeout;

    if (!deleting && text1 === lineOne && text2 === lineTwo) {
      timeout = setTimeout(() => setDeleting(true), 5000);
      return () => clearTimeout(timeout);
    }

    if (deleting) {
      if (text2.length > 0) {
        timeout = setTimeout(() => {
          setText2(prev => prev.slice(0, -1));
        }, 60);
      } else if (text1.length > 0) {
        timeout = setTimeout(() => {
          setText1(prev => prev.slice(0, -1));
        }, 60);
      } else {
        timeout = setTimeout(() => setDeleting(false), 220);
      }
    }

    if (!deleting) {
      if (text1.length < lineOne.length) {
        timeout = setTimeout(() => {
          setText1(lineOne.slice(0, text1.length + 1));
        }, 60);
      } else if (text2.length < lineTwo.length) {
        timeout = setTimeout(() => {
          setText2(lineTwo.slice(0, text2.length + 1));
        }, 60);
      }
    }

    return () => clearTimeout(timeout);
  }, [text1, text2, deleting]);

  /* =========================
     SLIDER LOGIC (MERGED)
  ========================= */

  const sliderRef = useRef(null);
  const animationRef = useRef(null);

  const velocityRef = useRef(0);
  const directionRef = useRef(0);

  const [scrollPosition, setScrollPosition] = useState(0);

  const ACCELERATION = 0.9;
  const MAX_SPEED = 30;
  const FRICTION = 0.96;

  const animate = () => {
    if (!sliderRef.current) return;

    velocityRef.current += ACCELERATION * directionRef.current;

    velocityRef.current = Math.max(
      -MAX_SPEED,
      Math.min(MAX_SPEED, velocityRef.current)
    );

    sliderRef.current.scrollLeft += velocityRef.current;
    setScrollPosition(sliderRef.current.scrollLeft);

    velocityRef.current *= FRICTION;

    if (Math.abs(velocityRef.current) < 0.2 && directionRef.current === 0) {
      cancelAnimationFrame(animationRef.current);
      return;
    }

    animationRef.current = requestAnimationFrame(animate);
  };

  const startScrollRight = () => {
    directionRef.current = 1;
    cancelAnimationFrame(animationRef.current);
    animationRef.current = requestAnimationFrame(animate);
  };

  const startScrollLeft = () => {
    directionRef.current = -1;
    cancelAnimationFrame(animationRef.current);
    animationRef.current = requestAnimationFrame(animate);
  };

  const stopScroll = () => {
    directionRef.current = 0;
  };

  const cards = Array.from({ length: 10 });

  /* =========================
     JSX
  ========================= */

  return (
    <div className={`navbar ${darkMode ? "dark-mode" : "light-mode"}`}>

      {/* LEFT SIDE */}
      <div className="navbar-left">
        <div className="left-content">

          <h1 className="upcoming-title">
            <span className="line-one">
              {lineOne.split("").map((char, i) => (
                <span key={i} className={`letter ${i < text1.length ? "show" : "hide"}`}>
                  {char}
                </span>
              ))}
            </span>

            <span className="line-two">
              {lineTwo.split("").map((char, i) => (
                <span key={i} className={`letter ${i < text2.length ? "show" : "hide"}`}>
                  {char}
                </span>
              ))}
            </span>
          </h1>

          <button className="explore-btn">Explore More</button>
        </div>
      </div>

      {/* RIGHT SIDE SLIDER */}
      <div className="navbar-right">
        <div className="right-content">

          <div className="slider-wrapper">

            {scrollPosition > 0 && (
              <button
                className="nav-btn left"
                onMouseDown={startScrollLeft}
                onMouseUp={stopScroll}
                onMouseLeave={stopScroll}
              >
                <FiChevronLeft />
              </button>
            )}

            <div className="slider-container" ref={sliderRef}>
              {cards.map((_, index) => (
                <div key={index} className="slider-card">
                  Card {index + 1}
                </div>
              ))}
            </div>

            <button
              className="nav-btn right"
              onMouseDown={startScrollRight}
              onMouseUp={stopScroll}
              onMouseLeave={stopScroll}
            >
              <FiChevronRight />
            </button>

          </div>

        </div>
      </div>
    </div>
  );
}

export default Navbar;