import { useState } from "react";

function Booking() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    car: "",
    date: "",
    message: ""
  });

  const [success, setSuccess] = useState(false);

  // input handle
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // submit handle
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formData);

    // success message show
    setSuccess(true);

    // reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      car: "",
      date: "",
      message: ""
    });

    // 3 sec aprm hide message
    setTimeout(() => {
      setSuccess(false);
    }, 3000);
  };

  return (
    <section className="booking-section" id="booking">
      <h2>Book Your Car</h2>
      <p className="section-subtitle">
        Fill this form to book your dream car
      </p>

      {/* SUCCESS MESSAGE */}
      {success && (
        <p style={{
          textAlign: "center",
          color: "#22c55e",
          marginBottom: "15px",
          fontWeight: "bold"
        }}>
          ✅ Booking Successful! Our team will contact you soon.
        </p>
      )}

      <form className="booking-form" onSubmit={handleSubmit}>
        
        <input
          type="text"
          name="name"
          placeholder="Enter Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Enter Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <input
          type="tel"
          name="phone"
          placeholder="Enter Your Phone Number"
          value={formData.phone}
          onChange={handleChange}
          required
        />

        <select
          name="car"
          value={formData.car}
          onChange={handleChange}
          required
        >
          <option value="">Select Your Car</option>
          <option>BMW M4</option>
          <option>Audi A6</option>
          <option>Mercedes Benz C-Class</option>
          <option>Rolls Royce Ghost</option>
          <option>Mahindra Thar</option>
          <option>Toyota Fortuner</option>
        </select>

        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          required
        />

        <textarea
          rows="5"
          name="message"
          placeholder="Enter your message"
          value={formData.message}
          onChange={handleChange}
        ></textarea>

        <button type="submit">Confirm Booking</button>
      </form>
    </section>
  );
}

export default Booking;