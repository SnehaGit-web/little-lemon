import { useReducer } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Homepage from "./Homepage";
import BookingPage from "./BookingPage";
import ConfirmedBooking from "./ConfirmedBooking";
import { initializeTimes, updateTimes } from "./bookingUtils";

// Simple placeholder component for unbuilt pages
const ComingSoon = ({ pageName }) => (
  <section style={{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '60vh',
    gap: '16px',
    textAlign: 'center',
    padding: '40px'
  }}>
    <h2 style={{
      fontFamily: "'Markazi Text', serif",
      fontSize: '40px',
      color: '#495E57'
    }}>
      {pageName}
    </h2>
    <p style={{
      fontFamily: "'Karla', sans-serif",
      fontSize: '16px',
      color: '#666666',
      maxWidth: '400px'
    }}>
      This page is coming soon. In the meantime 
      why not reserve a table at Little Lemon?
    </p>
    <a href="/booking" style={{
      backgroundColor: '#F4CE14',
      color: '#495E57',
      padding: '14px 28px',
      borderRadius: '20px',
      textDecoration: 'none',
      fontFamily: "'Karla', sans-serif",
      fontWeight: '700',
      fontSize: '16px'
    }}>
      Reserve a Table
    </a>
  </section>
);

function Main() {
  const navigate = useNavigate();

  const [availableTimes, dispatch] = useReducer(
    updateTimes,
    initializeTimes()
  );

  const submitForm = (formData) => {
    console.log("submitForm called:", formData);
    if (typeof window.submitAPI === "function") {
      const result = window.submitAPI(formData);
      if (result) {
        navigate("/confirmed");
      }
    } else {
      navigate("/confirmed");
    }
  };

  return (
    <main id="main-content">
      <Routes>
        <Route path="/" element={<Homepage />} />
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
        <Route
          path="/about"
          element={<ComingSoon pageName="About Little Lemon" />}
        />
        <Route
          path="/menu"
          element={<ComingSoon pageName="Our Menu" />}
        />
        <Route
          path="/order"
          element={<ComingSoon pageName="Order Online" />}
        />
        <Route
          path="/login"
          element={<ComingSoon pageName="Login" />}
        />
      </Routes>
    </main>
  );
}

export default Main;