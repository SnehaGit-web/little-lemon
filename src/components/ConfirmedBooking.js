import { Link } from "react-router-dom";

function ConfirmedBooking() {
  return (
    <section className="confirmed-booking">
      <div className="confirmed-content">
        <div className="confirmed-icon">✓</div>
        <h2>Booking Confirmed!</h2>
        <p>
          Your table has been successfully reserved 
          at Little Lemon. We look forward to 
          welcoming you!
        </p>
        <p>
          A confirmation has been sent to your 
          email address.
        </p>
        <Link to="/">
          <button className="btn-primary">
            Return to Homepage
          </button>
        </Link>
      </div>
    </section>
  );
}

export default ConfirmedBooking;