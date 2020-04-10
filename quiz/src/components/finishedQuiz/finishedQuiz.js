import React from "react";
import "./finishedQuiz.css";
import Quiz from "../../containers/quiz/quiz";
import Button from "../UI/button/button";

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

      <Button onClick={reTry}>
        Retry
      </Button>
      <Button onClick={reTry} type="success">
        Success
      </Button>
      <Button onClick={reTry} type="error">
        Error
      </Button>
    </div>
  );
};

export default FinishedQuiz;
