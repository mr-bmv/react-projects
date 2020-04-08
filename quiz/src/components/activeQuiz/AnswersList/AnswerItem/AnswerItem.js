import React from "react";
import "./AnswerItem.css";

const AnswerItem = ({ answer, onAnswer, answerResult }) => {
  let style = "answer-item ";
  if (answerResult) {
    style = style + answerResult;
    console.log(style);
  }
  return (
    <li className={style} onClick={onAnswer}>
      {answer.text}
    </li>
  );
};

export default AnswerItem;
