import React from "react";
import { useLocation, useParams, useNavigate } from "react-router-dom";
import eventsData from "../../utilities/AllEvents/EventData/AllEventData";
import "./Payment.css";

function Payment({ darkMode }) {

  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  const event = eventsData.find(e => e.id === Number(id));

  const selectedSeats = location.state?.seats || [];
  const ticketPrice = location.state?.ticketPrice || event.ticketPrice;

  const seatCount = selectedSeats.length;

  /* SUBTOTAL */

  const subtotal = seatCount * ticketPrice;

  /* DISCOUNT CALCULATION */

  let discountPercent = 0;

  if (seatCount >= 5) {
    discountPercent = parseInt(event.discount5PlusSeats);
  } else if (seatCount >= 3) {
    discountPercent = parseInt(event.discount3Seats);
  }

  const discountAmount = (subtotal * discountPercent) / 100;

  /* AFTER DISCOUNT */

  const priceAfterDiscount = subtotal - discountAmount;

  /* GST */

  const gstAmount = (priceAfterDiscount * event.gst) / 100;

  /* FINAL TOTAL */

  const grossPrice = priceAfterDiscount + gstAmount;

  return (

    <section className={`payment-section ${darkMode ? "dark-mode" : "light-mode"}`}>

      <div className="payment-container">

        <button className="back-btn" onClick={() => navigate(-1)}>
          ← Back
        </button>

        <h1 className="payment-title">{event.name}</h1>

        <div className="payment-card">

          <div className="payment-row">
            <span>Ticket Price</span>
            <span>₹{ticketPrice}</span>
          </div>

          <div className="payment-row">
            <span>Seats Selected</span>
            <span>{seatCount}</span>
          </div>

          <div className="payment-row">
            <span>Seat Numbers</span>
            <span className="seat-list">
              {selectedSeats.map(seat => seat + 1).join(", ")}
            </span>
          </div>

          <div className="payment-row">
            <span>Subtotal</span>
            <span>₹{subtotal}</span>
          </div>

          <div className="payment-row discount">
            <span>Discount ({discountPercent}%)</span>
            <span>- ₹{discountAmount.toFixed(0)}</span>
          </div>

          <div className="payment-row">
            <span>GST ({event.gst}%)</span>
            <span>₹{gstAmount.toFixed(0)}</span>
          </div>

          <hr/>

          <div className="payment-row total">
            <span>Gross Price</span>
            <span>₹{grossPrice.toFixed(0)}</span>
          </div>

        </div>

        <button className="pay-btn">
          Pay ₹{grossPrice.toFixed(0)}
        </button>

      </div>

    </section>

  );

}

export default Payment;