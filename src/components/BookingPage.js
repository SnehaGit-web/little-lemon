import { useNavigate } from "react-router-dom";
import BookingForm from "./BookingForm";

function BookingPage({ availableTimes, dispatch }) {
  const navigate = useNavigate();

  // Submit booking data to API
  const submitForm = (formData) => {
    const result = window.submitAPI(formData);
    if (result) {
      // Navigate to confirmation on success
      navigate("/confirmed");
    } else {
      alert("Booking failed. Please try again.");
    }
  };

  return (
    <section className="booking-page">
      <div className="booking-header">
        <h2>Reserve a Table</h2>
        <p>
          Book your table at Little Lemon and enjoy
          an authentic Mediterranean dining experience.
        </p>
      </div>
      <BookingForm
        availableTimes={availableTimes}
        dispatch={dispatch}
        submitForm={submitForm}
      />
    </section>
  );
}

export default BookingPage;