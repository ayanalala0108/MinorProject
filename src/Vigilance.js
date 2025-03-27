import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Vigilance.css";

export function Vigilance() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", phone: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData({ email: "", phone: "" });
    alert("Successfully Update");
  };

  const handleSignIn = () => {
    navigate("/sign");
  };

  return (
    <>
      <nav className="navbar">Sangmeet</nav>

      <div className="container">
        <form onSubmit={handleSubmit} className="form">
          <h2 className="title">Permission</h2>
          <div className="input-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="phone">Phone Number</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
          {/* <button type="submit" className="profile-button">
            Submit
          </button> */}
          <button onClick={handleSignIn} className="profile-button">
            Login
          </button>
        </form>
      </div>
    </>
  );
}
