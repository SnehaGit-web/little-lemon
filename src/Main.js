function Main() {
  return (
    <main>
      <section className="hero" style={{backgroundColor: '#495E57'}}>
        <div className="hero-content">
          <h1>Little Lemon</h1>
          <h2 style={{color: '#FFFFFF'}}>Chicago</h2>
          <p className="text-lead" style={{color: '#EDEFEE'}}>
            We are a family owned Mediterranean restaurant,
            focused on traditional recipes served with a modern twist.
          </p>
          <button className="btn-primary">Reserve a Table</button>
        </div>
        <div>
          <img 
            className="hero-img"
            src="/hero-image.jpg" 
            alt="Little Lemon delicious food" 
          />
        </div>
      </section>

      <section className="highlights">
        <div className="section-header">
          <h2>This Week's Specials!</h2>
          <button className="btn-secondary">Online Menu</button>
        </div>
        <div className="highlights-grid">
          <div className="card">
            <img 
              className="dish-img"
              src="/greek-salad.jpg" 
              alt="Greek Salad" 
            />
            <div className="card-body">
              <div className="card-header">
                <h3>Greek Salad</h3>
                <span className="price">$12.99</span>
              </div>
              <p className="text-small">
                The famous greek salad of crispy lettuce, 
                peppers, olives and our Chicago style feta cheese.
              </p>
              <button className="btn-small">Order a delivery</button>
            </div>
          </div>
        </div>
      </section>

      <section className="testimonials">
        <h2>Testimonials</h2>
        <div className="testimonials-grid">
          <div className="card">
            <div className="card-body">
              <img 
                className="avatar-img"
                src="/reviewer1.jpg" 
                alt="Sarah Mitchell" 
              />
              <h4>Sarah Mitchell</h4>
              <div className="stars">★★★★★</div>
              <p className="text-small">
                Amazing food and so easy to book online!
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="about">
        <div className="about-grid">
          <div>
            <h2>A little bit about us!</h2>
            <p>
              Little Lemon is a charming neighbourhood bistro 
              that serves simple food and classic cocktails in 
              a lively but casual environment.
            </p>
          </div>
          <div className="about-images">
            <img 
              className="about-img"
              src="/about-1.jpg" 
              alt="Restaurant interior" 
            />
            <img 
              className="about-img"
              src="/about-2.jpg" 
              alt="Chef cooking" 
            />
          </div>
        </div>
      </section>
    </main>
  );
}

export default Main;