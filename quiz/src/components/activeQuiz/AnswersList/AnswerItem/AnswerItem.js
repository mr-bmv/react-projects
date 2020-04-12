import React from "react";
import "./AnswerItem.css";

const AnswerItem = ({ answer, onAnswer, answerResult }) => {
  let style = "answer-item ";
  if (answerResult) {
    style = style + answerResult;
  }
  return (
    <li className={style} onClick={onAnswer}>
      {answer.text}
    </li>
  );
};

export default AnswerItem;
