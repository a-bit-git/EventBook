import React, { useRef, useEffect } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import "./BuyPlans.css";

/* ===== IMPORT OFFERS ===== */
import FilmOffer from "../../utilities/BuyPlansHere/OffersPic/FilmOffer.jpg";
import ShowOffer from "../../utilities/BuyPlansHere/OffersPic/ShowOffer.jpg";
import SkyShotOffer from "../../utilities/BuyPlansHere/OffersPic/SkyShotOffer.jpg";
import TheaterOffer from "../../utilities/BuyPlansHere/OffersPic/TheaterOffer.avif";

/* ===== IMPORT TEXT DATA ===== */
import offerBannerData from "../../utilities/BuyPlansHere/BuyPlansData/offerBannerData";

function BuyPlans() {

  const sliderRef = useRef(null);

  /* AUTO SLIDE CONTROL */
  const autoSlideRef = useRef(null);
  const pauseTimeoutRef = useRef(null);

  /* ORIGINAL SLIDES */
  const plans = [
    FilmOffer,
    ShowOffer,
    SkyShotOffer,
    TheaterOffer
  ];

  /* DUPLICATE FOR CYCLIC LOOP */
  const infinitePlans = [...plans, ...plans, ...plans];

  /* START FROM CENTER */
  useEffect(() => {

    const slider = sliderRef.current;

    if (slider) {
      slider.scrollLeft = slider.scrollWidth / 2;
    }

    startAutoSlide();

    return () => {
      clearInterval(autoSlideRef.current);
      clearTimeout(pauseTimeoutRef.current);
    };

  });

  /* MOVE ONE STRAP */
  const moveSlider = (direction) => {

    const slider = sliderRef.current;
    if (!slider) return;

    const strap = slider.querySelector(".plan-strap");
    const gap = 20;

    const strapWidth = strap.offsetWidth + gap;

    slider.scrollBy({
      left: direction * strapWidth,
      behavior: "smooth"
    });

  };

  /* START AUTO SLIDE */
  const startAutoSlide = () => {

    clearInterval(autoSlideRef.current);

    autoSlideRef.current = setInterval(() => {
      moveSlider(1);
    }, 2500);

  };

  /* PAUSE AUTO SLIDE FOR 5s */
  const pauseAutoSlide = () => {

    clearInterval(autoSlideRef.current);
    clearTimeout(pauseTimeoutRef.current);

    pauseTimeoutRef.current = setTimeout(() => {
      startAutoSlide();
    }, 5000);

  };

  /* BUTTONS */
  const scrollRight = () => {
    moveSlider(1);
    pauseAutoSlide();
  };

  const scrollLeft = () => {
    moveSlider(-1);
    pauseAutoSlide();
  };

  /* INFINITE RESET */
  const handleScroll = () => {

    const slider = sliderRef.current;
    if (!slider) return;

    const strap = slider.querySelector(".plan-strap");
    const gap = 20;

    const strapWidth = strap.offsetWidth + gap;
    const total = strapWidth * plans.length;

    if (slider.scrollLeft >= total * 2) {
      slider.scrollLeft -= total;
    }

    if (slider.scrollLeft <= total * 0.5) {
      slider.scrollLeft += total;
    }

  };

  return (
    <section className="buyplans-section">

      <div className="buyplans-wrapper">

        <button className="plan-btn left" onClick={scrollLeft}>
          <FiChevronLeft />
        </button>

        <div
          className="buyplans-slider"
          ref={sliderRef}
          onScroll={handleScroll}
        >

          {infinitePlans.map((plan, index) => {

            const banner = offerBannerData[index % offerBannerData.length];

            return (
              <div key={index} className="plan-strap">

                <img
                  src={plan}
                  alt="offer"
                  className="plan-image"
                />

                <div className="banner-headline">
                  {banner.headline}
                </div>

                <div className="banner-slogan">
                  {banner.slogan}
                </div>

              </div>
            );

          })}

        </div>

        <button className="plan-btn right" onClick={scrollRight}>
          <FiChevronRight />
        </button>

      </div>

    </section>
  );
}

export default BuyPlans;