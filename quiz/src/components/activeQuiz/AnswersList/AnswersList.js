import React from "react";
import AnswerItem from "./AnswerItem/AnswerItem";
import "./AnswersList.css";

const AnswersList = ({ answers, onAnswer, answerResult }) => {
  return (
    <ul className="answers-list">
      {answers.map((answer) => {
        return (
          <AnswerItem
            key={answer.id}
            answer={answer}
            onAnswer={() => onAnswer(answer.id)}
            answerResult={answerResult ? answerResult[answer.id] : null}
          />
        );
      })}
    </ul>
  );
};

export default AnswersList;
