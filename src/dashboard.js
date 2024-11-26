import React from "react";
import "./dashboard.css"; // Importing the CSS file

const Dashboard = () => {
  return (
    <div className="app">
      <nav className="navbar">
        <div className="navbar-left">
          <span className="logo">Sangmeet</span>
          <div className="search-container">
            <input
              type="text"
              placeholder="Search..."
              aria-label="Search"
              className="search-input"
            />
            <i className="fas fa-search search-icon"></i>
          </div>
        </div>
        <div className="navbar-right">
          <a href="#" className="nav-link">
            Home
          </a>
          <a href="#" className="nav-link">
            Help
          </a>
          <a href="#" className="nav-link">
            Sign out
          </a>
        </div>
      </nav>
      <div className="secondary-nav">
        <a href="#" className="secondary-link">
          Dashboard
        </a>
        <a href="#" className="secondary-link">
          My Profile <i className="fas fa-user"></i>
        </a>
        <a href="#" className="secondary-link">
          My Interest <i className="fas fa-heart"></i>
        </a>
        <a href="#" className="secondary-link">
          Shortlist
        </a>
        <a href="#" className="secondary-link">
          Messages
        </a>
      </div>
    </div>
  );
};

export default Dashboard;
