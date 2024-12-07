import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./fp.css";

const ForgotPassword = () => {
  const navigate = useNavigate();
  const [newPassword, setNewP] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleFp = () => {
    if (!newPassword || !confirmPassword) {
      alert("Please fill in both fields.");
      return;
    } else {
      navigate("/sign");
    }
  };

  console.log("newPassword", newPassword);
  console.log("confirmPassword:", confirmPassword);

  return (
    <div className="fp-container">
      <div className="headerFp">
        <span className="name">Sangmeet</span>
      </div>
      <div className="fp-form">
        <h2>Forgot Password</h2>
        <label htmlFor="newPassword">Enter New Password</label>
        <input
          id="password"
          type="password"
          placeholder="Enter New Password"
          value={newPassword}
          onChange={(e) => setNewP(e.target.value)}
        />
        <label htmlFor="confirmPassword">Confirm Password:</label>
        <input
          id="password"
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <button onClick={handleFp} className="setNewP-button">
          Set New Password
        </button>
      </div>
    </div>
  );
};

export default ForgotPassword;
