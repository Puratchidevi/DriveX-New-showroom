function CarCard({ car }) {
  return (
    <div className="car-card">
      <img src={car.image} alt={car.name} className="car-image" />

      <div className="car-content">
        <h3>{car.name}</h3>
        <p className="price">{car.price}</p>
        <p className="car-description">{car.description}</p>

        <div className="car-details">
          <div><strong>Fuel:</strong> {car.fuel}</div>
          <div><strong>Mileage:</strong> {car.mileage}</div>
          <div><strong>Seating:</strong> {car.seating}</div>
          <div><strong>Transmission:</strong> {car.transmission}</div>
          <div><strong>Color:</strong> {car.color}</div>
          <div><strong>Engine:</strong> {car.engine}</div>
          <div><strong>Top Speed:</strong> {car.topSpeed}</div>
          <div><strong>Year:</strong> {car.year}</div>
          <div><strong>Rating:</strong> {car.rating}</div>
        </div>

        <a href="#booking" className="book-btn">Book Now</a>
      </div>
    </div>
  );
}

export default CarCard;