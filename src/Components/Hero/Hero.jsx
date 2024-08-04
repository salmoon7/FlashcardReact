import React from "react";
import "./Hero.css";
import hero from "../Assets/hero.png";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div id="hero" className="hero-container">
      <div className="hero-overlay"></div>
      <div className="hero-content">
        <h1>
          Welcome to <br></br>Brine FlashCard
        </h1>
        <p>
          Your ultimate tool for efficient{" "}
          <span style={{ color: "#3d0066" }}>learning and retention.</span>
        </p>
        <Link to="/flashcards" className="get-started-btn">
          Get Started
        </Link>
      </div>
    </div>
  );
};

export default Hero;
