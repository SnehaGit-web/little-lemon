import { useState } from "react";

function BookingForm({ availableTimes, dispatch, submitForm }) {

  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("Birthday");

  // Error state
  const [errors, setErrors] = useState({
    date: "",
    time: "",
    guests: ""
  });

  // Touched state — only show errors after field interaction
  const [touched, setTouched] = useState({
    date: false,
    time: false,
    guests: false
  });

  const today = new Date().toISOString().split("T")[0];

  // Validate single field
  const validateField = (name, value) => {
    switch (name) {
      case "date":
        if (!value) {
          return "Please select a date";
        }
        if (value < today) {
          return "Please select a future date";
        }
        return "";
      case "time":
        if (!value) {
          return "Please select a time";
        }
        return "";
      case "guests":
        if (!value || value < 1) {
          return "Minimum 1 guest required";
        }
        if (value > 10) {
          return "Maximum 10 guests per booking";
        }
        return "";
      default:
        return "";
    }
  };

  // Handle date change
  const handleDateChange = (e) => {
    const value = e.target.value;
    setDate(value);
    dispatch({ type: "UPDATE_TIMES", date: value });
    setTouched(prev => ({ ...prev, date: true }));
    setErrors(prev => ({
      ...prev,
      date: validateField("date", value)
    }));
  };

  // Handle time change
  const handleTimeChange = (e) => {
    const value = e.target.value;
    setTime(value);
    setTouched(prev => ({ ...prev, time: true }));
    setErrors(prev => ({
      ...prev,
      time: validateField("time", value)
    }));
  };

  // Handle guests change
  const handleGuestsChange = (e) => {
    const value = e.target.value;
    setGuests(value);
    setTouched(prev => ({ ...prev, guests: true }));
    setErrors(prev => ({
      ...prev,
      guests: validateField("guests", value)
    }));
  };

  // Check if form is valid
  const isFormValid =
    date !== "" &&
    time !== "" &&
    guests >= 1 &&
    guests <= 10 &&
    date >= today &&
    !errors.date &&
    !errors.time &&
    !errors.guests;

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Mark all fields as touched
    setTouched({ date: true, time: true, guests: true });

    // Validate all fields
    const newErrors = {
      date: validateField("date", date),
      time: validateField("time", time),
      guests: validateField("guests", guests)
    };
    setErrors(newErrors);

    // Only submit if no errors
    const hasErrors = Object.values(newErrors)
      .some(error => error !== "");

    if (!hasErrors) {
      submitForm({ date, time, guests, occasion });
    }
  };

  return (
    <form onSubmit={handleSubmit} noValidate>

      {/* Date field */}
      <div className="form-group">
        <label htmlFor="res-date">
          Choose date
          <span style={{ color: '#c0392b' }}> *</span>
        </label>
        <input
          type="date"
          id="res-date"
          value={date}
          min={today}
          onChange={handleDateChange}
          required
          style={{
            borderColor: touched.date && errors.date
              ? '#c0392b'
              : touched.date && !errors.date
              ? '#2e7d5e'
              : ''
          }}
        />
        {touched.date && errors.date && (
          <span
            className="error-message"
            role="alert"
          >
            {errors.date}
          </span>
        )}
      </div>

      {/* Time field */}
      <div className="form-group">
        <label htmlFor="res-time">
          Choose time
          <span style={{ color: '#c0392b' }}> *</span>
        </label>
        <select
          id="res-time"
          value={time}
          onChange={handleTimeChange}
          required
          style={{
            borderColor: touched.time && errors.time
              ? '#c0392b'
              : touched.time && !errors.time
              ? '#2e7d5e'
              : ''
          }}
        >
          <option value="">Select a time</option>
          {availableTimes.map((availableTime) => (
            <option
              key={availableTime}
              value={availableTime}
            >
              {availableTime}
            </option>
          ))}
        </select>
        {touched.time && errors.time && (
          <span
            className="error-message"
            role="alert"
          >
            {errors.time}
          </span>
        )}
      </div>

      {/* Guests field */}
      <div className="form-group">
        <label htmlFor="guests">
          Number of guests
          <span style={{ color: '#c0392b' }}> *</span>
        </label>
        <input
          type="number"
          id="guests"
          placeholder="1"
          min="1"
          max="10"
          value={guests}
          onChange={handleGuestsChange}
          required
          style={{
            borderColor: touched.guests && errors.guests
              ? '#c0392b'
              : touched.guests && !errors.guests
              ? '#2e7d5e'
              : ''
          }}
        />
        {touched.guests && errors.guests && (
          <span
            className="error-message"
            role="alert"
          >
            {errors.guests}
          </span>
        )}
        {/* Changed hint text to avoid duplicate text with error message */}
        <span className="field-hint">
          Between 1 and 10 guests per booking
        </span>
      </div>

      {/* Occasion field */}
      <div className="form-group">
        <label htmlFor="occasion">
          Occasion
        </label>
        <select
          id="occasion"
          value={occasion}
          onChange={(e) => setOccasion(e.target.value)}
        >
          <option value="Birthday">Birthday</option>
          <option value="Anniversary">Anniversary</option>
          <option value="Engagement">Engagement</option>
        </select>
      </div>

      {/* Submit button */}
      <button
        type="submit"
        className="btn-primary"
        aria-label="Make Your Reservation"
        style={{
          opacity: isFormValid ? 1 : 0.5,
          cursor: isFormValid ? 'pointer' : 'not-allowed'
        }}
      >
        Make Your Reservation
      </button>

    </form>
  );
}

export default BookingForm;