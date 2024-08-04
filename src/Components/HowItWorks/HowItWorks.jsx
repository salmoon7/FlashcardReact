// src/components/HowItWorks.js
import React from "react";
import "./HowItWorks.css";

const HowItWorks = () => (
  <section id="howitworks" className="how-it-works">
    <h2>How It Works</h2>
    <div className="steps">
      <div className="step" id="step-1">
        <div className="step-number">1</div>
        <h3>
          <span className="highlight">Create</span> your flashcards with ease.
        </h3>
      </div>
      <div className="step" id="step-2">
        <div className="step-number">2</div>
        <h3>
          <span className="highlight">Review</span> and edit your flashcards
          anytime.
        </h3>
      </div>
      <div className="step" id="step-3">
        <div className="step-number">3</div>
        <h3>
          <span className="highlight">Quiz</span> your knowledge with our
          interactive quizzes.
        </h3>
      </div>
    </div>
  </section>
);

export default HowItWorks;
