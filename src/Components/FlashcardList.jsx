import React, { useState } from "react";
import "./CSS/list.css";
import delIcon from "../Components/Assets/delIcon.png";
import bulb from "../Components/Assets/bulb.jpg";
import questionIcon from "../Components/Assets/question.png";
import edit from "../Components/Assets/edit.png";

const FlashcardList = ({
  category,
  question,
  answer,
  id,
  onDelete,
  onEdit,
}) => {
  const [flipped, setFlipped] = useState(false);
  const [quizMode, setQuizMode] = useState(false);
  const [userAnswer, setUserAnswer] = useState("");
  const [isCorrect, setIsCorrect] = useState(null);

  const handleFlip = () => {
    setFlipped(!flipped);
  };

  const startQuiz = () => {
    setQuizMode(true);
    setUserAnswer("");
    setIsCorrect(null);
  };

  const handleAnswerChange = (e) => {
    setUserAnswer(e.target.value);
  };

  const submitAnswer = () => {
    if (userAnswer.trim().toLowerCase() === answer.trim().toLowerCase()) {
      setIsCorrect(true);
    } else {
      setIsCorrect(false);
    }
  };

  return (
    <div className="flashcard-container">
      <div className="flashcard" id={id}>
        <h4>{category}</h4>
        <div className={`flashcard-content ${flipped ? "flipped" : ""}`}>
          {quizMode ? (
            <div>
              <p className="question">{question}</p>
              <input
                type="text"
                value={userAnswer}
                onChange={handleAnswerChange}
                placeholder="Your answer"
              />
              <button onClick={submitAnswer} className="start-quiz-button">
                Submit
              </button>
              {isCorrect !== null && (
                <p>{isCorrect ? "Correct!" : "Incorrect, try again."}</p>
              )}
              <button
                onClick={() => setQuizMode(false)}
                className="start-quiz-button"
              >
                Back
              </button>
            </div>
          ) : (
            <div onClick={handleFlip}>
              {flipped ? (
                <div>
                  <p className="answer">{answer}</p>
                  <div className="edit" onClick={onEdit}>
                    <img
                      src={edit}
                      alt=""
                      className="edit-icon"
                      style={{ width: "20px", height: "20px" }}
                    />
                  </div>
                  <div className="card-icons">
                    <img
                      src={delIcon}
                      alt=""
                      className="delete-icon"
                      style={{ width: "20px", height: "20px" }}
                    />
                    <img
                      src={bulb}
                      alt=""
                      className="bulb-img"
                      style={{ width: "20px", height: "20px" }}
                    />
                  </div>
                </div>
              ) : (
                <div>
                  <p className="question">{question}</p>
                  <div className="edit" onClick={onEdit}>
                    <img
                      src={edit}
                      alt=""
                      className="edit-icon"
                      style={{ width: "20px", height: "20px" }}
                    />
                  </div>
                  <div className="card-icons">
                    <img
                      src={questionIcon}
                      alt=""
                      className="quesion-style"
                      style={{ width: "20px", height: "20px" }}
                    />
                    <img
                      onClick={onDelete}
                      src={delIcon}
                      alt=""
                      className="delete-icon"
                      style={{ width: "20px", height: "20px" }}
                    />
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
        {!quizMode && (
          <button onClick={startQuiz} className="start-quiz-button">
            Start Quiz
          </button>
        )}
      </div>
    </div>
  );
};

export default FlashcardList;
