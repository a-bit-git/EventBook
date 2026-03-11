import React, { useState } from "react";
import "./AllEvents.css";

function AllEvents({ darkMode }) {

  const [showSort, setShowSort] = useState(false);
  const [selectedSort, setSelectedSort] = useState("");

  const closePopup = () => {
    setShowSort(false);
  };

  const applySort = () => {
    setShowSort(false);
  };

  const clearSort = () => {
    setSelectedSort("");
    setShowSort(false);
  };

  return (
    <section
      className={`events-section ${
        darkMode ? "dark-mode" : "light-mode"
      }`}
    >
      {/* ===== HEADER ROW ===== */}
      <div className="events-header">

        <h2>All Events</h2>

        <div className="filter-buttons">
          <button>This Month</button>
          <button>Next Month</button>
          <button>After Next Month</button>

          <button
            className="sort-btn"
            onClick={() => setShowSort(true)}
          >
            Sort By
          </button>
        </div>
      </div>

      {/* ===== BLUR OVERLAY ===== */}
      {showSort && (
        <div className="overlay">
          <div className="sort-popup">

            {/* CLOSE BUTTON */}
            <div className="popup-close" onClick={closePopup}>
              ✕
            </div>

            <h3>Sort By</h3>

            <div className="sort-options">
              <label>
                <input
                  type="radio"
                  name="sort"
                  value="popularity"
                  checked={selectedSort === "popularity"}
                  onChange={(e) => setSelectedSort(e.target.value)}
                />
                Popularity
              </label>

              <label>
                <input
                  type="radio"
                  name="sort"
                  value="low"
                  checked={selectedSort === "low"}
                  onChange={(e) => setSelectedSort(e.target.value)}
                />
                Price : Low to High
              </label>

              <label>
                <input
                  type="radio"
                  name="sort"
                  value="high"
                  checked={selectedSort === "high"}
                  onChange={(e) => setSelectedSort(e.target.value)}
                />
                Price : High to Low
              </label>
            </div>

            {/* ACTION BUTTONS */}
            <div className="popup-actions">
              <button className="clear-btn" onClick={clearSort}>
                Clear
              </button>

              <button className="apply-btn" onClick={applySort}>
                Apply
              </button>
            </div>

          </div>
        </div>
      )}
    </section>
  );
}

export default AllEvents;