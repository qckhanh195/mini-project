import { useState } from 'react';
import "./QuickGame.css";
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

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
  const [gameState, setGameState] = useState('start');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [answersDisabled, setAnswersDisabled] = useState(false);
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null); // Sử dụng ở đây

  const startQuiz = () => {
    setScore(0);
    setCurrentQuestionIndex(0);
    setGameState('quiz');
    setAnswersDisabled(false);
    setSelectedAnswerIndex(null);
  };

  const handleAnswerClick = (isCorrect, index) => {
    if (answersDisabled) return;

    setAnswersDisabled(true);
    setSelectedAnswerIndex(index); // Cập nhật vị trí nút vừa bấm

    if (isCorrect) {
      setScore((prev) => prev + 1);
    }

    setTimeout(() => {
      const nextIndex = currentQuestionIndex + 1;
      if (nextIndex < quizQuestions.length) {
        setCurrentQuestionIndex(nextIndex);
        setAnswersDisabled(false);
        setSelectedAnswerIndex(null); // Reset sau khi qua câu mới
      } else {
        setGameState('result');
      }
    }, 1000);
  };

  const getResultMessage = () => {
    const percentage = (score / quizQuestions.length) * 100;
    if (percentage === 100) return "Perfect! You're a genius!";
    if (percentage >= 80) return "Great job! You know your stuff!";
    if (percentage >= 60) return "Good effort! Keep learning!";
    if (percentage >= 40) return "Not bad! Try again to improve!";
    return "Keep studying! You'll get better!";
  };

  const currentQuestion = quizQuestions[currentQuestionIndex];
  const progressPercent = ((currentQuestionIndex) / quizQuestions.length) * 100;

  return (
    <>
      <Navbar />
      <main className="quick-game">
        <div className="container-game">
          
          {gameState === 'start' && (
            <div className="screen active">
              <h1>Quiz Time</h1>
              <p>Test your knowledge with these fun questions</p>
              <button onClick={startQuiz}>Start Quiz</button>
            </div>
          )}

          {gameState === 'quiz' && (
            <div className="screen active">
              <div className="quiz-header">
                <h2>{currentQuestion.question}</h2>
                <p>
                  Question <span>{currentQuestionIndex + 1}</span> of <span>{quizQuestions.length}</span>
                </p>
                <p>Score: <span>{score}</span></p>
              </div>

              <div className="answers-container">
                {currentQuestion.answers.map((answer, index) => {
                  let buttonClass = "answer-btn";
                  
                  if (answersDisabled) {
                    if (answer.correct) {
                      buttonClass += " correct";
                    } else if (index === selectedAnswerIndex) {
                      buttonClass += " incorrect";
                    }
                  }

                  if (index === selectedAnswerIndex) {
                    buttonClass += " selected";
                  }

                  return (
                    <button
                      key={index}
                      className={buttonClass}
                      onClick={() => handleAnswerClick(answer.correct, index)}
                      disabled={answersDisabled}
                    >
                      {answer.text}
                    </button>
                  );
                })}
              </div>

              <div className="progress-bar">
                <div 
                  className="progress" 
                  style={{ width: `${progressPercent}%` }}
                ></div>
              </div>
            </div>
          )}

          {gameState === 'result' && (
            <div className="screen active">
              <h1>Quiz Results</h1>
              <div className="result-info">
                <p>
                  Your scored <span>{score}</span> out of <span>{quizQuestions.length}</span>
                </p>
                <div id="result-message">{getResultMessage()}</div>
              </div>
              <button onClick={startQuiz}>Restart Quiz</button>
            </div>
          )}

        </div>
      </main>
      <Footer />
    </>
  );
};

export default QuickGame;