function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">DriveX</div>

      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#cars">Cars</a></li>
        <li><a href="#booking">Booking</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;