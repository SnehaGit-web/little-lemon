import { useReducer } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Homepage from "./Homepage";
import BookingPage from "./BookingPage";
import ConfirmedBooking from "./ConfirmedBooking";
import { initializeTimes, updateTimes } from "./bookingUtils";

function Main() {
  const navigate = useNavigate();

  const [availableTimes, dispatch] = useReducer(
    updateTimes,
    initializeTimes()
  );

  const submitForm = (formData) => {
    console.log("submitForm called in Main:", formData);
    if (typeof window.submitAPI === "function") {
      const result = window.submitAPI(formData);
      if (result) {
        navigate("/confirmed");
      }
    } else {
      console.log("submitAPI not available, navigating anyway");
      navigate("/confirmed");
    }
  };

  console.log("Main submitForm type:", typeof submitForm);

  return (
    <main>
      <Routes>
        <Route
          path="/"
          element={<Homepage />}
        />
        <Route
          path="/booking"
          element={
            <BookingPage
              availableTimes={availableTimes}
              dispatch={dispatch}
              submitForm={submitForm}
            />
          }
        />
        <Route
          path="/confirmed"
          element={<ConfirmedBooking />}
        />
      </Routes>
    </main>
  );
}

export default Main;