import React from "react";
import "./activeQuiz.css";
import AnswersList from "./AnswersList/AnswersList";

const ActiveQuiz = ({
  question,
  answers,
  onAnswer,
  quizLength,
  questionNumber,
}) => {
  return (
    <div className="active-quiz">
      <p className="question">
        <span>
          <strong> {questionNumber}. </strong>&nbsp; {question}
        </span>
        <small>
          {questionNumber} from {quizLength}
        </small>
      </p>
      <AnswersList answers={answers} onAnswer={onAnswer} />
    </div>
  );
};

export default ActiveQuiz;
