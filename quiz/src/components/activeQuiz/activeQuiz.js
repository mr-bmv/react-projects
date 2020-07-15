import React from "react";
import "./activeQuiz.css";
import AnswersList from "./AnswersList/AnswersList";

// this component won't be rework with `redux` because it don't contain any logic, just UI parts
const ActiveQuiz = ({
    question,
    answers,
    onAnswer,
    quizLength,
    questionNumber,
    answerResult,
}) => {
    return (
        <div className="active-quiz">
            <p className="question">
                <span>
                    <strong> {questionNumber}. </strong>&nbsp; {question}
                </span>
                <small>
                    {questionNumber} from {quizLength}
                </small>
            </p>
            <AnswersList
                answers={answers}
                onAnswer={onAnswer}
                answerResult={answerResult}
            />
        </div>
    );
};

export default ActiveQuiz;
