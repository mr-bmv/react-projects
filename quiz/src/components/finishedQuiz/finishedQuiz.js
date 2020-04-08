import React from "react";
import "./finishedQuiz.css";

const FinishedQuiz = () => {
  return (
    <div className="finished-quiz">
      <ul>
        <li>
          <strong>1</strong>
          How are you
          <i className="fa fa-times error" />
        </li>
        <li>
          <strong>1</strong>
          How are you
          <i className="fa fa-check success" />
        </li>
      </ul>
      <p>Correct 4 from 10</p>

      <button>Try again</button>
    </div>
  );
};

export default FinishedQuiz;
