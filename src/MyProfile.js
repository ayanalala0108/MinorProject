import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./MyProfile.css";

function MyProfile() {
  const navigate = useNavigate();
  const handleSignIn = () => {
    navigate("/PartnerPreference");
  };
  const questionsWithOptions = [
    {
      question:
        "What information is important for you when setting up a profile?",
      options: [
        "Name and Age",
        "Location",
        "Education and Profession",
        "All of the above",
      ],
    },
    {
      question: "How would you describe your family type?",
      options: ["Joint Family", "Nuclear Family", "Extended Family", "Other"],
    },
    {
      question: "What is your highest level of education?",
      options: [
        "High School",
        "Bachelor's Degree",
        "Master's Degree",
        "Doctorate",
      ],
    },
    {
      question: "What type of employment are you engaged in?",
      options: [
        "Self Employed",
        "Private Sector",
        "Government Job",
        "Unemployed",
      ],
    },
    {
      question: "What are your dietary habits?",
      options: ["Vegetarian", "Non-Vegetarian", "Vegan", "Jain"],
    },
    {
      question: "How often do you exercise?",
      options: ["Daily", "Weekly", "Rarely", "Never"],
    },
    {
      question: "Do you smoke or drink?",
      options: ["Yes", "No", "Occasionally", "Prefer not to say"],
    },
    {
      question: "What type of disability do you have?",
      options: [
        "Vision Impairment",
        "Hearing Loss",
        "Physical Disability",
        "Other",
      ],
    },
    {
      question: "What level of mobility do you have?",
      options: [
        " Fully independent",
        "Needs some assistance",
        "Completely dependent",
        "No preference",
      ],
    },
    {
      question: " Do you use any assistive devices?",
      options: ["Wheelchair", "Hearing Aids", "Prosthetics", "Other"],
    },
    {
      question: "Do you seek a partner who understands your disability?",
      options: [
        "Yes, with the same disability",
        "Open to any disability",
        "No preference",
        "Wants an able-bodied partner",
      ],
    },
    {
      question: "How important is emotional support to you?",
      options: [
        "Very important",
        "Somewhat important",
        "Not important",
        "No preference",
      ],
    },
    {
      question: "Do you prefer a partner who is highly independent??",
      options: ["Yes", "No", "Doesn't matter", "No preference"],
    },
    {
      question: " Do you need any special accessibility features?",

      options: [
        "Wheelchair-accessible house",
        "Sign language communication",
        "Braille support",
        "All of the above",
      ],
    },
    {
      question: " How much financial independence do you have?",
      options: [
        "Fully independent",
        "Partially dependent on family",
        "Government support",
        "No source of income",
      ],
    },
  ];

  const [answers, setAnswers] = useState(
    Array(questionsWithOptions.length).fill("")
  );

  const handleChange = (index, value) => {
    const newAnswers = [...answers];
    newAnswers[index] = value;
    setAnswers(newAnswers);
  };

  return (
    <div className="my-profile-container">
      <header className="mheader">
        <h1 className="mwebsite-name">Sangmeet</h1>
      </header>
      <div className="mpintro-text">
        <p>
          Please answer the following questions to help us understand your
          preferences.
        </p>
      </div>
      <div className="mpquestionnaire">
        {questionsWithOptions.map((item, index) => (
          <div key={index} className="mpquestion-box">
            <p className="mpquestion-text">{item.question}</p>
            <div className="mpoptions">
              {item.options.map((option, optIndex) => (
                <label key={optIndex}>
                  <input
                    type="radio"
                    name={`question-${index}`}
                    value={option}
                    onChange={() => handleChange(index, option)}
                  />
                  {option}
                </label>
              ))}
            </div>
          </div>
        ))}
      </div>
      <button onClick={handleSignIn} className="pp-button">
        Go to Partner Preferences
      </button>
    </div>
  );
}

export default MyProfile;
