import { useReducer } from "react";
import { Routes, Route } from "react-router-dom";
import Homepage from "./Homepage";
import BookingPage from "./BookingPage";
import ConfirmedBooking from "./ConfirmedBooking";

// Function to initialize available times
const initializeTimes = () => {
  return [
    "17:00",
    "18:00",
    "19:00",
    "20:00",
    "21:00",
    "22:00"
  ];
};

// Reducer function to update available times
const updateTimes = (state, action) => {
  switch (action.type) {
    case "UPDATE_TIMES":
      // For now returns same times regardless of date
      // Will connect to real API in future exercise
      return [
        "17:00",
        "18:00",
        "19:00",
        "20:00",
        "21:00",
        "22:00"
      ];
    default:
      return state;
  }
};

function Main() {
  // useReducer replaces useState for availableTimes
  const [availableTimes, dispatch] = useReducer(
    updateTimes,
    initializeTimes()
  );

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