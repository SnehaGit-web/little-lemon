import { Link } from 'react-router-dom';

function Nav() {
  return (
    <nav aria-label="Main navigation">
      <Link to="/">
        <img 
          src="/logo.png" 
          alt="Little Lemon Logo" 
          className="logo" 
        />
      </Link>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/menu">Menu</Link></li>
        <li><Link to="/booking">Reservations</Link></li>
        <li><Link to="/order">Order Online</Link></li>
        <li><Link to="/login">Login</Link></li>
      </ul>
      <Link to="/booking">
        <button className="btn-primary">
          Reserve a Table
        </button>
      </Link>
    </nav>
  );
}

export default Nav;