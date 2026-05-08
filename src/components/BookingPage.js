import { useState } from "react";
import { useNavigate } from "react-router-dom";
import BookingForm from "./BookingForm";

function BookingPage() {
  const navigate = useNavigate();

  // Stateful array of available times
  // as required by the exercise
  const [availableTimes, setAvailableTimes] = useState([
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00"
  ]);

  // Dispatch function to update times
  const dispatch = (action) => {
    if (action.type === "UPDATE_TIMES") {
      // Update available times based on selected date
      // For now returns same times
      // Will connect to API in next exercise
      setAvailableTimes([
        "17:00",
        "18:00",
        "19:00",
        "20:00",
        "21:00"
      ]);
    }
  };

  // Handle form submission
  const submitForm = (formData) => {
    console.log("Booking data:", formData);
    navigate("/confirmed");
  };

  return (
    <section>
      <h2>Reserve a Table</h2>
      <BookingForm
        availableTimes={availableTimes}
        dispatch={dispatch}
        submitForm={submitForm}
      />
    </section>
  );
}

export default BookingPage;