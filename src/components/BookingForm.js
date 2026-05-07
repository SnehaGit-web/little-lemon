import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function BookingForm() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    date: '',
    time: '17:00',
    guests: 1,
    occasion: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Booking submitted:', formData);
    navigate('/confirmed');
  };

  return (
    <form 
      className="booking-form" 
      onSubmit={handleSubmit}
    >
      <div className="form-group">
        <label htmlFor="date">
          Choose date 
          <span className="required-marker">*</span>
        </label>
        <input
          type="date"
          id="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="time">
          Choose time 
          <span className="required-marker">*</span>
        </label>
        <select
          id="time"
          name="time"
          value={formData.time}
          onChange={handleChange}
          required
        >
          <option value="17:00">5:00 PM</option>
          <option value="18:00">6:00 PM</option>
          <option value="19:00">7:00 PM</option>
          <option value="20:00">8:00 PM</option>
          <option value="21:00">9:00 PM</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="guests">
          Number of guests 
          <span className="required-marker">*</span>
        </label>
        <input
          type="number"
          id="guests"
          name="guests"
          min="1"
          max="10"
          value={formData.guests}
          onChange={handleChange}
          required
        />
        <span className="field-hint">
          Maximum 10 guests per booking
        </span>
      </div>

      <div className="form-group">
        <label htmlFor="occasion">Occasion</label>
        <select
          id="occasion"
          name="occasion"
          value={formData.occasion}
          onChange={handleChange}
        >
          <option value="">Select an occasion (optional)</option>
          <option value="birthday">Birthday</option>
          <option value="engagement">Engagement</option>
          <option value="anniversary">Anniversary</option>
        </select>
      </div>

      <button 
        type="submit" 
        className="btn-primary"
      >
        Make your reservation
      </button>
    </form>
  );
}

export default BookingForm;