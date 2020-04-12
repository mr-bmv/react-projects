import React from "react";
import "./finishedQuiz.css";
import Button from "../UI/button/button";
import { Link } from "react-router-dom";

const FinishedQuiz = ({ result, quiz, reTry }) => {
  const rightAnswers = Object.values(result).filter(
    (item) => item === "success"
  ).length;

  return (
    <div className="finished-quiz">
      <ul>
        {quiz.map((quizItem) => {
          const style = "fa ";
          const cls =
            result[quizItem.id] === "error"
              ? "fa-times error"
              : "fa-check success";
          return (
            <li key={quizItem.id}>
              <strong>{quizItem.id}.</strong>&nbsp;
              {quizItem.question}
              <i className={style + cls} />
            </li>
          );
        })}
      </ul>
      <p>
        Correct {rightAnswers} from {quiz.length}
      </p>

      <Button onClick={reTry}>Retry</Button>
      <Link to="/">
        <Button type="success">Quiz List</Button>
      </Link>

      {/* <Button onClick={reTry} type="error">
        Error
      </Button> */}
    </div>
  );
};

export default FinishedQuiz;
