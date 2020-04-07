import React from "react";

const AnswerItem = ({ answer, onAnswer }) => {
  return (
    <li className="answer-item" onClick={onAnswer}>
      {answer.text}
    </li>
  );
};

export default AnswerItem;
