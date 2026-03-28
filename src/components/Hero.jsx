function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-text">
        <h1>Drive Your Dream Car Today</h1>
        <p>
          Welcome to DriveX Car Showroom. Explore luxury cars, family cars,
          sports cars, and SUVs with full details, attractive images, and easy booking.
        </p>
        <a href="#cars" className="hero-btn">View Cars</a>
      </div>

      <div className="hero-image">
        <img
          src="https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=1000&q=80"
          alt="Showroom Car"
        />
      </div>
    </section>
  );
}

export default Hero;