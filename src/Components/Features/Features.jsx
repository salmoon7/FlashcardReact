// src/components/Features.js
import React from "react";
import "./Features.css";
import makeIcon from "../Assets/makeIcon.png";
import studyIcon from "../Assets/studyIcon.png";
import trackIcon from "../Assets/trackIcon.png";
import editIcon from "../Assets/editIcon.png";
import deleteIcon from "../Assets/deleteIcon.png";

const Features = () => {
  const features = [
    { icon: makeIcon, text: "Make better flashcards" },
    { icon: studyIcon, text: "Study more efficiently" },
    { icon: trackIcon, text: "Track your progress" },
    { icon: editIcon, text: "Edit flashcards" },
    { icon: deleteIcon, text: "Delete flashcards" },
  ];

  const formatFeatureText = (text) => {
    const words = text.split(" ");
    return (
      <p>
        <span className="first-word">{words[0]}</span>
        {` ${words.slice(1).join(" ")}`}
      </p>
    );
  };

  return (
    <div className="features-container" id="features">
      <h2>Features</h2>
      <ul className="features-list">
        {features.map((feature, index) => (
          <li key={index} className="feature-item">
            <div className="feature-icon">
              <img src={feature.icon} alt={feature.text} />
            </div>
            {formatFeatureText(feature.text)}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Features;
