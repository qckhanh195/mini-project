import React, { useState } from "react";
import "./QuickGame.css";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

const quizQuestions = [
  {
    question: "What is the capital of France?",
    answers: [
      { text: "London", correct: false },
      { text: "Berlin", correct: false },
      { text: "Paris", correct: true },
      { text: "Madrid", correct: false },
    ],
  },
  {
    question: "Which planet is known as the Red Planet?",
    answers: [
      { text: "Venus", correct: false },
      { text: "Mars", correct: true },
      { text: "Jupiter", correct: false },
      { text: "Saturn", correct: false },
    ],
  },
  {
    question: "What is the largest ocean on Earth?",
    answers: [
      { text: "Atlantic Ocean", correct: false },
      { text: "Indian Ocean", correct: false },
      { text: "Arctic Ocean", correct: false },
      { text: "Pacific Ocean", correct: true },
    ],
  },
  {
    question: "Which of these is NOT a programming language?",
    answers: [
      { text: "Java", correct: false },
      { text: "Python", correct: false },
      { text: "Banana", correct: true },
      { text: "JavaScript", correct: false },
    ],
  },
  {
    question: "What is the chemical symbol for gold?",
    answers: [
      { text: "Go", correct: false },
      { text: "Gd", correct: false },
      { text: "Au", correct: true },
      { text: "Ag", correct: false },
    ],
  },
];

const QuickGame = () => {
  const [gameState, setGameState] = use('start');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);


  const startQuiz = () =>{

  }
  return (
    <>
      <Navbar />
      <main class="quick-game">
        <div className="container-game">
          <div class="screen active" id="start-screen">
            <h1>Quiz Time</h1>
            <p>Test your knowleadge with these fun questions</p>
            <button id="start-btn">Start Quiz</button>
          </div>
          <div class="screen" id="quiz-screen">
            <div class="quiz-header">
              <h2 id="question-text">Question goes here</h2>
              <p>
                Question <span id="current-question">1</span> of
                <span id="total-questions">5</span>
              </p>
              <p>
                Score: <span id="score">0</span>
              </p>
            </div>
            <div id="answers-container" class="answers-container"></div>
            <div class="progress-bar">
              <div id="progress" class="progress"></div>
            </div>
          </div>
          <div id="result-screen" class="screen">
            <h1>Quiz Results</h1>
            <div class="result-info">
              <p>
                Your scored <span id="final-score">0</span> out of
                <span id="max-score">5</span>
              </p>
              <div id="result-message">Good job!</div>
            </div>
            <button id="restart-btn">Restart Quiz</button>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default QuickGame;
