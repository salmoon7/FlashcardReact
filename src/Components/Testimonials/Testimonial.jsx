import React from "react";
import "./testimonial.css";
import what1 from "../Assets/what1.jpg";
import what2 from "../Assets/what2.jpg";
import what3 from "../Assets/what3.jpg";
import what4 from "../Assets/what4.jpg";
import what9 from "../Assets/what9.jpg";

const testimonialsData = [
  {
    name: "Mustapha Sodiq",
    school: "Senior School Student",
    testimonial:
      "Brine Flashcard has revolutionized my study habits! I can easily create and review flashcards, making exam prep a breeze.",
    image: what1,
  },
  {
    name: "Amina Usman",
    school: "College Freshman",
    testimonial:
      "The interactive features and ease of use have made studying much more efficient. I highly recommend Brine Flashcard to all students!",
    image: what2,
  },
  {
    name: "Hassan Ibrahim",
    school: "Junior Secondary Student",
    testimonial:
      "Brine Flashcard has helped me improve my grades significantly. It's so much fun to use and very effective!",
    image: what3,
  },
  {
    name: "Fatima Abubakar",
    school: "High School Junior",
    testimonial:
      "I love how I can organize my study materials and quiz myself with Brine Flashcard. It's the best study tool I've ever used!",
    image: what4,
  },
  {
    name: "Zainab Aliyu",
    school: "University sophomore",
    testimonial:
      "An excellent resource for studying. The ability to categorize flashcards makes it easy to organize my studies.",
    image: what9,
  },
];

const Testimonials = () => {
  return (
    <div className="testimonials-section" id="testimonials">
      <h2>OUR TESTIMONIALS</h2>
      <div className="testimonials-container">
        {testimonialsData.map((testimonial, index) => (
          <div className="testimonial" key={index}>
            <p>"{testimonial.testimonial}"</p>
            <div className="user-details">
              <img src={testimonial.image} alt={testimonial.name} />
              <div>
                <h3>{testimonial.name}</h3>
                <h4>{testimonial.school}</h4>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
