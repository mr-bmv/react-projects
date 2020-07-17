import axios from '../../axios/axios-quiz';
import { FETCH_QUIZES_START, FETCH_QUIZES_SUCCESS, FETCH_QUIZES_ERROR, FETCH_QUIZE_SUCCESS, QUIZ_SET_STATE, FINISH_QUIZ, QUIZ_NEXT_QUESTION, RETRY_QUIZ } from './actionTypes';

export const fetchQuizes = () => {
    return async dispatch => {
        dispatch(fetchQuizesStart())
        try {
            const response = await axios.get("tests.json");
            // console.log(response.data);
            const tests = [];
            Object.keys(response.data).forEach((id, index) => {
                tests.push({
                    id,
                    name: `Test ${index + 1}`,
                });
            });
            dispatch(fetchQuizesSuccess(tests))
        } catch (error) {
            dispatch(fetchQuizesError(error))
        }
    }
}

export const fetchQuizesStart = () => {
    return {
        type: FETCH_QUIZES_START
    }
}

export const fetchQuizesSuccess = (tests) => {
    return {
        type: FETCH_QUIZES_SUCCESS,
        tests
    }
}

export const fetchQuizesError = (error) => {
    return {
        type: FETCH_QUIZES_ERROR,
        error
    }
}

export const fetchQuizSuccess = (quiz) => {
    return {
        type: FETCH_QUIZE_SUCCESS,
        quiz
    }
}

export const fetchQuizById = (quizId) => {
    return async dispatch => {
        // to change loading on true
        dispatch(fetchQuizesStart());
        try {
            const response = await axios.get(
                `/tests/${quizId}.json`
            );
            const quiz = response.data;

            dispatch(fetchQuizSuccess(quiz))
        } catch (error) {
            dispatch(fetchQuizesError(error))
        }
    }
}

export const quizSetState = (answerResult, quizResult) => {
    return {
        type: QUIZ_SET_STATE,
        answerResult, quizResult
    }
}

export const finishQuiz = () => {
    return {
        type: FINISH_QUIZ
    }
}

export const quizNextQuestion = (number) => {
    return {
        type: QUIZ_NEXT_QUESTION,
        number
    }
}

export const quizAnswerClick = (answerId) => {
    // dispatch without async because we do NOT work with server
    //  we works we state and for it we need to use `getState`
    return (dispatch, getState) => {
        const state = getState().quiz

        // there is a setTimeout here and if we will click double time on correct
        // answer we will select answer from next question. To prevent it
        // we need to check
        if (state.answerResult) {
            const key = Object.keys(state.answerResult)[0];
            if (state.answerResult[key] === "success") {
                return;
            }
        }
        const question = state.quiz[state.activeQuestion];

        // TODO
        // STRANGE SOLUTION LOOKS ON IT LATER
        const quizResult = state.quizResult;
        if (question.rightAnswerId === answerId) {
            if (!quizResult[question.id]) {
                quizResult[question.id] = "success";
            }
            dispatch(quizSetState({ [answerId]: "success" }, quizResult))
            // this.setState({
            //     answerResult: { [answerId]: "success" },
            //     quizResult,
            // });

            const timeout = window.setTimeout(() => {
                if (isQuizFinished(state)) {
                    dispatch(finishQuiz())
                    // this.setState({ isFinished: true });
                } else {
                    // this.setState(({ activeQuestion }) => {
                    //     return { activeQuestion: activeQuestion + 1, answerResult: null };
                    // });
                    dispatch(quizNextQuestion(state.activeQuestion + 1))
                }
                window.clearTimeout(timeout);
            }, 1000);
        } else {
            quizResult[question.id] = "error";
            dispatch(quizSetState({ [answerId]: "error" }, quizResult))
            // this.setState({
            //     answerResult: { [answerId]: "error" },
            //     quizResult,
            // });
        }
    }
}

const isQuizFinished = (state) => {
    return state.activeQuestion + 1 === state.quiz.length;
}

export const retryQuiz = () => {
    return {
        type: RETRY_QUIZ
    }
}