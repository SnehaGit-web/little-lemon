import BookingForm from "./BookingForm";

function BookingPage({ availableTimes, dispatch, submitForm }) {
  console.log("BookingPage submitForm type:", typeof submitForm);
  
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