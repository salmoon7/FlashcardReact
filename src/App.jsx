import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Components/Header/Header";
import Hero from "./Components/Hero/Hero";
import Features from "./Components/Features/Features";
import HowItWorks from "./Components/HowItWorks/HowItWorks";
import Footer from "./Components/Footer/Footer";

import Flashcard from "./Components/Flashcard";
import Testimonials from "./Components/Testimonials/Testimonial";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Features />
              <HowItWorks />
              <Testimonials />
              <Footer />
            </>
          }
        />
        <Route path="/flashcards" element={<Flashcard />} />
      </Routes>
    </Router>
  );
};

export default App;
