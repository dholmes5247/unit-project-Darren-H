import QuestionList from '../components/QuestionList/QuestionList';
import React, { useContext, useState, useEffect } from 'react';
import { AuthContext } from '../context/AuthContext';

function Quiz() {
  const { userName, schoolName } = useContext(AuthContext);
  const [score, setScore] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);

useEffect(() => {
  if (quizFinished) {

    const leaderboard = JSON.parse(localStorage.getItem('leaderboard')) || [];

    const newEntry = {
        name: userName || 'Anonymous',
        score,
        schoolName: schoolName || 'Unknown'
      };

      const updated = [...leaderboard, newEntry];

    localStorage.setItem('leaderboard', JSON.stringify(updated));
  }
}, [quizFinished, score, userName, schoolName]);

  const handleRetakeQuiz = () => {
    setScore(0);
    setQuizFinished(false);
  };

  return (
    <section>
      <h2>BOOlean Quiz Time!</h2>

      {quizFinished ? (
        <div>
          <p>Quiz completed! Your score: {score}</p>
          <button onClick={handleRetakeQuiz}>Retake Quiz</button>
          <a href="/leaderboard" style={{ display: 'inline-block', marginLeft: '1rem' }}>
            View Leaderboard
          </a>
        </div>
      ) : (
        <QuestionList
          score={score}
          setScore={setScore}
          setQuizFinished={setQuizFinished}
        />
      )}
    </section>
  );
}

export default Quiz;

