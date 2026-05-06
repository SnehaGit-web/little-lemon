function Footer() {
  return (
    <footer>
      <div className="footer-logo">
        <img 
          src="/little-lemon-logo.png" 
          alt="Little Lemon Restaurant Logo" 
        />
      </div>

      <nav aria-label="Footer Navigation">
        <h3>Navigation</h3>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/menu">Menu</a></li>
          <li><a href="/reservations">Reservations</a></li>
          <li><a href="/order">Order Online</a></li>
          <li><a href="/login">Login</a></li>
        </ul>
      </nav>

      <div className="footer-contact">
        <h3>Contact</h3>
        <address>
          <p>123 Mediterranean Way</p>
          <p>Chicago, IL 60601</p>
          <p>Phone: (312) 555-0187</p>
          <p>Email: info@littlelemon.com</p>
        </address>
      </div>

      <div className="footer-social">
        <h3>Social Media</h3>
        <ul>
          <li><a href="https://facebook.com" aria-label="Facebook">Facebook</a></li>
          <li><a href="https://instagram.com" aria-label="Instagram">Instagram</a></li>
          <li><a href="https://twitter.com" aria-label="Twitter">Twitter</a></li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;