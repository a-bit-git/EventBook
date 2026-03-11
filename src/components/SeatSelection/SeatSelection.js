import React, { useState, useMemo } from "react";
import { useParams, useNavigate } from "react-router-dom";
import eventsData from "../../utilities/AllEvents/EventData/AllEventData";
import "./SeatSelection.css";

function SeatSelection({ darkMode }) {

  const { id } = useParams();
  const navigate = useNavigate();

  const [selectedSeats, setSelectedSeats] = useState([]);

  const event = eventsData.find(e => e.id === Number(id));

  /* SAFE DEFAULTS */

  const totalSeats = event ? event.totalSeats : 0;
  const seatsBooked = event ? event.seatsBooked : 0;

  /* RANDOM BOOKED SEATS */

  const bookedSeats = useMemo(() => {

    const booked = new Set();

    while (booked.size < seatsBooked) {
      const randomSeat = Math.floor(Math.random() * totalSeats);
      booked.add(randomSeat);
    }

    return booked;

  }, [seatsBooked, totalSeats]);

  if (!event) return <h2>Event not found</h2>;

  /* GRID CALCULATION */

  const columns = Math.ceil(Math.sqrt(totalSeats));
  const rows = Math.ceil(totalSeats / columns);

  /* SEAT CLICK */

  const toggleSeat = (seatIndex) => {

    if (bookedSeats.has(seatIndex)) return;

    if (selectedSeats.includes(seatIndex)) {
      setSelectedSeats(selectedSeats.filter(s => s !== seatIndex));
    } else {
      setSelectedSeats([...selectedSeats, seatIndex]);
    }

  };

  /* GENERATE SEATS */

  const seats = [];

  for (let i = 0; i < rows * columns; i++) {

    let seatClass = "seat";

    if (bookedSeats.has(i)) seatClass += " booked";
    else if (selectedSeats.includes(i)) seatClass += " selected";
    else seatClass += " available";

    seats.push(
      <div
        key={i}
        className={seatClass}
        onClick={() => toggleSeat(i)}
      >
        {i + 1}
      </div>
    );

  }

  /* PAYMENT BUTTON FUNCTION */

  const handlePayment = () => {

    if (selectedSeats.length === 0) {
      alert("Please select at least one seat.");
      return;
    }

    navigate(`/payment/${event.id}`, {
      state: {
        seats: selectedSeats,
        totalPrice: selectedSeats.length * event.ticketPrice,
        ticketPrice: event.ticketPrice
      }
    });

  };

  return (

    <section className={`seat-section ${darkMode ? "dark-mode" : "light-mode"}`}>

      <div className="seat-container">

        <div className="seat-header">
          <button className="back-btn" onClick={() => navigate(-1)}>
            ← Back
          </button>

          <h1 className="seat-title">{event.name}</h1>
        </div>

        <div className="stage-bar">
          <span>Stage / Screen</span>
        </div>

        <div
          className="seat-grid"
          style={{ gridTemplateColumns: `repeat(${columns},1fr)` }}
        >
          {seats}
        </div>

        <div className="seat-summary">

          <div className="summary-item">
            <span>Ticket Price</span>
            <strong>₹{event.ticketPrice}</strong>
          </div>

          <div className="summary-item">
            <span>Selected Seats</span>
            <strong>{selectedSeats.length}</strong>
          </div>

          <div className="summary-item">
            <span>Total Price</span>
            <strong>₹{selectedSeats.length * event.ticketPrice}</strong>
          </div>

        </div>

        <div className="seat-legend">
          <div><span className="legend available"></span> Available</div>
          <div><span className="legend selected"></span> Selected</div>
          <div><span className="legend booked"></span> Booked</div>
        </div>

        {/* PAYMENT BUTTON */}

        <div className="seat-payment-container">
          <button
            className="payment-btn"
            onClick={handlePayment}
          >
            Proceed to Payment
          </button>
        </div>

      </div>

    </section>

  );

}

export default SeatSelection;