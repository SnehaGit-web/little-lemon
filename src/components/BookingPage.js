import BookingForm from './BookingForm';

function BookingPage() {
  return (
    <section className="booking-page">
      <div className="booking-header">
        <h2>Reserve a Table</h2>
        <p>
          Book your table at Little Lemon and enjoy 
          an authentic Mediterranean dining experience.
        </p>
      </div>
      <BookingForm />
    </section>
  );
}

export default BookingPage;