import React, { useState } from "react";
import "./MainPage.css";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import RegisterPage from "./RegisterPage"; // Import RegisterPage

const successStories = [
  {
    name: "Name A and Name B",
    image: "image2.png",
    story:
      "Their story which tells how they met through our website and how they got married.",
  },
  {
    name: "Name C and Name D",
    image: "image3.png",
    story:
      "They found each other through Sangmeet and built a beautiful relationship.",
  },
  // Add more stories as needed
];

function MainPage() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigate = useNavigate(); // Initialize navigate

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % successStories.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - 1 + successStories.length) % successStories.length
    );
  };

  const openRegisterPage = () => {
    navigate("/register"); // Navigate to the Register page
  };

  const openSignPage = () => {
    navigate("/sign"); // Navigate to the Register page
  };

  return (
    <div className="main-page">
      <header className="header">
        <div className="header-left">
          <img src="mono.png" alt="Sangmeet Logo" className="logo" />
          <div className="monotext">Sangmeet</div>
        </div>
        <div className="auth-buttons">
          <button className="register-button" onClick={openRegisterPage}>
            Register
          </button>
          <button className="login-button" onClick={openSignPage}>
            Login
          </button>
        </div>
      </header>
      <section className="intro-section">
        <div className="intro-content">
          <img src="image1.png" alt="img1" className="image1" />
          <div className="intro-text">
            <h1>Your Forever Starts Here...</h1>
            <p>Matchmaking made easy for the Down syndrome community.</p>
            <p>Find your soulmate in 3 easy steps!</p>
            <ul>
              <li>Make your profile</li>
              <li>Specify what you want in your potential better half</li>
              <li>Search away!</li>
            </ul>
          </div>
        </div>
      </section>
      <section className="about-section">
        <h2>
          About <span className="sangmeet-text">Sangmeet</span>
        </h2>
        <p>
          Here at <span className="sangmeet-text">Sangmeet</span> we aim towards
          finding matrimonial solutions for the Down syndrome community. Our
          mission is to create meaningful connections and celebrate love in all
          its forms.
        </p>
        <p>
          At <span className="sangmeet-text">Sangmeet</span>, we believe
          everyone deserves companionship and happiness.
        </p>
        <p>
          We provide a supportive space where individuals and families can find
          and share love, fostering lasting relationships built on understanding
          and acceptance.
        </p>
        <p>Join us in celebrating the beauty of love and connection!</p>
      </section>
      <section className="success-stories-section">
        <h2>
          Some <span className="sangmeet-text">Sangmeet</span> Success Stories
        </h2>
        <div className="success-story-container">
          <button className="nav-button left" onClick={handlePrev}>
            &lt;
          </button>
          <div className="success-story">
            <img
              src={successStories[currentIndex].image}
              alt="Couple Image"
              className="couple-image"
            />
            <h3>{successStories[currentIndex].name}</h3>
            <p>{successStories[currentIndex].story}</p>
          </div>
          <button className="nav-button right" onClick={handleNext}>
            &gt;
          </button>
        </div>
      </section>
      <footer className="footer">
        <div className="contact-info">
          <p>
            You can reach out to us at{" "}
            <a href="mailto:sangmeetmatrimony@gmail.com">
              sangmeetmatrimony@gmail.com
            </a>
          </p>
          <p>or give us a call or message at +91 9874*****</p>
        </div>

        <div className="footer-logo">
          <img src="mono.png" alt="Sangmeet Logo" />
          <p>Giving Easy Matrimony Solutions for the Down Syndrome community</p>
        </div>
      </footer>
    </div>
  );
}

export default MainPage;
