import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./sign.css";

const Sign = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const handleSignIn = () => {
    if (!email || !password) {
      alert("Please fill in both fields.");
      return;
    } else {
      navigate("/dashboard");
    }
  };

  // Handle login logic here (e.g., API call)
  console.log("Email:", email);
  console.log("Password:", password);
  console.log("Remember Me:", rememberMe);

  return (
    <div className="login-container">
      <div className="headerSignIn">
        <span className="brand">Sangmeet</span>
      </div>
      <div className="login-form">
        <h2>Login Here</h2>
        <label htmlFor="email">Email:</label>
        <input
          id="email"
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label htmlFor="password">Password:</label>
        <input
          id="password"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="remember-me">
          <label>
            <input
              type="checkbox"
              checked={rememberMe}
              onChange={() => setRememberMe(!rememberMe)}
            />
            Remember Me
          </label>
          <a href="#" className="forgot-password">
            Forgot Password?
          </a>
        </div>
        <button onClick={handleSignIn} className="login1-button">
          Login
        </button>
      </div>
    </div>
  );
};

export default Sign; // Correct export
