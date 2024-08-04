import React, { useState } from "react";
import "../Components/CSS/Flashard.css";
import initialFlashcards from "../Components/Assets/cards-data.js";
import FlashcardList from "./FlashcardList";
import FlashcardForm from "./FlashcardForm";
import { Link } from "react-router-dom";
import Footer from "./Footer/Footer.jsx";

const Flashcard = () => {
  const [showForm, setShowForm] = useState(false);
  const [editingFlashcard, setEditingFlashcard] = useState(null);
  const [flashcards, setFlashcards] = useState(() => {
    const savedFlashcards = localStorage.getItem("flashcards");
    return savedFlashcards ? JSON.parse(savedFlashcards) : initialFlashcards;
  });

  const toggleForm = () => {
    setShowForm(!showForm);
    setEditingFlashcard(null); // Reset editing state when toggling form
  };

  const handleSave = (updatedFlashcard) => {
    setFlashcards((prevFlashcards) => {
      // Find the index of the flashcard to update
      const flashcardIndex = prevFlashcards[
        updatedFlashcard.category
      ].findIndex((fc) => fc.id === updatedFlashcard.id);

      // If the flashcard exists (index !== -1), update it
      if (flashcardIndex !== -1) {
        const updatedCategoryFlashcards = [
          ...prevFlashcards[updatedFlashcard.category],
        ];
        updatedCategoryFlashcards[flashcardIndex] = updatedFlashcard;

        return {
          ...prevFlashcards,
          [updatedFlashcard.category]: updatedCategoryFlashcards,
        };
      }

      // If the flashcard doesn't exist, create a new category and add it
      return {
        ...prevFlashcards,
        [updatedFlashcard.category]: [updatedFlashcard],
      };
    });
    setEditingFlashcard(null);
    setShowForm(false);
  };

  const handleEdit = (flashcard) => {
    setEditingFlashcard(flashcard);
    setShowForm(true);
  };

  const addFlashCard = (newFlashcard) => {
    const updatedFlashcards = { ...flashcards };
    if (!updatedFlashcards[newFlashcard.category]) {
      updatedFlashcards[newFlashcard.category] = [];
    }
    updatedFlashcards[newFlashcard.category].push(newFlashcard);
    setFlashcards(updatedFlashcards);
    localStorage.setItem("flashcards", JSON.stringify(updatedFlashcards));
    alert("Flash card added");
  };

  const deleteFlashCard = (category, id) => {
    setFlashcards((prevFlashcards) => {
      // Check if the category exists
      if (!prevFlashcards[category]) {
        return prevFlashcards; // No need to update if category doesn't exist
      }

      // Filter out the flashcard to be deleted
      const updatedCategoryFlashcards = prevFlashcards[category].filter(
        (flashcard) => flashcard.id !== id
      );

      // If the category becomes empty after deletion, remove it
      if (updatedCategoryFlashcards.length === 0) {
        const updatedFlashcards = { ...prevFlashcards };
        delete updatedFlashcards[category];
        return updatedFlashcards;
      }

      // Otherwise, just update the category with the filtered flashcards
      return {
        ...prevFlashcards,
        [category]: updatedCategoryFlashcards,
      };
    });
    localStorage.setItem("flashcards", JSON.stringify(flashcards));
  };

  return (
    <div className="flashcards-container" id="flashcard">
      <h1 className="header">Flashcards</h1>

      <div className="btns">
        <div className="toggleForm" onClick={toggleForm}>
          {showForm ? "View Flashcards" : "Create New Flashcard"}
        </div>
        <span className="side-border"></span>
        <Link to="/" className="toggleForm">
          Back to Home
        </Link>
      </div>

      {showForm ? (
        <FlashcardForm
          flashcard={editingFlashcard}
          onSave={addFlashCard}
          onCancel={toggleForm}
        />
      ) : (
        <div className="flashcards">
          {Object.keys(flashcards).map((category) => (
            <div key={category} className="category">
              <h2>{category}</h2>
              {flashcards[category].map((flashcard) => (
                <FlashcardList
                  key={flashcard.id}
                  category={category}
                  question={flashcard.question}
                  answer={flashcard.answer}
                  id={flashcard.id}
                  onDelete={() => deleteFlashCard(category, flashcard.id)}
                  onEdit={() => handleEdit(flashcard)}
                />
              ))}
            </div>
          ))}
        </div>
      )}
      <Footer />
    </div>
  );
};

export default Flashcard;
