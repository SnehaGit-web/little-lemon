function Nav() {
  return (
    <nav>
      <div>
        <img 
          className="logo"
          src="/little-lemon-logo.png" 
          alt="Little Lemon Logo" 
        />
      </div>
      <ul>
        <li><a href="/" className="active">Home</a></li>
        <li><a href="/about">About</a></li>
        <li><a href="/menu">Menu</a></li>
        <li><a href="/reservations">Reservations</a></li>
        <li><a href="/order">Order Online</a></li>
        <li><a href="/login">Login</a></li>
      </ul>
      <button className="btn-primary">Reserve a Table</button>
    </nav>
  );
}

export default Nav;