function Footer() {
  return (
    <footer>
      <div>
        <img src="/little-lemon-logo.png" alt="Little Lemon Logo" />
      </div>
      <div>
        <h3>Navigation</h3>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/menu">Menu</a></li>
          <li><a href="/reservations">Reservations</a></li>
          <li><a href="/order">Order Online</a></li>
        </ul>
      </div>
      <div>
        <h3>Contact</h3>
        <address>
          <p>123 Mediterranean Way</p>
          <p>Chicago, IL 60601</p>
          <p>(312) 555-0187</p>
          <p>info@littlelemon.com</p>
        </address>
      </div>
      <div>
        <h3>Social Media</h3>
        <ul>
          <li><a href="https://facebook.com">Facebook</a></li>
          <li><a href="https://instagram.com">Instagram</a></li>
          <li><a href="https://twitter.com">Twitter</a></li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;