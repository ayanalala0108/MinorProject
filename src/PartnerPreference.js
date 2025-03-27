import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./PartnerPreference.css";

function PartnerPreference() {
  const navigate = useNavigate();
  const handleSignIn = () => {
    navigate("/dashboard");
  };
  const questionsWithOptions = [
    {
      question: "What age range would you prefer for your partner?",
      options: ["18-25", "26-35", "36-50", "50+"],
    },
    {
      question: "What education level would you prefer in a partner?",
      options: [
        "High School",
        "Bachelor's Degree",
        "Master's Degree",
        "No Preference",
      ],
    },
    {
      question: "How important is your parnter's career to you?",
      options: [
        "Very important",
        "Somewhat important",
        "Not important",
        "No preference",
      ],
    },
    {
      question: "Would you prefer a partner with the same type of disability?",
      options: ["Yes", "No", "Open to any disability", "No preference"],
    },
    {
      question:
        "Would you consider a partner who requires significant care and assistance?",
      options: ["Yes", "No", "Depends on the situation", "No preference"],
    },
    {
      question: "Would you prefer a partner who uses assistive devices?",
      options: ["Yes", "No", "Doesn't matter", "No preference"],
    },
    {
      question: "Do you prefer an outgoing or reserved partner?",
      options: ["Outgoing", "Reserved", "Balanced", "No preference"],
    },
    {
      question: "How important is emotional connection in a relationship?",
      options: [
        "Very important",
        "Somewhat important",
        "Not important",
        "No preference",
      ],
    },
    {
      question: "Would you prefer a partner who shares similar hobbies?",
      options: ["Yes", "No", "Doesn't matter", "No preference"],
    },
    {
      question: " Would you prefer a partner who is financially independent?",
      options: ["Yes", "No", "Doesn't matter", "No preference"],
    },
    {
      question:
        "Would you prefer a partner with a strong family support system?",
      options: ["Yes", "No", "Doesn't matter", "No preference"],
    },
    {
      question:
        "How willing should your partner be to provide care and support?",
      options: [
        "Fully supportive",
        "Partially supportive",
        "Independent partner",
        "No preference",
      ],
    },
    {
      question:
        "Would you prefer to communicate through video or audio profiles instead of text?",
      options: ["Yes", "No", "Doesn't matter", "No preference"],
    },
    {
      question:
        "How comfortable are you with AI-based matchmaking recommendations?",

      options: [
        "Very Comfortable",
        "Somewhat comfortable",
        "Uncomfortable",
        "No preference",
      ],
    },

    {
      question:
        "Would you join a support group to discuss matchmaking challenges with other users?",
      options: ["Yes", "No", "Maybe", "No preference"],
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
    <div className="partner-preference-container">
      <header className="pheader">
        <h1 className="website-name">Sangmeet</h1>
      </header>
      <div className="intro-text">
        <p>
          Please answer the following questions to help us understand your
          preferences.
        </p>
      </div>
      <div className="questionnaire">
        {questionsWithOptions.map((item, index) => (
          <div key={index} className="question-box">
            <p className="question-text">{item.question}</p>
            <div className="options">
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
      <button onClick={handleSignIn} className="d-button">
        Go to Dashboard
      </button>
    </div>
  );
}

export default PartnerPreference;
