import { useState } from "react";

function BookingForm({ availableTimes, dispatch, submitForm }) {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("Birthday");

  // Dispatch date change to update available times via API
  const handleDateChange = (e) => {
    const selectedDate = e.target.value;
    setDate(selectedDate);
    dispatch({
      type: "UPDATE_TIMES",
      date: selectedDate
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    submitForm({
      date,
      time,
      guests,
      occasion
    });
  };

  return (
    <form onSubmit={handleSubmit}>

      <div className="form-group">
        <label htmlFor="res-date">
          Choose date
        </label>
        <input
          type="date"
          id="res-date"
          value={date}
          onChange={handleDateChange}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="res-time">
          Choose time
        </label>
        <select
          id="res-time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          required
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
      </div>

      <div className="form-group">
        <label htmlFor="guests">
          Number of guests
        </label>
        <input
          type="number"
          id="guests"
          placeholder="1"
          min="1"
          max="10"
          value={guests}
          onChange={(e) => setGuests(e.target.value)}
          required
        />
      </div>

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

      <button
        type="submit"
        className="btn-primary"
        aria-label="On Click"
      >
        Make Your Reservation
      </button>

    </form>
  );
}

export default BookingForm;