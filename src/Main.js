function Main() {
  return (
    <main>
      <section className="hero">
        <div className="hero-content">
          <h1>Little Lemon</h1>
          <h2>Chicago</h2>
          <p>
            We are a family owned Mediterranean restaurant,
            focused on traditional recipes served with a modern twist.
          </p>
          <button className="hero-reserve-btn">
            Reserve a Table
          </button>
        </div>
        <div className="hero-image">
          <img src="/hero-image.jpg" alt="Little Lemon food" />
        </div>
      </section>

      <section className="highlights">
        <div className="highlights-header">
          <h2>This Week's Specials!</h2>
          <button className="online-menu-btn">Online Menu</button>
        </div>
        <div className="highlights-grid">
          <div className="dish-card">
            <img src="/greek-salad.jpg" alt="Greek Salad" />
            <div className="dish-card-body">
              <div className="dish-card-header">
                <h3>Greek Salad</h3>
                <span className="dish-price">$12.99</span>
              </div>
              <p>The famous greek salad of crispy lettuce, 
              peppers, olives and our Chicago style feta 
              cheese, garnished with crunchy garlic and 
              rosemary croutons.</p>
              <button className="order-btn">Order a delivery</button>
            </div>
          </div>
        </div>
      </section>

      <section className="testimonials">
        <h2>Testimonials</h2>
        <div className="testimonials-grid">
          <div className="review-card">
            <img src="/reviewer1.jpg" alt="Reviewer" />
            <h4>Sarah Mitchell</h4>
            <div className="review-stars">★★★★★</div>
            <p>Amazing food and so easy to book online!</p>
          </div>
        </div>
      </section>

      <section className="about">
        <div className="about-grid">
          <div className="about-content">
            <h2>A little bit about us!</h2>
            <p>
              Little Lemon is a charming neighbourhood bistro 
              that serves simple food and classic cocktails in 
              a lively but casual environment. We would love 
              to hear more about your experience with us.
            </p>
          </div>
          <div className="about-images">
            <img src="/about-1.jpg" alt="Restaurant interior" />
            <img src="/about-2.jpg" alt="Chef cooking" />
          </div>
        </div>
      </section>
    </main>
  );
}

export default Main;