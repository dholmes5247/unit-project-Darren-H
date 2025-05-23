import { useState } from 'react';
import QuestionItem from '../QuestionItem/QuestionItem';
import './QuestionList.css';

const questionBank = [
  { id: 1, text: "The `let` keyword allows block-scoped variables.", answer: true },
  { id: 2, text: "JavaScript is a compiled language.", answer: false },
  { id: 3, text: "JavaScript does NOT use Implicit Conversion.", answer: false },
  { id: 4, text: "A boolean represents a true or false logical value.", answer: true },
  { id: 5, text: "Void tags always need a closing tag.", answer: false },
  { id: 6, text: " The <div> tag is a generic container for grouping elements.", answer: true },
  { id: 7, text: "It's a Best practice to place any <script> before closing </body> (thinkPageLoad).", answer: true },
  { id: 8, text: "Semantic tags like <section> improve search engine optimization?", answer: true },
  { id: 9, text: "JSON is not universally readable and is language specific.", answer: false },
];

function QuestionList({ score, setScore, setQuizFinished }) {
  const [current, setCurrent] = useState(0);
  const [answered, setAnswered] = useState(false);
  const [userAnswer, setUserAnswer] = useState(null);

  const currentQuestion = questionBank[current];

  const handleAnswer = (answer) => {
    setUserAnswer(answer);
    setAnswered(true);
    if (answer === currentQuestion.answer) {
      setScore(prev => prev + 1);
    }
  };

  const nextQuestion = () => {
    const next = current + 1;
    if (next < questionBank.length) {
      setCurrent(next);
      setAnswered(false);
      setUserAnswer(null);
    } else {
      // ✅ Final question reached — mark quiz as complete
      setQuizFinished(true);
    }
  };

  return (
    <div className="question-list">
      <div className="quiz-status">
        <p>Question {current + 1} of {questionBank.length}</p>
        <p>Score: {score}</p>
      </div>

      <QuestionItem
        question={currentQuestion}
        onAnswer={handleAnswer}
        isAnswered={answered}
        userAnswer={userAnswer}
      />

      {answered && (
        <button className="next-button" onClick={nextQuestion}>
          {current === questionBank.length - 1 ? 'Finish' : 'Next'}
        </button>
      )}
    </div>
  );
}

export default QuestionList;

