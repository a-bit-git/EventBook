import React, { useRef, useEffect } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import "./BuyPlans.css";

function BuyPlans() {

  const sliderRef = useRef(null);

  /* ORIGINAL PLANS */
  const plans = Array.from({ length: 4 }, (_, i) => `Plan ${i + 1}`);

  /* DUPLICATE FOR INFINITE LOOP */
  const infinitePlans = [...plans, ...plans, ...plans];

  /* START FROM CENTER SET */
  useEffect(() => {
    const slider = sliderRef.current;

    if (slider) {
      slider.scrollLeft = slider.scrollWidth / 2;
    }
  }, [plans.length]);

  /* MOVE EXACTLY ONE STRAP */
  const moveSlider = (direction) => {
    const slider = sliderRef.current;
    if (!slider) return;

    const strap = slider.querySelector(".plan-strap");
    const gap = 30;

    const strapWidth = strap.offsetWidth + gap;

    slider.scrollBy({
      left: direction * strapWidth,
      behavior: "smooth"
    });
  };

  /* BUTTON HANDLERS */
  const scrollRight = () => moveSlider(1);
  const scrollLeft = () => moveSlider(-1);

  /* INFINITE RESET */
  const handleScroll = () => {
    const slider = sliderRef.current;
    if (!slider) return;

    const strap = slider.querySelector(".plan-strap");
    const gap = 30;

    const strapWidth = strap.offsetWidth + gap;
    const total = strapWidth * plans.length;

    // if reached far right → jump back
    if (slider.scrollLeft >= total * 2) {
      slider.scrollLeft -= total;
    }

    // if reached far left → jump forward
    if (slider.scrollLeft <= total * 0.5) {
      slider.scrollLeft += total;
    }
  };

  return (
    <section className="buyplans-section">

      <div className="buyplans-wrapper">

        {/* LEFT BUTTON */}
        <button className="plan-btn left" onClick={scrollLeft}>
          <FiChevronLeft />
        </button>

        {/* SLIDER */}
        <div
          className="buyplans-slider"
          ref={sliderRef}
          onScroll={handleScroll}
        >
          {infinitePlans.map((plan, index) => (
            <div key={index} className="plan-strap">
              {plan}
            </div>
          ))}
        </div>

        {/* RIGHT BUTTON */}
        <button className="plan-btn right" onClick={scrollRight}>
          <FiChevronRight />
        </button>

      </div>

    </section>
  );
}

export default BuyPlans;