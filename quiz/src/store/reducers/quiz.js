import { FETCH_QUIZES_START, FETCH_QUIZES_SUCCESS, FETCH_QUIZES_ERROR, FETCH_QUIZE_SUCCESS } from "../actions/actionTypes"

const initialState = {
    tests: [],
    loading: false,
    error: null, quizResult: {},
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

        default:
            return state
    }
}