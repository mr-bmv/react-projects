import React from "react";
import classes from "./AnswersList.css";
import AnswerItem from "./AnswerItem/AnswerItem";

const AnswersList = (props) => {
  return (
    <ul className="answers-list">
      {props.answers.map((answer, index) => {
        return <AnswerItem key={index} answer={answer} />;
      })}
    </ul>
  );
};

export default AnswersList;
