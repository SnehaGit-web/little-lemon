const reviewsData = [
  {
    id: 1,
    name: "Sarah Mitchell",
    rating: 5,
    review: "Amazing food and so easy to book online! The Mediterranean dishes are authentic and delicious.",
    image: "/reviewer1.jpg"
  },
  {
    id: 2,
    name: "James Rodriguez",
    rating: 5,
    review: "Best restaurant in Chicago. The Greek salad is outstanding and the service is always friendly.",
    image: "/reviewer2.jpg"
  },
  {
    id: 3,
    name: "Tilly Kim",
    rating: 4,
    review: "Love the lemon dessert! Grandma's recipe really shines through. Will definitely be back.",
    image: "/reviewer3.jpg"
  },
  {
    id: 4,
    name: "Michael Chen",
    rating: 5,
    review: "Wonderful atmosphere and incredible food. The online reservation system made booking so simple.",
    image: "/reviewer4.jpg"
  }
];

function ReviewCard({ name, rating, review, image }) {
  const stars = "★".repeat(rating) + "☆".repeat(5 - rating);
  
  return (
    <div className="card">
      <div className="card-body">
        <img 
          src={image} 
          alt={name}
          className="avatar-img"
        />
        <h4>{name}</h4>
        <div className="stars">{stars}</div>
        <p className="text-small">{review}</p>
      </div>
    </div>
  );
}

function CustomersSay() {
  return (
    <section className="testimonials">
      <h2>Testimonials</h2>
      <div className="testimonials-grid">
        {reviewsData.map((review) => (
          <ReviewCard
            key={review.id}
            name={review.name}
            rating={review.rating}
            review={review.review}
            image={review.image}
          />
        ))}
      </div>
    </section>
  );
}

export default CustomersSay;