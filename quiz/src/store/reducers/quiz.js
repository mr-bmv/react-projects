import { FETCH_QUIZES_START, FETCH_QUIZES_SUCCESS, FETCH_QUIZES_ERROR, FETCH_QUIZE_SUCCESS, QUIZ_SET_STATE, FINISH_QUIZ, QUIZ_NEXT_QUESTION, RETRY_QUIZ } from "../actions/actionTypes"

const initialState = {
    tests: [],
    loading: false,
    error: null,
    quizResult: {},
    activeQuestion: 0,
    answerResult: null,
    isFinished: false,
    quiz: null
}

export default function quizReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_QUIZES_START:
            return {
                ...state, loading: true
            }
        case FETCH_QUIZES_SUCCESS:
            return {
                ...state, loading: false, tests: action.tests
            }
        case FETCH_QUIZES_ERROR:
            return {
                ...state, loading: false, error: action.error
            }
        case FETCH_QUIZE_SUCCESS:
            return {
                ...state, loading: false, quiz: action.quiz
            }
        case QUIZ_SET_STATE:
            return {
                ...state, answerResult: action.answerResult, quizResult: action.quizResult
            }

        case FINISH_QUIZ:
            return {
                ...state, isFinished: true
            }

        case QUIZ_NEXT_QUESTION:
            return {
                ...state, answerResult: null, activeQuestion: action.number
            }
        case RETRY_QUIZ:
            return {
                ...state, quizResult: {},
                activeQuestion: 0,
                answerResult: null,
                isFinished: false,
            }

        default:
            return state
    }
}