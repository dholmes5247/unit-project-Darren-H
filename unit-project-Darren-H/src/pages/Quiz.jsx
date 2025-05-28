import QuestionList from '../components/QuestionList/QuestionList';
import React, { useContext, useState, useEffect } from 'react';
import { AuthContext } from '../context/AuthContext';
import './Quiz.css'; 

function Quiz() {
  const { userName, schoolName } = useContext(AuthContext); // take user imfo from AuthContext
  const [score, setScore] = useState(0);  // Score state
  const [quizFinished, setQuizFinished] = useState(false); // quiz complete state

// useEffect will run at quizFinished, score, UserName, or schoolName changes

useEffect(() => {
  if (quizFinished) {

    const leaderboard = JSON.parse(localStorage.getItem('leaderboard')) || []; // get existing leaderboard or empty array

// Create new leaderboard entry
    const newEntry = {
        name: userName || 'Anonymous',
        score,
        schoolName: schoolName || 'Unknown'
      };

      const updated = [...leaderboard, newEntry];  // Add new entry to the leaderboard

    localStorage.setItem('leaderboard', JSON.stringify(updated)); // Save updated leaderboard to localStorage
  }
}, [quizFinished, score, userName, schoolName]);

  
// Function resets quiz state
const handleRetakeQuiz = () => {
    setScore(0);
    setQuizFinished(false);
  };

  return (
    <section className="quiz-page">
      <h2 className='quiz-header'>Boolean || Learning!</h2>
      <br/>

{/* Show completion screen if quiz is finished */}

      {quizFinished ? (
        <div className='quiz-goodbye'>
          <p>Felicitaions, {userName}, Quiz completed!<br /> You had: <b>{score}</b>, answers Correct!</p>
          <br/>
          <br/>

          <button onClick={handleRetakeQuiz}>Retake Quiz?</button>
          <a href="/leaderboard" 
            className="button-link">
            View Leaderboard
          </a>
         
        </div>

      ) : (  // If quiz not finished, render QuestionList
        <QuestionList
          score={score}
          setScore={setScore}
          setQuizFinished={setQuizFinished}
        />

      )}

      <br/>
      <br/>

    </section>
  
  );
}

export default Quiz;

