import React, { useState, useEffect } from "react";
import "./CSS/FlashCardForm.css";

const FlashCardForm = ({ flashcard, onSave, onCancel }) => {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [category, setCategory] = useState("");

  useEffect(() => {
    if (flashcard) {
      setQuestion(flashcard.question);
      setAnswer(flashcard.answer);
      setCategory(flashcard.category);
    }
  }, [flashcard]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({ ...flashcard, question, answer, category });
  };

  return (
    <div className="form-container">
      <h2>{flashcard ? "Edit Flashcard" : "Create Flashcard"}</h2>
      <form onSubmit={handleSubmit}>
        <label>Category</label>
        <input
          type="text"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
        <label>Question</label>
        <input
          type="text"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
        />
        <label>Answer</label>
        <textarea
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
        ></textarea>
        <button type="submit" className="create-button">
          {flashcard ? "Update" : "Create"}
        </button>
        <button type="button" onClick={onCancel} className="create-button">
          Cancel
        </button>
      </form>
    </div>
  );
};

export default FlashCardForm;
