import React from "react";
import "./activeQuiz.css";
import AnswersList from "./AnswersList/AnswersList";

const ActiveQuiz = ({ answers }) => {
  return (
    <div className="active-quiz">
      <p className="question">
        <span>
          <strong> 2. </strong>&nbsp; ?Question here?
        </span>
        <small>4 from 13</small>
      </p>
      <AnswersList answers={answers} />
    </div>
  );
};

export default ActiveQuiz;
