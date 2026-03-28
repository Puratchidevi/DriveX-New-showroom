import cars from "../data/cars";
import CarCard from "./CarCard";

function CarList() {
  return (
    <section className="cars-section" id="cars">
      <h2>Our Premium Cars</h2>
      <p className="section-subtitle">
        Choose your favorite car from our colourful showroom collection
      </p>

      <div className="cars-grid">
        {cars.map((car) => (
          <CarCard key={car.id} car={car} />
        ))}
      </div>
    </section>
  );
}

export default CarList;