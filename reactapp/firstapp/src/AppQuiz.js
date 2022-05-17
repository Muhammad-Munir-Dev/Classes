import React, { useState } from 'react';
import "./quiz.css";
import "./App.css";

function App() {
  const questions = [
    {
      questionText: 'Who is Current PM of Pakistan?',
      answerOptions: [
        { answerText: 'Nawaz Sharif', isCorrect: false },
        { answerText: 'Imran Khan', isCorrect: false },
        { answerText: 'Asif Zardari', isCorrect: false },
        { answerText: 'Shehbaz Sharif', isCorrect: true },
      ],
    },
    {
      questionText: 'Who is the captain of Pakistan Team?',
      answerOptions: [
        { answerText: 'Sarfraz Ahmed', isCorrect: false },
        { answerText: 'Babar Azam', isCorrect: true },
        { answerText: 'Muhammad Rizwan', isCorrect: false },
        { answerText: 'Shadad Khan', isCorrect: false },
      ],
    },
    {
      questionText: 'What is the capital of Pakistan?',
      answerOptions: [
        { answerText: 'Karachi', isCorrect: false },
        { answerText: 'Lahore', isCorrect: false },
        { answerText: 'Islamabad', isCorrect: true },
        { answerText: 'Peshawar', isCorrect: false },
      ],
    },
    {
      questionText: 'React was initialy release on ?',
      answerOptions: [
        { answerText: 'May 29, 2011', isCorrect: false },
        { answerText: 'May 29, 2012', isCorrect: false },
        { answerText: 'May 29, 2013', isCorrect: true },
        { answerText: 'May 29, 2014', isCorrect: false },
      ],
    },
  ];
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };
  return (
    <div className='app'>
      {showScore ? (
        <div className='score-section'>
          You scored {score} out of {questions.length}
        </div>
      ) : (
        <>
          <div className='question-section'>
            <div className='question-count'>
              <span>Question {currentQuestion + 1}</span>/{questions.length}
            </div>
            <div className='question-text'>{questions[currentQuestion].questionText}</div>
          </div>
          <div className='answer-section'>
            {questions[currentQuestion].answerOptions.map((answerOption) => (
              <button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default App;