import { useState, useEffect } from 'react';
import "./QuickGame.css";
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const QuickGame = () => {
  const [questions, setQuestions] = useState([]);
  const [gameState, setGameState] = useState('start');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [answersDisabled, setAnswersDisabled] = useState(false);
  const [selectedAnswerIndex, setSelectedAnswerIndex] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/QuickGame/questions.json')
      .then((response) => response.json())
      .then((data) => {
        setQuestions(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Lỗi khi tải câu hỏi:", error);
        setLoading(false);
      });
  }, []);

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
    setSelectedAnswerIndex(index);

    if (isCorrect) setScore((prev) => prev + 1);

    setTimeout(() => {
      const nextIndex = currentQuestionIndex + 1;
      if (nextIndex < questions.length) {
        setCurrentQuestionIndex(nextIndex);
        setAnswersDisabled(false);
        setSelectedAnswerIndex(null);
      } else {
        setGameState('result');
      }
    }, 1000);
  };

  if (loading) return <div className="quick-game">Đang tải câu hỏi...</div>;
  if (questions.length === 0) return <div className="quick-game">Không tìm thấy câu hỏi.</div>;

  const currentQuestion = questions[currentQuestionIndex];
  const progressPercent = (currentQuestionIndex / questions.length) * 100;

  return (
    <>
      <Navbar />
      <main className="quick-game">
        <div className="container-game">
          {gameState === 'start' && (
            <div className="screen active">
              <h1>Quiz Game</h1>
              <p>Kiểm tra kiến thức của bạn bằng các câu hỏi !</p>
              <button onClick={startQuiz}>Start Quiz</button>
            </div>
          )}

          {gameState === 'quiz' && (
            <div className="screen active">
              <div className="quiz-header">
                <h2>{currentQuestion.question}</h2>
                <p>
                  Question <span>{currentQuestionIndex + 1}</span> of <span>{questions.length}</span>
                </p>
                <p>Score: <span>{score}</span></p>
              </div>

              <div className="answers-container">
                {currentQuestion.answers.map((answer, index) => {
                  let buttonClass = "answer-btn";
                  if (answersDisabled) {
                    if (answer.correct) buttonClass += " correct";
                    else if (index === selectedAnswerIndex) buttonClass += " incorrect";
                  }
                  if (index === selectedAnswerIndex) buttonClass += " selected";

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
                <div className="progress" style={{ width: `${progressPercent}%` }}></div>
              </div>
            </div>
          )}

          {gameState === 'result' && (
            <div className="screen active">
              <h1>Quiz Results</h1>
              <div className="result-info">
                <p>Your scored <span>{score}</span> out of <span>{questions.length}</span></p>
                <div id="result-message">
                    {(score / questions.length) * 100 >= 80 ? "Great job!" : "Keep trying!"}
                </div>
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