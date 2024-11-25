import React, { useState } from "react";
import "./RegisterPage.css";

function RegisterPage() {
  const [isParentalVigilance, setIsParentalVigilance] = useState(false);

  const handleToggle = () => {
    setIsParentalVigilance((prevState) => !prevState);
  };

  return (
    <div className="register-page">
      <div className="header">
        <img src="logo.png" alt="Logo" className="logo" />
        <h2>Register Here</h2>
      </div>
      <form className="register-form">
        <div className="form-group">
          <label>Full Name</label>
          <input type="text" required />
        </div>

        <div className="form-group">
          <label>Username</label>
          <input type="text" required />
        </div>

        <div className="form-group">
          <label>Email</label>
          <input type="email" required />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input type="password" required />
        </div>

        <div className="form-group">
          <label>Confirm Password</label>
          <input type="password" required />
        </div>

        <div className="form-group">
          <label>Create Profile For</label>
          <input type="text" required />
        </div>

        <div className="form-group">
          <label>Gender</label>
          <input type="text" required />
        </div>

        <div className="form-group">
          <label>Height</label>
          <input type="text" required />
        </div>

        <div className="form-group">
          <label>Date Of Birth</label>
          <input type="date" required />
        </div>

        <div className="form-group">
          <label>Religion</label>
          <input type="text" required />
        </div>

        <div className="form-group">
          <label>Caste</label>
          <input type="text" required />
        </div>

        <div className="form-group">
          <label>Marital Status</label>
          <input type="text" required />
        </div>

        <div className="form-group">
          <label>Mother Tongue</label>
          <input type="text" required />
        </div>

        <div className="form-group">
          <label>Country</label>
          <input type="text" required />
        </div>

        <div className="form-group">
          <label>State</label>
          <input type="text" required />
        </div>

        <div className="form-group">
          <label>City</label>
          <input type="text" required />
        </div>

        <div className="form-group">
          <label>Pincode</label>
          <input type="text" required />
        </div>

        <div className="form-group">
          <label>Mobile Number</label>
          <input type="tel" required />
        </div>

        <div className="form-group">
          <label>Upload Document</label>
          <input type="file" required />
        </div>

        <div className="form-group">
          <label>Enable Parental Vigilance?</label>
          <div className="toggle-switch">
            <span>{isParentalVigilance ? "On" : "Off"}</span>
            <input
              type="checkbox"
              checked={isParentalVigilance}
              onChange={handleToggle}
            />
          </div>
        </div>

        <button type="submit" className="register-button">
          Register
        </button>
      </form>
    </div>
  );
}

export default RegisterPage;
