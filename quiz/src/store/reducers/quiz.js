import { FETCH_QIZES_START, FETCH_QIZES_SUCCESS, FETCH_QIZES_ERROR } from "../actions/actionTypes"

const initialState = {
    tests: [],
    loading: false,
    error: null
}

export default function quizReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_QIZES_START:
            return {
                ...state, loading: true
            }
        case FETCH_QIZES_SUCCESS:
            return {
                ...state, loading: false, tests: action.tests
            }
        case FETCH_QIZES_ERROR:
            return {
                ...state, loading: false, error: action.error
            }

        default:
            return state
    }
}