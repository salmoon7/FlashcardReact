// src/components/Footer.js
import React from "react";
import "./Footer.css";

const Footer = () => (
  <footer id="about" className="footer">
    <div className="footer-content">
      <div className="footer-section">
        <h4>About Us</h4>
        <p>
          We are dedicated to helping you create, review, and master flashcards
          for effective learning.
        </p>
      </div>
      <div className="footer-section">
        <h4>Quick Links</h4>
        <ul>
          <li>
            <a href="#hero">Home</a>
          </li>
          <li>
            <a href="#features">Features</a>
          </li>
          <li>
            <a href="#how-it-works">How It Works</a>
          </li>
          <li>
            <a href="#flashcard">Make FlashCards</a>
          </li>
        </ul>
      </div>
      <div className="footer-section">
        <h4>Contact Us</h4>
        <p>Email: support@flashcard.com</p>
        <p>Phone: +123 456 7890</p>
      </div>
      <div className="footer-section">
        <h4>Follow Us</h4>
        <div className="social-icons">
          <a href="#">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
      </div>
    </div>
    <div className="footer-bottom">
      <p>&copy; 2024 Brine Flashcard Website. All rights reserved.</p>
    </div>
  </footer>
);

export default Footer;
