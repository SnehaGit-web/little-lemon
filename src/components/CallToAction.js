import { Link } from 'react-router-dom';

function CallToAction() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p className="text-lead">
          We are a family owned Mediterranean restaurant, 
          focused on traditional recipes served with a 
          modern twist.
        </p>
        <Link to="/booking">
          <button className="btn-primary hero-reserve-btn">
            Reserve a Table
          </button>
        </Link>
      </div>
      <div className="hero-image">
        <img 
          src="/hero-image.jpg" 
          alt="Little Lemon restaurant food" 
          className="hero-img"
        />
      </div>
    </section>
  );
}

export default CallToAction;