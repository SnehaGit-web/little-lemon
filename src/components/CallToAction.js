import { Link } from "react-router-dom";

function CallToAction() {
  return (
    <section className="hero-banner">
      <div
        className="hero-bg"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1600&fit=crop')`
        }}
      />
      <div className="hero-overlay" />
      <div className="hero-content">
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>
          We are a family owned Mediterranean restaurant,
          focused on traditional recipes served with a
          modern twist.
        </p>
        <Link to="/booking">
          <button className="btn-primary hero-btn">
            Reserve a Table
          </button>
        </Link>
      </div>
    </section>
  );
}

export default CallToAction;