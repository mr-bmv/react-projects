import React from "react";
import "./activeQuiz.css";

const ActiveQuiz = () => {
  return (
    <div className="active-quiz">
      <p className="question">
        <span>
          <strong> 2. </strong>&nbsp; ?Question here?
        </span>
        <small>4 from 13</small>
      </p>
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
        <li>4</li>
      </ul>
    </div>
  );
};

export default ActiveQuiz;
