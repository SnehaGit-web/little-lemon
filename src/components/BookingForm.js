import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


function BookingForm({ availableTimes, dispatch, submitForm }) {

  // STEP 3 — State variable for each form field
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState("Birthday");

  // Handle date change
  const handleDateChange = (e) => {
    setDate(e.target.value);
    dispatch({
      type: "UPDATE_TIMES",
      date: e.target.value
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    submitForm({ date, time, guests, occasion });
  };

  return (
    <form onSubmit={handleSubmit}>

      {/* Date field */}
      <div>
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

      {/* Time field */}
      <div>
        <label htmlFor="res-time">
          Choose time
        </label>
        <select
          id="res-time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          required
        >
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

      {/* Number of guests field */}
      <div>
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

      {/* Occasion field */}
      <div>
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
        </select>
      </div>

      {/* Submit button */}
      <button
        type="submit"
        aria-label="On Click"
      >
        Make Your Reservation
      </button>

    </form>
  );
}

export default BookingForm;